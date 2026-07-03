import Navbar from "./comps/Navbar";
import Hero from "./comps/Hero";
import AboutMe from "./comps/AboutMe";
import Experience from "./comps/Experience";
import Projects from "./comps/Projects";

// import blah from "./components/Footer";
import Footer from "./comps/Footer";
import { useEffect, useState } from "react";

// React Component for site analytics
import { Analytics } from "@vercel/analytics/react"; 


function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const cursorMediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    function updateSnakeCursor(event) {
      document.body.classList.toggle("snake-cursor", event.matches);
    }

    updateSnakeCursor(cursorMediaQuery);
    cursorMediaQuery.addEventListener("change", updateSnakeCursor);

    return () => {
      cursorMediaQuery.removeEventListener("change", updateSnakeCursor);
      document.body.classList.remove("snake-cursor");
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar scrolled={scrolled} />
      <Analytics /> 
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Footer />
      
    </div>
  );
}

export default App;
