import React from "react";
import { track } from "@vercel/analytics"; // added for tracking clicks on project links

export default function Experience() {
  const experiences = [
    {
      company: "University of Nevada, Las Vegas",
      role: "Undergraduate Research Assistant",
      location: "Las Vegas, NV",
      date: "06/2025 – 08/2025",
      logo: "/unlv.png",
      links: [
        { label: "Poster", 
          href: "/unlv_poster.pdf", 
          target: "_blank", 
          rel: "noopener noreferrer", 
          onClick: () => track("UNLV Research Poster Click") 
        },
        { label: "Presentation", 
          href: "/unlv_presentation_at_icseng.pdf", 
          target: "_blank", 
          rel: "noopener noreferrer", 
          onClick: () => track("UNLV Research Presentation Click") 
        },
        {
          label: "GitHub",
          href: "https://github.com/jordanjasonclifford/Multi-Modal-Route-Optimization-with-Hybrid-Travel",
          target: "_blank",
          rel: "noopener noreferrer",
          onClick: () => track("UNLV Research GitHub Click"),
        },
      ],
      bullets: [
        "Engineered a hybrid travel-time prediction system integrating Google Maps API route data with supervised ML models across 24k+ multi-modal samples.",
        "Designed and implemented reinforcement learning experiments to optimize commuter mode selection under time-of-day and location constraints.",
        "Performed feature engineering and comparative evaluation to quantify travel-time improvements and projected emissions impact.",
        "Authored a peer-reviewed research paper for ICSEng 2025 (publication pending late 2026).",
      ],
    },
    {
      company: "FOX (Broadcast Engineering)",
      role: "Software Engineer Intern",
      location: "Tempe, AZ",
      date: "09/2024 – 11/2024",
      logo: "/foxtech.jpg",
      bullets: [
        "Designed and deployed AWS Lambda integrations between Infoblox (enterprise DNS/IP address management) and NetBox (network source-of-truth system), eliminating manual reconciliation workflows and reducing inconsistencies by 40%.",
        "Built and iterated on an internal retrieval-augmented generation (RAG) chatbot over engineering documentation to accelerate troubleshooting and onboarding.",
      ],
    },
    {
      company: "University of Tennessee at Chattanooga",
      role: "Undergraduate Research Assistant",
      location: "Chattanooga, TN",
      date: "05/2024 – 07/2024",
      logo: "/utc.jpg",
      links: [{ label: "Presentation", 
              href: "/utc_presentation.pdf", 
              target: "_blank", 
              rel: "noopener noreferrer", 
              onClick: () => track("UTC Research Presentation Click") }],
      bullets: [
        "Developed Python-based data pipelines to preprocess and filter 800+ hypothetical protein records into high-confidence biomarker candidates.",
        "Applied multi-stage computational screening (stability metrics, localization prediction, domain analysis) to rank and prioritize samples.",
        "Automated batch evaluation workflows, improving reproducibility and reducing analysis time by ~50%.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-28 bg-[#6a3422] text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Experience</h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-orange-900/20 bg-orange-950/20 backdrop-blur-md p-6 transition hover:-translate-y-1 hover:scale-105 hover:bg-orange-900/30 hover:border-amber-400/40"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Logo */}
                <div className="w-14 h-14 rounded-xl bg-black/40 flex items-center justify-center">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Role + Date */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-1">
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <span className="text-xs text-gray-400 mt-1 md:mt-0">
                      {exp.date}
                    </span>
                  </div>

                  {/* Company */}
                  <p className="text-amber-400 text-sm mb-4">
                    {exp.company} • {exp.location}
                  </p>

                  {/* Bullets */}
                  <ul className="list-disc list-inside text-gray-200 space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>

                  {/* Links, only if present */}
                  {exp.links && (
                    <div className="flex flex-wrap gap-3 mt-5">
                      {exp.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.href}
                          target={link.target}
                          rel={link.rel}
                          onClick={link.onClick}
                          className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 px-4 py-1.5 text-xs text-amber-300 hover:bg-amber-400/10 transition"
                        >
                          {link.label}
                          <span className="opacity-70">↗</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}