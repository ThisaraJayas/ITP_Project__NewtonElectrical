// CVController.js

import CV from '../models/CVModel.js';

// Controller for uploading CV
export const uploadCV = async (req, res) => {
    try {
        const {userId, JobTitle, jobCv } = req.body;
        // const fileUrl = req.file.path; // Assuming multer saves file to 'uploads/' directory
        const newCV = new CV({userId, JobTitle, jobCv});
        const savedCV = await newCV.save();
        res.status(201).json(savedCV);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
