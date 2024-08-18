import React from "react";
import { useTranslation } from "react-i18next";
import "./abt.css";

import T1 from "../../assets/Founder/t1.jpg";
import T2 from "../../assets/Founder/t2.jpg";

export default function About() {
    const { t } = useTranslation();

    return (
        <section>
            <div className="bg-black">
                <img src="https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/page-banner/about.png?raw=true" alt="aboutus" className="object-cover w-full h-[200px] sm:h-[400px] lg:h-[350px]" />
            </div>

            <Info />
        </section>
    )
}

function Info() {
    const { t } = useTranslation();

    return (
        <div className="bg-gray-100 lg:pt-[100px] pt-20 pb-[120px] flex flex-col justify-center">
            {/* teachers section */}
            <h1 className="text-2xl md:text-3xl font-bold capitalize text-center mb-10">
                {t('about.our')} <span className="text-orange-500">{t('about.teachers')}</span>
            </h1>

            <div className="lg:w-[60%] flex mx-auto justify-center md:gap-[10px] px-14 mb-20">
                <div className="image-card shadow-2xl">
                    <img src={T1} alt="founder" className="w-full h-auto object-cover rounded-lg" />
                </div>
                <div className="image-card shadow-2xl">
                    <img src={T2} alt="founder" className="w-full h-auto object-cover rounded-lg" />
                </div>
            </div>

            {/* founder section */}
            <h1 className="text-2xl md:text-3xl font-bold capitalize text-center mb-4">
                {t('about.title')} <span className="text-orange-500">{t('about.founder')}</span>
            </h1>
            <p className="text-center text-gray-500 mb-10 px-4">
                {t('about.founderDescription')}
            </p>

            <div className="lg:w-[60%] flex mx-auto md:gap-[10px] px-6">
                <div className="image-card shadow-2xl">
                    <img src="https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/Founder/f4.jpg?raw=true" alt="founder" className="w-full h-auto object-cover rounded-lg" />
                </div>
                <div className="image-card shadow-2xl">
                    <img src="https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/Founder/f1.jpg?raw=true" alt="founder" className="w-full h-auto object-cover rounded-lg" />
                </div>
                <div className="image-card shadow-2xl">
                    <img src="https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/Founder/f2.jpg?raw=true" alt="founder" className="w-full h-auto object-cover rounded-lg" />
                </div>
                <div className="image-card shadow-2xl">
                    <img src="https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/Founder/f3.jpg?raw=true" alt="founder" className="w-full h-auto object-cover rounded-lg" />
                </div>
            </div>

            {/* About section */}
            <p className="md:text-xl text-lg text-stone-700 w-[90%] md:w-[70%] mx-auto text-center mt-12 px-4 md:px-[5vw]">
                {t('about.intro')}
                <br /><br />
                {t('about.approach')}
                <br /><br />
                {t('about.community')}
                <br /><br />
                {t('about.passion')}
            </p>
        </div>
    )
}