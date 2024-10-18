import 'reflect-metadata';
import {AppDataSource} from '../data_source';
import {Student} from '../models/studentModel';
import {Request, Response} from 'express';
import {Language} from '../models/languageModel';
import {Department} from '../models/departmentModel';

const studentRepo = AppDataSource.getRepository(Student);
const deptRepo = AppDataSource.getRepository(Language);
const langRepo = AppDataSource.getRepository(Department);

export async function getStudents(req: Request, res: Response) {
  try {
    const students = await studentRepo.find({
      relations: ['language', 'service', 'department', 'confession'],
    });
    res.status(200).json({
      status: 'success',
      data: {
        students,
      },
    });
  } catch (err: any) {
    throw new Error(err.message);
  }
}
export async function createStudent(req: Request, res: Response) {
  try {
    const reqBody = req.body;
    const student = await studentRepo.save(reqBody);
    res.status(201).json({
      status: 'success',
      data: {
        student,
      },
    });
  } catch (err: any) {
    throw new Error(err.message);
  }
}
