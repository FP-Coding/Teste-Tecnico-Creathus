import axios from 'axios';
import IMovieInfo from '../interfaces/IMovieInfo';

const HOST = import.meta.env.REACT_APP_BACKEND_HOST || 'localhost:3001';
const PROTOCOL = import.meta.env.REACT_APP_PROTOCOL || 'http';
const api = axios.create({ baseURL: `${PROTOCOL}://${HOST}` });

export const postRequest = async (endpoint: string, body: IMovieInfo) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const getRequest = async (endpoint: string) => {
  const { data } = await api.get(endpoint);
  return data;
};

export default api;
