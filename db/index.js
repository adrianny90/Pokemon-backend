import { Sequelize } from "sequelize";
const sequelize = new Sequelize(process.env.PG_URI);

try {
  await sequelize.authenticate();
  console.log("Connection to DB was successful");
} catch (error) {
  console.log("Connection to DB failed");
}
export default sequelize;
