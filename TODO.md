# TODO.md

> Authoritative task roadmap for the **Aman Jaiswal — Personal Portfolio
> Website** (React + Vite build).
>
> Tasks ranked **Critical → High → Medium → Low → Future**.
> Tick the box when shipped AND `PROJECT_STATUS.md` is updated.
>
> Convention: `[ ]` pending · `[x]` done · `[~]` in progress · `[!]` blocked.

---

## Critical (block production deploy)

> Without these, the site cannot be considered production-ready.

### [ ] C-01 — Optimize `profile.jpg`

- **Priority**: P0
- **Complexity**: S (~30 min)
- **Dependencies**: none
- **Expected files**: `public/images/profile.webp`, `public/images/profile@2x.webp`
- **Expected outcome**: WebP variants < 300 KB total; hero photo loads with
  `loading="eager"` + `fetchpriority="high"`.
- **Check**: Lighthouse Performance ≥ 95 on mobile.

### [ ] C-02 — Add `og-image.png`

- **Priority**: P0
- **Complexity**: S
- **Expected files**: `public/og-image.png` (1200×630)
- **Expected outcome**: Brand card preview on Twitter/LinkedIn/Slack.
- **Check**: https://www.opengraph.xyz/ shows the correct preview.

### [ ] C-03 — Add Open Graph + Twitter Card meta tags

- **Priority**: P0
- **Complexity**: S
- **Expected files**: `index.html`, per-page meta via React Helmet or
  per-page `<title>`.
- **Expected outcome**: `og:title`, `og:description`, `og:image`,
  `twitter:card` for every page.
- **Check**: Inspect element on each page shows correct tags.

### [ ] C-04 — Add `.github/workflows/deploy.yml`

- **Priority**: P0
- **Complexity**: S
- **Expected files**: `.github/workflows/deploy.yml`
- **Expected outcome**: Pushing to `main` builds and deploys to GitHub Pages.
- **Check**: A bad push fails the workflow visibly.

### [ ] C-05 — Add `LICENSE` (MIT)

- **Priority**: P0
- **Complexity**: XS
- **Expected files**: `LICENSE`
- **Check**: GitHub recognizes the license.

---

## High (must ship before sprint close)

### [ ] H-01 — Add `sitemap.xml` + `robots.txt`

- **Priority**: P1
- **Complexity**: S
- **Expected files**: `public/sitemap.xml`, `public/robots.txt`
- **Expected outcome**: Search engines get a clean crawl policy and full
  page list.
- **Check**: `curl /robots.txt` returns the file with the expected `Sitemap`
  line.

### [ ] H-02 — Add JSON-LD `Person` schema to home page

- **Priority**: P1
- **Complexity**: S
- **Expected files**: `src/pages/Home.jsx`
- **Expected outcome**: Schema.org `Person` JSON-LD with name, role, sameAs
  socials, knowsAbout skills.
- **Check**: Google Rich Results Test passes.

### [ ] H-03 — Wire contact form to a real backend

- **Priority**: P1
- **Complexity**: M (~2 h)
- **Dependencies**: choose backend (Formspree / Web3Forms / serverless).
- **Expected files**: `src/pages/Contact.jsx`
- **Expected outcome**: Submitting posts to the chosen service, shows a
  success message, retains the user's content on validation error.
- **Check**: Submit a test message → confirmation appears.

### [ ] H-04 — Add 404.html for static hosts

- **Priority**: P1
- **Complexity**: XS
- **Expected files**: `public/404.html` (mirror of the React 404)
- **Expected outcome**: Visiting a non-existent path on a static host that
  serves `404.html` shows a branded page.
- **Check**: Visit a 404 URL → branded 404.

### [ ] H-05 — Add skip-to-content link

- **Priority**: P1
- **Complexity**: XS
- **Expected files**: `src/components/Layout.jsx`
- **Expected outcome**: First Tab focuses a "Skip to content" link.
- **Check**: Keyboard-only walkthrough.

### [ ] H-06 — Verify keyboard accessibility end-to-end

- **Priority**: P1
- **Complexity**: M
- **Expected outcome**: All interactive elements reachable; visible focus;
  no traps.
- **Check**: Manual keyboard walkthrough + axe DevTools 0 critical issues.

