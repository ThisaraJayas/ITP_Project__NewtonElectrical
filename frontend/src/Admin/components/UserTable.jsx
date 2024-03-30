import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import UserUpdate from './UserUpdate';
import axios from 'axios'
import DeleteUser from './DeleteUser';


export default function UserTable() {
    const columns =  [
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
            cell: (row) =><UserUpdate userId={row._id}/>,
            button: true,
            minWidth: '120px'
        },
        {
            name: "Delete",
            cell: (row) => <DeleteUser userId={row._id}/>,
            button: true,
        },
    ];
   const [records, setRecords]=useState([])

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const response = await axios.get('http://localhost:3000/user/users');
                setRecords(response.data.user);
                console.log(response.data.user);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }
        fetchData()
        
    },[])

    

    function handleFilter(event){
        console.log("Filtering...");
        const newData = records.filter(row => {
            return (
                row.firstName.toLowerCase().includes(event.target.value.toLowerCase()) ||
                row.lastName.toLowerCase().includes(event.target.value.toLowerCase()) ||
                row.email.toLowerCase().includes(event.target.value.toLowerCase()) ||
                row.userType.toLowerCase().includes(event.target.value.toLowerCase())
            );
        });
        console.log("Filtered data:", newData);
        setRecords(newData);
    }


    
    return (
        <div className='mainTable'>
            <div className='text-right mb-4'>
                <input className='searchbox' type='text' placeholder='Search..' onChange={handleFilter} />
            </div>
            <DataTable
                columns={columns}
                data={records}
                fixedHeader
                pagination
            />
        </div>
    );
}
