import type { Lang } from './translations';

export const routes: Record<string, Record<Lang, string>> = {
  home:         { fr: '/',              en: '/' },
  articles:     { fr: '/articles/',     en: '/articles/' },
  bibliography: { fr: '/bibliographie/', en: '/bibliography/' },
  about:        { fr: '/a-propos/',     en: '/about/' },
  contact:      { fr: '/contact/',      en: '/contact/' },
  therapy:      { fr: '/therapie/',     en: '/therapy/' },
  support:      { fr: '/soutenir/',     en: '/support/' },
};

export function getLocalizedRoute(lang: Lang, routeKey: string): string {
  const route = routes[routeKey];
  if (!route) return `/${lang}/`;
  return `/${lang}${route[lang]}`;
}
