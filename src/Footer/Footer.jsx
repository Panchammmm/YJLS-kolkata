import React from 'react';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaFacebookMessenger } from 'react-icons/fa';
import siteLogo from "../assets/site-logo-new.png";
import backgroundImage from "../assets/world-map.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="bg-[#171c28] text-gray-400 pt-16 pb-8 mt-1"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="container mx-auto text-center bg-opacity-75 p-8 rounded-lg">
                {/* Logo and Title */}
                <div className="mb-4">
                    <img src={siteLogo} alt='logo' className="rounded-full mx-auto size-20 mb-4 border-[3.2px] border-gray-600" />
                    <h1 className="text-3xl font-bold text-orange-600">
                        Yume Japanese Language School
                    </h1>
                </div>

                {/* Description */}
                <p className="max-w-xl mx-auto mb-8">
                    Yume Japanese Language School in South Kolkata offers top-notch Japanese education with experienced instructors and a tailored curriculum for all levels.
                </p>

                {/* Divider */}
                <div className="border-t border-gray-700 my-8 mx-auto w-[30%]" />

                {/* Contact Information */}
                <address className="not-italic mb-8">
                    Mali Pukria, Rajpur Sonarpur, Kolkata, West Bengal 700150 <br />
                    +91 80130 72585 | +91 87776 71272
                </address>

                {/* Social Icons */}
                <div className="flex justify-center space-x-6 mb-8">
                    <a onClick={() => window.open("https://www.facebook.com/profile.php?id=100084716997973&sk=photos&locale=hi_IN", "_blank")} className="p-3 rounded-full bg-gray-800 hover:bg-orange-700 transition-colors">
                        <FaFacebookF size={20}/>
                    </a>
                    <a onClick={() => window.open("https://www.facebook.com/messages/t/107979948705270", "_blank")} className="p-3 rounded-full bg-gray-800 hover:bg-orange-700 transition-colors">
                        <FaFacebookMessenger size={20}/>
                    </a>
                    <a onClick={() => window.open("https://api.whatsapp.com/send?phone=%2B918013072585&data_filter_required=ARBHHFtaUwdrkJ3LOSOjkrBPMiUVFJfMxVQnj8awZER3y_APKIxw-LNF3ZKPR5-dyDRBDznJ_3qk2BwOkpSYMiYj_fOA6eRe6YQq8IaANpJdU1HelnQyNjQBv6CcQc9gEivqCYjiN8lao7cH6Ay0ku23_Q&source=FB_Page&app=facebook&entry_point=page_cta", "_blank")} className="p-3 rounded-full bg-gray-800 hover:bg-orange-700 transition-colors">
                        <FaWhatsapp size={20}/>
                    </a>
                    <a onClick={() => window.open("https://www.instagram.com/suntugaye?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank")} className="p-3 rounded-full bg-gray-800 hover:bg-orange-700 transition-colors">
                        <FaInstagram size={20}/>
                    </a>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-8 mx-auto w-full" />

                {/* Copyright */}
                <div className="flex justify-around">
                    <p>
                        Copyright © {currentYear}. All Rights Reserved.
                    </p>
                    <div>
                        <a target="_blank" href="https://pancham-portfolio.netlify.app/">
                            Created by <span className="text-gray-500">Pancham Sardar</span>.
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;