import 'reflect-metadata'
import { AppDataSource } from '../data_source';
import { Confession } from '../models/confessionModel';
import { Request , Response } from "express";

const confessionRepo = AppDataSource.getRepository(Confession)

export async function createConfession(req: Request , res:Response) {
   try{
     const reqBody = req.body;
     const newConfession = await confessionRepo.save(reqBody)
  res.status(201).json({
    status:'success',
    data:{
        newConfession
    }
  })
   } catch(err:any){
    throw new Error(err.message)
   }
}

export async function getAllConfession(req: Request , res:Response) {
   try{
   const confession = await confessionRepo.find()
   
   res.status(200).json({
      status:'success',
      data:{
         confession
      }
   })

   }catch(err:any){
     res.status(404).json({
      status:'fail',
      message:err.message
     })
   }
}

export async function getConfession(req: Request, res: Response) {
   try{
    const confessionId = req.params.id
    
    const confession = await confessionRepo.findOne({where: {id : confessionId}})
   
    if(!confession){
      res.status(404).json({
        status:'fail',
        message:'there is no user in this id'
      })
    }
  
    res.status(200).json({
    status:'success',
    data:{
      confession
    }
  })
   }catch(err:any){
     throw new Error('error occured')
   }
  }

export async function updateConfession(req:Request , res:Response){
 try{ const confessionId = req.params.id
  const reqBody = req.body
  const confession = await confessionRepo.findOne({where:{id: confessionId}})

  if(!confession){
   res.status(404).json({
      status:'fail',
      message:'there is no confession by this id'
   })
  }
  await confessionRepo.update(confessionId, reqBody)

  res.status(200).json({
   status:'success',
   message:'confession updated'
  })
}catch(err:any){
   res.status(404).json({
      status:'fail',
      message:err.message
   })
}
}