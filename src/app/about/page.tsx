"use client";

import Image from "next/image";
import {motion} from "framer-motion";

const fadeInUp = {
  hidden: {opacity: 0, y: 30},
  visible: {opacity: 1, y: 0, transition: {duration: 0.6}},
};

const About: React.FC = () => {
  const team = [
    {
      name: "Dr. John Doe",
      role: "Chief Medical Officer",
      img: "/images/about-d1.jpg",
    },
    {
      name: "Dr. Jane Smith",
      role: "Head of Nursing",
      img: "/images/about-d.jpeg",
    },
    {
      name: "Dr. Emily Johnson",
      role: "Director of Operations",
      img: "/images/about-d2.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
            About Global Care
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Providing exceptional healthcare services with compassion and
            dedication since 2023.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {[
            {
              title: "Our Mission",
              content:
                "To deliver accessible, high-quality healthcare solutions that empower communities and improve lives through innovative medical services and compassionate care.",
            },
            {
              title: "Our Vision",
              content:
                "To become the leading healthcare provider, recognized globally for excellence in patient care, medical innovation, and community wellness.",
            },
          ].map((section) => (
            <motion.div
              key={section.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out"
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                {section.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-16 hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                desc: "Committed to delivering the highest standard of care in everything we do.",
              },
              {
                title: "Compassion",
                desc: "Treating every patient with empathy, dignity, and respect.",
              },
              {
                title: "Innovation",
                desc: "Embracing new technologies and methods to improve healthcare delivery.",
              },
            ].map((val) => (
              <div
                key={val.title}
                className="text-center bg-gray-100 dark:bg-gray-700 p-6 rounded-lg hover:shadow-md hover:-translate-y-2 transform transition-all duration-300 ease-in-out"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  {val.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{val.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Our Team */}
        <div className="text-center">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            className="text-3xl font-bold text-gray-800 dark:text-white mb-8"
          >
            Our Team
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Our team combines decades of expertise and heartfelt dedication to
            deliver exceptional care to every patient.
          </motion.p>

          <motion.div
            variants={{
              visible: {transition: {staggerChildren: 0.15}},
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out p-5 flex flex-col items-center text-center"
              >
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-gray-300 dark:border-gray-700">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-500 mt-1">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-16">
        <p className="text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Global Care. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default About;

// performance optimization, efficiency, maintainability, readability, reusable, security and short code
