import express from 'express'
import { DeleteUser, getDailyUserCount, getMontlyUserCount, getPastWeekUserCount, getTotalUserCount, retriveUser, retriveUsers, updateUser } from '../controllers/UserController.js'

const router = express.Router()

router.get('/users',retriveUsers)
router.get('/user/:id',retriveUser)
router.put('/user/:id',updateUser)
router.delete('/user/:id',DeleteUser)
router.get('/user-count',getTotalUserCount)
router.get('/weekly-user-count', getPastWeekUserCount);
router.get('/daily-user-count',getDailyUserCount)
router.get('/monthly-user-count',getMontlyUserCount)

export default router