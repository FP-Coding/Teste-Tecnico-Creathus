import IMovie, { INewMovie } from './IMovie';

interface IMovieService {
  getAll(page: number): Promise<IMovie[]>,
  getById(id: string): Promise<IMovie | null>
  create(newMovieInfo: INewMovie): Promise<IMovie>
}

export default IMovieService;
