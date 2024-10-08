// CVController.js

import CV from '../models/CVModel.js';

// Controller for uploading CV
export const uploadCV = async (req, res) => {
    try {
        const { userId, JobTitle, jobCv } = req.body;

        // Check if the user already uploaded a CV for this job
        const existingCV = await CV.findOne({ userId, JobTitle });
        if (existingCV) {
            return res.status(400).json({ error: "You have already uploaded a CV for this job" });
        }

        const newCV = new CV({ userId, JobTitle, jobCv });
        const savedCV = await newCV.save();
        res.status(201).json(savedCV);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all CVs
export const getAllCVs = async (req, res) => {
    try {
        const cvs = await CV.find();
        res.status(200).json(cvs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update CV status
export const updateCVStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const updatedCV = await CV.findByIdAndUpdate(id, { status }, { new: true });

        // Ensure the CV exists
        if (!updatedCV) {
            return res.status(404).json({ error: "CV not found" });
        }

        res.status(200).json(updatedCV);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Check if user has already uploaded a CV for a specific job
export const checkUploadedCV = async (req, res) => {
    try {
        const { userId, JobTitle } = req.params;

        const existingCV = await CV.findOne({ userId, JobTitle });
        if (existingCV) {
            return res.status(200).json({ exists: true });
        } else {
            return res.status(200).json({ exists: false });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};