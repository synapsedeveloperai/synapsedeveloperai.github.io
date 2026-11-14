import { config } from './config.js';
import { damp, spring } from './motion.js';

const escape = (value) => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const https = (url) => { try { return new URL(url).protocol === 'https:'; } catch { return false; } };
const external = (label, url) => `<a class="button magnetic" href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(label)} <span aria-hidden="true">↗</span></a>`;
function contactLink(kind) {
  const github = kind === 'GitHub';
  const url = github ? config.github.url || (config.github.handle ? `https://github.com/${encodeURIComponent(config.github.handle)}` : '') : config.email;
  const valid = github ? https(url) && new URL(url).hostname === 'github.com' && new URL(url).pathname.length > 1 && !/YOUR_USERNAME/i.test(url) : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(url) && !/@example\./i.test(url);
  if (valid) return external(kind, github ? url : `mailto:${url}`);
  return `<span class="unconfigured"><button class="button" type="button" aria-disabled="true" aria-describedby="${github ? 'github' : 'email'}-hint">${kind} <span aria-hidden="true">↗</span></button><span class="tooltip" id="${github ? 'github' : 'email'}-hint">${kind} link not configured yet.</span></span>`;
}
const heading = (number, name) => `<div class="section-heading"><span>${number} /</span><h2>${name}</h2><span class="heading-rule"></span></div>`;

export function renderUI() {
  const c = config.content;
  document.querySelector('#app').innerHTML = `
    <div class="wrap">
      <header id="home" class="enter" style="--delay:0s">
        <a href="#home" class="brand" aria-label="Synapse home">SYNAPSE<span>.</span></a>
        <button class="menu-toggle" aria-expanded="false" aria-controls="navigation">Menu <span aria-hidden="true">+</span></button>
        <nav id="navigation" aria-label="Main navigation">${['About', 'Projects', 'Stack', 'Contact'].map(label => `<a href="#${label.toLowerCase()}" data-scramble>${label}</a>`).join('')}</nav>
      </header>
      <main id="main">
        <section class="hero" aria-labelledby="hero-title">
          <div class="hero-copy">
            <div class="status enter" style="--delay:.12s"><span class="status-light"></span>${escape(c.status)}</div>
            <h1 id="hero-title" class="enter" style="--delay:.25s">${escape(c.title)}</h1>
            <div class="type-line enter" style="--delay:.38s" aria-label="${escape(config.phrases.join(' '))}"><span id="typed" aria-hidden="true">${escape(config.phrases[0])}</span><span class="cursor" aria-hidden="true">_</span></div>
            <p class="summary enter" style="--delay:.5s">${escape(c.summary)}</p>
            <div class="actions enter" style="--delay:.62s"><a class="button primary magnetic" href="#projects">Explore Projects <span aria-hidden="true">↗</span></a>${contactLink('GitHub')}</div>
          </div>
          <div class="hero-art" role="img" aria-label="A luminous S assembled from hundreds of code characters in 3D">
            <div class="art-notes" aria-hidden="true">// synapse<br>// build()<br>// test()<br>// iterate()<span>&gt; systems/<br>&gt; ai/<br>&gt; apps/</span></div>
            <div class="fallback-symbol" aria-hidden="true"></div>
            <span class="art-caption enter" style="--delay:.8s" aria-hidden="true">&lt; BUILT ONE CHARACTER AT A TIME / &gt;</span>
          </div>
          <a class="scroll-cue" href="#focus" aria-label="Explore areas of interest"><span></span></a>
        </section>
        <section id="focus" class="focus" aria-label="Areas of interest">
          <div class="focus-grid">${c.focus.map((card, i) => `<div class="card-shell reveal" style="--delay:${i * .12}s"><span class="floating-pane pane-one" aria-hidden="true"></span><span class="floating-pane pane-two" aria-hidden="true"></span><article class="glass-card tilt"><div class="card-top"><h2><span>0${i + 1} /</span> ${escape(card.title)}</h2><span class="card-icon" aria-hidden="true">${card.symbol}</span></div><h3 class="sr-only">${escape(card.heading)}</h3><p>${escape(card.description)}</p><div class="card-details"><pre class="code-box"><code>${card.code.split('\n').map((line, n) => `<span class="code-row"><span class="line-number" aria-hidden="true">${n + 1}</span><span${n === 0 ? ' class="comment"' : ''}>${escape(line)}</span></span>`).join('')}</code></pre><ul>${card.bullets.map(b => `<li>${escape(b)}</li>`).join('')}</ul></div></article></div>`).join('')}</div>
        </section>
        <section id="about" class="content-section reveal">${heading('02', 'About')}<div class="about-grid"><div><p class="lead">${escape(c.about.lead)}</p><p class="copy">${escape(c.about.description)}</p></div><dl class="facts">${c.about.facts.map(([label, value]) => `<div><dt>${escape(label)}</dt><dd>${escape(value)}</dd></div>`).join('')}</dl></div></section>
        <section id="projects" class="content-section reveal">${heading('03', 'Projects')}<div class="project-empty tilt"><div><div class="eyebrow">PROJECT INDEX / 000</div><h3>${escape(c.projects.title)}</h3><p class="copy">${escape(c.projects.description)}</p><a class="text-link" href="#contact">Get in touch <span aria-hidden="true">↗</span></a></div><div class="terminal" aria-hidden="true"><div class="terminal-top"><span></span><span></span><span></span><small>~/synapse/projects</small></div><pre><span class="comment">$ ls ./projects</span>\n\n  [ no public releases ]\n\n<span class="comment">$ git status</span>\n  work in progress<span class="cursor">_</span></pre></div></div></section>
        <section id="stack" class="content-section reveal">${heading('04', 'Tools & interests')}<p class="copy">${escape(c.toolsDescription)}</p><ul class="chips">${c.tools.map((tool, i) => `<li style="--delay:${i * .035}s">${escape(tool)}</li>`).join('')}</ul></section>
        <section id="contact" class="content-section reveal"><div class="contact-panel"><div class="eyebrow">05 / CONTACT</div><h2>${escape(c.contact.title)}</h2><p class="copy">${escape(c.contact.description)}</p><div class="actions">${contactLink('GitHub')}${contactLink('Email')}${config.socials.filter(s => https(s.url)).map(s => external(s.label, s.url)).join('')}</div>${config.discord ? `<p class="discord-contact">Discord <span>@${escape(config.discord)}</span></p>` : ''}<p class="configuration-note">Contact links will be available once configured.</p></div></section>
      </main>
      <footer><a href="#home" class="brand">SYNAPSE.</a><span>© ${new Date().getFullYear()} · ALWAYS A WORK IN PROGRESS</span><span>BUILT WITH THREE.JS / WEBGL</span></footer>
    </div>
    <div class="experience-controls" aria-label="Experience settings"><button id="motion-toggle" aria-pressed="false">Motion <span>on</span></button><span aria-hidden="true">/</span><button id="quality-toggle" aria-pressed="false">Low power <span>off</span></button></div>
    <a class="back-top" href="#home" aria-label="Back to top">↑</a>`;
  // Each tooltip needs its own ID when the same contact appears twice.
  document.querySelectorAll('.unconfigured').forEach((el, i) => {
    const id = `contact-hint-${i}`;
    el.querySelector('.tooltip').id = id;
    el.querySelector('button').setAttribute('aria-describedby', id);
  });
  document.querySelector('.configuration-note').hidden = !!(config.github.url || config.github.handle) && !!config.email;
}

