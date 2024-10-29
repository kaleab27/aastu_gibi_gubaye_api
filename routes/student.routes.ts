import {Router} from 'express';
import {createStudent,deleteStudent, getStudents , getOneStudent, updateStudent} from '../controllers/student.controllers';


const router = Router();

router.route('/')
.get(getStudents)
.post(createStudent);

router.route('/:id')
.get(getOneStudent)
.delete(deleteStudent)
.put(updateStudent)


export const studentRouter = router;
