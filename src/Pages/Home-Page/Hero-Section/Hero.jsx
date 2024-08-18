import React from "react";
import { FaUsers, FaBook, FaChalkboardTeacher, FaGraduationCap } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "./hero.css";

function Hero() {
    const navigate = useNavigate();
    const { t } = useTranslation();

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
            <div className="relative w-full h-[100vh] lg:h-[110vh] bg-black">
                <img
                    src="https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/landing-image3.png?raw=true"
                    loading="lazy"
                    alt="landing"
                    className="w-full h-full object-cover blur-[0.7px]"
                />

                <div className="absolute inset-0 bg-black opacity-55 z-10"></div> {/* dark overlay */}

                {/* Hero content */}
                <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-10 lg:pl-20 md:pr-[40vw] z-20">
                    <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-[3.8rem] leading-tight sm:leading-snug lg:leading-[4.5rem]">
                        {t('Take The')} <span className="text-orange-400">{t('Best')}</span> {t('jap')} <span className="text-orange-400">{t('Courses')}</span> {t('in Kolkata, Online & Offline')}
                    </h1>
                    <p className="text-white pt-4 text-base lg:text-lg leading-relaxed sm:leading-normal lg:leading-[1.8]">
                        {t('H-des')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center mt-7 space-y-4 sm:space-y-0 sm:space-x-4">

                        {/* read more button */}
                        <button className="read-button shadow-xl" onClick={handleReadMoreClick}>{t('Read More')}</button>

                        {/* contact now button */}
                        <button className="btn-con shadow-xl" onClick={handleContactNowClick}>
                            {t('Contact Now')}
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
    const { t } = useTranslation(); // Using the translation hook
    const stats = [
        { icon: <FaGraduationCap size={38} />, number: '200 +', label: t('HAPPY STUDENTS') },
        { icon: <FaUsers size={38} />, number: '50 +', label: t('5 Stars Rating') },
        { icon: <FaChalkboardTeacher size={38} />, number: '20 +', label: t('jlpt Courses') },
        { icon: <FaBook size={38} />, number: '100 +', label: t('Lecture Classes') },
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