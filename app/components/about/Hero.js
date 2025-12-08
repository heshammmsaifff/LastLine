"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import Threads from "./Threads";

export default function Main() {
  const { t, language } = useLanguage();

  return (
    <div
      style={{ position: "relative", width: "100%", height: "auto" }}
      className="mb-10"
    >
      {/* background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Threads
          color={[252 / 255, 211 / 255, 77 / 255]}
          amplitude={1}
          distance={0}
          enableMouseInteraction={false}
        />
      </div>

      {/* content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div
          className="
      bg-white/20 
      border border-black/20 
      backdrop-blur-[2px]
      rounded-2xl 
      p-8 
      max-w-4xl 
      text-center 
      shadow-xl
    "
        >
          <h1 className="text-4xl font-semibold mb-3">
            {language === "ar"
              ? "مؤسسة الخط الأخير القابضة"
              : "Last Line Holding"}
          </h1>

          <h2 className="text-3xl font-bold mb-4">
            {language === "ar" ? "من نحن ؟" : "Who are we?"}
          </h2>

          <p className="max-w-3xl mx-auto text-lg leading-relaxed opacity-90">
            {language === "ar"
              ? `نحن شركة الخط الأخير القابضة، واحدة من الشركات التي تسعى بإصرار لتقديم مستوى
        مختلف من الجودة والاحترافية في عدة قطاعات أساسية. نعمل في مجال المقاولات
        بمختلف أنواعها، ونُقدّم خدمات السفر والسياحة بأعلى معايير الراحة والأمان،
        بالإضافة إلى تقديم حلول مبتكرة في مجال الدعاية والإعلان بتقنيات حديثة
        وأفكار إبداعية تهدف إلى تعزيز الهوية البصرية للعلامات التجارية.
        نحرص دائمًا على التطوير المستمر وتقديم قيمة حقيقية لعملائنا، مع رؤية
        واضحة لبناء مستقبل أقوى وأكثر تأثيرًا في الأسواق المحلية والإقليمية.`
              : `We are Al-Khat Al-Akheer Holding, a company committed to delivering a 
        distinctive level of quality and professionalism across several core sectors. 
        Our operations include comprehensive contracting services, premium travel and 
        tourism solutions, and creative advertising and marketing services designed 
        to enhance brand presence with modern technologies and innovative ideas. 
        We continuously strive for development, value creation, and building a stronger, 
        more impactful future in both local and regional markets.`}
          </p>
        </div>
      </div>
    </div>
  );
}
