import {z} from 'zod';
import {createServiceSchema} from './service.zod';
import {createDepartmentSchema} from './department.zod';
import {createConfessionSchema} from './confession.zod';
import {createLanguageSchema} from './language.zod';

export const createStudentSchema = z.object({
  first_name: z.string().max(100, 'Exceeded the max string length for names'),
  last_name: z.string().max(100, 'Exceeded the max string length for names'),
  student_id: z.string().length(10, 'Invalid student ID has been provided'),
  phone_number: z
    .string()
    .regex(/(\+251|0)[0-9]{9}/, 'Invalid phone number provided'),
  gender: z.enum(['male', 'female']),
  baptismal_name: z.string().max(256, 'Name overflowed memory.').optional(),
  email: z.string().email('Invalid email address').optional(),
  role: z.enum(['std_user', 'vice_admin', 'admin', 'superadmin']).optional(),
  current_year: z.number().optional(),
  service: createServiceSchema.optional(),
  department: createDepartmentSchema,
  confession: createConfessionSchema.optional(),
  language: createLanguageSchema,
});
