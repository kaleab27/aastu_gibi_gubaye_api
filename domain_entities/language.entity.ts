import {StudentD} from './student.entity';

export class LanguageD {
  public id?: string;
  constructor(
    public language: string,
    public students?: StudentD[]
  ) {}
}
