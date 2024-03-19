// routes/jobRoutes.js

import express from 'express';
import Job from '../models/Job.js';

const router = express.Router();

// Create Job Posting
router.post('/', async (req, res) => {
    try {
        const { title, department, description, location, salary, requirements, postedBy } = req.body;
        const newJob = new Job({ title, department, description, location, salary, requirements, postedBy });
        const savedJob = await newJob.save();
        
        // Custom message sent along with the saved job data
        res.status(201).json({ message: 'Job added successfully', job: savedJob });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read All Job Postings
router.get('/', async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update Job Posting
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, department, description, location, salary, requirements, postedBy } = req.body;  //destructuring
        const updatedJob = await Job.findByIdAndUpdate(id, { title, department, description, location, salary, requirements, postedBy }, { new: true });
        res.json(updatedJob);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Delete Job Posting
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Job.findByIdAndDelete(id);
        res.json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
