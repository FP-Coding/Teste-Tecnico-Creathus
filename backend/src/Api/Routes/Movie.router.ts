import { Request, Response, Router } from 'express';
import MovieODM from '../../Database/Models/MovieODM';
import MovieService from '../Services/Movie.service';
import MovieController from '../Controllers/Movie.controller';

const route = Router();
const modelBase = new MovieODM();
const serviceBase = new MovieService(modelBase);
const controllerBase = new MovieController(serviceBase);

route.get('/:id', (req: Request, res: Response) => controllerBase.getById(req, res));
route.get('/', (req: Request, res: Response) => controllerBase.getAll(req, res));
route.post('/', (req: Request, res: Response) => controllerBase.create(req, res));

export default route;
