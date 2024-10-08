import express from 'express';
import {Express} from 'express';
import {SayHi} from './controllers/myControl';
import dummyRouter from './routes/dummyRoute';
import {AppDataSource} from './data_source';

const connection = AppDataSource.initialize()
  .then(() => {
    const app: Express = express();

    app.use('/', dummyRouter);

    // this is a comment

    app.listen(3000, () => {
      console.log('Server is runnng');
    });
  })
  .catch(err => {
    console.log(err);
  });
