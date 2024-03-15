import Project from "../models/ProjectModel.js"


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