import Project from "../models/ProjectModel.js"
import multer from 'multer';



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

export const ReadProject = async(req,res)=>{
    try{
       const readProject = await Project.find()
       res.status(200).json({readProject})
    }catch{
       res.status(500).json({message:"Data Not Found"})
    }
}

export const DeleteProject = async(req,res)=>{
    const {id}=req.params
    try{
       const deleteProject = await Project.deleteOne({_id:id})
       res.status(200).json({message:"Delete Succesfull"})
    }catch{
        res.status(500).json({message:"Delete Unsuccesfull"})
    }
}

export const ReadProjectById = async(req,res)=>{
    const {id}=req.params
    try{
        const project = await Project.findOne({_id: id})
        if(project){
            res.status(200).json({project})
        }else{
            res.status(404).json({message:"Project Not Found"})
        }
    }catch(error){
        res.status(500).json({message:"Internal Server Error"})
    }
} 


// export const InsertProject = async(req,res)=>{ 
//     const {title, status, description, duration, cost}=req.body
//     const newProject = new Project({title, status, description, duration, cost})

//     try{
//         await newProject.save()
//         res.status(200).json({message:"Save Succesfully"})
//     }catch(error){
//         res.status(500).json({message: "Save Unsucces"})
//     }
// }

// export const UpdateProject = async(req,res)=>{
//     const {id}=req.params
//     const {title, status, description, duration, cost}=req.body

//     try{
//     const updateProject = await Project.findByIdAndUpdate(id,{
//         title,
//         status,
//         description,
//         duration,
//         cost
//     },{ new: true })
//     if(updateProject){
//         res.status(200).json({message:"Updated Succesfull"})
//     }
//     }catch(error){
//         res.status(500).json({message:"Update Unsuccessfull"})
//     }
// }

// export const ReadProject = async(req,res)=>{
//     try{
//        const readProject = await Project.find()
//        res.status(200).json({readProject})
//     }catch{
//        res.status(500).json({message:"Data Not Found"})
//     }
// }

// export const DeleteProject = async(req,res)=>{
//     const {id}=req.params
//     try{
//        const deleteProject = await Project.deleteOne()
//        res.status(200).json({message:"Delete Succesfull"})
//     }catch{
//         res.status(500).json({message:"Delete Unsuccesfull"})
//     }
// }