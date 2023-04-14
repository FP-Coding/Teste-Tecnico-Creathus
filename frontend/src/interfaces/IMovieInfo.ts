interface ICreateMovieInfo {
  author: string,
  title: string,
  description: string,
  image: string,
}

export interface IMovieInfo extends ICreateMovieInfo {
  id: string,
}

export default ICreateMovieInfo;
