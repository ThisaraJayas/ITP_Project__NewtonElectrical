import React, { useState } from 'react';
import axios from 'axios';
import '../styles/appointment.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import picture from '../assets/images/app.jpg';

const AppointmentForms = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        select1: '',
        select2: '',
        description: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        province: '',
        zipcode: '',
        contactNum: '',
        ownProperty: false,
        timeSlot: new Date()
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleDateChange = (newDate) => {
        setFormData(prev => ({
            ...prev,
            timeSlot: newDate
        }));
    };

    const sendDataToDatabase = () => {
        axios.post('http://localhost:3000/shedule/', formData)
            .then(response => {
                console.log('Data sent successfully:', response.data);
                setSuccessMessage('Appointment confirmed successfully!');
                // Optionally, you can reset the form data here
            })
            .catch(error => {
                console.error('Error sending data:', error);
                // Optionally, you can show an error message to the user here
            });
    };

    return (
        <div className="centered-container">
            {step === 1 && <Form1 data={formData} handleChange={handleChange} />}
            {step === 2 && <Form2 data={formData} handleChange={handleChange} />}
            {step === 3 && <Form3 data={formData} handleChange={handleChange} />}
            {step === 4 && <Form4 data={formData} />}
            
            <div className="navigation-buttons">
                {step > 1 && <button onClick={handlePrevious}>Previous</button>}
                {step < 4 && <button onClick={handleNext}>Next</button>}
                {step === 4 && <button onClick={sendDataToDatabase}>Confirm Appointment</button>}
            </div>

            {successMessage && <p>{successMessage}</p>}
        </div>
    );
};

    const Form1 = ({ data, handleChange }) => {
        const [readOnlySelect1, setReadOnlySelect1] = useState(false);
        const [readOnlySelect2, setReadOnlySelect2] = useState(false);
    
        const handleSelect1Change = (e) => {
            const { value } = e.target;
            handleChange({ target: { name: 'select1', value } });
            setReadOnlySelect2(true); // Make select2 readonly
            setReadOnlySelect1(false); // Make select1 editable
        };
    
        const handleSelect2Change = (e) => {
            const { value } = e.target;
            handleChange({ target: { name: 'select2', value } });
            setReadOnlySelect1(true); // Make select1 readonly
            setReadOnlySelect2(false); // Make select2 editable
        };
    
        return (
            <form className="form">
                
                <div className="form-group">
                    <label htmlFor="select1" style={{fontSize:'32px'}}>Electrical:</label>
                    <select
                        id="select1"
                        name="select1"
                        value={data.select1}
                        onChange={handleSelect1Change}
                        disabled={readOnlySelect1}
                    >
                        <option value='powerIssue'>power issue</option>
                        <option value='switch/outlet'>switch/outlet</option>
                        <option value='rewiring'>rewiring</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="select2" style={{fontSize:'32px'}}>Cooling:</label>
                    <select
                        id="select2"
                        name="select2"
                        value={data.select2}
                        onChange={handleSelect2Change}
                        disabled={readOnlySelect2}
                    >
                        <option value='Air cooling improvement'>Air cooling improvement</option>
                        <option value='No cooling'>No cooling</option>
                        <option value='maintenance'>maintenance</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="description" style={{fontSize:'32px'}}>Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={data.description}
                        onChange={handleChange}
                    ></textarea>
                </div>
            </form>
        );
    };


    const Form2 = ({ data, handleChange }) => {
        return (
            <form className="form">
                
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" value={data.firstName} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" value={data.lastName} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" value={data.address} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" name="city" value={data.city} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="province">Province:</label>
                    <input type="text" id="province" name="province" value={data.province} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="zipcode">Zip Code:</label>
                    <input type="text" id="zipcode" name="zipcode" value={data.zipcode} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="mobile">contact number:</label>
                    <input type="text" id="contactNum" name="contactNum" value={data.contactNum} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="ownProperty">I own this residential property:</label>
                    <input type="checkbox" id="ownProperty" name="ownProperty" checked={data.ownProperty} onChange={handleChange} />
                </div>
            </form>
        );
    };

const Form3 = ({ data, handleChange }) => {
        const [date, setDate] = useState(new Date());
    
        const onChange = newDate => {
            setDate(newDate);
            handleChange({ target: { name: 'timeSlot', value: newDate } });
        };
    
        const handleTimeSlotChange = e => {
            handleChange(e); // Call the handleChange function to update the time slot in the parent component
        };
    
        return (
            <div className="calendar-container">
                <h2 style={{fontSize:'32px'}}>Select a Date and Time Slot</h2>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <Calendar
                        onChange={onChange}
                        value={date}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="timeSlot">Time Slot:</label>
                    <input
                        type="text"
                        id="timeSlot"
                        name="timeSlot"
                        value={data.timeSlot instanceof Date ? data.timeSlot.toLocaleString() : data.timeSlot}
                        onChange={handleTimeSlotChange}
                    />
                </div>
            </div>
        );
    };
    
 const Form4 = ({ data }) => {
        const selectedOption = data.select1 || data.select2;
    
        return (
            <div className="appointment-container">
                <div className="row">
                    <div className="column">
                        <img src={picture} alt="Image" height={400} width={400} />
                    </div>
                    <div className="column2">
                        <h1><b>CONFIRM YOUR APPOINTMENT</b></h1>
                        <h2>{selectedOption}</h2>
                        <div style={{marginTop:'40px'}}>
                        <h3><b>NAME-  {data.firstName} {data.lastName}</b></h3>
                        <br/>
                        
                        <h3><b>DATE-  {data.timeSlot instanceof Date ? data.timeSlot.toLocaleDateString() : data.timeSlot}</b></h3>
                        <br/>
                        <h3><b>PHONE-  {data.contactNum}</b></h3>
                        <br/>
                        <h3><b>CITY-  {data.city}</b></h3>
                        <br/>
                        <h3><b>PRICE-  Rs 15000</b></h3>
                        </div>  
                    </div>
                </div>
                
            </div>
        );
    };
    

export default AppointmentForms;