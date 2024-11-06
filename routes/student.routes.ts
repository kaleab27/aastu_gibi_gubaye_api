import {Router} from 'express';
import {createStudent,deleteStudent, getStudents , getOneStudent, updateStudent} from '../controllers/student.controller';
import { authenticateJWT } from '../middlewares/auth.middleware';
import { LogIn } from '../controllers/login.controller';

const router = Router();

router.route('/')
.get(authenticateJWT, getStudents)
.post(createStudent);

router.route('/:id')
.get(getOneStudent)
.delete(deleteStudent)
.put(updateStudent)

router.route('/login')
.post(LogIn)

export const studentRouter = router;
