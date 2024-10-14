import express from 'express';
import {Express} from 'express';
import userRoute from './routes/userRoute'

const app: Express = express();

app.use('/api/user', userRoute);

export default app;