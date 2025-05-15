import Joi from "joi";

const playerSchema = Joi.object({
  name: Joi.string().min(1).max(99999999).required(),
  scores: Joi.number().max(99999999),
  wins: Joi.number().max(99999999),
  losses: Joi.number().max(99999999),
  totalBattles: Joi.number().max(99999999),
  recentBattles: Joi.date().min("2020-01-01"),
  recentOpponent: Joi.string().max(99999999),
  resultRecentBattle: Joi.number().max(99999999),
  scoreChange: Joi.number().max(99999999),
});

export default playerSchema;
