import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {Student} from './studentModel';

@Entity('language')
export class Language {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({name: 'name'})
  name!: string;

  @ManyToMany(() => Student, student => student.language)
  students?: Student[];
}
