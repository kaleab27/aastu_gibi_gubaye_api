import {SelectQueryBuilder} from 'typeorm';
import {Student} from '../../models/studentModel';

export interface filterOption {
  department?: string;
  language?: string;
  service?: string;
  confession?: string;
  role?: string;
  gender?: string;
  sort?: string;
  page?: number;
  limit?: number;
}

export const filterUtils = (
  queryBuilder: SelectQueryBuilder<Student>,
  filters: filterOption
) => {
  const {
    department,
    service,
    language,
    confession,
    role,
    gender,
    page = 1,
    sort = 'first_name',
    limit = 10,
  } = filters;

  if (department) {
    queryBuilder.andWhere('department.department = :department', {department});
  }
  if (service) {
    queryBuilder.andWhere('service.name = :service', {service});
  }
  if (language) {
    queryBuilder.andWhere('language.name = :language', {language});
  }
  if (confession) {
    queryBuilder.andWhere('confession.name = :confession', {confession});
  }
  if (role) {
    queryBuilder.andWhere('student.role = :role', {role});
  }
  if (gender) {
    queryBuilder.andWhere('student.gender = :gender', {gender});
  }

  return queryBuilder;
};
