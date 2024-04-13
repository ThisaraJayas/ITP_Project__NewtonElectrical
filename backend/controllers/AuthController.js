import validator from 'validator'
import { setTokenCookie } from '../middleware/CookieSession.js'
import User from '../models/UserModel.js'
import nodemailer from 'nodemailer'
import VerifyToken from '../middleware/VerifyToken.js'
import jwt from 'jsonwebtoken'

export const test = (req,res)=>{
    res.json({message:'Hello There'})
}

export const register = async(req,res)=>{
    const {firstName,lastName,email,mobileNumber,address,gender,password } = req.body
    try{
    const newUser = new User({firstName,lastName,email,mobileNumber,address,gender,password})
    // if(!validator.isEmail(email)){
    //     return res.status(400).json({message: 'Invalid email address'})
    // }
    // if(password.length<8){
    //     return res.status(400).json({message: 'Password must be at least 8 characters long'})
    // }
    
        await newUser.save()
        res.status(200).json({message:'User Created Success',userId: newUser.userId})
    }catch(error){
        res.status(500).json({message:'Sorry, User not Created'})
        console.error("Error creating user:", error);
    }
}
export const login = async(req,res)=>{
    const {email,password} =req.body
    try{
        const user = await User.findOne({email})

        if(user.password==password){
            setTokenCookie(res,user._id,user.email)
            res.status(200).json({user})
        }else{
            res.status(500).json({message: "Incorrect Password"})
        }
    }catch(error){
        res.status(500).json({message:"User Not Found"})
    }
}

export const forgotPassword = async(req,res)=>{
    const {email} = req.body

    const user = await User.findOne({email})
    if(!user){
        res.status(500).json({message:"User not Exit"})
    }
    const token = jwt.sign({id: user.userId}, "Jwt_secret_key",{expiresIn: "1d"})
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'buzzcomparison@gmail.com',
          pass: 'iuyq rcxy okco dejq'
        }
      });
      
      var mailOptions = {
        from: 'buzzcomparison@gmail.com',
        to: user.email,
        subject: 'Reset Your Password',
        text: `http://localhost:5173/reset-password/${user.userId}/${token}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          return res.send({Status: "Success"})
        }
      })
}