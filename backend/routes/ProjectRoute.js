import express from 'express'
import { InsertProject } from '../controllers/ProjectController.js'

const router = express.Router()

router.post('/projects',InsertProject)

export default router
