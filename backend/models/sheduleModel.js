import mongoose from "mongoose";
const projectSchema = new mongoose.Schema({
    service:{
        type:String,
        required:true,
    },
    
    serviceDetail:{
        type:String,
        default:true,
    },
    
    description:{
        type:String,
        required:true,
    },
    
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    province:{
        type:String,
        required:true,
    },

    zipcode:{
        type:String,
    },
    date:{
        type:String,
        required:true,
    },
    timeslot:{
        type:String,
        required:true,
    },

},{timestamps: true})
const Shedule = mongoose.model('Shedule',sheduleSchema) 
export default Shedule