import { StudentD } from './student.entity';
export declare class ServiceD {
    service: string;
    students?: StudentD[] | undefined;
    id?: string;
    constructor(service: string, students?: StudentD[] | undefined);
}
