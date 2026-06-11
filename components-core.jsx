/* global React, useLang, LANGS, CONTACT, waLink */
// ============================================================
//  Hamid Corporation — core components
//  Icon, Nav, LangSwitcher, Hero, Stats, FloatingCTAs
// ============================================================

function Icon({ name, size, stroke, className, style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = '';
    const i = document.createElement('i');
    i.setAttribute('data-lucide', name);
    el.appendChild(i);
    window.lucide.createIcons({ attrs: { 'stroke-width': stroke || 1.9, width: size || 24, height: size || 24 } });
  }, [name, size, stroke]);
  return <span ref={ref} className={'ic ' + (className || '')} style={{ display: 'inline-flex', ...style }} />;
}

function WaIcon({ size = 24 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.83 2.41a8.2 8.2 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.25 8.24a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24Zm-2.85 4.43c-.13 0-.35.05-.54.26-.18.2-.71.7-.71 1.7s.73 1.98.83 2.11c.1.13 1.41 2.16 3.42 3.02 1.67.72 2.01.58 2.37.55.36-.03 1.17-.48 1.34-.94.16-.46.16-.86.11-.94-.05-.08-.18-.13-.38-.23-.2-.1-1.17-.58-1.35-.64-.18-.07-.31-.1-.45.1-.13.2-.51.64-.62.77-.12.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.59-.53-.99-1.18-1.1-1.38-.12-.2-.01-.31.09-.41.09-.09.2-.23.3-.35.1-.12.13-.2.2-.34.06-.13.03-.25-.02-.35-.05-.1-.44-1.11-.62-1.51-.16-.4-.32-.34-.44-.35l-.38-.01Z" />
    </svg>
  );
}

function Brand() {
  const { t } = useLang();
  return (
    <div className="brand">
      <span className="brand-mark"><Icon name="snowflake" size={21} stroke={2.1} /></span>
      <span>Hamid<span style={{ color: 'var(--accent-700)' }}>Corp</span><small>{t.nav.tagline}</small></span>
    </div>
  );
}

function LangSwitcher() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);
  const current = LANGS.find((l) => l.code === lang) || LANGS[0];
  return (
    <div className="lang" ref={ref}>
      <button className="lang-btn" onClick={() => setOpen((o) => !o)} aria-label={t.common.language} aria-expanded={open}>
        <Icon name="globe" size={18} />
        <span className="lang-cur">{current.native}</span>
        <Icon name="chevron-down" size={15} className={'lang-chev' + (open ? ' up' : '')} />
      </button>
      <div className={'lang-menu' + (open ? ' show' : '')} role="menu">
        {LANGS.map((l) => (
          <button key={l.code} role="menuitemradio" aria-checked={l.code === lang}
            className={'lang-opt' + (l.code === lang ? ' active' : '')}
            onClick={() => { setLang(l.code); setOpen(false); }}>
            <span className="lang-native">{l.native}</span>
            <span className="lang-sub">{l.label}</span>
            {l.code === lang && <Icon name="check" size={16} className="lang-tick" />}
          </button>
        ))}
      </div>
    </div>
  );
}

function Nav({ theme, toggleTheme }) {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  // lock body scroll + close on resize to desktop
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('resize', onResize); document.body.style.overflow = ''; };
  }, [menuOpen]);
  const anchors = ['services', 'why-us', 'pricing', 'reviews', 'coverage', 'faq'];
  return (
    <header className={'nav' + (scrolled || menuOpen ? ' scrolled' : '')}>
      <div className="wrap nav-inner">
        <a href="#top" aria-label="Hamid Corporation" onClick={() => setMenuOpen(false)}><Brand /></a>
        <nav className="nav-links">
          {t.nav.links.map((l, i) => <a key={i} href={'#' + anchors[i]}>{l}</a>)}
        </nav>
        <div className="nav-actions">
          <div className="desktop-only"><LangSwitcher /></div>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
            <span className="moon"><Icon name="moon" size={20} /></span>
            <span className="sun"><Icon name="sun" size={20} /></span>
          </button>
          <a href="#booking" className="btn btn-primary nav-cta">
            <Icon name="calendar-check" size={18} className="ico" /> {t.nav.book}
          </a>
          <button className="burger" onClick={() => setMenuOpen((o) => !o)} aria-label="Menu" aria-expanded={menuOpen}>
            <Icon name={menuOpen ? 'x' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      <div className={'mobile-menu' + (menuOpen ? ' open' : '')}>
        <nav className="mm-links">
          {t.nav.links.map((l, i) => (
            <a key={i} href={'#' + anchors[i]} onClick={() => setMenuOpen(false)}>
              {l}<Icon name="arrow-up-right" size={17} />
            </a>
          ))}
        </nav>
        <div className="mm-langs" role="radiogroup" aria-label={t.common.language}>
          {LANGS.map((l) => (
            <button key={l.code} className={'mm-lang' + (l.code === lang ? ' active' : '')}
              onClick={() => setLang(l.code)}>{l.native}</button>
          ))}
        </div>
        <a href="#booking" className="btn btn-primary btn-lg btn-block" onClick={() => setMenuOpen(false)}>
          <Icon name="calendar-check" size={19} className="ico" /> {t.nav.book}
        </a>
      </div>
      <div className={'mm-scrim' + (menuOpen ? ' open' : '')} onClick={() => setMenuOpen(false)} />
    </header>
  );
}

