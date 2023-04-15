interface ICreateMovieInfo {
  author: string,
  title: string,
  description: string,
  image: string,
}

export interface IMovieId {
  id: string,
}

export interface IMovieInfo extends ICreateMovieInfo, IMovieId {}

export default ICreateMovieInfo;
