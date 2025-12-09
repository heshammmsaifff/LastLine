import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/travel/Hero";
import WhyUs from "../components/travel/WhyUs";
import ContactHome from "../components/home/ContactHome";

export const metadata = {
  title: "الخط الأخير - السفر والسياحة",
  description: "الخط الأخير القابضة للسفر و السياحة",
  keywords: [
    "الخط الأخير",
    "السفر والسياحة",
    "المدونة",
    "الأخبار",
    "مقالات",
    "Last Line",
    "Blog",
    "Updates",
  ],
};

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
