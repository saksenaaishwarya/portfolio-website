<div align="center">

# Aishwarya Saksena — Portfolio

**Building intelligent systems through research & engineering.**

A premium, fully responsive personal portfolio built with Next.js, TypeScript,
Tailwind CSS and Framer Motion — featuring a local AI assistant, dark/light
theming, scroll-triggered animations and a fully automated GitHub Pages deploy.

[![CI](https://github.com/saksenaaishwarya/portfolio-website/actions/workflows/ci.yml/badge.svg)](https://github.com/saksenaaishwarya/portfolio-website/actions/workflows/ci.yml)
[![Deploy](https://github.com/saksenaaishwarya/portfolio-website/actions/workflows/deploy.yml/badge.svg)](https://github.com/saksenaaishwarya/portfolio-website/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-22c55e.svg)](LICENSE)

🔗 **Live:** https://saksenaaishwarya.github.io/portfolio-website/

</div>

---

## ✨ Overview

This is the personal portfolio of **Aishwarya Saksena** — a Computer Science
Engineering student, Machine Learning Research Intern at IIIT Ranchi, Software
Engineer at advuman, and GSSoC open-source developer. The site is designed to
make an immediate impression on recruiters, hiring managers, researchers and
collaborators, while staying fast, accessible and easy to maintain.

All content is data-driven from [`src/data/`](src/data), so updating the
portfolio rarely requires touching component code.

## 🚀 Features

- **Apple-grade aesthetic** — glassmorphism, gradient accents, a particle hero
  background and tasteful, scroll-triggered motion.
- **Dark / Light / System themes** with no flash of incorrect theme.
- **Local AI assistant** — a floating chatbot that answers questions about
  Aishwarya from a curated knowledge base. No API key, works fully offline.
- **Interactive sections** — typing hero, animated counters, skills radar +
  animated bars, expandable experience timeline, filterable/searchable projects
  with a detail modal and featured spotlight.
- **Validated contact form** — react-hook-form + Zod, with loading/success
  states and a graceful `mailto:` fallback (or Formspree when configured).
- **Print-ready résumé** at `/resume` generated from the same data.
- **SEO built in** — dynamic metadata, Open Graph & Twitter cards, JSON-LD
  Person schema, sitemap, robots and a web manifest.
- **Accessible & responsive** — semantic HTML, keyboard-friendly, reduced-motion
  aware, mobile-first.
- **Fully automated CI/CD** — lint, typecheck and build on every push;
  auto-deploy to GitHub Pages on `main`.

## 🛠 Tech Stack

| Area        | Technology |
| ----------- | ---------- |
| Framework   | [Next.js 15](https://nextjs.org) (App Router, static export) |
| Language    | [TypeScript](https://www.typescriptlang.org) |
| Styling     | [Tailwind CSS](https://tailwindcss.com) + CSS variables |
| Animation   | [Framer Motion](https://www.framer.com/motion) · GSAP-ready |
| UI          | [shadcn/ui](https://ui.shadcn.com) (Radix primitives) |
| Charts      | [Recharts](https://recharts.org) (lazy-loaded) |
| Icons       | [Lucide](https://lucide.dev) |
| Forms       | [react-hook-form](https://react-hook-form.com) + [Zod](https://zod.dev) |
| Theming     | [next-themes](https://github.com/pacocoursey/next-themes) |
| Deployment  | GitHub Pages via GitHub Actions |

## 📁 Project Structure

```
src/
├── app/                # App Router: layout, page, resume, SEO routes
├── components/
│   ├── sections/       # Hero, About, Skills, Experience, Projects, …
│   ├── layout/         # Navbar, Footer, ThemeToggle, ThemeProvider
│   ├── chatbot/        # AI assistant widget + matcher
│   ├── animations/     # Reveal, Counter, TypingText, ParticleField
│   └── ui/             # shadcn primitives (button, card, dialog, …)
├── data/               # ← single source of truth for all content
├── hooks/              # useActiveSection, useMounted
└── lib/                # utils (cn, asset), seo metadata + JSON-LD
```

## 💻 Local Development

**Prerequisites:** Node.js 20+ and npm.

```bash
# 1. Clone
git clone https://github.com/saksenaaishwarya/portfolio-website.git
cd portfolio-website

# 2. Install
npm install

# 3. Run the dev server
npm run dev          # http://localhost:3000
```

### Available scripts

| Script | Description |
| ------ | ----------- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build → static export in `out/` |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript checks |
| `npm run serve` | Serve the exported `out/` folder locally |

## 🏗 Production Build

```bash
npm run build        # outputs static site to ./out
npm run serve        # preview the exported site
```

The site is configured for **static export** (`output: 'export'`), so the `out/`
folder can be hosted on any static host.

## ☁️ Deployment (GitHub Pages)

Deployment is fully automated. On every push to `main`, the
[`deploy.yml`](.github/workflows/deploy.yml) workflow builds the static site and
publishes it to GitHub Pages.

**One-time setup:**

1. Push the repository to GitHub.
2. Go to **Settings → Pages → Build and deployment** and set **Source** to
   **GitHub Actions**.
3. Push to `main` (or run the workflow manually). The site goes live at
   `https://<username>.github.io/<repo>/`.

> **Base path:** Project pages are served from a subpath, so the workflow sets
> `NEXT_PUBLIC_BASE_PATH=/<repo-name>` automatically. If you deploy to a user
> page (`<username>.github.io`) or a custom domain, set `NEXT_PUBLIC_BASE_PATH`
> to an empty string.

### Deploying to Vercel (optional)

Import the repo at [vercel.com/new](https://vercel.com/new). No base path is
needed on Vercel — remove the `NEXT_PUBLIC_BASE_PATH` override (or leave it
unset) so assets resolve from the root.

## 🔐 Environment Variables

Copy [`.env.example`](.env.example) to `.env.local`. All variables are optional —
the site works with zero configuration.

| Variable | Purpose |
| -------- | ------- |
| `NEXT_PUBLIC_BASE_PATH` | GitHub Pages subpath (set by CI). Empty for custom domains. |
| `NEXT_PUBLIC_FORMSPREE_ID` | Optional [Formspree](https://formspree.io) form ID for the contact form. Falls back to `mailto:` when unset. |

`NEXT_PUBLIC_*` variables are exposed to the browser — **never** put secrets here.

## 🔄 CI/CD

- **CI** ([`ci.yml`](.github/workflows/ci.yml)) — runs on every push and PR:
  installs dependencies, lints, type-checks and builds.
- **CD** ([`deploy.yml`](.github/workflows/deploy.yml)) — runs on push to `main`:
  builds the static export and deploys to GitHub Pages.

## 🧰 Maintenance

Everything lives in [`src/data/`](src/data). Edit a file, commit, and the site
redeploys automatically.

| To update… | Edit… |
| ---------- | ----- |
| Name, bio, tagline, socials | `src/data/profile.ts` |
| Skills & proficiency | `src/data/skills.ts` |
| Work & leadership timeline | `src/data/experience.ts` |
| Projects | `src/data/projects.ts` |
| Education | `src/data/education.ts` |
| Certifications | `src/data/certifications.ts` |
| Achievements & stat counters | `src/data/achievements.ts` |
| Chatbot answers | `src/data/chatbot-knowledge.ts` |
| Testimonials (hidden until filled) | `src/data/testimonials.ts` |

**Replace the profile photo:** drop a new image at
`public/aishwarya-profile.jpg` (portrait, ~900×1100).

**Replace the résumé:** the `/resume` route is generated from data and is
print-to-PDF ready. To link a real PDF instead, add `public/resume.pdf` and
point the hero button to it.

**Customize the theme:** brand colours are CSS variables in
[`src/app/globals.css`](src/app/globals.css) (`--primary`, `--accent`,
`--grad-*`). Change them once to re-skin the whole site.

## 🔒 Security

- No secrets are committed; `.env*` files are git-ignored.
- The contact form posts to Formspree (when configured) or opens the visitor's
  email client — no backend secrets required.
- All external links use `rel="noopener noreferrer"`.

## 📄 License

[MIT](LICENSE) © Aishwarya Saksena

---

<div align="center">
Built with Next.js, Tailwind CSS &amp; Framer Motion · Designed with intent.
</div>
