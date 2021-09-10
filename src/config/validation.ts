import * as Joi from 'joi';

export const validationSchema = Joi.object({
  PORT: Joi.number().integer().min(1).max(65535).default(3000),
});
