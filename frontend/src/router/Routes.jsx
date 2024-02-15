import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Project from '../pages/Project'

export default function PageRoutes() {
  return (
    <Routes>
      <Route path='/projects' element={<Project/>}/>
    </Routes>
  )
}
