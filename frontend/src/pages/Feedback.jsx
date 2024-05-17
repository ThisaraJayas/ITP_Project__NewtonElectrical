import React, { useContext, useState } from 'react';
import '../styles/feedback.css';
import Header from '../components/Header';
import Rating from '@mui/material/Rating';
import Footer from '../components/Footer';
import { UserContext } from '../context/UserContext';
import axios from 'axios';
import validator from 'validator';
import MyFeedback from '../components/feedback/MyFeedback';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

export default function Feedback() {
    const { userData } = useContext(UserContext);
    const [rating, setRating] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [message, setMessage] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState('');
    const navigate = useNavigate()

    const handleAlert = (message, severity) => {
        setAlertMessage(message);
        setAlertSeverity(severity);
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length > 10) {
            handleAlert('First Name must be less than 10 characters', 'error');
        } else {
            handleAlert('', ''); 
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!validator.isEmail(e.target.value)) {
            handleAlert('Invalid Email Address', 'error');
        } else {
            handleAlert('', ''); 
        }
    };

    const handleContactNumberChange = (e) => {
        setContactNumber(e.target.value);
        if (!validator.isNumeric(e.target.value) || e.target.value.length !== 10) {
            handleAlert('Contact Number must be 10 digits', 'error');
        } else {
            handleAlert('', ''); 
        }
    };
    const userId = userData ? userData.userId : null;

    const handleFeedbackSumbit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://itp-project-newton-api.vercel.app/feedbacks/feedback', {
                userId: userId,
                firstName,
                lastName,
                email,
                contactNumber,
                feedback: message,
                rating
            });
            console.log(response);
            handleAlert('Feedback submitted successfully', 'success');
            navigate('/feedback')
        } catch (error) {
            console.log(error);
            handleAlert('An error occurred while submitting feedback', 'error');
        }
    };

    return (
        <>
            <Header />
            <div className='pt-24 pb-9'>
                <div className='ml-36 mr-36 mb-8'>
                {alertMessage && (
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert variant="filled" severity={alertSeverity}>
                            {alertMessage}
                        </Alert>
                    </Stack>
                )}
                </div>
                
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
                                        onChange={handleFirstNameChange}
                                        placeholder="Enter your first name"
                                        required
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label className="block mb-2" htmlFor="lastName">Last Name</label>
                                    <input
                                        type="text"
                                        className="textfield"
                                        id="lastName"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        placeholder="Enter your last name"
                                        required
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label className="block mb-2" htmlFor="email">Email</label>
                                    <input
                                        type="text"
                                        className="textfield"
                                        id="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        placeholder="Enter your Email"
                                        required
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label className="block mb-2" htmlFor="cNumber">Contact Number</label>
                                    <input
                                        type="text"
                                        className="textfield"
                                        id="cNumber"
                                        value={contactNumber}
                                        onChange={handleContactNumberChange}
                                        placeholder="Enter your Contact Number"
                                        required
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label className="block mb-2" htmlFor="message">Message</label>
                                    <textarea
                                        className="textfield"
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Type your message here"
                                        rows="4"
                                        required
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
            <div className='ml-10 mr-10'>
                <MyFeedback/>
            </div>
            <Footer />
        </>
    )
}
