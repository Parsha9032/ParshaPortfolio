# Personal Portfolio

A fast, accessible, single-page personal portfolio built with **Next.js (static export)** and **Tailwind CSS**, ready to deploy on **Netlify**.

## Features

- Hero, About, Projects (with search + tag filtering), Experience/Achievements, and Contact sections on one page
- Dedicated `/resume` route: printable HTML resume + downloadable PDF
- Dark mode with no flash-of-incorrect-theme
- Fully static export (`next export`) — no server required
- Accessible: semantic HTML, keyboard-navigable nav and filters, visible focus states, skip link, WCAG AA color contrast
- SEO: meta tags, Open Graph, Twitter Card, JSON-LD `Person` structured data, `robots.txt`, `sitemap.xml`
- Contact form via Netlify Forms with a honeypot field for spam protection, plus a `mailto:` fallback
- ESLint + Prettier + Husky pre-commit hook
- Jest + React Testing Library tests
- GitHub Actions CI (lint, format check, test, build)

## Tech stack

| Concern   | Choice                                                 |
| --------- | ------------------------------------------------------ |
| Framework | Next.js 14, static export (`output: 'export'`)         |
| Styling   | Tailwind CSS with a token file in `tailwind.config.js` |
| Data      | JSON files in `data/` (single source of truth)         |
| Forms     | Netlify Forms                                          |
| Hosting   | Netlify                                                |

## Project structure

```
.
├── data/
│   ├── site.json         # name, title, bio, skills, social links, resume path
│   ├── projects.json     # project cards — add/edit projects here
│   └── experience.json   # jobs + awards/certifications
├── public/
│   ├── resume.pdf         # placeholder — replace with your real resume
│   ├── favicon.svg
│   └── images/            # project screenshots / OG image
├── src/
│   ├── components/        # Header, Hero, About, Projects, ProjectCard,
│   │                       # Experience, Contact, Footer, Seo, ThemeToggle
│   ├── pages/
│   │   ├── index.js        # assembles the single-page site
│   │   ├── resume.js        # printable resume page
│   │   ├── 404.js
│   │   ├── _app.js
│   │   └── _document.js
│   └── styles/globals.css  # Tailwind layers + base a11y styles
├── __tests__/               # Jest + RTL tests
├── scripts/validate-html.js # post-build HTML sanity checks
├── netlify.toml
└── .github/workflows/ci.yml
```

## Local setup

Requires Node.js 18.17+ (Node 20 recommended, matches CI and Netlify config).

```bash
npm install
npm run dev       # http://localhost:3000
```

### Available scripts

| Command                 | What it does                                    |
| ----------------------- | ----------------------------------------------- |
| `npm run dev`           | Local dev server with hot reload                |
| `npm run build`         | Static production build → outputs to `out/`     |
| `npm start`             | Serve the last `next build` output (non-export) |
| `npm run lint`          | ESLint                                          |
| `npm run format`        | Prettier — write                                |
| `npm run format:check`  | Prettier — check only (used in CI)              |
| `npm test`              | Jest + React Testing Library                    |
| `npm run validate:html` | Sanity-checks the exported HTML in `out/`       |

## Editing your content

You generally don't need to touch component code to update the site.

- **Personal info, bio, skills, social links, resume date** → `data/site.json`
- **Projects** → `data/projects.json`. Each entry:
  ```json
  {
    "slug": "unique-id",
    "title": "Project name",
    "role": "Your role",
    "type": "client | personal | open-source",
    "date": "YYYY-MM",
    "description": "One or two sentences.",
    "tags": ["Tech", "Tags"],
    "image": "/images/your-image.svg",
    "links": { "live": "https://...", "repo": "https://..." },
    "featured": true
  }
  ```
  Drop a screenshot into `public/images/` and reference it in `image`. The Projects grid, search box, and tag filters all read from this file automatically — nothing else to wire up.
- **Experience & achievements** → `data/experience.json`
- **Resume PDF** → replace `public/resume.pdf` with your actual resume (same filename, or update `resumePdf` in `data/site.json`)
- **Styling tokens** (colors, fonts, spacing, shadows) → `tailwind.config.js` under `theme.extend`. Component-level utility classes (buttons, chips, cards) live in `src/styles/globals.css` under `@layer components`.

## Accessibility & performance notes

- All interactive elements are reachable by keyboard; focus states use a visible ring.
- The `prefers-reduced-motion` media query disables animation/scroll-smoothing for users who request it.
- Images use `loading="lazy"` and explicit width/height to avoid layout shift.
- Run `npx lighthouse http://localhost:3000 --view` (with `npm run build && npx serve out`) to audit locally.

## Analytics (optional)

Analytics is off by default. To enable Plausible or Google Analytics:

1. Copy `.env.example` to `.env.local` and fill in your values.
2. Set `analytics.enabled: true` in `data/site.json`.
3. Add the corresponding snippet to `src/pages/_document.js`, gated behind `process.env.NEXT_PUBLIC_...`, so no analytics script ships unless the env var is set.

## Deploying to Netlify

1. **Push to GitHub.** Commit this repository and push it to a GitHub repo.
2. **Connect the repo in Netlify.** In the Netlify dashboard: _Add new site → Import an existing project → GitHub_ and select the repo.
3. **Build settings** (already configured in `netlify.toml`, Netlify will detect them automatically):
   - Build command: `npm run build`
   - Publish directory: `out`
4. **Environment variables.** In _Site settings → Environment variables_, add `NEXT_PUBLIC_SITE_URL` (your live URL) and any analytics IDs from `.env.example`.
5. **Enable automatic deploys.** On by default — every push to `main` triggers a new build.
6. **Custom domain.** _Site settings → Domain management → Add a domain_, then point your DNS per Netlify's instructions.
7. **Verify form submissions.** After the first deploy, submit the contact form once, then check _Site settings → Forms_ in Netlify to confirm the `contact` form was detected and the submission arrived.

### One-paragraph deployment checklist

Push the repo to GitHub, import it into Netlify with build command `npm run build` and publish directory `out`, set `NEXT_PUBLIC_SITE_URL` (and any analytics env vars) in Netlify's environment variable settings, trigger the first deploy, then submit the contact form once on the live site and confirm it appears under Netlify's Forms dashboard before sharing the link on your resume.

## Continuous integration

`.github/workflows/ci.yml` runs on every push/PR to `main`: install → lint → format check → test → build. Configure branch protection on `main` to require this workflow before merging, if desired.

## License

MIT — do whatever you'd like with this template.
