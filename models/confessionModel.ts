import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Student} from './studentMode';

@Entity('confession')
export class Confession {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name:'name'})
  name: string;

  @Column({name:'phone'})
  phoneNumber: string

  @OneToMany(() => Student, student => student.confession)
  students: Student[];
}
