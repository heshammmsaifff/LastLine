import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/about/Hero";
import VisionMission from "../components/about/VisionMission";

export const metadata = {
  title: "الخط الأخير - معلومات عنّا",
  description:
    "واحدة من الشركات التي تسعى بإصرار لتقديم مستوى مختلف من الجودة والاحترافية في عدة قطاعات أساسية. نعمل في مجال المقاولات بمختلف أنواعها - One of the companies that persistently strives to deliver a different level of quality and professionalism across several key sectors. We operate in the field of contracting of all kinds.",
  keywords: [
    "الخط الأخير",
    "المقاولات العامة",
    "السفر والسياحة",
    "الدعاية والإعلان",
    "خدمات شركات",
    "Last Line",
    "General Contracting",
    "Travel & Tourism",
    "Advertising",
    "Business Services",
  ],
};

export default function page() {
  return (
    <>
      <div>
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
