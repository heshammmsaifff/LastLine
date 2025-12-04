"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

export default function Achievments() {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <section
      className="
    relative w-full 
    min-h-[400px] 
    sm:min-h-[500px] 
    lg:min-h-[650px]
  "
    >
      <Image
        src="/ach-bg.svg"
        alt="background"
        fill
        className="object-cover object-top"
      />

      {/* Content */}
      <div className="relative z-10 text-center pt-[60px] px-4">
        <h2 className="text-black text-[45px] sm:text-[55px] lg:text-[70px] font-extrabold mb-6">
          {t.achievments.heading}
        </h2>

        <p className="text-black text-[20px] sm:text-[25px] lg:text-[30px] font-bold">
          {t.achievments.sub}
        </p>

        <p
          className={`
            text-[16px] sm:text-[18px] lg:text-[20px] 
            font-semibold mt-[40px] lg:mt-[70px] text-black 
            max-w-[90%] sm:max-w-[600px] lg:max-w-[700px] mx-auto
            ${
              isRTL
                ? "leading-[45px] sm:leading-[50px] lg:leading-[60px]"
                : "leading-[28px] sm:leading-[35px] lg:leading-[40px]"
            }
          `}
        >
          {t.achievments.quote}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          <div className="relative w-[220px] h-[250px] bg-[#F3BE86] rounded-md rotate-[-4deg] shadow-md flex flex-col items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-[45px] bg-[#E18D3D] rounded-t-md"></div>
            <div className="relative z-10 text-center mt-[30px]">
              <p className="text-[45px] font-extrabold text-[#D5670B]">1500</p>
              <p className="text-[40px] font-extrabold text-[#D5670B] mt-[-10px]">
                {language === "ar" ? "استشارة" : "consultation"}
              </p>
            </div>
          </div>

          <div className="relative w-[220px] h-[250px] bg-[#F3BE86] rounded-md rotate-[4deg] shadow-md flex flex-col items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-[45px] bg-[#E18D3D] rounded-t-md"></div>
            <div className="relative z-10 text-center mt-[30px]">
              <p className="text-[45px] font-extrabold text-[#D5670B]">98</p>
              <p className="text-[40px] font-extrabold text-[#D5670B] mt-[-10px]">
                {language === "ar" ? "عميل" : "Client"}
              </p>
            </div>
          </div>

          <div className="relative w-[220px] h-[250px] bg-[#F3BE86] rounded-md rotate-[-4deg] shadow-md flex flex-col items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-[45px] bg-[#E18D3D] rounded-t-md"></div>
            <div className="relative z-10 text-center mt-[30px]">
              <p className="text-[45px] font-extrabold text-[#D5670B]">500</p>
              <p className="text-[40px] font-extrabold text-[#D5670B] mt-[-10px]">
                {language === "ar" ? "مشروع" : "Project"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
