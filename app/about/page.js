import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/about/Main";

export default function page() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="h-50"></div>
      </div>
      <div className="relative z-10">
        <Main />
        <Footer />
      </div>
    </>
  );
}
