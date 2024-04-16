import React, { useContext, useState } from 'react';
import '../styles/feedback.css';
import Header from '../components/Header';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Footer from '../components/Footer';
import { UserContext } from '../context/UserContext';
import  axios  from 'axios';
import MyFeedback from '../components/feedback/MyFeedback';
import validator from 'validator'

export default function Feedback() {
    const { userData } = useContext(UserContext)
    const [rating, setRating] = useState(0)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [message, setMessage] = useState('')

   

   

    const handleFeedbackSumbit=async(e)=>{
        e.preventDefault()

        if(firstName.length>10){
            alert('Must be less than 10')
           
        }

        if(!validator.isEmail(email)){
            alert('Invalid Email Address')
        }

        if(!validator.isNumeric(contactNumber)){
            alert('Number must be only digits')
        }
        if(contactNumber.length!==10){
            alert('Phone Number Must be 10 Characters')
        }
        const response = await axios.post('http://localhost:3000/feedbacks/feedback',{
            userId: userData.userId,
            firstName,
            lastName,
            email,
            contactNumber,
            feedback:message,
            rating
        })
        console.log(response);
        window.location.reload()
    }

    return (
        <>
            <Header />
            <div className='pt-24 pb-9'>
                <form onSubmit={handleFeedbackSumbit}>
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
                                        onBlur={()=>{ if(firstName.length>10){
                                            alert('Must be less than 10')
                                           
                                        }}}
                                        placeholder="Enter your first name"
                                    required/>
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
                                        required/>
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
                                        onBlur={()=>{ if(!validator.isEmail(email)){
                                            alert('Invalid Email Address')
                                        }}}
                                        required />
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
                                        onBlur={() => {
                                            if (!validator.isNumeric(contactNumber)) {
                                                alert('Number must be only digits');
                                            }
                                            if (contactNumber.length !== 10) {
                                                alert('Phone Number Must be 10 Characters');
                                            }
                                        }} 
                                        required/>
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
                                        required />
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
            <div className='ml-10 mr-10'>
                <MyFeedback/>
            </div>
            <Footer />
        </>
    )
}
