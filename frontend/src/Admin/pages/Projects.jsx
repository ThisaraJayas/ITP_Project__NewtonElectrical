import React, { useEffect, useState } from 'react';
import '../adminStyles/UserManager.css';
import axios from 'axios';
import ProjectTable from '../components/ProjectTable';
import AddProject from '../components/AddProject';
import { PieChart } from 'react-minimal-pie-chart'; // Importing PieChart from react-minimal-pie-chart

export default function Projects() {
  const [ongoing, setOngoing] = useState(0);
  const [completed, setCompleted] = useState(0);

    useEffect(()=>{
        const fetchStatus = async()=>{
            try {
                const response = await axios.get('https://itp-project-newton-api.vercel.app/project/projects');
                const project = response.data.readProject
                const ongoing = project.filter(project=>project.status==='Ongoing').length
                const completed = project.filter(project=>project.status==='Previous').length
                setOngoing(ongoing)
                setCompleted(completed)
            } catch (error) {
                console.error('Error fetching project:', error);
            }
        }
        fetchStatus()
    },[])

  return (
    <div className='container pt-8 pl-8'>
      <div className='mainTitle'>
        <h3>Project Dashboard</h3>
      </div>
      <br />
      
      <div style={{ width: '200px', height: '200px' , marginLeft: '450px'}}>
        <PieChart
          data={[
            { title: 'Ongoing', value: ongoing, color: '#E38627' },
            { title: 'Completed', value: completed, color: '#C13C37' },
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

