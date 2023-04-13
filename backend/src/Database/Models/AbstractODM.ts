import {
  model,
  Model,
  models,
  Schema,
} from 'mongoose';

abstract class GenericModel<T> {
  protected model: Model<T>;

  protected schema: Schema<T>;

  protected modelName: string;

  constructor(schema: Schema<T>, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create(obj);
  }

  public async getById(id: string): Promise<T | null> {
    return this.model.findById(id);
  }

  public async getAll(page = 0): Promise<T[]> {
    const itemsPorPage = 16;
    return this.model.find().limit(itemsPorPage).skip(itemsPorPage * page);
  }
}

export default GenericModel;
