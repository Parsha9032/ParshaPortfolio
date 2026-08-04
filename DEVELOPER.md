## Developer Guide

This file collects common developer workflows and commands for this repository.

### Prerequisites

- Node: use Node >= 18.17.0 (see `engines` in package.json)
- npm (bundled with Node) or use `pnpm`/`yarn` if preferred
- Git configured with user.name and user.email

### Initial setup

Install dependencies:

```bash
npm install
```

Install Husky hooks (if needed):

```bash
npm run prepare
```

### Local development

Run the Next.js development server with hot reload:

```bash
npm run dev
```

Build for production (local test):

```bash
npm run build
npm run start
```

### Formatting & linting

Format all files with Prettier:

```bash
npm run format
# or
npx prettier --write .  (If you face any issues while commiting to github)
```

Check formatting (CI/pre-commit uses this):

```bash
npm run format:check
```

Run ESLint:

```bash
npm run lint
```

Husky runs pre-commit hooks automatically; if a hook blocks a commit, run the formatter and try again.

### Tests

Run tests:

```bash
npm test
```

### HTML validation

Validate generated HTML (project-specific script):

```bash
npm run validate:html
```

### Git: commit & push workflow

Recommended branch workflow:

```bash
# create feature branch
git checkout -b feat/short-description

# stage changes
git add -A

# commit (use conventional commit style if used by the project)
git commit -m "feat: add short description"

# push branch and set upstream
git push -u origin feat/short-description
```

If your commit is rejected by pre-commit hooks, run the formatter then amend or re-commit:

```bash
npm run format
git add -A
git commit --amend --no-edit
git push --force-with-lease
```

Sync with remote main before opening PR:

```bash
git checkout main
git pull --rebase origin main
git checkout feat/short-description
git rebase main
```

Create a pull request from your branch on GitHub when ready.

### Pushing tags / releases

```bash
# create tag
git tag -a vX.Y.Z -m "Release vX.Y.Z"
git push origin vX.Y.Z
```

### Troubleshooting

- If `npm run dev` fails, check `npm install` completed and Node version matches `engines`.
- If Husky/pre-commit stops a commit, run `npm run format` and resolve any lint errors.
- If tests fail locally, run `npm test` to see failing suites and fix the code or tests.

### Useful commands quick reference

- Install deps: `npm install`
- Dev server: `npm run dev`
- Build: `npm run build`
- Start (prod): `npm run start`
- Format: `npm run format` or `npx prettier --write .`
- Lint: `npm run lint`
- Test: `npm test`
- Validate HTML: `npm run validate:html`
- Husky setup: `npm run prepare`

---

File generated: `DEVELOPER.md`
