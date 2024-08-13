import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPaperPlane, FaPhone } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import useWeb3Forms from "@web3forms/react";

import wapp from "../../assets/wapp.svg";
import email from "../../assets/email.svg";
import location from "../../assets/location.svg";

import './contact.css';
import contactbg from "../../assets/page-banner/contact.png";

export default function Contact() {
    return (
        <section>
            <div className="bg-black pt-5">
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
            We encourage you to stay connected with us. Please don't hesitate to reach out with any inquiries you may have.
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
                                <button type="submit">Submit</button>
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
                <img src={wapp} alt="whatsapp" className="contact-icon" />
                <div className="my-auto">
                    <h3 className="contact-label text-green-700">Whatsapp</h3>
                    <a href="https://wa.me/918013072585" target="_blank" rel="noopener noreferrer">
                        <p className="contact-detail">+91 80130 72585</p>
                    </a>
                    <a href="https://wa.me/918777671272" target="_blank" rel="noopener noreferrer">
                        <p className="contact-detail">+91 87776 71272</p>
                    </a>
                </div>
            </div>

            <div className="contact-item">
                <img src={email} alt="email" className="contact-icon" />
                <div>
                    <h3 className="contact-label text-orange-700">Email</h3>
                    <a href="mailto:Yumejapaneseschool@gmail.com" target="_blank" rel="noopener noreferrer">
                        <p className="contact-detail">Yumejapaneseschool@gmail.com</p>
                    </a>
                </div>
            </div>

            <div className="contact-item">
                <img src={location} alt="location" className="contact-icon" />
                <div>
                    <h3 className="contact-label text-red-800">Location</h3>
                    <a href="https://maps.app.goo.gl/NyC6MFCtXFqLYXfz5" target="_blank" rel="noopener noreferrer">
                        <p className="contact-detail break-all">Mali Pukria, near IILDS Hospital, Rajpur Sonarpur, Kolkata,<br></br> Mali Pukuria, West Bengal 700150</p>
                    </a>
                </div>
            </div>

            <iframe className="ml-[70px] mt-3" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14905.1007375459!2d88.4544983!3d22.4342955!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02737ef7e863a3%3A0x2f0e6f81264ed215!2sYume%20Japanese%20Language%20School!5e1!3m2!1sen!2sin!4v1723487230915!5m2!1sen!2sin" width="500" height="220" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}