import {Router} from 'express';
import {create ,getDepartment ,updateDepartment} from '../controllers/department.controller';
// import {catchAsync} from '../shared/utils/catchAsync.utils';


const router = Router();

router.route('/')
.post(create)
.get(getDepartment);

router.route('/:id')
.put(updateDepartment)

export const deptRouter = router;
