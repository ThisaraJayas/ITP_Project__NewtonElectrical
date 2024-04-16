import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import DeletePackage from "./DeletePackage";
import UpdatePackage from "./UpdatePackage";

export default function AllPackages() {
  const [records, setRecords] = useState([]);
  const pdfRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/package/packages");
        setRecords(response.data.readPackage);
      } catch (error) {
        console.error('Error fetching package data:', error);
      }
    };
    fetchData();
  }, []);

  const downloadPdf = () => {
    const input = pdfRef.current;
    const pdf = new jsPDF('p', 'pt', 'letter');

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgWidth = 612; // 8.5in * 72 (1in = 72pt)
      const imgHeight = canvas.height * imgWidth / canvas.width;

      let pdfHeight = imgHeight;
      let position = 0;

      const renderPage = () => {
        pdf.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight);
        pdfHeight -= 841.89; // 841.89pt = 11in * 72pt/in
        position -= 841.89;

        if (pdfHeight > 0) {
          pdf.addPage();
          renderPage();
        } else {
          pdf.save("packages.pdf");
        }
      };

      renderPage();
    });
  };

  return (
    <div>
      <button onClick={downloadPdf} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Download All Packages
</button>
      <div ref={pdfRef}>
        <div className="card-container" style={{ marginTop: "30px" }}>
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
                  <div className="absolute inset-0 bg-cover bg-center border-blue-600 border" style={{ backgroundColor: "#1260CC" }} />
                  <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                  <div className="relative flex flex-col gap-3">
                    <h1 className="text-xl lg:text-2xl">{item.packageName}</h1>
                    <h3>Rs. {item.monthlyPrice} - Monthly</h3>
                    <h3>Rs. {item.annualPrice} - Annually</h3>
                    <p className="lg:text-[18px]">* {item.service1}</p>
                    <p className="lg:text-[18px]">* {item.service2}</p>
                    <p className="lg:text-[18px]">* {item.service3}</p>
                    <p className="lg:text-[18px]">* {item.service4}</p>
                    <DeletePackage packageId={item._id} />
                    <UpdatePackage package_id={item._id} />
                  </div>
                  <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-black-500 group-hover:rotate-45 duration-100" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
