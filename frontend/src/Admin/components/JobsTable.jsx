// JobsTable.jsx
import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import '../adminStyles/JobsTable.css';
import { Link } from 'react-router-dom';

export default function JobsTable() {
    const [jobs, setJobs] = useState([]);

    // Define fetchData function
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/jobs/read');
            setJobs(response.data);
        } catch (error) {
            console.error('Error fetching jobs data:', error);
        }
    };

    useEffect(() => {
        // Call fetchData function when component mounts
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/jobs/delete/${id}`);
            console.log("Job deleted successfully");
            // Update the jobs state after deletion
            setJobs(prevJobs => prevJobs.filter(job => job._id !== id));
        } catch (error) {
            console.error("Error deleting job:", error);
        }
    };

    const columns =  [
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
            name: "Edit Job",
            cell: row => <Link to={`/edit/${row._id}`} className="edit-button">Edit</Link>, // Changed to use Link for navigation
        },
        {
            name: "Delete",
            cell: row => <DeleteJob id={row._id} title={row.title} handleDelete={handleDelete} />,
        },
    ];

    return (
        <div className="text-gray-900 bg-gray-200">
            <div className="p-4 flex">
                <h1 className="text-3xl">Jobs</h1>
            </div>
            <div className="px-3 py-4">
                {/* DataTable component with pagination */}
                <DataTable
                    columns={columns}
                    data={jobs}
                    pagination
                    paginationPerPage={10} // Number of rows per page
                    paginationRowsPerPageOptions={[10, 20, 30]} // Options for rows per page
                    striped
                    highlightOnHover
                />
            </div>
        </div>
    );
}

function DeleteJob({ id, title, handleDelete }) {
    return (
        <button className="delete-button" onClick={() => handleDelete(id)}>Delete {title}</button>
    );
}
