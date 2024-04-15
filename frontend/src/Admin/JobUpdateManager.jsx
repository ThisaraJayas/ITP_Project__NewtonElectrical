import React from 'react'
import './adminStyles/AdminLayout.css'
import SideBar from './components/SideBar'
import Header from './components/Header'
import JobUpdate from './components/JobUpdate'


export default function JobUpdateManager() {
  return (
    <>
    <div className='backgroundBody'>
    <div className='grid-container'>
        <Header/>
        <SideBar/>  
        <JobUpdate/>
    </div>
    </div>
    </>
  )
}
