import express from "express";
import {
  rateRestaurant,
  getRatesByUser,
  getRatesByRestaurant,
} from "../controllers/rateController.js";

const router = express.Router();

router.post("/", (req, res) => rateRestaurant(req, res, req.app.locals.models));
router.get("/user/:userId", (req, res) =>
  getRatesByUser(req, res, req.app.locals.models)
);
router.get("/restaurant/:resId", (req, res) =>
  getRatesByRestaurant(req, res, req.app.locals.models)
);

export default router;
