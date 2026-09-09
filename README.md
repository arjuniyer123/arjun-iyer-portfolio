# Arjun Iyer Portfolio — Vercel Export

A standalone React + Vite portfolio prepared for Vercel. It includes all source code, images, the resume PDF, SEO metadata, sitemap, robots file, and pre-rendered route generation.

## Deploy with Vercel

1. Unzip this archive.
2. Push the extracted folder to a new GitHub, GitLab, or Bitbucket repository.
3. In Vercel, choose **Add New → Project** and import that repository.
4. Vercel reads `vercel.json` automatically. Confirm:
   - Build command: `pnpm run build`
   - Output directory: `dist/public`
5. Deploy.
6. In the Vercel project, open **Settings → Domains** and add `arjuniyer.com` and optionally `www.arjuniyer.com`.
7. Update the DNS records at your domain registrar using the exact values Vercel provides.

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
