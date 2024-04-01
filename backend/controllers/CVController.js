// CVController.js

import CV from '../models/CVModel.js';

// Controller for uploading CV
export const uploadCV = async (req, res) => {
    try {
        const { employeeId, jobId } = req.body;
        const fileUrl = req.file.path; // Assuming multer saves file to 'uploads/' directory
        const newCV = new CV({ employeeId, jobId, fileUrl });
        const savedCV = await newCV.save();
        res.status(201).json(savedCV);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
