# Project context for Claude Code

This is a static marketing landing page for **Hamid Corporation**, a Delhi-NCR appliance &
cooling repair business (AC, fridge, freezer, chiller, washing machine). See `README.md` for
the full file map and run instructions.

## Architecture (important)

- **No build step.** `Hamid Corporation.html` loads React 18, ReactDOM, and Babel Standalone
  from unpkg, then loads each `.jsx` file with `<script type="text/babel" src="...">`.
- Because each Babel script has its own scope, components are shared by assigning them to
  `window` at the bottom of each file (e.g. `Object.assign(window, { Nav, Hero, ... })`) and
  read back via globals. **Preserve this pattern** unless you intentionally migrate to a bundler.
- **Never name a styles object `styles`** at module scope — multiple files would collide.
  Existing CSS lives entirely in `styles.css`.

## Conventions

- All user-facing copy is centralized in `i18n.jsx` under `STRINGS.{en,hi,ur}`. Add new text
  there for all three languages, not inline in components.
- Business contact details (`CONTACT`) live in `i18n.jsx` — single source of truth.
- Urdu (`ur`) is RTL: the app sets `dir="rtl"` on `<html>`; check RTL styles in `styles.css`
  (search `[dir="rtl"]`) when adding layout.
- Design tokens (color, radius, spacing) are CSS custom properties in `styles.css :root`,
  with `[data-theme="dark"]` overrides. Use the existing `var(--*)` tokens; don't hardcode colors.
- Scroll-reveal uses a `data-shown` attribute (not a class) so it survives React re-renders —
  keep that if you touch the reveal logic in `app.jsx`.

## To run

Serve over http (not file://) because the `.jsx` files are fetched at runtime:
`python3 -m http.server 8000` → open `http://localhost:8000/Hamid%20Corporation.html`.
