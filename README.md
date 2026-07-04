# Aman Jaiswal — Personal Portfolio Website

[![Status](https://img.shields.io/badge/status-active%20development-yellow)](#)
[![Stack](https://img.shields.io/badge/stack-React%20%2B%20Vite%20%2B%20Framer%20Motion-blue)](#)
[![License](https://img.shields.io/badge/license-MIT-green)](#)
[![Last%20Updated](https://img.shields.io/badge/last%20updated-2026--07--04-blue)](#)

> A fast, accessible, **React + Vite** personal portfolio for **Aman Jaiswal
> — AI/ML Engineer & Web Developer**. Framer Motion animations, Lenis smooth
> scroll, custom cursor, dark/light theme.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Architecture](#architecture)
4. [Tech Stack](#tech-stack)
5. [Folder Structure](#folder-structure)
6. [Installation](#installation)
7. [Running Locally](#running-locally)
8. [Build & Deployment](#build--deployment)
9. [Editing Content](#editing-content)
10. [Contributing](#contributing)
11. [License](#license)
12. [Future Roadmap](#future-roadmap)
13. [Credits](#credits)

---

## Overview

This repository hosts the source for **amanjaiswal.dev** *(or whatever final
domain is chosen)* — a single-author personal site presenting:

- A **hero** with name, role, and animated CTAs.
- An **about** bio and **capabilities** library.
- A **portfolio of 8+ AI/ML projects** with rich hover states.
- An **experience timeline** (research internships and industry roles).
- A **visual resume** with sticky skills sidebar.
- A **contact page** with form and direct channels.

The site's primary goal is to be the canonical professional surface for Aman —
fast to load, easy to maintain, and pleasant to use on every device.

---

## Features

- **React 18 + Vite 5** — modern dev server, instant HMR, fast builds.
- **Framer Motion** animations — page transitions, scroll reveals, text
  reveals, count-up stats, magnetic CTAs.
- **Lenis** smooth scroll — premium feel on every interaction.
- **Custom cursor** with `mix-blend-mode: difference` (desktop only).
- **Dark & light theme** with `prefers-color-scheme` detection and
  `localStorage` persistence.
- **Mobile-first responsive** with animated hamburger → × morph.
- **Hash-based routing** — works on any static host (no server config).
- **Single source of truth** for content in `src/data.js`.
- **Accessibility** — semantic landmarks, ARIA labels, reduced-motion support.

---

## Architecture

```
┌──────────────────────────────────────────────────────────────────────┐
│                              Browser                                   │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐         │
│  │  Home   │ │  About  │ │  Work   │ │ Resume  │ │ Contact │         │
│  └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘         │
│       └───────────┴──────────┴───────────┴───────────┘               │
│                              │ React Router (HashRouter)              │
│                              ▼                                         │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  Layout (Nav + Page Transitions + Footer)                       │ │
│  └─────────────────────────────────────────────────────────────────┘ │
│       │ SmoothScroll (Lenis) · Cursor · Theme Provider               │
│       ▼                                                                │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │  Framer Motion · TextReveal · MagneticButton · CountUp          │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────┘
                                │
                                │  build → dist/
                                ▼
        ┌──────────────────────────────────────────────┐
        │  Netlify · Vercel · GitHub Pages · Cloudflare  │
        └──────────────────────────────────────────────┘
```

**Design principles:**

- **Content-first** — no JavaScript is required to read any page.
- **All theming via CSS custom properties** — dark mode is a one-class swap.
- **Animation is progressive enhancement** — `prefers-reduced-motion` and
  touch devices opt out automatically.

---

## Tech Stack

| Layer            | Tech                                                       |
| ---------------- | ---------------------------------------------------------- |
| Build            | Vite 5 + `@vitejs/plugin-react`                            |
| UI               | React 18, React Router 6 (HashRouter)                      |
| Animation        | Framer Motion 11                                           |
| Smooth scroll    | Lenis                                                       |
| Styling          | Vanilla CSS with custom properties (single global stylesheet) |
| Fonts            | Inter + Plus Jakarta Sans + JetBrains Mono via Google Fonts |
| Hosting          | Any static host (Netlify, Vercel, Cloudflare, GitHub Pages) |
| Analytics        | TBD (Plausible planned)                                    |

---

## Folder Structure

```
.
├── public/
│   ├── favicon.svg
│   ├── images/
│   │   └── profile.jpg
│   └── resume.pdf
│
├── src/
│   ├── main.jsx                 # React root
│   ├── App.jsx                  # Routes
│   ├── data.js                  # Single source of truth for content
│   │
│   ├── hooks/
│   │   └── useTheme.js          # Theme + localStorage
│   │
│   ├── components/
│   │   ├── Layout.jsx           # Nav + page transitions + footer
│   │   ├── Nav.jsx              # Top nav with scroll state + mobile menu
│   │   ├── Footer.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── SmoothScroll.jsx     # Lenis integration
│   │   ├── Cursor.jsx           # Custom cursor (desktop)
│   │   ├── MagneticButton.jsx   # Magnetic hover effect
│   │   ├── TextReveal.jsx       # FadeIn · TextReveal · StaggerReveal
│   │   ├── CountUp.jsx          # Number count-up animation
│   │   └── Icon.jsx             # Inline SVG icon set
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   │
│   └── styles/
│       ├── reset.css
│       ├── tokens.css           # Design tokens (colors, type, space)
│       └── global.css           # All component styles
│
├── index.html                   # Vite entry HTML
├── package.json
├── vite.config.js
├── .gitignore
│
├── AGENT.md                     # AI engineer instruction manual
├── PROJECT_STATUS.md            # Live state of the project
├── TODO.md                      # Roadmap
├── README.md                    # ← you are here
└── LICENSE                      # MIT (planned)
```

---

## Installation

> **Requirements:** Node.js 18+ and npm 9+ (or pnpm / yarn).

```powershell
# 1. Install dependencies
npm install

# 2. Start dev server (auto-opens browser)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

That's it — no env vars, no secrets, no backend.

---

## Running Locally

After `npm install`, run `npm run dev`. Vite serves on
`http://localhost:5173` with hot-reload on every save.

To preview the production build:
```powershell
npm run build
npm run preview
```

---

## Build & Deployment

### Build

```powershell
npm run build
```

Output lands in `dist/`. The build:

- Splits JS by route for better caching.
- Embeds CSS and minifies HTML.
- Targets `es2020` (works in all evergreen browsers).
- Uses relative paths (`base: './'`) so the bundle works in any subpath.

### Deploy to GitHub Pages (recommended)

1. Push the repo to GitHub.
2. Settings → Pages → Source: **GitHub Actions**.
3. Add `.github/workflows/deploy.yml` (planned in `TODO.md` H-07):

   ```yaml
   name: Deploy
   on:
     push:
       branches: [main]
   jobs:
     build-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with: { node-version: 20, cache: npm }
         - run: npm ci
         - run: npm run build
         - uses: actions/upload-pages-artifact@v3
           with: { path: ./dist }
         - id: deploy
           uses: actions/deploy-pages@v4
   ```

4. Enable Pages from the `github-pages` environment.

### Deploy to Netlify / Vercel / Cloudflare Pages

All three detect Vite out of the box. Build command: `npm run build`. Publish
directory: `dist`.

---

## Editing Content

Everything user-facing lives in **`src/data.js`**:

- `profile` — name, role, email, socials, resume URL.
- `stats` — hero marquee numbers.
- `capabilities` — skills grid.
- `projects` — all 8 projects.
- `experience` — timeline entries.
- `achievements` — recognition grid.
- `navLinks` — top nav.

To change copy, edit that file. To change visuals, edit the relevant page
in `src/pages/`.

---

## Contributing

This is a personal site, but PRs are welcome for:

- Typo / grammar fixes in copy.
- Accessibility improvements (with rationale).
- Performance improvements (with benchmarks).

### Commit / PR conventions

- **Branches**: `feature/<short-name>`, `fix/<short-name>`, `docs/<short-name>`.
- **Commits**: Conventional Commits (`feat: add JSON-LD person schema`).

> Don't open PRs that reformat unrelated files.

---

## License

Released under the **MIT License** (planned, see `TODO.md` M-01). Until that
file is committed, treat the contents as **All rights reserved** by Aman
Jaiswal.

---

## Future Roadmap

The detailed roadmap lives in [`TODO.md`](./TODO.md). Highlights:

- **Critical**: profile image optimization, OG meta tags, deploy workflow, OG
  preview.
- **High**: full keyboard a11y, contact form backend, JSON-LD `Person` schema.
- **Medium**: Lighthouse CI, Plausible analytics, service worker PWA.
- **Future**: i18n (English + Hindi), `/blog`, CMS-backed projects.

---

## Credits

- **Owner & author**: [Aman Jaiswal](https://github.com/amanraj74).
- **Contact**: <aerraj50@gmail.com> ·
  [LinkedIn](https://www.linkedin.com/in/aman-jaiswal-05b962212/) ·
  [GitHub](https://github.com/amanraj74).
- **Stack**: React · Vite · Framer Motion · Lenis.
- **Fonts**: [Inter](https://rsms.me/inter/),
  [Plus Jakarta Sans](https://github.com/itsmikenikolai/plus-jakarta-sans),
  JetBrains Mono via Google Fonts.

---

<p align="center">
  Built with React, Vite, and an unreasonable amount of attention to detail.
  <br/>
  © 2025–2026 Aman Jaiswal. All rights reserved.
</p>