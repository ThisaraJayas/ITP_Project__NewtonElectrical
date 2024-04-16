import express from "express";
import { deleteFeedback, getFeedback, getFeedbacks, getUserFeedback, insertFeedback, updateFeedback } from "../controllers/feedbackController.js";

const router = express.Router()

router.post('/feedback',insertFeedback)
router.get('/feedback',getFeedbacks) 
router.get('/allfeedback/:id',getUserFeedback) 
router.get('/feedback/:id',getFeedback) 
router.put('/feedback/:id',updateFeedback) //update
router.delete('/feedback/:id',deleteFeedback)

export default router