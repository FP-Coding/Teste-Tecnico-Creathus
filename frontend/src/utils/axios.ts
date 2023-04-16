import axios from 'axios';
import IMovieInfo from '../interfaces/IMovieInfo';

const HOST = import.meta.env.VITE_REACT_APP_BACKEND_HOST || 'http';
const PROTOCOL = import.meta.env.VITE_REACT_APP_PROTOCOL || 'localhost:3001';

const baseURL = `${PROTOCOL}://${HOST}`;
const api = axios.create({ baseURL });

export const postRequest = async (endpoint: string, body: IMovieInfo) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const getRequest = async (endpoint: string) => {
  const { data } = await api.get(endpoint);
  return data;
};

export default api;
