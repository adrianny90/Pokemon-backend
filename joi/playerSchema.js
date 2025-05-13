import Joi from "joi";

const playerSchema = Joi.object({
  name: Joi.string().min(1).max(50).required(),
  scores: Joi.number().max(50),
  wins: Joi.number().max(50),
  losses: Joi.number().max(50),
});

export default playerSchema;
