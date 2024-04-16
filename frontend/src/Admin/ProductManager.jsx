import React from 'react'
import './adminStyles/AdminLayout.css'
import SideBar from './components/SideBar'
import Header from './components/Header'
import Product from './pages/Product'

export default function ProductManager() {
  return (
    <>
    <div className='backgroundBody'>
    <div className='grid-container'>
        <Header/>
        <SideBar/>  
        <Product/>
    </div>
    </div>
    </>
  )
}
