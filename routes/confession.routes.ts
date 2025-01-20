import {Router} from 'express';
import {
  createConfession,
  getConfession,
  getAllConfession,
  updateConfession,
  deleteConfession,
} from '../controllers/confession.controller';
// const {createConfession} = confessionController;
const router = Router();

router.route('/').post(createConfession).get(getAllConfession);

router
  .route('/:id')
  .get(getConfession)
  .put(updateConfession)
  .delete(deleteConfession);

export const confessionRouter = router;
