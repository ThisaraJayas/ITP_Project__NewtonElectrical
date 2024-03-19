import express from 'express'
import { DeleteProject, InsertProject, ReadProject, UpdateProject } from '../controllers/ProjectController.js'


const router = express.Router()

router.post('/projects',InsertProject)
router.post('/projects/:id',UpdateProject)
router.get('/projects',ReadProject)
router.delete('/projects/:id',DeleteProject)

export default router
