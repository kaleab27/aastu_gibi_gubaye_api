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
require("reflect-metadata");
const data_source_1 = require("../data_source");
const studentModel_1 = require("../models/studentModel");
const languageModel_1 = require("../models/languageModel");
const departmentModel_1 = require("../models/departmentModel");
const studentRepo = data_source_1.AppDataSource.getRepository(studentModel_1.Student);
const deptRepo = data_source_1.AppDataSource.getRepository(languageModel_1.Language);
const langRepo = data_source_1.AppDataSource.getRepository(departmentModel_1.Department);
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
//# sourceMappingURL=student.controllers.js.map