import { isValidObjectId } from 'mongoose';
import MovieODM from '../../Database/Models/MovieODM';
import IMovie, { INewMovie } from '../Interfaces/IMovie';
import IMovieService from '../Interfaces/IMovieService';
import Movie from '../Domain/Movie';
import GenericError from '../Errors/GenericError';
import validationMovieFields from './validators/ValidationFields';

class MovieService implements IMovieService {
  private _model: MovieODM;

  constructor(model: MovieODM) {
    this._model = model;
  }

  async getAll(): Promise<IMovie[]> {
    const movies = await this._model.getAll();

    const formatedMovies = movies
      .map((m: IMovie) => new Movie(
        m.author,
        m.title,
        m.description,
        m.image,
        m.id,
      ).getInfoMovie());
    return formatedMovies;
  }

  async getById(id: string): Promise<IMovie | null> {
    if (!isValidObjectId(id)) throw new GenericError(422, 'Invalid id');
    const movie = await this._model.getById(id);
    if (!movie) throw new GenericError(404, 'Movie not found');
    return new Movie(
      movie.author,
      movie.title,
      movie.description,
      movie.image,
      movie.id,
    ).getInfoMovie();
  }

  async getByTitle(title: string): Promise<IMovie | null> {
    return this._model.findByTitle(title);
  }

  async create(newMovieInfo: INewMovie): Promise<IMovie> {
    validationMovieFields(newMovieInfo);
    const isAlredyExist = await this.getByTitle(newMovieInfo.title);
    if (isAlredyExist) throw new GenericError(409, 'This film is already registered');
    const createdMovie = await this._model.create(newMovieInfo);
    const formatedCreatedMovie = new Movie(
      createdMovie.author,
      createdMovie.title,
      createdMovie.description,
      createdMovie.image,
      createdMovie.id,
    ).getInfoMovie();
    return formatedCreatedMovie;
  }
}

export default MovieService;
