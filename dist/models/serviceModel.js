"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const typeorm_1 = require("typeorm");
const studentModel_1 = require("./studentModel");
let Service = class Service {
};
exports.Service = Service;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
], Service.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name' })
], Service.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => studentModel_1.Student, student => student.service)
], Service.prototype, "students", void 0);
exports.Service = Service = __decorate([
    (0, typeorm_1.Entity)('service')
], Service);
//# sourceMappingURL=serviceModel.js.map