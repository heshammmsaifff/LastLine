import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/contact/ContactForm";

export default function page() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="h-50"></div>
      </div>
      <div className="relative z-10">
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
