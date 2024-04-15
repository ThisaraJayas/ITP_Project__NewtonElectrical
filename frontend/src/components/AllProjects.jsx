import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
// import { ServiceData } from "../constants";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxAccessibility,
  } from "react-icons/rx";


const AllProjects = () => {

    const [records, setRecords] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/project/projects');
                setRecords(response.data.readProject);
            } catch (error) {
                console.error('Error fetching project data:', error);
            }
        };
        fetchData();
    }, []);
    return (

      <div className="flex items-center justify-center flex-col h-[1200px]" style={{ background: "#1c77ac" }}> {/* bg :  background color changed to purple */}
      
      <h1 className="text-4xl text-white font-bold" style={{marginBottom: "50px"}}>Ongoing Projects</h1>
    
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
        {records
        .filter((item) => item.status === "Ongoing")
        .map((item) => (
          <SwiperSlide key={item.title}>
            <Link to="/ongoingProject" className="link-wrapper">
              <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(/public/uploads/${item.image})` }}
                />
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-3">
                  <RxCrop className="text-blue-600 group-hover:text-blue-400 w-[35px] h-[32px]"/>
                  <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                  <p className="lg:text-[18px]">{item.description} </p>
                </div>
                <RxArrowTopRight
                  className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100"
                />
              </div>
            </Link>
          </SwiperSlide>

        ))}
      </Swiper>

      <br />
      <h1 className="text-4xl text-white font-bold" style={{marginBottom: "50px"}}>Previous Projects</h1>
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
        {records
        .filter((item) => item.status === "Previous")
        .map((item) => (
          <SwiperSlide key={item.title}>
            <Link to="/previousProject" className="link-wrapper">
              <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(/public/uploads/${item.image})` }}
                />
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-3">
                  <RxCrop className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                  <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                  <p className="lg:text-[18px]">{item.description} </p>
                </div>
                <RxArrowTopRight
                  className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100"
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      );
    };

export default AllProjects;