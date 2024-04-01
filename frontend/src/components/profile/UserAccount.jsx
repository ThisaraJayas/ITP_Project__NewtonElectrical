import React from 'react'
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import '../../styles/userAccount.css'

export default function UserAccount() {
    return (
        <div className='sm:ml-12 '>
            <div className='title'>
                My Profile
            </div>
            <Paper sx={{ width: '100%', maxWidth: 'none' }} className='accountContainer'>
                <div className='formContent'>
                    <form >
                        <img className='rounded-full h-28 w-28 object-cover cursor-pointer self-center mt-2' src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'} alt='' />
                        <div className='userDetail'>
                            <div className='inputBox'>
                                <span className='details'>First Name</span>
                                <input type='text' placeholder='Enter your first name' required />
                            </div>
                            <div className='inputBox'>
                                <span className='details'>Last Name</span>
                                <input type='text' placeholder='Enter your last name' required />
                            </div>
                            <div className='inputBox'>
                                <span className='details'>Email</span>
                                <input type='text' placeholder='Enter your email' required />
                            </div>
                            <div className='inputBox'>
                                <span className='details'>Phone Number</span>
                                <input type='text' placeholder='Enter your number' required />
                            </div>
                        </div>
                        <div className='userDetail2'>
                            <div className='inputBox'>
                                <span className='details'>Address</span>
                                <input type='text' placeholder='Enter your Address' required />
                            </div>
                        </div>
                        <div className='genderDetails'>
                            <input type='radio' name='gender' id='dot1' value="male" />
                            <input type='radio' name='gender' id='dot2' value="female" />
                            <span className='gendeTitle'>Gender</span>
                            <div className='category'>
                                <label for='dot1'>
                                    <span className='dot One'></span>
                                    <span className='gender'>Male</span>
                                </label>
                                <label for='dot2'>
                                    <span className='dot Two'></span>
                                    <span className='gender'>Female</span>
                                </label>
                            </div>
                        </div>

                        <div className='updateButton'>
                            <input type='submit' value='Update Changes' />
                        </div>
                    </form>
                </div>
            </Paper>
            <Paper sx={{ width: '80%', maxWidth: 'none' }} className='passwordContainer'>
            <div className='formContent'>
                    <form >
                        <div className='passTitle'>
                            Change Password
                        </div>
                        <div className='userDetail2'>
                            <div className='inputBox '>
                                <span className='details'>Old Password</span>
                                <input type='text' placeholder='Enter your Address' required />
                            </div>
                            <div className='inputBox '>
                                <span className='details'>New Password</span>
                                <input type='text' placeholder='Enter your Address' required />
                            </div>
                            <div className='inputBox '>
                                <span className='details'>Confirm Password</span>
                                <input type='text' placeholder='Enter your Address' required />
                            </div>
                        </div>
                        <div className='updateButton'>
                            <input type='submit' value='Update Password' />
                        </div>
                    </form>
                </div>
            </Paper>
        </div>
    )
}
