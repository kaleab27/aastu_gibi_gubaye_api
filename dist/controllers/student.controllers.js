"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStudent = exports.deleteStudent = exports.getOneStudent = exports.createStudent = exports.getStudents = void 0;
require("reflect-metadata");
const data_source_1 = require("../data_source");
const studentModel_1 = require("../models/studentModel");
const catchAsync_utils_1 = require("../shared/utils/catchAsync.utils");
const customError_1 = require("../shared/utils/customError");
const languageModel_1 = require("../models/languageModel");
// import {Department} from '../models/departmentModel';
const studentRepo = data_source_1.AppDataSource.getRepository(studentModel_1.Student);
// const deptRepo = AppDataSource.getRepository(Department);
const langRepo = data_source_1.AppDataSource.getRepository(languageModel_1.Language);
exports.getStudents = (0, catchAsync_utils_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const students = yield studentRepo.find({
        relations: ['language', 'service', 'department', 'confession'],
    });
    res.status(200).json({
        status: 'success',
        data: {
            students,
        },
    });
}));
exports.createStudent = (0, catchAsync_utils_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqBody = req.body;
    const student = yield studentRepo.save(reqBody);
    res.status(201).json({
        status: 'success',
        data: {
            student,
        },
    });
}));
exports.getOneStudent = (0, catchAsync_utils_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const studentId = req.params.id;
    const student = yield studentRepo.findOne({ where: { id: studentId } });
    if (!student) {
        throw new customError_1.customError('there is no student in this id', 404);
    }
    res.status(200).json({
        status: 'success',
        data: {
            student
        }
    });
}));
exports.deleteStudent = (0, catchAsync_utils_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const studentId = req.params.id;
    const student = yield studentRepo.findOne({ where: { id: studentId } });
    if (!student) {
        throw new customError_1.customError('Student not found', 404);
    }
    yield studentRepo.delete(studentId);
    return res.status(200).json({
        status: 'success',
        message: 'Student deleted',
    });
}));
exports.updateStudent = (0, catchAsync_utils_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const studentId = req.params.id;
    const reqBody = req.body;
    const student = yield studentRepo.findOne({ where: { id: studentId } });
    if (!student) {
        throw new customError_1.customError('Student not found', 404);
    }
    yield studentRepo.update(studentId, reqBody);
    const updatedStudent = yield studentRepo.findOne({ where: { id: studentId } });
    return res.status(200).json({
        status: 'success',
        data: updatedStudent,
    });
}));
//# sourceMappingURL=student.controllers.js.map