import {Request, Response} from 'express';
import {Student} from '../models/studentModel';
import {AppDataSource} from '../data_source';

export async function signup(req: Request, res: Response) {
  try {
    const student = new Student();
    console.log(req.body);
    Object.assign(student, req.body);
    console.log(student);
    const savedStudent = await AppDataSource.manager.save(student);
    res.status(201).json({
      status: 'success',
      data: {
        student: savedStudent,
      },
    });
  } catch (err: any) {
    console.error('Failed to create student:', err);
    res.status(500).json({
      status: 'error',
      message: 'Failed to create student',
    });
  }
}
