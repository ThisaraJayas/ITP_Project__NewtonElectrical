import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppointmentForms from "../components/appointment_add";
import Banner from "../components/app_banner";

function Appointment(){
    return(
        <>
        <Header/>
        {/* <Banner/> */}
        <AppointmentForms/>

        <Footer/>
        </>

    )
}

export default Appointment;