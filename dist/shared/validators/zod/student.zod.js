"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStudentSchema = void 0;
const zod_1 = require("zod");
const service_zod_1 = require("./service.zod");
const department_zod_1 = require("./department.zod");
const confession_zod_1 = require("./confession.zod");
const language_zod_1 = require("./language.zod");
exports.createStudentSchema = zod_1.z.object({
    first_name: zod_1.z.string().max(100, 'Exceeded the max string length for names'),
    last_name: zod_1.z.string().max(100, 'Exceeded the max string length for names'),
    student_id: zod_1.z.string().length(10, 'Invalid student ID has been provided'),
    phone_number: zod_1.z
        .string()
        .regex(/(\+251|0)[0-9]{9}/, 'Invalid phone number provided'),
    gender: zod_1.z.enum(['male', 'female']),
    baptismal_name: zod_1.z.string().max(256, 'Name overflowed memory.').optional(),
    email: zod_1.z.string().email('Invalid email address').optional(),
    role: zod_1.z.enum(['std_user', 'vice_admin', 'admin', 'superadmin']).optional(),
    current_year: zod_1.z.number().optional(),
    service: service_zod_1.createServiceSchema.optional(),
    department: department_zod_1.createDepartmentSchema,
    confession: confession_zod_1.createConfessionSchema.optional(),
    language: language_zod_1.createLanguageSchema,
});
//# sourceMappingURL=student.zod.js.map