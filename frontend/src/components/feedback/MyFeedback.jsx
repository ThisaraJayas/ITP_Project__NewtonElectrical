import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import  axios  from 'axios'

export default function () {
    const {userData}=useContext(UserContext)
    const [feedback, setFeedbacks]=useState([])

    const userId = userData.userId
   

    useEffect(()=>{
        const fetchFeedback = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/feedbacks/feedback/${userId}`);
                console.log(response.data.feedbacks);
                setFeedbacks(response.data.feedbacks)
            } catch (error) {
                console.error('Error fetching feedback:', error);
            }
        }
        fetchFeedback();
    }, [])
    console.log(feedback);
  return (
    <div>
        <div className=''>
            <div className='myFeedbackTitle mb-9'>
                Past Feedbacks
            </div>
            <div>
            {feedback.map((feedback, index) => (
                        <div key={index} className='myFeedbackContainer mb-12'>
                            <div>User ID: {feedback.userId}</div>
                            <div>First Name: {feedback.firstName}</div>
                            <div>Last Name: {feedback.lastName}</div>
                            <div>Email: {feedback.email}</div>
                            <div>Contact Number: {feedback.contactNumber}</div>
                            <div>Feedback: {feedback.feedback}</div>
                            <div>Rating: {feedback.rating}</div>
                        </div>
                    ))}
            </div>
        </div>
    </div>
  )
}
