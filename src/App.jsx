import Navbar from "./comps/Navbar";
import Hero from "./comps/Hero";
import AboutMe from "./comps/AboutMe";
import Experience from "./comps/Experience";
import Projects from "./comps/Projects";

// import blah from "./components/Footer";
import Footer from "./comps/Footer";
import { useEffect, useState } from "react";

// React Component for site analytics
import { Analytics } from "@vercel/analytics/next" 


function App() {
  const [scrolled, setScrolled] = useState(false);

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

      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;