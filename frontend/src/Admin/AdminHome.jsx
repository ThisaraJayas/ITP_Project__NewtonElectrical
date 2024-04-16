import React, { useContext, useEffect } from 'react'
import './adminStyles/AdminLayout.css'
import SideBar from './components/SideBar'
import Home from './pages/Home'
import Header from './components/Header'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export default function AdminHome() {
    const {userData} = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(()=>{
      if (!(userData && userData.userType === 'Admin')) {
        navigate('/login');
    }
    },[userData,navigate])
    
  return (
    <>
    <div className='backgroundBody'>
    <div className='grid-container'>
        <Header/>
        <SideBar/>
        <Home/>
    </div>
    </div>
    </>
  )
}
