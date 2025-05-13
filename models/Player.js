import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";

const Player = sequelize.define("Player", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  scores: {
    type: DataTypes.INTEGER,
  },
  wins: {
    type: DataTypes.INTEGER,
  },
  losses: {
    type: DataTypes.INTEGER,
  },
});
Player.sync();
export default Player;
