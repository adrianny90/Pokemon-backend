import Player from "../models/Player.js";
import ErrorResponse from "../utils/ErrorResponse.js";

export const createPlayerScore = async (req, res) => {
  const { name } = req.body;
  const foundPlayer = await Player.findOne({ where: { name } });
  if (foundPlayer)
    throw new ErrorResponse("Player with that name already exists", 400);
  const player = await Player.create(req.body);
  res.json(player);
};

export const getPlayerScores = async (req, res) => {
  const players = await Player.findAll();
  res.json(players);
};

export const editPlayerScore = async (req, res) => {
  const { name } = req.body;
  const foundPlayer = await Player.findOne({ where: { name } });
  if (!foundPlayer) throw new ErrorResponse("Player does not exist", 400);
  await foundPlayer.update(req.body);
  res.json(foundPlayer);
};
