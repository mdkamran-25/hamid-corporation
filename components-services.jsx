/* global React, Icon, useLang, CONTACT */
// ============================================================
//  Services grid (filterable) + Why-us
//  Structural meta here; all text from i18n.
// ============================================================

const SVC_META = [
  { icon: 'calendar-check',        cats: ['amc', 'chiller'] },
  { icon: 'thermometer-snowflake', cats: ['chiller'] },
  { icon: 'wrench',                cats: ['chiller'] },
];
const TAB_IDS = ['all', 'chiller', 'amc'];
const FEAT_ICONS = ['shield-check', 'receipt-text', 'timer', 'badge-check'];

function ServiceCard({ meta, s, book }) {
  return (
    <article className="svc-card" data-animate>
      <div className="svc-ico"><Icon name={meta.icon} size={26} /></div>
      <h3>{s.t}</h3>
      <p>{s.d}</p>
      <div className="svc-tags">{s.tags.map((t) => <span key={t}>{t}</span>)}</div>
      <a href="#booking" className="svc-link">{book} <Icon name="arrow-right" size={16} className="svc-arrow" /></a>
    </article>
  );
}

function Services() {
  const { t } = useLang();
  const S = t.services;
  const [active, setActive] = React.useState('all');
  const items = S.list.map((s, i) => ({ s, meta: SVC_META[i] }));
  const list = active === 'all' ? items : items.filter((x) => x.meta.cats.includes(active));
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="section-head" data-animate>
          <span className="eyebrow"><Icon name="wrench" size={15} /> {S.eyebrow}</span>
          <h2>{S.title}</h2>
          <p>{S.intro}</p>
        </div>

        <div className="tabs" data-animate role="tablist">
          {S.tabs.map((label, i) => (
            <button key={TAB_IDS[i]} role="tab" aria-selected={active === TAB_IDS[i]}
              className={'tab' + (active === TAB_IDS[i] ? ' active' : '')}
              onClick={() => setActive(TAB_IDS[i])}>{label}</button>
          ))}
        </div>

        <div className="svc-grid">
          {list.map((x, i) => <ServiceCard key={i} meta={x.meta} s={x.s} book={S.book} />)}
          <article className="svc-card emergency" data-animate>
            <div className="svc-ico"><Icon name="siren" size={26} /></div>
            <h3>{S.emergency.t}</h3>
            <p>{S.emergency.d}</p>
            <div className="svc-tags">{S.emergency.tags.map((tg) => <span key={tg}>{tg}</span>)}</div>
            <a href={'tel:' + CONTACT.tel} className="svc-link">{S.emergency.cta} <Icon name="phone" size={16} className="svc-arrow" /></a>
          </article>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const { t } = useLang();
  const W = t.why;
  return (
    <section className="why" id="why-us">
      <div className="wrap why-grid">
        <div className="why-visual" data-animate>
          <div className="why-photo"><img src="assets/image copy.png" alt="Al Shafa HVAC technician servicing a chiller unit" loading="lazy" /></div>
          <div className="why-badge">
            <span className="wb-num">4.9</span>
            <div className="wb-t"><b style={{ color: 'var(--text)' }}>{W.badgeTop}</b><br />{W.badgeSub}</div>
          </div>
        </div>
        <div>
          <div className="section-head" data-animate>
            <span className="eyebrow"><Icon name="heart-handshake" size={15} /> {W.eyebrow}</span>
            <h2>{W.title}</h2>
            <p>{W.intro}</p>
          </div>
          <div className="feat-list">
            {W.features.map((f, i) => (
              <div className="feat" key={i} data-animate style={{ '--d': i * 70 + 'ms' }}>
                <span className="feat-ico"><Icon name={FEAT_ICONS[i]} size={22} /></span>
                <div><h4>{f.t}</h4><p>{f.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Services, WhyUs });
