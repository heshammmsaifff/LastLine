"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";

export default function Hero() {
  const { t, language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const ctaImage =
    language === "en"
      ? isHovered
        ? "/ctaeh.png"
        : "/ctae.png"
      : isHovered
      ? "/ctah.png"
      : "/cta.png";

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
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Hero2.png"
          alt={t.heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/40" />
      </div>

      {/* CONTENT CENTER */}
      <div className="relative z-20 flex flex-col items-center text-center text-white px-4 pt-16 sm:pt-20 lg:pt-28">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-sm sm:text-lg md:text-base font-semibold uppercase tracking-[0.3em] text-white/70"
        >
          {t.heroBadge}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-15 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-[#FED8B1] max-w-4xl"
        >
          {t.heroTitle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-15 text-xl sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl"
        >
          {t.heroDescription.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </motion.p>
      </div>

      {/* CTA BOTTOM */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="relative mt-15 z-20 flex justify-center -mb-10 lg:-mb-14 pb-10 sm:pb-10 lg:pb-14"
      >
        <Link
          href="/contact"
          className="transition-transform hover:scale-105"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={ctaImage}
            alt={t.heroCTA}
            width={240}
            height={70}
            className="w-[170px] sm:w-[190px] md:w-[210px] lg:w-[240px]"
            priority
          />
        </Link>
      </motion.div>
    </section>
  );
}
