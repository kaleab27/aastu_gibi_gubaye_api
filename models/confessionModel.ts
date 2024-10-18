import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Student} from './studentModel';

@Entity('confession')
export class Confession {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({name: 'name'})
  name!: string;

  @Column({name: 'phone'})
  phoneNumber!: string;

  @OneToMany(() => Student, student => student.confession)
  students?: Student[];
}
