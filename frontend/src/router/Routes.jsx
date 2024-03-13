import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Project from '../pages/project'
import Header from '../components/Header'
import AdminLayout from '../Admin/AdminLayout'

export default function PageRoutes() {
  return (
    <>
    {/* <Header/> */}
    <Routes>
      <Route path='/projects' element={<Project/>}/>
      <Route path='/admin/hi' element={<AdminLayout/>}/>
    </Routes>
    </>
  )
}
