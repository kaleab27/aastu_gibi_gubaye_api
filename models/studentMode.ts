import 'reflect-metadata';
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Department} from './departmentModel';
import {Confession} from './confessionModel';
import {Service} from './serviceModel';
import {Language} from './languageModel';

@Entity('student')
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({name: 'first_name'})
  first_name!: string;

  @Column({name: 'last_name'})
  last_name!: string;

  @Column({name: 'student_id'})
  student_id: string;

  @Column({name: 'gender'})
  gender: string;

  @Column({name: 'baptismal_name'})
  baptismal_name: string;

  @Column({name: 'phone_number'})
  phone_number: string;

  @ManyToOne(() => Language, language => language.students)
  language: Language;

  @ManyToOne(() => Department, department => department.students)
  department: Department;

  @Column({name: 'email', unique: true})
  email: string;

  @ManyToOne(() => Service, service => service.students)
  service: Service;

  @Column({name: 'role'})
  role: string;

  @Column({name: 'current_year'})
  current_year: number;

  @ManyToOne(() => Confession, confession => confession.students)
  confession: Confession;
}
