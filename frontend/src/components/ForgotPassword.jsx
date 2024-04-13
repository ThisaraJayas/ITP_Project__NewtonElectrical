import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
    const [email,setEmail] = useState('')
    const navigate = useNavigate()
    console.log(email);

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3000/auth/forgotpassword', {
              email,
            });
            
            if (response.status === 200) {
              navigate('/login');
            }
          }catch(error){
            console.log(error);
          }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>

            <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}  />
            <input type='submit' value='submit'/>
        </form>
    </div>
  )
}
