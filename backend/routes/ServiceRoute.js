import express from 'express'
import { DeleteService, InsertService, ReadService, UpdateService} from '../controllers/ServiceController.js'


const router = express.Router()

router.post('/services',InsertService)
router.post('/services/:id',UpdateService)
router.get('/services',ReadService)
router.delete('/services/:id',DeleteService)

export default router
