"use client";

import axios from "axios";
import Link from "next/link";
import {useState} from "react";
import GoogleAuthButton from "@/components/ui/authProviders";

export default function Signup() {
  const initialData = {
    username: "",
    email: "",
    mobile: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialData);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({...prev, [e.target.name]: e.target.value}));
    
  };

  function capitalizeWord(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  
  const handleSubmit = async () => {
 
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/login-bg.jpg')",
      }}
    >
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full mx-4 p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl space-y-6 ">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-indigo-600 hover:text-indigo-500 font-medium"
              >
                Sign in
              </Link>
            </p>
          </div>
          <GoogleAuthButton />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              {["username", "email", "mobile", "password"].map((field) => (
                <input
                  key={field}
                  name={field}
                  placeholder={capitalizeWord(field)}
                  value={(formData as any)[field]}
                  type={field === "password" ? "password" : "text"}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-shadow duration-200 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:focus:ring-blue-400"
                />
              ))}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Create Account"
              )}
            </button>

            <p className="mt-4 text-xs text-center text-gray-600">
              By signing up, you agree to our{" "}
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-500"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-500"
              >
                Privacy Policy
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
