import mongoose from 'mongoose';
import 'dotenv/config';

const { MONGO_URL } = process.env;

const MONGO_DB_URL = 'mongodb://localhost:27017/MoviesCreathus';

const connectToDatabase = (
  mongoDatabaseURI = MONGO_URL || MONGO_DB_URL,
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;
