import express from "express";
import { index, create, update, destroy } from "../controllers/post.js";
const router = express.Router();

router.get("/", index);
router.post("/create", create);
router.patch("/update/:id", update);
router.delete("/delete/:id", destroy);

export default router;
