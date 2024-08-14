import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPaperPlane, FaPhone, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import useWeb3Forms from "@web3forms/react";

import './contact.css';
import contactbg from "../../assets/page-banner/contact.png";

export default function Contact() {
    return (
        <section>
            <div className="bg-black">
                <img src={contactbg} alt="contact"></img>
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

    return (
        <div id="contact" className="pt-[100px] pb-[120px] bg-gray-100">
            <h1 className="text-3xl font-bold capitalize text-center mb-3">Send Your <span className="text-orange-500">Enquiries</span></h1>
            <p className="text-center text-gray-600 mb-8">
                Stay connected and reach out with any inquiries you may have.
            </p>

            <div className="flex flex-wrap justify-center gap-10">

                <div className="c-container">
                    <div className="form shadow-2xl rounded-xl p-12 bg-white">
                        <div>
                            <form onSubmit={handleSubmit(handleFormSubmit)}>
                                <div className="name">
                                    <span>
                                        <FaUser />
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Your full name.."
                                        {...register("name")}
                                        required
                                    />
                                </div>
                                <div className="name">
                                    <span>
                                        <FaEnvelope />
                                    </span>
                                    <input
                                        type="email"
                                        placeholder="Your email address.."
                                        {...register("email", { required: true })}
                                    />
                                </div>
                                <div className="name">
                                    <span>
                                        <FaPhone />
                                    </span>
                                    <input
                                        type="tel"
                                        placeholder="Your phone number.."
                                        {...register("phone")}
                                    />
                                </div>
                                <div className="message">
                                    <span className="messageIcon">
                                        <FaPaperPlane />
                                    </span>
                                    <textarea
                                        cols="30"
                                        rows="10"
                                        placeholder="Message.."
                                        {...register("message", { required: true })}
                                    />
                                </div>
                                <button type="submit" className="bg-orange-500">Submit</button>
                            </form>

                            {/* Success/Error message */}
                            {isSubmitSuccessful && (
                                <div
                                    className={`mt-3 ml-1 text-base ${isSuccess ? 'text-green-500' : 'text-red-500'}`}
                                    role="alert"
                                    aria-live="polite"
                                >
                                    {result || (isSuccess ? 'Thank you! Your message has been sent.' : 'Oops! Something went wrong. Please try again.')}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <Address />
            </div>
        </div>
    );
};

const Address = () => {
    return (
        <div className="contact-info my-auto">
            <div className="contact-item">
                <FaWhatsapp className="contact-icon fill-white" />
                <div className="my-auto">
                    <h3 className="contact-label">Whatsapp</h3>
                    <a href="https://wa.me/918013072585" target="_blank" rel="noopener noreferrer">
                        <p className="contact-detail">
                            +91 80130 72585
                            <Arrow />
                        </p>
                    </a>
                    <a href="https://wa.me/918777671272" target="_blank" rel="noopener noreferrer">
                        <p className="contact-detail">
                            +91 87776 71272
                            <Arrow />
                        </p>
                    </a>
                </div>
            </div>

            <div className="contact-item">
                <FaEnvelope className="contact-icon fill-white" />
                <div>
                    <h3 className="contact-label">Email</h3>
                    <a href="mailto:Yumejapaneseschool@gmail.com" target="_blank" rel="noopener noreferrer">
                        <p className="contact-detail">
                            Yumejapaneseschool@gmail.com
                            <Arrow />
                        </p>
                    </a>
                </div>
            </div>

            <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon fill-white" />
                <div>
                    <h3 className="contact-label">Location</h3>
                    <a href="https://maps.app.goo.gl/NyC6MFCtXFqLYXfz5" target="_blank" rel="noopener noreferrer" className="contact-detail">
                        <p className="grid">
                            <span>
                                Mali Pukria, near IILDS Hospital, Rajpur Sonarpur, Kolkata,
                            </span>
                            <span className="flex gap-[5px]">
                                Mali Pukuria, West Bengal 700150 <Arrow />
                            </span>
                        </p>
                    </a>
                </div>
            </div>

            <iframe className="ml-[70px] mt-3" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14905.1007375459!2d88.4544983!3d22.4342955!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02737ef7e863a3%3A0x2f0e6f81264ed215!2sYume%20Japanese%20Language%20School!5e1!3m2!1sen!2sin!4v1723487230915!5m2!1sen!2sin" width="500" height="220" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

const Arrow = () => {
    return (
        <span className="button__icon-wrapper">
            <svg width="10" className="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="#555" viewBox="0 0 14 15">
                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
            </svg>

            <svg className="button__icon-svg button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="#555" viewBox="0 0 14 15">
                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
            </svg>
        </span>
    );
}
