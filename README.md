# Hamid Corporation — Cooling & Appliance Services Landing Page

A responsive, bilingual (EN / हिन्दी / اردو) marketing site for an AC, refrigerator, freezer,
chiller and washing-machine repair business serving **Delhi NCR**. Light + dark mode,
animated stats, filterable services, AMC pricing in ₹, FAQ accordion, and a booking form
that hands off to WhatsApp.

---

## How to run it locally

This site uses **React + Babel loaded from a CDN**, and the `.jsx` files are fetched at
runtime. Because of that, opening `Hamid Corporation.html` directly as a `file://` path
**will not work** (the browser blocks fetching the local `.jsx` files). You must serve the
folder over `http://`. Any of these work:

```bash
# Option A — Python (built in on Mac/Linux)
python3 -m http.server 8000
# then open http://localhost:8000/Hamid%20Corporation.html

# Option B — Node
npx serve .

# Option C — VS Code
# Install the "Live Server" extension, right-click the HTML file → "Open with Live Server"
```

---

## File structure

| File | What it contains |
|------|------------------|
| `Hamid Corporation.html` | Entry point. Loads fonts, React/Babel, then all the scripts below. |
| `styles.css` | All styling. Design tokens (colors, radii, spacing) live in `:root`, with light/dark overrides. |
| `i18n.jsx` | **All text content** for the three languages, plus the business contact info (`CONTACT`). |
| `components-core.jsx` | Icon helper, nav + mobile menu, language switcher, hero, stat counters, floating WhatsApp/Call buttons. |
| `components-services.jsx` | Services grid (with category filter tabs) and the "Why us" section. |
| `components-pricing.jsx` | Pricing plans (`PLAN_META` holds the ₹ amounts), testimonials, and the Delhi NCR coverage map. |
| `components-faq.jsx` | FAQ accordion, booking form (validation + WhatsApp handoff), and footer. |
| `app.jsx` | The root component. Wires theme (light/dark), language, scroll-reveal, and the Tweaks panel. |
| `tweaks-panel.jsx` | In-page control panel (accent color, roundness, font, language, dark mode). |
| `assets/` | Photos used in the hero and "Why us" sections. |

---

## Where to change common things

- **Phone / WhatsApp number** → `i18n.jsx`, the `CONTACT` object (one place, used everywhere).
- **Prices** → `components-pricing.jsx`, the `PLAN_META` array.
- **Any visible text** → `i18n.jsx`, under `STRINGS.en` / `STRINGS.hi` / `STRINGS.ur`.
- **Service-area names** → `components-pricing.jsx`, the `AREAS` array.
- **Colors / fonts / spacing** → `styles.css`, the `:root` block.

---

## Suggested next step (optional)

This runs great as-is for a static site. If you want a production build with a bundler
(faster load, no in-browser Babel warning), ask Claude Code to:

> "Convert this to a Vite + React project, keeping the same components and styles."

That will give you `npm run dev` / `npm run build` and proper `.jsx` imports instead of
global `window` assignments.
