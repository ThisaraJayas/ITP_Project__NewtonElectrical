import React from 'react'
import '../styles/Admin/AdminLayout.css'
import SideBar from './components/SideBar'
import Home from './components/Home'
import Header from './components/Header'

export default function AdminLayout() {
  return (
    <>
    <div className='grid-container'>
        <Header/>
        <SideBar/>
        <Home/>
    </div>
    </>
  )
}
