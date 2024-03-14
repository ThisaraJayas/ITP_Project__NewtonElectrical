import React from 'react'

export default function Register() {
  return (
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
                </div>
            </form>
        </div>
    </div>
  )
}
