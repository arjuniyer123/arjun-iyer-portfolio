/**
 * SSR entry point used exclusively by prerender.mjs at build time.
 *
 * Exports a single `render(url)` function that renders the appropriate page
 * component to an HTML string via React's renderToString().  The caller
 * (prerender.mjs) injects the returned string into the client-built
 * index.html before writing per-route static files to dist/public.
 *
 * This is never bundled into the client-side JavaScript that runs in the
 * browser — it only runs during the `pnpm build` step on the server/build
 * machine.
 */

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Router } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Re-export route metadata so prerender.mjs can import it from the SSR
// bundle — one source of truth, no duplication between TS and plain JS.
export { routeMeta } from './route-meta';

import Home from './pages/home';
import About from './pages/about';
import Resume from './pages/resume';
import AmericanNational from './pages/work/american-national';
import ChaloChalo from './pages/work/chalo-chalo';
import MyHouseDeals from './pages/work/myhousedeals';
import PromoArchitect from './pages/work/promo-architect';
import OmsAccountSetup from './pages/work/oms-account-setup';

const ROUTE_COMPONENTS: Record<string, React.ComponentType> = {
  '/': Home,
  '/about': About,
  '/resume': Resume,
  '/work/american-national': AmericanNational,
  '/work/chalo-chalo': ChaloChalo,
  '/work/myhousedeals': MyHouseDeals,
  '/work/promo-architect': PromoArchitect,
  '/work/oms-account-setup': OmsAccountSetup,
};

/**
 * A minimal static location hook for wouter that is safe to use in SSR.
 *
 * wouter's built-in memoryLocation uses useSyncExternalStore without
 * providing a getServerSnapshot, which React 18's renderToString requires.
 * This hook sidesteps that entirely: it just returns the fixed path and a
 * no-op navigate function — exactly what a one-shot server render needs.
 */
function createStaticLocationHook(path: string) {
  // wouter's Router `hook` prop expects: () => [currentPath, navigate]
  return function useStaticLocation(): [string, (to: string) => void] {
    return [path, () => {}];
  };
}

/**
 * Render a route URL to an HTML string.
 *
 * @param url - The route path (e.g. "/work/american-national")
 * @returns HTML string suitable for injection into <div id="root">…</div>
 */
export function render(url: string): string {
  const PageComponent = ROUTE_COMPONENTS[url] ?? Home;
  const queryClient = new QueryClient();
  const hook = createStaticLocationHook(url);

  return renderToString(
    <QueryClientProvider client={queryClient}>
      <Router hook={hook}>
        <PageComponent />
      </Router>
    </QueryClientProvider>,
  );
}
