import express from "express";
import { DataTypes, Sequelize } from "sequelize";
import initModels from "./models/init-models.js";

// sequelize
const sequelize = new Sequelize(`mysql://root:1234@localhost:3307/app_food`);

const models = initModels(sequelize);

const app = express();

app.use(express.json());



try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.listen(3070, () => {
  console.log("server start");
});
