import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../adminStyles/Feedback.css";
import FeedbackStarBarChart from "../charts/FeedbackStarBarChart";

export default function Feedback() {
  const [feedback, setFeedbacks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const pdfRef = useRef();

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get("https://itp-project-newton-api.vercel.app/feedbacks/feedback");
        setFeedbacks(response.data.feedbacks);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFeedback();
  }, []);

  const deleteFeedback = async (feedbackId) => {
    try {
      await axios.delete(`https://itp-project-newton-api.vercel.app/feedbacks/feedback/${feedbackId}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

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
          pdf.save("feedback-details.pdf");
        }
      };

      renderPage();
    });
  };

  // Function to filter feedback based on search query
  const filteredFeedback = feedback.filter(feedbackItem =>
    Object.values(feedbackItem).some(val =>
      val.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="container pt-8 pl-8">
     <FeedbackStarBarChart/>
      <div className="flex justify-between">
        <div>
        <button onClick={downloadPdf} className="downloadPdfBtn">
        Download PDF
      </button>
        </div>
      
      <div className="search-container w-56">
      <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      </div>
      
      <div className="tablefeedbackcontainer" ref={pdfRef}>
        <table>
          <thead>
            <tr>
              <th>FeedbackId</th>
              <th>UserId</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact Number</th>
              <th>Rating</th>
              <th>Feedback Message</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredFeedback.map((feedbackItem, index) => (
              <tr key={index}>
                <td>{feedbackItem.feedbackId}</td>
                <td>{feedbackItem.userId}</td>
                <td>{feedbackItem.firstName}</td>
                <td>{feedbackItem.email}</td>
                <td>{feedbackItem.contactNumber}</td>
                <td>{feedbackItem.rating}</td>
                <td>{feedbackItem.feedback}</td>
                <td>
                  <button
                    onClick={() => deleteFeedback(feedbackItem.feedbackId)}
                    className="deleteBtn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
