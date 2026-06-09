/* global React, Icon, useLang */
// ============================================================
//  Pricing + Testimonials + Coverage  (text from i18n)
// ============================================================

const PLAN_META = [
  { cur: '₹', amt: '299', featured: false, badge: false, feats: [['check', 0], ['check', 0], ['check', 0], ['check', 0], ['x', 1], ['x', 1]] },
  { cur: '₹', amt: '2,999', featured: true, badge: true, feats: [['check', 0], ['check', 0], ['check', 0], ['check', 0], ['check', 0], ['check', 0]] },
  { cur: '', amt: 'Custom', featured: false, badge: false, feats: [['check', 0], ['check', 0], ['check', 0], ['check', 0], ['check', 0], ['check', 0]] },
];
const REVIEW_NAMES = ['Sara M.', 'Imran K.', 'Lena R.', 'David O.', 'Priya S.', 'Marcus T.'];
const AREAS = ['South Delhi', 'North Delhi', 'East Delhi', 'West Delhi', 'Central Delhi', 'Dwarka', 'Rohini', 'Saket', 'Noida', 'Greater Noida', 'Gurugram', 'Ghaziabad', 'Faridabad'];

function Plan({ meta, p, badgeLabel }) {
  return (
    <div className={'plan' + (meta.featured ? ' featured' : '')} data-animate>
      {meta.badge && <span className="plan-badge">{badgeLabel}</span>}
      <h3>{p.name}</h3>
      <div className="p-sub">{p.sub}</div>
      <div className="price">
        {meta.cur && <span className="cur">{meta.cur}</span>}
        <span className="amt">{meta.amt}</span>
        <span className="per">{p.per}</span>
      </div>
      <ul>
        {p.feats.map((label, i) => (
          <li key={i} className={meta.feats[i][1] ? 'off' : ''}>
            <Icon name={meta.feats[i][0]} size={19} stroke={2.3} />{label}
          </li>
        ))}
      </ul>
      <a href="#booking" className={'btn btn-block ' + (meta.featured ? 'btn-primary' : 'btn-ghost')}>{p.cta}</a>
    </div>
  );
}

function Pricing() {
  const { t } = useLang();
  const P = t.pricing;
  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <div className="section-head" data-animate>
          <span className="eyebrow"><Icon name="tag" size={15} /> {P.eyebrow}</span>
          <h2>{P.title}</h2>
          <p>{P.intro}</p>
        </div>
        <div className="plans">
          {P.plans.map((p, i) => <Plan key={i} meta={PLAN_META[i]} p={p} badgeLabel={P.badge} />)}
        </div>
        <p className="pricing-note" data-animate>{P.note}</p>
      </div>
    </section>
  );
}

function Quote({ name, q }) {
  return (
    <figure className="quote" data-animate>
      <div className="stars">{[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" size={16} />)}</div>
      <p>&ldquo;{q.t}&rdquo;</p>
      <figcaption className="who">
        <span className="av">{name.charAt(0)}</span>
        <div><b>{name}</b><span>{q.role}</span></div>
      </figcaption>
    </figure>
  );
}

function Testimonials() {
  const { t } = useLang();
  const T = t.testi;
  return (
    <section className="testi" id="reviews">
      <div className="wrap">
        <div className="section-head" style={{ marginInline: 'auto', textAlign: 'center' }} data-animate>
          <span className="eyebrow" style={{ marginInline: 'auto' }}><Icon name="star" size={15} /> {T.eyebrow}</span>
          <h2>{T.title}</h2>
          <p style={{ marginInline: 'auto' }}>{T.intro}</p>
        </div>
        <div className="testi-grid">
          {T.reviews.map((q, i) => <Quote key={i} name={REVIEW_NAMES[i]} q={q} />)}
        </div>
      </div>
    </section>
  );
}

function Coverage() {
  const { t } = useLang();
  const C = t.coverage;
  return (
    <section className="coverage" id="coverage">
      <div className="wrap">
        <div className="section-head cov-head" data-animate>
          <span className="eyebrow"><Icon name="map-pin" size={15} /> {C.eyebrow}</span>
          <h2>{C.title}</h2>
          <p>{C.intro}</p>
        </div>
        <div className="area-chips" data-animate>
          {AREAS.map((a) => <span key={a}><Icon name="map-pin" size={15} />{a}</span>)}
        </div>
        <div className="cov-map" data-animate>
          <iframe
            title="Delhi NCR service map"
            loading="lazy"
            src="https://www.openstreetmap.org/export/embed.html?bbox=76.84%2C28.30%2C77.62%2C28.92&layer=mapnik&marker=28.6139%2C77.2090"
            style={{ border: 0, width: '100%', height: '100%' }}
          />
          <div className="cov-map-tag"><Icon name="navigation" size={15} /> Delhi &amp; NCR</div>
        </div>
        <div className="cov-cta" data-animate>
          <a href="#booking" className="btn btn-primary btn-lg"><Icon name="navigation" size={18} className="ico" /> {C.cta}</a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Pricing, Testimonials, Coverage });
