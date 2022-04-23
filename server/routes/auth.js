import express from "express";
import {
    refreshToken,
    signin,
    signup,
    update,
    getUser,
} from "../controllers/user.js";
const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/refreshtoken", refreshToken);
router.patch("/:username/update", update);
router.get("/:id", getUser);

export default router;
