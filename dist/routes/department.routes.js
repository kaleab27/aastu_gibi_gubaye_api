"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deptRouter = void 0;
const express_1 = require("express");
const department_controllers_1 = require("../controllers/department.controllers");
// import {catchAsync} from '../shared/utils/catchAsync.utils';
const router = (0, express_1.Router)();
router.route('/')
    .post(department_controllers_1.create)
    .get(department_controllers_1.getDepartment);
router.route('/:id')
    .put(department_controllers_1.updateDepartment);
exports.deptRouter = router;
//# sourceMappingURL=department.routes.js.map