import {NextFunction, Request, Response} from 'express';
export const catchAsync =
  (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.all([fn(req, res, next)]).catch(err => {
      next(err);
    });
  };
