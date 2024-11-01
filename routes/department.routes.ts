import {Router} from 'express';
import {departmentControllers ,getDepartment } from '../controllers/department.controllers';
import {catchAsync} from '../shared/utils/catchAsync.utils';
const {create} = departmentControllers;

const router = Router();

router.route('/')
.post(catchAsync(create))
.get(getDepartment);

export const deptRouter = router;
