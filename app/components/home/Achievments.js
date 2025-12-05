"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function Achievments() {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  const stats = [
    {
      value: 1500,
      label: language === "ar" ? "استشارة" : "consultation",
      rotate: -4,
    },
    { value: 98, label: language === "ar" ? "عميل" : "Client", rotate: 4 },
    { value: 500, label: language === "ar" ? "مشروع" : "Project", rotate: -4 },
  ];

  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[650px] overflow-hidden">
      <Image
        src="/ach-bg.svg"
        alt="background"
        fill
        className="object-cover object-top"
      />

      {/* Content */}
      <div className="relative z-10 text-center pt-[60px] px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-black text-[45px] sm:text-[55px] lg:text-[70px] font-extrabold mb-6"
        >
          {t.achievments.heading}
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-black text-[20px] sm:text-[25px] lg:text-[30px] font-bold"
        >
          {t.achievments.sub}
        </motion.p>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className={`text-[16px] sm:text-[18px] lg:text-[20px] font-semibold mt-[40px] lg:mt-[70px] text-black max-w-[90%] sm:max-w-[600px] lg:max-w-[700px] mx-auto ${
            isRTL
              ? "leading-[45px] sm:leading-[50px] lg:leading-[60px]"
              : "leading-[28px] sm:leading-[35px] lg:leading-[40px]"
          }`}
        >
          {t.achievments.quote}
        </motion.p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center mt-12">
          {stats.map((stat, idx) => {
            // زاوية عشوائية بين -6 و 6 درجات
            const randomRotate = Math.floor(Math.random() * 13) - 9;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, rotate: 0 }} // تبدأ مستقيمة
                whileInView={{ opacity: 1, y: 0, rotate: randomRotate }} // تتحول لزاوية عشوائية
                transition={{ duration: 0.8, delay: 0.2 * idx }}
                viewport={{ once: true }}
                className="relative w-[220px] h-[250px] bg-[#F3BE86] rounded-md shadow-md flex flex-col items-center justify-center"
              >
                <div className="absolute top-0 left-0 w-full h-[45px] bg-[#E18D3D] rounded-t-md"></div>
                <div className="relative z-10 text-center mt-[30px]">
                  <p className="text-[45px] font-extrabold text-[#D5670B]">
                    {stat.value}
                  </p>
                  <p className="text-[40px] font-extrabold text-[#D5670B] mt-[-10px]">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
