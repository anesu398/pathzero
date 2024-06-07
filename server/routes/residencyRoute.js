import express from "express";
import { createResidency, getAllResidencies, getResidency } from "../controllers/resdCntrl.js";
import jwtMiddleware from "../config/jwtMiddleware.js";

const router = express.Router();

router.post("/create", jwtMiddleware, createResidency);
router.get("/allresd", getAllResidencies);
router.get("/:id", getResidency);

export { router as residencyRoute };
