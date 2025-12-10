"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import Image from "next/image";

export default function Destinations() {
  const { language } = useLanguage();

  const destinations = [
    {
      key: "egypt",
      title: language === "ar" ? "مصر الفرعونية" : "Ancient Egypt",
      desc:
        language === "ar"
          ? "موطن الحضارة الفرعونية وأحد أهم المقاصد السياحية في العالم."
          : "Home of the ancient pharaonic civilization and a top world destination.",
      img: "/Egypt.avif",
    },
    {
      key: "maldives",
      title: language === "ar" ? "جزر المالديف" : "Maldives",
      desc:
        language === "ar"
          ? "مياه صافية، شواطئ بيضاء، وفخامة لا مثيل لها."
          : "Crystal-clear waters, white sandy beaches, and pure luxury.",
      img: "/maldives.avif",
    },
    {
      key: "bali",
      title: language === "ar" ? "بالي" : "Bali",
      desc:
        language === "ar"
          ? "جزيرة استوائية رائعة تجمع بين الشواطئ والطبيعة الساحرة."
          : "A tropical island combining stunning beaches and lush nature.",
      img: "/bali.avif",
    },
    {
      key: "switzerland",
      title: language === "ar" ? "سويسرا" : "Switzerland",
      desc:
        language === "ar"
          ? "جبال ثلجية، بحيرات هادئة، ومناظر خلابة لا تُنسى."
          : "Snowy mountains, peaceful lakes, and unforgettable scenic views.",
      img: "/switzerland.avif",
    },
  ];

  return (
    <section className="w-full py-16 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
      >
        {language === "ar" ? "أهم الوجهات السياحية" : "Top Destinations"}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 w-full max-w-6xl px-6">
        {destinations.map((item, i) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative group cursor-pointer rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={600}
              height={400}
              className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold mb-2 drop-shadow-lg">
                {item.title}
              </h3>
              <p className="text-white/90 text-sm leading-relaxed drop-shadow-lg">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
