// routes/CVRoutes.js

import express from 'express';

import { uploadCV,getAllCVs, updateCVStatus } from '../controllers/CVController.js';

const router = express.Router();


// Route for uploading CV
router.post('/upload', uploadCV);

router.get('/', getAllCVs);

router.put('/:id', updateCVStatus);

export default router;
