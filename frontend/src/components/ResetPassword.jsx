import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import "../styles/resetpassword.css";



export default function ResetPassword() {
    const [password,setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const navigate = useNavigate()
    const {id,token}=useParams()
    console.log(password);

    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(password===newPassword){
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
        }else{
          console.log('Password doent match');
        }
       
    }

  return (
    <div className="forgotpassContainer">
      <Paper sx={{ width: '50%', maxWidth: 'none', boxShadow: 16 }} className='forgotpasswordPaper'>
        <h2>Enter New Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={password} onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter your new password"
            className="passwordInput"
          />
          <input
            type="text"
            value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}
            placeholder="Confirm your new password"
            className="passwordInput"
          />
          <input type="submit" value="Update" className="submitButton" />
        </form>
      </Paper>
    </div>
  )
}
