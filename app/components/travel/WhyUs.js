"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function WhyUs() {
  const { t, language } = useLanguage();
  return (
    <>
      {/* title */}
      <div className="items-center mt-20 lg:px-8">
        <h2 className="text-[35px] md:text-[50px] lg:text-[60] xl:text-[60px] text-center font-bold mb-4">
          {language == "ar" ? "مميزات الشركة" : "Company Features"}
        </h2>
        <p className="text-center text-[20px] font-bold">
          {language === "ar" ? "لماذا نحن ؟" : "Why Us ?"}
        </p>
      </div>
      {/* features */}
      <div className="flex flex-col pb-15 justify-center items-center space-y-6 mt-10 lg:px-8">
        {/* <img
          src="/plane.png"
          alt="Airplane"
          className="mb-9 w-30 h-30 object-cover animate-none"
        /> */}
        {/* Feature 1 */}
        <div className="w-[90%] rotate-2 lg:w-1/2 rounded-[20px] p-[3px] bg-gradient-to-r from-[#FC8E1C] via-[#FED8B1] to-[#FC8E1C] shadow-lg">
          {/* Content */}

          <div className="bg-black/70 backdrop-blur-md w-full h-full rounded-[17px] p-6 text-center text-white">
            <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full p-1 bg-gradient-to-r from-[#FC8E1C] via-[#FED8B1] to-[#FC8E1C]">
              <div className="bg-black/70 w-full h-full rounded-full">
                {/* <img
                  src="/plane.png"
                  alt="Airplane"
                  className="w-7 pt-1.5 mr-1.5 h-auto object-cover"
                /> */}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">
              {language === "ar" ? "رحلات مضمونة ومجربة" : "Guaranteed Trips"}
            </h3>
            <p>
              {language === "ar"
                ? "تنظيم احترافي لمسارات الرحلة وضمان جودة الفنادق والتنقلات"
                : "Professional organization of travel itineraries and ensuring the quality of hotels and transportation."}
            </p>
          </div>
        </div>
        {/* Feature 2 */}
        <div className="w-[90%] lg:w-1/2 -rotate-5 rounded-[20px] p-[3px] bg-gradient-to-r from-[#FC8E1C] via-[#FED8B1] to-[#FC8E1C] shadow-lg">
          {/* Content */}
          <div className="bg-black/70 backdrop-blur-md w-full h-full rounded-[17px] p-6 text-center text-white">
            <div className="absolute -top-5 -right-5 w-12 h-12 rounded-full p-1 bg-gradient-to-r from-[#FC8E1C] via-[#FED8B1] to-[#FC8E1C]">
              <div className="bg-black/70 w-full h-full rounded-full">
                {/* <img
                  src="/plane.png"
                  alt="Airplane"
                  className="w-7 pt-1.5 mr-1.5 h-auto object-cover"
                /> */}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">
              {language === "ar"
                ? "معاك علي مدار الساعة"
                : "With You Around the Clock"}
            </h3>
            <p>
              {language === "ar"
                ? "فريق دعم متوفر لمساعدتك أثناء الرحلة وقبلها"
                : "A support team available to assist you during and before the trip."}
            </p>
          </div>
        </div>
        {/* Feature 3 */}
        <div className="w-[90%] rotate-1 lg:w-1/2 rounded-[20px] p-[3px] bg-gradient-to-r from-[#FC8E1C] via-[#FED8B1] to-[#FC8E1C] shadow-lg">
          {/* Content */}
          <div className="bg-black/70 backdrop-blur-md w-full h-full rounded-[17px] p-6 text-center text-white">
            <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full p-1 bg-gradient-to-r from-[#FC8E1C] via-[#FED8B1] to-[#FC8E1C]">
              <div className="bg-black/70 w-full h-full rounded-full">
                {/* <img
                  src="/plane.png"
                  alt="Airplane"
                  className="w-7 pt-1.5 mr-1.5 h-auto object-cover"
                /> */}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">
              {language === "ar" ? "أسعار منافسة" : "Competitive Prices"}
            </h3>
            <p>
              {language === "ar"
                ? "عروض مميزة وتخفيضات حصرية للمجموعات والعائلات"
                : "Special offers and exclusive discounts for groups and families."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
