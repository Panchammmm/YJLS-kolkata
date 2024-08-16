import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHourglassEnd } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import coursebg from "../../assets/page-banner/courses.png";

import MasterN3 from "../../assets/Courses/n3.jpg";
import CrashN3 from "../../assets/Courses/crash-n3.jpg";
import SpN3 from "../../assets/Courses/sp-n3.jpg";

import MasterN4 from "../../assets/Courses/n4.jpg";
import CrashN4 from "../../assets/Courses/crash-n4.jpg";
import SpN4 from "../../assets/Courses/sp-n4.jpg";

import MasterN5 from "../../assets/Courses/n5.jpg";
import CrashN5 from "../../assets/Courses/crash-n5.jpg";
import SpN5 from "../../assets/Courses/sp-n5.jpg";

export default function Course() {
    const { t } = useTranslation();

    return (
        <div>
            <div className="bg-black">
                <img src={coursebg} alt="course" className="object-cover w-full h-[200px] sm:h-[400px] lg:h-[350px]"></img>
            </div>

            <CourseList />
        </div>
    )
}

const N3Courses = [
    {
        image: MasterN3,
        name: 'course.N3.mastering',
        duration: 'course.duration.6_months',
        rating: 4.5,
        description: 'course.N3.mastering_description',
        price: 6000,
        originalPrice: 9000,
        discount: 33
    },
    {
        image: CrashN3,
        name: 'course.N3.crash',
        duration: 'course.duration.3_months',
        rating: 4.6,
        description: 'course.N3.crash_description',
        price: 999,
        originalPrice: 1600,
        discount: 37
    },
    {
        image: SpN3,
        name: 'course.N3.special',
        duration: 'course.duration.3_months',
        rating: 4.8,
        description: 'course.N3.special_description',
        price: 999,
        originalPrice: 1200,
        discount: 16
    },
];

const N4Courses = [
    {
        image: MasterN4,
        name: 'course.N4.mastering',
        duration: 'course.duration.6_months',
        rating: 4.8,
        description: 'course.N4.mastering_description',
        price: 9000,
        originalPrice: 12000,
        discount: 25
    },
    {
        image: CrashN4,
        name: 'course.N4.crash',
        duration: 'course.duration.3_months',
        rating: 4.6,
        description: 'course.N4.crash_description',
        price: 899,
        originalPrice: 1400,
        discount: 35
    },
    {
        image: SpN4,
        name: 'course.N4.special',
        duration: 'course.duration.3_months',
        rating: 4.5,
        description: 'course.N4.special_description',
        price: 999,
        originalPrice: 1200,
        discount: 16
    },
];

const N5Courses = [
    {
        image: MasterN5,
        name: 'course.N5.mastering',
        duration: 'course.duration.6_months',
        rating: 4.7,
        description: 'course.N5.mastering_description',
        price: 6000,
        originalPrice: 9000,
        discount: 33
    },
    {
        image: CrashN5,
        name: 'course.N5.crash',
        duration: 'course.duration.3_months',
        rating: 4.5,
        description: 'course.N5.crash_description',
        price: 799,
        originalPrice: 1000,
        discount: 20
    },
    {
        image: SpN5,
        name: 'course.N5.special',
        duration: 'course.duration.3_months',
        rating: 4.8,
        description: 'course.N5.special_description',
        price: 999,
        originalPrice: 1200,
        discount: 16
    },
];

// Combining all courses for the 'All' category
const courses = {
    All: [...N3Courses, ...N4Courses, ...N5Courses],
    N3: N3Courses,
    N4: N4Courses,
    N5: N5Courses,
};

