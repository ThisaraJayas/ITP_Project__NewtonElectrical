import React from 'react'
import ProfileMenu from '../components/profile/ProfileMenu'
import UserAccount from '../components/profile/UserAccount'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Profile() {
    return (
        <>
        <Header/>
        <div className='pt-20 pl-6 flex lg:ml-4 lg:mr-16 sm:mx-4'>
            <ProfileMenu />
            <div className="flex-1">
                <UserAccount />
            </div>
        </div>
        <Footer/>
        </>
    )
}
