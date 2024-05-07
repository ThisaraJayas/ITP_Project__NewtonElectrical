import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/viewApp.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RescheduleForm from '../components/rescheduleFormAppointment';

const ViewAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [editingId, setEditingId] = useState(null); // To track which appointment is currently being edited

    useEffect(() => {
        console.log('Component rendered');
        fetchAppointments();
    }, []);

    useEffect(() => {
        console.log('Appointments state updated:', appointments);
    }, [appointments]);

    const fetchAppointments = async () => {
        try {
            const response = await axios.get('http://localhost:3000/shedule/getappointments');
            console.log('Fetched appointments:', response.data.data); // Accessing the appointments array inside the 'data' property
            setAppointments(response.data.data); // Setting the appointments array to the state
        } catch (error) {
            console.error('Error fetching appointments:', error);
        }
    };

    const handleEdit = (id) => {
        setEditingId(id); // Set the ID of the appointment being edited
    };

    const handleCancelEdit = () => {
        setEditingId(null); // Reset the editing ID
    };

    const handleSave = async (id, updatedData) => {
        try {
            // Send the updated data to the backend
            await axios.put(`http://localhost:3000/shedule/updateApp/${id}`, updatedData);
            console.log('Updated appointment with ID:', id);
            setEditingId(null); // Reset the editing ID after saving
            fetchAppointments(); // Refresh appointments after update
        } catch (error) {
            console.error('Error updating appointment:', error);
        }
    };
    
    //validation
    const handleDelete = async (id) => {
        try {
            const confirmDelete = window.confirm('Are you sure you want to delete this appointment?');
            if (confirmDelete) {
                // User confirmed deletion
                await axios.delete(`http://localhost:3000/shedule/deleteApp/${id}`);
                console.log('Deleted appointment with ID:', id);
                fetchAppointments(); // Refresh appointments after deletion
            } else {
                // User canceled deletion
                console.log('Deletion canceled');
            }
        } catch (error) {
            console.error('Error deleting appointment:', error);
        }
    };
    
    
    const handleInputChange = (id, field, value) => {
        // Find the appointment being edited by its ID
        const updatedAppointments = appointments.map(appointment => {
            if (appointment._id === id) {
                // Update the specific field with the new value
                return { ...appointment, [field]: value };
            }
            return appointment;
        });
        // Update the state with the modified appointments array
        setAppointments(updatedAppointments);
    };

    return (
        <>
            <Header/>
            <div className='Title'><center><h1><b>My Bookings</b></h1></center></div>
            <div className="appointments-table">
                <table>
                    <thead>
                        <tr>
                            <th>Selected Options</th>
                            <th>Time Slot</th>
                            <th>Address</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map(appointment => (
                            <tr key={appointment._id}>
                                {editingId === appointment._id ? (
                                    <RescheduleForm
                                        appointment={appointment}
                                        onSave={(id, updatedData) => handleSave(id, updatedData)}
                                        onCancel={handleCancelEdit}
                                    />
                                ) : (
                                    <>
                                        <td>{appointment.select1}/{appointment.select2}</td>
                                        <td>{appointment.timeSlot}</td>
                                        <td>{appointment.address}</td>
                                        <td>Rs 15000</td>
                                        <td>{appointment.description}</td>
                                        <td>{appointment.status}</td>
                                        <td>
                                            <button className="edit-btn" onClick={() => handleEdit(appointment._id)}>Reschedule</button>
                                            <button className="delete-btn" onClick={() => handleDelete(appointment._id)}>Delete</button>
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer/>
        </>
    );
};

export default ViewAppointments;
