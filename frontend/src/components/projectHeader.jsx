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
        backgroundImage: 'url(public/uploads/17129988351387.jpg)', // Replace with your actual image URL
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
          LOREM IPSUM
        </Typography>
        <Typography variant="body1" style={{textAlign:"center"}}>
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
          galley of type and scrambled it to make a type specimen book.
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
