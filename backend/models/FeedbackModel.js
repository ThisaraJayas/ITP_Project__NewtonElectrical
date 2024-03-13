import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
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
    }

},{timestamps: true})
const Feedback = mongoose.model('Feedback',feedbackSchema) 
export default Feedback