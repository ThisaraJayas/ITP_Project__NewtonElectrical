import React, { useState } from 'react';
import '../styles/rescheduleForm.css'; // Import CSS file for styling

const RescheduleForm = ({ appointment, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        select1: appointment.select1,
        select2: appointment.select2,
        timeSlot: appointment.timeSlot,
        address: appointment.address,
        description: appointment.description,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(appointment._id, formData);
    };

    return (
        <div className="reschedule-form-container">
            <h2>Reschedule Appointment</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="select1">Selected Options:</label>
                    <input type="text" id="select1" name="select1" value={formData.select1} onChange={handleInputChange}  />
                </div>
                <div className="form-group">
                    <label htmlFor="timeSlot">Time Slot:</label>
                    <input type="text" id="timeSlot" name="timeSlot" value={formData.timeSlot} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" name="description" value={formData.description} onChange={handleInputChange} />
                </div>
                <div className="buttons">
                    <button type="submit" className="approve-btn">Save</button>
                    <button type="button" className="cancel-btn" onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default RescheduleForm;
