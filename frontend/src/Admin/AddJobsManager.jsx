import React from 'react'
import './adminStyles/AdminLayout.css'
import SideBar from './components/SideBar'
import Header from './components/Header'
import AddJobsTable from './components/AddJobsTable'

export default function AddJobsManager() {
  return (
    <>
    <div className='backgroundBody'>
    <div className='grid-container'>
        <Header/>
        <SideBar/>  
        <AddJobsTable/>
    </div>
    </div>
    </>
  )
}

