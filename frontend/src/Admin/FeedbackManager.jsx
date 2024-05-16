import React from 'react'
import './adminStyles/AdminLayout.css'
import SideBar from './components/SideBar'
import Header from './components/Header'
import Feedback from './pages/Feedback'

export default function FeedbackManager() {
  return (
    <>
    <div className='backgroundBody'>
    <div className='grid-container'>
        <Header/>
        <SideBar/>  
        <Feedback/>

    </div>
    
    </div>
    </>
  )
}
