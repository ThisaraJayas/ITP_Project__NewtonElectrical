// Import necessary libraries
import React from 'react';
import'../styles/CareerOpenings.css'

// Define the Card component
const Card = ({ job }) => {
    return (
        <div className="md:p-8 p-2 bg-gray-200 card-container">
            {/* Department */}
            <p className="text-indigo-500 font-semibold text-base mt-2">Department: {job.department}</p>
            {/* Title */}
            <h1 className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">{job.title}</h1>
            {/* Description */}
            <div className="max-w-full">
                <p className="text-base font-medium tracking-wide text-gray-600 mt-1">Description: {job.description}</p>
            </div>
            {/* Location */}
            <p className="text-base font-medium tracking-wide text-gray-600 mt-1">Location: {job.location}</p>
            {/* Salary */}
            <p className="text-base font-medium tracking-wide text-gray-600 mt-1">Salary: {job.salary}</p>
            {/* Requirements */}
            <p className="text-base font-medium tracking-wide text-gray-600 mt-1">Requirements: {job.requirements}</p>
            {/* Posted By and Upload CV button */}
            <div className="flex justify-between items-center mt-20">
                <div>
                    <p className="text-gray-900 font-semibold">Posted By: {job.postedBy}</p>
                    <p className="text-gray-500 font-semibold text-sm">Posted Date: {job.postedDate}</p>
                </div>
                <button className="upload-cv-button">Upload CV</button>
            </div>
        </div>
    );
};

export default Card;
