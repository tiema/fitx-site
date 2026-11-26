// Sign-up relay: receives the website form as JSON and adds one row to a Feishu Bitable.
// It exists because the Feishu app secret must never be shipped to the browser.
// Needs Node 18+ and no dependencies. Run: node server.mjs
//
// Environment variables:
//   FEISHU_APP_ID, FEISHU_APP_SECRET   credentials of the Feishu custom app
//   FEISHU_APP_TOKEN, FEISHU_TABLE_ID  the Bitable and table that store sign-ups
//   ALLOWED_ORIGIN                     site origin allowed to post, e.g. https://tiema.github.io
//   PORT                               defaults to 9000 (what Tencent Cloud web functions expect)
//
// The table needs these text columns: Name, Email, Company, Role, Language, Source, Submitted At
import http from 'node:http';

const env = process.env;
const API = env.FEISHU_API_BASE || 'https://open.feishu.cn/open-apis';
const ORIGIN = env.ALLOWED_ORIGIN || '';
const ROLES = ['player', 'developer', 'retail', 'media', 'investor', 'other'];

let token = { value: '', expiresAt: 0 };
async function tenantToken() {
  if (Date.now() < token.expiresAt) return token.value;
  const res = await fetch(`${API}/auth/v3/tenant_access_token/internal`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ app_id: env.FEISHU_APP_ID, app_secret: env.FEISHU_APP_SECRET }),
  });
  const data = await res.json();
  if (data.code !== 0) throw new Error(`Feishu auth failed: ${data.code} ${data.msg}`);
  token = { value: data.tenant_access_token, expiresAt: Date.now() + (data.expire - 300) * 1000 };
  return token.value;
}

async function addRecord(fields) {
  const url = `${API}/bitable/v1/apps/${env.FEISHU_APP_TOKEN}/tables/${env.FEISHU_TABLE_ID}/records`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${await tenantToken()}` },
    body: JSON.stringify({ fields }),
  });
  const data = await res.json();
  if (data.code !== 0) throw new Error(`Feishu write failed: ${data.code} ${data.msg}`);
}

const clean = (v, max) => String(v ?? '').trim().slice(0, max);

function send(res, status, body) {
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': ORIGIN,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  });
  res.end(JSON.stringify(body));
}

http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') return send(res, 204, {});
  if (req.method !== 'POST') return send(res, 405, { ok: false, error: 'method' });
  if (ORIGIN && req.headers.origin !== ORIGIN) return send(res, 403, { ok: false, error: 'origin' });

  let raw = '';
  for await (const chunk of req) {
    raw += chunk;
    if (raw.length > 10_000) return send(res, 413, { ok: false, error: 'too large' });
  }
  let body;
  try { body = JSON.parse(raw); } catch { return send(res, 400, { ok: false, error: 'json' }); }

  const name = clean(body.name, 80), email = clean(body.email, 120), role = clean(body.role, 20);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !ROLES.includes(role)) {
    return send(res, 400, { ok: false, error: 'invalid' });
  }
  try {
    await addRecord({
      Name: name, Email: email, Company: clean(body.company, 120), Role: role,
      Language: clean(body.lang, 5), Source: clean(body.source, 40), 'Submitted At': new Date().toISOString(),
    });
    send(res, 200, { ok: true });
  } catch (err) {
    console.error(err);
    send(res, 502, { ok: false, error: 'upstream' });
  }
}).listen(Number(env.PORT) || 9000);
