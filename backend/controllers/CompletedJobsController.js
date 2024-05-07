// CompletedJobsController.js

import CompletedJobs from '../models/CompletedJobsModel.js';

// Controller for getting the completed jobs count
export const getCompletedJobsCount = async (req, res) => {
    try {
        const countData = await CompletedJobs.findOne();
        if (!countData) {
            // If count data doesn't exist, create it with initial count 0
            const newCountData = new CompletedJobs(0);
            await newCountData.save();
            res.status(200).json({ completedJobsCount: 0 });
        } else {
            res.status(200).json({ completedJobsCount: countData.completedJobsCount });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller for updating the completed jobs count
export const incrementCompletedJobs = async (req, res) => {
    try {
        const { count } = req.body;
        const updatedCount = parseInt(count); // Parse count to integer
        await CompletedJobs.updateOne({}, { $inc: { completedJobsCount: updatedCount } }, { upsert: true });
        res.status(200).json({ message: 'Completed jobs count updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};