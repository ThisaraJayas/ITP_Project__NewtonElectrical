import express from 'express'
import { DeleteUser, getPastWeekUserCount, getTotalUserCount, retriveUser, retriveUsers, updateUser } from '../controllers/UserController.js'

const router = express.Router()

router.get('/users',retriveUsers)
router.get('/user/:id',retriveUser)
router.put('/user/:id',updateUser)
router.delete('/user/:id',DeleteUser)
router.get('/user-count',getTotalUserCount)
router.get('/weeklyregistrations', getPastWeekUserCount);

export default router