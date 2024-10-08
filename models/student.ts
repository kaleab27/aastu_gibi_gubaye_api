import 'reflect-metadata';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('student')
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({name: 'first_name', default: 'someName'})
  first_name!: string;

  @Column({name: 'last_name', default: 'name'})
  last_name!: string;
}
