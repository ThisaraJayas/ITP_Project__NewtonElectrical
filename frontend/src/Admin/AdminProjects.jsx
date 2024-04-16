import React from 'react'
import './adminStyles/AdminLayout.css'
import SideBar from './components/SideBar'

import Header from './components/Header'
import Projects from './pages/Projects'



export default function AdminProjects() {
  return (
    <>
    <div className='backgroundBody'>
    <div className='grid-container'>
        <Header/>
        <SideBar/>
        <Projects/>
    </div>
    </div>
    </>
  )
}
