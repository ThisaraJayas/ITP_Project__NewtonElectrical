import mongoose from "mongoose"
import Counter from "./CounterModel.js"

const userSchema = new mongoose.Schema({
    userId: {
        type:Number,
    },
    firstName:{
        type:String,
        required: true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobileNumber:{
        type:String,
        required:true,
        unique:true,
    },
    address:{
        type:String,
        default: ""
    },
    gender:{
        type:String,
    },
    password:{
        type:String,
        required:true,
    },
    userType:{
        type:String,
        enum: ['Customer', 'Admin'],
        default:"Customer"
    }
},{timestamps: true})
userSchema.pre('save', async function(next){
    if(!this.isNew) return next()
    try{
        const counter = await Counter.findOneAndUpdate({},{$inc: {count:1}},{new:true, upsert:true})
        this.userId=counter.count
        next()
    }catch(error){
        next(error)
    }
})
const User = mongoose.model('User',userSchema) //this becomes users in DB
export default User