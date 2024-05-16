import React, { useContext, useEffect, useState } from 'react';
import '../../styles/feedback.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import  axios  from 'axios';
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate, useParams } from 'react-router-dom';
export default function UpdateFeedback() {
    const [rating, setRating] = useState(0)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [message, setMessage] = useState('')
    const {id}=useParams()
    const navigate = useNavigate()
    console.log(firstName);
   

    useEffect(()=>{
        const fetchFeedback = async()=>{
            try {
                const feedback = await axios.get(
                  `https://itp-project-newton-api.vercel.app/feedbacks/feedback/${id}`
                );
                setFirstName(feedback.data.feedbacks.firstName);
                setLastName(feedback.data.feedbacks.lastName);
                setEmail(feedback.data.feedbacks.email);
                setContactNumber(feedback.data.feedbacks.contactNumber);
                setMessage(feedback.data.feedbacks.feedback);
                setRating(feedback.data.feedbacks.rating);
              } catch (error) {
                console.log(error);
              }
        }
        fetchFeedback()
    },[])

    const handleFeedbackUpdate=async(e)=>{
        e.preventDefault()
        const response = await axios.put(`https://itp-project-newton-api.vercel.app/feedbacks/feedback/${id}`,{
            firstName,
            lastName,
            email,
            contactNumber,
            feedback:message,
            rating
        })
        if(response.status==200){
            navigate('/feedback')
            console.log(response);
        window.location.reload()
        }
        console.log(response);
        navigate('/feedback')
    }
  return (
    <>
    <Header/>
    <div className='pt-24 pb-9'>
        <form onSubmit={handleFeedbackUpdate}>
            <div className="page flex justify-center items-center">
                <div className="input-container">
                    <div className='textSection'>
                        <div className='mb-3'>
                            <label className="block mb-2" htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                className="textfield"
                                id="firstName"
                                value={firstName}
                                onChange={(e)=>setFirstName(e.target.value)}
                                placeholder="Enter your first name"
                            />
                        </div>
                        <div className='mb-3'>
                            <label className="block mb-2" htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                className="textfield"
                                id="lastName"
                                value={lastName}
                                onChange={(e)=>setLastName(e.target.value)}
                                placeholder="Enter your last name"
                            />
                        </div>
                        <div className='mb-3'>
                            <label className="block mb-2" htmlFor="email">Email</label>
                            <input
                                type="text"
                                className="textfield"
                                id="email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                placeholder="Enter your Email"
                            />
                        </div>
                        <div className='mb-3'>
                            <label className="block mb-2" htmlFor="cNumber">Contact Number</label>
                            <input
                                type="text"
                                className="textfield"
                                id="cNumber"
                                value={contactNumber}
                                onChange={(e)=>setContactNumber(e.target.value)}
                                placeholder="Enter your Contact Number"
                            />
                        </div>
                        <div className='mb-3'>
                            <label className="block mb-2" htmlFor="message">Message</label>
                            <textarea
                                className="textfield"
                                id="message"
                                value={message}
                                onChange={(e)=>setMessage(e.target.value)}
                                placeholder="Type your message here"
                                rows="4"
                            />
                        </div>
                        <Stack spacing={1}>
                            <Rating name="size-large" value={rating} onChange={(event, newRating) => { setRating(newRating) }} size="large" />
                        </Stack>
                        <div className='feedbackBtns flex justify-end'>
                            <button className='FeedbackCancelBtn'>Cancel</button>
                            <button type="submit" className='FeedbackSubmitBtn ml-8'>Submit</button>
                        </div>
                    </div>
                </div>

            </div>
        </form>
    </div>
    <Footer/>
</>
  )
}
