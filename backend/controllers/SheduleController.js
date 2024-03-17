import Shedule from "../models/ProjectModel.js"


export const InsertShedule = async(req,res)=>{ 
    const {service,serviceDetail,description,firstName,lastName,address,city,province,zipcode,date,timeslot}=req.body
    const newShedule = new Project({service,serviceDetail,description,firstName,lastName,address,city,province,zipcode,date,timeslot})

    try{
        await newShedule.save()
        res.status(200).json({message:"Save Succesfully"})
    }catch(error){
        res.status(500).json({message: "Save Unsuccess"})
    }
}

export const UpdateShedule = async(req,res)=>{
    const {id}=req.params
    const {service,serviceDetail,description,firstName,lastName,address,city,province,zipcode,date,timeslot}=req.body

    try{
    const updateShedule = await Shedule.findByIdAndUpdate(id,{
        service,
        serviceDetail,
        description,
        firstName,
        lastName,
        address,
        city,
        province,
        zipcode,
        date,
        timeslot
    },{ new: true })
    if(updateShedule){
        res.status(200).json({message:"Updated Succesfull"})
    }
    }catch(error){
        res.status(500).json({message:"Update Unsuccessfull"})
    }
}

export const ReadShedule = async(req,res)=>{
    try{
       const readShedule = await Shedule.find()
       res.status(200).json({ReadShedule})
    }catch{
       res.status(500).json({message:"Data Not Found"})
    }
}

export const DeleteShedule = async(req,res)=>{
    const {id}=req.params
    try{
       const deleteShedule = await Shedule.deleteOne()
       res.status(200).json({message:"Delete Succesfull"})
    }catch{
        res.status(500).json({message:"Delete Unsuccesfull"})
    }
}