import 'reflect-metadata';
import {AppDataSource} from '../data_source';
import {Student} from '../models/studentModel';
import { createQueryBuilder } from 'typeorm';
import {catchAsync} from '../shared/utils/catchAsync.utils'
import { customError } from '../shared/utils/customError';
import { filterUtils, filterOption } from '../shared/utils/filterUtils';
import { NextFunction, Request, Response} from 'express';
import {Language} from '../models/languageModel';
import { Service } from '../models/serviceModel';

// import {Department} from '../models/departmentModel';

const studentRepo = AppDataSource.getRepository(Student);
// const deptRepo = AppDataSource.getRepository(Department);
const langRepo = AppDataSource.getRepository(Language);
const serviceRepo = AppDataSource.getRepository(Service)

export const getStudents = catchAsync(async (req: Request, res: Response, next:NextFunction) => {
  const {department, service, language,confession, sort='first_name' , limit = 10 , page=1} = req.query; 

  const queryBuilder = studentRepo.createQueryBuilder('student')
 
  const filters: filterOption = {
    department: typeof department === 'string' ? department : undefined,
    confession: typeof confession === 'string' ? confession : undefined,
    language: typeof language === 'string' ? language : undefined,
    service: typeof service === 'string' ? service : undefined,
    page: Number(page),   
    limit: Number(limit), 
    sort: typeof sort === 'string' ? sort : 'first_name', 
  };

  filterUtils(queryBuilder,filters)
  
  const students = await queryBuilder
  .leftJoinAndSelect('student.department', 'department')
  .leftJoinAndSelect('student.service', 'service')
  .leftJoinAndSelect('student.language', 'language')
  .leftJoinAndSelect('student.confession', 'confession')
  .getMany();

  res.status(200).json({
    status: 'success',
    data: {
      students,
    },
  });
});

export const  createStudent =  catchAsync(async(req: Request, res: Response ,next:NextFunction) => {
 

    res.status(201).json({
      status: 'success',
      data: {
        student,
      },
    });
})

export const    getOneStudent =  catchAsync(async(req: Request, res: Response , next:NextFunction) => {
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

export const   updateStudent = catchAsync(async (req:Request, res:Response ,next:NextFunction) => {
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