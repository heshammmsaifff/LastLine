import React from "react";
import Hero from "../components/contract/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Info from "../components/contract/Info";
import Features from "../components/contract/Features";
import ContactHome from "../components/home/ContactHome";

export default function page() {
  return (
    <>
      <div className="relative">
        <Hero />
        <Navbar />
      </div>
      <div className="relative z-10">
        <Info />
        <Features />
        <ContactHome />
        <Footer />
      </div>
    </>
  );
}
