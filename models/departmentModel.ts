import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Student} from './studentMode';

@Entity('department')
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'department'})
  department: string;

  @OneToMany(() => Student, student => student.department)
  students: Student[];
}
