## Developer Guide

This document explains the main workflows for this repository and helps developers get the site running, tested, and deployed.

### Project overview

- Framework: Next.js 16
- Styling: Tailwind CSS
- Data: JSON files in `data/`
- Static export / Netlify-ready structure
- Local dev server: `http://localhost:3000`

### Manual code updates

Developers can work entirely by editing the repository files directly without using any Copilot or AI agent tooling.

- Open the project in your editor and update components in `src/`.
- Update site content in `data/site.json`, `data/projects.json`, and `data/experience.json`.
- Add or replace static assets in `public/images/` and `public/`.
- Keep changes small and test locally with `npm run dev`.
- Use `npm run format`, `npm run lint`, and `npm test` before committing.

### Prerequisites

- Node.js `>= 18.17.0`
- npm (bundled with Node) or `pnpm` / `yarn`
- Git configured with `user.name` and `user.email`

### Recommended environment

- Windows 10 / 11 or any OS supported by Node.js
- Use PowerShell, Windows Terminal, or Git Bash
- Recommended Node installer: https://nodejs.org/
- Confirm versions:

```bash
node --version
npm --version
git --version
```

If you use Node version managers:

- `nvm` for Windows: https://github.com/coreybutler/nvm-windows
- `nvm` for macOS/Linux: https://github.com/nvm-sh/nvm

### Initial setup

1. Install dependencies:

```bash
npm install
```

2. Install Husky hooks:

```bash
npm run prepare
```

### Running locally

Start the development server:

```bash
npm run dev
```

Open the app in a browser:

```text
http://localhost:3000
```

Use a custom host or port if needed:

```bash
npm run dev -- --hostname 127.0.0.1 --port 3000
```

Build the app for production:

```bash
npm run build
```

Serve the production build locally:

```bash
npm run start
```

> Note: `npm run start` serves the compiled production build. It is not the same as the static export process.

### Formatting and linting

Format the codebase:

```bash
npm run format
```

Check formatting without changing files:

```bash
npm run format:check
```

Run ESLint:

```bash
npm run lint
```

If a pre-commit hook fails, fix formatting or lint issues first, then re-stage and commit again.

### Tests

Run tests:

```bash
npm test
```

### HTML validation

Validate the generated HTML output:

```bash
npm run validate:html
```

### Git workflow

Create a feature branch:

```bash
git checkout -b feat/short-description
```

Stage and commit changes:

```bash
git add -A
git commit -m "feat: add short description"
```

Push the branch:

```bash
git push -u origin feat/short-description
```

If a commit is blocked by pre-commit hooks:

```bash
npm run format
git add -A
git commit --amend --no-edit
git push --force-with-lease
```

Sync with `main` before opening a pull request:

```bash
git checkout main
git pull --rebase origin main
git checkout feat/short-description
git rebase main
```

### Troubleshooting

#### `npm install` fails

- Delete the lockfile and installed packages:

```bash
rm -rf node_modules package-lock.json
```

- Reinstall dependencies:

```bash
npm install
```

- If errors remain, inspect `package.json` for conflicting versions.

#### `npm run dev` fails or never starts

- Confirm `npm install` completed successfully.
- Verify Node version is `>= 18.17.0`.
- Check for port conflicts on `3000`.
- Review the terminal output for syntax, configuration, or dependency errors.

#### `npm run build` fails

- Make sure the app runs in dev mode first.
- Check `next.config.js` for invalid options.
- Ensure required JSON files and public assets are present.

#### Husky / pre-commit hook failures

- Run:

```bash
npm run format
npm run lint
```

- Fix any reported issues.
- Re-stage files and retry the commit.

#### Tests fail locally

- Run:

```bash
npm test
```

- Fix the failing tests or update expectations if the test is still correct.

#### `npm run validate:html` fails

- Run `npm run build` first.
- Confirm `out/` exists and contains exported pages.
- Use the script output to identify invalid markup.

### Known issues

- Warning: `Unrecognized key(s) in object: 'eslint'` in `next.config.js`
  - This repo may show that warning with newer Next.js versions.
  - The warning does not prevent the dev server from starting, but the invalid config should be removed or migrated.

- Peer dependency or lockfile errors
  - Remove `package-lock.json` and `node_modules`, then reinstall.
  - This repo can require a fresh install if the lockfile is stale.

- Missing data or assets
  - The app expects JSON files in `data/` and static files in `public/`.
  - Missing items can cause runtime or build failures.

### Quick command reference

- Install deps: `npm install`
- Local dev: `npm run dev`
- Build: `npm run build`
- Serve prod build: `npm run start`
- Lint: `npm run lint`
- Format: `npm run format`
- Format check: `npm run format:check`
- Test: `npm test`
- Validate HTML: `npm run validate:html`
- Husky setup: `npm run prepare`
