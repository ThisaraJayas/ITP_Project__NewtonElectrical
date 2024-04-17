// Careers.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import jobImage2 from '../assets/images/job2.png';
import jobImage3 from '../assets/images/job3.png';
import jobImage4 from '../assets/images/Job4.png';
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
            <div className="mt-8">
                <div className="h-screen w-full overflow-hidden flex flex-nowrap text-center" id="slider">
                    <div className="flex-none w-full flex flex-col items-center justify-center">
                        <img src={jobImage2} alt="Image 1" className="slide-image" />
                        <h2 className="text-4xl max-w-md" style={{ color: 'rgb(249, 115, 22)' }}>Your Big Ideas</h2>
                        <p className="max-w-md" style={{ color: 'rgb(249, 115, 22)' }}>Wired for success? Join us at Newton Electricals and energize your career!</p>
                    </div>
                    <div className="flex-none w-full flex flex-col items-center justify-center">
                        <img src={jobImage3} alt="Image 2" className="slide-image" />
                        <h2 className="text-4xl max-w-md" style={{ color: 'rgb(249, 115, 22)' }}>Illuminate Your Potential</h2>
                        <p className="max-w-md" style={{ color: 'rgb(249, 115, 22)' }}>Join Newton Electricals and light up your career in an environment where creativity thrives</p>
                    </div>
                    <div className="flex-none w-full flex flex-col items-center justify-center">
                        <img src={jobImage4} alt="Image 3" className="slide-image" />
                        <h2 className="text-4xl max-w-md" style={{ color: 'rgb(249, 115, 22)' }}>Join Our Circuit of Excellence</h2>
                        <p className="max-w-md" style={{ color: 'rgb(249, 115, 22)' }}>Join Newton Electricals' innovative culture and shine with empowerment!</p>
                    </div>
                </div>
                <div className="text-center mt-8">
                <p className="text-xl font-semibold" style={{ color: 'rgb(37 99 235)' }}>Discover the power of possibility at Newton Electricals</p>
                {/* Button for Current Openings */}
                <div className="mb-8"></div>
                <Link to="/CareerOpenings">
                    <button className="current-openings-button">Current Openings</button>
                </Link>
            </div>
            <div className="mb-8"></div>
            </div>
            <Footer />
        </>
    );
};

export default Careers;

