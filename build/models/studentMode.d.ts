import 'reflect-metadata';
import {Department} from './departmentModel';
import {Confession} from './confessionModel';
import {Service} from './serviceModel';
export declare class Student {
  id: string;
  first_name: string;
  last_name: string;
  student_id: String;
  gender: String;
  baptismal_name: String;
  phone_number: number;
  mother_tounge: String;
  department: Department;
  departmentId: number;
  email: String;
  service: Service;
  servicesId: number;
  role: String;
  current_year: number;
  confession: Confession;
  conffestion_fatherId: number;
}
