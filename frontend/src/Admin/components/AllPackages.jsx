import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import DeletePackage from "./DeletePackage";
import UpdatePackage from "./UpdatePackage";

export default function AllPackages() {
  const [records, setRecords] = useState([]);
  const pdfRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://itp-project-newton-api.vercel.app/package/packages");
        setRecords(response.data.readPackage);
      } catch (error) {
        console.error('Error fetching package data:', error);
      }
    };
    fetchData();
  }, []);

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
          pdf.save("packages.pdf");
        }
      };

      renderPage();
    });
  };

  return (
    <div>
      <button onClick={downloadPdf} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Download All Packages
      </button>
      <div style={{ overflowX: "auto" }} ref={pdfRef}>
        <table style={{ width: "100%", whiteSpace: "nowrap", color: "black" }} className="table">
          <thead style={{ fontWeight: "bold" }}>
            <tr>
              <th>Package ID</th>
              <th>Package Name</th>
              <th>Monthly Price</th>
              <th>Annual Price</th>
              <th>Service 1</th>
              <th>Service 2</th>
              <th>Service 3</th>
              <th>Service 4</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((item) => (
              <tr key={item._id}>
                <td>{item.packageId}</td>
                <td>{item.packageName}</td>
                <td>{item.monthlyPrice}</td>
                <td>{item.annualPrice}</td>
                <td>{item.service1}</td>
                <td>{item.service2}</td>
                <td>{item.service3}</td>
                <td>{item.service4}</td>
                <td style={{ display: "flex" }}>
                  <DeletePackage packageId={item._id} />
                  <UpdatePackage package_id={item._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}