import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


export default function ResetPassword() {
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const {id,token}=useParams()
    console.log(password);

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const response = await axios.post(`http://localhost:3000/auth/resetPassword/${id}/${token}`, {
                password,
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

            <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)}  />
            <input type='submit' value='update'/>
        </form>
    </div>
  )
}
