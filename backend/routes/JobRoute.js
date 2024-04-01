// jobRoute.js

import express from 'express';
import { createJob, getAllJobs, updateJob, deleteJob } from '../controllers/JobController.js';

const router = express.Router();

// Route for creating a job posting
router.post('/', createJob);

// Route for reading all job postings
router.get('/', getAllJobs);

// Route for updating a job posting
router.put('/:id', updateJob);

// Route for deleting a job posting
router.delete('/:id', deleteJob);

export default router;


