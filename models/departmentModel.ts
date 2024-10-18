import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Student} from './studentModel';

@Entity('department')
export class Department {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({name: 'department'})
  department!: string;

  @OneToMany(() => Student, student => student.department)
  students?: Student[];
}
