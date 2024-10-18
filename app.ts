import express, {json} from 'express';
import {Express} from 'express';
import {deptRouter} from './routes/department.routes';
import {langRouter} from './routes/language.routes';
import {studentRouter} from './routes/student.routes';

const app: Express = express();

app.use(json());

app.use('/api/user', studentRouter);
app.use('/api/department', deptRouter);
app.use('/api/language', langRouter);

export default app;
