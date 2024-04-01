import mongoose from "mongoose"

const serviceSchema = new mongoose.Schema({
    
    packageId:{
        type:String,
        required:true,
        
    },
    service1:{
        type:String,
        required:true,
        
    },
    price1:{
        type:Number,
        required:true,
        
    },
    service2:{
        type:String,
        required:true,
        
    },
    price2:{
        type:Number,
        required:true,
        
    },
    service3:{
        type:String,
        required:true,
        
    },
    price3:{
        type:Number,
        required:true,
        
    },
    service4:{
        type:String,
        required:true,
        
    },
    price4:{
        type:Number,
        required:true,
        
    },
    totalprice:{
        type:Number,
        required:true,
        
    }
    
},{timestamps: true})
const Service = mongoose.model('Service',serviceSchema) //this becomes users in DB
export default Service