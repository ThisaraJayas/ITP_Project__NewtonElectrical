import React, { useState } from 'react';
import axios from 'axios';

export default function JobUpdate({ _id, title, department, description, location, salary, requirements, postedBy, fetchData }) {
    const [updatedJob, setUpdatedJob] = useState({
        title,
        department,
        description,
        location,
        salary,
        requirements,
        postedBy
    });

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:3000/jobs/edit/${_id}`, updatedJob);
            console.log("Job updated successfully");
            fetchData(); // Fetch data again to update the table
        } catch (error) {
            console.error("Error updating job:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedJob(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="update-form">
            <h3>Edit Job</h3>
            <div>
                <label>Title:</label>
                <input type="text" name="title" value={updatedJob.title} onChange={handleChange} />
            </div>
            <div>
                <label>Department:</label>
                <input type="text" name="department" value={updatedJob.department} onChange={handleChange} />
            </div>
            <div>
                <label>Description:</label>
                <textarea name="description" value={updatedJob.description} onChange={handleChange}></textarea>
            </div>
            <div>
                <label>Location:</label>
                <input type="text" name="location" value={updatedJob.location} onChange={handleChange} />
            </div>
            <div>
                <label>Salary:</label>
                <input type="text" name="salary" value={updatedJob.salary} onChange={handleChange} />
            </div>
            <div>
                <label>Requirements:</label>
                <textarea name="requirements" value={updatedJob.requirements} onChange={handleChange}></textarea>
            </div>
            <div>
                <label>Posted By:</label>
                <input type="text" name="postedBy" value={updatedJob.postedBy} onChange={handleChange} />
            </div>
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
}
