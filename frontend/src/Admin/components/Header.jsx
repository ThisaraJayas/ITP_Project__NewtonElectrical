import React from 'react'
import {BsFillBellFill, BsFillEnvelopeFill,BsPersonCircle,BsSearch,BsJustify} from 'react-icons/bs'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon'/>
        </div>
        <div className='header-left'>
        <Link to={'/'}><button className='homeBtn'> Go HomePage</button></Link>
        </div>
        <div className='header-right flex justify-end'>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
        </div>
    </header>
  )
}
