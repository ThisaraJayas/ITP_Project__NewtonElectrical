//Jobs.jsx

import React from 'react'
import JobsTable from '../components/JobsTable'
import JobsStatscards from '../components/JobsStatsCards'

export default function Jobs() {
  return (
    <div className='container pt-8 pl-8'>
 
      <div><JobsStatscards/></div>
      <div><JobsTable/></div>
        
      </div>
  );
}
