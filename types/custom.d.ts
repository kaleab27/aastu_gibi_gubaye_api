import express from 'express';
import {Confession} from '../models/confessionModel';
import {Service} from '../models/serviceModel';
// import { Language } from '../models/languageModel';
import {Department} from '../models/departmentModel';
import {LanguageD} from '../domain_entities/language.entity';
import {Language} from '../models/languageModel';
import {Request} from 'express';

// declare global {
//   namespace Express {
//     interface Request {
//       student?: {
//         first_name: string;
//         last_name: string;
//         student_id: string;
//         phone_number: string;
//         gender: string;
//         language: string[];
//         department: string;
//         baptismal_name?: string;
//         email?: string;
//         password?: string;
//         service?: string[];
//         role?: string;
//         current_year?: number;
//         confession?: string;
//       };
//     }
//   }
// }

export interface studentReq extends Request {
  student?: {
    first_name: string;
    last_name: string;
    student_id: string;
    phone_number: string;
    gender: string;
    language: Language[];
    department: Department;
    baptismal_name?: string;
    email?: string;
    password?: string;
    service?: Service[];
    role?: string;
    current_year?: string;
    confession?: Confession;
  };
}
