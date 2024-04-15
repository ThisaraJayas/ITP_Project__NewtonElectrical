import React, { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from "axios";
import '../../adminStyles/userReport.css'
import UserGenderPieChart from '../../charts/UserGenderPieChart'
import UserLocationBarChart from '../../charts/UserLocationBarChart'
import { Link } from "react-router-dom";

export default function UserReportPdf() {
  const pdfRef = useRef();
  const [users, setUsers] = useState([]);

  const downloadPdf = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      console.log("Canvas width:", canvas.width);
      console.log("Canvas height:", canvas.height);
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      console.log("PDF width:", pdfWidth);
      console.log("PDF height:", pdfHeight);
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      console.log("Ratio:", ratio);
      const scaledWidth = imgWidth * ratio;
      const scaledHeight = imgHeight * ratio;
      const imgX = (pdfWidth - scaledWidth) / 2;
      const imgY = 30;
      pdf.addImage(imgData, "PNG", imgX, imgY, scaledWidth, scaledHeight);
      pdf.save("userdetails.pdf");
    });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user/users");
        setUsers(response.data.user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  console.log(users);
  return (
    <>
    <div className="generateReportBtnContainer">
        <Link to={'/admin/user'}>
    <button className="generateReportBtn" onClick={downloadPdf}>
        Download Report
      </button>
      </Link>
      <Link to={'/admin/user'}>
    <button className="returnbackBtn">
        Return Back
      </button>
      </Link>
    </div>
    
      <div ref={pdfRef}>
        <h1 className="userReportTitle">User Report</h1>
    <div className="userTable flex justify-center">
        <table className="">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Address</th>
            <th>District</th>
            <th>Gender</th>
          </tr>
          {users.map((user, index) => (
            <tr key={index}>
              <td key={index}>{user.userId}</td>
              <td key={index}>{user.firstName}</td>
              <td key={index}>{user.lastName}</td>
              <td key={index}>{user.email}</td>
              <td key={index}>{user.mobileNumber}</td>
              <td key={index}>{user.address}</td>
              <td key={index}>{user.district}</td>
              <td key={index}>{user.gender}</td>
            </tr>
          ))}
        </table>
        </div>
        <div>
     
      </div>
      </div>
    </>
  );
}
