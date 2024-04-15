import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jobImage from '../images/job1.png';
import axios from 'axios';

export default function AddJobsTable() {
  const [Title, setTitle] = useState("");
  const [Department, setDepartment] = useState("");
  const [Description, setDescription] = useState("");
  const [Location, setLocation] = useState("");
  const [Salary, setSalary] = useState("");
  const [Requirements, setRequirements] = useState("");
  const [PostedBy, setPostedBy] = useState("");
  const navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();
    alert("Successfully inserted.");

    const newJob = {
      title: Title,
      department: Department,
      description: Description,
      location: Location,
      salary: Salary,
      requirements: Requirements,
      postedBy: PostedBy
    };

    axios.post("http://localhost:3000/jobs/add", newJob)
      .then(() => {
        alert("Job added successfully.");
        navigate('/jobsTable');
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
      <div className="flex shadow-md">
        <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{ width: '50rem', height: '100%' }}>
          <div className="w-72" style={{ width: '45rem' }}>
            <h1 className="text-3xl font-semibold mb-2">Job Posting</h1>
            <small className="text-lg text-gray-400 mb-4">Please fill in the details</small>

            <form onSubmit={sendData} className="mt-4">
              <div className="flex justify-between mb-6">
                <div className="mr-4 w-1/2">
                  <label className="block text-sm font-semibold mb-2">Title</label>
                  <input type="text" placeholder="Job Title" value={Title} className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-2 px-3 text-lg text-gray-700" id='Title' onChange={(e) => { setTitle(e.target.value) }} />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-semibold mb-2">Department</label>
                  <input type="text" placeholder="Department" value={Department} className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-2 px-3 text-lg text-gray-700" id='Department' onChange={(e) => { setDepartment(e.target.value) }} />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Description</label>
                <textarea rows="4" placeholder="Job Description" value={Description} id='Description' className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-700 outline-none focus:border-purple-700 focus:shadow-md" style={{ height: '8rem', overflowY: 'auto' }} onChange={(e) => { setDescription(e.target.value) }}></textarea>
              </div>
              <div className="flex justify-between mb-6">
                <div className="mr-4 w-1/2">
                  <label className="block text-sm font-semibold mb-2">Location</label>
                  <input type="text" placeholder="Job Location"value={Location} className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-2 px-3 text-lg text-gray-700" id='Location' onChange={(e) => { setLocation(e.target.value) }} />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-semibold mb-2">Salary</label>
                  <input type="text" placeholder="Salary" value={Salary} className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-2 px-3 text-lg text-gray-700" id='Salary' onChange={(e) => { setSalary(e.target.value) }} />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Requirements</label>
                <textarea rows="4" placeholder="Job Requirements" value={Requirements} id='Requirements' className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-700 outline-none focus:border-purple-700 focus:shadow-md" style={{ height: '8rem', overflowY: 'auto' }} onChange={(e) => { setRequirements(e.target.value) }}></textarea>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Posted By</label>
                <input type="text" placeholder="Posted By" value={PostedBy} className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-2 px-3 text-lg text-gray-700" id='PostedBy' onChange={(e) => { setPostedBy(e.target.value) }} />
              </div>
              <div>
                <button className="mb-2 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 py-2 px-3 rounded-md">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-wrap content-center justify-center rounded-r-md" style={{ width: '24rem', height: '100%' }}>
          <img className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md" src={jobImage} alt="Job Banner" />
        </div>
      </div>
    </div>
  );
}
