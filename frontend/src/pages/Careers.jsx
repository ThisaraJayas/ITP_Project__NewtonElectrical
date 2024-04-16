// Careers.js

import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import jobImage2 from '../assets/images/job2.png';
import jobImage3 from '../assets/images/job3.png';
import jobImage4 from '../assets/images/job4.png';
import "../styles/Careers.css";

const Careers = () => {
    const [currentPosition, setCurrentPosition] = useState(0);

    useEffect(() => {
        const slider = document.querySelector('#slider');

        const slide = () => {
            const sliderWidth = slider.clientWidth;
            const slideCount = slider.children.length;
            const newPosition = currentPosition + sliderWidth;

            if (newPosition >= slideCount * sliderWidth) {
                setCurrentPosition(0);
            } else {
                setCurrentPosition(newPosition);
            }

            slider.scrollTo({
                left: currentPosition,
                behavior: 'smooth'
            });

            setTimeout(slide, 3000);
        };

        setTimeout(slide, 3000);
    }, [currentPosition]);

    return (
        <>
            <Header />
            <div className="h-screen w-full overflow-hidden flex flex-nowrap text-center" id="slider">
                <div className="bg-blue-600 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
                    <img src={jobImage2} alt="Image 1" className="max-w-full h-auto" />
                    <h2 className="text-4xl max-w-md">Your Big Ideas</h2>
                    <p className="max-w-md">Wired for success? Join us at Newton Electricals and energize your career!</p>
                </div>
                <div className="bg-pink-400 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
                    <img src={jobImage3} alt="Image 2" className="max-w-full h-auto" />
                    <h2 className="text-4xl max-w-md">Illuminate Your Potential</h2>
                    <p className="max-w-md">Join Newton Electricals and light up your career in an environment where creativity thrives</p>
                </div>
                <div className="bg-teal-500 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
                    <img src={jobImage4} alt="Image 3" className="max-w-full h-auto" />
                    <h2 className="text-4xl max-w-md">Join Our Circuit of Excellence</h2>
                    <p className="max-w-md">Join our team at Newton Electricals and be part of a culture that fosters innovation and empowers you to shine</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Careers;
