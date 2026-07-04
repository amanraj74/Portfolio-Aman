# PROJECT_STATUS.md

> Live snapshot of the **Aman Jaiswal — Personal Portfolio Website**.
> This file is the single source of truth for "where the project is right now".

---

## Project Name

**Aman Jaiswal — Personal Portfolio Website**
Internal codename: `portfolio-v2` (React rewrite)

---

## Project Goal

A polished, fast, accessible React-powered personal portfolio that presents
Aman Jaiswal's:

- Professional identity (name, role, photo)
- Skills in AI/ML and web development
- Featured AI/ML projects (with links to GitHub / LinkedIn)
- Experience timeline (research internships and industry roles)
- Achievements (hackathons, certifications)
- An interactive resume
- Multiple channels to get in touch

Targets:

- **Primary audience**: recruiters, hiring managers, research collaborators.
- **Secondary audience**: hackathon organisers, open-source maintainers, peers.

---

## Current Architecture

- **Type**: Static, serverless, SPA built with React.
- **Frontend**: React 18 + React Router 6 (HashRouter).
- **Build**: Vite 5 — instant HMR, fast production builds.
- **Animation**: Framer Motion 11 — page transitions, scroll reveals, count-up.
- **Smooth scroll**: Lenis 1.1.
- **Styling**: Vanilla CSS with custom properties (single global stylesheet).
- **Hosting target**: Any static host (GitHub Pages, Netlify, Vercel,
  Cloudflare Pages).
- **External dependencies**: Google Fonts only (Inter, Plus Jakarta Sans,
  JetBrains Mono).

### Folder layout

```
/
├── public/
│   ├── favicon.svg
│   ├── images/profile.jpg
│   └── resume.pdf
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── data.js
│   ├── hooks/useTheme.js
│   ├── components/ (Layout, Nav, Footer, Cursor, SmoothScroll, MagneticButton, TextReveal, CountUp, ThemeToggle, Icon)
│   ├── pages/ (Home, About, Projects, Resume, Contact, NotFound)
│   └── styles/ (reset.css, tokens.css, global.css)
├── index.html
├── package.json
├── vite.config.js
├── AGENT.md
├── PROJECT_STATUS.md
├── TODO.md
└── README.md
```

---

## Completed Features

- [x] Vite + React project scaffold
- [x] HashRouter with 6 routes (`/`, `/about`, `/projects`, `/resume`,
      `/contact`, `*`)
- [x] Custom design system (tokens.css + global.css, 39 KB total)
- [x] Dark + light theme with system preference detection + localStorage
- [x] Smooth scroll via Lenis
- [x] Custom cursor (desktop only, `mix-blend-mode: difference`)
- [x] Page transitions (Framer Motion `AnimatePresence`)
- [x] Scroll-triggered text reveals (word-by-word) and stagger reveals
- [x] Count-up animation for stats
- [x] Magnetic CTAs on primary buttons
- [x] Mobile drawer with animated hamburger → × morph
- [x] Nav with scroll-state (backdrop-filter on scroll) and active link
- [x] Hero with parallax + animated availability dot
- [x] Selected work, capabilities, experience, achievements, contact CTA
- [x] Projects page (all 8 projects, rich hover states)
- [x] Resume page (sticky sidebar with skill bars, quick info, download card)
- [x] Contact page (form with validation + mailto fallback + channel cards)
- [x] Custom 404 page
- [x] Favicon (gradient "AJ" mark)
- [x] Profile image and resume PDF in `public/`
- [x] Full `prefers-reduced-motion` support
- [x] Responsive mobile-first layout

---

## Features In Progress

None currently.

---

## Missing Features

- [ ] Production deployment (no deploy workflow yet)
- [ ] Contact form backend (currently falls back to `mailto:`)
- [ ] Profile image optimization (`profile.jpg` is 3.2 MB → should be < 300 KB
      WebP)
- [ ] Open Graph image (`og-image.png` 1200×630)
- [ ] Open Graph + Twitter Card meta tags
- [ ] `sitemap.xml` + `robots.txt`
- [ ] JSON-LD `Person` schema on home page
- [ ] `LICENSE` file (MIT)
- [ ] Lighthouse CI in GitHub Actions
- [ ] Plausible analytics (opt-in)
- [ ] `404.html` for static hosts that don't support SPAs
- [ ] Service worker / PWA
- [ ] i18n (English + Hindi)

---

## Backend Status

**Not applicable.** SPA only.

---

## Frontend Status

