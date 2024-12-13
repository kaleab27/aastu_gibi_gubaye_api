import {Router} from 'express';
import {
  create,
  getLanguage,
  updateLanguage,
} from '../controllers/language.controller';
import {catchAsync} from '../shared/utils/catchAsync.utils';
// const {create} = languageControllers;

const router = Router();

router.route('/').post(catchAsync(create)).get(getLanguage);

router.route('/:id').put(updateLanguage);

export const langRouter = router;
