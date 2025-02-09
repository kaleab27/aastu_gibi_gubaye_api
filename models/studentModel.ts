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

  @Column({name: 'first_name', type: 'varchar'})
  first_name!: string;

  @Column({name: 'last_name', type: 'varchar'})
  last_name!: string;

  @Column({name: 'student_id', unique: true, type: 'varchar'})
  student_id!: string;

  @Column({name: 'gender', type: 'varchar'})
  gender!: string;

  @Column({name: 'baptismal_name', type: 'varchar', nullable: true})
  baptismal_name?: string;

  @Column({name: 'phone_number', type: 'varchar'})
  phone_number!: string;

  @Column({name: 'password', nullable: true})
  password?: string;

  @ManyToMany(() => Language, language => language.students)
  @JoinTable()
  language!: Language[];

  @ManyToOne(() => Department, department => department.students)
  @JoinColumn({name: 'department_id'})
  department!: Department;

  @Column({name: 'email', type: 'varchar', nullable: true})
  email?: string;

  @ManyToMany(() => Service, service => service.students, {cascade: true})
  @JoinTable()
  service?: Service[];

  @Column({name: 'role', default: 'std_usr', type: 'varchar'})
  role?: string;

  @Column({name: 'current_year', type: 'int'})
  current_year?: string;

  @ManyToOne(() => Confession, confession => confession.students, {
    nullable: true,
  })
  @JoinColumn({name: 'confession_id'})
  confession?: Confession;
}
