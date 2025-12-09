import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/travel/Hero";
import WhyUs from "../components/travel/WhyUs";
import ContactHome from "../components/home/ContactHome";

export default function page() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Hero />
      </div>
      <div className="relative z-10">
        <WhyUs />
        <ContactHome />
        <Footer />
      </div>
    </>
  );
}
