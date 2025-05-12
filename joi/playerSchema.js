import Joi from "joi";

const playerSchema = Joi.object({
  name: Joi.string().min(1).max(50).required(),
}).required();

export default playerSchema;
