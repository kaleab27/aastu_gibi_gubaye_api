import {AppDataSource} from '../data_source';
import {Language} from '../models/languageModel';
import {NextFunction, Request, Response} from 'express';

const languageRepo = AppDataSource.getRepository(Language);

const create = async (req: Request, res: Response, next: NextFunction) => {
  const newLang = await languageRepo.save(req.body);

  if (newLang) {
    res.status(201).json({
      status: 'success',
      data: {
        language: newLang,
      },
    });
  } else {
    next('Language not added');
  }
};

export const languageControllers = {
  create,
};
