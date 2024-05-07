// routes/CVRoutes.js

import express from 'express';

import { uploadCV,getAllCVs, updateCVStatus,checkUploadedCV  } from '../controllers/CVController.js';

const router = express.Router();


// Route for uploading CV
router.post('/upload', uploadCV);

router.get('/getcvs', getAllCVs);

router.put('/:id', updateCVStatus);

router.get('/user/:userId/job/:JobTitle', checkUploadedCV); // Add this route

export default router;
