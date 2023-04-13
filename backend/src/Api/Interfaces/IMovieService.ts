import IMovie from './IMovie';

interface IMovieService {
  getAll(): Promise<IMovie[]>,
  getById(id: string): Promise<IMovie | null>
}

export default IMovieService;
