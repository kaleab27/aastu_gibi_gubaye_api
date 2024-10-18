import { StudentD } from './student.entity';
export declare class LanguageD {
    language: string;
    students?: StudentD[] | undefined;
    id?: string;
    constructor(language: string, students?: StudentD[] | undefined);
}
