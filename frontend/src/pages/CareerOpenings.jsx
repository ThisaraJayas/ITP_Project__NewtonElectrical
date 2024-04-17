// Import necessary libraries
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Jobcard'; // Make sure to adjust the path if necessary

// Define the CareerOpenings component
const CareerOpenings = () => {
    // Define state to hold the job data
    const [jobs, setJobs] = useState([]);

    // Fetch job data from the backend
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/jobs/read');
                setJobs(response.data);
            } catch (error) {
                console.error('Error fetching jobs data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <Header />
            <div className="container mt-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {/* Map over the job data and render a Card component for each job */}
                    {jobs.map(job => (
                        <Card key={job._id} job={job} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CareerOpenings;
