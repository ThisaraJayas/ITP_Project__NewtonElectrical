import React from 'react';
import '../styles/feedback.css';
import Header from '../components/Header';

export default function Feedback() {
    return (
        <>
            <Header />
            <div className='pt-24'>
                <div className="page flex justify-center items-center">
                    <div className="input-container">
                        <div className='textSection'>
                            <div className='mb-3'>
                                <label className="block mb-2" htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    className="textfield"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="Enter your first name"
                                />
                            </div>
                            <div className='mb-3'>
                                <label className="block mb-2" htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    className="textfield"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Enter your last name"
                                />
                            </div>
                            <div className='mb-3'>
                                <label className="block mb-2" htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    className="textfield"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your Email"
                                />
                            </div>
                            <div className='mb-3'>
                                <label className="block mb-2" htmlFor="cNumber">Contact Number</label>
                                <input
                                    type="text"
                                    className="textfield"
                                    id="cNumber"
                                    name="cNumber"
                                    placeholder="Enter your Contact Number"
                                />
                            </div>
                            <div className='mb-3'>
                                <label className="block mb-2" htmlFor="message">Message</label>
                                <textarea
                                    className="textfield"
                                    id="message"
                                    name="message"
                                    placeholder="Type your message here"
                                    rows="4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
