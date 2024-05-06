import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../adminStyles/Feedback.css";

export default function Feedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFeedbacks, setFilteredFeedbacks] = useState([]);
  const pdfRef = useRef();

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        let url = "http://localhost:3000/feedbacks/feedback";
        if (searchQuery) {
          url += `?search=${searchQuery}`;
        }
        const response = await axios.get(url);
        setFeedbacks(response.data.feedbacks);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFeedback();
  }, [searchQuery]);

  const deleteFeedback = async (feedbackId) => {
    try {
      await axios.delete(`http://localhost:3000/feedbacks/feedback/${feedbackId}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const downloadPdf = () => {
    const input = pdfRef.current;
    const pdf = new jsPDF('p', 'pt', 'letter');

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgWidth = 612; 
      const imgHeight = canvas.height * imgWidth / canvas.width;

      let pdfHeight = imgHeight;
      let position = 0;

      const renderPage = () => {
        pdf.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight);
        pdfHeight -= 841.89; 
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

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = feedbacks.filter((feedbackItem) =>
      feedbackItem.feedback.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredFeedbacks(filtered);
  }, [feedbacks, searchQuery]);

  return (
    <div className="container pt-8 pl-8">
      <div className="flex justify-between">
        <div>
        <button onClick={downloadPdf} className="downloadPdfBtn">
        Download PDF
      </button>
        </div>
      
      <div className="search-container w-56">
        <input
          type="text"
          placeholder="Search feedback..."
          value={searchQuery}
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
            {filteredFeedbacks.map((feedbackItem, index) => (
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
