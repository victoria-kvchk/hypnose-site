import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    tags: z.array(z.string()),
    lang: z.enum(['fr', 'en']),
    references: z.array(z.string()).optional(),
  }),
});

const bibliography = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/bibliography' }),
  schema: z.object({
    references: z.array(
      z.object({
        id: z.string(),
        authors: z.array(z.string()),
        year: z.number(),
        title: z.string(),
        journal: z.string().optional(),
        doi: z.string().optional(),
        url: z.string().optional(),
      })
    ),
  }),
});

export const collections = { articles, bibliography };
