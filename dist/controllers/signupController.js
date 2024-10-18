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
exports.signup = signup;
const studentModel_1 = require("../models/studentModel");
const data_source_1 = require("../data_source");
function signup(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const student = new studentModel_1.Student();
            console.log(req.body);
            Object.assign(student, req.body);
            console.log(student);
            const savedStudent = yield data_source_1.AppDataSource.manager.save(student);
            res.status(201).json({
                status: 'success',
                data: {
                    student: savedStudent,
                },
            });
        }
        catch (err) {
            console.error('Failed to create student:', err);
            res.status(500).json({
                status: 'error',
                message: 'Failed to create student',
            });
        }
    });
}
//# sourceMappingURL=signupController.js.map