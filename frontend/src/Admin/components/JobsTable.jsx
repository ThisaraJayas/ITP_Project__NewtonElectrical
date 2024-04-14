import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import '../adminStyles/JobsTable.css';
import axios from 'axios';

export default function JobsTable() {
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
            cell: (row) => <UserUpdate title={row.title} />,
            button: true,
            minWidth: '120px'
        },
        {
            name: "Delete",
            cell: (row) => <DeleteUser title={row.title} />,
            button: true,
        },
    ];

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/jobs/read');
                setJobs(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching jobs data:', error);
            }
        };
        fetchData();
    }, []);

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

function DeleteUser({ title }) {
    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:3000/jobs/delete/${title}`);
            console.log("Job deleted successfully");
            window.location.reload();
        } catch (error) {
            console.error("Error deleting job:", error);
        }
    };

    return (
        <button onClick={handleDelete}>Delete {title}</button>
    );
}

function UserUpdate({ title }) {
    // Implement your logic for updating a job here
    return (
        <button>Edit {title}</button>
    );
}
