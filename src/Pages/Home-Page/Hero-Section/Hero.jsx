import React from "react";
import "./hero.css";

import landing from "../../../assets/landing-image.jpg";

export default function Hero() {
    return (
        <div>
            <img src={landing} alt="landing" className="absolute w-full bg-cover brightness-[45%] blur-[0.7px]"></img>

            <div className="relative z-[2] translate-y-[80%] pl-20 pr-[45vw]">
                <h1 className="text-white font-[700] text-[3.8rem] leading-[4.5rem]">Take The <span className="text-[#ffb443]">Best</span> JLPT <br></br> <span className="text-[#ffb443]">Courses</span>, Online & Offline</h1>
                <p className="text-white pl-3 pt-4 tracking-[0.7px]">Elevate Your Career to Unprecedented Heights at Yume Japanese Language School – South Kolkata’s Premier Institution for Advanced Japanese Language Education. Engage with our Expert Faculty to Master the Language, Open Global Doors, and Equip Yourself with the Essential Skills and Knowledge to Excel in Today's Competitive Landscape.</p>

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
    )
}