/**
 * Per-route metadata for title, description, and Open Graph tags.
 *
 * Used by:
 *  - The Vite dev-server plugin (transformIndexHtml) to inject correct <head>
 *    content on every HTML request, so bots hitting any route see proper metadata.
 *  - prerender.mjs at build time to stamp per-route index.html files into
 *    dist/public so the static output is fully pre-rendered for crawlers.
 */

export interface RouteMeta {
  title: string;
  description: string;
  ogType: string;
}

export const routeMeta: Record<string, RouteMeta> = {
  '/': {
    title: 'Arjun Iyer — UX Designer & Product Strategist',
    description:
      'Portfolio of Arjun Iyer, a UX designer and product strategist specializing in mobile, enterprise, and consumer product design.',
    ogType: 'website',
  },
  '/about': {
    title: 'About — Arjun Iyer',
    description:
      'About Arjun Iyer, a UX designer and product strategist with experience across insurance, enterprise software, and consumer platforms.',
    ogType: 'profile',
  },
  '/resume': {
    title: 'Resume — Arjun Iyer',
    description:
      'Work history and skills of Arjun Iyer, UX designer and product strategist.',
    ogType: 'website',
  },
  '/work/american-national': {
    title: 'AN Mobile — Arjun Iyer',
    description:
      'Aligning the mobile app experience with the desktop portal for American National\u2019s policyholders. A mobile app redesign case study by Arjun Iyer.',
    ogType: 'article',
  },
  '/work/chalo-chalo': {
    title: 'Chalo Chalo! — Arjun Iyer',
    description:
      'A community-driven platform for disaster relief and first responder coordination. UX design case study by Arjun Iyer.',
    ogType: 'article',
  },
  '/work/myhousedeals': {
    title: 'MyHouseDeals — Arjun Iyer',
    description:
      'Demystifying property listings to connect investors with actionable financing guidance. Real estate investment platform case study by Arjun Iyer.',
    ogType: 'article',
  },
  '/work/promo-architect': {
    title: 'Promo Architect — Arjun Iyer',
    description:
      'Redesigning the enterprise promotion planning tool for national retail chains. Enterprise tool redesign case study by Arjun Iyer.',
    ogType: 'article',
  },
  '/work/oms-account-setup': {
    title: 'OMS Account Setup — Arjun Iyer',
    description:
      'Translating a complex, disjointed legacy process into an intuitive enterprise setup flow. Enterprise UX case study by Arjun Iyer.',
    ogType: 'article',
  },
};

/**
 * Return metadata for a given URL path.
 * Strips query strings and trailing slashes before lookup.
 * Falls back to the root entry when no match is found.
 */
export function getRouteMeta(rawPath: string): RouteMeta {
  const normalized =
    rawPath.replace(/\?.*$/, '').replace(/\/$/, '') || '/';
  return routeMeta[normalized] ?? routeMeta['/'];
}
