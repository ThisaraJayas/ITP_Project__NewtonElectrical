<<<<<<< HEAD
import Project from '../models/ProjectModel.js';

export const createProject = async (req, res) => {
    try {
      const project = new Project(req.body);
      await project.save();
      res.status(201).send(project);
      console.log("Project created successfully:", project); // Log success message
    } catch (error) {
      res.status(400).send(error);
      console.error("Error creating project:", error.message); // Log error message
    }
  };
  
=======
import Project from "../models/ProjectModel.js"
import multer from 'multer';


>>>>>>> 7bbbbfc23f95cb54dea88fc1ea438af2ccf33bb5


export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).send(projects);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).send();
    }
    res.send(project);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!project) {
      return res.status(404).send();
    }
<<<<<<< HEAD
    res.send(project);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).send();
    }
    res.send(project);
  } catch (error) {
    res.status(500).send(error);
  }
};
=======
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
>>>>>>> 7bbbbfc23f95cb54dea88fc1ea438af2ccf33bb5
