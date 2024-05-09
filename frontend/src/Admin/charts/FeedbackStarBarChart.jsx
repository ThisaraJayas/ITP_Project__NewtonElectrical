import React, { useEffect, useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import axios from 'axios';
import Paper from '@mui/material/Paper';

export default function FeedbackStarBarChart() {
    const [star1, setStar1] = useState(0);
    const [star2, setStar2] = useState(0);
    const [star3, setStar3] = useState(0);
    const [star4, setStar4] = useState(0);
    const [star5, setStar5] = useState(0);
    
    useEffect(() => {
        const fetchStars = async () => {
          try {
            const response = await axios.get('https://itp-project-newton-api.vercel.app/feedbacks/feedback');
            const feedback = response.data.feedbacks;
            setStar1(feedback.filter(feedback => feedback.rating === 1).length);
            setStar2(feedback.filter(feedback => feedback.rating === 2).length);
            setStar3(feedback.filter(feedback => feedback.rating === 3).length);
            setStar4(feedback.filter(feedback => feedback.rating === 4).length);
            setStar5(feedback.filter(feedback => feedback.rating === 5).length);
          } catch (error) {
            console.error('Error fetching feedback:', error);
          }
        };
    
        fetchStars();
      }, []);
    
  return (
    <div>
<Paper sx={{ width: 'fit-content',padding: '20px',marginTop: '30px',marginBottom: '30px', maxWidth: 'none',boxShadow: 3 }}>
      <BarChart
        width={520}
        height={280}
        series={[
          { data: [star1, star2, star3, star4, star5], label: 'Rating', id: 'feedbackId' },
        ]}
        xAxis={[{ data: ['Star1', 'Star2', 'Star3', 'Star4', 'Star5',], scaleType: 'band' }]}
        colors={['#f18100', '#f18100', '#f18100', '#f18100', '#f18100']}
      />
      </Paper>
    </div>
  )
}
