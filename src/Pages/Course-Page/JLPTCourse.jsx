import React, { useState } from 'react';
import { FaHourglassEnd } from 'react-icons/fa';

const N3Courses = [
    {
        image: 'https://images.pexels.com/photos/9159063/pexels-photo-9159063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'Mastering JLPT N3',
        duration: '1 Year',
        rating: 4.2,
        description: 'Comprehensive curriculum covering reading, listening, and grammar for intermediate Japanese learners.',
        price: 800,
        originalPrice: 1600,
        discount: 50
    },
    {
        image: 'https://images.pexels.com/photos/9159063/pexels-photo-9159063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'N3 Crash Course',
        duration: '6 Months',
        rating: 4.2,
        description: 'Intensive preparation focusing on essential grammar and vocabulary for the JLPT N3 exam.',
        price: 800,
        originalPrice: 1600,
        discount: 50
    },
    {
        image: 'https://images.pexels.com/photos/9159063/pexels-photo-9159063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'N3 Special',
        duration: '3 Months',
        rating: 4.2,
        description: 'Specialized course offering targeted practice and expert guidance for the JLPT N3 exam.',
        price: 800,
        originalPrice: 1600,
        discount: 50
    },
];

const N4Courses = [
    {
        image: 'https://images.pexels.com/photos/9159063/pexels-photo-9159063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'Mastering JLPT N4',
        duration: '1 Year',
        rating: 4.8,
        description: 'Detailed study of JLPT N4 materials, focusing on vocabulary, grammar, and kanji for advanced beginners.',
        price: 900,
        originalPrice: 1800,
        discount: 50
    },
    {
        image: 'https://images.pexels.com/photos/9159063/pexels-photo-9159063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'N4 Crash Course',
        duration: '6 Months',
        rating: 4.8,
        description: 'Fast-paced course designed for quick and effective preparation for the JLPT N4 exam.',
        price: 900,
        originalPrice: 1800,
        discount: 50
    },
    {
        image: 'https://images.pexels.com/photos/9159063/pexels-photo-9159063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'N4 Special',
        duration: '3 Months',
        rating: 4.8,
        description: 'Specialized practice tailored for JLPT N4 with expert support to ensure successful results.',
        price: 900,
        originalPrice: 1800,
        discount: 50
    },
];

const N5Courses = [
    {
        image: 'https://images.pexels.com/photos/9159063/pexels-photo-9159063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'Mastering JLPT N5',
        duration: '1 Year',
        rating: 4.8,
        description: 'Foundational course covering basic aspects of Japanese including vocabulary, grammar, and kanji.',
        price: 900,
        originalPrice: 1800,
        discount: 50
    },
    {
        image: 'https://images.pexels.com/photos/9159063/pexels-photo-9159063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'N5 Crash Course',
        duration: '6 Months',
        rating: 4.8,
        description: 'Intensive program for rapid preparation of the JLPT N5 exam, focusing on key elements of the language.',
        price: 900,
        originalPrice: 1800,
        discount: 50
    },
    {
        image: 'https://images.pexels.com/photos/9159063/pexels-photo-9159063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'N5 Special',
        duration: '3 Months',
        rating: 4.8,
        description: 'Special course with in-depth materials and personalized support to excel in the JLPT N5 exam.',
        price: 900,
        originalPrice: 1800,
        discount: 50
    },
];

// Combining all courses for the 'All' category
const courses = {
    All: [...N3Courses, ...N4Courses, ...N5Courses],
    N3: N3Courses,
    N4: N4Courses,
    N5: N5Courses,
};

const JLPTCourse = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    return (
        <section className="bg-gray-100 p-8 pt-[100px] pb-[120px]">
            <h2 className="text-3xl font-bold text-center mb-4">JLPT <span className="text-orange-500">Courses</span></h2>
            <p className="text-center text-gray-600 mb-8">
                Explore our courses across various categories.
            </p>

            <div className="flex justify-center mb-6">
                {Object.keys(courses).map((category, index) => (
                    <button
                        key={index}
                        onClick={() => handleCategoryChange(category)}
                        className={`${activeCategory === category ? 'bg-orange-500 text-white' : 'bg-white text-gray-700'
                            } px-4 py-2 mx-2 rounded-lg font-semibold shadow-md hover:bg-orange-500 hover:text-white`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="flex justify-center">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 place-items-center">
                    {courses[activeCategory].map((course, index) => (
                        <div key={index} className="relative mt-8 flex w-80 flex-col rounded-xl bg-white text-gray-700 shadow-xl">
                            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl">
                                <img
                                    src={course.image}
                                    alt={`Course`}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between my-auto">
                                    <h6 className="bg-green-400 text-white text-sm w-fit rounded-[5px] px-3 py-1 mb-3 font-semibold">New</h6>
                                    <div className="flex mr-2 text-[#9da4af] h-fit p-1 rounded-[8px]">
                                        <FaHourglassEnd />
                                        <span className="text-sm ml-1">{course.duration}</span>
                                    </div>
                                </div>

                                <h5 className="text-xl font-semibold leading-snug text-blue-gray-900">
                                    {course.name}
                                </h5>

                                <div className="flex flex-row mb-4">
                                    {[...Array(Math.floor(course.rating))].map((_, i) => (
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
                                    <span className="text-sm ml-3">{course.rating.toFixed(1)}</span>
                                </div>

                                <p className="flex mt-2 text-base font-light leading-relaxed text-gray-700 line-clamp-3">
                                    {course.description}
                                </p>

                                <div className="grid mt-4 mb-4 ml-1">
                                    <div className="leading-4 ml-2 text-sm font-medium text-gray-400">
                                        <span className="line-through mr-4">{course.originalPrice} /-</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-orange-600 text-lg font-semibold">{course.price} /-</span>
                                        <span className="bg-yellow-200 text-yellow-800 px-2 py-1 ml-3 rounded-full text-sm">{course.discount}% Off</span>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className="select-none rounded-lg bg-orange-500 py-3 px-6 text-center font-bold text-white shadow-md transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-85 active:opacity-85 disabled:pointer-events-none disabled:opacity-50"
                                >
                                    Contact Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JLPTCourse;
