import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
    schema: z.object({
        path: z.string().optional(),
        title: z.string(),
        description: z.string().optional(),
        image: z.string().optional(),
        date: z.coerce.date(),
        tags: z.array(z.string()).default([]),
        faq: z
            .array(
                z.object({
                    question: z.string(),
                    answer: z.string(),
                }),
            )
            .optional(),
    }),
});

export const collections = { blog };
