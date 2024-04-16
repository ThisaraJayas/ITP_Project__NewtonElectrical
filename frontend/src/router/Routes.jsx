import React from 'react'
import {Route, Routes} from 'react-router-dom'
import AdminHome from '../Admin/AdminHome'
import Appointment from '../pages/appointment'
import Product from '../Admin/components/Product'
import UserManager from '../Admin/UserManager'
import UseContextProvider from '../context/UserContext'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Dialogs from '../pages/Dialogs'
import Home from '../pages/Home'
import ViewAppointments from '../Admin/pages/viewAppointments'


export default function PageRoutes() {
  return (
    <>
    <UseContextProvider>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/appointments' element={<Appointment/>}/>
      <Route path='/admin' element={<AdminHome/>}/>
      <Route path='/admin/product' element={<Product/>}/>
      <Route path='/admin/user' element={<UserManager/>}/>
      <Route path='/admin/appointments' element={<ViewAppointments/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dialog' element={<Dialogs/>}/>
    </Routes>
    </UseContextProvider>
    </>
  )
}
