import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Header from '../components/Header'
import AdminHome from '../Admin/AdminHome'
import Project from '../pages/project'
import Product from '../Admin/components/Product'
import UserManager from '../Admin/UserManager'
import UseContextProvider from '../context/UserContext'
import ProductManager from '../Admin/ProductManager'

export default function PageRoutes() {
  return (
    <>
    <UseContextProvider>
    <Routes>
      <Route path='/projects' element={<Project/>}/>
      <Route path='/admin' element={<AdminHome/>}/>
      <Route path='/admin/product' element={<ProductManager/>}/>
      <Route path='/admin/user' element={<UserManager/>}/>
    </Routes>
    </UseContextProvider>
    </>
  )
}
