import {Brackets, SelectQueryBuilder} from 'typeorm';
import {Student} from '../../models/studentModel';

export const searchUtils = (
  queryBuilder: SelectQueryBuilder<Student>,
  keyword: string
) => {
  queryBuilder.andWhere(
    new Brackets(qb => {
      qb.where('student.first_name LIKE :keyword', {keyword: `%${keyword}%`})
        .orWhere('confession.first_name LIKE :keyword', {
          keyword: `%${keyword}%`,
        })
        .orWhere('student.last_name LIKE :keyword', {
          keyword: `%${keyword}%`,
        })
        .orWhere('student.phone_number LIKE :keyword', {
          keyword: `%${keyword}%`,
        })
        .orWhere('student.student_id LIKE :keyword', {
          keyword: `%${keyword}%`,
        });
    })
  );

  return queryBuilder;
};
