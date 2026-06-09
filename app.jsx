/* global React, ReactDOM, LANGS, STRINGS, LangContext, Nav, Hero, Stats, Services, WhyUs, Pricing, Testimonials, Coverage, Faq, Booking, Footer, FloatingCTAs, useTweaks, TweaksPanel, TweakSection, TweakColor, TweakRadio, TweakToggle, TweakSelect */
// ============================================================
//  App shell — language, theme, scroll reveal, tweaks
// ============================================================

const ACCENTS = [
  { hex: '#0bb6cf', h: 195, c: 0.11 },
  { hex: '#2f6bf2', h: 255, c: 0.13 },
  { hex: '#6d5ef0', h: 285, c: 0.13 },
  { hex: '#0ea571', h: 162, c: 0.12 },
  { hex: '#f0852e', h: 55,  c: 0.13 },
];
const LATIN_FONTS = {
  'Bricolage': "'Bricolage Grotesque', system-ui, sans-serif",
  'Space': "'Space Grotesk', system-ui, sans-serif",
  'Jakarta': "'Plus Jakarta Sans', system-ui, sans-serif",
};
const SCRIPT_FONTS = {
  hi: "'Noto Sans Devanagari', system-ui, sans-serif",
  ur: "'Noto Naskh Arabic', system-ui, sans-serif",
};
const ROUND = { Soft: 0.7, Rounded: 1, 'Extra round': 1.4 };

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#f0852e",
  "roundness": "Rounded",
  "headingFont": "Jakarta"
}/*EDITMODE-END*/;

function useScrollReveal() {
  React.useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const reveal = () => {
      const vh = window.innerHeight;
      document.querySelectorAll('[data-animate]:not([data-shown])').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (reduce || (r.top < vh * 0.92 && r.bottom > -40)) el.setAttribute('data-shown', '1');
      });
    };
    reveal();
    const onScroll = () => requestAnimationFrame(reveal);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    const mo = new MutationObserver(() => requestAnimationFrame(reveal));
    const root = document.getElementById('root');
    if (root) mo.observe(root, { childList: true, subtree: true });
    const timers = [80, 300, 800].map((d) => setTimeout(reveal, d));
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      mo.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);
}

function App() {
  const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [theme, setTheme] = React.useState(() => {
    try { return localStorage.getItem('hc-theme') || 'light'; } catch (e) { return 'light'; }
  });
  const [lang, setLangState] = React.useState(() => {
    try { return localStorage.getItem('hc-lang') || 'en'; } catch (e) { return 'en'; }
  });
  const setLang = (code) => setLangState(code);
  const meta = LANGS.find((l) => l.code === lang) || LANGS[0];

  // theme
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('hc-theme', theme); } catch (e) {}
  }, [theme]);

  // language: dir, lang attr, persistence
  React.useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', meta.dir);
    try { localStorage.setItem('hc-lang', lang); } catch (e) {}
  }, [lang, meta.dir]);

  // tweaks + script-aware fonts
  React.useEffect(() => {
    const r = document.documentElement.style;
    const a = ACCENTS.find((x) => x.hex === tw.accent) || ACCENTS[0];
    r.setProperty('--accent-h', a.h);
    r.setProperty('--accent-c', a.c);
    r.setProperty('--radius-scale', ROUND[tw.roundness] ?? 1);
    if (lang === 'en') {
      r.setProperty('--font-display', LATIN_FONTS[tw.headingFont] || LATIN_FONTS.Bricolage);
      r.setProperty('--font-body', LATIN_FONTS.Jakarta);
    } else {
      r.setProperty('--font-display', SCRIPT_FONTS[lang]);
      r.setProperty('--font-body', SCRIPT_FONTS[lang]);
    }
  }, [tw.accent, tw.roundness, tw.headingFont, lang]);

  useScrollReveal();
  const toggleTheme = () => setTheme((p) => (p === 'light' ? 'dark' : 'light'));

  const ctx = { lang, setLang, dir: meta.dir, t: STRINGS[lang] || STRINGS.en };

  return (
    <LangContext.Provider value={ctx}>
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <Pricing />
        <Testimonials />
        <Coverage />
        <Faq />
        <Booking />
      </main>
      <Footer />
      <FloatingCTAs />

      <TweaksPanel>
        <TweakSection label="Language" />
        <TweakSelect label="Language" value={lang}
          options={LANGS.map((l) => ({ value: l.code, label: l.native }))}
          onChange={(v) => setLang(v)} />
        <TweakSection label="Brand colour" />
        <TweakColor label="Accent" value={tw.accent}
          options={ACCENTS.map((a) => a.hex)} onChange={(v) => setTweak('accent', v)} />
        <TweakSection label="Shape & type" />
        <TweakRadio label="Roundness" value={tw.roundness}
          options={['Soft', 'Rounded', 'Extra round']} onChange={(v) => setTweak('roundness', v)} />
        <TweakRadio label="Heading font" value={tw.headingFont}
          options={['Bricolage', 'Space', 'Jakarta']} onChange={(v) => setTweak('headingFont', v)} />
        <TweakSection label="Theme" />
        <TweakToggle label="Dark mode" value={theme === 'dark'}
          onChange={(v) => setTheme(v ? 'dark' : 'light')} />
      </TweaksPanel>
    </LangContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
