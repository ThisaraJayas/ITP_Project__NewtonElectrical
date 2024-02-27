import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
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
        type:Number,
        required:true,
        unique:true,
    },
    address:{
        type:String,
    },
    password:{
        type:String,
        required:true,
    },
    userType:{
        type:String,
        default:"Customer"
    }
},{timestamps: true})
const User = mongoose.model('User',userSchema) //this becomes users in DB
export default User