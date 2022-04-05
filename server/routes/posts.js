import express from "express";
import { index, create, update } from "../controllers/post.js";
const router = express.Router();

router.get("/", index);
router.post("/create", create);
router.patch("/update/:id", update);

export default router;
