import React, { useState } from 'react'
import '../adminStyles/UserManager.css'
import { IoMdPerson } from "react-icons/io";
import { BsPersonHearts } from "react-icons/bs";
import UserTable from '../components/UserTable';


export default function User() {
    
  return (
        <div className='container pt-8 pl-8'>
            
            <div className='mainTitle'>
                <h3>User Dashboard</h3>
            </div>
            <div className='mainCards'>
                <div className='cards'>
                    <div className='cardHead'>
                        <h3>Total Users</h3>
                        <IoMdPerson className='card_icon'/>
                    </div>
                    <h1>349</h1>
                </div>
                <div className='cards'>
                    <div className='cardHead'>
                        <h3>Monthly Users</h3>
                        <BsPersonHearts className='card_icon'/>
                    </div>
                    <h1>200</h1>
                </div>
                <div className='cards'>
                    <div className='cardHead'>
                        <h3>Weekly Users</h3>
                        <BsPersonHearts className='card_icon'/>
                    </div>
                    <h1>110</h1>
                </div>
                <div className='cards'>
                    <div className='cardHead'>
                        <h3>Daily Users</h3>
                        <BsPersonHearts className='card_icon'/>
                    </div>
                    <h1>39</h1>
                </div>
            </div>
            {/* Section Two */}
            {/* <table>
                <thead>
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email Address</th>
                    <th>Gender</th>
                    <th>User Role</th>
                    <th>Edit Role</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Harry</td>
                    <td>Perera</td>
                    <td>harry@gmail.com</td>
                    <td>Female</td>
                    <td>Customer
                      
                    </td>
                    <td><button className='roleBtn'> Change Role</button></td>
                    <td><button className='deleteBtn'>Delete</button></td>

                    </tr>
                    <tr>
                    <td>Thisara</td>
                    <td>Jayasinghe</td>
                    <td>thisara@gmail.com</td>
                    <td>Male</td>
                    <td>Customer
                       
                    </td>
                    <td><button className='roleBtn'> Change Role</button></td>
                    <td><button className='deleteBtn'>Delete</button></td>

                    </tr>
                </tbody>
            </table> */}
            <UserTable/>
        </div>
  )
}
