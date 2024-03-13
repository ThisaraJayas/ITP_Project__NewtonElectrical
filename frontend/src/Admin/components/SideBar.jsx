import React from 'react'
import { BsCart3 } from 'react-icons/bs'

export default function SideBar() {
  return (
    <aside id='sidebar'>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
            <BsCart3 className='icon_header'/>SHOP
        </div>
        <span className='icon close_icon'>X</span>
      </div>
      <ul className='sidebar-list'>
        <a href=''>
        <li className='sidebar-list-item'>
          
            <BsCart3 className='icon'/><a href="">  Dashboard
          </a>
        </li>
        </a>
        <li className='sidebar-list-item'>
          <a href="">
            <BsCart3 className='icon'/>Products
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsCart3 className='icon'/>Categories
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsCart3 className='icon'/>Customers
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsCart3 className='icon'/>Inventory
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsCart3 className='icon'/>Reports
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsCart3 className='icon'/><span>Setting</span>
          </a>
        </li>
      </ul>
    </aside>
  )
}
