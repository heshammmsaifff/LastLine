"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function main() {
  const { t, language } = useLanguage();
  return (
    <div className="text-center h-100 text-6xl align-middle">
      {/* Contact Page */}
      <h2 className="pt-20">About Page</h2>
    </div>
  );
}
