import {SelectQueryBuilder} from 'typeorm';
import {Student} from '../../models/studentModel';

export interface filterOption {
  department?: string;
  language?: string;
  service?: string;
  confession?: string;
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
    page = 1,
    sort = 'first_name',
    limit = 10,
  } = filters;

  //

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

  return queryBuilder;
};
