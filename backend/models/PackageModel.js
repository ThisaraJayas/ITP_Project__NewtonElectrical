import mongoose from "mongoose"

const packageSchema = new mongoose.Schema({
    packageName:{
        type:String,
        required: true,
    },
    packageId:{
        type:String,
        required:true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        
    },      
    packagePrice:{
        type:Number,
        required:true,
        
    },
    monthlyPrice:{
        type:Number,
        required:true,
        
    },
    discountedMonthlyPrice:{
        type:Number,
        required:true,
        
    },
    annualPrice:{
        type:Number,
        required:true,
        
    },
    discountedAnnualPrice:{
        type:Number,
        required:true,
        
    }
},{timestamps: true})
const Package = mongoose.model('Package',packageSchema) //this becomes users in DB
export default Package