"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const departmentModel_1 = require("./departmentModel");
const confessionModel_1 = require("./confessionModel");
const serviceModel_1 = require("./serviceModel");
const languageModel_1 = require("./languageModel");
let Student = class Student {
};
exports.Student = Student;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
], Student.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'first_name' })
], Student.prototype, "first_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_name' })
], Student.prototype, "last_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'student_id' })
], Student.prototype, "student_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'gender' })
], Student.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'baptismal_name', nullable: true })
], Student.prototype, "baptismal_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'phone_number' })
], Student.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => languageModel_1.Language, language => language.students),
    (0, typeorm_1.JoinTable)()
], Student.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => departmentModel_1.Department, department => department.students),
    (0, typeorm_1.JoinColumn)({ name: 'department_id' })
], Student.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'email', unique: true, nullable: true })
], Student.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => serviceModel_1.Service, service => service.students, { nullable: true })
    // @JoinTable()
], Student.prototype, "service", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'role', default: 'std_usr' })
], Student.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'current_year', nullable: true })
], Student.prototype, "current_year", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => confessionModel_1.Confession, confession => confession.students, {
        nullable: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'confession_id' })
], Student.prototype, "confession", void 0);
exports.Student = Student = __decorate([
    (0, typeorm_1.Entity)('student')
], Student);
//# sourceMappingURL=studentModel.js.map