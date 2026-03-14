import React from "react";
import { track } from "@vercel/analytics"; // added for tracking clicks on project links


export default function Projects() {
  const projects = [
    {
      title: "NBA Player Performance Analysis",
      summary:
        "Data analysis of NBA player performance using Python, Pandas, and Matplotlib to uncover insights and trends.",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/jordanjasonclifford/nba_data_engineering",
          target: "_blank",
          rel: "noopener noreferrer",
          onClick: () => track("NBA Project GitHub Click"),
        },
      ],
      bullets: [
        "Developed Python scripts using the NBA API to extract and aggregate 10+ seasons of NBA game data from all 30 teams and 60 all-stars.",
        "Built a data pipeline using Pandas and PostgreSQL to clean, transform, and store player and team statistics.",
        "Created Power BI dashboards analyzing Devin Booker performance vs All-Star cohorts, team outcomes, and matchup contexts.",
        "Calculated efficiency metrics and trend splits (home/away, wins/losses, opponent) to surface player performance insights."
      ],
    },
    {
      title: "Edge AI Video Analytics (Capstone)",
      summary:
        "Edge-based real-time video analytics system deployed on low-power Rockchip hardware.",
      links: [
        {
          label: "Presentation",
          href: "edge_presentation.pdf",
          target: "_blank",
          rel: "noopener noreferrer",
          onClick: () => track("Edge AI Project Presentation Click"),
          
        },
        {
          label: "Showcase Video",
          href: "https://www.youtube.com/watch?v=OxgRBRKGDXY",
          target: "_blank",
          rel: "noopener noreferrer",
          onClick: () => track("Edge AI Project Video Click"),
        },
      ],
      bullets: [
        "Integrated ONNX YOLOv8 for person detection/counting optimized for edge inference latency.",
        "Built a containerized FastAPI inference microservice using ONNX Runtime.",
        "Implemented people counting, queue detection, and violence detection analytics modules.",
        "Deployed a Docker Compose microservices stack to K3s with Prometheus/Grafana monitoring.",
        "Integrated Go2RTC (RTSP ingestion), CouchDB (event storage), and Keycloak (auth).",
      ],
    },
    {
      title: "Crime Classification ML Pipeline (CSE ML Project)",
      summary:
        "End-to-end supervised learning pipeline to classify crime categories with reproducible milestones.",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/jordanjasonclifford/atlanta-crime-dataset",
          target: "_blank",
          rel: "noopener noreferrer",
          onClick: () => track("Crime Classification GitHub Click"),
        },
      ],
      bullets: [
        "Performed cleaning, encoding, scaling, and EDA to understand imbalance and feature relationships.",
        "Implemented Logistic Regression, kNN, Decision Trees, and Random Forest with model comparisons.",
        "Evaluated with precision/recall/F1, confusion matrices, and cross-validation + hyperparameter tuning.",
        "Completed ethical impact analysis on bias, proxy features, and responsible ML deployment risks.",
      ],
    },
    {
      title: "ASU Move-Out Marketplace Prototype (HCI Project)",
      summary:
        "Figma prototype for an ASU-only marketplace supporting move-out workflows and safer meetups.",
      links: [
        {
          label: "Figma",
          href: "https://www.figma.com/proto/izmP5XirTx9rBOY9u0Aego/Untitled?node-id=1-437&p=f&t=x9NXJGJAbAHzAcaH-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
          onClick: () => track("ASU Move-Out Figma Click"),
        },
      ],
      bullets: [
        "Conducted PACT analysis, user interviews, personas, and task scenarios to drive requirements.",
        "Built horizontal + vertical prototypes (low fidelity and high fidelity) including an end-to-end ‘Buy Item’ flow.",
        "Iterated designs using usability feedback (labels, verified badges, ratings, calendar reminders).",
        "Ran an A/B usability study with statistical analysis (t-tests, effect sizes) to compare navigation designs.",
      ],
    },
    {
      title: "DOT Graph Visualizer + Testing + CI (Java)",
      summary:
        "Java tool to parse/edit DOT graphs and export to DOT/PNG with strong test coverage and CI.",
      
      bullets: [
        "Implemented node/edge creation/removal with DOT parsing and Graphviz export.",
        "Built comprehensive JUnit test suites covering parsing, edge cases, and output validation.",
        "Added BFS/DFS path finding and refactored with Template Method + Strategy patterns.",
        "Set up Maven builds and GitHub Actions CI to run tests on every commit.",
      ],
    },
    {
      title: ".NET Weather + News Service Integration",
      summary:
        ".NET application integrating multiple external services into a single workflow with robust error handling.",
      bullets: [
        "Designed and consumed service endpoints with consistent request/response parsing.",
        "Handled timeouts, missing fields, and bad responses to fail gracefully under unreliable network calls.",
        "Separated service clients, business logic, and I/O to keep the codebase extensible and testable.",
        "Validated behavior across locations/queries and documented assumptions for handoff.",
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[#2a140f] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-amber-500/20 bg-[#3a1f18]/70 p-6 transition hover:-translate-y-1 hover:border-amber-400/50 hover:bg-[#3f2119]/80"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>

              <p className="text-amber-100/80 mb-4 leading-relaxed">
                {p.summary}
              </p>

              {/* Optional Links */}
              {p.links && (
                <div className="flex flex-wrap gap-3 mb-5">
                  {p.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target={link.target}
                      rel={link.rel}
                      onClick={link.onClick}
                      className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 px-4 py-1.5 text-xs text-amber-200 hover:bg-amber-400/10 hover:border-amber-300/70 transition"
                    >
                      {link.label}
                      <span className="opacity-70">↗</span>
                    </a>
                  ))}
                </div>
              )}

              <ul className="space-y-3 text-neutral-200">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400/80 flex-shrink-0" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}