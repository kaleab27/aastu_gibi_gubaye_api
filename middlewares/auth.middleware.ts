import {Request, Response , NextFunction } from 'express';
import { verifyToken } from '../controllers/auth.controller';
import { Student } from '../models/studentModel';
import { AppDataSource } from '../data_source';

const studentRepo = AppDataSource.getRepository(Student)

export const authenticateJWT = async (req: any, res:any , next:NextFunction) => {
  // const token = req.header('Authorization')?.split(' ')[1]; 
  const token = req.cookies.token;

  if (!token) {
    return res.status(403).json({ message: 'Access denied. No token provided.' });
  }
  const decoded = verifyToken(token); 

  if (!decoded) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  try {
    const studentId = decoded.studentId;
    const student = await studentRepo.findOne({where: {id: studentId},
     relations:['confession','department','language','service']
    }); 

    if (!student) {
      return res.status(404).json({
         message: 'Student not found'
         });
    }

    req.student = student;
    next(); 
  } catch (err) {
    res.status(500).json({
       message: 'Error fetching student data' 
      });
  }
};

export const authorizeAdmin = (req: any, res: any, next: NextFunction)=> {
  console.log(req.student)
  if (req.student && req.student.role === 'admin' || 'super admin') {
    next();
  } else {
    return res.status(403).json({ 
      message: 'You are not authorized to do this action'
     });
  }
};