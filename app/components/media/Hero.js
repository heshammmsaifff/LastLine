"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <section
      className="
        relative
        w-full 
        overflow-hidden 
        flex flex-col 
        justify-between
        min-h-screen
        pt-18
      "
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/media4.jpg"
          alt={t.heroImageAlt}
          fill
          priority
          sizes="90vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-20 flex flex-col items-center text-center  pt-16 sm:pt-20 lg:pt-28 ">
        <h1 className="mb-10 text-[40px] sm:text-4xl md:text-6xl lg:text-7xl xl:text-6xl font-bold text-[#FED8B1] max-w-4xl">
          {language == "ar"
            ? "الخط الأخير للدعاية و الإعلان"
            : "The last line of advertising and publicity"}
        </h1>
        <h2 className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold text-amber-300 max-w-4xl leading-snug">
          {language === "ar" ? "هنا تبدأ" : "Here begins"}
          <br />

          <span className=" mt-2 text-amber-300">
            {language === "ar" ? "قــوتــك" : "Your Power"}
          </span>
        </h2>

        <p className="mt-6 text-center text-lg sm:text-xl md:text-2xl lg:text-2xl text-white/90 max-w-3xl leading-relaxed px-4">
          {language === "ar"
            ? "نقدم حلول إعلانية مبتكرة تعمل على تعزيز علامتك التجارية وجذب جمهورك."
            : "We provide innovative advertising solutions that elevate your brand and captivate your audience."}
        </p>

        <Link
          href="/contact"
          className={`
    mt-6 inline-block bg-[#E69647] text-black font-bold px-8 py-4
    rounded-t-[20px] rounded-b-[30px]
    transition-colors duration-300
    hover:bg-[#A67B5B] mb-10
  `}
        >
          {language === "ar" ? "ابدأ الآن!" : "Start Now!"}
        </Link>
      </div>
    </section>
  );
}
