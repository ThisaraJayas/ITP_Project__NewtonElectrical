import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
   const {userData} = useContext(UserContext)
   const navigate = useNavigate()

   useEffect(() => {
    if (!userData) {
      navigate('/login');
    }
  }, [userData, navigate]);

  return (
    <>
    <Header/>
    <div className='pt-12'>
    fd
    fdf
    dg
    </div>
    
    <Footer/>
    </>
    // <div>Home: {userData ? userData.userId : 'Loading...'}
    // </div>
  )
}
