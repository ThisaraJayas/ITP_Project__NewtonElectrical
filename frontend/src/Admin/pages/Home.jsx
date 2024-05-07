import React, { useState } from "react";
import Dialogs from "../../pages/Dialogs";
import Paper from "@mui/material/Paper";
import "../adminStyles/homeDashboard.css";
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div className="container pt-8 pl-8">
      <div className="">
        <Paper sx={{ width: 600, maxWidth: "100%", boxShadow: 6 }}>
          <div className="dashTitle">Welcome Back Administrator!</div>
        </Paper>
      </div>
      <div className="linksTitle mb-7">Quick Navigation</div>
      <div class="grid grid-cols-4 gap-4">
        <Link to={'/admin/user'}>
      <div className="dashcards">
        <div className="dashcardHead">
          <h3>Users</h3>
        </div>
      </div>
      </Link>
      <Link  to={'/admin/product'}>
      <div className="dashcards">
        <div className="dashcardHead">
          <h3>Products</h3>
        </div>
      </div>
      </Link>
      <Link  to={'/admin/jobsManager'}>
      <div className="dashcards">
        <div className="dashcardHead">
          <h3>Jobs</h3>
        </div>
      </div>
      </Link>
      <Link  to={'/admin/feedback'}>
      <div className="dashcards">
        <div className="dashcardHead">
          <h3>Feedbacks</h3>
        </div>
      </div>
      </Link>
      <Link  to={'/admin/packages'}>
      <div className="dashcards">
        <div className="dashcardHead">
          <h3>Packages</h3>
        </div>
      </div>
      </Link>
      <Link  to={'/admin/appointments'}>
      <div className="dashcards">
        <div className="dashcardHead">
          <h3>Appoinments</h3>
        </div>
      </div>
      </Link>
      </div>
      
    </div>
  );
}
