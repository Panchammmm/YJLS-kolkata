import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import back2 from "../../../assets/testimonBg.jpg";

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
        disc: `Awesome place. Teachers are amazing and easy going...`
    },
    {
        name: "Bikram Mistry",
        img_url: "https://lh3.googleusercontent.com/a/ACg8ocJYF5FZCnKpo5GMRlrTZZTRholUQX3EI3x_EpmQVxgyHppHvA=w75-h75-p-rp-mo-br100",
        stars: 5,
        disc: `Best language school.`
    },
    {
        name: "Mousumi Sarkar",
        img_url: "https://lh3.googleusercontent.com/a-/ALV-UjXXIT5mSQMPLmBCGVn-xQilDZYb_yV3OqzJ0rpgs6hN1WXeuqiLRA=w75-h75-p-rp-mo-br100",
        stars: 5,
        disc: `The teachers are really helpful.`
    },
];

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
                        <h2 className="text-4xl font-bold mb-4 text-white">
                            What <span className="text-orange-500">People</span> Say
                        </h2>
                        <p className="text-gray-100 mb-8">
                            Student and parent testimonials sharing their experiences and opinions.
                        </p>
                    </div>

                    <div className="w-[80%] mx-auto">
                        <Slider {...settings}>
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-300 p-6 rounded-lg shadow-lg transition duration-300 transform max-w-[390px] h-[300px] text-center"
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