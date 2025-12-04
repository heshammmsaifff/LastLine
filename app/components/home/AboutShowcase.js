"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const galleryImages = [
  { src: "/Rectangle34.png", alt: "Gallery tower 1" },
  { src: "/Rectangle35.png", alt: "Gallery tower 2" },
  { src: "/Rectangle36.png", alt: "Gallery tower 3" },
];

export default function AboutShowcase() {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <section className="w-full px-4 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10  text-white  lg:flex-row">
        <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
          <span className="block h-1 w-[300px] text-center align-middle bg-[#F6A653] sm:w-[140px] mx-auto" />
          <h2 className="mt-6 mb-6 text-5xl md:text-5xl leading-[80px] font-bold text-center align-middle text-[#FED8B1] sm:text-4xl">
            {t.about.heading.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h2>
          <span className="block h-1 w-[300px] mb-30 text-center align-middle bg-[#F6A653] sm:w-[140px] mx-auto" />
          <p className="mt-6 text-lg leading-[50px] text-white/90">
            {t.about.subheading}
          </p>
          <p className="mt-4 text-base  leading-[50px] text-white/80">
            {t.about.body}
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <div className="relative h-68 overflow-hidden rounded-[32px]">
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {galleryImages.slice(1).map((image) => (
              <div
                key={image.alt}
                className="relative h-[390px] overflow-hidden rounded-[32px]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link
          href="/about"
          className="group mt-10 inline-flex items-center overflow-hidden rounded-2xl text-lg font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
        >
          <span className="relative bg-black px-8 py-3 text-[#F6A653] transition-all duration-300 group-hover:bg-[#d9d9d9] group-hover:text-[#F2842C]">
            <span className="relative z-10">{t.about.cta}</span>
            <span className="absolute inset-0 translate-y-full bg-[#F6A653]/15 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
          </span>
          <span className="relative flex items-center justify-center bg-[#d9d9d9] px-5 py-3 text-[#F6A653] transition-all duration-300 group-hover:bg-black">
            <ArrowRight
              className={`h-6 w-6 transition-all duration-300 ${
                isRTL
                  ? "rotate-180 group-hover:-translate-x-1"
                  : "group-hover:translate-x-1"
              }`}
            />
            <span className="absolute inset-0 translate-x-full bg-[#F6A653]/15 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </span>
        </Link>
      </div>
    </section>
  );
}
