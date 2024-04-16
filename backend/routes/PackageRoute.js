import express from 'express'
import { DeletePackage, InsertPackage, ReadOnePackage, ReadPackage, UpdatePackage } from '../controllers/PackageController.js'


const router = express.Router()

router.post('/packages',InsertPackage)
router.post('/packages/:id',UpdatePackage)
router.get('/packages',ReadPackage)
router.get('/packages/:id',ReadOnePackage)
router.delete('/packages/:id',DeletePackage)

export default router
