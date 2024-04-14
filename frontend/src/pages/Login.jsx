import React, { useContext, useState } from "react";
import Header from "../components/Header";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { UserContext } from "../context/UserContext";
import Footer from "../components/Footer";

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('');
  const {setUserData} = useContext(UserContext)

  const handleAlert = (message, severity) => {
    setAlertMessage(message)
    setAlertSeverity(severity)
  }


  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email,
        password,
      });
      
      setUserData(response.data.user)
      console.log(response.data.user);
      if (response.data.user.userType === 'Admin') {
        navigate('/admin');
        
      } else if (response.data.user.userType === 'Customer') {
        navigate('/profile');
      }
    } catch (error) {
      if (error.response.status === 500) {
        handleAlert('Invalid email or password', 'error');
      }
    }
  }

  return (
    <>
      <Header />
      <div className="pt-12">
        <div className="bodyCon ">
          <div className="loginContainer">
            <div className="logformContainer">
              <div className="logintitle">
                <h2 className="logintext text-center font-bold">Login</h2>
              </div>
              <div className='logformContent'>
                {alertMessage && (
                  <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert variant="filled" severity={alertSeverity}>
                      {alertMessage}
                    </Alert>
                  </Stack>
                )}
                <form onSubmit={handleLogin}>
                  <div className='loginUserDetails pb-2'>
                    <div className='logininputBox'>
                      <span className='details'>Email Address</span>
                      <input type='text' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className='logininputBox'>
                      <span className='details'>Password</span>
                      <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <Link to={'/forgot-password'}><h3 className='forgotPassword'>Forgot Password?</h3></Link>
                  </div>
                  <div className='button'>
                    <input type='submit' value='Login' />
                  </div>
                </form>
                <h3 className='haveAccount'>Don't have an account?<span><Link to={'/register'}> Sign up</Link></span></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
