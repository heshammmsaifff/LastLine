import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/media/Hero";
import Info from "../components/media/Info";
import Services from "../components/media/Services";
import ContactHome from "../components/home/ContactHome";

export const metadata = {
  title: "الخط الأخير - الدعاية والإعلان",
  description: "الخط الأخير القابضة للدعاية و الإعلان",
  keywords: [
    "الخط الأخير",
    "المدونة",
    "الدعاية و الإعلان",
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
        <Info />
        <Services />
        <ContactHome />
        <Footer />
      </div>
    </>
  );
}
