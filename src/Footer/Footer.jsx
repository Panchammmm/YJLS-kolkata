import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaFacebookMessenger } from 'react-icons/fa';
import siteLogo from "../assets/site-logo-new.png";
import backgroundImage from "../assets/world-map.png";

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="bg-[#171c28] text-gray-400 pt-12 pb-6"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="container mx-auto text-center bg-opacity-75 p-4 sm:p-8 rounded-lg">
                {/* Logo and Title */}
                <div className="mb-6">
                    <img
                        src={siteLogo}
                        alt="logo"
                        className="rounded-full mx-auto w-20 h-20 sm:w-24 sm:h-24 lg:w-24 lg:h-24 mb-4 border-[3.2px] border-gray-600"
                    />
                    <h1 className="text-2xl sm:text-3xl font-bold text-orange-600">
                        {t('Footer.title')}
                    </h1>
                </div>

                {/* Description */}
                <p className="max-w-xl mx-auto mb-8 text-sm sm:text-base lg:text-lg">
                    {t('Footer.description')}
                </p>

                {/* Divider */}
                <div className="border-t border-gray-700 my-8 mx-auto w-3/4 sm:w-1/2 lg:w-1/3" />

                {/* Contact Information */}
                <address className="not-italic mb-8 text-sm sm:text-base lg:text-lg">
                    {t('Footer.address')}
                    <br />
                    {t('Footer.phone1')} | {t('Footer.phone2')}
                </address>

                {/* Social Icons */}
                <div className="flex justify-center space-x-4 sm:space-x-6 mb-8">
                    <a
                        onClick={() => window.open("https://www.facebook.com/profile.php?id=100084716997973&sk=photos&locale=hi_IN", "_blank")}
                        className="p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-orange-700 transition-colors"
                        aria-label={t('Footer.social.facebook')}
                    >
                        <FaFacebookF size={18} />
                    </a>
                    <a
                        onClick={() => window.open("https://www.facebook.com/messages/t/107979948705270", "_blank")}
                        className="p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-orange-700 transition-colors"
                        aria-label={t('Footer.social.messenger')}
                    >
                        <FaFacebookMessenger size={18} />
                    </a>
                    <a
                        onClick={() => window.open("https://api.whatsapp.com/send?phone=%2B918013072585&data_filter_required=ARBHHFtaUwdrkJ3LOSOjkrBPMiUVFJfMxVQnj8awZER3y_APKIxw-LNF3ZKPR5-dyDRBDznJ_3qk2BwOkpSYMiYj_fOA6eRe6YQq8IaANpJdU1HelnQyNjQBv6CcQc9gEivqCYjiN8lao7cH6Ay0ku23_Q&source=FB_Page&app=facebook&entry_point=page_cta", "_blank")}
                        className="p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-orange-700 transition-colors"
                        aria-label={t('Footer.social.whatsapp')}
                    >
                        <FaWhatsapp size={18} />
                    </a>
                    <a
                        onClick={() => window.open("https://www.instagram.com/suntugaye?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank")}
                        className="p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-orange-700 transition-colors"
                        aria-label={t('Footer.social.instagram')}
                    >
                        <FaInstagram size={18} />
                    </a>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-8 mx-auto w-full" />

                {/* Copyright */}
                <div className="flex flex-col sm:flex-row justify-center sm:justify-between space-y-3 sm:space-y-0 text-sm sm:text-base lg:text-lg">
                    <p>
                        {t('Footer.copyright', { year: currentYear })}
                    </p>
                    <div>
                        <a target="_blank" href="https://pancham-portfolio.netlify.app/">
                            {t('Footer.createdBy', { name: 'Pancham Sardar' })}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;