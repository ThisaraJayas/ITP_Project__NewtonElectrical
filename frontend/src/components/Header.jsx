import React, { useState } from 'react'
import '../styles/header.css'
import {Bars3BottomRightIcon,XMarkIcon} from '@heroicons/react/24/solid'
import image from '../assets/images/logo.png'

export default function Header() {
  const [isOpen, setisOpen] = useState(false)
  return (
    <header className='transition ease-linear duration-700 fixed w-full z-20 top-0 border-b'>
      <div className='bg-[#172554]'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-3'>
          <div className='mainSchedulebtn'>
            <button className='scheduleBtn'>Schedule Appointment</button>
          </div>
          <div className='mainCareerBtn'>
            <button className='careerBtn'>Careers</button>
          </div>
          <img className='rounded-full h-12 w-12 object-cover' src="https://i.pinimg.com/736x/b2/54/ea/b254ea1ec256b93c61aecb2aca62e277.jpg" alt='profile'/>
        </div>
      </div>
      <div className='shadow-md w-full'>
        <div className='md:px-10 py-0 px-7 md:flex justify-between items-center bg-white'>
            <div className='flex cursor-pointer items-center gap-2'>
              <img className='w-25 h-20' src={image}/>
            </div>
            <div onClick={()=>setisOpen(!isOpen)} className='w-7 h-7 absolute right-8 top-24 cursor-pointer md:hidden'>
              {
                isOpen?<XMarkIcon/>: <Bars3BottomRightIcon/>
              }
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-36':'top-[-490px]'}`}>
              <li className='my-7 md:my-0 md:ml-8'><a href='/'>Home</a></li>
              <li className='my-7 md:my-0 md:ml-8'><a href='/'>Service</a></li>
              <li className='my-7 md:my-0 md:ml-8'><a href='/'>New</a></li>
              
            </ul>
            <ul className='md:flex md:items-center'>
              <button className='scheduleBtn1 my-7 md:my-0 md:ml-8'>Schedule Appointment</button>
              <button className='careerBtn1 my-7 md:my-0 md:ml-8'>Careers</button>
            </ul>
          
        </div>
      </div>


    </header>
  )
}
