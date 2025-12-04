// ContactHome.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function ContactContract() {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <section className="mt-8 w-full py-8 md:py-12 lg:py-20 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="w-180 max-w-7xl flex flex-col md:flex-row items-center gap-6 md:gap-12">
        {/* Image + Button for medium/large screens */}
        <div className="relative w-full md:flex-1 lg:flex-1 hidden md:block rounded-lg overflow-visible h-[150px] md:h-[120px] lg:h-[120px] bg-gray-200">
          <Image
            src="/contact-h.svg"
            fill
            alt="contact"
            className="object-cover rounded-lg"
          />

          {/* Button inside image */}
          <div className="absolute top-1/2 left-6 -translate-y-1/2">
            <Link
              href="/contact"
              className="group inline-flex items-center overflow-hidden rounded-2xl text-lg font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
            >
              <span className="relative bg-white/20 px-6 py-3 text-black transition-all duration-300 group-hover:bg-[#d9d9d9] group-hover:text-[#F2842C]">
                {language === "ar" ? "تواصل معنا الآن!" : "Contact us!"}
              </span>
              <span className="relative flex items-center justify-center bg-[#d9d9d9] px-4 py-3 text-[#F6A653] transition-all duration-300 group-hover:bg-black">
                <ArrowRight
                  className={`h-6 w-6 transition-all duration-300 ${
                    isRTL
                      ? "rotate-180 group-hover:-translate-x-1"
                      : "group-hover:translate-x-1"
                  }`}
                />
              </span>
            </Link>
          </div>

          {/* Contact Box */}
          <div className="absolute  right-6 top-1/2 md:h-40 -translate-y-1/2 w-[300px] bg-white/30 backdrop-blur-md border border-white rounded-md p-6 flex flex-col justify-center shadow-lg">
            <h3 className="text-xl  text-black font-bold mb-4 text-center">
              {language === "ar" ? "تواصل معنا" : "Contact Us"}
            </h3>
            <p className="text-l text-black mb-2 text-center">
              {language === "ar"
                ? "يسعدنا تواصلكم معنا للإجابة عن استفساراتكم وتقديم أفضل الحلول لمشاريعكم."
                : "We are happy to hear from you to answer your questions and provide the best solutions for your projects."}
            </p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col items-center md:hidden w-full gap-4 bg-gradient-to-r from-orange-200 to-orange-400 rounded-lg p-6">
          {/* Contact Box on top */}
          <div className="w-full bg-white/30 backdrop-blur-md border border-white rounded-md p-4 flex flex-col justify-center shadow-lg">
            <h3 className="text-xl text-black font-bold mb-4 text-center">
              {language === "ar" ? "تواصل معنا" : "Contact Us"}
            </h3>
            <p className="text-sm text-black mb-2 text-center">
              {language === "ar"
                ? "للحصول علي استشارة مجانية و ابدأ مشروعك بأعلي معايير الجودة"
                : "Get free consultation and start your project with the highest quality standards."}
            </p>
          </div>

          {/* Button below */}
          <Link
            href="/contact"
            className="group inline-flex items-center overflow-hidden rounded-2xl text-lg font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
          >
            <span className="relative bg-white/20 px-6 py-3 text-black transition-all duration-300 group-hover:bg-[#d9d9d9] group-hover:text-[#F2842C]">
              {language === "ar" ? "استشارة مجانية" : "Free consultation"}
            </span>
            <span className="relative flex items-center justify-center bg-[#d9d9d9] px-4 py-3 text-[#F6A653] transition-all duration-300 group-hover:bg-black">
              <ArrowRight
                className={`h-6 w-6 transition-all duration-300 ${
                  isRTL
                    ? "rotate-180 group-hover:-translate-x-1"
                    : "group-hover:translate-x-1"
                }`}
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
