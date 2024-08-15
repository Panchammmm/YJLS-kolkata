import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPaperPlane, FaPhone, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import useWeb3Forms from "@web3forms/react";
import contactbg from "../../assets/page-banner/contact.png";
import { useTranslation } from 'react-i18next';

export default function Contact() {
    const { t } = useTranslation();

    return (
        <section>
            <div className="bg-black">
                <img src={contactbg} alt={t('contact.alt_image')} className="object-cover w-full h-[200px] sm:h-[400px] lg:h-[350px]" />
            </div>
            <ContactForm />
        </section>
    );
}

const ContactForm = () => {
    const { register, reset, handleSubmit, formState: { isSubmitSuccessful } } = useForm();
    const [result, setResult] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false); // To determine success or error

    const accessKey = "5516de44-fd98-4a9a-ada1-d95fcb67574b";

    // Use the useWeb3Forms hook to handle form submission
    const { submit: onSubmit } = useWeb3Forms({
        access_key: accessKey,
        settings: {
            from_name: "YJLS",
            subject: "Yume Japanese Language School Enquiry",
        },
        onSuccess: (msg, data) => {
            setResult(msg);
            setIsSuccess(true); // Set success to true
            reset(); // Reset form after successful submission
        },
        onError: (msg, data) => {
            setResult(msg);
            setIsSuccess(false); // Set success to false
        },
    });

    // Function to handle form submission
    const handleFormSubmit = (formData) => {
        const { name, message } = formData;
        const fromName = name || "Anonymous";

        // Dynamic subject based on form data
        const subject = `New enquiry from ${fromName}`;
        onSubmit({ ...formData, subject });
    };

    const { t } = useTranslation();

    return (
        <div id="contact" className="lg:pt-[100px] pt-20 pb-[120px] bg-gray-100">
            <h1 className="text-2xl md:text-3xl font-bold capitalize text-center mb-4">
                {t('Send_your')} <span className="text-orange-500">{t('Enquiries')}</span>
            </h1>
            <p className="text-center text-gray-500 mb-10 px-4">
                {t('contact.subtitle')}
            </p>

            <div className="flex flex-col lg:flex-row justify-center gap-14 px-4 lg:px-0">
                <div className="w-full h-full lg:w-[40%] my-auto bg-white shadow-lg rounded-lg p-8 lg:pt-10">
                    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5 lg:space-y-10">
                        <div className="flex items-center border-b border-gray-300 pb-2">
                            <FaUser className="text-gray-400 mr-3" />
                            <input
                                type="text"
                                placeholder={t('contact.form.name_placeholder')}
                                {...register("name")}
                                required
                                className="w-full outline-none"
                            />
                        </div>
                        <div className="flex items-center border-b border-gray-300 pb-2">
                            <FaEnvelope className="text-gray-400 mr-3" />
                            <input
                                type="email"
                                placeholder={t('contact.form.email_placeholder')}
                                {...register("email", { required: true })}
                                className="w-full outline-none"
                            />
                        </div>
                        <div className="flex items-center border-b border-gray-300 pb-2">
                            <FaPhone className="text-gray-400 mr-3" />
                            <input
                                type="tel"
                                placeholder={t('contact.form.phone_placeholder')}
                                {...register("phone")}
                                className="w-full outline-none"
                            />
                        </div>
                        <div className="flex items-start border-b border-gray-300 pb-2">
                            <FaPaperPlane className="text-gray-400 mr-3 mt-1 lg:mt-[3px]" />
                            <textarea
                                placeholder={t('contact.form.message_placeholder')}
                                {...register("message", { required: true })}
                                className="w-full outline-none"
                                rows="4"
                            />
                        </div>
                        <button type="submit" className="w-full py-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-200">
                            {t('contact.form.submit_button')}
                        </button>
                    </form>

                    {isSubmitSuccessful && (
                        <div
                            className={`mt-4 text-center ${isSuccess ? 'text-green-500' : 'text-red-500'}`}
                            role="alert"
                            aria-live="polite"
                        >
                            {result || (isSuccess ? t('contact.form.success_message') : t('contact.form.error_message'))}
                        </div>
                    )}
                </div>

                <Address />
            </div>
        </div>
    );
};

const Address = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <div className="flex">
                <FaWhatsapp className="text-orange-500 mr-3 size-8 mt-1" />
                <div>
                    <h3 className="font-semibold">{t('contact.address.whatsapp')}</h3>
                    <a href="https://wa.me/918013072585" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500 transition duration-200">
                        +91 80130 72585
                    </a>
                    <br />
                    <a href="https://wa.me/918777671272" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500 transition duration-200">
                        +91 87776 71272
                    </a>
                </div>
            </div>

            <div className="flex">
                <FaEnvelope className="text-orange-500 mr-4 size-7 mt-1" />
                <div>
                    <h3 className="font-semibold">{t('contact.address.email')}</h3>
                    <a href="mailto:Yumejapaneseschool@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500 transition duration-200">
                        Yumejapaneseschool@gmail.com
                    </a>
                </div>
            </div>

            <div className="flex">
                <FaMapMarkerAlt className="text-orange-500 mr-4 size-11 lg:size-8 lg:mt-1" />
                <div>
                    <h3 className="font-semibold">{t('contact.address.location')}</h3>
                    <a href="https://maps.app.goo.gl/NyC6MFCtXFqLYXfz5" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500 transition duration-200">
                        Mali Pukria, near IILDS Hospital, Rajpur Sonarpur, Kolkata, West Bengal 700150
                    </a>
                </div>
            </div>

            <iframe
                className="w-full h-64 border-0 rounded-lg mt-2 lg:mt-0"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14905.1007375459!2d88.4544983!3d22.4342955!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02737ef7e863a3%3A0x2f0e6f81264ed215!2sYume%20Japanese%20Language%20School!5e1!3m2!1sen!2sin!4v1723487230915!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}