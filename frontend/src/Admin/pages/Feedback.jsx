import React, { useEffect, useState } from "react";
import axios from "axios";
import "../adminStyles/Feedback.css";


export default function Feedback() {
  const [feedback, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const feedback = await axios.get(
          `http://localhost:3000/feedbacks/feedback`
        );
        setFeedbacks(feedback.data.feedbacks);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFeedback();
  }, []);

  const deleteFeedback = async (feedbackId) => {
    try {
      await axios.delete(`http://localhost:3000/feedbacks/feedback/${feedbackId}`)
      window.location.reload();
        
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container pt-8 pl-8">
      <div className="tablecontainer">
      <table>
        <thead>
          <tr>
            <th>FeedbackId</th>
            <th>UserId</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Rating</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {feedback.map((feedback, index) => (
            <tr key={index}>
              <td>{feedback.feedbackId}</td>
              <td>{feedback.userId}</td>
              <td>{feedback.firstName}</td>
              <td>{feedback.email}</td>
              <td>{feedback.contactNumber}</td>
              <td>{feedback.feedback}</td>
              <td>
                <button
                  onClick={() => deleteFeedback(feedback.feedbackId)}
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