| Concern              | Status      | Notes                                                       |
| -------------------- | ----------- | ----------------------------------------------------------- |
| Build pipeline       | ✅ Vite 5   | Fast HMR, optimized build                                   |
| Routing              | ✅ Router 6 | HashRouter (works on any static host)                       |
| Page transitions     | ✅          | Framer Motion AnimatePresence                               |
| Theme                | ✅          | Dark default, light opt-in, persists, follows system pref   |
| Custom cursor        | ✅          | `mix-blend-mode: difference`, hover-aware, opt-out on touch |
| Smooth scroll        | ✅          | Lenis, disabled on reduced-motion                           |
| Text reveals         | ✅          | Word-by-word mask animation                                 |
| Scroll reveals       | ✅          | IntersectionObserver via Framer Motion `useInView`          |
| Count-up             | ✅          | Spring-eased, runs once in view                             |
| Magnetic CTAs        | ✅          | Subtle, opt-out on touch / reduced-motion                   |
| Hover on cards       | ✅          | Lift, glow, scale on project visuals                        |
| Mobile menu          | ✅          | Animated hamburger, full-screen drawer with stagger         |
| Responsive           | ✅          | Mobile-first breakpoints, fluid type via `clamp()`          |
| Accessibility        | ✅ Mostly   | Semantic landmarks, ARIA, focus rings, skip-link, reduced-motion |
| Cross-browser        | ✅          | Modern evergreen targets (es2020)                           |
| SEO                  | ⚠️ Partial | Title + description set; missing OG, JSON-LD, sitemap       |
| Performance          | ⚠️ Pending | Pending `profile.jpg` WebP optimization                     |

---

## Database Status

**Not applicable.**

---

## Authentication Status

**Not applicable.**

---

## API Status

**Not applicable** (no client-side API calls). Future contact form will
either use a serverless function or `mailto:` fallback.

---

## Deployment Status

- **Deployed?** ❌ Not yet.
- **Target**: GitHub Pages via `.github/workflows/deploy.yml` (planned).
- **Domain**: TBD.
- **HTTPS**: Automatic via host provider.

---

## Testing Status

- **Manual smoke**: Run `npm run dev`, walk each page, toggle theme, submit
  form, click all CTAs.
- **Automated**: None yet.
- **CI**: None yet.

---

## Known Bugs

1. **`profile.jpg` is 3.2 MB** — Lighthouse Performance risk.
2. **No Open Graph image** — link previews are unbranded.
3. **No deploy workflow** — site is not yet live.
4. **No sitemap / robots** — search engine coverage limited.
5. **Contact form** falls back to `mailto:` — if user has no mail client
   configured, the form is a no-op (shows the error message).

---

## Known Risks

- **Brand risk** — any visual regression on the hero or resume page reflects
  on the owner's professional image.
- **SEO risk** — without OG tags and `sitemap.xml`, link previews are
  unbranded.
- **Accessibility risk** — custom cursor + magnetic buttons + Lenis need
  careful review for keyboard / screen-reader users (currently disabled on
  touch, animations are reduced-motion-aware).
- **Performance risk** — large `profile.jpg` is the main risk; Lenis and
  Framer Motion are reasonable in size (~50 KB gzipped combined).
- **Build risk** — Vite + React Router `HashRouter` ensures GitHub Pages
  works without server config; if migrating to `BrowserRouter`, base path
  must be configured.

---

## Technical Debt

1. **No CSS Modules / scoped styles** — single global stylesheet works but
   risks class collisions. Acceptable for this size.
2. **Data is in JS** — for true CMS-driven content, swap to MDX or a JSON
   file fetched at build time.
3. **Resume is duplicated** — `data.js` + the `experience` array in
   `Resume.jsx` page. Acceptable for now.
4. **No tests** — zero unit or integration tests. Add Vitest if logic grows.
5. **Single global stylesheet** — 39 KB unminified. Split only if it grows.

---

## Current Sprint

**Sprint 1 — Production Readiness**

Theme: optimize assets, add deployment, add missing SEO/meta.

In-scope:

1. Optimize `profile.jpg` → WebP + multiple sizes.
2. Create `og-image.png` and add OG/Twitter meta tags.
3. Add `.github/workflows/deploy.yml` for GitHub Pages.
4. Add `sitemap.xml` and `robots.txt`.
5. Add `LICENSE` (MIT).
6. Add JSON-LD `Person` schema to home page.

---

## Last Completed Task

**React + Vite rewrite** — Converted the static HTML site to a React SPA
with Vite, React Router, Framer Motion, and Lenis. Implemented custom cursor,
text reveals, count-up, magnetic CTAs, page transitions, and a unified design
system.

---

## Recommended Next Task

> **Optimize `profile.jpg` and add OG/Twitter meta tags.**

These are the two highest-impact items for production readiness. The image
optimization removes a 3.2 MB payload; the OG tags make link previews
onboard the brand.

This unblocks the deploy workflow (H-07 in `TODO.md`) — once both are done,
the site is ready to ship.

---

## Last Updated

- **2026-07-04** — React + Vite rewrite complete. Status reflects the
  codebase as observed on this date.