"use client";

import {FormEvent, useState, useCallback} from "react";
import {motion} from "framer-motion";

const fields = ["name", "email", "phone"] as const;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const {name, value} = e.target;
      setFormData((prev) => ({...prev, [name]: value}));
    },
    []
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div className="app min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="app max-w-7xl px-4 xl:px-0 py-16 mx-auto">
        <motion.h2
          initial={{opacity: 0, y: -30}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          className="app text-center text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-14"
        >
          Contact Us
        </motion.h2>

        <div className="app grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Image + Info */}
          <motion.div
            initial={{opacity: 0, x: -40}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8}}
            className="app space-y-6"
          >
            <div className="app rounded-3xl overflow-hidden shadow-xl ring-1 ring-blue-500/20">
              <img
                src="/images/contact.jpg"
                alt="Contact"
                className="app object-cover w-full h-[400px] lg:h-[500px] transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="app text-gray-600 dark:text-gray-300 space-y-3 text-lg">
              <p>📍 123 Healthcare St, Medical City</p>
              <p>📧 contact@globalcare.com</p>
              <p>📞 +91 98765 43210</p>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{opacity: 0, x: 40}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8}}
            className="app bg-white dark:bg-gray-800/50 p-8 rounded-3xl shadow-xl backdrop-blur-md"
          >
            <form
              onSubmit={handleSubmit}
              className="app space-y-2 p-6 bg-white/70 dark:bg-gray-800/60 rounded-2xl shadow-xl backdrop-blur-md border border-gray-200 dark:border-gray-700 transition-all"
            >
              {fields.map((field, index) => (
                <motion.div
                  key={field}
                  initial={{opacity: 0, y: 10}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 0.4, delay: index * 0.1}}
                  viewport={{once: true}}
                  className="app relative"
                >
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    className="app w-full px-4 py-4 text-sm rounded-xl bg-white/60 dark:bg-gray-700/40 text-gray-900 dark:text-white  border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-cyan-700 transition-all"
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{opacity: 0, y: 10}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.4, delay: 0.4}}
                viewport={{once: true}}
                className="app relative"
              >
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="app peer w-full px-4 pt-6 pb-2 text-sm rounded-xl bg-white/60 dark:bg-gray-700/40 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-cyan-700 transition-all resize-none"
                />
              </motion.div>

              <motion.div
                initial={{opacity: 0, y: 10}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.4, delay: 0.5}}
                viewport={{once: true}}
                className="app space-y-3 text-center"
              >
                <button
                  type="submit"
                  disabled={
                    !formData.email ||
                    formData.message.length < 25 ||
                    !formData.name ||
                    !formData.phone
                  }
                  className="app inline-flex items-center justify-center gap-2 w-full py-3 px-6 disabled:opacity-50 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                  <svg
                    className="app w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>

                {submitted && (
                  <p className="app text-sm text-green-600 dark:text-green-400 mt-3">
                    ✅ Thank you! We'll be in touch soon.
                  </p>
                )}
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// performance optimization, efficiency, maintainability, readability, reusable, security and short code
