import React from 'react'
import {Route, Routes} from 'react-router-dom'
import AdminHome from '../Admin/AdminHome'
import Project from '../pages/project'
import Product from '../Admin/components/Product'
import UserManager from '../Admin/UserManager'
import UseContextProvider from '../context/UserContext'
<<<<<<< HEAD
import ProductManager from '../Admin/ProductManager'
=======
import Register from '../pages/Register'
>>>>>>> 3ee7f0164630da7b0e14ba0ef08251ccbfc0d71f

export default function PageRoutes() {
  return (
    <>
    <UseContextProvider>
    <Routes>
      <Route path='/projects' element={<Project/>}/>
      <Route path='/admin' element={<AdminHome/>}/>
      <Route path='/admin/product' element={<ProductManager/>}/>
      <Route path='/admin/user' element={<UserManager/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </UseContextProvider>
    </>
  )
}
