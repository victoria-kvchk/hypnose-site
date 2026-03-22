import { translations, defaultLang, supportedLangs, type Lang, type TranslationKey } from './translations';
import { routes } from './routes';

export { defaultLang, supportedLangs, type Lang, type TranslationKey } from './translations';
export { getLocalizedRoute } from './routes';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (supportedLangs.includes(lang as Lang)) {
    return lang as Lang;
  }
  return defaultLang;
}

export function t(lang: Lang, key: TranslationKey): string {
  return translations[lang][key] ?? translations[defaultLang][key];
}

export function getSwitchLangPath(currentPath: string, targetLang: Lang): string {
  const match = currentPath.match(/^\/(fr|en)(\/.*)?$/);
  if (!match) return `/${targetLang}/`;
  const sourceLang = match[1] as Lang;
  const rest = match[2] ?? '/';

  for (const [, langRoutes] of Object.entries(routes)) {
    if (rest === langRoutes[sourceLang]) {
      return `/${targetLang}${langRoutes[targetLang]}`;
    }
  }

  return `/${targetLang}${rest}`;
}
