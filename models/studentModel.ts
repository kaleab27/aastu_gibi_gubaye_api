import 'reflect-metadata';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {Department} from './departmentModel';
import {Confession} from './confessionModel';
import {Service} from './serviceModel';
import {Language} from './languageModel';
import {nullable} from 'zod';

@Entity('student')
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({name: 'first_name'})
  first_name!: string;

  @Column({name: 'last_name'})
  last_name!: string;

  @Column({name: 'student_id'})
  student_id!: string;

  @Column({name: 'gender'})
  gender!: string;

  @Column({name: 'baptismal_name', nullable: true})
  baptismal_name?: string;

  @Column({name: 'phone_number'})
  phone_number!: string;

  @ManyToMany(() => Language, language => language.students)
  @JoinTable()
  language!: Language[];

  @ManyToOne(() => Department, department => department.students)
  @JoinColumn({name: 'department_id'})
  department!: Department;

  @Column({name: 'email', unique: true, nullable: true})
  email?: string;

  @ManyToMany(() => Service, service => service.students, {nullable: true})
  // @JoinTable()
  service?: Service[];

  @Column({name: 'role', default: 'std_usr'})
  role?: string;

  @Column({name: 'current_year', nullable: true})
  current_year?: number;

  @ManyToOne(() => Confession, confession => confession.students, {
    nullable: true,
  })
  @JoinColumn({name: 'confession_id'})
  confession?: Confession;
}
