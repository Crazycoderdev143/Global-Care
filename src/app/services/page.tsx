"use client";

import {motion} from "framer-motion";

const services = [
  "General Consultation",
  "Emergency Services",
  "Pediatrics",
  "Cardiology",
  "Diagnostics & Imaging",
  "Pharmacy",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {opacity: 0, y: 20},
  show: {opacity: 1, y: 0, transition: {duration: 0.4, ease: "easeOut"}},
};

export default function Services() {
  return (
    <motion.div
      className="app min-h-[80vh] px-4 py-12 flex flex-col items-center justify-center text-center"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.6}}
    >
      <motion.h1
        className="app text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4"
        initial={{y: -20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.5}}
      >
        Our Medical Services
      </motion.h1>

      <motion.p
        className="app text-lg text-gray-700 dark:text-gray-300 max-w-xl mb-10"
        initial={{y: -10, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{delay: 0.3, duration: 1}}
      >
        At GlobalCare, we’re committed to providing comprehensive and
        compassionate healthcare services tailored to your needs.
      </motion.p>

      <motion.div
        className="app grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full px-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className="app p-6 bg-white dark:bg-slate-800 shadow-md rounded-lg border border-gray-200 dark:border-slate-700"
          >
            <h2 className="app text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {service}
            </h2>
            <p className="app text-gray-600 dark:text-gray-300 text-sm">
              Learn more about our {service.toLowerCase()} services and how we
              can support your health journey.
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
