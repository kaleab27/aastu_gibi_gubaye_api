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

//authenticateJWT, authorizeAdmin, AddAdminAndSuperAdmin, for create student
//authenticateJWT, authorizeAdmin, get all student
//authenticateJWT, authorizeAdmin, delete student
// authenticateJWT, authorizeAdmin, update student
router.route('/').get(getStudents).post(createStudent);

router
  .route('/:id')
  .get(getOneStudent)
  .delete(deleteStudent)
  .put(updateStudent);

router.route('/login').post(LogIn);

export const studentRouter = router;
