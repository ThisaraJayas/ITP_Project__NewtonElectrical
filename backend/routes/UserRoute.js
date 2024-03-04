import express from 'express'
import { retriveUser, retriveUsers, updateUser } from '../controllers/UserController.js'

const router = express.Router()

router.get('/users',retriveUsers)
router.get('/user/:id',retriveUser)
router.post('/user/:id',updateUser)

export default router