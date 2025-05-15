import express from "express";
import playerRouter from "./routers/playerRouter.js";
import errorHandler from "./middleware/errorHandler.js";
import cors from "cors";
const port = 3000;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/leaderboard", playerRouter);
app.use("/*splat", (req, res) => res.status(404).json({ error: "Not found" }));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
