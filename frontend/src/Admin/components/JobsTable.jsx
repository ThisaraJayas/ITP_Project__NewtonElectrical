import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import axios from 'axios';
import JobUpdate from './UpdateJob'; // Corrected import statement for UpdateJob
import DeleteJob from './DeleteJob'; // Corrected import statement for DeleteJob

export default function JobTable() {
    const columns = [
        {
            name: "Title",
            selector: row => row.title
        },
        {
            name: "Department",
            selector: row => row.department
        },
        {
            name: "Description",
            selector: row => row.description
        },
        {
            name: "Location",
            selector: row => row.location
        },
        {
            name: "Salary",
            selector: row => row.salary
        },
        {
            name: "Requirements",
            selector: row => row.requirements
        },
        {
            name: "Posted By",
            selector: row => row.postedBy
        },
        {
            name: "Posted Date",
            selector: row => row.postedDate
        },
        {
            name: "Edit",
            cell: (row) => <JobUpdate job={row} />,
            button: true,
        },
        {
            name: "Delete",
            cell: (row) => <DeleteJob jobId={row._id} />,
            button: true,
        }
    ];

    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/job'); // Update endpoint as per your backend routes
                setJobs(response.data); // Assuming the API returns an array of job objects directly
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching job data:', error);
            }
        };
        fetchData();
    }, []);

    // Add filtering logic if required
    const handleFilter = (event) => {
        const keyword = event.target.value.toLowerCase();
        const filteredData = jobs.filter(
            (job) =>
                job.title.toLowerCase().includes(keyword) ||
                job.department.toLowerCase().includes(keyword) ||
                job.description.toLowerCase().includes(keyword) ||
                job.location.toLowerCase().includes(keyword) ||
                job.salary.toLowerCase().includes(keyword) ||
                job.requirements.toLowerCase().includes(keyword) ||
                job.postedBy.toLowerCase().includes(keyword)
        );
        setFilteredJobs(filteredData);
    };

    return (
        <div className='mainTable'>
            <div className='text-right mb-4'>
                <input className='searchbox' type='text' placeholder='Search..' onChange={handleFilter} />
            </div>
            <DataTable columns={columns} data={filteredJobs.length > 0 ? filteredJobs : jobs} fixedHeader pagination />
        </div>
    );
}
