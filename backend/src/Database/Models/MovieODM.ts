import { Schema } from 'mongoose';
import AbstractODM from './AbstractODM';
import IMovie from '../../Api/Interfaces/IMovie';

class MovieODM extends AbstractODM<IMovie> {
  constructor() {
    const schema = new Schema<IMovie>({
      author: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      image: { type: String, required: true },
    }, {
      versionKey: false,
    });
    super(schema, 'Movie');
  }
}

export default MovieODM;
