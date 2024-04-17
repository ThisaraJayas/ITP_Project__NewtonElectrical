import React from 'react'
import './adminStyles/AdminLayout.css'
import SideBar from './components/SideBar'
import Header from './components/Header'
import AllPackages from './components/AllPackages'
import Package from './pages/Package'



export default function AdminPackage() {
  return (
    <>
    <div className='backgroundBody'>
    <div className='grid-container'>
        <Header/>
        <SideBar/>
        <Package/>
    </div>
    </div>
    </>
  )
}
