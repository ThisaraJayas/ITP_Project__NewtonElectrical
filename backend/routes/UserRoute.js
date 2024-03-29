import express from 'express'
import { DeleteUser, retriveUser, retriveUsers, updateUser } from '../controllers/UserController.js'

const router = express.Router()

router.get('/users',retriveUsers)
router.get('/user/:id',retriveUser)
router.put('/user/:id',updateUser)
router.delete('/user/:id',DeleteUser)

export default router