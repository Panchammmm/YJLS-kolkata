import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPaperPlane, FaPhone } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import useWeb3Forms from "@web3forms/react";

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
        <div id="contact" className="contact-section">
            <h1 className="text-3xl font-bold capitalize">Send your <span className="text-orange-500">enquiries</span></h1>

            <div className="container">
                <div className="form">
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
                                className={`mt-3 ml-1 text-sm ${isSuccess ? 'text-green-500' : 'text-red-500'}`}
                                role="alert"
                                aria-live="polite"
                            >
                                {result || (isSuccess ? 'Thank you! Your message has been sent.' : 'Oops! Something went wrong. Please try again.')}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
