"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function ServicesGrid() {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  const services = [
    {
      title: isRTL ? "المقاولات العامة" : "General Contracting",
      image: "/contract.jpg",
      link: "/contracting",
    },
    {
      title: isRTL ? "السفر و السياحة" : "Travel & Tourism",
      image: "/travel.jpg",
      link: "/travel",
    },
    {
      title: isRTL ? "الدعاية و الاعلان" : "Marketing & Advertising",
      image: "/marketing.jpg",
      link: "/marketing",
    },
  ];

  return (
    <section className="w-full px-4 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl text-center text-white">
        <h2 className="text-4xl font-bold">
          {isRTL ? "ماذا نقدم لك" : "What We Offer You"}
        </h2>

        <p className="mt-4">
          {language === "ar"
            ? "نقدم مجموعة متنوعة من الخدمات لتلبية احتياجاتك المختلفة. سواء كنت تبحث عن مقاولات عامة، سفر وسياحة، أو دعاية وإعلان، نحن هنا لمساعدتك."
            : "We offer a variety of services to meet your diverse needs. Whether you're looking for general contracting, travel & tourism, or marketing & advertising, we're here to assist you."}
        </p>
        <p className="mt-3 text-base text-white/80">
          {isRTL
            ? "اختر الخدمة التي ترغب في استعراضها"
            : "Choose the service you want to explore"}
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-10 md:grid-cols-3">
        {services.map((srv, i) => (
          <motion.article
            key={srv.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.45)] backdrop-blur-lg"
          >
            {/* IMAGE */}
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={srv.image}
                alt={srv.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                {srv.title}
              </h3>

              <Link href={srv.link}>
                <button className="mt-2 cursor-pointer w-full rounded-xl bg-gradient-to-r from-amber-600 to-orange-700 px-6 py-3 text-white font-semibold shadow-lg transition hover:opacity-90">
                  {isRTL ? "عرض المزيد" : "View More"}
                </button>
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
