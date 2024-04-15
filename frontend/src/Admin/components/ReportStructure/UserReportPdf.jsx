import React, { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from "axios";
import { Link } from "react-router-dom";
import '../../adminStyles/userReport.css'
import UserGenderPieChart from '../../charts/UserGenderPieChart'
import UserLocationBarChart from '../../charts/UserLocationBarChart'

export default function UserReportPdf() {
  const pdfRef = useRef();
  const [users, setUsers] = useState([]);

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

  const downloadPdf = () => {
    const input = pdfRef.current;
    const pdf = new jsPDF('p', 'pt', 'letter');

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgWidth = 612; // 8.5in * 72 (1in = 72pt)
      const imgHeight = canvas.height * imgWidth / canvas.width;

      let pdfHeight = imgHeight;
      let position = 0;

      const renderPage = () => {
        pdf.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight);
        pdfHeight -= 841.89; // 841.89pt = 11in * 72pt/in
        position -= 841.89;

        if (pdfHeight > 0) {
          pdf.addPage();
          renderPage();
        } else {
          pdf.save("userdetails.pdf");
        }
      };

      renderPage();
    });
  };

  return (
    <>
      <div className="generateReportBtnContainer">
        
          <button className="generateReportBtn" onClick={downloadPdf}>
            Download Report
          </button>
        
        <Link to={'/admin/user'}>
          <button className="returnbackBtn">Return Back</button>
        </Link>
      </div>

      <div ref={pdfRef}>
        <h1 className="userReportTitle">User Report</h1>
        <div className="userTable flex justify-center">
          <table>
            <thead>
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
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.userId}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.mobileNumber}</td>
                  <td>{user.address}</td>
                  <td>{user.district}</td>
                  <td>{user.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="">
        <h1 className="userReportTitle">User Graphs</h1>
          <div className="flex justify-center">
          <UserGenderPieChart/>
        <UserLocationBarChart/>
          </div>
        </div>
        
      </div>
    </>
  );
}
