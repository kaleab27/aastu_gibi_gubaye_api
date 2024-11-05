import { SelectQueryBuilder } from "typeorm"
import { Student } from "../../models/studentModel"

export interface filterOption {
 department?:string,
 language?:string,
 service?:string,
 confession?:string,
 sort?:string,
 page?:number,
 limit?:number
}

export const filterUtils = (
 queryBuilder: SelectQueryBuilder<Student>,
 filters: filterOption
) => {
 const {department ,service , language, confession , page=1, sort='first_name', limit=10} = filters

 // 

 if (department) {
    queryBuilder.andWhere('department.department = :department', { department });
}
if (service) {
    // queryBuilder.leftJoinAndSelect('student.service','service')
    // .andWhere('service.name = :service', { service });
    // queryBuilder.innerJoin('service.name', 'service', 'service.name IN (:...service)', {
    //     service: service,
    //   });
    queryBuilder.andWhere(
        qb =>
          `EXISTS (${qb
            .subQuery()
            .select('1')
            .from('student_service_service', 'student_service') // Join table for Many-to-Many relation between Student and Service
            .innerJoin('service', 'service', 'student_service.serviceId = service.id')
            .where('student_service.studentId = student.id')
            .andWhere('service.name = :service')
            .getQuery()})`,
        { service }
      );

}
if (language) {
    queryBuilder.leftJoinAndSelect('student.language', 'language')
    .andWhere('language.name = :language', { language });
}
if (confession) {
    queryBuilder.andWhere('confession.name = :confession', { confession });
}

//  .skip(skip)
 const skip = (Number(page)-1) * Number(limit)
 queryBuilder.take(Number(limit))
 queryBuilder.skip(skip)
  //
queryBuilder.orderBy(`student.${sort}`, 'ASC')

return queryBuilder;
}