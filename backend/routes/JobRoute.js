// jobRoute.js

import express from 'express';
import { createJob, getAllJobs, updateJob, deleteJob } from '../controllers/JobController.js';

const router = express.Router();

// Route for creating a job posting
router.post('/add', createJob);

// Route for reading all job postings
router.get('/read', getAllJobs);

// Route for updating a job posting
router.put('/edit/:id', updateJob);

// Route for deleting a job posting
router.delete('/delete/:id', deleteJob);

export default router;


