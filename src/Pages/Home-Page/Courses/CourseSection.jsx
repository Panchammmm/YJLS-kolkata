import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import C1 from "../../../assets/Courses/course1.jpg";
import C2 from "../../../assets/Courses/course2.jpg";
import C3 from "../../../assets/Courses/course3.jpg";

const courses = [
    {
        image: C1,
        title: 'JLPT N5',
        rating: '4.5',
        description: 'Beginner level Japanese. Perfect for those new to Japanese.',
    },
    {
        image: C2,
        title: 'JLPT N4',
        rating: '4.8',
        description: 'Basic Japanese skills. Suitable for learners with prior knowledge.',
    },
    {
        image: C3,
        title: 'JLPT N3',
        rating: '4.7',
        description: 'Intermediate Japanese skills. Ideal for improving conversation skills.',
    },
];

const CourseCard = ({ course }) => (
    <div className="relative flex w-80 flex-col rounded-xl bg-white text-gray-700 shadow-xl">
        <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600">
            <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-5">
            <h6 className="text-yellow-300 tracking-[1px]">New</h6>
            <h5 className="text-xl font-semibold leading-snug text-blue-gray-900">
                {course.title}
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
            <p className="flex mt-2 text-base font-light leading-relaxed text-gray-700 line-clamp-3">
                {course.description}
            </p>
        </div>
        <div className="p-6 pt-0">
            <button
                type="button"
                className="select-none rounded-lg bg-orange-500 py-3 px-6 text-center font-bold text-white shadow-md transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-85 active:opacity-85 disabled:pointer-events-none disabled:opacity-50"
            >
                Contact Now
            </button>
        </div>
    </div>
);

const CourseSection = () => (
    <section className="bg-white pt-[120px] pb-[110px]">
        <div>
            <h1 className="text-3xl font-bold text-center mb-4 capitalize">Popular <span className="text-orange-500">Courses</span></h1>
            <p className="text-center text-gray-600 mb-8 px-[25vw]">
                At Yume Japanese Language School, we focus on your success by offering top-notch
                training. From expert faculty to the latest resources.
            </p>
        </div>
        <div className="flex flex-wrap justify-center align-middle mt-[4rem]">
            {courses.map((course, index) => (
                <div key={index} className="px-4">
                    <CourseCard course={course} />
                </div>
            ))}
        </div>

        <div className="flex justify-center mt-[7rem]">
            <button className="group hover:brightness-110 font-bold py-3 px-6 rounded-xl bg-gradient-to-r from-orange-300 to-orange-600 text-white flex items-center justify-center transition-all duration-300">
                More Courses
                <FaArrowRight className="ml-2 transition-transform transform group-hover:translate-x-2 duration-300" />
            </button>
        </div>
    </section>
);

export default CourseSection;