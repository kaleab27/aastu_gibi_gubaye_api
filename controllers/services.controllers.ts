import 'reflect-metadata'
import { AppDataSource } from '../data_source'
import { Service } from '../models/serviceModel'
import { Request, Response , NextFunction} from 'express'

const serviceRepo = AppDataSource.getRepository(Service)
const createService = async function (req:Request , res: Response) {
    try{
       const reqBody = req.body;
       const service = await serviceRepo.save(reqBody)

       res.status(201).json({
        status:'success',
        data:{
            service
        }
       })
    }catch(err:any) {
      throw new Error(err.message)
    }
}

 export const serviceController = {
    createService
}