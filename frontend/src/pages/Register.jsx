import React, { useState } from 'react'
import '../styles/Register.css'
import Header from '../components/Header'
import validator from 'validator'
import PasswordValidator from 'password-validator'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const passwordSchema = new PasswordValidator()
passwordSchema
    .is().min(8)
    .is().max(100)
    .has().uppercase()
    .has().lowercase()
    .has().digits()
    .has().not().spaces()

export default function Register() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [mobileNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [gender, setGender] = useState('')
    const [alertMessage, setAlertMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState('');
    const navigate = useNavigate()

    const handleAlert = (message, severity) =>{
        setAlertMessage(message)
        setAlertSeverity(severity)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        if (!validator.isEmail(email)) {
            handleAlert('Invalid email address','error')
        }

        if (!validator.isNumeric(mobileNumber)) {
            handleAlert('Phone number must be Digits','error')
            return;
        }
        if (mobileNumber.length !== 10) {
            handleAlert('Phone number must be a 10-digit number','error')
            return;
        }

        if (!passwordSchema.validate(password)) {
            handleAlert('Password must have updercase, lowercase and digits','error')
            return
        }

        if (password !== confirmPassword) {
            handleAlert('Password dont match','error')
            return
        }
        if (!gender) {
            handleAlert('Please Select Gender','error')
        }

        try {
            const response = await axios.post('http://localhost:3000/auth/register', {
                firstName,
                lastName,
                email,
                mobileNumber,
                gender,
                password
            });
            console.log(response);
            
            if(response.status===200){
                handleAlert('Registration Success','success')
                navigate('/login')
            }else{
                handleAlert('Registration Failed','error')
            }
        } catch (error) {
            console.error("Error creating user:", error);
            handleAlert('Sorry, User not Created','error')
        }
    }

    return (
        <>
            <Header />
            <div className='pt-12'>
                <div className='bodyC '>
                    <div className='regContainer'>
                        <div className='formContainer'>
                            <div className='title text-center font-bold'>
                                <h2>Registration</h2>
                            </div>
                            <div className='formContent'>
                                {alertMessage && (
                                    <Stack sx={{ width: '100%' }} spacing={2}>
                                    <Alert variant="filled" severity={alertSeverity}>
                                      {alertMessage}
                                    </Alert>
                                    </Stack>
                                )}
                                <form onSubmit={handleSubmit}>
                                    <div className='userDetail'>
                                        <div className='inputBox'>
                                            <span className='details'>First Name</span>
                                            <input type='text' placeholder='Enter your first name' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                                        </div>
                                        <div className='inputBox'>
                                            <span className='details'>Last Name</span>
                                            <input type='text' placeholder='Enter your last name' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                                        </div>
                                        <div className='inputBox'>
                                            <span className='details'>Email</span>
                                            <input type='text' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                                        </div>
                                        <div className='inputBox'>
                                            <span className='details'>Phone Number</span>
                                            <input type='text' placeholder='Enter your number' value={mobileNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                                        </div>
                                        <div className='inputBox'>
                                            <span className='details'>Password</span>
                                            <input type='text' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                                        </div>
                                        <div className='inputBox'>
                                            <span className='details'>Confirm Password</span>
                                            <input type='text' placeholder='confirm your password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                                        </div>
                                    </div>
                                    <div className='genderDetails'>
                                        <input type='radio' name='gender' id='dot1' value="male" onChange={(e) => setGender(e.target.value)} />
                                        <input type='radio' name='gender' id='dot2' value="female" onChange={(e) => setGender(e.target.value)} />
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
                                        <input type='submit' value='Register' />
                                    </div>
                                </form>
                            </div>
                            <h3 className='haveAccount'>Already have an account?<span><Link to={'/login'}> Log in</Link></span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
