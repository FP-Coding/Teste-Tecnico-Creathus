import IMovie from '../Interfaces/IMovie';

class Movie implements IMovie {
  private _id?: string;

  private _author: string;

  private _title: string;

  private _description: string;

  private _image: string;

  constructor(author: string, title: string, description:string, image: string, id?: string) {
    this._author = author;
    this._title = title;
    this._description = description;
    this._image = image;
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

  get image() {
    return this._image;
  }

  public getInfoMovie() {
    return {
      author: this._author,
      title: this._title,
      description: this._description,
      image: this._image,
      id: this._id,
    };
  }
}

export default Movie;
