import React from 'react'
import './adminStyles/AdminLayout.css'
import SideBar from './components/SideBar'
import Header from './components/Header'
import Project from './pages/Project'


export default function ProjectManager() {
  return (
    <>
    <div className='backgroundBody'>
    <div className='grid-container'>
        <Header/>
        <SideBar/>  
        <Project/>
        
    </div>
    </div>
    </>
  )
}
