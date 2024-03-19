// models/Job.js

import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({

    title: { type: String, required: true },
    department: { type: String, required: true },
    description: { type: String, required: true },
    location:{ type: String },
    salary:{ type: String},
    requirements:{ type: String},
    postedBy:{ type: String, required: true },
    postedDate:{ type: Date, default:Date.now },

    // Add other fields as needed for job postings

});

const Job = mongoose.model('Job', jobSchema);

export default Job;