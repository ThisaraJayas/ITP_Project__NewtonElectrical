import express from "express";
import { deleteFeedback, getFeedback, insertFeedback, updateFeedback } from "../controllers/feedbackController.js";

const router = express.Router()

router.post('/feedback',insertFeedback)
router.get('/feedback',getFeedback) 
router.post('/feedback/:id',updateFeedback) //update
router.delete('/feedback/:id',deleteFeedback)

export default router