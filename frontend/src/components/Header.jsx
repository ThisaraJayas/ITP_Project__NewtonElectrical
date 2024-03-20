import React, { useState } from 'react'
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import image from '../assets/images/logo.png'
import '../styles/header.css'

export default function Header() {
    let Links =[
        {name:"HOME",link:"/"},
        {name:"SERVICE",link:"/"},
        {name:"ABOUT",link:"/"},
        {name:"CONTACT",link:"/"},
    ];
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='bg-[#172554] shadow-md w-full fixed top-0 left-0 z-50'> {/* Modified z-index to 50 */}
                <div className='max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-2'>
                    <div className='mainLoginbtn'>
                        <button className='loginBtn font-semibold'>Sign Up</button>
                    </div>
                    <div className='mainRegBtn'>
                        <button className='registerBtn font-semibold'>Login</button>
                    </div>
                    <img className='rounded-full h-9 w-9 object-cover' src="https://i.pinimg.com/736x/b2/54/ea/b254ea1ec256b93c61aecb2aca62e277.jpg" alt='profile'/>
                </div>
            </div>
            <div className='shadow-md w-full fixed top-12 left-0 z-40'> {/* Modified z-index to 40 */}
                <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                    {/* logo section */}
                    <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                        <img className='w-15 h-10' src={image} alt='logo'/>
                    </div>
                    {/* Menu icon */}
                    <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                        {
                            open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                        }
                    </div>
                    {/* link items */}
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                        {Links.map((link, index) => (
                            <li key={index} className='md:ml-8 md:my-0 my-7 font-semibold'>
                                <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                            </li>
                        ))}
                        <button className='btn bg-orange-500 text-white md:ml-8 font-semibold px-4 py-3 rounded-lg duration-500 md:static '>Schedule Appointment</button>
                        <button className='btn bg-blue-600 text-white md:ml-4 font-semibold px-4 py-3 rounded-lg duration-500 md:static'>Careers</button>
                    </ul>
                    {/* button */}
                </div>
            </div>
            {/* Add padding to the content area to start below the header */}
            <div className="pt-20"> {/* Adjust the value according to your header height */}
                {/* Your page content goes here */}
            </div>
        </>
    )
}