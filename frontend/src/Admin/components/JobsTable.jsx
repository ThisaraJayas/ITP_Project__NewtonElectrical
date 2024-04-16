import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../adminStyles/JobsTable.css';

export default function JobsTable() {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);

    // Define fetchData function
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/jobs/read');
            setJobs(response.data);
            setFilteredJobs(response.data);
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
            setFilteredJobs(prevJobs => prevJobs.filter(job => job._id !== id));
        } catch (error) {
            console.error("Error deleting job:", error);
        }
    };

    const handleFilter = (event) => {
        const searchText = event.target.value.toLowerCase();
        const newData = jobs.filter(row => (
            row.title.toLowerCase().includes(searchText) ||
            row.department.toLowerCase().includes(searchText) ||
            row.description.toLowerCase().includes(searchText) ||
            row.location.toLowerCase().includes(searchText) ||
            row.salary.toLowerCase().includes(searchText) ||
            row.requirements.toLowerCase().includes(searchText) ||
            row.postedBy.toLowerCase().includes(searchText)
        ));
        setFilteredJobs(newData);
    };

    const columns = [
        {
            name: "Title",
            selector: row => row.title,
            minWidth: "50px"
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
            selector: row => row.postedBy,
            minWidth: "90px",
        },
        {
            name: "Posted Date",
            selector: row => row.postedDate
        },
        {
            name: "Edit Job",
            cell: row => <Link to={`/admin/jobsManager/edit/${row._id}`} className="edit-button">Edit</Link>,
            minWidth: '50px'
        },
        {
            name: "Delete",
            cell: row => <DeleteJob id={row._id} title={row.title} handleDelete={handleDelete} />,
            minWidth: '120px'
        },
    ];

    return (
        <div className="text-gray-900 bg-gray-200">
            <div className="p-4 flex justify-between items-center">
                <h1 className="text-3xl">Jobs</h1>
                <div className="flex items-center">
                    <div className="ml-4">
                        <Link to="/admin/jobsManager/addsjob" className="top-left-button">Add a Job</Link>
                    </div>
                    <div className="ml-4">
                        <input className='searchbox px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500' type='text' placeholder='Search..' onChange={handleFilter} />
                    </div>
                </div>
            </div>
            <div className="px-3 py-4">
                <DataTable
                    columns={columns}
                    data={filteredJobs}
                    pagination
                    paginationPerPage={10}
                    paginationRowsPerPageOptions={[10, 20, 30]}
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
