import express from 'express';
import {Express} from 'express';
import {SayHi} from './controllers/myControl';
import dummyRouter from './routes/dummyRoute';

const app: Express = express();

app.use('/', dummyRouter);

app.listen(3000, () => {
  console.log('Server is runnng');
});
