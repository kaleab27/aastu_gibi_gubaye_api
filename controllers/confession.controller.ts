import 'reflect-metadata'
import { AppDataSource } from '../data_source';
import { Confession } from '../models/confessionModel';
import { catchAsync } from '../shared/utils/catchAsync.utils';
import { customError } from '../shared/utils/customError';
import { Request , Response } from "express";

const confessionRepo = AppDataSource.getRepository(Confession)

export const   createConfession = catchAsync(async(req: Request , res:Response) =>{
     const reqBody = req.body;
     const newConfession = await confessionRepo.save(reqBody)
  res.status(201).json({
    status:'success',
    data:{
        newConfession
    }
  })
})

export const    getAllConfession =  catchAsync(async(req: Request , res:Response)=> {
   const confession = await confessionRepo.find()
   
   res.status(200).json({
      status:'success',
      data:{
         confession
      }
   })
})

export const   getConfession =  catchAsync(async(req: Request, res: Response) => {
    const confessionId = req.params.id
    const confession = await confessionRepo.findOne({where: {id : confessionId}})
   
    if(!confession){
      throw new customError('there is no user in this id' , 404)
    }
  
    res.status(200).json({
    status:'success',
    data:{
      confession
    }
  })
  })

export const   updateConfession = catchAsync (async(req:Request , res:Response) =>{
   const confessionId = req.params.id
  const reqBody = req.body
  const confession = await confessionRepo.findOne({where:{id: confessionId}})

  if(!confession){
  throw new customError('there is no confession by this id', 404)
  }
  await confessionRepo.update(confessionId, reqBody)

  res.status(200).json({
   status:'success',
   message:'confession updated'
  })
})