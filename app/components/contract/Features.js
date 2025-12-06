"use client";

import { FaStar } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

export default function Features() {
  const { language } = useLanguage();

  return (
    <section className="w-full mx-auto px-4 py-16 bg-[radial-gradient(circle,#3b2b1a_0%,#1e150d_60%,#000000_100%)]">
      {/* Title */}
      <h3 className={"text-4xl font-bold align-middle text-center mb-12 "}>
        {language === "ar" ? "ما يميزنا" : "What Makes Us Special"}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Right Section */}
        <div className={`${language === "ar" ? "text-right" : "text-left"}`}>
          {/* Section 1 */}
          <h4 className="text-2xl font-bold mb-3 text-amber-700">
            {language === "ar"
              ? "في الخط الأخير للمقاولات"
              : "At Last Line Contracting"}
          </h4>

          <p className="text-white/90 leading-relaxed mb-6">
            {language === "ar"
              ? "نهدف إلى توفير تجربة سلسة وشاملة لكل عميل، من خلال تقديم خدمات عالية الجودة، وتلبية المواعيد المحددة، واستخدام أفضل الخامات."
              : "We aim to provide a smooth and integrated experience for every client by offering high-quality services, meeting deadlines, and using the best materials."}
          </p>

          {/* Amber Divider */}
          <div className="w-[140px] h-1 bg-amber-400 my-6"></div>

          {/* Section 2 */}
          <h4 className="text-2xl font-bold mb-3 text-amber-700">
            {language === "ar" ? "رؤيتنا ترتكز على" : "Our Vision Focuses On"}
          </h4>

          <p className="text-white/90 leading-relaxed">
            {language === "ar"
              ? "تحقيق رضا العملاء، وتقديم مشاريع تفوق توقعاتهم، مع مراعاة أدق التفاصيل."
              : "Achieving customer satisfaction and delivering projects that exceed expectations with attention to detail."}
          </p>
        </div>

        {/* Left Boxes */}
        <div className="flex flex-col gap-6">
          {[
            language === "ar" ? "الجودة" : "Quality",
            language === "ar" ? "الإلتزام" : "Commitment",
            language === "ar" ? "رضا العملاء" : "Customer Satisfaction",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-5 bg-white/10 border border-amber-700 rounded-2xl"
            >
              <FaStar className="text-amber-500 text-3xl" />
              <p className="text-white text-xl font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
