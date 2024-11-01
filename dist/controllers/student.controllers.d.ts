import 'reflect-metadata';
import { Request, Response } from 'express';
export declare function getStudents(req: Request, res: Response): Promise<void>;
export declare function createStudent(req: Request, res: Response): Promise<void>;
export declare function getOneStudent(req: Request, res: Response): Promise<void>;
export declare function deleteStudent(req: any, res: any): Promise<any>;
export declare function updateStudent(req: any, res: any): Promise<any>;
