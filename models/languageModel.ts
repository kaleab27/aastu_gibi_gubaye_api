import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Student} from './studentMode';

@Entity('language')
export class Language {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'language'})
  language: string;

  @OneToMany(() => Student, student => student.language)
  students: Student[];
}
