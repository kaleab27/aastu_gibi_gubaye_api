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
exports.getStudents = getStudents;
exports.createStudent = createStudent;
exports.getOneStudent = getOneStudent;
exports.deleteStudent = deleteStudent;
exports.updateStudent = updateStudent;
require("reflect-metadata");
const data_source_1 = require("../data_source");
const studentModel_1 = require("../models/studentModel");
const languageModel_1 = require("../models/languageModel");
// import {Department} from '../models/departmentModel';
const studentRepo = data_source_1.AppDataSource.getRepository(studentModel_1.Student);
// const deptRepo = AppDataSource.getRepository(Department);
const langRepo = data_source_1.AppDataSource.getRepository(languageModel_1.Language);
function getStudents(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const students = yield studentRepo.find({
                relations: ['language', 'service', 'department', 'confession'],
            });
            res.status(200).json({
                status: 'success',
                data: {
                    students,
                },
            });
        }
        catch (err) {
            throw new Error(err.message);
        }
    });
}
function createStudent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const reqBody = req.body;
            const student = yield studentRepo.save(reqBody);
            res.status(201).json({
                status: 'success',
                data: {
                    student,
                },
            });
        }
        catch (err) {
            throw new Error(err.message);
        }
    });
}
function getOneStudent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const studentId = req.params.id;
            const student = yield studentRepo.findOne({ where: { id: studentId } });
            if (!student) {
                res.status(404).json({
                    status: 'fail',
                    message: 'there is no user in this id'
                });
            }
            res.status(200).json({
                status: 'success',
                data: {
                    student
                }
            });
        }
        catch (err) {
            throw new Error('error occured');
        }
    });
}
function deleteStudent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const studentId = req.params.id;
            const student = yield studentRepo.findOne({ where: { id: studentId } });
            if (!student) {
                return res.status(404).json({
                    status: 'fail',
                    message: 'Student not found',
                });
            }
            yield studentRepo.delete(studentId);
            return res.status(200).json({
                status: 'success',
                message: 'Student deleted',
            });
        }
        catch (err) {
            return res.status(500).json({
                status: 'error',
                message: 'Student not deleted',
                error: err.message
            });
        }
    });
}
function updateStudent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const studentId = req.params.id;
            const reqBody = req.body;
            const student = yield studentRepo.findOne({ where: { id: studentId } });
            if (!student) {
                return res.status(404).json({
                    status: 'fail',
                    message: 'Student not found',
                });
            }
            yield studentRepo.update(studentId, reqBody);
            const updatedStudent = yield studentRepo.findOne({ where: { id: studentId } });
            return res.status(200).json({
                status: 'success',
                data: updatedStudent,
            });
        }
        catch (err) {
            return res.status(500).json({
                status: 'error',
                message: err.message,
            });
        }
    });
}
//# sourceMappingURL=student.controllers.js.map