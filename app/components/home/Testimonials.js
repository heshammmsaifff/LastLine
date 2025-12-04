"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function Testimonials() {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <section className="w-full px-4 py-24 sm:px-8 lg:px-12">
      {/* Title */}
      <div className="mx-auto max-w-4xl text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold">
          {t.testimonials.heading}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-white/70">
          {t.testimonials.subtitle}
        </p>
      </div>

      {/* Responsive Testimonial Box */}
      <div
        className="
          relative mx-auto mt-16 flex items-center justify-center 
          w-full 
          max-w-[1230px]
          h-[350px] 
          sm:h-[300px] 
          md:h-[400px] 
          lg:h-[520px]
          px-4
        "
      >
        {/* Frame Corners */}
        <span className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-t-4 border-r-4 border-[#F4933E]" />
        <span className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-t-4 border-l-4 border-[#F4933E]" />
        <span className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-b-4 border-r-4 border-[#F4933E]" />
        <span className="absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-b-4 border-l-4 border-[#F4933E]" />

        {/* Inner Text Area */}
        <div
          className="
            flex items-center justify-center text-center 
            w-full 
            max-w-[1100px] 
            h-full 
            px-2 sm:px-6 md:px-8
          "
        >
          <p
            className="
              font-[Alexandria]
              font-medium
              text-white
              max-w-[949px] 
              mx-auto

              text-[20px] leading-[34px]
              sm:text-[18px] sm:leading-[38px]
              md:text-[28px] md:leading-[55px]
              lg:text-[40px] lg:leading-[85px]
            "
          >
            {t.testimonials.quote}
          </p>
        </div>
      </div>
    </section>
  );
}
