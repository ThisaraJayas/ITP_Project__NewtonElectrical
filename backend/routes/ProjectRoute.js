import express from 'express'

import {createProject,getAllProjects,getProject,updateProject,deleteProject} from '../controllers/ProjectController.js';

const router = express.Router();
router.post('/projects', createProject);
router.get('/projectsGet', getAllProjects);
router.get('/projects/:id', getProject);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);

export default router;
