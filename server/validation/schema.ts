import Joi, { Schema } from "joi";

const schema: Schema = Joi.object({
  name: Joi.string()
    .pattern(new RegExp(/^(([a-z]+)\s([a-z]+))$/))
    .required(),
  company: Joi.string()
    .pattern(new RegExp(/^([a-z]+)\.([a-z]{1,3})$/))
    .required(),
});

export default schema;
