import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Header from './Header';
import Footer from './Footer';


export default function PreviousProject() {

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
  return (
    <div className='pt-44'>
      
      <Header/>
      
    <div style={{width:"1300px"}}>
        <Card sx={{ display: 'flex', marginLeft: '20px', marginBottom: '40px' }}>
        <CardMedia
            component="img"
            height="100"
            image="public/uploads/1713002687461Untitled.jpeg"
            style={{ width: '900px', borderRadius: '10px'}}
            
        />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <CardContent>
                {records
                .filter((record) => record.status === "Previous")
                .map((record) => (
                    <div>
                        <Typography gutterBottom variant="h5" component="div">
                        {record.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {record.description}
                        </Typography>
                    </div>
                    
                    
                ))}
            </CardContent>
        </div>
        </Card>
    </div>

    


      <Footer/>
      
    </div>
    
  )
}
