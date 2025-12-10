"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function Hero() {
  const { t, language } = useLanguage();
  // const [isHovered, setIsHovered] = useState(false);

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
          src="/heroco.jpg"
          alt={t.heroImageAlt}
          fill
          priority
          sizes="90vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-20 flex flex-col items-center text-center  pt-16 sm:pt-20 lg:pt-28">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-[40px] sm:text-4xl md:text-6xl lg:text-7xl xl:text-6xl font-bold text-[#FED8B1] max-w-4xl"
        >
          {language == "ar"
            ? "الخط الأخير القابضة للمقاولات"
            : "The last line for contracting"}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold text-amber-300 max-w-4xl leading-snug"
        >
          {language === "ar" ? "شـــريـــكــكــم" : "Your Partner"}
          <br />
          <span className="mt-4 text-[#FED8B1]">
            {language === "ar" ? "في" : "In"}{" "}
          </span>

          <span className=" mt-2 text-amber-300">
            {language === "ar" ? "الإنجازات" : "Achievements"}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ duration: 1 }}
          className="mt-6 text-center text-lg sm:text-xl md:text-2xl lg:text-2xl text-white/90 max-w-3xl leading-relaxed px-4"
        >
          {language === "ar"
            ? "نقدم حلول بناء وتصميم هندسي مبتكرة تضمن الجودة والالتزام بالمواعيد لتحقيق مشاريعكم بأفضل النتائج."
            : "We provide innovative construction and engineering solutions, ensuring quality and timely delivery for the success of your projects."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
}
