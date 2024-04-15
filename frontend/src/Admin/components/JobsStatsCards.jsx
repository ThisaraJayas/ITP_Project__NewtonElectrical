import React from 'react';
import '../adminStyles/JobStatsCards.css'; // Corrected import path

const StatsCards = () => {
  return (
    <div className="stats-cards-container">
      {/* First Stats Container */}
      <div className="stats-card">
        <div className="stats-content bg-red-400">
          <p className="stats-title">Posted Jobs</p>
          <div className="stats-info">
            <p className="stats-label">TOTAL</p>
            <p className="stats-value">20,456</p>
          </div>
        </div>
      </div>
      {/* Second Stats Container */}
      <div className="stats-card">
        <div className="stats-content bg-blue-500">
          <p className="stats-title">Assinged Jobs</p>
          <div className="stats-info">
            <p className="stats-label">TOTAL</p>
            <p className="stats-value">19,694</p>
          </div>
        </div>
      </div>
      {/* Third Stats Container */}
      <div className="stats-card">
        <div className="stats-content bg-purple-400">
          <p className="stats-title">Rejected Jobs</p>
          <div className="stats-info">
            <p className="stats-label">TOTAL</p>
            <p className="stats-value">711</p>
          </div>
        </div>
      </div>
      {/* Fourth Stats Container */}
      <div className="stats-card">
        <div className="stats-content bg-purple-900">
          <p className="stats-title">Completed Jobs</p>
          <div className="stats-info">
            <p className="stats-label">TOTAL</p>
            <p className="stats-value">0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
