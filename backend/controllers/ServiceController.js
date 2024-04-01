import Service from "../models/ServiceModel.js"


export const InsertService = async(req,res)=>{ 
    const {packageId, serviceName, service1, price1, service2, price2, service3, price3, service4, price4, totalPrice,}=req.body
    const newService = new Service({packageId, serviceName, service1, price1, service2, price2, service3, price3, service4, price4, totalPrice})

    try{
        await newService.save()
        res.status(200).json({message:"Save Succesfully"})
    }catch(error){
        res.status(500).json({message: "Save Unsucces"})
    }
}
export const UpdateService = async(req,res)=>{
    const {id}=req.params
    const {packageId, serviceName, service1, price1, service2, price2, service3, price3, service4, price4, totalprice}=req.body

    try{
    const updateService = await Service.findByIdAndUpdate(id,{
        packageId,
        serviceName,
        service1, 
        price1, 
        service2, 
        price2, 
        service3, 
        price3, 
        service4, 
        price4,
        totalprice,
        
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