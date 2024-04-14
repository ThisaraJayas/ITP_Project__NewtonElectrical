import React, { useContext } from 'react'
import {BsFillBellFill, BsFillEnvelopeFill,BsPersonCircle,BsSearch,BsJustify} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'


export default function Header() {
  const {userData} = useContext(UserContext)

  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon'/>
        </div>
        <div className='header-left'>
        <Link to={'/'}><button className='homeBtn'> Go HomePage</button></Link>
        </div>
        <div className='header-right flex justify-end'>
            <Link to={'/profile'}><img className='rounded-full h-9 w-9 mr-4 object-cover' src={userData.avatar} alt='profile' /></Link>
        </div>
    </header>
  )
}
