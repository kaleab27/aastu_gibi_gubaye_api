import {Confession} from '../models/confessionModel';
import {Service} from '../models/serviceModel';
import {Department} from '../models/departmentModel';
import {Language} from '../models/languageModel';
import {Request} from 'express';

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
