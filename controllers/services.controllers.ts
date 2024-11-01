import 'reflect-metadata'
import { AppDataSource } from '../data_source'
import { Service } from '../models/serviceModel'
import { catchAsync } from '../shared/utils/catchAsync.utils'
import { Request, Response , NextFunction} from 'express'

const serviceRepo = AppDataSource.getRepository(Service)
export const  createService = catchAsync(async  (req:Request , res: Response) => {
       const reqBody = req.body;
       const service = await serviceRepo.save(reqBody)

       res.status(201).json({
        status:'success',
        data:{
            service
     }
 })
})
