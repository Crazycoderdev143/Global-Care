"use client";

import {motion} from "framer-motion";
import {
  Stethoscope,
  AlertCircle,
  Baby,
  HeartPulse,
  ScanLine,
  Pill,
} from "lucide-react";

const services = [
  {
    title: "General Consultation",
    icon: <Stethoscope className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
    bg: "from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800",
  },
  {
    title: "Emergency Services",
    icon: <AlertCircle className="w-8 h-8 text-red-500 dark:text-red-400" />,
    bg: "from-red-100 to-red-50 dark:from-red-900 dark:to-red-800",
  },
  {
    title: "Pediatrics",
    icon: <Baby className="w-8 h-8 text-pink-500 dark:text-pink-400" />,
    bg: "from-pink-100 to-pink-50 dark:from-pink-900 dark:to-pink-800",
  },
  {
    title: "Cardiology",
    icon: <HeartPulse className="w-8 h-8 text-rose-500 dark:text-rose-400" />,
    bg: "from-rose-100 to-rose-50 dark:from-rose-900 dark:to-rose-800",
  },
  {
    title: "Diagnostics & Imaging",
    icon: <ScanLine className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />,
    bg: "from-indigo-100 to-indigo-50 dark:from-indigo-900 dark:to-indigo-800",
  },
  {
    title: "Pharmacy",
    icon: <Pill className="w-8 h-8 text-green-500 dark:text-green-400" />,
    bg: "from-green-100 to-green-50 dark:from-green-900 dark:to-green-800",
  },
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
  show: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.4, ease: "easeOut"},
  },
};

export default function Services() {
  return (
    <motion.div
      className="min-h-[80vh] px-4 py-16 flex flex-col items-center justify-center text-center"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.6}}
    >
      <motion.h1
        className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4"
        initial={{y: -20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.5}}
      >
        Our Medical Services
      </motion.h1>

      <motion.p
        className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mb-10"
        initial={{y: -10, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{delay: 0.3, duration: 1}}
      >
        At GlobalCare, we’re committed to providing comprehensive and
        compassionate healthcare services tailored to your needs.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full px-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className={`p-6 rounded-2xl border border-transparent bg-gradient-to-br ${service.bg} shadow-md 
                        transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:border-blue-400/40 dark:hover:border-blue-300/40`}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="p-3 bg-white dark:bg-gray-900 rounded-full shadow-md">
                {service.icon}
              </div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                {service.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                Learn more about our {service.title.toLowerCase()} and how we
                can support your health journey.
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
