"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import Threads from "./Threads";

// Icons
import { FaEye, FaBullseye, FaLightbulb } from "react-icons/fa";

// Animation
import { motion } from "framer-motion";

export default function VisionMission() {
  const { t, language } = useLanguage();

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section
      style={{ position: "relative", width: "100%", minHeight: "700px" }}
      className="my-20 py-20"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-16 leading-relaxed">
          {language === "ar"
            ? "إن رؤيتنا ورسالتنا تدفعنا نحو الابتكار والتقدم، لتشكيل مستقبل مزدهر"
            : "our Vision and Mission drive us towards innovation and progress, shaping a prosperous future."}
        </h2>
        {/*Grid Vision & Mission*/}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision */}
          <div
            className="
              bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md 
              p-10 shadow-xl hover:shadow-2xl transition duration-300
            "
          >
            <div className="flex items-center justify-center mb-6">
              <FaEye className="text-amber-300 text-5xl drop-shadow" />
            </div>

            <h2 className="text-3xl font-bold text-center mb-4">
              {language === "ar" ? "رؤيتنا" : "Our Vision"}
            </h2>

            <p className="text-lg leading-relaxed opacity-90 text-center">
              {language === "ar"
                ? `نسعى في شركة الخط الأخير القابضة إلى أن نكون من الشركات الريادية 
                في المنطقة، عبر تقديم حلول مبتكرة وفعالة في مجالات المقاولات، 
                السياحة، والدعاية والإعلان. نهدف إلى خلق قيمة استثنائية تدفع نحو 
                مستقبل أفضل يعتمد على الجودة والتميز والاستدامة.`
                : `At Last Line Holding, our vision is to become one of the leading 
                companies in the region by delivering innovative and effective 
                solutions across construction, tourism, and advertising sectors. 
                We strive to create exceptional value that drives a better, more 
                sustainable future built on quality and excellence.`}
            </p>
          </div>

          {/* Mission */}
          <div
            className="
              bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md 
              p-10 shadow-xl hover:shadow-2xl transition duration-300
            "
          >
            <div className="flex items-center justify-center mb-6">
              <FaBullseye className="text-amber-300 text-5xl drop-shadow" />
            </div>

            <h2 className="text-3xl font-bold text-center mb-4">
              {language === "ar" ? "رسالتنا" : "Our Mission"}
            </h2>

            <p className="text-lg leading-relaxed opacity-90 text-center">
              {language === "ar"
                ? `نلتزم بتقديم خدمات احترافية عالية الجودة تعتمد على الإبداع 
                والمصداقية، مع التركيز على التطوير المستمر وتبني أحدث التقنيات. 
                نحرص على بناء شراكات طويلة الأمد مع عملائنا من خلال تقديم حلول 
                عملية وتجربة استثنائية تعكس قيمنا وطموحاتنا المستقبلية.`
                : `We are committed to delivering high-quality, professional 
                services built on creativity and integrity, with a strong focus 
                on continuous development and modern technologies. We aim to build 
                long-term partnerships with our clients by offering practical 
                solutions and exceptional experiences that reflect our values and 
                future ambitions.`}
            </p>
          </div>
        </div>

        {/*Values Section*/}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 leading-relaxed">
            {language === "ar"
              ? "إن قيمنا هي البوصلة التي ترشدنا في قراراتنا، لتضمن توافقًا مع شركائنا والمجتمعات التي نخدمها"
              : "Our values are the compass that guides our decisions, ensuring alignment with our partners and the communities we serve."}
          </h2>

          <div className="grid md:grid-cols-3 gap-10 justify-items-center mx-auto w-full">
            {[
              {
                icon: <FaBullseye />,
                titleAr: "الاحترافية",
                titleEn: "Professionalism",
                descAr:
                  "نركز على تقديم خدمات بمعايير عالية من الجودة والدقة لضمان أفضل النتائج.",
                descEn:
                  "We focus on delivering services with high standards of quality and precision to ensure the best outcomes.",
              },
              {
                icon: <FaEye />,
                titleAr: "الشفافية",
                titleEn: "Transparency",
                descAr:
                  "نلتزم بالوضوح والمصداقية في جميع تعاملاتنا ومع جميع العملاء.",
                descEn:
                  "We commit to clarity and integrity in all our operations and communications.",
              },
              {
                icon: <FaLightbulb />,
                titleAr: "الابتكار",
                titleEn: "Innovation",
                descAr:
                  "نسعى دائمًا لإيجاد حلول مبتكرة ومتطورة تدعم نجاح عملائنا.",
                descEn:
                  "We constantly strive to create innovative and advanced solutions that support our clients' success.",
              },
            ].map((val, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="
                  group p-8 w-full max-w-sm rounded-2xl bg-white/5 backdrop-blur-sm
                  hover:bg-amber-300/10 transition-all duration-300
                  text-center shadow-lg hover:shadow-2xl
                "
              >
                <div className="flex justify-center mb-4 text-amber-300 text-5xl drop-shadow group-hover:scale-110 transition">
                  {val.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {language === "ar" ? val.titleAr : val.titleEn}
                </h3>

                <p className="opacity-80 leading-relaxed">
                  {language === "ar" ? val.descAr : val.descEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
