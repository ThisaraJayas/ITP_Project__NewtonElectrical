import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/forgotpassword.css";
import Paper from '@mui/material/Paper';



export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  console.log(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/forgotpassword",
        {
          email,
        }
      );

      if (response.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="forgotpassContainer">
      <Paper sx={{ width: '50%', maxWidth: 'none', boxShadow: 16 }} className='forgotpasswordPaper'>
        <h2>Forgot your Password?</h2>
        <p>Enter your email address below and we’ll send you a link to reset your password</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="emailInput"
          />
          <input type="submit" value="Submit" className="submitButton" />
        </form>
      </Paper>
    </div>
  );
}
