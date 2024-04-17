import React, { useContext, useEffect } from 'react'
import ProfileMenu from '../components/profile/ProfileMenu'
import UserAccount from '../components/profile/UserAccount'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const {userData} = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(()=>{
        if(userData===null){
            navigate('/login')
        }
    },[userData,navigate])

    return (
        <>
        <Header/>
        <div className='userAccountContainer'>
        <div className='pt-20 pl-6 flex lg:ml-4 lg:mr-16 sm:mx-4 '>
            <ProfileMenu />
            <div className="flex-1">
                <UserAccount />
            </div>
        </div>
        </div>
        <Footer/>
        </>
    )
}
