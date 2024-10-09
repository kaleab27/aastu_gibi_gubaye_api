'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, '__esModule', {value: true});
exports.Student = void 0;
require('reflect-metadata');
const typeorm_1 = require('typeorm');
const departmentModel_1 = require('./departmentModel');
const confessionModel_1 = require('./confessionModel');
const serviceModel_1 = require('./serviceModel');
let Student = class Student {};
exports.Student = Student;
__decorate(
  [
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata('design:type', String),
  ],
  Student.prototype,
  'id',
  void 0
);
__decorate(
  [
    (0, typeorm_1.Column)({name: 'first_name'}),
    __metadata('design:type', String),
  ],
  Student.prototype,
  'first_name',
  void 0
);
__decorate(
  [
    (0, typeorm_1.Column)({name: 'last_name'}),
    __metadata('design:type', String),
  ],
  Student.prototype,
  'last_name',
  void 0
);
__decorate(
  [
    (0, typeorm_1.Column)({name: 'student_id'}),
    __metadata('design:type', String),
  ],
  Student.prototype,
  'student_id',
  void 0
);
__decorate(
  [(0, typeorm_1.Column)({name: 'gender'}), __metadata('design:type', String)],
  Student.prototype,
  'gender',
  void 0
);
__decorate(
  [
    (0, typeorm_1.Column)({name: 'baptismal_name'}),
    __metadata('design:type', String),
  ],
  Student.prototype,
  'baptismal_name',
  void 0
);
__decorate(
  [
    (0, typeorm_1.Column)({name: 'phone_number'}),
    __metadata('design:type', Number),
  ],
  Student.prototype,
  'phone_number',
  void 0
);
__decorate(
  [
    (0, typeorm_1.Column)({name: 'mother_tounge'}),
    __metadata('design:type', String),
  ],
  Student.prototype,
  'mother_tounge',
  void 0
);
__decorate(
  [
    (0, typeorm_1.ManyToOne)(
      () => departmentModel_1.Department,
      department => department.students
    ),
    __metadata('design:type', departmentModel_1.Department),
  ],
  Student.prototype,
  'department',
  void 0
);
__decorate(
  [(0, typeorm_1.Column)(), __metadata('design:type', Number)],
  Student.prototype,
  'departmentId',
  void 0
);
__decorate(
  [(0, typeorm_1.Column)({name: 'email'}), __metadata('design:type', String)],
  Student.prototype,
  'email',
  void 0
);
__decorate(
  [
    (0, typeorm_1.ManyToOne)(
      () => serviceModel_1.Service,
      service => service.students
    ),
    __metadata('design:type', serviceModel_1.Service),
  ],
  Student.prototype,
  'service',
  void 0
);
__decorate(
  [(0, typeorm_1.Column)(), __metadata('design:type', Number)],
  Student.prototype,
  'servicesId',
  void 0
);
__decorate(
  [(0, typeorm_1.Column)({name: 'role'}), __metadata('design:type', String)],
  Student.prototype,
  'role',
  void 0
);
__decorate(
  [
    (0, typeorm_1.Column)({name: 'current_year'}),
    __metadata('design:type', Number),
  ],
  Student.prototype,
  'current_year',
  void 0
);
__decorate(
  [
    (0, typeorm_1.ManyToOne)(
      () => confessionModel_1.Confession,
      confession => confession.students
    ),
    __metadata('design:type', confessionModel_1.Confession),
  ],
  Student.prototype,
  'confession',
  void 0
);
__decorate(
  [(0, typeorm_1.Column)(), __metadata('design:type', Number)],
  Student.prototype,
  'conffestion_fatherId',
  void 0
);
exports.Student = Student = __decorate(
  [(0, typeorm_1.Entity)('student')],
  Student
);
//# sourceMappingURL=studentMode.js.map
