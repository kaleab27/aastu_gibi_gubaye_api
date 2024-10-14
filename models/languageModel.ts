import {Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Student} from './studentMode';

@Entity('language')
export class Language {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name:"name"})
  name: string;

  @ManyToMany(() => Student, student => student.language)
  students: Student[];
}
