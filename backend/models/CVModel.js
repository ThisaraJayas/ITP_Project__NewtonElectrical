// models/CVModel.js

import mongoose from 'mongoose';

const cvSchema = new mongoose.Schema({

    userId: { type: String,  required: true },
    JobTitle: { type: String, required: true },
    jobCv: { type: String, required: true },
    // uploadedAt: { type: Date, default: Date.now },
    status: { type: String, enum: ['pending', 'reviewed', 'accepted', 'rejected'], default: 'pending' },
    
});

const CV = mongoose.model('CV', cvSchema);

export default CV;