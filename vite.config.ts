import path from 'node:path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { getRouteMeta } from './src/route-meta';

function routeMetaPlugin() {
  return {
    name: 'route-meta-inject',
    transformIndexHtml(html: string, ctx: { path?: string }) {
      const meta = getRouteMeta(ctx.path ?? '/');
      const escape = (value: string) => value
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      const title = escape(meta.title);
      const description = escape(meta.description);
      const ogType = escape(meta.ogType);
      return html
        .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
        .replace(/<meta\s+name="description"[^>]*\/>/, `<meta name="description" content="${description}" />`)
        .replace(/<meta\s+property="og:title"[^>]*\/>/, `<meta property="og:title" content="${title}" />`)
        .replace(/<meta\s+property="og:description"[^>]*\/>/, `<meta property="og:description" content="${description}" />`)
        .replace(/<meta\s+property="og:type"[^>]*\/>/, `<meta property="og:type" content="${ogType}" />`)
        .replace(/<meta\s+name="twitter:title"[^>]*\/>/, `<meta name="twitter:title" content="${title}" />`)
        .replace(/<meta\s+name="twitter:description"[^>]*\/>/, `<meta name="twitter:description" content="${description}" />`);
    },
  };
}

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss(), routeMetaPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': path.resolve(import.meta.dirname, 'src/assets'),
    },
    dedupe: ['react', 'react-dom'],
  },
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist/public'),
    emptyOutDir: true,
  },
  server: { host: '0.0.0.0' },
  preview: { host: '0.0.0.0' },
});
