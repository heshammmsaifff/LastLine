import NavBar from "./components/Navbar";
import Hero from "./components/home/Hero";
import Highlights from "./components/home/Highlights";
import AboutShowcase from "./components/home/AboutShowcase";
import ServicesGrid from "./components/home/ServicesGrid";
import StatsTimeline from "./components/home/StatsTimeline";
import Testimonials from "./components/home/Testimonials";
import Achievments from "./components/home/Achievments";
import ContactHome from "./components/home/ContactHome";
import Footer from "./components/Footer";
import BlogSection from "./components/home/BlogSection";
import Projects from "./components/home/Projects";

export const metadata = {
  title: "الخط الأخير - الصفحة الرئيسية",
  description:
    "في الخط الأخير، نلتزم بتقديم أعلي معايير الجودة في جميع المشاريع بفضل فريق متكامل من المتخصصين ذوي الخبرة الواسعة في مجالات المقاولات العامة، السفر والسياحة، والداعية و الإعلان - In Last Line Holding, we are committed to delivering the highest quality standards in all projects thanks to a fully integrated team of specialists with extensive experience in the fields of general contracting, travel and tourism, and advertising.",
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

export default function Home() {
  return (
    <>
      <div className="relative">
        <Hero />
        <NavBar />
      </div>
      <div className="relative z-10">
        <Highlights />
        <Projects />
        <AboutShowcase />
        <BlogSection />
        <ServicesGrid />
        <StatsTimeline />
        <Testimonials />
        <Achievments />
        <ContactHome />
        <Footer />
      </div>
    </>
  );
}
