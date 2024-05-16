import React, { useState, useEffect } from 'react';
import '../adminStyles/JobStatsCards.css'; // Corrected import path
import axios from 'axios';

const StatsCards = () => {
  const [statsData, setStatsData] = useState({
    postedJobs: 0,
    assignedJobs: 0,
    rejectedJobs: 0,
    completedJobs: 0
  });

  useEffect(() => {
    fetchStatsData();
  }, []);

  const fetchStatsData = async () => {
    try {
      // Fetch all job postings
      const jobResponse = await axios.get('https://itp-project-newton-api.vercel.app/jobs/read');
      const allJobs = jobResponse.data;
      const postedJobs = allJobs.length;
      console.log(postedJobs);
      // Fetch all CVs
      const cvResponse = await axios.get('https://itp-project-newton-api.vercel.app/cv/getcvs');
      const allCVs = cvResponse.data;

      // Get count of accepted and rejected jobs
      const assignedJobs = allCVs.filter(cv => cv.status === 'accepted').length;
      const rejectedJobs = allCVs.filter(cv => cv.status === 'rejected').length;
      console.log(assignedJobs);
      console.log(rejectedJobs);

      // Fetch the completed jobs count from the backend
      // const completedJobsResponse = await axios.get('http://localhost:3000/completedjobs/count');
      // const completedJobsCount = completedJobsResponse.data.completedJobsCount;

      // Update the state with fetched data
      setStatsData({
        postedJobs,
        assignedJobs,
        rejectedJobs,
        completedJobs: 0
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleIncrementCompletedJobs = async () => {
    try {
      // Increment the completed jobs count by 1
      const updatedCompletedJobs = statsData.completedJobs + 1;
      setStatsData(prevStatsData => ({
        ...prevStatsData,
        completedJobs: updatedCompletedJobs
      }));

      // Send a request to update the completed jobs count in the backend
      await axios.put('https://itp-project-newton-api.vercel.app/completedjobs/increment', { count: updatedCompletedJobs });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="stats-cards-container">
      {/* First Stats Container */}
      <div className="stats-card">
        <div className="stats-content bg-red-400">
          <p className="stats-title">Posted Jobs</p>
          <div className="stats-info">
            <p className="stats-label">TOTAL</p>
            <p className="stats-value">{statsData.postedJobs}</p>
          </div>
        </div>
      </div>
      {/* Second Stats Container */}
      <div className="stats-card">
        <div className="stats-content bg-blue-500">
          <p className="stats-title">Assigned Jobs</p>
          <div className="stats-info">
            <p className="stats-label">TOTAL</p>
            <p className="stats-value">{statsData.assignedJobs}</p>
          </div>
        </div>
      </div>
      {/* Third Stats Container */}
      <div className="stats-card">
        <div className="stats-content bg-purple-400">
          <p className="stats-title">Rejected Jobs</p>
          <div className="stats-info">
            <p className="stats-label">TOTAL</p>
            <p className="stats-value">{statsData.rejectedJobs}</p>
          </div>
        </div>
      </div>
      {/* Fourth Stats Container */}
      <div className="stats-card" onClick={handleIncrementCompletedJobs}>
        <div className="stats-content bg-purple-900">
          <p className="stats-title">Completed Jobs</p>
          <div className="stats-info">
            <p className="stats-label">TOTAL</p>
            <p className="stats-value">{statsData.completedJobs}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
