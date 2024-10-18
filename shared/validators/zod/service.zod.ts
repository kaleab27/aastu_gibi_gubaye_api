import {z} from 'zod';

export const createServiceSchema = z.object({
  service: z.string().max(100, 'Exceeded the length of service names.'),
});
