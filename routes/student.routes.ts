import {Router} from 'express';
import {createStudent, getStudents} from '../controllers/student.controllers';

const router = Router();

router.route('/').get(getStudents).post(createStudent);

export const studentRouter = router;
