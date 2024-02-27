import mongoose from "mongoose"

const userSchema = new mongoose.Schema({

},{timestamps: true})
const User = mongoose.model('User',userSchema) //this becomes users in DB
export default User