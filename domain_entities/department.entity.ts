import {StudentD} from './student.entity';

export class DepartmentD {
  public id?: string;
  constructor(
    public department: string,
    public students?: StudentD[]
  ) {}
}
