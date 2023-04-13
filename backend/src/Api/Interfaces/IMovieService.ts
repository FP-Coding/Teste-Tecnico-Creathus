import IMovie, { INewMovie } from './IMovie';

interface IMovieService {
  getAll(): Promise<IMovie[]>,
  getById(id: string): Promise<IMovie | null>
  create(newMovieInfo: INewMovie): Promise<IMovie>
}

export default IMovieService;
