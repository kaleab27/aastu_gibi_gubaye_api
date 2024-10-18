import { z } from 'zod';
export declare const createStudentSchema: z.ZodObject<{
    first_name: z.ZodString;
    last_name: z.ZodString;
    student_id: z.ZodString;
    phone_number: z.ZodString;
    gender: z.ZodEnum<["male", "female"]>;
    baptismal_name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodEnum<["std_user", "vice_admin", "admin", "superadmin"]>>;
    current_year: z.ZodOptional<z.ZodNumber>;
    service: z.ZodOptional<z.ZodObject<{
        service: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        service: string;
    }, {
        service: string;
    }>>;
    department: z.ZodObject<{
        department: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        department: string;
    }, {
        department: string;
    }>;
    confession: z.ZodOptional<z.ZodObject<{
        confession: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        confession: string;
    }, {
        confession: string;
    }>>;
    language: z.ZodObject<{
        language: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        language: string;
    }, {
        language: string;
    }>;
}, "strip", z.ZodTypeAny, {
    language: {
        language: string;
    };
    first_name: string;
    last_name: string;
    student_id: string;
    gender: "male" | "female";
    phone_number: string;
    department: {
        department: string;
    };
    confession?: {
        confession: string;
    } | undefined;
    service?: {
        service: string;
    } | undefined;
    email?: string | undefined;
    baptismal_name?: string | undefined;
    role?: "std_user" | "vice_admin" | "admin" | "superadmin" | undefined;
    current_year?: number | undefined;
}, {
    language: {
        language: string;
    };
    first_name: string;
    last_name: string;
    student_id: string;
    gender: "male" | "female";
    phone_number: string;
    department: {
        department: string;
    };
    confession?: {
        confession: string;
    } | undefined;
    service?: {
        service: string;
    } | undefined;
    email?: string | undefined;
    baptismal_name?: string | undefined;
    role?: "std_user" | "vice_admin" | "admin" | "superadmin" | undefined;
    current_year?: number | undefined;
}>;
