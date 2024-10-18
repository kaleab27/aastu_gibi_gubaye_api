"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRouter = void 0;
const express_1 = require("express");
const student_controllers_1 = require("../controllers/student.controllers");
const router = (0, express_1.Router)();
router.route('/').get(student_controllers_1.getStudents).post(student_controllers_1.createStudent);
exports.studentRouter = router;
//# sourceMappingURL=student.routes.js.map