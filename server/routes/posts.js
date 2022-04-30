import express from "express";
import {
    index,
    create,
    update,
    destroy,
    addLike,
} from "../controllers/post.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.get("/", auth, index);
router.post("/create", auth, create);
router.patch("/update/:id", auth, update);
router.delete("/delete/:id", auth, destroy);
router.patch("/like/:id", auth, addLike);
router.get("/:username", auth, index);

export default router;
