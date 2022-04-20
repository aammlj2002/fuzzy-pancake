import express from "express";
import {
    refreshToken,
    signin,
    signup,
    update,
    show,
} from "../controllers/user.js";
const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/refreshtoken", refreshToken);
router.patch("/:username/update", update);
router.get("/:username", show);

export default router;
