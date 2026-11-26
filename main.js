(() => {
  document.documentElement.classList.add('js');

  /* ---------- i18n: Chinese lives in the HTML, English here ---------- */
  const EN = {
    'skip': 'Skip to content',
    'nav.tech': 'Technology', 'nav.evo': 'EVO', 'nav.platform': 'Developers', 'nav.about': 'About', 'nav.contact': 'Contact', 'nav.cta': 'Sign up',
    'hero.eyebrow': 'CES 2027 · Jan 6–9 · Las Vegas',
    'hero.title': 'Motion play, made part of everyday family life',
    'hero.lead': 'No controllers. No wearables. Step in front of the screen and your body is the controller. FitX builds its own spatial intelligence engine to turn the living room into a playground for the whole family.',
    'hero.cta1': 'Book a demo at CES', 'hero.cta2': 'Meet EVO',
    'stat.1': 'Real-time tracking', 'stat.2': 'Pose estimation error', 'stat.3': 'On-device. Video never leaves home', 'stat.4u': ' players', 'stat.4': 'On one screen',
    'tech.eyebrow': 'Core technology', 'tech.title': 'The FitX Spatial Intelligence Engine',
    'tech.sub': 'Motion gaming has long been held back by sensing: controllers guess, and pro motion capture costs too much. We rebuilt the algorithms from the ground up, so one ordinary camera can understand the whole body.',
    'tech.c1.t': 'Full-body pose, in real time',
    'tech.c1.d': 'Full-body keypoint tracking from fingertips to toes, at over 120 FPS with under 3 cm of error. Wave, squat or jump, and the game responds instantly.',
    'tech.c2.t': 'Everything runs on the device',
    'tech.c2.d': 'All computation happens locally. Camera footage never leaves your home, which means lower latency and more peace of mind.',
    'tech.c3.t': 'One screen, the whole family',
    'tech.c3.d': 'Tracks several players at once, so adults and kids can each move their own way. Play side by side or online.',
    'tech.note': 'In late 2024, the team’s algorithms ranked at the top of several world-class 3D pose estimation leaderboards.',
    'evo.eyebrow': 'Flagship product', 'evo.title': 'EVO: the living-room console for everyone',
    'evo.sub': 'A phone-sized device that sits in front of your TV. EVO brings together AI motion intelligence, original interactive games and a shared family space, so anyone can jump in.',
    'evo.p1.t': 'Easy to start', 'evo.p1.d': 'No wearables. No setup. Step up and play.',
    'evo.p2.t': 'Natural interaction', 'evo.p2.d': 'Real movement drives the game. Immersion comes from your own body.',
    'evo.p3.t': 'Always something new', 'evo.p3.d': 'Original games and experiences keep arriving.',
    'evo.games': 'Six ways to play, for every family moment',
    'g.1': 'Party & Pranks', 'g.2': 'Rhythm & Dance', 'g.3': 'Competitive Challenges', 'g.4': 'Fitness & Sports', 'g.5': 'Adventure & Action', 'g.6': 'Casual Fun',
    'evo.more': 'Visit the EVO product site at fitx.games →',
    'plat.eyebrow': 'Open platform', 'plat.title': 'Motion intelligence for every creator',
    'plat.sub': 'Hardware is the way in; the platform is the long-term value. We package our engine as an SDK, so small teams can build great motion experiences without writing the algorithms themselves.',
    'plat.cta': 'Become a partner',
    'plat.l1.t': 'FitX SDK', 'plat.l1.d': 'Subscribe to full-body pose tracking. Ship on mobile first, then extend to the living room.',
    'plat.l2.t': 'Fit-OS', 'plat.l2.d': 'A spatial intelligence agent platform for the living room, and the system foundation behind EVO.',
    'plat.l3.t': 'Who we are looking for', 'plat.l3.d': 'Game developers, creative studios, IP holders and AI teams. Let’s define the next generation of interactive entertainment together.',
    'about.eyebrow': 'About us', 'about.title': 'Bringing joyful real-world interaction back into everyday life',
    'about.sub': 'FitX Technology was founded in 2025 and is based in Nanshan, Shenzhen. The founding team combines AI scientists and games industry veterans. Founder and CEO Dr. Jiaze Wang earned his PhD at The Chinese University of Hong Kong, researching 3D vision and spatial intelligence. From four founders, we have grown to a team of nearly fifty.',
    'tl.1': 'Algorithms lead several world-class 3D pose estimation leaderboards',
    'tl.2': 'Company founded in Shenzhen, starting with a mobile app and SDK',
    'tl.3': 'Invited to the ChinaJoy Next Play innovation zone',
    'tl.4': 'Closed an angel round of tens of millions of US dollars',
    'tl.5': 'EVO makes its debut at CES',
    'inv.title': 'Backed by', 'inv.1': 'Yuansheng Capital', 'inv.2': 'Jiangyuan Investment', 'inv.3': 'Dayone Capital', 'inv.4': 'Fengling Capital',
    'ct.eyebrow': 'Contact', 'ct.title': 'Let’s create the future of play together',
    'ct.biz': 'Business & partnerships', 'ct.jobs': 'Careers',
    'ct.jobs.d': 'Want to build this with us? Email your résumé and tell us the role you have in mind.',
    'ct.addr': 'Address', 'ct.addr.d': 'Nanshan District, Shenzhen, China',
    'su.title': 'See you at CES 2027',
    'su.desc': 'We will be in Las Vegas on January 6–9. Leave your details to book a hands-on EVO demo, and be first to get closed beta access and product news.',
    'su.booth': 'Booth details coming soon',
    'su.name': 'Name', 'su.email': 'Email', 'su.company': 'Company (optional)', 'su.role': 'I am a',
    'r.0': 'Select one', 'r.1': 'Player or family', 'r.2': 'Game developer or studio', 'r.3': 'Retail or distribution', 'r.4': 'Media', 'r.5': 'Investor', 'r.6': 'Other',
    'su.consent': 'I agree that FitX may contact me about CES and product updates.',
    'su.btn': 'Sign up',
    'msg.name': 'Please enter your name.',
    'msg.role': 'Please tell us who you are.',
    'msg.consent': 'Please tick the box so we can contact you.',
    'msg.sending': 'Sending…',
    'msg.done': 'You are signed up. See you at CES!',
    'msg.fail': 'Something went wrong. Please try again, or email info@fitx.games.',
    'msg.bad': 'Please enter a valid email address.',
    'msg.ok': 'Your email app should now open with the request ready to send.',
    'title': 'FitX | AI Interactive Entertainment Platform',
  };
  const ZH = {
    'msg.bad': '请输入有效的邮箱地址。', 'msg.ok': '已为你打开邮件应用，发送即可完成报名。',
    'msg.name': '请填写姓名。', 'msg.role': '请选择你的身份。', 'msg.consent': '请勾选同意，方便我们联系你。',
    'msg.sending': '提交中…', 'msg.done': '报名成功，CES 见！', 'msg.fail': '提交失败，请稍后重试，或直接发邮件到 info@fitx.games。',
    'title': document.title,
  };
  const cfg = window.FITX_CONFIG || {};
  const boothEl = document.getElementById('booth');
  const nodes = [...document.querySelectorAll('[data-i18n]')];
  nodes.forEach(n => { ZH[n.dataset.i18n] = n.textContent; });

  let lang = 'zh';
  const t = key => (lang === 'en' ? EN : ZH)[key] ?? ZH[key];
  const langBtn = document.getElementById('langBtn');
  const msg = document.getElementById('signupMsg');

  function setLang(next) {
    lang = next;
    nodes.forEach(n => { n.textContent = t(n.dataset.i18n); });
    if (cfg.booth) boothEl.textContent = cfg.booth;
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
    document.title = t('title');
    langBtn.textContent = lang === 'en' ? '中文' : 'EN';
    msg.textContent = '';
    try { localStorage.setItem('fitx-lang', lang); } catch {}
  }
  langBtn.addEventListener('click', () => setLang(lang === 'en' ? 'zh' : 'en'));

  let saved = null;
  try { saved = localStorage.getItem('fitx-lang'); } catch {}
  const fromUrl = new URLSearchParams(location.search).get('lang');
  setLang((fromUrl || saved) === 'zh' ? 'zh' : 'en'); // English first: this site is built for CES visitors

  /* ---------- Nav ---------- */
  const nav = document.getElementById('nav');
  const burger = document.getElementById('burger');
  const links = document.getElementById('navLinks');
  const onScroll = () => nav.classList.toggle('is-stuck', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  const closeMenu = () => { links.classList.remove('is-open'); burger.setAttribute('aria-expanded', 'false'); };
  burger.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
  });
  links.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });

  /* ---------- Reveal on scroll ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { threshold: 0.01 });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-in'));
  }

  /* ---------- CES sign-up ---------- */
  const form = document.getElementById('signupForm');
  const btn = document.getElementById('signupBtn');
  const fail = (key, field) => { msg.textContent = t(key); field.focus(); };
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const f = form.elements;
    if (f.website.value) return; // honeypot: bots fill it, people never see it
    const data = { name: f.name.value.trim(), email: f.email.value.trim(), company: f.company.value.trim(), role: f.role.value };
    if (!data.name) return fail('msg.name', f.name);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return fail('msg.bad', f.email);
    if (!data.role) return fail('msg.role', f.role);
    if (!f.consent.checked) return fail('msg.consent', f.consent);

    if (!cfg.signupEndpoint) { // no receiver configured yet: hand off to the visitor's mail app
      const body = `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\nRole: ${data.role}`;
      location.href = `mailto:info@fitx.games?subject=${encodeURIComponent('CES 2027 sign-up')}&body=${encodeURIComponent(body)}`;
      msg.textContent = t('msg.ok');
      return;
    }
    btn.disabled = true;
    msg.textContent = t('msg.sending');
    try {
      const res = await fetch(cfg.signupEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, lang, source: 'ces2027', submittedAt: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      msg.textContent = t('msg.done');
    } catch {
      msg.textContent = t('msg.fail');
    } finally {
      btn.disabled = false;
    }
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Hero: animated pose-tracking skeleton ---------- */
  const canvas = document.getElementById('pose');
  const ctx = canvas.getContext('2d');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const BONES = [
    ['head', 'neck'], ['neck', 'lSh'], ['neck', 'rSh'], ['lSh', 'lEl'], ['lEl', 'lWr'], ['rSh', 'rEl'], ['rEl', 'rWr'],
    ['neck', 'pelvis'], ['pelvis', 'lHip'], ['pelvis', 'rHip'], ['lHip', 'lKn'], ['lKn', 'lAn'], ['rHip', 'rKn'], ['rKn', 'rAn'],
  ];
  const rad = d => d * Math.PI / 180;

  // Returns joints in units of body height: x centred on 0, y from 0 (head) to 1 (feet).
  function pose(time, style) {
    const s = Math.sin(time), p = (s + 1) / 2;
    const hop = -Math.abs(Math.sin(time)) * 0.035;
    const j = {};
    const sway = style === 'dance' ? Math.sin(time * 0.5) * 0.03 : 0;
    j.head = [sway * 1.4, 0.08 + hop];
    j.neck = [sway, 0.2 + hop];
    j.pelvis = [0, 0.53 + hop];
    for (const [side, k] of [[-1, 'l'], [1, 'r']]) {
      const sh = j[k + 'Sh'] = [side * 0.115 + sway, 0.225 + hop];
      const q = style === 'dance' ? (Math.sin(time + (side > 0 ? 0 : Math.PI)) + 1) / 2 : p;
      const a1 = rad(18 + q * 132), a2 = a1 + rad(style === 'dance' ? 40 * (1 - q) : 12 * q);
      const el = j[k + 'El'] = [sh[0] + side * Math.sin(a1) * 0.15, sh[1] + Math.cos(a1) * 0.15];
      j[k + 'Wr'] = [el[0] + side * Math.sin(a2) * 0.14, el[1] + Math.cos(a2) * 0.14];
      const hip = j[k + 'Hip'] = [side * 0.065, 0.53 + hop];
      const l1 = rad(5 + (style === 'dance' ? 8 : p * 20)), l2 = l1 - rad(4);
      const kn = j[k + 'Kn'] = [hip[0] + side * Math.sin(l1) * 0.225, hip[1] + Math.cos(l1) * 0.225];
      j[k + 'An'] = [kn[0] + side * Math.sin(l2) * 0.225, kn[1] + Math.cos(l2) * 0.225];
    }
    return j;
  }

  function drawFigure(j, cx, top, h, label) {
    const P = k => [cx + j[k][0] * h, top + j[k][1] * h];
    const lw = Math.max(2, h * 0.012);
    ctx.lineCap = 'round';

    // Bones, with interpolated dots to suggest dense keypoints
    ctx.strokeStyle = 'rgba(250,248,243,.9)';
    ctx.lineWidth = lw;
    for (const [a, b] of BONES) {
      const [x1, y1] = P(a), [x2, y2] = P(b);
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
    }
    ctx.fillStyle = 'rgba(250,248,243,.55)';
    for (const [a, b] of BONES) {
      const [x1, y1] = P(a), [x2, y2] = P(b);
      for (const f of [1 / 3, 2 / 3]) {
        ctx.beginPath(); ctx.arc(x1 + (x2 - x1) * f, y1 + (y2 - y1) * f, lw * 0.75, 0, 7); ctx.fill();
      }
    }
    // Head
    const [hx, hy] = P('head');
    ctx.beginPath(); ctx.arc(hx, hy, h * 0.062, 0, 7); ctx.stroke();
    // Joints
    ctx.fillStyle = '#ff4d1f';
    for (const k in j) {
      if (k === 'head') continue;
      const [x, y] = P(k);
      ctx.beginPath(); ctx.arc(x, y, lw * 1.7, 0, 7); ctx.fill();
    }

    // Bounding box brackets + label
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    for (const k in j) { const [x, y] = P(k); minX = Math.min(minX, x); maxX = Math.max(maxX, x); minY = Math.min(minY, y); maxY = Math.max(maxY, y); }
    const pad = h * 0.05; minX -= pad; maxX += pad; minY -= pad * 1.3; maxY += pad * 0.6;
    const c = h * 0.07;
    ctx.strokeStyle = 'rgba(255,77,31,.9)'; ctx.lineWidth = Math.max(1.5, lw * 0.6);
    ctx.beginPath();
    ctx.moveTo(minX, minY + c); ctx.lineTo(minX, minY); ctx.lineTo(minX + c, minY);
    ctx.moveTo(maxX - c, minY); ctx.lineTo(maxX, minY); ctx.lineTo(maxX, minY + c);
    ctx.moveTo(maxX, maxY - c); ctx.lineTo(maxX, maxY); ctx.lineTo(maxX - c, maxY);
    ctx.moveTo(minX + c, maxY); ctx.lineTo(minX, maxY); ctx.lineTo(minX, maxY - c);
    ctx.stroke();
    ctx.fillStyle = 'rgba(255,77,31,.95)';
    ctx.font = `600 ${Math.max(10, h * 0.036)}px ui-monospace, Menlo, monospace`;
    ctx.fillText(label, minX, minY - 8);
  }

  let W = 0, H = 0;
  function resize() {
    const r = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = r.width; H = r.height;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function frame(ms) {
    const time = ms / 1000;
    ctx.clearRect(0, 0, W, H);
    const adultH = H * 0.56, kidH = H * 0.4, floor = H * 0.88;
    drawFigure(pose(time * 2.6, 'jack'), W * 0.3, floor - adultH, adultH, 'P1');
    drawFigure(pose(time * 3.4 + 1, 'dance'), W * 0.79, floor - kidH, kidH, 'P2');
  }

  let raf = 0, visible = true;
  const loop = ms => { frame(ms); if (visible) raf = requestAnimationFrame(loop); };
  const start = () => { cancelAnimationFrame(raf); if (reduced) frame(900); else raf = requestAnimationFrame(loop); };
  window.addEventListener('resize', () => { resize(); if (reduced) frame(900); });
  if ('IntersectionObserver' in window && !reduced) {
    new IntersectionObserver(([e]) => {
      const was = visible; visible = e.isIntersecting;
      if (visible && !was) start();
    }).observe(canvas);
  }
  resize();
  start();
})();
