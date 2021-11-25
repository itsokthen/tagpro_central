import express from "express";
import { getPlayers, createPlayers } from "../controllers/players.js";
import players from "../models/players.js";

const router = express.Router();

router.get("/", getPlayers);
router.post("/", createPlayers);

export default router;
