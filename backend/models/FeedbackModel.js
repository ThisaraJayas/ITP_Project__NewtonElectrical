import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    userId:{
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
const Feedback = mongoose.model('Feedback',feedbackSchema) 
export default Feedback