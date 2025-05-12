import Player from "../models/Player";
import ErrorResponse from "../utils/ErrorResponse";

export const createPlayerScore = async (req, res) => {
  const found = await Player.findOne({ where: { name } });
  if (found)
    throw new ErrorResponse("Player with that name already exists", 400);
  const player = await Player.create(req.body);
  res.json(player);
};

export const getPlayerScores = async (req, res) => {
  const players = await Player.findAll();
  res.json(players);
};
