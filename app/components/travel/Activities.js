"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function Activities() {
  const { t, language } = useLanguage();

  const translations = {
    en: {
      boat: {
        title: "Boat Adventure",
        description:
          "Enjoy a relaxing or thrilling boat journey with stunning views.",
      },
      hiking: {
        title: "Hiking Experience",
        description:
          "Explore breathtaking trails surrounded by nature and fresh air.",
      },
      climb: {
        title: "Rock Climbing",
        description:
          "Challenge yourself with exciting climbing routes for all levels.",
      },
      skiing: {
        title: "Skiing Adventure",
        description: "Glide through sandy mountains for an unforgettable fun.",
      },
    },
    ar: {
      boat: {
        title: "مغامرة القارب",
        description:
          "استمتع برحلة بالقارب سواء كانت مريحة أو مليئة بالإثارة مع مناظر رائعة.",
      },
      hiking: {
        title: "تجربة الهايكنج",
        description: "اكتشف مسارات خلابة وسط الطبيعة والهواء النقي.",
      },
      climb: {
        title: "تسلق الصخور",
        description: "تحدى نفسك مع مسارات التسلق المناسبة لجميع المستويات.",
      },
      skiing: {
        title: "مغامرة التزلج",
        description: "انطلق فوق الجبال الرملية لقضاء وقت لا يُنسى.",
      },
    },
  };

  const langSet = translations[language] || translations.en;

  const activities = [
    {
      key: "boat",
      title: langSet.boat.title,
      description: langSet.boat.description,
      img: "/boat.avif",
    },
    {
      key: "hiking",
      title: langSet.hiking.title,
      description: langSet.hiking.description,
      img: "/hiking.avif",
    },
    {
      key: "climb",
      title: langSet.climb.title,
      description: langSet.climb.description,
      img: "/climb.avif",
    },
    {
      key: "skiing",
      title: langSet.skiing.title,
      description: langSet.skiing.description,
      img: "/skiing1.avif",
    },
  ];

  return (
    <>
      <div className="w-full flex flex-col mt-10 items-center text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-3"
        >
          {language === "ar" ? "أنشطتنا المميزة" : "Our Featured Activities"}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-gray-200 max-w-2xl text-sm md:text-base"
        >
          {language === "ar"
            ? "استكشف مجموعة متنوعة من الأنشطة التي تمنحك تجربة لا تُنسى وسط الطبيعة والمغامرات."
            : "Explore a variety of activities that offer unforgettable experiences in nature and adventure."}
        </motion.p>
      </div>
      <div className="w-full py-16 px-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {activities.map((a, idx) => (
          <motion.div
            key={a.key}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-3xl cursor-pointer"
          >
            {/* IMAGE */}
            <motion.div
              className="w-full h-90 relative rounded-3xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <Image src={a.img} alt={a.title} fill className="object-cover" />

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            </motion.div>

            {/* TEXT */}
            <div className="absolute bottom-5 left-5 right-5 text-white z-10">
              <motion.h3
                className="text-2xl font-bold drop-shadow-md"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + idx * 0.05, duration: 0.5 }}
              >
                {a.title}
              </motion.h3>

              <motion.p
                className="text-sm mt-1 text-gray-200 drop-shadow"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + idx * 0.05, duration: 0.5 }}
              >
                {a.description}
              </motion.p>
            </div>

            {/* HOVER HIGHLIGHT BORDER */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/40 transition-all duration-300"></div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
