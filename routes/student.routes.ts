import {Router} from 'express';
import {
  createStudent,
  deleteStudent,
  getStudents,
  getOneStudent,
  updateStudent,
} from '../controllers/student.controller';
import {
  AddAdminAndSuperAdmin,
  authenticateJWT,
  authorizeAdmin,
} from '../middlewares/auth.middleware';
import {LogIn} from '../controllers/login.controller';

const router = Router();

//get all student authenticateJWT, authorizeAdmin,
//create student authenticateJWT, authorizeAdmin, AddAdminAndSuperAdmin,

router.route('/').get(getStudents).post(createStudent);

router
  .route('/:id')
  .get(getOneStudent)
  .delete(authenticateJWT, authorizeAdmin, deleteStudent)
  .put(authenticateJWT, authorizeAdmin, updateStudent);

router.route('/login').post(LogIn);

export const studentRouter = router;
