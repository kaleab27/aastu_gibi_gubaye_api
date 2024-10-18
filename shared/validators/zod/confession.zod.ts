import {z} from 'zod';

export const createConfessionSchema = z.object({
  confession: z
    .string()
    .max(200, 'Exceeded the maximum length of confession father names.'),
});
