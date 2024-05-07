import express from 'express';
import { getCompletedJobsCount, incrementCompletedJobs } from '../controllers/CompletedJobsController.js';

const router = express.Router();

// Route for getting the completed jobs count
router.get('/count', getCompletedJobsCount);

// Route for updating the completed jobs count
router.put('/increment', incrementCompletedJobs);

export default router;