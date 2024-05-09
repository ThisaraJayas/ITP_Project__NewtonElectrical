import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart } from '@mui/x-charts/PieChart';
import Paper from '@mui/material/Paper';


export default function UserGenderPieChart() {
    const [maleCount, setMaleCount] = useState(0);
    const [femaleCount, setFemaleCount] = useState(0);

    useEffect(()=>{
        const fetchGender = async()=>{
            try {
                const response = await axios.get('https://itp-project-newton-api.vercel.app/user/users');
                const users = response.data.user
                const maleCount = users.filter(user=>user.gender==='male').length
                const femaleCount = users.filter(user=>user.gender==='female').length
                setMaleCount(maleCount)
                setFemaleCount(femaleCount)
            } catch (error) {
                console.error('Error fetching gender:', error);
            }
        }
        fetchGender()
        
    },[])
    

  return (
    <div>
    <Paper sx={{ width: 'fit-content',padding: '20px',marginTop: '30px', maxWidth: 'none',boxShadow: 3 }}>

    <PieChart
      series={[
        {
          data: [
            { id: 0, value: maleCount, label: 'Males' },
            { id: 1, value: femaleCount, label: 'Females' },
          ],
        },
      ]}
      width={410}
      height={280}
    />
    </Paper>
    </div>
  )
}
