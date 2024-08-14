import React from "react";
import "./abt.css";

import aboutbg from "../../assets/page-banner/about.png";
import F1 from "../../assets/Founder/f1.jpg";
import F2 from "../../assets/Founder/f2.jpg";
import F3 from "../../assets/Founder/f3.jpg";
import F4 from "../../assets/Founder/f4.jpg";

export default function About() {
    return (
        <section>
            <div className="bg-black">
                <img src={aboutbg} alt="aboutus" className="object-cover w-full h-[200px] sm:h-[400px] lg:h-[350px]" />
            </div>

            <Info />
        </section>
    )
}

function Info() {
    return (
        <div className="bg-gray-100 lg:pt-[100px] pt-20 pb-[120px] flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-bold capitalize text-center mb-4">
                Meet The <span className="text-orange-500">Founder</span>
            </h1>
            <p className="text-center text-gray-500 mb-10 px-4">
                Our founder is not only the visionary behind this institution but also the lead educator,<br className="hidden md:block" /> committed to guiding our students to success.
            </p>

            <div className="lg:w-[60%] flex mx-auto md:gap-[10px] md:px-4 px-8">
                <div className="image-card shadow-2xl">
                    <img src={F1} alt="founder" className="w-full h-auto object-cover rounded-lg" />
                </div>
                <div className="image-card shadow-2xl">
                    <img src={F2} alt="founder" className="w-full h-auto object-cover rounded-lg" />
                </div>
                <div className="image-card shadow-2xl">
                    <img src={F3} alt="founder" className="w-full h-auto object-cover rounded-lg" />
                </div>
                <div className="image-card shadow-2xl">
                    <img src={F4} alt="founder" className="w-full h-auto object-cover rounded-lg" />
                </div>
            </div>

            {/* About section */}
            <p className="md:text-xl text-lg text-stone-700 w-[90%] md:w-[70%] mx-auto text-center mt-12 px-4">
                皆さん、こんにちは。I am JYOTIRMOY GAYEN, and my aim in teaching Japanese is to enhance cultural understanding and strengthen ties between Japan and India through language education. With extensive experience in Japan, I've gained valuable insights that I'm eager to share with others.
                <br /><br />
                By establishing this platform for learning Japanese, I'm providing students with opportunities to explore a new culture, pursue careers in Japanese companies, and contribute to the growing connections between our nations. My background and qualifications, including passing the JLPT N2, greatly enrich my teaching and demonstrate my commitment to mastering the language.
                <br /><br />
                My approach of offering both online and offline study options is modern and adaptable, catering to the diverse needs of students. I am excited to bring the knowledge and teaching techniques I gained from my experiences at Sister Nivedita University Kolkata (SNU) and East Point School (CBSE) to my new institution.
                <br /><br />
                Everyone hopes for our community to become a vibrant hub of learners passionate about Japanese language and culture. If you have any questions or require assistance, please don't hesitate to reach out—I am here to help.
                ありがとうございました。
            </p>
        </div>
    )
}