'use client';
import { FormEvent, useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle submission logic (e.g. API call)
        console.log(formData);
        setSubmitted(true);
    };

    return (
        <div className="bg-neutral-900 min-h-screen">
            <div className="max-w-7xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
                <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight mb-10 text-center">Contact us</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Left Side - Image */}
                    <div className="space-y-6">
                        <div className="relative w-full h-[400px] lg:h-[600px] overflow-hidden rounded-2xl">
                            <img 
                                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500" 
                                src="/images/contact.jpg" 
                                alt="Contact Us"
                            />
                        </div>
                        <div className="space-y-4">
                            <p className="text-xl text-neutral-400">Whatever your goal - we will get you there.</p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-neutral-400">
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>123 Healthcare St, Medical City</span>
                                </div>
                                <div className="flex items-center gap-3 text-neutral-400">
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span>contact@globalcare.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="bg-neutral-800/50 p-8 rounded-2xl backdrop-blur-sm">
                        {/* Form */}
                        <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {["name", "email", "company", "phone"].map((field) => (
                                    <div className="relative" key={field}>
                                        <input
                                            type={field === "email" ? "email" : "text"}
                                            id={field}
                                            name={field}
                                            value={formData[field as keyof typeof formData]}
                                            onChange={handleChange}
                                            required
                                            placeholder={field}
                                            className="peer p-4 block w-full bg-neutral-700/50 border-transparent rounded-xl text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                        <label
                                            htmlFor={field}
                                            className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition duration-200 peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-blue-500"
                                        >
                                            {field.charAt(0).toUpperCase() + field.slice(1)}
                                        </label>
                                    </div>
                                ))}

                                {/* Textarea */}
                                <div className="relative">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Message"
                                        className="peer p-4 block w-full bg-neutral-700/50 border-transparent rounded-xl text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                    />
                                    <label
                                        htmlFor="message"
                                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition duration-200 peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-blue-500"
                                    >
                                        Message
                                    </label>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-xs text-neutral-500">All fields are required</p>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center items-center gap-2 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors duration-200"
                                    >
                                        Send Message
                                        <svg
                                            className="w-5 h-5 transition group-hover:translate-x-1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                                
                                {submitted && (
                                    <p className="mt-4 text-sm text-green-400">Thanks! We'll be in touch soon.</p>
                                )}
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-14">
                            {/* Address */}


                            {/* Email */}


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;
