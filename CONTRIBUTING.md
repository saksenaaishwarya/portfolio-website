# Contributing

Thanks for your interest in improving this portfolio! While it's a personal
project, clean contributions and bug reports are welcome.

## Getting started

```bash
git clone https://github.com/saksenaaishwarya/portfolio-website.git
cd portfolio-website
npm install
npm run dev
```

The app runs at http://localhost:3000.

## Git hooks (one-time)

This repository ships a tracked `commit-msg` hook that keeps history attributed to
the project owner only. Enable it once after cloning:

```bash
git config core.hooksPath .githooks
```

The hook automatically strips any `Co-authored-by:` / "Generated with" / "Created with"
trailer that references Claude, Anthropic, Copilot, an AI assistant or a bot. Commits
must use your own Git identity and carry no AI/bot co-author attribution.

## Branch strategy

- `main` — production. Every push deploys to GitHub Pages.
- Feature work — branch off `main` using a descriptive name:
  - `feat/<short-description>`
  - `fix/<short-description>`
  - `docs/<short-description>`

Open a pull request into `main` and ensure CI passes.

## Commit messages

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add testimonials carousel
fix: correct mobile nav overlap
docs: update deployment guide
chore: bump dependencies
```

## Quality gates

Before opening a PR, make sure all of these pass locally (CI runs them too):

```bash
npm run lint        # ESLint
npm run typecheck   # TypeScript (tsc --noEmit)
npm run build       # Production static export
```

Also check:

- Responsive at mobile, tablet and desktop widths
- Both light and dark themes
- No secrets or `.env` values committed

## Updating content

All site content lives in [`src/data/`](src/data) — see the
[README](README.md#-maintenance) for how to edit your bio, projects, skills,
experience and more. You rarely need to touch component code to update content.
