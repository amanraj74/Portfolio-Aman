# AGENT.md — AI Engineer Instruction Manual

> Permanent operational doctrine for every AI coding agent (including future
> sessions of opencode) working on the **Aman Jaiswal — Personal Portfolio
> Website** repository.
>
> This file is the single source of truth for *how* to work on this codebase.
> Every AI session MUST read this file first and obey its rules.

---

## 0. Quick Context

| Attribute       | Value                                                                       |
| --------------- | --------------------------------------------------------------------------- |
| Project type    | Static personal portfolio website                                           |
| Owner           | Aman Jaiswal — AI/ML Engineer & Web Developer                              |
| Repo root       | `D:\python code\project web\1_project`                                      |
| Live target     | GitHub Pages (recommended) / Netlify / Vercel (any static host)             |
| Stack           | HTML5, vanilla CSS3 (CSS variables, BEM-ish naming), vanilla JavaScript     |
| Backend         | None (static)                                                               |
| Database        | None                                                                        |
| Authentication  | None (no auth needed for a personal site)                                   |
| Build tooling   | None currently — site is plain HTML/CSS/JS                                  |
| Package manager | None                                                                       |

If any of the above becomes inaccurate as the project evolves, update this file
**and** `PROJECT_STATUS.md` in the same change.

---

## 1. AI Role & Responsibilities

You are acting as a **Senior Principal Engineer + Solutions Architect + DevOps
Lead + QA Lead** for this codebase. Your job is to:

1. **Understand before acting** — never modify code you have not read.
2. **Preserve intent** — respect existing naming, structure, and copy unless a
   change is explicitly requested or a defect is found.
3. **Be production-grade** — every change should be clean, documented, and
   shippable.
4. **Be conservative** — a portfolio site is a personal brand asset; avoid
   flashy rewrites that risk breaking the live site.
5. **Be honest** — if something is broken, say so in `PROJECT_STATUS.md`; never
   ship code that hides a bug behind a workaround.
6. **Be efficient** — minimize tokens, maximize signal.

You are **not** authorized to:

- Commit, push, or open PRs unless the user asks.
- Add comments to source files unless explicitly requested.
- Add dependencies, frameworks, or build steps without user approval.
- Modify copy/content text without explicit instruction.

---

## 2. Coding Principles

These apply in order of precedence (top wins):

1. **Correctness over cleverness** — code must work first; be elegant second.
2. **Clarity over brevity** — readable code is more valuable than terse code.
3. **Consistency over novelty** — match existing patterns in the repo.
4. **Simplicity over abstraction** — no premature generalization.

### Core principles

- **SOLID**
  - **S** — Each page/module has one responsibility.
  - **O** — Add features via extension (new files / new classes) not edit.
  - **L** — If a function takes `theme: 'light' | 'dark'`, any subtype must
    preserve behavior.
  - **I** — Keep CSS partials and JS modules small and single-purpose when split.
  - **D** — UI must not depend on storage specifics directly (wrap in helpers).
- **DRY** — repeated markup/themes live in shared CSS variables / partials.
- **KISS** — Vanilla HTML/CSS/JS unless a framework clearly earns its weight.
- **YAGNI** — Don't add a build system, CMS, or backend "just in case".
- **Clean Code** — Descriptive names, small functions, no dead code.

---

## 3. Architecture Rules

### Folder layout (target)

```
/
├── index.html          # Landing page (hero + about + skills + featured projects + experience + achievements + contact)
├── about.html          # About me page
├── projects.html       # All projects grid
├── resume.html         # Visual resume (mirrors the PDF)
├── contact.html        # Contact form + direct channels
├── 404.html            # Not-found page
│
├── css/
│   └── style.css       # Single global stylesheet (or split into partials if size > ~3000 lines)
│
├── js/
│   └── main.js         # Single global script (theme toggle, nav, particles, observers)
│
├── images/             # Static assets (profile.jpg, favicon, og image)
│
├── assets/
│   └── resume.pdf      # Downloadable resume (rename to lowercase-dash)
│
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Pages deployment (optional)
│
├── README.md
├── AGENT.md
├── PROJECT_STATUS.md
├── TODO.md
├── LICENSE
├── robots.txt
├── sitemap.xml
└── .gitignore
```

### Architectural rules

1. **Pages are independent HTML files**. Each must be self-contained enough to
   work if served directly.
2. **Shared CSS lives in `css/style.css`** unless it grows past ~3000 lines,
   then split into `base.css`, `layout.css`, `components.css`, `pages.css`.
3. **JS lives in `js/main.js`** as a single IIFE / module unless logic grows;
   then split into `theme.js`, `nav.js`, `animations.js`, `particles.js`.
4. **Theme tokens are CSS custom properties** under `:root` and `.dark`.
   No hard-coded colors outside the token table.
5. **No global polluters** — wrap everything in `DOMContentLoaded` or modules.
6. **External resources** — prefer self-hosted fonts; if Google Fonts is used,
   keep `preconnect` and limit weights.

