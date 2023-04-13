import Joi from 'joi';

const movieFieldsSchema = Joi.object({
  title: Joi.string().min(2).required().label('Title'),
  author: Joi.string().min(2).required().label('Author'),
  image: Joi.string().required().label('Image'),
  description: Joi.string().min(20).required().label('Description'),
});

export default movieFieldsSchema;
