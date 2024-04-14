import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import JobUpdate from './JobUpdate';
import '../adminStyles/JobsTable.css'

export default function JobsTable() {
    const [jobs, setJobs] = useState([]);
    
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
            cell: row => <JobUpdate {...row} fetchData={fetchData} />,
        },
        {
            name: "Delete",
            cell: row => <DeleteJob id={row._id} title={row.title} handleDelete={handleDelete} />,
        },
    ];

    return (
        <div className="text-gray-900 bg-gray-200">
            <div className="p-4 flex">
                <h1 className="text-3xl">
                    Jobs
                </h1>
            </div>
            <div className="px-3 py-4 flex justify-center">
                <DataTable
                    columns={columns}
                    data={jobs}
                    fixedHeader
                    pagination
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


