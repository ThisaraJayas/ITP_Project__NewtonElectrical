import express from 'express'
import { DeleteProject, ReadProject, ReadProjectById, UpdateProject } from '../controllers/ProjectController.js'
import multer from 'multer';
import Project from "../models/ProjectModel.js"


const router = express.Router()

//router.post('/projects',InsertProject)
router.post('/projects/:id',UpdateProject)
router.get('/projects',ReadProject)
router.delete('/projects/:id',DeleteProject)
router.get('/projects/:id',ReadProjectById)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../frontend/public/uploads/");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix + file.originalname);
    },
  });

  const upload = multer({ storage: storage });

router.post('/projects', upload.single('image'), async (req, res) => {
    const imageName = req.file.filename;
    const{title, status, description, duration, cost, image} = req.body
    const newProject = new Project({title, status, description, duration, cost, image})

    try {
        const savedProject = await newProject.save()
        res.json(savedProject)
    } catch (error) {
        res.json({message:error})
    }
})


export default router










