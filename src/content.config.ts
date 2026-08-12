import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const servicos = defineCollection({
  loader: glob({ base: "./src/content/servicos", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number().default(0),
    featured: z.boolean().default(false),
    features: z.array(z.string()).default([]),
    benefits: z.array(z.string()).default([]),
    applications: z.array(z.string()).default([]),
  }),
});

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default("TMJL Marketing Local"),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

export const collections = { servicos, blog };