function Hero() {
  const { t } = useLang();
  const h = t.hero;
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div data-animate><span className="eyebrow"><Icon name="badge-check" size={15} /> {h.eyebrow}</span></div>
          <h1 data-animate style={{ '--d': '60ms' }}>
            {h.titleA}<span className="hl">{h.titleHl}</span>{h.titleB}
          </h1>
          <p className="lead" data-animate style={{ '--d': '120ms' }}>{h.lead}</p>
          <div className="hero-cta" data-animate style={{ '--d': '180ms' }}>
            <a href="#booking" className="btn btn-primary btn-lg"><Icon name="calendar-check" size={19} className="ico" /> {h.book}</a>
            <a href={waLink()} target="_blank" rel="noopener" className="btn btn-wa btn-lg"><WaIcon size={19} /> {h.whatsapp}</a>
            <a href={'tel:' + CONTACT.tel} className="btn btn-ghost btn-lg"><Icon name="phone" size={18} className="ico" /> {h.call}</a>
          </div>
          <div className="hero-trust" data-animate style={{ '--d': '240ms' }}>
            <div className="stars" aria-label="rating">{[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" size={17} />)}</div>
            <div className="t-txt"><b>{h.ratingBold}</b> {h.ratingRest}</div>
            <div className="divider" />
            <div className="t-txt"><b>{h.samedayBold}</b> {h.samedayRest}</div>
          </div>
        </div>

        <div className="hero-visual" data-animate style={{ '--d': '160ms' }}>
          <div className="hero-photo"><img src="assets/image.png" alt="Al Shafa HVAC chiller service centre" loading="lazy" /></div>
          <div className="float-card fc-1">
            <span className="fc-ico green"><Icon name="check" size={21} stroke={2.4} /></span>
            <div><div className="fc-t">{h.fc1a}</div><div className="fc-s">{h.fc1b}</div></div>
          </div>
          <div className="float-card fc-2">
            <span className="fc-ico blue"><Icon name="shield-check" size={21} /></span>
            <div><div className="fc-t">{h.fc2a}</div><div className="fc-s">{h.fc2b}</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ to, suffix, label }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const run = () => {
      if (done) return; done = true;
      const dur = 1600, start = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(to * eased).toLocaleString();
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const check = () => {
      if (done) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.88 && r.bottom > 0) { run(); window.removeEventListener('scroll', check); }
    };
    window.addEventListener('scroll', check, { passive: true });
    check();
    const tid = setTimeout(check, 200);
    return () => { window.removeEventListener('scroll', check); clearTimeout(tid); };
  }, [to]);
  return (
    <div className="stat">
      <div className="num"><span ref={ref}>0</span><span className="suf">{suffix}</span></div>
      <div className="lbl">{label}</div>
    </div>
  );
}

function Stats() {
  const { t } = useLang();
  const vals = [24000, 16, 45, 98];
  return (
    <section className="stats wrap">
      <div className="stats-inner" data-animate>
        {t.stats.map((s, i) => <Stat key={i} to={vals[i]} suffix={s.s} label={s.l} />)}
      </div>
    </section>
  );
}

function FloatingCTAs() {
  const { t } = useLang();
  return (
    <div className="float-ctas">
      <a className="fab wa" href={waLink()} target="_blank" rel="noopener" aria-label={t.fab.whatsapp}>
        <span className="pulse" /><WaIcon size={27} /><span className="tip">{t.fab.whatsapp}</span>
      </a>
      <a className="fab call" href={'tel:' + CONTACT.tel} aria-label={t.fab.call}>
        <span className="pulse" /><Icon name="phone" size={24} stroke={2.2} /><span className="tip">{t.fab.call}</span>
      </a>
    </div>
  );
}

Object.assign(window, { Icon, WaIcon, Brand, LangSwitcher, Nav, Hero, Stats, Stat, FloatingCTAs });
