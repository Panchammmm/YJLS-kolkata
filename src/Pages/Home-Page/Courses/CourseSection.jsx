import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaHourglassEnd } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const courses = [
    {
        image: "https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/Courses/n5.jpg?raw=true",
        title: 'JLPT N5',
        duration: '6 Months',
        rating: '4.5',
        description: 'Beginner level Japanese. Perfect for those new to Japanese.',
        price: 6000,
        originalPrice: 9000,
        discount: 33
    },
    {
        image: "https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/Courses/n4.jpg?raw=true",
        title: 'JLPT N4',
        duration: '6 Months',
        rating: '4.8',
        description: 'Basic Japanese skills. Suitable for learners with prior knowledge.',
        price: 9000,
        originalPrice: 12000,
        discount: 25
    },
    {
        image: "https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/Courses/n3.jpg?raw=true",
        title: 'JLPT N3',
        duration: '6 Months',
        rating: '4.7',
        description: 'Intermediate Japanese skills. Ideal for improving conversation skills.',
        price: 12000,
        originalPrice: 18000,
        discount: 33
    }
];

function CourseCard({ course }) {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleContactClick = () => {
        window.scrollTo(0, 0);
        navigate('/Contact');
    };

    return (
        <div className="relative flex flex-col rounded-xl bg-white text-gray-700 shadow-xl w-full sm:w-80 mx-auto my-4 sm:my-0">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl">
                <img src={course.image} alt={t(course.title)} className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
                <div className="flex justify-between my-auto">
                    <h6 className="bg-green-400 text-white text-sm w-fit rounded-[5px] px-3 py-1 mb-3 font-semibold">
                        {t('New')}
                    </h6>
                    <div className="flex mr-2 text-[#9da4af] h-fit p-1 rounded-[8px]">
                        <FaHourglassEnd />
                        <span className="text-sm ml-1">{t(course.duration)}</span>
                    </div>
                </div>

                <h5 className="text-xl font-semibold leading-snug text-blue-gray-900">
                    {t(course.title)}
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
                    <span className="text-sm ml-3">{t(course.rating)}</span>
                </div>

                <p className="flex mt-2 text-base font-light leading-relaxed text-gray-700 line-clamp-3">
                    {t(course.description)}
                </p>

                <div className="grid mt-4 mb-4 ml-1">
                    <div className="leading-4 ml-2 text-sm font-medium text-gray-400">
                        <span className="line-through mr-4">INR {t(course.originalPrice)} /-</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-orange-600 text-lg font-semibold">INR {t(course.price)} /-</span>
                        <span className="bg-yellow-200 text-yellow-800 text-sm px-2 py-1 ml-3 rounded-full">
                            {t(course.discount)}% {t('Off')}
                        </span>
                    </div>
                </div>

                <button
                    type="button"
                    className="select-none rounded-lg bg-orange-500 py-3 mb-1 lg:mb-0 px-6 text-center font-bold text-white shadow-md transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-85 active:opacity-85 disabled:pointer-events-none disabled:opacity-50"
                    onClick={handleContactClick}
                >
                    {t('Contact Now')}
                </button>
            </div>
        </div>
    );
}

function CourseSection() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleCourseClick = () => {
        window.scrollTo(0, 0);
        navigate('/Course');
    };

    return (
        <section className="py-28">
            <div>
                <h1 className="text-2xl lg:text-4xl font-bold capitalize text-center mb-4">
                    {t('Popular')} <span className="text-orange-500">{t('Courses')}</span>
                </h1>
                <p className="text-center text-gray-500 mb-7 sm:mb-8 md:mb-10 px-4">
                    {t('HC-des')}
                </p>
            </div>
            <div className="flex flex-wrap justify-center mt-16 gap-8 lg:gap-0">
                {courses.map((course, index) => (
                    <div key={index} className="px-6 w-full sm:w-auto">
                        <CourseCard course={course} />
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-28">
                <button
                    type="button"
                    className="flex flex-row items-center justify-center select-none rounded-lg bg-orange-500 py-3 px-6 text-center font-bold text-white shadow-md transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-85 active:opacity-85 disabled:pointer-events-none disabled:opacity-50"
                    onClick={handleCourseClick}
                >
                    {t('View All Courses')}
                    <FaArrowRight className="ml-2" />
                </button>
            </div>
        </section>
    );
}

export default CourseSection;