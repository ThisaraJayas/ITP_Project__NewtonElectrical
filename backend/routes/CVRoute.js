// routes/CVRoutes.js

import express from 'express';
import multer from 'multer';
import { uploadCV } from '../controllers/CVController.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Route for uploading CV
router.post('/upload', upload.single('cv'), uploadCV);

export default router;
