import mongoose from "mongoose";
import Counter from "./FeedbackIdCounterModel.js"


const feedbackSchema = new mongoose.Schema({
    userId:{
        type:Number,
    },
    feedbackId:{
        type:Number,
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        required:false
    },
    feedback:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
    }

},{timestamps: true})
feedbackSchema.pre('save', async function(next){
    if(!this.isNew) return next()
    try{
        const feedbackIdCount = await Counter.findOneAndUpdate({},{$inc: {count:1}},{new:true, upsert:true})
        this.feedbackId=feedbackIdCount.count
        next()
    }catch(error){
        next(error)
    }
})
const Feedback = mongoose.model('Feedback',feedbackSchema) 
export default Feedback