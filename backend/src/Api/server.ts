/* eslint-disable no-console */
import 'dotenv/config';
import app from './app';
import connectToDatabase from '../Database/connection';

const PORT = process.env.PORT || 3001;

connectToDatabase().then(() => {
  app.listen(PORT, () => console.log(`running on port ${PORT}`));
});
