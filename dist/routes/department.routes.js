"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deptRouter = void 0;
const express_1 = require("express");
const department_controllers_1 = require("../controllers/department.controllers");
const catchAsync_utils_1 = require("../shared/utils/catchAsync.utils");
const { create } = department_controllers_1.departmentControllers;
const router = (0, express_1.Router)();
router.route('/').post((0, catchAsync_utils_1.catchAsync)(create));
exports.deptRouter = router;
//# sourceMappingURL=department.routes.js.map