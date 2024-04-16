import Package from "../models/PackageModel.js"

export const InsertPackage = async (req, res) => {
    const {
      packageName,
      packageId,
      description,
      service1,
      service2,
      service3,
      service4,
      service1Price,
      service2Price,
      service3Price,
      service4Price,
      monthlyPrice,
      annualPrice,
      discountMonthly,
      discountAnnual,
     
    } = req.body;
  
    try {
      const newPackage = new Package({
        packageName,
        packageId,
        description,
        service1,
        service2,
        service3,
        service4,
        service1Price,
        service2Price,
        service3Price,
        service4Price,
        monthlyPrice,
        annualPrice,
        discountMonthly,
        discountAnnual,
        
      });
  
      await newPackage.save();
      res.status(200).json({ message: "Saved Successfully" });
    } catch (error) {
      console.error("Error saving package:", error);
      res.status(500).json({ message: "Save Unsuccessful", error: error.message });
    }
  };
  export const UpdatePackage = async (req, res) => {
    const { id } = req.params;
    const {
      packageName,
      packageId,
      description,
      service1,
      service2,
      service3,
      service4,
      service1Price,
      service2Price,
      service3Price,
      service4Price,
      discountedMonthly,
      discountedAnnual,
      monthlyPrice,
      annualPrice,
    } = req.body;
  
    try {
      const updatePackage = await Package.findByIdAndUpdate(
        id,
        {
          packageName,
          packageId,
          description,
          service1,
          service2,
          service3,
          service4,
          service1Price,
          service2Price,
          service3Price,
          service4Price,
          discountedMonthly,
          discountedAnnual,
          monthlyPrice,
          annualPrice,
        },
        { new: true }
      );
  
      if (updatePackage) {
        res.status(200).json({ message: "Updated Successfully", updatedPackage: updatePackage });
      } else {
        res.status(404).json({ message: "Package not found" });
      }
    } catch (error) {
      console.error("Error updating package:", error);
      res.status(500).json({ message: "Update Unsuccessful", error: error.message });
    }
  };
export const ReadPackage = async(req,res)=>{
    try{
       const readPackage = await Package.find()
       res.status(200).json({readPackage})
    }catch{
       res.status(500).json({message:"Data Not Found"})
    }
}

export const ReadOnePackage = async (req, res) => {
    try {
      const readPackage = await Package.findById(req.params.id);
      if (readPackage) {
        res.status(200).json({ readPackage });
      } else {
        res.status(404).json({ message: "Package not found" });
      }
    } catch (error) {
      console.error("Error reading package:", error);
      res.status(500).json({ message: "Data Not Found", error: error.message });
    }
  };
export const DeletePackage = async(req,res)=>{
    const {id}=req.params
    try{
       const deletePackage = await Package.deleteOne()
       res.status(200).json({message:"Delete Succesfull"})
    }catch{
        res.status(500).json({message:"Delete Unsuccesfull"})
    }
}