export function createUI(settings, signal) {
  const on = (el, event, listener, options = {}) => el.addEventListener(event, listener, { ...options, signal });
  const menu = document.querySelector('.menu-toggle'), nav = document.querySelector('nav');
  function closeMenu() { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
  on(menu, 'click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
  on(document, 'keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });
  on(document, 'click', e => { if (!e.target.closest('header')) closeMenu(); });
  nav.querySelectorAll('a').forEach(a => on(a, 'click', closeMenu));
  const reveal = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); reveal.unobserve(e.target); } }), { threshold: .08 });
  document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));
  const navLinks = [...nav.querySelectorAll('a')];
  let navPositions = [], lastNavScroll = -1;
  function measureNavigation() {
    navPositions = navLinks.map(link => ({ link, top: document.querySelector(link.hash).offsetTop }));
    lastNavScroll = -1;
  }
  on(window, 'resize', measureNavigation, { passive: true });
  measureNavigation();
  const interactions = [...document.querySelectorAll('.tilt, .magnetic')].map(el => {
    const item = { el, card: el.classList.contains('tilt'), x: { value: 0, velocity: 0 }, y: { value: 0, velocity: 0 }, tx: 0, ty: 0, glow: 0, hover: false, hx: 50, hy: 50, rect: null };
    on(el, 'pointerenter', e => { if (e.pointerType === 'touch') return; item.rect = el.getBoundingClientRect(); item.hover = true; });
    on(el, 'pointermove', e => {
      if (!item.rect || e.pointerType === 'touch') return;
      const x = Math.max(-1, Math.min(1, (e.clientX - item.rect.left) / item.rect.width * 2 - 1));
      const y = Math.max(-1, Math.min(1, (e.clientY - item.rect.top) / item.rect.height * 2 - 1));
      item.tx = x; item.ty = y; item.hx = (x + 1) * 50; item.hy = (y + 1) * 50;
    });
    on(el, 'pointerleave', () => { item.tx = item.ty = 0; item.hover = false; item.rect = null; });
    return item;
  });
  const reset = () => interactions.forEach(i => { i.tx = i.ty = 0; i.hover = false; });
  on(window, 'blur', reset); on(document.documentElement, 'pointerleave', reset);
  const panes = [...document.querySelectorAll('.floating-pane')];
  let paneX = 0, paneY = 0, paneTargetX = 0, paneTargetY = 0;
  on(window, 'pointermove', e => { if (e.pointerType !== 'touch') { paneTargetX = e.clientX / innerWidth * 2 - 1; paneTargetY = e.clientY / innerHeight * 2 - 1; } }, { passive: true });
  const resetPanes = () => { paneTargetX = paneTargetY = 0; };
  on(window, 'blur', resetPanes); on(document.documentElement, 'pointerleave', resetPanes);
  const scrambles = [...document.querySelectorAll('[data-scramble]')].map(el => {
    const item = { el, text: el.textContent, remaining: 0, tick: 0 };
    on(el, 'pointerenter', () => { if (!settings.reduced) item.remaining = .28; });
    return item;
  });
  const typed = document.querySelector('#typed');
  let phrase = 0, length = config.phrases[0].length, deleting = false, timer = 2.6;
  const motion = document.querySelector('#motion-toggle'), quality = document.querySelector('#quality-toggle');
  on(motion, 'click', () => settings.setMotion(!settings.motionOff));
  on(quality, 'click', () => settings.setLow(!settings.low));
  return {
    update(dt) {
      const reduced = settings.reduced;
      if (lastNavScroll !== scrollY) {
        lastNavScroll = scrollY;
        const current = navPositions.findLast(section => section.top <= scrollY + innerHeight * .35)?.link;
        navLinks.forEach(link => { if (link === current) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
      }
      paneX = damp(paneX, reduced ? 0 : paneTargetX, 4, dt); paneY = damp(paneY, reduced ? 0 : paneTargetY, 4, dt);
      panes.forEach((pane, i) => { const depth = i % 2 ? 9 : 16; pane.style.transform = `translate3d(${paneX * depth}px, ${paneY * depth}px, ${i % 2 ? -70 : -30}px)`; });
      motion.setAttribute('aria-pressed', String(reduced)); motion.querySelector('span').textContent = reduced ? 'off' : 'on';
      quality.setAttribute('aria-pressed', String(settings.low)); quality.querySelector('span').textContent = settings.low ? 'on' : 'off';
      for (const i of interactions) {
        const x = spring(i.x, reduced ? 0 : i.tx, dt), y = spring(i.y, reduced ? 0 : i.ty, dt);
        i.glow = damp(i.glow, i.hover && !reduced ? 1 : 0, 6, dt);
        i.el.style.transform = i.card ? `perspective(1000px) rotateX(${-y * 3.5}deg) rotateY(${x * 4}deg) translateY(${-i.glow * 5}px)` : `translate(${x * 7}px, ${y * 5}px)`;
        if (i.card) { i.el.style.setProperty('--glow', i.glow); i.el.style.setProperty('--hx', `${i.hx}%`); i.el.style.setProperty('--hy', `${i.hy}%`); }
      }
      if (reduced) { typed.textContent = config.phrases[0]; timer = 2.6; phrase = 0; length = config.phrases[0].length; deleting = false; }
      else {
        timer -= dt;
        if (timer <= 0) {
          if (deleting) { length--; if (length === 0) { phrase = (phrase + 1) % config.phrases.length; deleting = false; timer = .25; } else timer = .025; }
          else if (length < config.phrases[phrase].length) { length++; timer = .055; }
          else { deleting = true; timer = 1.9; }
          typed.textContent = config.phrases[phrase].slice(0, length);
        }
      }
      for (const s of scrambles) {
        if (s.remaining > 0 && !reduced) {
          s.remaining -= dt; s.tick += dt;
          if (s.tick > .035) { s.tick = 0; const resolved = Math.floor((1 - s.remaining / .28) * s.text.length); s.el.textContent = [...s.text].map((c, i) => i < resolved ? c : '<>/{}'[i % 5]).join(''); }
        } else if (s.el.textContent !== s.text) s.el.textContent = s.text;
      }
      document.querySelector('.back-top').classList.toggle('show', scrollY > 650);
    },
    dispose() { reveal.disconnect(); },
  };
}
