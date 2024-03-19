import Service from "../models/ServiceModel.js"


export const InsertService = async(req,res)=>{ 
    const {packageId, serviceName,  Price}=req.body
    const newService = new Service({packageId, serviceName,  Price})

    try{
        await newService.save()
        res.status(200).json({message:"Save Succesfully"})
    }catch(error){
        res.status(500).json({message: "Save Unsucces"})
    }
}
export const UpdateService = async(req,res)=>{
    const {id}=req.params
    const {packageId, serviceName, Price}=req.body

    try{
    const updateService = await Service.findByIdAndUpdate(id,{
        packageId,
        serviceName,
        Price,
        
    },{ new: true })
    if(updateService){
        res.status(200).json({message:"Updated Succesfull"})
    }
    }catch(error){
        res.status(500).json({message:"Update Unsuccessfull"})
    }
}
export const ReadService = async(req,res)=>{
    try{
       const readService = await Service.find()
       res.status(200).json({readService})
    }catch{
       res.status(500).json({message:"Data Not Found"})
    }
}

export const DeleteService = async(req,res)=>{
    const {id}=req.params
    try{
       const deleteService = await Service.deleteOne()
       res.status(200).json({message:"Delete Succesfull"})
    }catch{
        res.status(500).json({message:"Delete Unsuccesfull"})
    }
}