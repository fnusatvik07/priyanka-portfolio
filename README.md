# Priyanka Neogi — Portfolio

A production-grade personal portfolio for an AI / LLM Engineer. The entire site renders from a single data file — **`portfolio-data.json`** — so it stays maintainable: update the JSON, and the whole site updates. No resume content is hardcoded in components.

- **Stack:** React 18 · TypeScript · Vite 5 · Tailwind CSS v4 · Framer Motion
- **Design:** enterprise-SaaS aesthetic — light surface, soft cards, one confident accent. No gradients, blobs, particles, or typing effects.
- **Source of truth:** `PRIYANKA_NEOGI_AI_DEVOLOPER_CV.pdf` → `portfolio-data.json`. Every line traces back to the resume.

---

## Project structure

```
portfolio/
├── portfolio-data.json      ← canonical data (single source of truth)
├── portfolio-strategy.md    ← content/positioning strategy
├── index.html               ← SEO meta, Open Graph, Twitter, JSON-LD
├── public/
│   ├── portfolio-data.json  ← runtime copy fetched by the app (kept in sync)
│   ├── favicon.svg
│   ├── og-image.svg         ← social share card
│   ├── robots.txt
│   └── sitemap.xml
├── scripts/
│   └── sync-data.mjs        ← copies root JSON → public/ (npm run sync-data)
└── src/
    ├── main.tsx
    ├── App.tsx              ← composes sections; renders only sections with data
    ├── index.css            ← design system tokens (colors, type, spacing, shadows)
    ├── types/portfolio.ts   ← TypeScript contract for the JSON
    ├── hooks/
    │   └── usePortfolioData.ts
    └── components/          ← Nav, Hero, About, Projects, Experience,
                               Skills, Certifications, Contact, Footer, …
```

---

## Local development

Requires Node 18+ (tested on Node 25).

```bash
cd portfolio
npm install
npm run dev
```

Open the URL Vite prints (default <http://localhost:5173>).

---

## Editing content

1. Edit **`portfolio-data.json`** in the project root (the canonical file).
2. Sync it to the runtime copy:
   ```bash
   npm run sync-data
   ```
   (The dev server reads `public/portfolio-data.json`.)
3. That's it — no component changes needed. Empty arrays/sections are automatically hidden, so adding awards, talks, or publications later just means filling those arrays.

### Adding your links
Per the current build, link buttons are intentionally **omitted** until real URLs exist (no broken links). To enable them, fill in:
- `socials.linkedin`, `socials.github` → renders LinkedIn / GitHub buttons in the Contact section.
- `certifications[].link` → makes each certificate a clickable link.

Then run `npm run sync-data`.

---

## Build & preview

```bash
npm run build      # type-checks, then builds to dist/
npm run preview    # serves the production build locally
```

The build copies `public/` (including `portfolio-data.json`) into `dist/`.

---

## Deployment — GitHub Pages (live)

This repo is deployed to GitHub Pages via GitHub Actions.

- **Live URL:** <https://fnusatvik07.github.io/priyanka-portfolio/>
- **Workflow:** `.github/workflows/deploy.yml` builds and publishes on every push to `main` — no `dist/` is committed.
- **Base path:** set in `vite.config.ts` to `/priyanka-portfolio/` for production builds only (dev stays at `/`). The runtime data/video fetches use `import.meta.env.BASE_URL`, so they follow the base path automatically.

To deploy an update, just push to `main`:
```bash
git add -A && git commit -m "update" && git push
```

If you rename the repo, update the `base` in `vite.config.ts` and the absolute URLs in `index.html`, `public/robots.txt`, and `public/sitemap.xml`.

### Other hosts (Vercel / Netlify / S3 / Cloudflare)
The output in `dist/` is a plain static site. Build with `npm run build` (output dir `dist`). On a root domain, set `base` back to `'/'`.

### Before sharing widely
- Add real links to `portfolio-data.json` (see *Adding your links*), then `npm run sync-data` and push.

---

## Design system

All tokens live in `src/index.css` under `@theme`. Change the brand color by editing **`--color-accent`** — it cascades everywhere. The type scale, spacing rhythm, border radii, and shadows are defined there too.

## Accessibility & performance
- Semantic landmarks (`header`/`main`/`footer`/`section`), skip-to-content link, labeled sections, focus-visible rings.
- `prefers-reduced-motion` fully respected (animations disabled).
- System font fallbacks + preconnected web fonts; SVG assets; lazy scroll-reveal.
- Production JS ≈ 87 KB gzipped.
