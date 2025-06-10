"use client";

export default function Home() {
  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/images/home-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/70"></div>{" "}
        <div className="relative z-10 flex flex-col justify-center min-h-screen px-4 sm:px-6 lg:px-16">
          <div className="max-w-2xl ml-0 sm:ml-8 lg:ml-16 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Welcome to <br />
              <span className="text-blue-400">Global Care</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
              Providing Quality Healthcare Services Worldwide
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-xl">
              Experience world-class medical care with our team of expert
              healthcare professionals dedicated to your wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all">
                Get Started
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-3 rounded-lg text-lg font-semibold transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
