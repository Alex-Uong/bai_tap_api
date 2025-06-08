import express from "express";
import { DataTypes, Sequelize } from "sequelize";
import initModels from "./models/init-models.js";
import likeRoutes from "./routes/likeRoutes.js";
// import rateRoutes from "./routes/rateRoutes.js";
// import orderRoutes from "./routes/orderRoutes.js";

const app = express();

app.use(express.json());

// sequelize
const sequelize = new Sequelize(`mysql://root:1234@localhost:3307/app_food`);

const models = initModels(sequelize);

app.locals.models = models;

app.use("/likes", likeRoutes);
// app.use("/rates", rateRoutes);
// app.use("/orders", orderRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connection has been established successfully.");
    app.listen(3070, () => {
      console.log("🚀 Server is running on http://localhost:3070");
    });
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
};

startServer();
