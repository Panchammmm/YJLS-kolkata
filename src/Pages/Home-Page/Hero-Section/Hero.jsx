import React from "react";
import { FaSmile, FaUsers, FaBook, FaChalkboardTeacher, FaGraduationCap } from 'react-icons/fa';
import "./hero.css";

import landing from "../../../assets/landing-image.jpg";

function Hero() {
    return (
        <div>
            {/* Background image */}
            <div className="relative w-full h-[110vh]">
                <img
                    src={landing}
                    alt="landing"
                    className="w-full h-full object-cover brightness-[38%] blur-[0.7px] -z-10"
                />

                {/* Hero content */}
                <div className="absolute z-[1] pl-20 pr-[45vw] top-[32%] left-0">
                    <h1 className="text-white font-[700] text-[3.8rem] leading-[4.5rem]">
                        Take The <span className="text-orange-400">Best</span> JLPT <br /><span className="text-orange-400">Courses</span>, Online & Offline
                    </h1>
                    <p className="text-white pl-3 pt-4 tracking-[0.7px]">
                        Elevate Your Career to Unprecedented Heights at Yume Japanese Language School – South Kolkata’s Premier Institution for Advanced Japanese Language Education. Engage with our Expert Faculty to Master the Language, Open Global Doors, and Equip Yourself with the Essential Skills and Knowledge to Excel in Today's Competitive Landscape.
                    </p>

                    <div className="flex pl-3 mt-5">
                        <button className="read-button">Read More</button>

                        <button className="btn-con ml-4">
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
        <div className="bg-black text-white pt-[5rem] pb-16 px-[20vw]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="text-orange-400 mb-4">{stat.icon}</div>
                        <div className="text-xl font-bold">{stat.number}</div>
                        <div className="text-sm mt-2 uppercase">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hero;