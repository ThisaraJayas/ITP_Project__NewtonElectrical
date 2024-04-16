import React from "react";
import Header from './components/Header'

import Appointments from "./components/appointments";
import SideBar from './components/SideBar'

function ViewAppointments(){
    return(
        <>
    <div className='backgroundBody'>
    <div className='grid-container'>
        <Header/>
        <SideBar/>
        <Appointments/>
    </div>
    </div>
    </>
    )
}
 
export default ViewAppointments;