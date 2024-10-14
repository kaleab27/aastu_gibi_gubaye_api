import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Student} from './studentMode';

@Entity('service')
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name:'name'})
  name: string;

  @ManyToMany(() => Student, (student) => student.service)
  students: Student[];
}
