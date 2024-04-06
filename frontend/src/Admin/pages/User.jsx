import React, { useEffect, useState } from 'react'
import '../adminStyles/UserManager.css'
import { IoMdPerson } from "react-icons/io";
import { BsPersonHearts } from "react-icons/bs";
import UserTable from '../components/UserTable';
import axios from 'axios';
import UserGenderPieChart from '../charts/UserGenderPieChart';
import UserLocationBarChart from '../charts/UserLocationBarChart';


export default function User() {

    const [userCount, setUserCount]=useState(0)
    const [weeklyUserCount, setWeeklyUserCount] = useState(0)
    const [dailyUserCount, setDailyUserCount] = useState(0)
    const [monthlyUserCount, setMonthlyUserCount] = useState(0)

    useEffect(()=>{
        const fetchUserCount = async()=>{
            try{
                const response = await axios.get('http://localhost:3000/user/user-count')
                setUserCount(response.data.totalUsers)
                console.log(response);
            }catch(error){
                console.log(error);
            }
            
        }
        fetchUserCount()
    },[])

    useEffect(()=>{
        const weeklyUserCount = async()=>{
            try{
                const response = await axios.get('http://localhost:3000/user/weekly-user-count')
                setWeeklyUserCount(response.data.weeklyCount)
                console.log(response.data.weeklyCount);
            }catch(error){
                console.log(error);
            }
        }
        weeklyUserCount()
    },[])

    useEffect(()=>{
        const dailyUserCount = async()=>{
            try{
                const response = await axios.get('http://localhost:3000/user/daily-user-count')
                setDailyUserCount(response.data.dailyCount)
                console.log(response.data.dailyCount);
            }catch(error){
                console.log(error);
            }
        }
        dailyUserCount()
    },[])

    useEffect(()=>{
        const monthlyUserCount = async()=>{
            try{
                const response = await axios.get('http://localhost:3000/user/monthly-user-count')
                setMonthlyUserCount(response.data.montlyUser)
                console.log(response.data.montlyUser);
            }catch(error){
                console.log(error);
            }
        }
        monthlyUserCount()
    },[])
    
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
                    <h1>{userCount}</h1>
                </div>
                <div className='cards'>
                    <div className='cardHead'>
                        <h3>Monthly Users</h3>
                        <BsPersonHearts className='card_icon'/>
                    </div>
                    <h1>{monthlyUserCount}</h1>
                </div>
                <div className='cards'>
                    <div className='cardHead'>
                        <h3>Weekly Users</h3>
                        <BsPersonHearts className='card_icon'/>
                    </div>
                    <h1>{weeklyUserCount}</h1>
                </div>
                <div className='cards'>
                    <div className='cardHead'>
                        <h3>Daily Users</h3>
                        <BsPersonHearts className='card_icon'/>
                    </div>
                    <h1>{dailyUserCount}</h1>
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


            
            {/* <div className='flex justify-between mb-5'>
                <UserGenderPieChart/>
                <UserLocationBarChart/>
            </div> */}
            
            <UserTable/>
        </div>
  )
}
