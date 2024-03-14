import React from 'react'
import '../styles/Register.css'
import Header from '../components/Header'

export default function Register() {
  return (
    <>
    <div className='bodyC'>
    <div className='container'>
    <div className='formContainer'>
        <div className='title'>
            <h2>Registration</h2>
        </div>
        <div className='formContent'>
            <form>
                <div className='userDetails'>
                    <div className='inputBox'>
                        <span className='details'>First Name</span>
                        <input type='text' placeholder='Enter your first name' required/>
                    </div>
                    <div className='inputBox'>
                        <span className='details'>Last Name</span>
                        <input type='text' placeholder='Enter your last name' required/>
                    </div>
                    <div className='inputBox'>
                        <span className='details'>Email</span>
                        <input type='text' placeholder='Enter your email' required/>
                    </div>
                    <div className='inputBox'>
                        <span className='details'>Phone Number</span>
                        <input type='text' placeholder='Enter your number' required/>
                    </div>
                    <div className='inputBox'>
                        <span className='details'>Password</span>
                        <input type='text' placeholder='Enter your password' required/>
                    </div>
                    <div className='inputBox'>
                        <span className='details'>Confirm Password</span>
                        <input type='text' placeholder='confirm your password' required/>
                    </div>
                </div>
                <div className='genderDetails'>
                    <input type='radio' name='gender' id='dot1'/>
                    <input type='radio' name='gender' id='dot2'/>
                    <span className='genderTitle'>Gender</span>
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
                <div className='button'>
                    <input type='submit' value='Register'/>
                </div>
            </form>
        </div>
        <h3 className='haveAccount'>Already have an account?<span> Log in</span></h3>
    </div>
    </div>
    </div>
    </>
  )
}
