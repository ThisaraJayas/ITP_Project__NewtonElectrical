import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const JobUpdate = () => {
  const [title, setTitle] = useState('');
  const [department, setDepartment] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [requirements, setRequirements] = useState('');
  const [postedBy, setPostedBy] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3000/jobs/${id}`)
      .then((response) => {
        const { title, department, description, location, salary, requirements, postedBy } = response.data;
        setTitle(title);
        setDepartment(department);
        setDescription(description);
        setLocation(location);
        setSalary(salary);
        setRequirements(requirements);
        setPostedBy(postedBy);
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        console.error('An error happened:', error);
      });
  }, [id]);

  const handleUpdate = () => {
    const updatedJob = {
      title,
      department,
      description,
      location,
      salary,
      requirements,
      postedBy
    };
    setLoading(true);
    axios.put(`http://localhost:3000/jobs/edit/${id}`, updatedJob)
      .then(() => {
        setLoading(false);
        console.log('Job updated successfully');
        navigate('/jobsTable');
       
      }).catch((error) => {
        setLoading(false);
        console.error('Error updating job:', error);
      });
  };

  return (
    <div>
      <h1>Edit Job</h1>
      {loading ? <div>Loading...</div> :  (
        <div>
          <div>
            <label htmlFor="title">Title:</label>
            <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <label htmlFor="department">Department:</label>
            <input id="department" type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <div>
            <label htmlFor="location">Location:</label>
            <input id="location" type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>
          <div>
            <label htmlFor="salary">Salary:</label>
            <input id="salary" type="text" value={salary} onChange={(e) => setSalary(e.target.value)} />
          </div>
          <div>
            <label htmlFor="requirements">Requirements:</label>
            <textarea id="requirements" value={requirements} onChange={(e) => setRequirements(e.target.value)}></textarea>
          </div>
          <div>
            <label htmlFor="postedBy">Posted By</label>
            <textarea id="postedBy" value={postedBy} onChange={(e) => setPostedBy(e.target.value)}></textarea>
          </div>
          <button className="edit-button" onClick={handleUpdate}>Update</button>
        </div>
      )}
    </div>
  );
};

export default JobUpdate;
