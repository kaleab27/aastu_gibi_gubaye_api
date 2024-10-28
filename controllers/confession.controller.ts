import 'reflect-metadata'
import { AppDataSource } from '../data_source';
import { Confession } from '../models/confessionModel';
import { Request , Response } from "express";



const confessionRepo = AppDataSource.getRepository(Confession)

const createConfession = async function (req: Request , res:Response) {
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


 export const confessionController = {
    createConfession
}