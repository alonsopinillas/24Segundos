import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['NBA', 'Rumores', 'Traspasos', 'Playoffs', 'Draft', 'Opinión']),
    author: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { articles };
