"use client";

import React, {useEffect, useState} from "react";
import axios from "axios";
import {
  Pencil,
  UploadCloud,
  Edit,
  EditIcon,
  Edit2,
  Edit2Icon,
  Edit3,
  Edit3Icon,
  LucideEdit,
  LucideEdit2,
  LucideEdit3,
} from "lucide-react";
import {motion} from "framer-motion";
import FlameGradientHero from "./Animated";

// User type
type User = {
  name: string;
  email: string;
  contact: string;
  gender: string;
  dateOfBirth: string;
  city: string;
  avatar: string;
};

// Mock User Data
const mockUser: User = {
  name: "Aman Srivastava",
  email: "aman.user@example.com",
  contact: "+91-9012345678",
  gender: "Male",
  dateOfBirth: "1995-08-12",
  city: "Lucknow",
  avatar: "https://via.placeholder.com/150",
};

const UserProfile: React.FC = () => {
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setUserData(mockUser);
    }, 500);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {id, value} = e.target;
    setUserData((prev) => (prev ? {...prev, [id]: value} : prev));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "mypreset");
    formData.append("cloud_name", "dcozy6hkg");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dcozy6hkg/image/upload",
        formData
      );
      const imageUrl = res.data.secure_url;
      setUserData((prev) => (prev ? {...prev, avatar: imageUrl} : prev));
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated User Profile:", userData);
    alert("Profile Updated Successfully");
  };

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5, ease: "easeOut"}}
      className="app min-h-screen p-6 bg-gradient-to-br from-gray-800 via-cyan-200 to-blue-300 dark:from-gray-500 dark:to-cyan-400"
    >
      <motion.h1
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.2, duration: 0.6}}
        className="app text-4xl font-extrabold text-center uppercase text-sky-700 dark:text-white mb-12"
      >
        User Profile
      </motion.h1>

      {userData ? (
        <motion.form
          onSubmit={handleSubmit}
          initial={{opacity: 0, scale: 0.95}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
          className="app max-w-4xl mx-auto bg-gradient-to-br from-sky-200 via-cyan-400 to-blue-500 dark:from-blue-900 dark:to-cyan-800 rounded-3xl shadow-2xl p-8 md:p-12 space-y-10"
        >
          <button className="app flex gap-2 hover:bg-sky-700 text-white font-semibold px-4 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
            <Edit className="app relative -mr-40" />
            Edit
          </button>
          {/* Avatar Upload */}
          <div className="app relative w-fit mx-auto">
            <motion.img
              src={userData.avatar}
              alt="User Avatar"
              initial={{opacity: 0, scale: 0.8}}
              animate={{opacity: 1, scale: 1}}
              transition={{delay: 0.3}}
              className="app w-32 h-32 md:w-40 md:h-40 rounded-full ring-4 ring-sky-300 dark:ring-neutral-700 object-cover mx-auto"
            />
            <label className="app absolute bottom-0 right-0 bg-sky-600 hover:bg-sky-700 p-2 rounded-full cursor-pointer transition duration-300 shadow-lg">
              <UploadCloud className="app w-5 h-5 text-white" />
              <input
                type="file"
                onChange={handleImageUpload}
                className="app hidden"
              />
            </label>
          </div>
          {/* Profile Fields */}
          <div className="app grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {(
              [
                ["name", "Full Name"],
                ["email", "Email", true],
                ["contact", "Contact"],
                ["gender", "Gender"],
                ["dateOfBirth", "Date of Birth"],
                ["city", "City"],
              ] as [keyof User, string, boolean?][]
            ).map(([id, label, disabled]) => (
              <motion.div
                key={id}
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.3, delay: 0.1}}
                className="app space-y-1"
              >
                <label
                  htmlFor={id}
                  className="app block text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  {label}
                </label>
                <input
                  id={id}
                  type={id === "dateOfBirth" ? "date" : "text"}
                  value={userData[id]}
                  onChange={handleInputChange}
                  disabled={disabled}
                  className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-neutral-800 dark:text-white ${
                    disabled
                      ? "bg-gray-100 dark:bg-neutral-700 cursor-not-allowed"
                      : "bg-white dark:bg-neutral-800"
                  }`}
                />
              </motion.div>
            ))}
          </div>
          {/* Submit Button */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.3}}
            className="app text-center"
          >
            <button
              type="submit"
              className="app inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Pencil className="app w-5 h-5" />
              Update Profile
            </button>
          </motion.div>
          <div className="app h-40 bg-gradient-to-br from-blue-100 via-cyan-700 to-blue-100 dark:from-neutral-900 dark:to-neutral-800 p-6"></div>
          <div className="h-40 bg-gradient-to-tr from-pink-300 via-orange-200 to-yellow-100 dark:from-neutral-800 dark:via-neutral-900 dark:to-black p-6 shadow-xl rounded-xl">
            Sunset Glow Section
          </div>
          <div className="h-40 bg-gradient-to-bl from-indigo-900 via-purple-900 to-gray-900 p-6 text-white rounded-3xl shadow-2xl">
            Midnight Nebula Panel
          </div>
          <div className="h-40 bg-gradient-to-r from-green-200 via-green-400 to-green-600 dark:from-green-900 dark:to-emerald-800 p-6 rounded-lg">
            Nature Forest Layout
          </div>
          <div className="h-40 bg-gradient-to-b from-sky-200 via-cyan-400 to-blue-500 dark:from-blue-900 dark:to-cyan-800 p-6 shadow-lg rounded-2xl">
            Ocean Breeze UI Box
          </div>
          <div className="h-40 bg-gradient-to-r from-slate-200 via-gray-100 to-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-700 p-6 border border-gray-300 dark:border-neutral-600 rounded-xl">
            Cloudy Pastel Section
          </div>
          <div className="h-40 bg-gradient-to-tr from-teal-100 via-green-200 to-lime-100 dark:from-emerald-900 dark:to-lime-800 p-6 rounded-lg shadow-md">
            {/* Minty UI content here */}
          </div>
          <div className="h-40 bg-gradient-to-br from-yellow-300 via-orange-200 to-rose-200 dark:from-yellow-800 dark:to-rose-900 p-6 rounded-2xl shadow-inner">
            {/* Vibrant UI content here */}
          </div>
          <div className="h-40 bg-gradient-to-r from-sky-100 via-blue-200 to-indigo-200 dark:from-blue-800 dark:to-indigo-900 p-6 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl">
            {/* Frosty card-style UI */}
          </div>
          <div className="h-40 bg-gradient-to-b from-slate-800 via-gray-900 to-black p-6 text-white rounded-xl shadow-md">
            {/* Dark modern UI layout */}
          </div>
          <div className="h-40 bg-gradient-to-l from-fuchsia-300 via-purple-300 to-indigo-300 dark:from-purple-900 dark:to-indigo-800 p-6 rounded-3xl shadow-lg ring-2 ring-purple-300/40">
            {/* Artistic or portfolio layout */}
          </div>
          <div className="h-40 bg-gradient-to-tr from-pink-100 via-rose-100 to-violet-100 dark:from-pink-900 dark:to-violet-800 p-6 rounded-xl border border-pink-200/50 dark:border-pink-800/50">
            {/* Elegant soft form UI */}
          </div>
          <div className="h-40 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-6 text-green-400 shadow-2xl rounded-xl border border-green-500/20">
            {/* Cyberpunk layout or developer dashboard */}
          </div>
          <div className="min-h-screen bg-gradient-to-r from-sky-100 via-blue-200 to-indigo-200 dark:from-blue-800 dark:to-indigo-900 p-6 flex justify-center items-center">
            <div className="bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-3xl shadow-lg p-8 w-full max-w-md text-center border border-white/20">
              <img
                src="https://avatars.githubusercontent.com/u/123456?v=4"
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-md"
              />
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-4">
                Dileep Nishad
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Full Stack Developer
              </p>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Building modern web apps using React, Next.js, Prisma & Tailwind
                CSS.
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition">
                Contact
              </button>
            </div>
          </div>
          <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-10 text-green-300">
            <h1 className="text-3xl font-bold mb-8 text-center">
              Admin Dashboard
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {title: "Users", value: "1.2k"},
                {title: "Appointments", value: "310"},
                {title: "Revenue", value: "$45.6k"},
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white/5 border border-green-500/30 p-6 rounded-xl text-center shadow-xl hover:scale-105 transition-transform"
                >
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-3xl font-bold mt-2">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="min-h-screen bg-gradient-to-tr from-pink-100 via-rose-100 to-violet-100 dark:from-pink-900 dark:to-violet-800 p-10 flex justify-center items-center">
            <form className="bg-white/70 dark:bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-lg space-y-6 border border-rose-300/40 dark:border-rose-700/40">
              <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
                Get in Touch
              </h2>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none"
              />
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-xl transition"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
            {/* Animated Background */}
            <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 opacity-30 blur-3xl z-0" />

            {/* Glass Card */}
            <div className="relative z-10 bg-white/10 border border-white/20 backdrop-blur-lg p-10 rounded-2xl shadow-2xl max-w-xl text-center">
              <h1 className="text-4xl font-bold mb-4">Welcome to GlobalCare</h1>
              <p className="text-gray-200 mb-6">
                Healthcare made smart and beautiful. This UI glows with purpose
                and design.
              </p>
              <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-semibold">
                Get Started
              </button>
            </div>
          </div>
          <div className="relative min-h-screen bg-gradient-to-b from-indigo-900 via-black to-gray-900 text-white overflow-hidden flex items-center justify-center p-10">
            {/* Star Background Layer */}
            <div className="absolute inset-0 bg-[url('/stars.svg')] opacity-20 animate-pulse blur-sm z-0" />

            {/* Animated Glow Circles */}
            <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-500 opacity-30 rounded-full blur-3xl animate-ping" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-400 opacity-25 rounded-full blur-2xl animate-ping" />

            {/* Foreground Content */}
            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-bold mb-4">Explore the Future</h2>
              <p className="text-gray-300 max-w-md mx-auto mb-6">
                Our platform connects doctors, patients, and pharmacists in
                real-time with powerful tools.
              </p>
              <button className="px-5 py-3 bg-indigo-700 hover:bg-indigo-800 rounded-lg transition">
                Launch App
              </button>
            </div>
          </div>
          <FlameGradientHero />
          <div className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
            {/* Animated blurred color blobs */}
            <motion.div
              animate={{scale: [1, 1.2, 1]}}
              transition={{repeat: Infinity, duration: 6, ease: "easeInOut"}}
              className="absolute top-0 left-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-30"
            />
            <motion.div
              animate={{x: [0, 30, -30, 0], y: [0, 20, -20, 0]}}
              transition={{repeat: Infinity, duration: 10, ease: "easeInOut"}}
              className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20"
            />

            {/* Foreground content */}
            <div className="relative z-10 backdrop-blur-2xl bg-white/10 p-8 rounded-3xl shadow-2xl max-w-xl w-full text-center border border-white/20">
              <img
                src="/doctor.png"
                alt="Doctor"
                className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-md mb-4"
              />
              <h2 className="text-2xl font-bold">Dr. Dileep Nishad</h2>
              <p className="text-sm text-gray-300">
                MBBS, MD - General Medicine
              </p>
              <p className="mt-2 text-gray-400">
                Specialist in Cardiology • 8+ years experience
              </p>
              <button className="mt-5 px-6 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition">
                View Schedule
              </button>
            </div>
          </div>
          <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-neutral-800 to-black text-white">
            {/* Motion background overlay */}
            <div className="absolute inset-0">
              <div className="animate-pulse w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl absolute top-10 left-10" />
              <div className="animate-ping w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl absolute bottom-20 right-10" />
            </div>

            {/* Dashboard Card */}
            <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-2xl max-w-lg w-full text-center shadow-xl">
              <h2 className="text-2xl font-bold mb-4">Delivery Dashboard</h2>
              <p className="text-gray-300">
                Track, deliver & confirm real-time medicine orders with ease.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
                <div className="bg-white/10 border border-white/10 rounded-xl p-4">
                  <p>Assigned Orders</p>
                  <h3 className="text-xl font-bold">12</h3>
                </div>
                <div className="bg-white/10 border border-white/10 rounded-xl p-4">
                  <p>Delivered Today</p>
                  <h3 className="text-xl font-bold">9</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-950 via-purple-900 to-indigo-900 text-white overflow-hidden">
            {/* Animated particle-style blobs */}
            <div className="absolute w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[100px] animate-ping top-1/3 left-1/4" />
            <div className="absolute w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[100px] animate-pulse bottom-1/3 right-1/4" />

            {/* Admin Welcome Card */}
            <div className="relative z-10 bg-white/10 border border-white/20 backdrop-blur-md p-10 rounded-2xl max-w-2xl w-full text-center shadow-2xl">
              <h1 className="text-3xl font-bold">Welcome Admin</h1>
              <p className="text-gray-300 mt-2">
                Manage the entire healthcare system from this beautiful live
                dashboard.
              </p>
              <div className="flex justify-center gap-6 mt-6 text-sm">
                <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-xl">
                  Manage Users
                </button>
                <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-xl">
                  Analytics
                </button>
              </div>
            </div>
          </div>
          <div className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
            {/* ⏱️ Slow-motion background blobs */}
            <motion.div
              animate={{scale: [1, 1.15, 1], rotate: [0, 360, 0]}}
              transition={{duration: 20, repeat: Infinity, ease: "easeInOut"}}
              className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"
            />
            <motion.div
              animate={{x: [0, 40, -40, 0], y: [0, 20, -20, 0]}}
              transition={{duration: 30, repeat: Infinity, ease: "easeInOut"}}
              className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-pink-500 rounded-full blur-2xl opacity-15"
            />

            {/* 🧊 Glassmorphism card */}
            <div className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-3xl shadow-2xl max-w-xl w-full text-center">
              <img
                src="/doctor.png"
                alt="Doctor"
                className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-md mb-4"
              />
              <h2 className="text-3xl font-bold">Dr. Dileep Nishad</h2>
              <p className="text-gray-300 text-sm">
                MBBS, MD - General Medicine
              </p>
              <p className="text-gray-400 mt-2">
                Specialist in Cardiology • 8+ years of experience
              </p>
              <button className="mt-6 px-6 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition">
                View Schedule
              </button>
            </div>
          </div>{" "}
          <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6">
            {/* Soft animated blobs */}
            <motion.div
              className="absolute w-[400px] h-[400px] top-10 left-10 rounded-full bg-purple-500 opacity-20 blur-3xl"
              animate={{scale: [1, 1.15, 1]}}
              transition={{duration: 20, repeat: Infinity, ease: "easeInOut"}}
            />
            <motion.div
              className="absolute w-[350px] h-[350px] bottom-10 right-10 rounded-full bg-indigo-500 opacity-20 blur-2xl"
              animate={{x: [0, 40, -40, 0]}}
              transition={{duration: 25, repeat: Infinity, ease: "easeInOut"}}
            />

            {/* Content */}
            <motion.div
              initial={{opacity: 0, y: 40}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 2}}
              className="z-10 text-center max-w-3xl"
            >
              <h1 className="text-5xl font-bold mb-4">
                GlobalCare — Smart Healthcare
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                A fully connected system for doctors, patients, and pharmacy
                admins — now with live UI.
              </p>
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-white transition">
                Get Started
              </button>
            </motion.div>
          </div>
          <div className="relative min-h-screen bg-black flex items-center justify-center p-6 overflow-hidden">
            {/* Background pulse */}
            <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-sky-900 via-indigo-900 to-purple-900 opacity-30 blur-3xl" />

            {/* Glass card */}
            <motion.div
              initial={{scale: 0.95, opacity: 0}}
              animate={{scale: 1, opacity: 1}}
              transition={{duration: 3}}
              className="relative z-10 p-8 rounded-3xl backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl text-center max-w-md text-white"
            >
              <h2 className="text-3xl font-bold mb-3">Live Patient Tracker</h2>
              <p className="text-gray-300 mb-4">
                Real-time health monitoring with smooth visuals and soft
                lighting.
              </p>
              <button className="px-5 py-2 bg-sky-600 hover:bg-sky-700 rounded-lg transition">
                Open Dashboard
              </button>
            </motion.div>
          </div>
          <div className="min-h-screen bg-gradient-to-br from-[#1e1e2f] via-[#232336] to-[#191926] p-10 text-white">
            <h2 className="text-3xl font-bold text-center mb-10">
              Live Dashboard
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {title: "Doctors", value: "25"},
                {title: "Active Patients", value: "320"},
                {title: "Orders Today", value: "74"},
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{opacity: 0, y: 30}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 1.5 + i}}
                  className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-xl text-center hover:scale-105 transition-transform"
                >
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="text-3xl font-bold mt-2">{card.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.form>
      ) : (
        <motion.p
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          className="app text-center text-xl font-medium text-gray-700 dark:text-white"
        >
          Loading...
        </motion.p>
      )}
    </motion.div>
  );
};

export default UserProfile;
