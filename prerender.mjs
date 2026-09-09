/**
 * prerender.mjs
 *
 * Post-build script that produces fully pre-rendered per-route HTML files
 * in dist/public so that social bots and AI crawlers see real page content
 * without executing JavaScript.
 *
 * Pipeline
 * --------
 * 1. Build an SSR bundle from src/entry-server.tsx using Vite's Node API.
 * 2. Import `render` and `routeMeta` from the SSR bundle.
 *    routeMeta is the single source of truth — defined once in
 *    src/route-meta.ts and re-exported by entry-server.tsx.
 * 3. Call render(url) for every route to get a full HTML string.
 * 4. Inject the rendered string into <div id="root"> in the client-built
 *    dist/public/index.html template.
 * 5. Stamp per-route <head> metadata into each file.
 * 6. Write to dist/public/<route>/index.html.
 * 7. Verify every generated file contains route-specific content.
 *
 * Usage
 * -----
 *   node prerender.mjs          (called automatically by `pnpm build`)
 */

import fs   from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build }  from 'vite';
import react from '@vitejs/plugin-react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir   = path.join(__dirname, 'dist', 'public');
const serverDir = path.join(__dirname, 'dist', 'server');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Escape a string for safe inclusion in an HTML attribute value. */
function escapeAttr(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Inject per-route <head> metadata and SSR-rendered body into a template.
 */
function buildRouteHtml(template, meta, renderedBody) {
  const title = escapeAttr(meta.title);
  const desc  = escapeAttr(meta.description);
  const og    = escapeAttr(meta.ogType);

  return template
    .replace(/<title>[^<]*<\/title>/,
      `<title>${title}</title>`)
    .replace(/<meta\s+name="description"[^>]*\/>/,
      `<meta name="description" content="${desc}" />`)
    .replace(/<meta\s+property="og:title"[^>]*\/>/,
      `<meta property="og:title" content="${title}" />`)
    .replace(/<meta\s+property="og:description"[^>]*\/>/,
      `<meta property="og:description" content="${desc}" />`)
    .replace(/<meta\s+property="og:type"[^>]*\/>/,
      `<meta property="og:type" content="${og}" />`)
    .replace(/<meta\s+name="twitter:title"[^>]*\/>/,
      `<meta name="twitter:title" content="${title}" />`)
    .replace(/<meta\s+name="twitter:description"[^>]*\/>/,
      `<meta name="twitter:description" content="${desc}" />`)
    .replace(/<div id="root"><\/div>/,
      `<div id="root">${renderedBody}</div>`);
}

// ---------------------------------------------------------------------------
// Step 1 — Build the SSR bundle
// ---------------------------------------------------------------------------

console.log('[prerender] Building SSR bundle …');

await build({
  // Do NOT load vite.config.ts — it requires PORT for the dev server which
  // is irrelevant here and would throw if PORT is unset during CI builds.
  configFile: false,
  root:        __dirname,
  base:        process.env.BASE_PATH ?? '/',
  plugins:     [react()],
  resolve: {
    alias: {
      '@':       path.join(__dirname, 'src'),
      '@assets': path.join(__dirname, '..', '..', 'attached_assets'),
    },
    dedupe: ['react', 'react-dom'],
  },
  build: {
    ssr:         path.join(__dirname, 'src', 'entry-server.tsx'),
    outDir:      serverDir,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        format:         'esm',
        entryFileNames: 'entry-server.mjs',
      },
    },
  },
  logLevel: 'warn',
});

console.log('[prerender] SSR bundle built.');

// ---------------------------------------------------------------------------
// Step 2 — Import render() and routeMeta from the SSR bundle.
//
// routeMeta is the single source of truth: defined in src/route-meta.ts,
// re-exported from entry-server.tsx, compiled into the SSR bundle here.
// There is no separate copy of the metadata in this file.
// ---------------------------------------------------------------------------

const ssrBundle = await import(
  /* @vite-ignore */ path.join(serverDir, 'entry-server.mjs')
);
const { render, routeMeta } = ssrBundle;

if (!render || !routeMeta) {
  console.error('[prerender] ERROR: SSR bundle did not export render() or routeMeta.');
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Step 3 — Load the client-built HTML template
// ---------------------------------------------------------------------------

const indexPath = path.join(distDir, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error(`[prerender] ERROR: ${indexPath} not found. Run vite build first.`);
  process.exit(1);
}
const template = fs.readFileSync(indexPath, 'utf8');

// ---------------------------------------------------------------------------
// Step 4 — Render, inject, and write every route
// ---------------------------------------------------------------------------

const failedRoutes = [];

for (const [routePath, meta] of Object.entries(routeMeta)) {
  let renderedBody = '';
  let renderError  = null;

  try {
    renderedBody = render(routePath);
  } catch (err) {
    renderError = err;
    console.warn(
      `[prerender] WARNING: render("${routePath}") threw — ` +
      `writing metadata-only shell.\n  ${err.message}`,
    );
    failedRoutes.push(routePath);
  }

  const html = buildRouteHtml(template, meta, renderedBody);

  if (routePath === '/') {
    fs.writeFileSync(indexPath, html, 'utf8');
    console.log('[prerender] /  →  dist/public/index.html');
  } else {
    const segments = routePath.replace(/^\//, '').split('/');
    const routeDir = path.join(distDir, ...segments);
    fs.mkdirSync(routeDir, { recursive: true });
    const outFile = path.join(routeDir, 'index.html');
    fs.writeFileSync(outFile, html, 'utf8');
    console.log(`[prerender] ${routePath}  →  dist/public/${segments.join('/')}/index.html`);
  }
}

// ---------------------------------------------------------------------------
// Step 5 — Verify generated files contain route-specific content
//
// Each file must contain its escaped title text and at least one <h1>.
// This catches cases where the SSR render silently produced empty output.
// ---------------------------------------------------------------------------

console.log('[prerender] Verifying generated files …');

const verifyErrors = [];

for (const [routePath, meta] of Object.entries(routeMeta)) {
  const filePath =
    routePath === '/'
      ? indexPath
      : path.join(distDir, ...routePath.replace(/^\//, '').split('/'), 'index.html');

  const html = fs.readFileSync(filePath, 'utf8');

  // Verification 1: correct <title> tag
  const escapedTitle = escapeAttr(meta.title);
  if (!html.includes(`<title>${escapedTitle}</title>`)) {
    verifyErrors.push(`${routePath}: <title> tag not found or incorrect.`);
  }

  // Verification 2: <div id="root"> is not empty
  if (html.includes('<div id="root"></div>')) {
    verifyErrors.push(`${routePath}: <div id="root"> is empty — SSR content was not injected.`);
  }

  // Verification 3: the root div contains substantial content (>= 500 chars
  // between the opening and closing tags, indicating a real render occurred).
  const rootMatch = html.match(/<div id="root">([\s\S]*?)<\/body>/);
  const rootContent = rootMatch ? rootMatch[1] : '';
  if (rootContent.length < 500) {
    verifyErrors.push(
      `${routePath}: <div id="root"> has less than 500 chars of content ` +
      `(${rootContent.length}) — page likely did not render.`,
    );
  }
}

if (verifyErrors.length > 0) {
  console.error('\n[prerender] VERIFICATION FAILED:');
  verifyErrors.forEach((e) => console.error(`  ✗  ${e}`));
  process.exit(1);
}

console.log('[prerender] All files verified ✓');
console.log('[prerender] Done.');
