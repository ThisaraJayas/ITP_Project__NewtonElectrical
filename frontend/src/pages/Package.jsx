import React, { useEffect, useState } from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from "axios";

export default function Package() {
  const [records, setRecords] = useState([]);
  const [selectedOption, setSelectedOption] = useState("monthly"); // Default selection

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/package/packages');
        setRecords(response.data.readPackage);
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };
    fetchData();
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div style={{marginTop:"30px"}}>
      <Header/>
      <div className="card-container" style={{marginTop:"30px"}}>
        <div>
          <label>
            <input
              type="radio"
              value="monthly"
              checked={selectedOption === "monthly"}
              onChange={handleOptionChange}
            />
            Monthly
          </label>
          <label>
            <input
              type="radio"
              value="annually"
              checked={selectedOption === "annually"}
              onChange={handleOptionChange}
            />
            Annually
          </label>
        </div>
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="max-w-[90%] lg:max-w-[80%]"
        >
          {records.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[100px] w-[200px] lg:h-[400px] lg:w-[250px] overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center border-blue-600 border" style={{backgroundColor:"#1260CC"}} />
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-3">
                  <h1 className="text-xl lg:text-2xl">{item.packageName}</h1>
                  <h3>Rs. {selectedOption === "monthly" ? item.monthlyPrice : item.annualPrice} - {selectedOption === "monthly" ? "Monthly" : "Annually"}</h3>
                  <p className="lg:text-[18px]">* {item.service1} </p>
                  <p className="lg:text-[18px]">* {item.service2} </p>
                  <p className="lg:text-[18px]">* {item.service3} </p>
                  <p className="lg:text-[18px]">* {item.service4} </p>
                  <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Pay Now</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Footer/>
    </div>
  )
}