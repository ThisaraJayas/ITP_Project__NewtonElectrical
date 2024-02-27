import express from "express";
import { register, test } from "../controllers/UserController.js";

const router = express.Router()

router.get('/test',test)
router.post('/register', register)

export default router