---

## Medium (polish & maintainability)

### [ ] M-01 — Add Vitest + first test

- **Complexity**: M
- **Expected outcome**: `npm test` runs unit tests for `data.js` and
  `useTheme.js`.
- **Check**: `npm test` exits 0.

### [ ] M-02 — Add Lighthouse CI in GitHub Actions

- **Complexity**: M
- **Dependencies**: C-04

### [ ] M-03 — Add Plausible analytics (opt-in)

- **Complexity**: S
- **Dependencies**: domain set

### [ ] M-04 — Add React Helmet for per-page `<title>` + meta

- **Complexity**: S

### [ ] M-05 — Add a `now` page (what I'm working on this month)

- **Complexity**: S

### [ ] M-06 — Add a `blog` route (MDX-driven posts)

- **Complexity**: M

### [ ] M-07 — Add `og-image` generator script

- **Complexity**: M
- **Expected outcome**: Run `npm run og` to produce `public/og-image.png`
  from the same brand tokens.

### [ ] M-08 — Service worker for offline support

- **Complexity**: M
- **Expected outcome**: Site loads offline; static assets cached.

### [ ] M-09 — Refactor `src/data.js` → `src/content/` with separate files

- **Complexity**: S
- **Expected outcome**: One file per data concern (profile, projects, etc.).

### [ ] M-10 — Add `404` test for the NotFound page route

- **Complexity**: XS

---

## Low (nice to have)

### [ ] L-01 — Add Three.js hero background (subtle)

- **Complexity**: M
- **Expected outcome**: Light 3D particles / gradient mesh in hero.

### [ ] L-02 — Add a "copy email" button on the contact page

- **Complexity**: XS

### [ ] L-03 — Add a "back to top of section" mini-nav inside the resume

- **Complexity**: S

### [ ] L-04 — Add prefers-color-scheme toggle button in nav

- **Complexity**: XS
- **Expected outcome**: Three-state: light / dark / system.

### [ ] L-05 — Generate `resume.pdf` from the same data

- **Complexity**: L
- **Expected outcome**: One `data.js` change updates both the visual resume
  and the PDF.

### [ ] L-06 — Add view-transition API for native page transitions

- **Complexity**: S
- **Expected outcome**: Native browser transitions when supported.

---

## Future Improvements

### [ ] F-01 — Multi-language support (English + Hindi)

- **Complexity**: L
- **Dependencies**: i18n library (e.g. `react-i18next`)

### [ ] F-02 — Move content to MDX (markdown + JSX)

- **Complexity**: M
- **Expected outcome**: Write projects / experience as MDX with embedded
  React components.

### [ ] F-03 — Add a public talks / publications page

- **Complexity**: M

### [ ] F-04 — CMS-driven project list (Sanity, Tina, or just JSON)

- **Complexity**: L

### [ ] F-05 — Add an RSS feed for `/blog`

- **Complexity**: XS (once `/blog` exists)

### [ ] F-06 — PWA: `manifest.webmanifest`, service worker, install prompt

- **Complexity**: M

### [ ] F-07 — A/B test hero copy variations

- **Complexity**: L

### [ ] F-08 — Move to TypeScript

- **Complexity**: M
- **Dependencies**: M-01 (Vitest)

---

## Completed (move to `PROJECT_STATUS.md` "Completed Features" when ticked)

- [x] AGENT.md created
- [x] PROJECT_STATUS.md created
- [x] TODO.md created
- [x] README.md created
- [x] React + Vite + Framer Motion rewrite
- [x] Lenis smooth scroll integration
- [x] Custom cursor (desktop)
- [x] Dark + light theme with persistence
- [x] Working mobile drawer with animated hamburger
- [x] Hash-based routing
- [x] Page transitions
- [x] Text reveals, count-up, magnetic CTAs

---

## Suggested Execution Order

1. C-01 → C-02 → C-03 → C-04 → C-05 (one sitting, ~2 h total)
2. H-01 → H-02 → H-05 (small, ~1 h)
3. H-06 (keyboard a11y pass)
4. H-03 (contact form backend — last because requires a service decision)
5. H-04 (404.html)

> After Critical + High are all ticked, the site is shippable.
> Medium items proceed one at a time.