import {AppDataSource} from '../data_source';
import {Department} from '../models/departmentModel';
import {NextFunction, Request, Response} from 'express';
import { customError } from '../shared/utils/customError';
import { catchAsync } from '../shared/utils/catchAsync.utils';


const deptRepo = AppDataSource.getRepository(Department);

export const create = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const newDept = await deptRepo.save(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        department: newDept,
      },
    });
});

export const getDepartment =  catchAsync(async(req:Request , res:Response) => {
   const department = await deptRepo.find()

   res.status(200).json({
    status:'success',
    data:{
      department
    }
   })
} )

export const updateDepartment = catchAsync (async (req:Request , res:Response) => {
  const studentId = req.params.id
  const reqBody = req.body
  const department = await deptRepo.findOne({where:{id:studentId}})

  if(!department){
    throw new customError('there is no department in this id', 404)
  }

  await deptRepo.update(studentId, reqBody)

  const updatedDep = await deptRepo.findOne({where:{id: studentId}})
 return  res.status(200).json({
   status:'success',
   data: {
    updatedDep
   }
 })
})

 