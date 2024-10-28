import 'reflect-metadata';
import {AppDataSource} from '../data_source';
import {Student} from '../models/studentModel';
import {Request, Response} from 'express';
import {Language} from '../models/languageModel';
import { start } from 'repl';
// import {Department} from '../models/departmentModel';

const studentRepo = AppDataSource.getRepository(Student);
// const deptRepo = AppDataSource.getRepository(Department);
const langRepo = AppDataSource.getRepository(Language);

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

export async function updateStud(req: Request, res: Response) {
  try {
    const reqBody = req.body;
    const studentId = req.params.id;

    const student = await studentRepo.findOne({ where: { id: studentId } });

    if (!student) {
      return res.status(404).json({
        status: 'fail',
        message: 'It can\'t find the student',
      });
    }
    await studentRepo.update(studentId, reqBody);

    const updatedStudent = await studentRepo.findOne({ where: { id: studentId } });

    res.status(200).json({
      status: 'success',
      data: {
        student: updatedStudent,
      },
    });
  } catch (err: any) {
    res.status(500).json({ status: 'error', message: err.message });
  }
}