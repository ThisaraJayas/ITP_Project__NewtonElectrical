import React from 'react'
import './adminStyles/AdminLayout.css'
import SideBar from './components/SideBar'
import Home from './pages/Home'
import Header from './components/Header'

export default function AdminHome() {
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
