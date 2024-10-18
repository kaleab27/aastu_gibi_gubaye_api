import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Student} from './studentModel';

@Entity('service')
export class Service {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({name: 'name'})
  name: string;

  @ManyToMany(() => Student, student => student.service)
  students: Student[];
}
