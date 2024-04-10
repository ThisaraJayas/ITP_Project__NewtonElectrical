import Project from "../models/ProjectModel.js"


//insert to database
export const InsertProject = async(req,res)=>{ 
    const {title, status, description, duration, cost}=req.body
    const newProject = new Project({title, status, description, duration, cost})

    try{
        await newProject.save()
        res.status(200).json({message:"Save Succesfully"})
    }catch(error){
        res.status(500).json({message: "Save Unsucces"})
    }
}

//retrive from database
export const UpdateProject = async(req,res)=>{
    const {id}=req.params
    const {title, status, description, duration, cost}=req.body

    try{
    const updateProject = await Project.findByIdAndUpdate(id,{
        title,
        status,
        description,
        duration,
        cost
    },{ new: true })
    if(updateProject){
        res.status(200).json({message:"Updated Succesfull"})
    }
    }catch(error){
        res.status(500).json({message:"Update Unsuccessfull"})
    }
}

//update data
export const ReadProject = async(req,res)=>{
    try{
       const readProject = await Project.find()
       res.status(200).json({readProject})
    }catch{
       res.status(500).json({message:"Data Not Found"})
    }
}

//Delete Feedback
export const DeleteProject = async(req,res)=>{
    const {id}=req.params
    try{
       const deleteProject = await Project.deleteOne()
       res.status(200).json({message:"Delete Succesfull"})
    }catch{
        res.status(500).json({message:"Delete Unsuccesfull"})
    }
} 