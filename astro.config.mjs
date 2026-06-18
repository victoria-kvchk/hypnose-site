// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

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

// https://astro.build/config
export default defineConfig({
  site: 'https://hypno-therapeutique.fr',
  markdown: {
    rehypePlugins: [rehypeCitations],
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
