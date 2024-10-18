import {z} from 'zod';

export const createLanguageSchema = z.object({
  language: z
    .string()
    .max(100, 'Exceeded the maximum length of language names'),
});
