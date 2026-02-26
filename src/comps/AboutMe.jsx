import React from "react";

export default function AboutMe() {
  return (
    <section
      id="aboutme"
      className="py-24 bg-[#5c2d14] text-white font-mono"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Profile Image */}
        <div className="flex justify-center md:justify-start">
          <div className="w-69 h-85 rounded-xl border border-orange-300/40 overflow-hidden bg-orange-900/40">
            <img
              src="/jordanprofile.png"
              alt="Jordan Clifford"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About Me
          </h2>

          <p className="text-white-100 leading-relaxed mb-4">
            I’m a Computer Science graduate 
            from Arizona State University with experience building
            data-driven applications, machine learning systems, and full-stack projects. I like
            taking messy real-world problems and turning them into practical software people can
            actually use.
          </p>

          <p className="text-white-100 leading-relaxed mb-6">
            My background includes research experiences at two universities and an internship
            at Fox Tech. I’m especially interested in backend engineering, data engineering,
            and applied machine learning roles.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {[
              "Python",
              "Java", 
              "C",
              "C++",
              "C#",
              ".NET",
              "JavaScript",
              "React",
              "Machine Learning",
              "Docker",
              "SQL",
              "APIs",
              "Git",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-orange-900/60 border border-orange-300/40 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}