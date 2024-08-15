import React from "react";
import { FaSmile, FaUsers, FaBook, FaChalkboardTeacher, FaGraduationCap } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import "./hero.css";
import landing from "../../../assets/landing-image.png";

function Hero() {
    const navigate = useNavigate();

    const handleReadMoreClick = () => {
        window.scrollTo(0, 0);
        navigate('/About');
    };

    const handleContactNowClick = () => {
        window.scrollTo(0, 0);
        navigate('/Contact');
    };

    return (
        <div>
            {/* Background image */}
            <div className="relative w-full h-[95vh] lg:h-[110vh] bg-black">
                <img
                    src={landing}
                    loading="lazy"
                    alt="landing"
                    className="w-full h-full object-cover blur-[0.7px]"
                />

                <div className="absolute inset-0 bg-black opacity-60 z-10"></div> {/* dark overlay */}

                {/* Hero content */}
                <div className="absolute px-4 sm:px-10 lg:pl-20 lg:pr-[45vw] top-[25%] left-0 z-20">
                    <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-[3.8rem] leading-tight sm:leading-snug lg:leading-[4.5rem]">
                        Take The <span className="text-orange-400">Best</span> JLPT <br /><span className="text-orange-400">Courses</span> in Kolkata, Online & Offline
                    </h1>
                    <p className="text-white pt-4 text-base lg:text-lg leading-relaxed sm:leading-normal lg:leading-[1.8]">
                        Boost your career with Yume Japanese Language School, the top choice in South Kolkata for learning Japanese. Our expert teachers make mastering the language fun and easy. Open up global opportunities and get the skills you need to succeed in today’s world.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="read-button shadow-xl" onClick={handleReadMoreClick}>Read More</button>

                        <button className="btn-con shadow-xl" onClick={handleContactNowClick}>
                            Contact Now
                            <div className="arrow-wrapper-con">
                                <div className="arrow-con"></div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <StatsSection />
        </div>
    );
}

function StatsSection() {
    const stats = [
        { icon: <FaGraduationCap size={38} />, number: '200 +', label: 'HAPPY STUDENTS' },
        { icon: <FaUsers size={38} />, number: '50 +', label: '5 Stars Rating' },
        { icon: <FaChalkboardTeacher size={38} />, number: '20 +', label: 'jlpt Courses' },
        { icon: <FaBook size={38} />, number: '100 +', label: 'Lecture Classes' },
    ];

    return (
        <div className="bg-black text-white py-16 px-4 sm:px-12 md:px-20 lg:px-[20vw]">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="text-orange-300 mb-4">{stat.icon}</div>
                        <div className="text-lg sm:text-xl font-bold">{stat.number}</div>
                        <div className="text-xs sm:text-sm mt-1 uppercase">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hero;