"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";
import {Menu, X} from "lucide-react";
import clsx from "clsx";

const navLinks = [
  {href: "/", label: "Home"},
  {href: "/about", label: "About"},
  {href: "/services", label: "Services"},
  {href: "/contact", label: "Contact"},
  {href: "/login", label: "Login"},
  {href: "/signup", label: "Sign Up"},
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="bg-white border-b shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-4xl font-bold text-blue-500  ">GlobalCare</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "px-3 py-2 rounded-md text-sm font-medium transition",
                  pathname === link.href
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={clsx(
                "block px-3 py-2 rounded-md text-sm font-medium transition",
                pathname === link.href
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
