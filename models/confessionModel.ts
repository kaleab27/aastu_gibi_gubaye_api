import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Student} from './studentModel';

@Entity('confession')
export class Confession {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({name: 'name', type: 'varchar'})
  name!: string;

  @Column({name: 'phone', type: 'varchar'})
  phoneNumber!: string;

  @OneToMany(() => Student, student => student.confession)
  students?: Student[];
}
