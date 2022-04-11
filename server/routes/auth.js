import express from "express";
import { refreshToken, signin, signup } from "../controllers/user.js";
const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/refreshtoken", refreshToken);

export default router;
