import {Router} from 'express';
import {languageControllers} from '../controllers/language.controllers';
import {catchAsync} from '../shared/utils/catchAsync.utils';
const {create} = languageControllers;

const router = Router();

router.route('/').post(catchAsync(create));

export const langRouter = router;
