"use client";

import {motion} from "framer-motion";

export default function FlameGradientHero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center p-10">
      {/* Animated Gradient Layer */}
      <motion.div
        initial={{opacity: 0.4}}
        animate={{opacity: 0.7}}
        transition={{duration: 6, repeat: Infinity, repeatType: "reverse"}}
        className="absolute inset-0 bg-gradient-to-br from-red-500 via-yellow-500 to-pink-500 blur-2xl opacity-50 z-0"
      />

      {/* Foreground Card */}
      <div className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-lg max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-3">Your Health. Your Power.</h1>
        <p className="text-gray-200">
          We bring dynamic, glowing interfaces to healthcare tech. Because style
          matters too.
        </p>
        <button className="mt-5 px-6 py-2 bg-red-600 hover:bg-red-700 rounded-xl transition text-white">
          Explore Now
        </button>
      </div>
    </div>
  );
}
