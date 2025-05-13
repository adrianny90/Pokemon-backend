import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";

const Player = sequelize.define("Player", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  scores: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  wins: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  losses: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});
Player.sync();
export default Player;
