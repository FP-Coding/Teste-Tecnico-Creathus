import app from './app';
import connectToDatabase from '../Database/connection';

const PORT = process.env.API_PORT || 3001;

connectToDatabase().then(() => {
  app.listen(PORT, () => console.log(`running on port ${PORT}`));
});
