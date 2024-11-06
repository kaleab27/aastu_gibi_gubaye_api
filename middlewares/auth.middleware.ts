import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../controllers/auth.controller';

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
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
