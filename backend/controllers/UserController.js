import User from '../models/UserModel.js'


export const retriveUsers = async(req,res)=>{
    try{
        const user = await User.find()
        res.status(200).json({user})
    }catch(error){
        res.status(500).json({message:"Sorry"})
    }
}

export const retriveUser = async(req,res)=>{
    const {id} = req.params
    try{
        const user = await User.findOne({_id: id})
        if(user){
            res.status(200).json({user})
        }else{
            res.status(404).json({message:"User Not Found"})
        }
        
    }catch(error){
        res.status(500).json({message:"Internal Server Error"})
    }
}

export const updateUser=async(req,res)=>{
    const {id}=req.params
    const { firstName, lastName, email, mobileNumber, address, password} = req.body;
    try{
        const user = await User.findByIdAndUpdate(id,{
            firstName,
            lastName,
            email,
            mobileNumber,
            address,
            password
        },{ new: true })
        if(user){
            res.status(200).json({message:"Updated Succesfull"})
        }
    }catch(error){
        res.status(500).json({message:"Server Error"})
    }
}