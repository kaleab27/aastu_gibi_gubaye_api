import {z} from 'zod';

export const createDepartmentSchema = z.object({
  department: z
    .string()
    .max(100, 'Exceeded maximum length of department names'),
});
