import 'reflect-metadata';
import {AppDataSource} from '../data_source';
import {Student} from '../models/studentModel';

import {createQueryBuilder} from 'typeorm';
import {catchAsync} from '../shared/utils/catchAsync.utils';
import {customError} from '../shared/utils/customError';
import {filterUtils, filterOption} from '../shared/utils/filterUtils';
import {NextFunction, Request, Response} from 'express';
import {Language} from '../models/languageModel';
import {Service} from '../models/serviceModel';
import {ServiceD} from '../domain_entities/service.entity';
import {LanguageD} from '../domain_entities/language.entity';
import {hashPassword} from './auth.controller';
import {boolean, object, promise} from 'zod';

const studentRepo = AppDataSource.getRepository(Student);
const serviceRepo = AppDataSource.getRepository(Service);
const languageRepo = AppDataSource.getRepository(Language);

export const getStudents = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const {
      department,
      service,
      language,
      confession,
      sort = 'first_name',
      limit = 10,
      page = 1,
    } = req.query;

    const queryBuilder = studentRepo.createQueryBuilder('student');

    const filters: filterOption = {
      department: typeof department === 'string' ? department : undefined,
      confession: typeof confession === 'string' ? confession : undefined,
      language: typeof language === 'string' ? language : undefined,
      service: typeof service === 'string' ? service : undefined,
      page: Number(page),
      limit: Number(limit),
      sort: typeof sort === 'string' ? sort : 'first_name',
    };
    //
    filterUtils(queryBuilder, filters);

    const students = await queryBuilder
      .leftJoinAndSelect('student.department', 'department')
      .leftJoinAndSelect('student.service', 'service')
      .leftJoinAndSelect('student.language', 'language')
      .leftJoinAndSelect('student.confession', 'confession')
      .getMany();

    res.status(200).json({
      status: 'success',
      data: {
        students,
      },
    });
  }
);

export const createStudent = catchAsync(async (req: Request, res: Response) => {
  const reqBody = req.body;
  const password = req.body.password;
  const serviceIds: string[] = req.body.service ?? [];
  const languageIds: string[] = req.body.language ?? [];
  const services: ServiceD[] = [];
  const languages: LanguageD[] = [];

  serviceIds.forEach(async id => {
    const service = await serviceRepo.findOneBy({id});

    if (service) {
      services.push(service);
    }
  });
  languageIds.forEach(async id => {
    const language = await languageRepo.findOneBy({id});

    if (language) {
      languages.push(language);
    }
  });

  const hashedPassword = await hashPassword(password);

  const student: Student = await studentRepo.save({
    ...reqBody,
    password: hashedPassword,
  });

  student.service = services;
  student.language = languages;

  const s = await studentRepo.save(student);

  res.status(201).json({
    status: 'success',
    data: {
      student: s,
    },
  });
});

export const getOneStudent = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const studentId = req.params.id;

    const student = await studentRepo.findOne({
      where: {id: studentId},
      relations: ['confession', 'department', 'language', 'service'],
    });

    if (!student) {
      throw new customError('there is no student in this id', 404);
    }

    res.status(200).json({
      status: 'success',
      data: {
        student,
      },
    });
  }
);

export const deleteStudent = catchAsync(async (req: Request, res: Response) => {
  const studentId = req.params.id;
  const student = await studentRepo.findOne({where: {id: studentId}});

  if (!student) {
    throw new customError('Student not found', 404);
  }
  await studentRepo.delete(studentId);

  return res.status(200).json({
    status: 'success',
    message: 'Student deleted',
  });
});

export const updateStudent = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const studentId = req.params.id;
    const serviceIds: string[] = req.body.service ?? [];
    const languageIds: string[] = req.body.language ?? [];
    const {service, language, ...otherFields} = req.body;
    const reqBody = req.body;

    const student = await studentRepo.findOne({
      where: {id: studentId},
      relations: ['department', 'language', 'confession', 'service'],
    });

    if (!student) {
      throw new customError('Student not found', 404);
    }

    Object.assign(student, otherFields);
    ////to update the language and service
    if (
      reqBody.language !== null &&
      reqBody.language !== undefined &&
      reqBody.language.length > 0
    ) {
      const languages = await Promise.all(
        languageIds.map(async id => await languageRepo.findOneBy({id}))
      );
      student.language = languages.filter(Boolean) as LanguageD[];
    } else {
      student.language = student.language;
    }

    if (
      reqBody.service !== null &&
      reqBody.service !== undefined &&
      reqBody.service.length > 0
    ) {
      const services = await Promise.all(
        serviceIds.map(async id => await serviceRepo.findOneBy({id}))
      );
      student.service = services.filter(Boolean) as ServiceD[];
    } else {
      student.service = student.service;
    }

    await studentRepo.save(student);

    return res.status(200).json({
      status: 'success',
      data: student,
    });
  }
);
