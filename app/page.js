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
