import express from "express";
import { refreshToken, signin, signup, update } from "../controllers/user.js";
const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/refreshtoken", refreshToken);
router.patch("/:id/update", update);

export default router;
