"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { RiAdvertisementLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const servicesData = [
  {
    titleAr: "إعلانات ممولة",
    titleEn: "Sponsored Ads",
    descriptionAr:
      "تقدم مؤسسة الخط الأخير القابضة خدمات إعــلانات ممولة متقدمة علي منصــات التـواصل الإجتمـاعي لكل الدول العربية. نتميز بالدقة في استهداف الجمهور المستهدف، مما يضمن تحقيق أقصى تأثير لإعلاناتكم. اعتمادنا علي أحدث التقنيات يعزز تفوق شركتنا في هذا المجال..",
    descriptionEn:
      "Last Line Holding Company offers advanced paid advertising services on social media platforms across all Arab countries. We pride ourselves on our precise targeting of your desired audience, ensuring maximum impact for your ads. Our reliance on cutting-edge technologies further enhances our company's competitive edge in this field.",
    icon: RiAdvertisementLine({ size: 40, color: "#000" }),
  },
  {
    titleAr: "تزويد مشتركين يوتيوب",
    titleEn: "YouTube Subscribers Boost",
    descriptionAr:
      "بإعتبارنا خبراء تسويق الفيديوهـــات، تقدم مؤسسة الخط الأخير القابضة خدمة تزويد مشتركين يوتيوب. نحن نضمن تحسين رؤية قناتكم وزيادة عدد المشتركين بشكل آمن وفعــــال، مما يسهم في نجاح حملتكم التسويقية.",
    descriptionEn:
      "As video marketing experts, Last Line Holding offers a YouTube subscriber boosting service. We guarantee to improve your channel's visibility and increase your subscriber count safely and effectively, contributing to the success of your marketing campaign.",
    icon: FaYoutube({ size: 40, color: "#000" }),
  },
  {
    titleAr: "خدمة 3",
    titleEn: "Service 3",
    descriptionAr: "وصف الخدمة الثالثة باللغة العربية.",
    descriptionEn: "Description of the third service in English.",
    icon: FaInstagram({ size: 40, color: "#000" }),
  },
  {
    titleAr: "خدمة 4",
    titleEn: "Service 4",
    descriptionAr: "وصف الخدمة الرابعة باللغة العربية.",
    descriptionEn: "Description of the fourth service in English.",
    icon: FaFacebookSquare({ size: 40, color: "#000" }),
  },
];

export default function Services() {
  const languageContext = useLanguage ? useLanguage() : { lang: "ar" };
  const { lang = "ar", language } = languageContext;

  const dir = lang === "ar" ? "rtl" : "ltr";
  const textAlignmentClass =
    language === "ar" ? "lg:text-right" : "lg:text-left";

  return (
    <section
      dir={dir}
      className="py-20 px-4 md:px-8 bg-[radial-gradient(circle,#3b2b1a_0%,#1e150d_60%,#000000_100%)]"
    >
      <div className="bg-[#FED8B1] p-6 md:p-12 rounded-xl shadow-2xl">
        <div
          className={`flex flex-col lg:flex-row ${
            dir === "rtl" ? "lg:flex-row" : "lg:flex-row-reverse"
          } justify-between items-start lg:items-center mb-12`}
        >
          <div className="p-4 w-full lg:w-auto text-center lg:text-start">
            <div className="relative inline-block">
              <span className="absolute inset-0 bg-amber-500 -rotate-7 rounded-[15px]"></span>
              <h2
                className={`relative text-black font-extrabold text-5xl md:text-6xl lg:text-[80px] leading-tight ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {language === "ar"
                  ? "خـدمـاتـنــا الإحترافية"
                  : "Our professional services"}
              </h2>
            </div>
          </div>

          <div className="h-50 w-1 bg-amber-500 hidden lg:block mx-8 shrink-0"></div>

          <div
            className={`max-w-md  p-4 mt-4 lg:mt-0 w-full lg:w-auto text-center ${textAlignmentClass}`}
          >
            {" "}
            <p className="text-black font-semibold text-lg md:text-xl leading-relaxed">
              {language === "ar" ? "مع" : "With"}{" "}
              <span className="text-amber-500 font-bold px-1 rounded-lg">
                {language === "ar" ? "مؤسسة الخط الأخير،" : "Last Line,"}
              </span>
              {language === "ar"
                ? "لا تحصلون فقط على خــدمــات مـوثـوقـة وآمـنـة، بـل تجدون شركاء ملتزمين بتحقيق نـجـاحـكـم وتـعـزيـز فـتأثيركم في ســاحــة التــسـويـق الإلـكـتـروني."
                : "You not only get reliable and secure services, but you also find partners committed to achieving your success and enhancing your influence in the digital marketing arena."}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-[#ECB176] p-5 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
            >
              {/* title + icon */}
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-[25px] text-black font-extrabold mb-1">
                    {language === "ar" ? service.titleAr : service.titleEn}
                  </h3>
                  <div className="border-[#E69647] border-b-4 w-30"></div>
                </div>
                <div className="flex flex-col items-center -translate-y-1">
                  <div className="flex mb-1 items-center justify-center">
                    {service.icon}
                  </div>
                  <div className="border-[#FED8B1] border-b-4 w-10"></div>
                </div>
              </div>

              {/* description full width */}
              <p
                dir={language === "ar" ? "rtl" : "ltr"}
                className="w-full mt-5 text-[#3b2b1a]"
              >
                {language === "ar"
                  ? service.descriptionAr
                  : service.descriptionEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
