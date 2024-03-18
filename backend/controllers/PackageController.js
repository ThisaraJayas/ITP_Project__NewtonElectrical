import Package from "../models/PackageModel.js"


export const InsertPackage = async(req,res)=>{ 
    const {packageName, packageId, description, packagePrice, monthlyPrice, discountedMonthlyPrice, annualPrice, discountedAnnualPrice}=req.body
    const newPackage = new Package({packageName, packageId, description, packagePrice, monthlyPrice, discountedMonthlyPrice, annualPrice, discountedAnnualPrice})

    try{
        await newPackage.save()
        res.status(200).json({message:"Save Succesfully"})
    }catch(error){
        res.status(500).json({message: "Save Unsucces"})
    }
}
export const UpdatePackage = async(req,res)=>{
    const {id}=req.params
    const {packageName, packageId, description, packagePrice, monthlyPrice, discountedMonthlyPrice, annualPrice, discountedAnnualPrice}=req.body

    try{
    const updatePackage = await Package.findByIdAndUpdate(id,{
        packageName,
        packageId,
        description,
        packagePrice,
        monthlyPrice,
        discountedMonthlyPrice,
        annualPrice,
        discountedAnnualPrice
    },{ new: true })
    if(updatePackage){
        res.status(200).json({message:"Updated Succesfull"})
    }
    }catch(error){
        res.status(500).json({message:"Update Unsuccessfull"})
    }
}
export const ReadPackage = async(req,res)=>{
    try{
       const readPackage = await Package.find()
       res.status(200).json({readPackage})
    }catch{
       res.status(500).json({message:"Data Not Found"})
    }
}

export const DeletePackage = async(req,res)=>{
    const {id}=req.params
    try{
       const deletePackage = await Package.deleteOne()
       res.status(200).json({message:"Delete Succesfull"})
    }catch{
        res.status(500).json({message:"Delete Unsuccesfull"})
    }
}