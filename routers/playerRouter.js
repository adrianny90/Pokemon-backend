import { Router } from "express";
import {
  getPlayerScores,
  createPlayerScore,
} from "../controller/crudOperations";
import { validateSchema } from "../middleware/validateSchema";
import playerSchema from "../joi/playerSchema";

const playerRouter = Router();

playerRouter
  .route("/")
  .get(getPlayerScores)
  .post(validateSchema(playerSchema), createPlayerScore);

export default playerRouter;
