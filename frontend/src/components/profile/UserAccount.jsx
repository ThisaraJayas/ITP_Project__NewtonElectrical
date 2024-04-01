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
                                    <div className='userDetail'>
                                        <div className='inputBox'>
                                            <span className='details'>First Name</span>
                                            <input type='text' placeholder='Enter your first name'  required />
                                        </div>
                                        <div className='inputBox'>
                                            <span className='details'>Last Name</span>
                                            <input type='text' placeholder='Enter your last name' required />
                                        </div>
                                        <div className='inputBox'>
                                            <span className='details'>Email</span>
                                            <input type='text' placeholder='Enter your email'  required />
                                        </div>
                                        <div className='inputBox'>
                                            <span className='details'>Phone Number</span>
                                            <input type='text' placeholder='Enter your number'  required />
                                        </div>
                                        </div>
                                        <div className='userDetail2'>
                                        <div className='inputBox'>
                                            <span className='details'>Address</span>
                                            <input type='text' placeholder='Enter your Address'  required />
                                        </div>
                                        </div>
                                        {/* <div className='inputBox'>
                                            <span className='details'>Password</span>
                                            <input type='text' placeholder='Enter your password' required />
                                        </div>
                                        <div className='inputBox'>
                                            <span className='details'>Confirm Password</span>
                                            <input type='text' placeholder='confirm your password' required />
                                        </div> */}
                                    
                                    <div className='button'>
                                        <input type='submit' value='Register' />
                                    </div>
                                </form>
                            
                        </div>
        </Paper></div>
  )
}
