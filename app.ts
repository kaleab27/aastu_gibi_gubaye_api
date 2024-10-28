import express, {json} from 'express';
import cors from 'cors';
import {Express} from 'express';
import {deptRouter} from './routes/department.routes';
import {langRouter} from './routes/language.routes';
import {studentRouter} from './routes/student.routes';
import {serviceRouter}  from './routes/service.routes';
import {confessionRouter} from './routes/confession.routes'

const app: Express = express();

app.use(cors());
app.use(json());

app.use('/api/student', studentRouter);
app.use('/api/department', deptRouter);
app.use('/api/language', langRouter);
app.use('/api/service' , serviceRouter);
app.use('/api/confession' , confessionRouter)

export default app;
