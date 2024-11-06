import { Request , Response , NextFunction } from 'express';
import { verifyToken } from '../controllers/auth.controller';
import { customError } from '../shared/utils/customError';

export const authenticateJWT = (req: any, res: any, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1]; 

  if (!token) {
     return res.status(403).json({
         message: 'Access denied. No token provided.'
    });
  }

  const verified = verifyToken(token);
  if (!verified) {
    return res.status(401).json({
         message: 'Invalid token' 
    });
  }

  req.student = verified;
  next();
};


export const authorizeAdmin = (req: any, res: any, next: NextFunction) => {
  console.log(req.student)
  if (req.student && req.student.role === 'admin') {
    next();
  } else {
    return res.status(403).json({ message: 'You are not authorized to do this action' });
  }
};