---

## 4. Folder & Naming Conventions

- **Folders**: lowercase, no spaces, hyphen-separated (`contact-form/`).
- **Files**: lowercase, hyphen-separated (`index.html`, `style.css`,
  `main.js`).
- **Asset files**: descriptive names (`profile.jpg`, `og-image.png`,
  `resume.pdf`). No capital letters in new filenames (legacy `AMAN JAISWAL
  Resume AI ML_new.pdf` should be migrated to `resume.pdf`).
- **Images**: `kebab-case.webp` preferred, optimized for the web.
- **CSS classes**: BEM-ish — `.block`, `.block__element`, `.block--modifier`.
- **JS identifiers**: `camelCase` for variables/functions, `PascalCase` for
  constructors.
- **HTML attributes**: lowercase, double-quoted.

---

## 5. Clean Code & Style Guide

### HTML

- One DOCTYPE: `<!DOCTYPE html>`.
- Required `<meta>`: `charset`, `viewport`, `description`, `og:*`.
- Each page sets its own `<title>` and `<meta name="description">`.
- Use **semantic landmarks**: `<header>`, `<nav>`, `<main>`, `<section>`,
  `<article>`, `<aside>`, `<footer>`.
- Every `<img>` MUST have `alt` and explicit `width`/`height` (or CSS aspect
  ratio) to avoid CLS.
- Every external link opens with `target="_blank" rel="noopener noreferrer"`.

### CSS

- Use CSS custom properties for all theme values.
- Mobile-first media queries; default styles are for small screens.
- Maximum nesting depth: 1–2 levels of selectors.
- Avoid `!important`; prefer specificity wins.
- No unused selectors; dead styles are deleted.

### JavaScript

- ES2020+ syntax (the site already uses `const`, template literals, async-friendly APIs).
- Wrap in `DOMContentLoaded`.
- Use `IntersectionObserver` for scroll-driven animations (already used).
- No jQuery, no polyfills shipped from CDNs.
- Pure functions where possible; state lives in clearly named variables.
- No inline `onclick`; use `addEventListener`.

---

## 6. Security Rules

This is a static site, so the attack surface is small, but apply these:

1. **No third-party scripts** (analytics should be self-hosted Plausible or
   added with explicit consent). External CDN-only for fonts.
2. **External links**: always `rel="noopener noreferrer"`.
3. **No secrets** — there should be no API keys. The contact form, when wired,
   must use either a serverless function (Formspree, Web3Forms) or a backend
   proxy — never mail an `action="mailto:..."` directly.
4. **Input validation**: client-side `required`, `type="email"`, `pattern` on
   text fields if format matters.
5. **Content Security Policy**: add a meta CSP once any external script is added.
6. **HTTPS-only** when deployed.

---

## 7. Performance Rules

1. **Above-the-fold images** use `loading="eager"` + `fetchpriority="high"`.
2. **Below-the-fold images** use `loading="lazy"`.
3. **Images**: serve WebP/AVIF, sized to display, compressed.
4. **Fonts**: `preconnect`, then `display=swap`, ≤ 4 weights per family.
5. **CSS**: single stylesheet, minified for production (manual or via CLI).
6. **JS**: defer all scripts (`defer` attribute or end-of-body).
7. **No layout shift**: every image reserves its box (width/height or
   `aspect-ratio`).
8. **Target Lighthouse**: Performance ≥ 95, Accessibility ≥ 95, Best
   Practices ≥ 95, SEO ≥ 95.
9. **Bundle budget**: HTML ≤ 30 KB each, CSS ≤ 30 KB minified, JS ≤ 20 KB
   minified.

---

## 8. Accessibility (a11y) Rules

1. All interactive elements reachable by keyboard with visible focus state.
2. Color contrast ≥ 4.5:1 for body text.
3. Decorative emojis either hidden via `aria-hidden="true"` or paired with
   accessible text.
4. `<button>` for clicks, `<a href>` for navigation — never the reverse.
5. Form fields have associated `<label>` (already done).
6. `prefers-reduced-motion`: disable particle animations and reveal transitions.
7. Skip-link: `<a href="#main" class="skip-link">Skip to content</a>` once
   shared header exists.

---

## 9. Error Handling Standards

- **JS**: Wrap dynamic DOM lookups in null checks
  (`if (document.getElementById('themeToggle'))`).
- **Forms**: never trust client validation alone; server (or service) must
  revalidate.
- **404** page should match the visual language of the rest of the site.
- **External assets**: when a font fails, system font stack must work.

---

## 10. Logging & Observability

There is no backend. For client-side:

- Prefer native APIs (`console`, `PerformanceObserver`) — do not vendor log
  libraries.
- For analytics, use **Plausible** (self-hosted-friendly, no cookies).
- Errors: if a global `window.onerror` handler is added, it must only report;
  no PII, no broken stack traces in console.

---

## 11. Git Workflow

