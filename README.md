# SNYPE HOCKEY — pilot website

A static, dependency-free intro/landing site for **SNYPE HOCKEY** by **NeuroPuck**.
Pure HTML/CSS/JS — no build step, no framework. Deploys as-is to any static host
(Vercel, GitHub Pages, Netlify, Cloudflare Pages).

> Standalone repo. The game/sensor code lives in the separate `neuropuck3d_unity` repo;
> this project never touches it.

## Run it locally

Just open `index.html`, or serve from the repo root (nicer for LAN/mobile testing):

```bash
python -m http.server 5173
# then visit http://localhost:5173
```

## Deploy (Vercel)

No build step — it's static. In Vercel: **New Project → import this repo → Framework
Preset: Other → Deploy** (root is the repo root; nothing to configure). Or from the repo
root with the CLI: `npx vercel` (preview) / `npx vercel --prod`.

## Structure

```
index.html            single page
assets/
  css/styles.css      all styling (brand red #C1272D on a dark ice palette)
  js/main.js          nav toggle, scroll reveals, waitlist form
  img/                brand wordmark + optimized drill/game posters + a real Unity capture
```

## Brand framing (important)

The site introduces the **brand** and the **product** separately, per the *NeuroPuck Foundation*:

- **NeuroPuck** = the company — a hockey **development** company whose purpose is to
  **inspire more hockey** (pillars: Competition · Experience · Community; "stick time, not
  screen time"). Introduced in the `#neuropuck` and `#roadmap` sections.
- **SNYPE HOCKEY** = NeuroPuck's **first product** — the projection AI shooting trainer
  (hero + product sections). **SNYPE** (synapse + snipe) is also the *development score*.

## Content sources

Copy pulled from the repo docs (README, docs/ARCHITECTURE, docs/SPEC, docs/RANKING,
puck_detection/README + YOLO) and the *NeuroPuck Foundation* brand document. Image assets:

- `neuropuck-wordmark.png` — optimized copy of `Assets/NeuroPuck/Resources/Logo/brand.png`.
- `drill-*.jpg`, `game-*.jpg` — optimized copies of the concept posters in `conceptart/`.
- `app-freeplay.jpg` — **a real in-engine capture** of the running Unity build (Free Play),
  taken via the MCP-for-Unity bridge. Shown in the `#app` ("This is the real thing") section.

Originals are untouched; no game, sensor, or Unity source was modified.

## Before going live (to-dos)

- **Contact email:** swap the placeholder `hello@neuropuck.ai` in
  `index.html` (CTA + footer) and `assets/js/main.js` (`CONTACT`) for the real inbox.
- **Waitlist backend:** the form has no server on the pilot — it validates, then hands off
  to a pre-filled `mailto:`. Wire it to a form service (Formspree, Netlify Forms, etc.) when ready.
- **Social/OG image:** currently omitted; add a rendered share card and point the `og:image` meta at it.
- Optional: chroma-key the green off the rank emblems in `Assets/.../Resources/Ranks/`
  to swap the CSS rank chips for the real crystal emblems.

## Notes

- Brand is **NEUROPUCK**, product is **SNYPE HOCKEY**. Some concept art misspells the title
  ("SNIYPE" / "SYNIPE") — the site typesets the correct **SNYPE HOCKEY** and only uses those
  arts as atmospheric drill/game visuals.
- English-first, responsive, keyboard-accessible, honors `prefers-reduced-motion`.
