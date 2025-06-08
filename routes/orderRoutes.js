import express from "express";
import { createOrder } from "../controllers/orderController.js";

const router = express.Router();

router.post("/", (req, res) => createOrder(req, res, req.app.locals.models));

export default router;
