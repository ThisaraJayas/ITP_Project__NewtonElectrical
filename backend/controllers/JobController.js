// JobController.js

import Job from '../models/JobModel.js';

// Controller for creating a job posting
export const createJob = async (req, res) => {
    try {
        const { title, department, description, location, salary, requirements, postedBy } = req.body;
        const newJob = new Job({ title, department, description, location, salary, requirements, postedBy });
        const savedJob = await newJob.save();
        res.status(201).json({ message: 'Job added successfully', job: savedJob });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller for reading all job postings
export const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
//get single job
export const getAJob = async (req, res) => {
    const {id}= req.params

    try {
        const jobs = await Job.findOne({_id:id});
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller for updating a job posting
export const updateJob = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, department, description, location, salary, requirements, postedBy } = req.body; //destructuring
        const updatedJob = await Job.findByIdAndUpdate(id, { title, department, description, location, salary, requirements, postedBy }, { new: true });
        res.json(updatedJob);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller for deleting a job posting
export const deleteJob = async (req, res) => {
    try {
        const { id } = req.params;
        await Job.findByIdAndDelete(id);
        res.json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


