import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import  axios  from 'axios'
import { Link } from 'react-router-dom';
import { DeleteFeedback } from './DeleteFeedback';

export default function () {
    const {userData}=useContext(UserContext)
    const [feedback, setFeedbacks]=useState([])

    const userId = userData.userId
   

    useEffect(()=>{
        const fetchFeedback = async () => {
            try {
                const response = await axios.get(`https://itp-project-newton-api.vercel.app/feedbacks/allfeedback/${userId}`);
                console.log(response.data.feedbacks);
                setFeedbacks(response.data.feedbacks)
            } catch (error) {
                console.error('Error fetching feedback:', error);
            }
        }
        fetchFeedback();
    }, [])
    console.log(feedback);

    const deleteFeedback = async (feedbackId) => {
        try {
          await axios.delete(`https://itp-project-newton-api.vercel.app/feedbacks/feedback/${feedbackId}`)
          window.location.reload();
            
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <div>
        <div className=''>
            <div className='myFeedbackTitle mb-9'>
                Past Feedbacks
            </div>
            <div>
            {feedback.map((feedback, index) => (
                         <div key={index} className='myFeedbackCard'>
                         <div className='feedbackHeader '>
                             <div className='userName'>{feedback.firstName} {feedback.lastName}</div>
                         </div>
                         <div className='feedbackBody mb-4'>
                             <Stack spacing={1}>
                                 <Rating name="size-large" value={feedback.rating} readOnly size="small" />
                             </Stack>
                            </div>
                             <div className='userMessage'>{feedback.feedback}</div>
                         
                         <div className='feedbackActions flex justify-end'>
                         <Link to={`/feedback-update/${feedback.feedbackId}`}><button className='deleteButton1 mr-4' >Edit</button></Link>
                             <button className='deleteButton1' ><DeleteFeedback deleteId={feedback.feedbackId} /></button>
                         </div>
                     </div>
                    ))}
            </div>
        </div>
    </div>
  )
}
