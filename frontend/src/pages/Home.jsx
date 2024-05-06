import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import "../styles/home.css";
import { BsSnow } from "react-icons/bs";
import FAQSection from '../components/FAQSection'
import Testimonial from '../components/Testimonial'

export default function Home() {
  const { userData } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!userData) {
      navigate('/login');
    }
  }, [userData, navigate]);

  return (
    <>
      <Header />
      <div className='pt-0'>
        <div className='homeContainer'>
          <div className='banner'>
            <div className='bannerSection'>
              <div className='bannerText'>
                <p className='title'>Home Comfort Experts for<br />
                  Cooling, Heating, Electrical,<br />
                  Security and Plumbing</p>
                <div className='btn ml-1'>
                  <Link to={'/appointments'}><button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-orange-600 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <span class="relative px-14 py-2.5 text-base transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Appointment
                    </span>

                  </button>
                  </Link>
                  <Link to={'/store'}><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-base font-medium rounded-lg px-7 py-3 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Store</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='serviceContainer'>
          <div className='services flex justify-between ml-8 mr-8'>
          <div className='service h-auto text-center flex flex-col items-center justify-center'>
              <BsSnow className=' mb-4 w-20 h-20' style={{ color: '#ffffff',fontSize: '30px', alignItems: 'center' }} />
              <p className='serviceText mb-5'>Cooling Services</p>
              <a href="#_" class="relative inline-flex items-center justify-start inline-block px-8 rounded-lg py-3 overflow-hidden font-bold  group">
                <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-orange-500 opacity-[3%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-orange-500 opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-left text-orange-500 transition-colors duration-200 ease-in-out group-hover:text-gray-900">Button Text</span>
                <span class="absolute inset-0 border-2 border-orange-500 rounded-lg"></span>
              </a>
            </div>
            {/* <span className='line'></span> */}
            <div className='service h-auto text-center flex flex-col items-center justify-center'>
              <BsSnow className=' mb-4 w-20 h-20' style={{ color: '#ffffff',fontSize: '30px', alignItems: 'center' }} />
              <p className='serviceText mb-5'>Cooling Services</p>
              <a href="#_" class="relative inline-flex items-center justify-start inline-block px-8 rounded-lg py-3 overflow-hidden font-bold  group">
                <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-orange-500 opacity-[3%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-orange-500 opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-left text-orange-500 transition-colors duration-200 ease-in-out group-hover:text-gray-900">Button Text</span>
                <span class="absolute inset-0 border-2 border-orange-500 rounded-lg"></span>
              </a>
            </div>
            <div className='service h-auto text-center flex flex-col items-center justify-center'>
              <BsSnow className=' mb-4 w-20 h-20' style={{ color: '#ffffff',fontSize: '30px', alignItems: 'center' }} />
              <p className='serviceText mb-5'>Cooling Services</p>
              <a href="#_" class="relative inline-flex items-center justify-start inline-block px-8 rounded-lg py-3 overflow-hidden font-bold  group">
                <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-orange-500 opacity-[3%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-orange-500 opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-left text-orange-500 transition-colors duration-200 ease-in-out group-hover:text-gray-900">Button Text</span>
                <span class="absolute inset-0 border-2 border-orange-500 rounded-lg"></span>
              </a>
            </div>
            <div className='service h-auto text-center flex flex-col items-center justify-center'>
              <BsSnow className=' mb-4 w-20 h-20' style={{ color: '#ffffff',fontSize: '30px', alignItems: 'center' }} />
              <p className='serviceText mb-5'>Cooling Services</p>
              <a href="#_" class="relative inline-flex items-center justify-start inline-block px-8 rounded-lg py-3 overflow-hidden font-bold  group">
                <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-orange-500 opacity-[3%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-orange-500 opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-left text-orange-500 transition-colors duration-200 ease-in-out group-hover:text-gray-900">Button Text</span>
                <span class="absolute inset-0 border-2 border-orange-500 rounded-lg"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <FAQSection/>
      <Testimonial/>
      <Footer />
    </>
  )
}
