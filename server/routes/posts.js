import express from "express";
import { index, create } from "../controllers/post.js";
const router = express.Router();

router.get("/", index);
router.post("/create", create);

export default router;
