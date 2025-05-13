import Joi from "joi";

const playerSchema = Joi.object({
  name: Joi.string().min(1).max(99999999).required(),
  scores: Joi.number().max(99999999),
  wins: Joi.number().max(99999999),
  losses: Joi.number().max(99999999),
});

export default playerSchema;
