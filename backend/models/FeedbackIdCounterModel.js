import mongoose from "mongoose"

const counterSchema = new mongoose.Schema({
    count:{
        type: Number,
        default: 0
    }
})

const FeedbackIdCounter = mongoose.model('feedbackIdCounter', counterSchema)
export default FeedbackIdCounter