import express from "express";
import {
  likeRestaurant,
  unlikeRestaurant,
  getLikesByUser,
  getLikesByRestaurant,
} from "../controllers/likeController.js";

const router = express.Router();

router.post("/", (req, res) => likeRestaurant(req, res, req.app.locals.models));
router.delete("/", (req, res) =>
  unlikeRestaurant(req, res, req.app.locals.models)
);
router.get("/user/:userId", (req, res) =>
  getLikesByUser(req, res, req.app.locals.models)
);
router.get("/restaurant/:resId", (req, res) =>
  getLikesByRestaurant(req, res, req.app.locals.models)
);

export default router;
