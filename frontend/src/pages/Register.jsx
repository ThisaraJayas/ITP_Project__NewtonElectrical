import React, { useState } from 'react'
import '../styles/Register.css'
import Header from '../components/Header'
import validator from 'validator'
import PasswordValidator from 'password-validator'

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
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [gender, setGender] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!validator.isEmail(email)) {
            alert('Invalid email address')
        }

        if (!validator.isNumeric(phoneNumber)) {
            alert('Phone number must be in Numeric');
            return;
        }
        if (phoneNumber.length !== 10) {
            alert('Phone number must be a 10-digit number');
            return;
        }

        if (!passwordSchema.validate(password)) {
            alert('Password does not meet the requirements.');
            return
        }

        if (password !== confirmPassword) {
            alert('Password dont match')
            return
        }
        if (!gender) {
            alert('Select Gender')
        }
    }


    return (
        <>
            <Header />
            <div className='pt-12'>
                <div className='bodyC '>
                    <div className='regContainer'>
                        <div className='formContainer'>
                            <div className='title'>
                                <h2>Registration</h2>
                            </div>
                            <div className='formContent'>
                                <form onSubmit={handleSubmit}>
                                    <div className='userDetails'>
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
                                            <input type='text' placeholder='Enter your number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
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
                            <h3 className='haveAccount'>Already have an account?<span> Log in</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