const CourseList = () => {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState('All');
    const [visibleCourses, setVisibleCourses] = useState(6);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const maxVisibleCourses = 6;

    const handleCategoryChange = (category) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveCategory(category);
            setVisibleCourses(maxVisibleCourses);
            setIsTransitioning(false);
        }, 300);
    };

    const toggleVisibility = () => {
        if (visibleCourses === maxVisibleCourses) {
            setVisibleCourses(courses[activeCategory].length);
        } else {
            setVisibleCourses(maxVisibleCourses);
        }
    };

    const currentCourses = courses[activeCategory].slice(0, visibleCourses);

    const navigate = useNavigate();

    const handleContactClick = () => {
        window.scrollTo(0, 0);
        navigate('/Contact');
    };

    return (
        <div className="bg-gray-100 lg:pt-[100px] pt-20 pb-28 lg:pb-28 p-4 sm:p-6 lg:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold capitalize text-center mb-4">
                JLPT <span className="text-orange-500">{t('course')}</span>
            </h2>
            <p className="text-center text-gray-500 mb-7 sm:mb-8 md:mb-10 px-2 sm:px-4">
                {t('Discover our comprehensive courses tailored to various proficiency levels.')}
            </p>

            <div className="flex flex-wrap justify-center mb-6 sm:mb-8">
                {Object.keys(courses).map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`${activeCategory === category ? 'bg-orange-500 text-white' : 'bg-white text-gray-700'
                            } px-3 sm:px-4 py-2 mx-1 sm:mx-2 my-1 sm:my-0 rounded-lg font-semibold shadow-md hover:bg-orange-500 hover:text-white`}
                    >
                        {t(category)}
                    </button>
                ))}
            </div>

            <div
                className={`flex justify-center mx-4 transition-opacity duration-300 ease-in-out ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                    }`}
            >
                <div className="flex flex-row flex-wrap gap-4 place-items-center justify-center">
                    {currentCourses.map((course, index) => (
                        <div key={index} className="relative mt-8 flex w-full sm:w-72 lg:w-80 flex-col rounded-xl bg-white text-gray-700 shadow-xl">
                            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl">
                                <img src={course.image} alt={t(course.name)} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between my-auto">
                                    <h6 className="bg-green-400 text-white text-sm w-fit rounded-[5px] px-3 py-1 mb-3 font-semibold">{t('New')}</h6>
                                    <div className="flex mr-2 text-[#9da4af] h-fit p-1 rounded-[8px]">
                                        <FaHourglassEnd />
                                        <span className="text-sm ml-1">{t(course.duration)}</span>
                                    </div>
                                </div>

                                <h5 className="text-xl font-semibold leading-snug text-blue-gray-900">
                                    {t(course.name)}
                                </h5>

                                <div className="flex flex-row">
                                    {[...Array(4)].map((_, i) => (
                                        <svg
                                            key={i}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            className="h-4 w-4 text-yellow-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
                                            ></path>
                                        </svg>
                                    ))}
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        className="h-4 w-4 text-yellow-200"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
                                        ></path>
                                    </svg>
                                    <span className="text-sm ml-3">{course.rating}</span>
                                </div>

                                <p className="flex mt-2 h-[100px] text-base font-light leading-relaxed text-gray-700">
                                    {t(course.description)}
                                </p>

                                <div className="grid mt-4 mb-4 ml-1">
                                    <div className="leading-4 ml-2 text-sm font-medium text-gray-400">
                                        <span className="line-through mr-4">{course.originalPrice} /-</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-orange-600 text-lg font-semibold">{course.price} /-</span>
                                        <span className="bg-yellow-200 text-yellow-800 text-sm px-2 py-1 ml-3 rounded-full">{course.discount}% {t('Off')}</span>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className="select-none rounded-lg bg-orange-500 py-3 mb-1 lg:mb-0 px-6 text-center font-bold text-white shadow-md transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-85 active:opacity-85 disabled:pointer-events-none disabled:opacity-50"
                                    onClick={handleContactClick}
                                >
                                    {t('Contact Us')}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {courses[activeCategory].length > maxVisibleCourses && (
                <div className="flex justify-center mt-10">
                    <button
                        onClick={toggleVisibility}
                        className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-orange-600"
                    >
                        {visibleCourses === maxVisibleCourses ? t('Show More') : t('Show Less')}
                    </button>
                </div>
            )}
        </div>
    )
}