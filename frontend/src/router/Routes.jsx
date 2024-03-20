import React from 'react'
import {Route, Routes} from 'react-router-dom'
import AdminHome from '../Admin/AdminHome'
// import Projects from '../pages/Project'
// import Product from '../Admin/components/project'
import UserManager from '../Admin/UserManager'
import UseContextProvider from '../context/UserContext'
import ProductManager from '../Admin/ProductManager'
import Register from '../pages/Register'
import Inventory from '../pages/Inventory'




export default function PageRoutes() {
  return (
    <>
    <UseContextProvider>
    <Routes>
      {/* <Route path='/projects' element={<Projects/>}/> */}
      <Route path='/admin' element={<AdminHome/>}/>
      <Route path='/admin/product' element={<ProductManager/>}/>
      <Route path='/admin/user' element={<UserManager/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/product' element={<Inventory/>}/>
    </Routes>
    </UseContextProvider>
    </>
  )
}
