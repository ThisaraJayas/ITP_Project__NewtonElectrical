import React from 'react'
import {Route, Routes} from 'react-router-dom'
import AdminHome from '../Admin/AdminHome'
import Project from '../pages/project'
import ProductAdmin from '../Admin/components/Product'
import UserManager from '../Admin/UserManager'
import UseContextProvider from '../context/UserContext'
import ProductManager from '../Admin/ProductManager'
import Register from '../pages/Register'
import Product from '../pages/Product'
imp


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
      <Route path='/product' element={<Product/>}/>
    </Routes>
    </UseContextProvider>
    </>
  )
}
