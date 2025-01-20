import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Student} from './studentModel';

@Entity('confession')
export class Confession {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({name: 'first_name', type: 'varchar'})
  first_name!: string;

  @Column({name: 'last_name', type: 'varchar'})
  last_name!: string;

  @Column({name: 'phone', type: 'varchar'})
  phoneNumber!: string;

  @OneToMany(() => Student, student => student.confession)
  students?: Student[];
}
