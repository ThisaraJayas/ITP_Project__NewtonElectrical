import React, { useEffect, useState } from 'react';
import '../adminStyles/UserManager.css';
import axios from 'axios';
import AllPackages from '../components/AllPackages';
import AddPackage from '../components/AddPackage';

export default function Package() {
  const [variable1, setVariable1] = useState(30);
  const [variable2, setVariable2] = useState(70);

  useEffect(() => {
    // Fetch data or set variables as needed
  }, []); // Add dependencies if necessary

  return (
    <div className='container pt-8 pl-8'>
      <div className='mainTitle'>
        <h3>Package Dashboard</h3>
      </div>
      <br />
      
      <AllPackages/>
      <br />
      <AddPackage/>
      {/* <ProjectTable /> */}
      
    </div>
  );
}

