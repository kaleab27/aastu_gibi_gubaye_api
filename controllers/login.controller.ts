import {catchAsync} from '../shared/utils/catchAsync.utils';
import {AppDataSource} from '../data_source';
import {Request, Response, NextFunction} from 'express';
import {hashPassword, comparePassword, generateToken} from './auth.controller';
import {Student} from '../models/studentModel';
import {customError} from '../shared/utils/customError';

const studentRepo = AppDataSource.getRepository(Student);

export const LogIn = catchAsync(async (req: Request, res: Response) => {
  const {studentId, password} = req.body;

  const student = await studentRepo.findOne({where: {student_id: studentId}});

  if (!student) {
    throw new customError('there is no user in this id', 400);
  }
  if (!student.password) {
    return res
      .status(400)
      .json({message: 'Password is not available for this user.'});
  }
  const isMatch = await comparePassword(password, student.password);

  if (!isMatch) {
    return res.status(400).json({message: 'Invalid credentials'});
  }

  const token = generateToken(student.id);

  res.cookie('auth-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV?.toLowerCase() === 'production',
    maxAge: 3600 * 1000 * 24 * 30, // a month
  });

  res.status(200).json({
    status: 'success',
    token,
  });
});
