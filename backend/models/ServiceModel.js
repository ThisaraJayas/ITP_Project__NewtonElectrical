import mongoose from "mongoose"

const serviceSchema = new mongoose.Schema({
    
    packageId:{
        type:String,
        required:true,
        
    },
    serviceName:{
        type:String,
        required:true,
        
    },
    
    price:{
        type:Number,
        required:true,
        
    }
    
},{timestamps: true})
const Service = mongoose.model('Service',serviceSchema) //this becomes users in DB
export default Service