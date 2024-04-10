import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import image from '../images/logo.png'

export default function SideBar() {
  return (
    <aside id='sidebar'>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
            <img src={image} className='w-35 h-25'/>
        </div>
        <span className='icon close_icon'>X</span>
      </div>
      <ul className='sidebar-list'>
      <Link to={'/admin'}>
        <li className='sidebar-list-item'>
            <BsCart3 className='icon'/> Dashboard
        </li>
        </Link>
        <Link to={'/admin/user'}>
        <li className='sidebar-list-item'>
            <BsCart3 className='icon'/>Users
        </li>
        </Link>
        <Link to={'/admin/product'}>
        <li className='sidebar-list-item'>
            <BsCart3 className='icon'/>Products
        </li>
        </Link>
        <Link to={'/admin/jobsManager'}>
        <li className='sidebar-list-item'>
            <BsCart3 className='icon'/>Jobs
        </li>
        </Link>
        <Link to={'/admin/project'}>
        <li className='sidebar-list-item'>
            <BsCart3 className='icon'/>Projects
        </li>
        </Link>
        <Link to={'/admin/item3'}>
        <li className='sidebar-list-item'>
            <BsCart3 className='icon'/>Reports
        </li>
        </Link>
        <Link to={'/admin/item4'}>
        <li className='sidebar-list-item'>
            <BsCart3 className='icon'/><span>Setting</span>
        </li>
        </Link>
      </ul>
    </aside>
  )
}
