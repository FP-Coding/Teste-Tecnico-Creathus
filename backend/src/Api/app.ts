import express, { Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import MovieRouter from './Routes/Movie.router';
import ErrorHandler from './Middlewares/HandleError';

const app = express();

app.use(express.json());

app.use(cors());

app.use('/movies', MovieRouter);

app.get('/', (_req: Request, res: Response) => res.status(200).json({ message: 'ok' }));

app.use(ErrorHandler.handle);

export default app;
