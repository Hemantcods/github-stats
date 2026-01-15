import express from "express";
import { createStats } from "../controllers/stats.controller.js";
const router = express.Router();

router.get("/:username",createStats)

export default router;