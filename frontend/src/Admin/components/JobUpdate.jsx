import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import jobImage from '../images/job1.png';

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
    axios.get(`http://localhost:3000/jobs/job/${id}`)
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
        alert('An error happened. Please check console');
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
        navigate('/JobsTable'); 
      }).catch((error) => {
        setLoading(false);
        console.error('Error updating job:', error);
      });
  };

  return (
    <div>
      <div className="flex flex-wrap  w-full content-center justify-center bg-gray-200 py-2">
        <div className="flex shadow-md">
          <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{ width: '50rem', height: '100%' }}>
            <div className="w-72" style={{ width: '45rem' }}>
              <h1 className="text-3xl mt-5  font-semibold mb-2">Edit Job</h1>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <div>
                  <div className="mb-6">
                    <label htmlFor="title" className="block text-sm font-semibold mb-2">Title</label>
                    <input type="text" placeholder="Job Title" value={title} className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-2 px-3 text-lg text-gray-700" id='title' onChange={(e) => { setTitle(e.target.value) }} />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="department" className="block text-sm font-semibold mb-2">Department</label>
                    <input type="text" placeholder="Department" value={department} className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-2 px-3 text-lg text-gray-700" id='department' onChange={(e) => { setDepartment(e.target.value) }} />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="description" className="block text-sm font-semibold mb-2">Description</label>
                    <textarea rows="4" placeholder="Job Description" value={description} id='description' className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-700 outline-none focus:border-purple-700 focus:shadow-md" style={{ height: '8rem', overflowY: 'auto' }} onChange={(e) => { setDescription(e.target.value) }}></textarea>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="location" className="block text-sm font-semibold mb-2">Location</label>
                    <input type="text" placeholder="Job Location" value={location} className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-2 px-3 text-lg text-gray-700" id='location' onChange={(e) => { setLocation(e.target.value) }} />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="salary" className="block text-sm font-semibold mb-2">Salary</label>
                    <input type="text" placeholder="Salary" value={salary} className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-2 px-3 text-lg text-gray-700" id='salary' onChange={(e) => { setSalary(e.target.value) }} />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="requirements" className="block text-sm font-semibold mb-2">Requirements</label>
                    <textarea rows="4" placeholder="Job Requirements" value={requirements} id='requirements' className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-700 outline-none focus:border-purple-700 focus:shadow-md" style={{ height: '8rem', overflowY: 'auto' }} onChange={(e) => { setRequirements(e.target.value) }}></textarea>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="postedBy" className="block text-sm font-semibold mb-2">Posted By</label>
                    <input type="text" placeholder="Posted By" value={postedBy} className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-2 px-3 text-lg text-gray-700" id='postedBy' onChange={(e) => { setPostedBy(e.target.value) }} />
                  </div>
                  <div>
                    <button className="mb-2 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 py-2 px-3 rounded-md" onClick={handleUpdate}>Update</button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-wrap content-center justify-center rounded-r-md" style={{ width: '24rem', height: '100%' }}>
          <img className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md" src={jobImage} alt="Job Banner" />
            {/* You can add the image here */}
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default JobUpdate;
