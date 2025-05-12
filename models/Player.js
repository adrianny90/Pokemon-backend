import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";

const Player = sequelize.define("Player", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  scores: {
    type: DataTypes.NUMBER,
  },
  wins: {
    type: DataTypes.INTEGER,
  },
  losts: {
    type: DataTypes.INTEGER,
  },
});
export default Player;
