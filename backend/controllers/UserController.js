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
        const user = await User.findOne({userId: id})
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
    const { firstName, lastName, email, mobileNumber, address, password,userType, avatar} = req.body;
    try{
        const user = await User.findOneAndUpdate({userId: id},{
            firstName,
            lastName,
            email,
            mobileNumber,
            address,
            password,
            userType,
            avatar
        },{ new: true })
        if(user){
            res.status(200).json({user})
        }
    }catch(error){
        res.status(500).json({message:"Server Error"})
    }
}
export const DeleteUser = async(req,res)=>{
    const {id}=req.params
    try{
       const deleteUser = await User.deleteOne({userId: id})
       res.status(200).json({message: "Delete Successfull"})
    }catch{
        res.status(500).json({message:"Delete Unsuccesfull"})
    }
}

export const getTotalUserCount = async(req,res)=>{
    try{
        const totalUsers = await User.countDocuments()
        res.status(200).json({totalUsers})
    }catch{
        res.status(500).json({ message: 'Unable to get total users' })
    }
}