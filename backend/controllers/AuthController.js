import validator from 'validator'
import { setTokenCookie } from '../middleware/CookieSession.js'
import User from '../models/UserModel.js'

export const test = (req,res)=>{
    res.json({message:'Hello There'})
}

export const register = async(req,res)=>{
    const {firstName,lastName,email,mobileNumber,gender,address,password } = req.body

    const newUser = new User({firstName,lastName,email,mobileNumber,gender,address,password})
    if(!validator.isEmail(email)){
        return res.status(400).json({message: 'Invalid email address'})
    }
    if(password.length<8){
        return res.status(400).json({message: 'Password must be at least 8 characters long'})
    }
    try{
        await newUser.save()
        res.status(200).json({message:'User Created Success',userId: newUser.userId})
    }catch(error){
        res.status(500).json({message:'Sorry, User not Created'})
    }
}
export const login = async(req,res)=>{
    const {email,password} =req.body
    try{
        const user = await User.findOne({email})

        if(user.password==password){
            setTokenCookie(res,user._id,user.email)
            res.status(200).json({userId: user._id, email: user.email})
        }else{
            res.status(500).json({message: "Incorrect Password"})
        }
    }catch(error){
        res.status(500).json({message:"User Not Found"})
    }
}