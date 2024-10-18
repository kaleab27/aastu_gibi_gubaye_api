import {StudentD} from './student.entity';

export class ServiceD {
  public id?: string;
  constructor(
    public service: string,
    public students?: StudentD[]
  ) {}
}
