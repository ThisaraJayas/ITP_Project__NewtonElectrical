import React from 'react'
import {Route, Routes} from 'react-router-dom'
import AdminHome from '../Admin/AdminHome'
import Projects from '../pages/project/Project'
import Product from '../Admin/components/Product'
import UserManager from '../Admin/UserManager'
import UseContextProvider from '../context/UserContext'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Dialogs from '../pages/Dialogs'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import UserLocationBarChart from '../Admin/charts/UserLocationBarChart'
import UserPdf from '../components/UserPdf'
import JobsManager from '../Admin/JobsManager'
import Feedback from '../pages/Feedback'
import MyFeedback from '../components/feedback/MyFeedback'

import JobsTable from '../Admin/components/JobsTable'
import JobUpdate from '../Admin/components/JobUpdate'

import OngoingProject from '../pages/project/OngoingProject'
import Store from '../pages/Store'
import ForgotPassword from '../components/ForgotPassword'
import ResetPassword from '../components/ResetPassword'
import UserReportPdf from '../Admin/components/ReportStructure/UserReportPdf'
import FeedbackManager from '../Admin/FeedbackManager'
import UpdateFeedback from '../components/feedback/UpdateFeedback'




export default function PageRoutes() {
  return (
    <>
    <UseContextProvider>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/admin' element={<AdminHome/>}/>
      <Route path='/admin/product' element={<Product/>}/>
      <Route path='/admin/user' element={<UserManager/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dialog' element={<Dialogs/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/gender' element={<UserLocationBarChart/>}/>
      <Route path='/userpdf' element={<UserPdf/>}/>
      <Route path='/admin/jobsManager' element={<JobsManager/>}/>
      <Route path='/feedback' element={<Feedback/>}/>
      <Route path='/myfeedback' element={<MyFeedback/>}/>

      <Route path='/jobsTable' element={<JobsTable/>}/>
      <Route path='/edit/:id' element={<JobUpdate/>}/>


      <Route path='/ongoingproject' element={<OngoingProject/>}/>
      <Route path='/store' element={<Store/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/reset-password/:id/:token' element={<ResetPassword/>}/>
      <Route path='/user-report' element={<UserReportPdf/>}/>
      <Route path='/admin/feedback' element={<FeedbackManager/>}/>
      <Route path='/feedback-update/:id' element={<UpdateFeedback/>}/>


    </Routes>
    </UseContextProvider>
    </>
  )
}
