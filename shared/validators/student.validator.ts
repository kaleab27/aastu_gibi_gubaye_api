import {StudentD} from '../../domain_entities/student.entity';
import {createStudentSchema} from './zod/student.zod';

export async function studentAddValidator(student: StudentD) {
  const addStudentSchema = createStudentSchema;
  const studentSafe = await addStudentSchema.safeParseAsync(student);
  if (!studentSafe.success) {
    throw new Error(studentSafe.error.errors[0].message);
  }
}
