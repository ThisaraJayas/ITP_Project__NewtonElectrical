import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom';

export default function UserTable() {
    
    const columns = [
        {
            name: "First Name",
            selector: row => row.fullName
        },
        {
            name: "Last Name",
            selector: row => row.fullName
        },
        {
            name: "Email Address",
            selector: row => row.height
        },
        {
            name: "Gender",
            selector: row => row.weight
        },
        {
            name: "User Role",
            selector: row => row.weight
        },
        
        {
            name: "Edit Role",
            cell: (row) => <Link to={`/edit/${row.id}`} className='roleBtn'>Change Role</Link>,
            button: true,
            minWidth: '120px'
        },
        {
            name: "Delete",
            cell: (row) => <button className='deleteBtn'>Delete</button>,
            button: true,
        },
    ];
    const rows = [
        {
            id: 1,
            fullName: "John Doe",
            height: "1.75m",
            weight: "89kg",
        },
        {
            id: 2,
            fullName: "Jane Doe",
            height: "1.64m",
            weight: "55kg",
        },
        {
            id: 3,
            fullName: "Sheera Maine",
            height: "1.69m",
            weight: "74kg",
        },
        {
            id: 1,
            fullName: "John Doe",
            height: "1.75m",
            weight: "89kg",
        },
        {
            id: 2,
            fullName: "Jane Doe",
            height: "1.64m",
            weight: "55kg",
        },
        {
            id: 3,
            fullName: "Sheera Maine",
            height: "1.69m",
            weight: "74kg",
        },
        {
            id: 1,
            fullName: "John Doe",
            height: "1.75m",
            weight: "89kg",
        },
        {
            id: 2,
            fullName: "Jane Doe",
            height: "1.64m",
            weight: "55kg",
        },
        {
            id: 3,
            fullName: "Sheera Maine",
            height: "1.69m",
            weight: "74kg",
        },
        {
            id: 1,
            fullName: "John Doe",
            height: "1.75m",
            weight: "89kg",
        },
        {
            id: 2,
            fullName: "Jane Doe",
            height: "1.64m",
            weight: "55kg",
        },
        {
            id: 3,
            fullName: "Sheera Maine",
            height: "1.69m",
            weight: "74kg",
        },
        {
            id: 1,
            fullName: "John Doe",
            height: "1.75m",
            weight: "89kg",
        },
        {
            id: 2,
            fullName: "Jane Doe",
            height: "1.64m",
            weight: "55kg",
        },
        {
            id: 3,
            fullName: "Sheera Maine",
            height: "1.69m",
            weight: "74kg",
        },
        {
            id: 1,
            fullName: "John Doe",
            height: "1.75m",
            weight: "89kg",
        },
        {
            id: 2,
            fullName: "Jane Doe",
            height: "1.64m",
            weight: "55kg",
        },
        {
            id: 3,
            fullName: "Sheera Maine",
            height: "1.69m",
            weight: "74kg",
        },
    ];
    const [records, setRecords]=useState(rows)

    function handleFilter(event){
        const newData = rows.filter(row=>{
            return row.fullName.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
    }
    
    
  return (
    <div className='mainTable'>
        <div className='text-right mb-4'>
            <input className='searchbox' type='text' placeholder='Search..' onChange={handleFilter}/>
        </div>
        <DataTable
            columns={columns}
            data={records}
            fixedHeader
            pagination
        />
    </div>
  )
}
