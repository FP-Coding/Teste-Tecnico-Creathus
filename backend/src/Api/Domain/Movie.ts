import IMovie from '../Interfaces/IMovie';

class Movie implements IMovie {
  private _id?: string;

  private _author: string;

  private _title: string;

  private _description: string;

  constructor(author: string, title: string, description:string, id?: string) {
    this._author = author;
    this._title = title;
    this._description = description;
    this._id = id;
  }

  get id() {
    return this._id;
  }

  get author() {
    return this._author;
  }

  get title() {
    return this._title;
  }

  get description() {
    return this._description;
  }
}

export default Movie;
