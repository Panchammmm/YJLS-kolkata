import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaPassport, FaBriefcase, FaUserGraduate, FaUniversity, FaLanguage, FaUserTie } from 'react-icons/fa';

const Program = () => {
    const { t } = useTranslation();

    const features = [
        { icon: FaPassport, title: t("Student Visa"), description: t("Guidance and support for obtaining student visas to study abroad.") },
        { icon: FaBriefcase, title: t("Job Visa"), description: t("Comprehensive assistance for acquiring job visas in various countries.") },
        { icon: FaUserGraduate, title: t("TITP Visa"), description: t("Specialized training and guidance for the TITP visa program.") },
        { icon: FaUniversity, title: t("Top Colleges and Universities"), description: t("Guidance towards leading global universities and colleges for higher education.") },
        { icon: FaLanguage, title: t("JLPT and NAT"), description: t("Expert preparation for Japanese language proficiency tests like JLPT and NAT.") },
        { icon: FaUserTie, title: t("Placement Preparation"), description: t("Personalized coaching to help you secure the best job opportunities.") }
    ];

    return (
        <div className="bg-gray-100 py-[120px]">
            <h2 className="lg:text-4xl text-[28px] font-bold text-center mb-10 lg:mb-20">
                {t('Our')} <span className="text-orange-500">{t('Programs')}</span>
            </h2>

            <div className="flex flex-wrap items-center justify-center px-4 lg:px-20">
                {/* Image Section */}
                <div className="w-full lg:w-auto lg:scale-[1.5] lg:pr-10 lg:-translate-y-10 mb-16 lg:mb-0">
                    <img src="https://github.com/Panchammmm/YJLS-kolkata/blob/main/src/assets/program.png?raw=true" alt={t("Students")} className="h-[45vh] mx-auto lg:mx-0" />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2 lg:pl-12 flex justify-center lg:justify-start">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start">
                                <feature.icon size={35} className="text-orange-500 text-3xl mr-4" />
                                <div>
                                    <h4 className="font-bold text-lg">{feature.title}</h4>
                                    <p className="text-gray-500">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Program;