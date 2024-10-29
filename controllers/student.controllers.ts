import 'reflect-metadata';
import {AppDataSource} from '../data_source';
import {Student} from '../models/studentModel';
import { NextFunction, Request, Response} from 'express';
import {Language} from '../models/languageModel';

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

export async function getOneStudent(req: Request, res: Response) {
 try{
  const studentId = req.params.id
  
  const student = await studentRepo.findOne({where: {id : studentId}})
 
  if(!student){
    res.status(404).json({
      status:'fail',
      message:'there is no user in this id'
    })
  }

  res.status(200).json({
  status:'success',
  data:{
    student
  }
})
 }catch(err:any){
   throw new Error('error occured')
 }
}

export async function deleteStudent(req:any, res:any ) {
  try {
    const studentId = req.params.id;
    const student = await studentRepo.findOne({ where: { id: studentId } });
    
    if (!student) {
      return res.status(404).json({
        status: 'fail',
        message: 'Student not found',
      });
    }
    await studentRepo.delete(studentId);

    return res.status(200).json({
      status: 'success',
      message: 'Student deleted',
    });

  } catch (err: any) {
    return res.status(500).json({
      status: 'error',
      message: 'Student not deleted',
      error: err.message
    });
  }
}

export async function updateStudent(req:any, res:any) {
  try {
    const studentId = req.params.id;
    const reqBody = req.body;

    const student = await studentRepo.findOne({ where: { id: studentId } });

    if (!student) {
      return res.status(404).json({
        status: 'fail',
        message: 'Student not found',
      });
    }

    await studentRepo.update(studentId, reqBody);

    const updatedStudent = await studentRepo.findOne({ where: { id: studentId } });

    return res.status(200).json({
      status: 'success',
      data: updatedStudent,
    });
  } catch (err: any) {
    return res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
}