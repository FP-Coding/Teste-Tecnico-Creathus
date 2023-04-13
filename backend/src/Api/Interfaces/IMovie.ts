export interface INewMovie {
  author: string,
  title: string,
  description: string,
  image: string
}

interface IMovie extends INewMovie {
  id?: string,
}

export default IMovie;
