import { Request, Response } from 'express';

interface IMovieController {
  getAll(req: Request, res: Response): Promise<Response>,
  getById(req: Request, res: Response): Promise<Response>,
  create(req: Request, res: Response): Promise<Response>,
}

export default IMovieController;
