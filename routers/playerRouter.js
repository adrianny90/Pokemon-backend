import { Router } from "express";
import {
  getPlayerScores,
  createPlayerScore,
  editPlayerScore,
} from "../controller/crudOperations.js";
import { validateSchema } from "../middleware/validateSchema.js";
import playerSchema from "../joi/playerSchema.js";

const playerRouter = Router();

playerRouter
  .route("/")
  .get(getPlayerScores)
  .post(validateSchema(playerSchema), createPlayerScore)
  .put(validateSchema(playerSchema), editPlayerScore);

export default playerRouter;
