import express from 'express'
import { DeleteUser, getDailyUserCount, getPastWeekUserCount, getTotalUserCount, retriveUser, retriveUsers, updateUser } from '../controllers/UserController.js'

const router = express.Router()

router.get('/users',retriveUsers)
router.get('/user/:id',retriveUser)
router.put('/user/:id',updateUser)
router.delete('/user/:id',DeleteUser)
router.get('/user-count',getTotalUserCount)
router.get('/weekly-user-count', getPastWeekUserCount);
router.get('/daily-user-count',getDailyUserCount)

export default router