import express from "express";
import { deleteFeedback, getFeedback, getFeedbacks, insertFeedback, updateFeedback } from "../controllers/feedbackController.js";

const router = express.Router()

router.post('/feedback',insertFeedback)
router.get('/feedback',getFeedbacks) 
router.get('/feedback/:id',getFeedback) 
router.post('/feedback/:id',updateFeedback) //update
router.delete('/feedback/:id',deleteFeedback)

export default router