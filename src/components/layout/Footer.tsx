"use client";

import {motion} from "framer-motion";
import {Facebook, Twitter, Github, Phone, Mail, MapPin} from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.2},
  },
};

const fadeInItem = {
  hidden: {opacity: 0, y: 20},
  visible: {opacity: 1, y: 0, transition: {duration: 0.6}},
};

const FooterLink = ({href, label}: {href: string; label: string}) => (
  <motion.li variants={fadeInItem}>
    <a
      href={href}
      className="app text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
    >
      {label}
    </a>
  </motion.li>
);

const FooterIconLink = ({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: React.ElementType;
}) => (
  <motion.a
    variants={fadeInItem}
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="app text-gray-400 hover:text-blue-500 transition-transform transform hover:scale-110"
  >
    <Icon size={20} />
  </motion.a>
);

const footerData = {
  company: {
    name: "Global Care",
    description:
      "Making healthcare accessible worldwide through innovation and compassion.",
    socialLinks: [
      {href: "https://facebook.com", label: "Facebook", Icon: Facebook},
      {href: "https://twitter.com", label: "Twitter", Icon: Twitter},
      {href: "https://github.com", label: "GitHub", Icon: Github},
    ],
  },
  quickLinks: [
    {href: "/about", label: "About Us"},
    {href: "/services", label: "Services"},
    {href: "/contact", label: "Contact"},
    {href: "/privacy", label: "Privacy Policy"},
  ],
  services: [
    {href: "#", label: "Primary Care"},
    {href: "#", label: "Specialist Care"},
    {href: "#", label: "Emergency Care"},
    {href: "#", label: "Mental Health"},
  ],
  contact: [
    {
      icon: MapPin,
      text: "123 Healthcare St, Medical City",
    },
    {
      icon: Mail,
      text: "contact@globalcare.com",
    },
    {
      icon: Phone,
      text: "+1 (555) 123-4567",
    },
  ],
};

export default function Footer() {
  return (
    <footer className="app bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="app max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{once: true}}
          className="app grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Company Info */}
          <motion.div variants={fadeInItem}>
            <h3 className="app text-xl font-bold mb-4">
              {footerData.company.name}
            </h3>
            <p className="app text-gray-600 dark:text-gray-400 mb-4">
              {footerData.company.description}
            </p>
            <div className="app flex gap-4 mt-4">
              {footerData.company.socialLinks.map(({href, label, Icon}) => (
                <FooterIconLink
                  key={label}
                  href={href}
                  label={label}
                  Icon={Icon}
                />
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInItem}>
            <h4 className="app text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="app space-y-2">
              {footerData.quickLinks.map((link) => (
                <FooterLink
                  key={link.label}
                  {...link}
                />
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInItem}>
            <h4 className="app text-lg font-semibold mb-4">Services</h4>
            <ul className="app space-y-2">
              {footerData.services.map((service) => (
                <FooterLink
                  key={service.label}
                  {...service}
                />
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInItem}>
            <h4 className="app text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="app space-y-4 text-gray-600 dark:text-gray-400">
              {footerData.contact.map(({icon: Icon, text}, index) => (
                <li
                  key={index}
                  className="app flex items-center"
                >
                  <Icon
                    className="app mr-2 text-blue-500"
                    size={18}
                  />
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInItem}
          viewport={{once: true}}
          className="app pt-10 mt-10 border-t border-gray-300 dark:border-gray-700 text-center text-sm"
        >
          <p className="app text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Global Care. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
// performance optimization, efficiency, maintainability, readability, reusable, security and short code
