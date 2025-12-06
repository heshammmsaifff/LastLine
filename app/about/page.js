import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function page() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-4">معلومات عنا</h1>
        <p className="text-lg mb-8">هنا هنعمل معلومات عنا</p>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
