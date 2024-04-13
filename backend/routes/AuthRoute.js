import express from "express";
import { forgotPassword, login, passwordReset, register, test } from "../controllers/AuthController.js";

const router = express.Router()

router.get('/test',test)
router.post('/register', register)
router.post('/login', login)
router.post('/forgotpassword', forgotPassword)
router.post('/resetPassword/:id/:token', passwordReset)

export default router