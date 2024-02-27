import User from '../models/UserModel.js'

export const test = (req,res)=>{
    res.json({message:'Hello There'})
}

export const register = async(req,res)=>{
    const {firstName,lastName,email,mobileNumber,address,password } = req.body

    const newUser = new User({firstName,lastName,email,mobileNumber,address,password})
    try{
        await newUser.save()
        res.status(200).json({message:'User Created Success'})
    }catch(error){
        res.status(500).json({message:'Sorry, User not Created'})
    }
}