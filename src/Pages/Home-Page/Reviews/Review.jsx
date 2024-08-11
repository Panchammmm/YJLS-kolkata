import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';

import back2 from "../../../assets/testimon2.jpg";

const testimonials = [
    {
        name: "Sumita Mondal",
        img_url: "https://lh3.googleusercontent.com/a-/ALV-UjU9hGMLGr8r7pcpVzOBclOuwRbOOvt_1eOoKxt4vBDwgz1-_w=w75-h75-p-rp-mo-br100",
        stars: 5,
        disc: `Best Japanese School. This is the best school if you want to learn Japanese. So without wasting time get admitted immediately!! 🇮🇳❤️🇯🇵`
    },
    {
        name: "Mahak Mala Saren",
        img_url: "https://lh3.googleusercontent.com/a-/ALV-UjXmcv_xkMDnMk00WmnzSExLms0TYbj6Hqj6mBrrTFgKLG5g3MU=w75-h75-p-rp-mo-br100",
        stars: 5,
        disc: `The teacher teaches with a lot of care and patience...`
    },
    {
        name: "Aitijhya Saha",
        img_url: "https://lh3.googleusercontent.com/a/ACg8ocKBlaqwERhErR29RQwiJL-piMa6yN8m2mj70T7ofAfuBSGExw=w75-h75-p-rp-mo-ba2-br100",
        stars: 5,
        disc: `Excellent school. The teachers are all very helpful...`
    },
    {
        name: "Ramyani Das",
        img_url: "https://lh3.googleusercontent.com/a-/ALV-UjVrOI7sLN59Ik8AKyVT5b94Wzz6HFRuYrFW1T33LaVquPVXw56a=w75-h75-p-rp-mo-br100",
        stars: 5,
        disc: `Extremely patient teacher. He has taught me with a lot of enthusiasm...`
    },
    {
        name: "Srayashi Ghosh",
        img_url: "https://lh3.googleusercontent.com/a-/ALV-UjU7ISGxKX472GwGcW89YD41VYBnrxMIUizsktnaK7yY67t-_UI=w75-h75-p-rp-mo-br100",
        stars: 5,
        disc: `Amazing place to begin with learning Japanese language...`
    },
    {
        name: "Anju Maheshwari Sarkhel",
        img_url: "https://lh3.googleusercontent.com/a-/ALV-UjVWvLIW54AN6Mo74iu_xImJEZtl5jcu6A-FJCCb_9LlcVqzR1M=w75-h75-p-rp-mo-br100",
        stars: 5,
        disc: `Awesome place. Teachers are anazing and easy going...`
    },
    {
        name: "Bikram Mistry",
        img_url: "https://lh3.googleusercontent.com/a/ACg8ocJYF5FZCnKpo5GMRlrTZZTRholUQX3EI3x_EpmQVxgyHppHvA=w75-h75-p-rp-mo-br100",
        stars: 5,
        disc: `Best language school.`
    },
    {
        name: "mousumi sarkar",
        img_url: "https://lh3.googleusercontent.com/a-/ALV-UjXXIT5mSQMPLmBCGVn-xQilDZYb_yV3OqzJ0rpgs6hN1WXeuqiLRA=w75-h75-p-rp-mo-br100",
        stars: 5,
        disc: `The teachers are really helpful.`
    },
];

const Review = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === testimonials.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const getVisibleTestimonials = () => {
        if (window.innerWidth >= 1024) {
            return testimonials.slice(currentIndex, currentIndex + 3);
        } else if (window.innerWidth >= 768) {
            return testimonials.slice(currentIndex, currentIndex + 2);
        } else {
            return testimonials.slice(currentIndex, currentIndex + 1);
        }
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => nextSlide(),
        onSwipedRight: () => prevSlide(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <div className="relative">
            {/* testimonial section with background image */}
            <div
                className="bg-cover bg-center bg-no-repeat py-[120px] relative z-10"
                style={{ backgroundImage: `url(${back2})` }}
                {...swipeHandlers}
            >
                <div className="absolute inset-0 bg-black opacity-[0.78] z-10"></div> {/* Dark overlay */}
                <div className="container mx-auto text-center relative z-20">
                    <h2 className="text-4xl font-bold mb-4 text-white">
                        What <span className="text-orange-500">People</span> Say
                    </h2>
                    <p className="text-gray-100 mb-8 lowercase">
                        STUDENT AND PARENTS OPINION
                    </p>

                    <div className="flex justify-center items-center space-x-8">
                        {getVisibleTestimonials().map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gray-300 p-6 rounded-lg shadow-lg max-w-sm transition duration-300 transform flex-shrink-0 w-[360px] h-[300px]"
                            >
                                <img
                                    src={testimonial.img_url}
                                    alt={testimonial.name}
                                    className="w-20 h-20 rounded-full mx-auto mb-4"
                                />
                                <p className="text-slate-900 mb-4">
                                    {testimonial.disc}
                                </p>
                                <h4 className="font-bold">{testimonial.name}</h4>
                                <p className="text-lg text-yellow-500">★★★★★</p>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="mt-8 flex justify-center items-center">
                        <button onClick={prevSlide} className="p-3 rounded-full bg-gray-300 mx-2 hover:bg-white">
                            <FaArrowLeft />
                        </button>
                        <button onClick={nextSlide} className="p-3 rounded-full bg-gray-300 mx-2 hover:bg-white">
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;