import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../adminStyles/appointments.css';

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        try {
            // Dummy data for appointments
            const dummyData = [
                {
                    _id: 1,
                    select1: 'Option 1',
                    timeSlot: '2024-04-16T09:00:00',
                    address: '123 Main St',
                    description: 'Description for appointment 1'
                },
                {
                    _id: 2,
                    select1: 'Option 2',
                    timeSlot: '2024-04-17T10:00:00',
                    address: '456 Elm St',
                    description: 'Description for appointment 2'
                },
                {
                    _id: 3,
                    select1: 'Option 3',
                    timeSlot: '2024-04-18T11:00:00',
                    address: '789 Oak St',
                    description: 'Description for appointment 3'
                }
            ];

            setAppointments(dummyData);
        } catch (error) {
            console.error('Error fetching appointments:', error);
        }
    };

    const handleApprove = async (id) => {
        try {
            // Logic to approve appointment
        } catch (error) {
            console.error('Error approving appointment:', error);
        }
    };

    const handleCancel = async (id) => {
        try {
            // Logic to cancel appointment
        } catch (error) {
            console.error('Error canceling appointment:', error);
        }
    };

    return (
        <div className="appointments-table">
            <table>
                <thead>
                    <tr>
                        <th>Selected Options</th>
                        <th>Time Slot</th>
                        <th>Address</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => (
                        <tr key={appointment._id}>
                            <td>{appointment.select1}</td>
                            <td>{appointment.timeSlot}</td>
                            <td>{appointment.address}</td>
                            <td>Rs 15000</td>
                            <td>{appointment.description}</td>
                            <td>
                                <button className="approve-btn" onClick={() => handleApprove(appointment._id)}>Approve</button>
                                <button className="cancel-btn" onClick={() => handleCancel(appointment._id)}>Cancel</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Appointments;
