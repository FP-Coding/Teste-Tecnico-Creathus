import axios from 'axios';
import IMovieInfo from '../interfaces/IMovieInfo';

const PORT = import.meta.env.REACT_APP_BACKEND_PORT || 3001;
const HOST = import.meta.env.REACT_APP_BACKEND_HOST || 'localhost';
const api = axios.create({ baseURL: `http://${HOST}:${PORT}` });

export const postRequest = async (endpoint: string, body: IMovieInfo) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const getRequest = async (endpoint: string) => {
  const { data } = await api.get(endpoint);
  return data;
};

export default api;
