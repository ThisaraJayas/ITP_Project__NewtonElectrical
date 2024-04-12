import React from 'react';

export default function JobsTable() {
  return (
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
      <div className="flex shadow-md">
        <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{ width: '50rem', height: '42rem' }}>
          <div className="w-[45rem]">
            <h1 className="text-3xl font-semibold mb-2">Job Posting</h1>
            <small className="text-lg text-gray-400 mb-4">Please fill in the details</small>
            <form className="mt-4">
              <div className="flex justify-between mb-6">
                <div className="mr-4 w-1/2">
                  <label className="block text-sm font-semibold mb-2">Title</label>
                  <input type="text" placeholder="Job Title" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-2 px-3 text-lg text-gray-700" />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-semibold mb-2">Department</label>
                  <input type="text" placeholder="Department" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-2 px-3 text-lg text-gray-700" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Description</label>
                <textarea rows="4" placeholder="Job Description" className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-700 outline-none focus:border-purple-700 focus:shadow-md" style={{ height: '5rem', overflowY: 'auto' }}></textarea>
              </div>
              <div className="flex justify-between mb-6">
                <div className="mr-4 w-1/2">
                  <label className="block text-sm font-semibold mb-2">Location</label>
                  <input type="text" placeholder="Job Location" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-2 px-3 text-lg text-gray-700" />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-semibold mb-2">Salary</label>
                  <input type="text" placeholder="Salary" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-2 px-3 text-lg text-gray-700" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Requirements</label>
                <textarea rows="4" placeholder="Job Requirements" className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-700 outline-none focus:border-purple-700 focus:shadow-md" style={{ height: '5rem', overflowY: 'auto' }}></textarea>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Posted By</label>
                <input type="text" placeholder="Posted By" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-2 px-3 text-lg text-gray-700" />
              </div>
              <div>
                <button className="mb-2 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 py-2 px-3 rounded-md">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-wrap content-center justify-center rounded-r-md" style={{ width: '24rem', height: '42rem' }}>
          <img className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md" src='./Admin/images/job1.png'alt="Job Banner" />
        </div>
      </div>
    </div>
  );
}
