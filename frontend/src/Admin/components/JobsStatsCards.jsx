import React from 'react';
import '../adminStyles/JobsStatsCards.css'; // Include .css extension

const StatsCards = () => {
  return (
    <div className="flex justify-center bg-gray-100 py-10 p-14">
      {/* First Stats Container */}
      <div className="container mx-auto pr-4">
        <div className="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
          <div className="h-20 bg-red-400 flex items-center justify-between">
            <p className="mr-0 text-white text-lg pl-5">Total Jobs</p>
          </div>
          <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
            <p>TOTAL</p>
          </div>
          <p className="py-4 text-3xl ml-5">4</p>
        </div>
      </div>
      {/* Second Stats Container */}
      <div className="container mx-auto pr-4">
        <div className="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
          <div className="h-20 bg-blue-500 flex items-center justify-between">
            <p className="mr-0 text-white text-lg pl-5">Assinged Jobs</p>
          </div>
          <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
            <p>TOTAL</p>
          </div>
          <p className="py-4 text-3xl ml-5">1</p>
        </div>
      </div>
      {/* Third Stats Container */}
      <div className="container mx-auto pr-4">
        <div className="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
          <div className="h-20 bg-purple-400 flex items-center justify-between">
            <p className="mr-0 text-white text-lg pl-5">Not Assinged Jobs</p>
          </div>
          <div className="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
            <p>TOTAL</p>
          </div>
          <p className="py-4 text-3xl ml-5">711</p>
        </div>
      </div>
      {/* Fourth Stats Container */}
      <div className="container mx-auto">
        <div className="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
          <div className="h-20 bg-purple-900 flex items-center justify-between">
            <p className="mr-0 text-white text-lg pl-5">Completed Jobs</p>
          </div>
          <div className="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
            <p>TOTAL</p>
          </div>
          <p className="py-4 text-3xl ml-5">0</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
