# Arjun Iyer Portfolio — Vercel Export

A standalone React + Vite portfolio prepared for Vercel. It includes all source code, images, the resume PDF, SEO metadata, sitemap, robots file, and pre-rendered route generation.

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
