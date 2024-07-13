import React, { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, StarsCanvas } from "./components";

// Dynamic imports for components
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
// const Resume = lazy(() => import("./components/Resume"));
// const Feedbacks = lazy(() => import("./components/Feedbacks"));
// const EarthCanvas = lazy(() => import("./components/EarthCanvas"));
// const ComputersCanvas = lazy(() => import("./components/ComputersCanvas"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <ComputersCanvas /> */}
          <About />
          <Experience />
          <Tech />
          <Works />
          {/* <Resume /> */}
          {/* <Feedbacks /> */}
          <div className="relative z-0">
            <Contact />
            {/* <EarthCanvas /> */}
            <StarsCanvas />
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
