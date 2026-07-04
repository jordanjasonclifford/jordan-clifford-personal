import React from "react";

export default function Hero() {
  return (
    <section className="relative h-[52vh] sm:h-[60vh] md:h-[65vh] flex items-center justify-center text-white overflow-hidden px-4">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover scale-125 sm:scale-135"
      >
        <source src="/gc_vid.mp4" type="video/mp4" />
      </video>

      {/* Warm mesa tint */}
      <div className="absolute inset-0 bg-[#2a140f]/25"></div>

      {/* Hero Badge Card */}
      <div
        className="relative w-full max-w-[92vw] sm:max-w-xl md:max-w-2xl
                   text-center px-5 py-5 sm:px-8 sm:py-7 md:px-10 md:py-8
                   rounded-xl sm:rounded-2xl
                   bg-[#1a1a1a]/75 backdrop-blur-sm
                   border border-orange-300/80
                   shadow-[0_16px_60px_rgba(0,0,0,0.45)]"
      >
        {/* Inner subtle stroke */}
        <div className="absolute inset-2 rounded-lg sm:rounded-xl border border-orange-400/10 pointer-events-none"></div>

        <p className="text-orange-200 font-mono tracking-[0.18em] sm:tracking-widest text-[11px] sm:text-sm md:text-base mb-2 sm:mb-3 leading-snug">
          COMPUTER SCIENCE AT ARIZONA STATE UNIVERSITY
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono font-semibold tracking-tight mb-4 text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.6)] leading-none">
          Jordan Clifford
        </h1>

        <div className="flex justify-center">
          <a
            href="/Jordan_Clifford_Resume_July.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm md:text-base font-mono rounded-md bg-orange-600 hover:bg-orange-500 transition tracking-wide"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
