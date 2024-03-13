import React from 'react'
import './adminStyles/AdminLayout.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import User from './pages/User'


export default function UserManager() {
  return (
    <>
    <div className='backgroundBody'>
    <div className='grid-container'>
        <Header/>
        <SideBar/>
        <User/>
    </div>
    </div>
    </>
  )
}
