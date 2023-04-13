import { Request, Response } from 'express';
import IMovieController from '../Interfaces/IMovieController';
import IMovieService from '../Interfaces/IMovieService';
import Movie from '../Domain/Movie';
import IMovie from '../Interfaces/IMovie';

class MovieController implements IMovieController {
  private _service: IMovieService;

  constructor(service: IMovieService) {
    this._service = service;
  }

  async getAll(_req: Request, res: Response): Promise<Response> {
    const movies = await this._service.getAll();
    return res.status(200).json(movies);
  }

  async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const movie = await this._service.getById(id);
    return res.status(200).json(movie);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const infoMovie = req.body as IMovie;
    const formatedInfoMovie = new Movie(
      infoMovie.author,
      infoMovie.title,
      infoMovie.description,
      infoMovie.image,
    ).getInfoMovie();
    const movie = await this._service.create(formatedInfoMovie);
    return res.status(201).json(movie);
  }
}

export default MovieController;
