"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function Testimonials() {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <section className="w-full px-4 py-24 sm:px-8 lg:px-12 bg-[radial-gradient(circle,#3b2b1a_0%,#1e150d_60%,#000000_100%)]">
      {/* Title */}
      <motion.div
        className="mx-auto max-w-4xl text-center text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold">
          {t.testimonials.heading}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-white/70">
          {t.testimonials.subtitle}
        </p>
      </motion.div>

      {/* Testimonial Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-150px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="
          relative mx-auto mt-16 flex items-center justify-center 
          w-full 
          max-w-[1230px]
          h-[350px] 
          sm:h-[300px] 
          md:h-[400px] 
          lg:h-[520px]
          px-4
        "
      >
        {/* Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent blur-3xl" />

        {/* Frame Corners */}
        <span className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-t-4 border-r-4 border-[#F4933E]" />
        <span className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-t-4 border-l-4 border-[#F4933E]" />
        <span className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-b-4 border-r-4 border-[#F4933E]" />
        <span className="absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-b-4 border-l-4 border-[#F4933E]" />

        {/* Inner Text Area */}
        <motion.div
          className="
            flex items-center justify-center text-center 
            w-full 
            max-w-[1100px] 
            h-full 
            px-2 sm:px-6 md:px-8
          "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.p
            className="
              font-[Alexandria]
              font-medium
              text-white
              max-w-[949px] 
              mx-auto

              text-[20px] leading-[34px]
              sm:text-[18px] sm:leading-[38px]
              md:text-[28px] md:leading-[55px]
              lg:text-[40px] lg:leading-[85px]
            "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            {t.testimonials.quote}
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
