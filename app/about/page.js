import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/about/Hero";
import VisionMission from "../components/about/VisionMission";

export default function page() {
  return (
    <>
      <div>
        {/* content */}
        <div className="relative">
          <Navbar />
          <div className="h-50"></div>
        </div>
        <div className="relative z-10">
          <Hero />
          <VisionMission />
          <Footer />
        </div>
      </div>
    </>
  );
}
