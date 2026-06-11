/* global React, Icon, WaIcon, Brand, useLang, CONTACT, waLink */
// ============================================================
//  FAQ accordion + Booking form + Footer  (text from i18n)
// ============================================================

function FaqItem({ item, open, onToggle }) {
  return (
    <div className={'faq-item' + (open ? ' open' : '')} data-animate>
      <button className="faq-q" onClick={onToggle} aria-expanded={open}>
        {item.q}
        <span className="q-ico"><Icon name="plus" size={17} stroke={2.3} /></span>
      </button>
      <div className="faq-a"><div><p>{item.a}</p></div></div>
    </div>
  );
}

function Faq() {
  const { t } = useLang();
  const F = t.faq;
  const [open, setOpen] = React.useState(0);
  return (
    <section className="faq" id="faq">
      <div className="wrap faq-grid">
        <div className="section-head" data-animate>
          <span className="eyebrow"><Icon name="messages-square" size={15} /> {F.eyebrow}</span>
          <h2>{F.title}</h2>
          <p>{F.intro}</p>
          <div style={{ marginTop: '26px' }}>
            <a href={waLink()} target="_blank" rel="noopener" className="btn btn-wa"><WaIcon size={18} /> {F.ask}</a>
          </div>
        </div>
        <div className="faq-list">
          {F.items.map((f, i) => (
            <FaqItem key={i} item={f} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const { t } = useLang();
  const B = t.booking;
  const [form, setForm] = React.useState({ name: '', phone: '', service: '', when: '', notes: '' });
  const [errors, setErrors] = React.useState({});
  const [touched, setTouched] = React.useState({});
  const [sent, setSent] = React.useState(false);
  const [waUrl, setWaUrl] = React.useState('');

  const validate = (f) => {
    const e = {};
    if (!f.name.trim()) e.name = B.errName;
    if (!f.phone.trim()) e.phone = B.errPhone;
    else if (!/^[+()\-\s\d]{7,}$/.test(f.phone.trim())) e.phone = B.errPhoneBad;
    if (!f.service) e.service = B.errService;
    return e;
  };
  const set = (k, v) => {
    const next = { ...form, [k]: v };
    setForm(next);
    if (touched[k]) setErrors(validate(next));
  };
  const blur = (k) => { setTouched({ ...touched, [k]: true }); setErrors(validate(form)); };
  const submit = (ev) => {
    ev.preventDefault();
    const e = validate(form);
    setErrors(e);
    setTouched({ name: true, phone: true, service: true });
    if (Object.keys(e).length === 0) {
      // build the prefilled WhatsApp message for the business number
      const msg = B.waTemplate
        .replace(/%0A/g, '\n')
        .replace('%name%', form.name.trim())
        .replace('%phone%', form.phone.trim())
        .replace('%service%', form.service)
        .replace('%when%', form.when || B.whenAsap)
        .replace('%notes%', form.notes.trim() || B.notesNone);
      setWaUrl('https://wa.me/' + CONTACT.wa + '?text=' + encodeURIComponent(msg));
      setSent(true);
    }
  };
  const fieldCls = (k) => 'field' + (touched[k] && errors[k] ? ' invalid' : '');

  const successMsg = B.successMsg
    .replace('%name%', form.name.split(' ')[0] || '')
    .replace('%service%', form.service)
    .replace('%phone%', form.phone);

  return (
    <section className="booking" id="booking">
      <div className="wrap">
        <div className="book-card" data-animate>
          <aside className="book-aside">
            <span className="eyebrow"><Icon name="calendar-check" size={15} /> {B.eyebrow}</span>
            <h2>{B.title}</h2>
            <p className="b-lead">{B.lead}</p>
            <ul className="book-points">
              {B.points.map((p, i) => (
                <li key={i}>
                  <span className="bp-ico"><Icon name={['timer', 'shield-check', 'badge-dollar-sign'][i]} size={20} /></span>
                  <div><b>{p.t}</b><span>{p.s}</span></div>
                </li>
              ))}
            </ul>
          </aside>

          <div className="book-form">
            {!sent ? (
              <form onSubmit={submit} noValidate>
                <h3>{B.formTitle}</h3>
                <p className="bf-sub">{B.formSub}</p>
                <div className="form-grid">
                  <div className={fieldCls('name')}>
                    <label htmlFor="bk-name">{B.name} <span className="req">*</span></label>
                    <input id="bk-name" value={form.name} placeholder={B.namePh}
                      onChange={(e) => set('name', e.target.value)} onBlur={() => blur('name')} />
                    <span className="err">{errors.name}</span>
                  </div>
                  <div className={fieldCls('phone')}>
                    <label htmlFor="bk-phone">{B.phone} <span className="req">*</span></label>
                    <input id="bk-phone" value={form.phone} placeholder={B.phonePh} inputMode="tel"
                      onChange={(e) => set('phone', e.target.value)} onBlur={() => blur('phone')} />
                    <span className="err">{errors.phone}</span>
                  </div>
                  <div className={fieldCls('service')}>
                    <label htmlFor="bk-service">{B.service} <span className="req">*</span></label>
                    <select id="bk-service" value={form.service}
                      onChange={(e) => set('service', e.target.value)} onBlur={() => blur('service')}>
                      <option value="" disabled>{B.servicePh}</option>
                      {B.serviceOpts.map((s, i) => <option key={i} value={s}>{s}</option>)}
                    </select>
                    <span className="err">{errors.service}</span>
                  </div>
                  <div className="field">
                    <label htmlFor="bk-when">{B.when}</label>
                    <select id="bk-when" value={form.when} onChange={(e) => set('when', e.target.value)}>
                      <option value="">{B.whenOpts[0]}</option>
                      {B.whenOpts.slice(1).map((w, i) => <option key={i}>{w}</option>)}
                    </select>
                  </div>
                  <div className="field full">
                    <label htmlFor="bk-notes">{B.issue}</label>
                    <textarea id="bk-notes" value={form.notes} placeholder={B.issuePh}
                      onChange={(e) => set('notes', e.target.value)} />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-block book-submit">
                  <Icon name="send" size={18} className="ico" /> {B.submit}
                </button>
              </form>
            ) : (
              <div className="form-success">
                <div className="fs-ico"><Icon name="check" size={36} stroke={2.6} /></div>
                <h3>{B.successTitle}</h3>
                <p>{successMsg}</p>
                <a href={waUrl} target="_blank" rel="noopener" className="btn btn-wa btn-lg" style={{ marginTop: '24px' }}><WaIcon size={19} /> {B.sendWa}</a>
                <p className="fs-hint">{B.sendWaHint}</p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '8px', flexWrap: 'wrap' }}>
                  <button className="btn btn-ghost" onClick={() => { setSent(false); setForm({ name: '', phone: '', service: '', when: '', notes: '' }); setTouched({}); setErrors({}); }}>
                    <Icon name="rotate-ccw" size={17} className="ico" /> {B.newReq}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLang();
  const F = t.footer;
  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Brand />
            <p>{F.brandText}</p>
            <a className="foot-phone" href={'tel:' + CONTACT.tel}><Icon name="phone" size={16} /> {CONTACT.phoneDisplay}</a>
            <div className="foot-social">
              <a href="#" aria-label="Facebook"><Icon name="facebook" size={18} /></a>
              <a href="#" aria-label="Instagram"><Icon name="instagram" size={18} /></a>
              <a href={waLink()} target="_blank" rel="noopener" aria-label="WhatsApp"><WaIcon size={18} /></a>
              <a href={'tel:' + CONTACT.tel} aria-label="Call"><Icon name="phone" size={18} /></a>
            </div>
          </div>
          {F.cols.map((c, i) => (
            <div className="foot-col" key={i}>
              <h5>{c.h}</h5>
              <ul>{c.items.map((it, j) => <li key={j}><a href="#booking">{it}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="foot-bottom">
          <p>© {new Date().getFullYear()} Al Shafa HVAC Service Centre. {F.rights}</p>
          <div className="fb-links">
            <a href="#" style={{ color: 'var(--text-3)' }}>{F.privacy}</a>
            <a href="#" style={{ color: 'var(--text-3)' }}>{F.terms}</a>
            <span className="built-by">{F.builtBy} <a href="https://www.navbharatlabs.com/" target="_blank" rel="noopener">NavBharat Labs</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Faq, Booking, Footer });
