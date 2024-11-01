import 'reflect-metadata';
import {AppDataSource} from '../data_source';
import {Student} from '../models/studentModel';
import {catchAsync} from '../shared/utils/catchAsync.utils'
import { customError } from '../shared/utils/customError';

import { NextFunction, Request, Response} from 'express';
import {Language} from '../models/languageModel';

// import {Department} from '../models/departmentModel';

const studentRepo = AppDataSource.getRepository(Student);
// const deptRepo = AppDataSource.getRepository(Department);
const langRepo = AppDataSource.getRepository(Language);

export const getStudents = catchAsync(async (req: Request, res: Response) => {
  const students = await studentRepo.find({
    relations: ['language', 'service', 'department', 'confession'],
  });

  res.status(200).json({
    status: 'success',
    data: {
      students,
    },
  });
});

export const  createStudent =  catchAsync(async(req: Request, res: Response) => {
    const reqBody = req.body;
    const student = await studentRepo.save(reqBody);
    res.status(201).json({
      status: 'success',
      data: {
        student,
      },
    });
})

export const    getOneStudent =  catchAsync(async(req: Request, res: Response) => {
  const studentId = req.params.id
  
  const student = await studentRepo.findOne({where: {id : studentId}})
 
  if(!student){
    throw new customError('there is no student in this id' ,404)
  }

  res.status(200).json({
  status:'success',
  data:{
    student
  }
})
})

 export const  deleteStudent =catchAsync (async(req:any, res:any )=>  {
    const studentId = req.params.id;
    const student = await studentRepo.findOne({ where: { id: studentId } });
    
    if (!student) {
      throw new customError('Student not found' ,404)
    }
    await studentRepo.delete(studentId);

    return res.status(200).json({
      status: 'success',
      message: 'Student deleted',
    });
})

export const   updateStudent = catchAsync(async (req:Request, res:Response) => {
    const studentId = req.params.id;
    const reqBody = req.body;

    const student = await studentRepo.findOne({ where: { id: studentId } });

    if (!student) {
      throw new customError('Student not found', 404)
    }

    await studentRepo.update(studentId, reqBody);

    const updatedStudent = await studentRepo.findOne({ where: { id: studentId } });

    return res.status(200).json({
      status: 'success',
      data: updatedStudent,
    });
})