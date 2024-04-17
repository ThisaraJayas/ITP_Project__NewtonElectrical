import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';




export default function ProjectHeader() {
    const [completedProjects, setCompletedProjects] = useState(0);
    const [ongoingProjects, setOngoingProjects] = useState(0);
    const [records, setRecords] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/project/projects');
                setRecords(response.data.readProject);
            } catch (error) {
                console.error('Error fetching project data:', error);
            }
        };
        fetchData();
    }, []);

    console.log(records);

    useEffect(() => {
        records.forEach((record) => {
            if (record.status === 'Previous') {
                setCompletedProjects((prev) => prev + 1);
            } else if (record.status === 'Ongoing') {
                setOngoingProjects((prev) => prev + 1);
            }
        });
    }, [records]);
  
  return (
    <div>
      <Card
      style={{
        backgroundImage: 'url(public/uploads/Project-Management-Banner-c.png)', 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '300px', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff', // Text color
      }}
    >
      <CardContent style={{alignItems:"center"}}>
        <Typography variant="h4" gutterBottom style={{textAlign:"center"}}>
          
        </Typography>
        <Typography variant="body1" style={{textAlign:"center"}}>
          
        </Typography>
      </CardContent>
      <div style={{ backgroundColor: 'navy', color: 'white', padding: '10px' }}>
      <span style={{ marginRight: '50px' }}>
        {completedProjects} Completed Projects
      </span>
      <span>
        {ongoingProjects} Ongoing Projects
      </span>
    </div>
    </Card>

    
    </div>
    
  )
}
