// routes/cvRoutes.js

import express from 'express';
import multer from 'multer';
import CV from '../models/CV.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Upload CV
router.post('/upload', upload.single('cv'), async (req, res) => {
    try {
        const { employeeId, jobId } = req.body;
        const fileUrl = req.file.path; // Assuming multer saves file to 'uploads/' directory
        const newCV = new CV({ employeeId, jobId, fileUrl });
        const savedCV = await newCV.save();
        res.status(201).json(savedCV);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
