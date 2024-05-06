// routes/CVRoutes.js

import express from 'express';

import { uploadCV } from '../controllers/CVController.js';

const router = express.Router();


// Route for uploading CV
router.post('/upload', uploadCV);

export default router;
