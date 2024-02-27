import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Project from '../pages/Project'
import Header from '../components/Header'

export default function PageRoutes() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/projects' element={<Project/>}/>
    </Routes>
    </>
  )
}