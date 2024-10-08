import express from "express";
import { GoogleRegister, forgotPassword, logOut, login, passwordReset, register, test } from "../controllers/AuthController.js";

const router = express.Router()

router.get('/test',test)
router.post('/register', register)
router.post('/googleregister',GoogleRegister)
router.post('/login', login)
router.post('/forgotpassword', forgotPassword)
router.post('/resetPassword/:id/:token', passwordReset)
router.post('/logout',logOut)

export default router