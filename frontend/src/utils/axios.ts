import axios from 'axios';
import IMovieInfo from '../interfaces/IMovieInfo';

const HOST = import.meta.env.REACT_APP_BACKEND_HOST;
const PROTOCOL = import.meta.env.REACT_APP_PROTOCOL;

const apiRailway = 'https://tiresome-agreement-production.up.railway.app';
const baseURL = HOST && PROTOCOL ? `${PROTOCOL}://${HOST}` : apiRailway;
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
