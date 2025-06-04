'use client';
import { useState } from 'react';
export default function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptedTerms: false,
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      email: '',
      password: '',
      confirmPassword: '',
    };

    if (!formData.email.includes('@')) {
      newErrors.email = 'Please include a valid email address.';
    }

    if (formData.password.length < 8) {
      newErrors.password = '8+ characters required';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Password does not match the password';
    }

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(error => error !== '');
    if (!hasErrors) {
      // Submit logic here (e.g. call API)
      console.log('Form submitted', formData);
    }
  };
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat relative" 
      style={{ 
        backgroundImage: "url('/images/login-bg.jpg')",
      }}
    >      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/60"></div>      {/* Content container with z-index to appear above overlay */}      <div className="relative z-10 min-h-screen flex items-center py-12 px-4 sm:px-6 lg:px-16">
        <div className="ml-[45%] max-w-sm w-full space-y-6 bg-white/30 dark:bg-neutral-900/30 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 dark:border-neutral-700/30 p-6 transform transition-all">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">LOGIN HERE</h1>
          <p className="mt-3 text-sm text-gray-600 dark:text-neutral-400">
            Already have an account?{' '}
            <a className="text-blue-600 hover:text-blue-500 font-semibold transition-colors duration-200 dark:text-blue-400" href="/signup">
              Signup here
            </a>
          </p>
        </div>
        <button
          type="button"
          className="group relative w-full flex justify-center py-3 px-4 border border-gray-300 rounded-xl text-gray-700  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700"
        >
          <span className="flex items-center hover:text-gray-500">
            <svg className="w-5 h-5 mr-3" viewBox="0 0 46 47" fill="none">{/* ...existing SVG... */}</svg>
            <span className="text-sm font-medium  ">Sign up with Google</span>
          </span>
        </button>
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-neutral-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2  bg-green-400 text-black dark:bg-neutral-900 dark:text-neutral-400">Or continue with email</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-neutral-300">
              username
            </label>
            <input
              type="name"
              id="username"
              name="usrename"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-shadow duration-200 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:focus:ring-blue-400"
            />
            {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-neutral-300">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-shadow duration-200 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:focus:ring-blue-400"
            />
            {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-neutral-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
             
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-shadow duration-200 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:focus:ring-blue-400"
              placeholder="8+ characters"
            />
            {errors.password && <p className="mt-2 text-sm text-red-500">{errors.password}</p>}
          </div>

          {/* Repeat similar styling for password and confirm password fields */}

         

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 dark:bg-blue-500 dark:hover:bg-blue-600"
          >

            Create Account
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}