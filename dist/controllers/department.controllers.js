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
exports.departmentControllers = void 0;
const data_source_1 = require("../data_source");
const departmentModel_1 = require("../models/departmentModel");
const deptRepo = data_source_1.AppDataSource.getRepository(departmentModel_1.Department);
const create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const newDept = yield deptRepo.save(req.body);
    if (newDept) {
        res.status(201).json({
            status: 'success',
            data: {
                department: newDept,
            },
        });
    }
    else {
        next("Couldn't add department");
    }
});
exports.departmentControllers = {
    create,
};
//# sourceMappingURL=department.controllers.js.map