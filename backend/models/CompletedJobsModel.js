// models/CompletedJobsModel.js

import mongoose from 'mongoose';

const completedJobsSchema = new mongoose.Schema({
    
    completedJobsCount: { type: Number, default: 0 }
});

const CompletedJobs = mongoose.model('CompletedJobs', completedJobsSchema);

export default CompletedJobs;