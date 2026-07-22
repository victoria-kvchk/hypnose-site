// @ts-check
// (glossaire des infobulles chargé ci-dessous)
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { glossaryItems } from './src/i18n/glossary.ts';

/**
 * Transforme les renvois de citation [n] / [n, m] des articles en exposants
 * cliquables pointant vers la note correspondante (#src-n). Sûr : ne matche
 * que des crochets contenant uniquement des chiffres (les liens Markdown
 * [texte](url) ne sont donc pas touchés).
 */
function rehypeCitations() {
  const re = /\[(\d+(?:\s*,\s*\d+)*)\]/g;
  const walk = (/** @type {any} */ node) => {
    if (!node.children) return;
    const next = /** @type {any[]} */ ([]);
    for (const child of node.children) {
      if (child.type !== 'text' || !child.value.includes('[')) {
        if (child.type === 'element') walk(child);
        next.push(child);
        continue;
      }
      const value = child.value;
      let last = 0;
      let m;
      let matched = false;
      re.lastIndex = 0;
      while ((m = re.exec(value)) !== null) {
        matched = true;
        if (m.index > last) next.push({ type: 'text', value: value.slice(last, m.index) });
        const nums = m[1].split(',').map((/** @type {string} */ s) => s.trim());
        const links = /** @type {any[]} */ ([]);
        nums.forEach((n, i) => {
          if (i > 0) links.push({ type: 'text', value: ', ' });
          links.push({
            type: 'element',
            tagName: 'a',
            properties: { href: `#src-${n}`, className: ['cite-link'] },
            children: [{ type: 'text', value: n }],
          });
        });
        next.push({ type: 'element', tagName: 'sup', properties: { className: ['cite'] }, children: links });
        last = m.index + m[0].length;
      }
      if (!matched) {
        next.push(child);
      } else if (last < value.length) {
        next.push({ type: 'text', value: value.slice(last) });
      }
    }
    node.children = next;
  };
  return (/** @type {any} */ tree) => walk(tree);
}

/**
 * Table de correspondance « forme écrite → définition », par langue, construite
 * à partir du glossaire. Clés reconnues : le terme, sa forme courte (sans la
 * parenthèse) et les alias `match`.
 */
const glossaryLookup = (() => {
  const norm = (/** @type {string} */ s) => s.trim().toLowerCase();
  /** @type {Record<string, Map<string, string>>} */
  const byLang = {};
  for (const lang of Object.keys(glossaryItems)) {
    const map = new Map();
    for (const item of glossaryItems[/** @type {'fr' | 'en'} */ (lang)]) {
      const keys = new Set([norm(item.term)]);
      const short = item.term.replace(/\s*\([^)]*\)\s*/g, ' ').trim();
      if (short) keys.add(norm(short));
      for (const a of item.match || []) keys.add(norm(a));
      for (const k of keys) if (!map.has(k)) map.set(k, item.def);
    }
    byLang[lang] = map;
  }
  return byLang;
})();

/**
 * Rend interactifs les termes balisés [[terme]] (ou [[affichage|clé]]) : le mot
 * s'affiche souligné, avec sa définition (issue du glossaire) dans une bulle au
 * survol / au focus. Ignore les titres et les liens ; laisse le texte tel quel
 * si le terme est inconnu.
 */
function rehypeGlossary() {
  const re = /\[\[([^\]]+)\]\]/g;
  const norm = (/** @type {string} */ s) => s.trim().toLowerCase();
  return (/** @type {any} */ tree, /** @type {any} */ file) => {
    const lang = file?.data?.astro?.frontmatter?.lang || 'fr';
    const map = glossaryLookup[lang] || glossaryLookup.fr;
    const walk = (/** @type {any} */ node, /** @type {boolean} */ blocked) => {
      if (!node.children) return;
      const next = /** @type {any[]} */ ([]);
      for (const child of node.children) {
        if (child.type === 'element') {
          const tag = child.tagName;
          walk(child, blocked || /^h[1-6]$/.test(tag) || tag === 'a');
          next.push(child);
          continue;
        }
        if (child.type !== 'text' || blocked || !child.value.includes('[[')) {
          next.push(child);
          continue;
        }
        const value = child.value;
        let last = 0;
        let m;
        let matched = false;
        re.lastIndex = 0;
        while ((m = re.exec(value)) !== null) {
          matched = true;
          if (m.index > last) next.push({ type: 'text', value: value.slice(last, m.index) });
          const parts = m[1].split('|');
          const display = parts[0].trim();
          const key = norm(parts[1] || parts[0]);
          const def = map.get(key) || map.get(key.replace(/s$/, ''));
          if (def) {
            next.push({
              type: 'element',
              tagName: 'span',
              properties: { className: ['gloss'], tabIndex: 0 },
              children: [
                { type: 'text', value: display },
                { type: 'element', tagName: 'span', properties: { className: ['gloss-pop'], role: 'tooltip' }, children: [{ type: 'text', value: def }] },
              ],
            });
          } else {
            next.push({ type: 'text', value: display });
          }
          last = m.index + m[0].length;
        }
        if (!matched) next.push(child);
        else if (last < value.length) next.push({ type: 'text', value: value.slice(last) });
      }
      node.children = next;
    };
    walk(tree, false);
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://hypno-therapeutique.fr',
  markdown: {
    rehypePlugins: [rehypeCitations, rehypeGlossary],
  },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr', en: 'en' },
      },
    }),
  ],
});
