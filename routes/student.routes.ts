import {Router} from 'express';
import {createStudent,deleteStudent, getStudents , getOneStudent, updateStudent} from '../controllers/student.controller';
import { authenticateJWT ,authorizeAdmin } from '../middlewares/auth.middleware';
import { LogIn } from '../controllers/login.controller';

const router = Router();

router.route('/')
.get(authenticateJWT, authorizeAdmin, getStudents)
.post(authenticateJWT, authorizeAdmin,createStudent);

router.route('/:id')
.get(getOneStudent)
.delete(authenticateJWT, authorizeAdmin, deleteStudent)
.put(authenticateJWT, authorizeAdmin, updateStudent)

router.route('/login')
.post(LogIn)

export const studentRouter = router;
