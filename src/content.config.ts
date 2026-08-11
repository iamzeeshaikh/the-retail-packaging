import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const shared = {
  title: z.string(),
  description: z.string(),
  metaTitle: z.string().optional(),
  publishDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  author: z.string().default('The Retail Packaging editorial team'),
  heroProduct: z.string().optional(),
  heroAlt: z.string().optional(),
  keyword: z.string(),
}

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    ...shared,
    readingMinutes: z.number().optional(),
    /* Questions the article raises but does not answer inline. Rendered once,
       and emitted as FAQPage schema by the article layout. */
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
})

const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    ...shared,
    kind: z.enum(['guide', 'howto', 'checklist', 'glossary']).default('guide'),
    order: z.number().default(50),
    /* Questions the body deliberately does not answer inline. Rendered once,
       and emitted as FAQPage schema by the article layout. */
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
})

export const collections = { blog, resources }
