import mongoose from "mongoose";
const sheduleSchema = new mongoose.Schema({
    service:{
        type:String,
        required:true,
    },
    
    serviceDetail:{
        type:String,
        required:true,
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
    },
    timeslot:{
        type:String,
        required:true,
    },

},{timestamps: true})
const Shedule = mongoose.model('Shedule',sheduleSchema) 
export default Shedule