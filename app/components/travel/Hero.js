"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import RotatingText from "./RotatingText";

export default function Hero() {
  const { t, language } = useLanguage();

  const rotatingTexts =
    language === "ar"
      ? ["revocsiD", "dlorW ehT", "!sU htiW "]
      : ["Discover", "The World", "With Us!"];

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
          src="/travel2.jpg"
          alt={t.heroImageAlt}
          fill
          priority
          sizes="90vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-20 flex flex-col items-center text-center  pt-16 sm:pt-20 lg:pt-28">
        <h1 className="mb-10 text-[40px] sm:text-4xl md:text-6xl lg:text-7xl xl:text-6xl font-bold text-amber-400 max-w-4xl">
          {language == "ar"
            ? "الخط الأخير للسياحة"
            : "The last line for tourism"}
        </h1>
        <h1 className="text-[32px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-bold text-amber-300 max-w-4xl leading-snug">
          {language === "ar" ? "إكتشف العالم" : "Discover the world"}
          <br />

          <span className=" mt-2 text-amber-300">
            {language === "ar" ? "مـــــــعـــــــنـــــــا" : "With us"}
          </span>
        </h1>

        <p className="mt-6 text-center text-lg sm:text-xl md:text-2xl lg:text-2xl text-white/90 max-w-3xl leading-relaxed px-4">
          {language === "ar" ? "" : ""}
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
      <div>
        <RotatingText
          texts={rotatingTexts}
          mainClassName="px-2 text-[60px] sm:px-2 md:px-3 text-3xl bg-white/20 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 10, stiffness: 400 }}
          rotationInterval={3000}
        />
      </div>
    </section>
  );
}
