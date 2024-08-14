import express from "express"
import { signup,signin, google_auth } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post('/google_auth', google_auth);


export default router;