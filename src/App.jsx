import { useEffect, useState } from "react"; //  Added useState import
import { AnimatePresence } from "framer-motion"; //  Added for smooth fade-out exit transitions
import About from "./Components/About";
import { Contact } from "./Components/Contact";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Technolgies from "./Components/Technolgies";
import Loader from "./Components/Loader"; //  Make sure to create this file in your Components folder!

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Forces the page to the absolute top on every refresh
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    // Controls how long the loading splash screen stays visible (1.8 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Framer Motion watches the element inside here to run its exit transition when isLoading turns false */}
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="portfolio-loader" />}
      </AnimatePresence>

      <div className="relative overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 bg-neutral-950">
        {/* 🌌 Animated Background Layers (Combined dots + radial glow) */}
        <div className="fixed inset-0 -z-10 h-full w-full pointer-events-none">
          <div className="absolute inset-0 bg-dot-pattern" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </div>

        {/* Main Layout Container */}
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Technolgies />
          <Education />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default App;
