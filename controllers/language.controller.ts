import {AppDataSource} from '../data_source';
import {Language} from '../models/languageModel';
import { catchAsync } from '../shared/utils/catchAsync.utils';
import { customError } from '../shared/utils/customError';
import {NextFunction, Request, Response} from 'express';

const languageRepo = AppDataSource.getRepository(Language);

export const create =  catchAsync (async (req: Request, res: Response, next: NextFunction) => {
  const newLang = await languageRepo.save(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        language: newLang,
      },
  });
});

export const getLanguage = catchAsync ( async (req:Request , res:Response) => {
const language = await languageRepo.find()

res.status(200).json({
  status:'success',
  data:{
    language
  }
 })
}

)

export const updateLanguage = catchAsync(async (req:Request , res:Response) => {
const studentId = req.params.id;
const reqBody = req.body;
const language = await languageRepo.findOne({where:{id:studentId}})

if(!language){
  throw new customError('there is no language in this id', 404)
}

await languageRepo.update(studentId, reqBody)

const updatedLanguage = await languageRepo.findOne({where:{id:studentId}})

return res.status(200).json({
  status:'success',
  data:{
    updatedLanguage
  }
})
}
)
