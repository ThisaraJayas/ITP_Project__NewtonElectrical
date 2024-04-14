import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import UserUpdate from './UserUpdate';
import axios from 'axios';
import DeleteUser from './DeleteUser';
import { Link } from 'react-router-dom';
import '../adminStyles/userReport.css'

export default function UserTable() {
    const columns = [
        {
            name: "User Id",
            selector: row => row.userId
        },
        {
            name: "First Name",
            selector: row => row.firstName
        },
        {
            name: "Last Name",
            selector: row => row.lastName
        },
        {
            name: "Email Address",
            selector: row => row.email
        },
        {
            name: "Gender",
            selector: row => row.gender
        },
        {
            name: "User Role",
            selector: row => row.userType
        },
        {
            name: "Edit Role",
            cell: (row) => <UserUpdate userId={row.userId} />,
            button: true,
            minWidth: '120px'
        },
        {
            name: "Delete",
            cell: (row) => <DeleteUser userId={row.userId} />,
            button: true,
        },
    ];
    const [records, setRecords] = useState([]);
    const [filteredRecords, setFilteredRecords] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/user/users');
            setRecords(response.data.user);
            setFilteredRecords(response.data.user);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    function handleFilter(event) {
        const newData = records.filter(row => {
            return (
                row.firstName.toLowerCase().includes(event.target.value.toLowerCase()) ||
                row.lastName.toLowerCase().includes(event.target.value.toLowerCase()) ||
                row.email.toLowerCase().includes(event.target.value.toLowerCase()) ||
                row.userType.toLowerCase().includes(event.target.value.toLowerCase())
            );
        });
        setFilteredRecords(newData);
    }

    return (
        <div className='mainTable'>
            <div className='text-right mb-4 flex justify-between'>
                <div>
                    <Link to={'/user-report'}><button className='userTableGenerateReport'>Generate Report</button></Link>
                </div>
                <div>
                <input className='searchbox px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500' type='text' placeholder='Search..' onChange={handleFilter} />
                </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <DataTable
                    columns={columns}
                    data={filteredRecords}
                    fixedHeader
                    pagination
                    customStyles={{
                        headRow: {
                            style: {
                                backgroundColor: '#1976d2',
                                color: '#FFFFFF',
                                fontWeight: 'bold',
                                fontSize: '14px',
                            },
                        },
                        rows: {
                            style: {
                                '&:nth-child(even)': {
                                    backgroundColor: '#f3f4f6',
                                },
                                '&:nth-child(odd)': {
                                    backgroundColor: '#FFFFFF',
                                },
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
}
