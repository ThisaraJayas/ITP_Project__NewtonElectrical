import express from 'express'
import { DeleteShedule, InsertShedule, ReadShedule, UpdateShedule } from '../controllers/SheduleController.js'


const router = express.Router()

router.post('/shedule',InsertShedule)
router.post('/shedule/:id',UpdateShedule)
router.get('/shedule',ReadShedule)
router.delete('/shedule/:id',DeleteShedule)

export default router