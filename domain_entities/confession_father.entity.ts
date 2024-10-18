import {StudentD} from './student.entity';

export class ConfessionFatherD {
  public id?: string;
  constructor(
    public confession: string,
    public students?: StudentD[]
  ) {}
}
