import { log } from 'console';
import GenericError from '../../Errors/GenericError';
import { INewMovie } from '../../Interfaces/IMovie';
import movieFieldsSchema from './schemas';

const validationMovieFields = (movieInfo: INewMovie) => {
  const { error } = movieFieldsSchema.validate(movieInfo);
  if (error) throw new GenericError(422, error.message);
  return null;
};

export default validationMovieFields;
