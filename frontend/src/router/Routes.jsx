import React from 'react'
import {Route, Routes} from 'react-router-dom'
import AdminHome from '../Admin/AdminHome'
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
import Store from '../pages/Store'
import ForgotPassword from '../components/ForgotPassword'
import ResetPassword from '../components/ResetPassword'
import UserReportPdf from '../Admin/components/ReportStructure/UserReportPdf'
import FeedbackManager from '../Admin/FeedbackManager'
import UpdateFeedback from '../components/feedback/UpdateFeedback'
import Project from '../pages/project'
import OngoingProject from '../components/OngoingProjects'
import PreviousProject from '../components/PreviousProject'
import AdminProjects from '../Admin/AdminProjects'
import AddJobsTable from '../Admin/components/AddJobsTable'
import AddJobsManager from '../Admin/AddJobsManager'




export default function PageRoutes() {
  return (
    <>
    <UseContextProvider>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      {/* <Route path='/projects' element={<Projects/>}/> */}
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
      <Route path='/admin/jobsManager/addsjob' element={<AddJobsManager/>}/>
      <Route path='/feedback' element={<Feedback/>}/>
      <Route path='/myfeedback' element={<MyFeedback/>}/>
      <Route path='/jobsTable' element={<JobsTable/>}/>
      <Route path='/edit/:id' element={<JobUpdate/>}/>
      {/* <Route path='/ongoingproject' element={<OngoingProject/>}/> */}
      <Route path='/store' element={<Store/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/reset-password/:id/:token' element={<ResetPassword/>}/>
      <Route path='/user-report' element={<UserReportPdf/>}/>
      <Route path='/admin/feedback' element={<FeedbackManager/>}/>
      <Route path='/feedback-update/:id' element={<UpdateFeedback/>}/>
      <Route path='/projects' element={<Project/>}/>
      <Route path='/ongoingProject' element={<OngoingProject/>}/>
      <Route path='/previousProject' element={<PreviousProject/>}/>
      <Route path='/admin/projects' element={<AdminProjects/>}/>

    </Routes>
    </UseContextProvider>
    </>
  )
}
