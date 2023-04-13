import { isValidObjectId } from 'mongoose';
import MovieODM from '../../Database/Models/MovieODM';
import IMovie from '../Interfaces/IMovie';
import IMovieService from '../Interfaces/IMovieService';
import Movie from '../Domain/Movie';
import GenericError from '../Errors/GenericError';

class MovieService implements IMovieService {
  private _model: MovieODM;

  constructor(model: MovieODM) {
    this._model = model;
  }

  async getAll(): Promise<IMovie[]> {
    const movies = await this._model.getAll();
    const formatedMovies = movies.map((m) => new Movie(m.author, m.title, m.description, m.id));
    return formatedMovies;
  }

  async getById(id: string): Promise<IMovie | null> {
    if (!isValidObjectId(id)) throw new GenericError(404, 'Invalid id');
    const movie = await this._model.getById(id);
    if (!movie) throw new GenericError(404, 'Movie not found');
    return new Movie(movie.author, movie.title, movie.description, movie.id);
  }
}

export default MovieService;
