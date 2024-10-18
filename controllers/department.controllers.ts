import {AppDataSource} from '../data_source';
import {Department} from '../models/departmentModel';
import {NextFunction, Request, Response} from 'express';

const deptRepo = AppDataSource.getRepository(Department);

const create = async (req: Request, res: Response, next: NextFunction) => {
  const newDept = await deptRepo.save(req.body);

  if (newDept) {
    res.status(201).json({
      status: 'success',
      data: {
        department: newDept,
      },
    });
  } else {
    next("Couldn't add department");
  }
};

export const departmentControllers = {
  create,
};
