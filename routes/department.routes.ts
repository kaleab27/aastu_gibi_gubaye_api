import {Router} from 'express';
import {departmentControllers} from '../controllers/department.controllers';
import {catchAsync} from '../shared/utils/catchAsync.utils';
const {create} = departmentControllers;

const router = Router();

router.route('/').post(catchAsync(create));

export const deptRouter = router;
