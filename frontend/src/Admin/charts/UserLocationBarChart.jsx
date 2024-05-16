import React, { useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import axios from 'axios';
import Paper from '@mui/material/Paper';

export default function UserLocationBarChart() {
  const [colombo, setColombo] = useState(0);
  const [galle, setGalle] = useState(0);
  const [kandy, setKandy] = useState(0);
  const [gampaha, setGampaha] = useState(0);
  const [kalutara, setKalutara] = useState(0);
  const [matara, setMatara] = useState(0);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://itp-project-newton-api.vercel.app/user/users');
        const users = response.data.user;
        setColombo(users.filter(user => user.district === 'Colombo').length);
        setGalle(users.filter(user => user.district === 'Galle').length);
        setKandy(users.filter(user => user.district === 'Kandy').length);
        setGampaha(users.filter(user => user.district === 'Gampaha').length);
        setKalutara(users.filter(user => user.district === 'Kalutara').length);
        setMatara(users.filter(user => user.district === 'Matara').length);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
    <Paper sx={{ width: 'fit-content',padding: '20px',marginTop: '30px', maxWidth: 'none',boxShadow: 3 }}>
      <BarChart
        width={520}
        height={280}
        series={[
          { data: [colombo, galle, kandy, gampaha, kalutara, matara], label: 'Users', id: 'usersId' },
        ]}
        xAxis={[{ data: ['Colombo', 'Galle', 'Kandy', 'Gampaha', 'Kalutara', 'Matara'], scaleType: 'band' }]}
      />
      </Paper>
    </div>
  );
}