import IError from '../Interfaces/IError';

class GenericError extends Error implements IError {
  readonly type: number;

  constructor(type: number, message: string) {
    super(message);
    this.type = type;
  }
}

export default GenericError;
