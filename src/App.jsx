import React from "react";
import Navbar from "./components/Navbar.jsx";
// import Hero from "./components/Hero.jsx";
// import Portfolio from "./components/Portfolio.jsx";
// import ClientTestimonials from "./components/ClientTestimonials.jsx";
// import AboutUs from "./components/AboutUs.jsx";
// import HowItWorks from "./components/HowItWorks.jsx";
// import Pricing from "./components/Pricing.jsx";
// import ComparisonTable from "./components/ComparisonTable.jsx";
// import OurStory from "./components/OurStory.jsx";
// import FAQ from "./components/FAQ.jsx";
// import Footer from "./components/Footer.jsx";
import "./styles/global.css";
import "./index.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      {/* <Hero />
      <Portfolio />
      <ClientTestimonials />
      <AboutUs />
      <HowItWorks />
      <Pricing />
      <ComparisonTable />
      <OurStory />
      <FAQ />
      <Footer /> */}
    </div>
  );
};

export default App;
