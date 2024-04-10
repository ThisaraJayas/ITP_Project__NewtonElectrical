import Feedback from "../models/FeedbackModel.js"

//insert to database
export const insertFeedback = async(req,res)=>{
    const {userId,firstName,lastName,email,contactNumber,feedback,rating}=req.body

    const newFeedback = new Feedback({userId,firstName,lastName,email,contactNumber,feedback,rating})

    try{
        await newFeedback.save()
        res.status(200).json({newFeedback, message:"Feedback Success"})
    }catch(error){
        res.status(500).json({message: "Feedback UnSuccess"})
    }
}

//retrive from database
export const getFeedback = async(req,res)=>{
    try{
    const feedbacks = await Feedback.find()
    res.status(200).json({feedbacks})
    }catch(error){
        res.status(500).json({message:"Canot Get Users"})
    }
}

//update data
export const updateFeedback = async(req,res)=>{
    const {id}=req.params
    const {firstName,lastName,email,contactNumber,feedback} = req.body;
    try{
        const feedbackupdate = await Feedback.findByIdAndUpdate(id,{
            firstName,
            lastName,
            email,
            contactNumber,
            feedback
        },{ new: true })
        if(feedbackupdate){
            res.status(200).json({message:"Updated Succesfull"})
        }
    }catch(error){
        res.status(500).json({message:"Server Error"})
    }
}
//Delete Feedback
export const deleteFeedback = async(req,res)=>{
    const {id}=req.params
    try{
        const feedbackDelete = await Feedback.deleteOne({_id:id})
        res.status(200).json({message:"Deleted Success"})
    }catch(error){
        res.status(500).json({message:"Delete Unsuccess"})
    }
}