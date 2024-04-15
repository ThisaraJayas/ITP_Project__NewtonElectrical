import React, { useEffect, useState } from 'react';
import '../adminStyles/UserManager.css';
import axios from 'axios';
import ProjectTable from '../components/ProjectTable';
import AddProject from '../components/AddProject';
import { PieChart } from 'react-minimal-pie-chart'; // Importing PieChart from react-minimal-pie-chart

export default function Projects() {
  const [variable1, setVariable1] = useState(30);
  const [variable2, setVariable2] = useState(70);

  useEffect(() => {
    // Fetch data or set variables as needed
  }, []); // Add dependencies if necessary

  return (
    <div className='container pt-8 pl-8'>
      <div className='mainTitle'>
        <h3>Project Dashboard</h3>
      </div>
      <br />
      
      <div style={{ width: '200px', height: '200px' , marginLeft: '450px'}}>
        <PieChart
          data={[
            { title: 'Variable 1', value: variable1, color: '#E38627' },
            { title: 'Variable 2', value: variable2, color: '#C13C37' },
          ]}
          label={({ dataEntry }) => dataEntry.title}
          labelStyle={{
            fontSize: '5px',
            fontFamily: 'sans-serif',
            fill: '#fff',
          }}
        />
       
      </div>
      <br />
      <AddProject />
      <ProjectTable />
    </div>
  );
}

