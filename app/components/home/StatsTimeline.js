"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { motion, useAnimation, useInView } from "framer-motion";

export default function StatsTimeline() {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  const items = t.stats.items;
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-200px",
  });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section ref={sectionRef} className="w-full px-4 py-20 sm:px-8 lg:px-12">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-5xl text-center text-white"
      >
        <h2 className="text-4xl font-bold">{t.stats.heading}</h2>
        <p className="mt-3 text-base text-white/80">{t.stats.subtitle}</p>
      </motion.div>

      {/* Items */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="mx-auto mt-12 flex max-w-5xl flex-col gap-8"
      >
        {items.map((item, idx) => (
          <motion.article
            key={item.title}
            variants={itemVariants}
            className="
              relative flex flex-col gap-3 rounded-3xl border border-white/10 
              bg-white/5 px-6 py-6 text-white 
              shadow-[0_25px_80px_-50px_rgba(0,0,0,0.8)] 
              backdrop-blur-xl overflow-hidden
            "
          >
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#F4A65A]/10 to-transparent blur-2xl" />

            {/* Header */}
            <div
              className={`flex items-center justify-between gap-4 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              <p className="text-2xl font-bold">{item.title}</p>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={
                  isInView
                    ? {
                        scale: 1,
                        opacity: 1,
                        transition: { delay: idx * 0.15 },
                      }
                    : {}
                }
                className="flex items-center gap-2 rounded-2xl bg-[#F4A65A]/90 px-4 py-2 text-lg font-semibold text-black shadow"
              >
                {item.year}
              </motion.div>
            </div>

            {/* Description */}
            <div
              className={`text-sm text-white/80 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {item.description}
            </div>

            {/* Progress Bar */}
            <div className="relative mt-2 h-4 overflow-hidden rounded-full bg-white/20">
              {/* bar */}
              <motion.span
                initial={{ width: "0%" }}
                animate={
                  isInView
                    ? {
                        width: `${item.progress}%`,
                        transition: {
                          duration: 1.4,
                          ease: [0.34, 1.56, 0.64, 1],
                          delay: idx * 0.15,
                        },
                      }
                    : {}
                }
                className="absolute inset-y-0 rounded-full bg-gradient-to-r from-[#F4A65A] to-[#F18B32]"
              />

              {/* indicator circle */}
              {/* <motion.span
                initial={{ x: -20, opacity: 0 }}
                animate={
                  isInView
                    ? {
                        x: `calc(${item.progress}% - 10px)`,
                        opacity: 1,
                        transition: {
                          duration: 1.4,
                          ease: [0.34, 1.56, 0.64, 1],
                          delay: idx * 0.18,
                        },
                      }
                    : {}
                }
                className="absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border-4 border-black/40 bg-[#F4A65A]"
                style={{ left: 0 }}
              /> */}
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="mt-12 flex justify-center"
      >
        <Link
          href="/projects"
          className="group inline-flex items-center overflow-hidden rounded-2xl text-lg font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
        >
          <span className="relative bg-black px-8 py-3 text-[#F6A653] transition-all duration-300 group-hover:bg-[#d9d9d9] group-hover:text-[#F2842C]">
            <span className="relative z-10">{t.stats.cta}</span>
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
      </motion.div>
    </section>
  );
}
