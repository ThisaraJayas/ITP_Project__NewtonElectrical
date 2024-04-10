import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    
    status:{
        type:String,
        default:"Ongoing",
    },
    
    description:{
        type:String,
        required:true,
    },
    
    duration:{
        type:String,
        required:true,
    },

    cost:{
        type:String,
    },

},{timestamps: true})
const Project = mongoose.model('Project',projectSchema) 
export default Project