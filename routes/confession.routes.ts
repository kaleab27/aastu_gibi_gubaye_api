import {Router} from 'express';
import {
  createConfession,
  getConfession,
  getAllConfession,
  updateConfession,
  deleteConfession,
} from '../controllers/confession.controller';
import {authenticateJWT, authorizeAdmin} from '../middlewares/auth.middleware';
const router = Router();

//
router
  .route('/')
  .post(authenticateJWT, authorizeAdmin, createConfession)
  .get(getAllConfession);

router
  .route('/:id')
  .get(getConfession)
  .put(updateConfession)
  .delete(deleteConfession);

export const confessionRouter = router;