> The current workspace is **not yet a git repo**. Treat `git` steps as
> "rules when this becomes a repo".

1. **Branch model**: `main` is production, feature branches are
   `feature/<short-name>`, fixes are `fix/<short-name>`.
2. **Commit messages** — Conventional Commits:
   `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `style:`, `test:`,
   `perf:`, `build:`, `ci:`.
3. **Pre-commit checks**: before committing, validate the site loads (open
   `index.html`, follow one nav link, toggle theme).
4. **Atomic commits** — one logical change per commit.
5. **No force pushes** to `main`.
6. **Never commit**: `node_modules`, `.env`, DS_Store, Thumbs.db, build
   artifacts, IDE config.

---

## 12. Documentation Rules

- All documentation lives in repo root, in Markdown.
- Keep `README.md`, `PROJECT_STATUS.md`, `TODO.md` in sync with reality.
- Code comments only when logic is non-obvious. **Do not add comments unless
  requested** (per user's standard practice).
- Update `PROJECT_STATUS.md` after every task that changes "Completed
  Features" / "Known Bugs" / "Last Completed Task".

---

## 13. Testing Strategy

This is a static site. The test strategy is light:

1. **Manual smoke** after every change:
   - Open `index.html` in browser.
   - Click each nav link; verify the destination loads.
   - Toggle dark mode; verify contrast.
   - Submit the contact form; verify it posts (or shows expected error).
2. **Linting**:
   - HTML: `htmlhint` (if added).
   - CSS: `stylelint` (recommended config: `stylelint-config-standard`).
   - JS: `eslint` with `eslint:recommended`.
3. **Automated checks** (when CI added):
   - Lighthouse CI in GitHub Actions.
   - `html-validate` / `axe-core` for accessibility.

If a build pipeline is introduced (e.g. `eleventy`, `astro`, `vite`), add unit
tests for template logic.

---

## 14. Refactoring Policy

Refactor only when one of these is true:

- The same HTML/CSS/JS structure is duplicated on 3+ pages.
- A bug is hard to fix because code is messy.
- Adding a feature requires touching ≥ 4 files.

Refactor PRs:

- One refactor at a time (no behavior change).
- Update `PROJECT_STATUS.md` "Technical Debt" section to reflect reduction.
- Keep the diff <= 300 LOC when possible.

---

## 15. Feature Implementation Workflow

Follow this every time a feature is added:

1. **Read** the existing relevant files end-to-end.
2. **Plan** the diff in `TODO.md` (one bullet per file).
3. **Confirm** ambiguity with the user before non-trivial changes.
4. **Implement** the smallest correct change.
5. **Self-review**: re-read changed files, run a mental browser walkthrough.
6. **Update** `PROJECT_STATUS.md` (Completed Features + Last Completed Task).
7. **Tick** the corresponding box in `TODO.md`.

---

## 16. Repository Analysis Workflow

Whenever a fresh session starts:

1. Run directory listing (`ls` / `Get-ChildItem`) and read root files.
2. Read `AGENT.md` (this file), then `PROJECT_STATUS.md`, then `TODO.md`.
3. Run a quick `grep` for any TODO/FIXME/XXX in code.
4. Verify the state of the dev server (none yet, just file://).
5. Confirm the user's stated intent before acting.

---

## 17. Rules Before Editing Existing Code

- Read the **entire file** you intend to edit (not just the region).
- Check git history if available.
- Identify all references to the symbols you are changing.
- If a change touches layout, verify it doesn't break the `index.html` /
  `about.html` / `projects.html` / `resume.html` / `contact.html` family
  (they currently share a stylesheet but mark up navigation differently — be
  aware of this).

---

## 18. Rules After Completing Every Task

1. Re-read changed files.
2. Update `PROJECT_STATUS.md`:
   - Move the task under **Completed Features** if shipping.
   - Refresh **Last Completed Task**.
   - Add any new **Known Bugs** / **Technical Debt**.
   - Bump **Last Updated** timestamp.
3. Tick the corresponding box in `TODO.md`.
4. Confirm no console errors via spot-check.
5. If browser screenshot is possible, attach a note describing the result.

---

## 19. Communication Style

- Concise, direct, no preamble.
- Code references must use `file_path:line_number`.
- When proposing options, list them with clear trade-offs.
- When rejecting a request, explain *why* with one short sentence and offer the
  closest safe alternative.
- No emojis in code/files unless the user asks. (The site itself uses emojis as
  decorative UI — that's the site owner's choice, not yours.)

---

## 20. Decision-Making Hierarchy

When in doubt, decide in this order:

1. **User's explicit instruction** — always wins.
2. **This `AGENT.md`** — if no user instruction, follow these rules.
3. **`PROJECT_STATUS.md`** — reflects the current real state.
4. **`TODO.md`** — the agreed roadmap.
5. **Industry best practice** — only as a fallback.

If two rules conflict, escalate to the user.

---

*Owner: Aman Jaiswal · Maintained by: AI coding agent under the user's direction.*
