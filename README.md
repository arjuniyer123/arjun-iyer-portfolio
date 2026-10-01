# Arjun Iyer Portfolio — Vercel Export

A standalone React + Vite portfolio prepared for Vercel. It includes all source code, images, the resume PDF, SEO metadata, sitemap, robots file, and pre-rendered route generation.

## Source of truth

This repository is the production source for the portfolio. Claude Design
is the authority for approved visual decisions, and Claude Code implements
them here through a branch, a pull request, and a reviewed Vercel preview.
Read `CLAUDE.md` for the release process, `DESIGN.md` for the visual system,
and `docs/claude-design-handoff.md` for the migration record and rollback.

The former Replit workspace and its `portfolio:sync` / `portfolio:publish`
commands are retired. Do not use them; their snapshot is out of date and can
overwrite this repository.

## Automatic Vercel deployment

The `main` branch is connected to the existing `arjun-iyer-portfolio` Vercel
project. Every push to `main` creates a production deployment for
`arjuniyer.com` and `www.arjuniyer.com`.

Vercel reads `vercel.json` automatically:

- Build command: `npm run build`
- Output directory: `dist/public`

No environment variables or backend services are required.

## Local development

```bash
npm install
npm run dev
```

## Production checks

```bash
npm run typecheck
npm run build
npm run preview
```

The production build pre-renders the homepage, About, Resume, and all five case-study routes into `dist/public`.
