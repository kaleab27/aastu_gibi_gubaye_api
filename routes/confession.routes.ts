import {Router} from 'express';
import {
  createConfession,
  getConfession,
  getAllConfession,
  updateConfession,
} from '../controllers/confession.controller';
// const {createConfession} = confessionController;
const router = Router();

router.route('/').post(createConfession).get(getAllConfession);

router.route('/:id').get(getConfession).put(updateConfession);

export const confessionRouter = router;
