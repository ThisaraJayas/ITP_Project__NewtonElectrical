import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../adminStyles/appointments.css';
import Header from '../components/Header';
import Footer from '../../components/Footer';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        console.log('Component rendered');
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        try {
            const response = await axios.get('http://localhost:3000/shedule/getappointments');
            console.log('Fetched appointments:', response.data.data);
            setAppointments(response.data.data);
        } catch (error) {
            console.error('Error fetching appointments:', error);
        }
    };

    const handleApprove = async (id) => {
        try {
            await axios.put(`http://localhost:3000/shedule/approve/appointments/${id}`, { status: 'approved' });
            fetchAppointments();
        } catch (error) {
            console.error('Error approving appointment:', error);
        }
    };

    const handleCancel = async (id) => {
        try {
            await axios.put(`http://localhost:3000/shedule/cancel/appointments/${id}`, { status: 'canceled' });
            fetchAppointments();
        } catch (error) {
            console.error('Error canceling appointment:', error);
        }
    };

    const downloadPDF = () => {
        const input = document.getElementById('appointmentsTable');
        input.style.transform = "scale(0.6)";
        input.style.transformOrigin = "top left";
    
        html2canvas(input, { scale: 1 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: "landscape",
            });
            pdf.addImage(imgData, 'PNG', 0, 0, 297, 210); // Adjust dimensions as necessary
            pdf.save("appointments.pdf");
    
            input.style.transform = ""; // Reset the style
        }).catch(err => {
            console.error('Error converting table to PDF', err);
            input.style.transform = ""; // Reset the style on error as well
        });
    };
    
    //serach function
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredAppointments = appointments.filter(appointment => {
        // Modify the fields below to match those you want to search by
        const select1 = appointment.select1 ? appointment.select1.toLowerCase() : '';
        const select2 = appointment.select2 ? appointment.select2.toLowerCase() : '';
    
        return select1.includes(searchTerm.toLowerCase()) || select2.includes(searchTerm.toLowerCase()) ||
               appointment.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
               appointment.address.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <>
            <Header/>
            <div style={{ fontSize: '28px', marginTop: '30px' }}>All Bookings</div>
            <input
                type="text"
                placeholder="Search Appointments"
                value={searchTerm}
                onChange={handleSearchChange}
                style={{ marginBottom: '20px',border:'2px solid' ,borderRadius:'45px',width:'300px', height:'30px' , marginLeft:'1000px' ,textAlign:'center' }}
            />
            <div className="appointments-table">
                <table id="appointmentsTable">
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
                    {filteredAppointments.map(appointment => (
                            <tr key={appointment._id}>
                                <td>{appointment.select1}/{appointment.select2}</td>
                                <td>{appointment.timeSlot}</td>
                                <td>{appointment.address}</td>
                                <td>Rs 15000</td>
                                <td>{appointment.description}</td>
                                <td>{appointment.status}</td>
                                <td>
                                    <button className="approve-btn" onClick={() => handleApprove(appointment._id)}>Approve</button>
                                    <button className="cancel-btn" onClick={() => handleCancel(appointment._id)}>Cancel</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={downloadPDF} style={{backgroundColor:'orangered', marginTop:'10px', width:'500px',height:'50px' ,marginLeft:'500px'}}>Download PDF</button>
            </div>
            <Footer/>
        </>
    );
};

export default Appointments;
