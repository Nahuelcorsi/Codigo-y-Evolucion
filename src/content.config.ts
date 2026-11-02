import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Cada proyecto es un archivo .md en src/content/proyectos/.
// Para sumar uno nuevo, copiá cualquiera de los existentes y cambiá los datos.
const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      resumen: z.string(),
      categoria: z.enum(['web', 'software', 'robotica']),
      tecnologias: z.array(z.string()),
      rol: z.string().default('Diseño, desarrollo y publicación'),
      aspectos: z.array(z.string()).default([]),
      imagen: image().optional(),
      imagenAjuste: z.enum(['cubrir', 'contener']).default('cubrir'),
      demo: z.string().url().optional(),
      repo: z.string().url().optional(),
      destacado: z.boolean().default(false),
      orden: z.number().default(100),
      anio: z.number(),
    }),
});

export const collections = { proyectos };
