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
    service1:{
        type: String,
    },
    service2:{
        type: String,
    },
    service3:{
        type: String
    },
    service4:{
        type: String
    },
    service1Price:{
        type:Number,
    },
    service2Price:{
        type:Number,
    },
    service3Price:{
        type:Number
    },
    service4Price:{
        type:Number
    },
    monthlyPrice:{
        type:Number,
        required:true,
    },
    annualPrice:{
        type:Number,
        required:true,
        
    },
    discountMonthly:{
        type:Number,
        required:true,
        
    },
    discountAnnual:{
        type:Number,
        required:true,
        
    }
},{timestamps: true})
const Package = mongoose.model('Package',packageSchema) //this becomes users in DB
export default Package