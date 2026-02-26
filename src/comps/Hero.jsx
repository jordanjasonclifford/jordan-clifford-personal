import React from "react";

export default function Hero() {
  return (
    <section className="relative h-[65vh] flex items-center justify-center text-white overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover scale-135"
      >
        <source src="/gc_vid.mp4" type="video/mp4" />
      </video>

      {/* Warm desert tint */}
      <div className="absolute inset-0"></div>

      {/* Hero Badge Card */}
      <div className="relative text-center max-w-2xl px-10 py-8 rounded-2xl 
                      bg-[#1a1a1a]/95 
                      border-2 border-orange-300 
                      shadow-[0_12px_50px_rgba(0,0,0,0.7)]">

        {/* Inner subtle stroke */}
        <div className="absolute inset-2 rounded-xl border border-orange-400/20 pointer-events-none"></div>

        <p className="text-orange-200 font-mono tracking-widest text-sm sm:text-base mb-3">
          COMPUTER SCIENCE AT ARIZONA STATE UNIVERSITY
        </p>

        <h1 className="text-4xl sm:text-5xl font-mono font-semibold tracking-tight mb-4 text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.6)]">
          Jordan Clifford
        </h1>

       

        <div className="flex justify-center">
          <a
            href="/Tech_Resume_Jan_2026.pdf"
            target="_blank"
            className="px-6 py-2 text-xs sm:text-base font-mono rounded-md bg-orange-600 hover:bg-orange-500 
                       transition tracking-wide"
          >
            View Resume
          </a>
        </div>
      </div>

    </section>
  );
}