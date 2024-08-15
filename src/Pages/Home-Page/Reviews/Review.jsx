import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

import back2 from "../../../assets/testimonBg.jpg";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", scale: "1.3" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", scale: "1.3" }}
            onClick={onClick}
        />
    );
}

function Review() {
    const { t } = useTranslation();

    const testimonials = [
        {
            name: t("testimonials.Sumita Mondal"),
            img_url: "https://lh3.googleusercontent.com/a-/ALV-UjU9hGMLGr8r7pcpVzOBclOuwRbOOvt_1eOoKxt4vBDwgz1-_w=w75-h75-p-rp-mo-br100",
            stars: 5,
            disc: t("testimonials.Sumita Mondal Disc")
        },
        {
            name: t("testimonials.Mahak Mala Saren"),
            img_url: "https://lh3.googleusercontent.com/a-/ALV-UjXmcv_xkMDnMk00WmnzSExLms0TYbj6Hqj6mBrrTFgKLG5g3MU=w75-h75-p-rp-mo-br100",
            stars: 5,
            disc: t("testimonials.Mahak Mala Saren Disc")
        },
        // Add other testimonials here
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="relative mb-[3px]">
            <div
                className="bg-cover bg-center bg-no-repeat py-[120px] relative"
                style={{ backgroundImage: `url(${back2})` }}
            >
                <div className="absolute inset-0 bg-black opacity-[0.78] z-10"></div> {/* dark overlay */}
                <div className="container mx-auto relative z-20">
                    <div className="text-center">
                        <h2 className="lg:text-4xl text-[26px] font-bold mb-4 text-white">
                            {t('What')} <span className="text-orange-500">{t('People')}</span> {t('Say')}
                        </h2>
                        <p className="text-gray-100 mb-8">
                            {t('p-des')}
                        </p>
                    </div>

                    <div className="w-[80%] mx-auto">
                        <Slider {...settings}>
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-300 p-4 md:p-6 rounded-lg shadow-lg transition duration-300 transform max-w-[390px] h-[300px] text-center"
                                >
                                    <img
                                        src={testimonial.img_url}
                                        alt={testimonial.name}
                                        className="w-20 h-20 rounded-full mx-auto mb-6 mt-2"
                                    />
                                    <p className="text-slate-900 mb-4">
                                        {testimonial.disc}
                                    </p>
                                    <h4 className="font-bold">{testimonial.name}</h4>
                                    <p className="text-lg text-yellow-500">{"★".repeat(testimonial.stars)}</p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;