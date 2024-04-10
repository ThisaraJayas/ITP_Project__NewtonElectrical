import React from 'react'
import './adminStyles/AdminLayout.css'
import SideBar from './components/SideBar'
import Header from './components/Header'
import Jobs from './pages/Jobs'


export default function JobsManager() {
    return (
      <>
      <div className='backgroundBody'>
      <div className='grid-container'>
          <Header/>
          <SideBar/>  
          <Jobs/>
      </div>
      </div>
      </>
    )
  }
  