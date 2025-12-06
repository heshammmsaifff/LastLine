"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import Image from "next/image";

export default function Info() {
  const { t, language } = useLanguage();

  const infoData = {
    vision: {
      title: {
        ar: "رؤيـتـنـا",
        en: "Our Vision",
      },
      text: {
        ar: `نحن نتطلع إلى أن نكون الشركة الرائدة والمرموقة في مجال التسويق الإلكتروني
في مصر ومنطقة الخليج العربي. نسعى جاهدين لتحقيق هذا الهدف من خلال التطوير المستمر
وتقديم خدمات متميزة لعملائنا في الدول العربية.`,
        en: `We aspire to be the leading and reputable company in the field of digital marketing
in Egypt and the Gulf region. We strive to achieve this goal through continuous development
and providing distinguished services to our clients in the Arab countries.`,
      },
    },

    message: {
      title: {
        ar: "رسـالـتـنـا",
        en: "Our Mission",
      },
      text: {
        ar: `نحن نسعى بجد لضمان تقديم جميع المهام والأعمال التي يتم تكليفنا بها بجودة عالية،
وفي الوقت المحدد، وضمن حدود الميزانية المحددة. يعتمد هذا الالتزام على التخطيط الدقيق
لكل مشروع وتنفيذه بفعالية من خلال إدارة متقنة.`,
        en: `We work diligently to ensure that all assigned tasks and projects are completed
with high quality, on time, and within the specified budget. This commitment relies on
careful planning and effective execution through skilled management.`,
      },
    },

    goal: {
      title: {
        ar: "هـدفـنـا",
        en: "Our Goal",
      },
      text: {
        ar: `نحن نسعى جاهدين لتحقيق أقصى درجات رضى العميل عبر استقطاب كوادر مؤهلة ومحترفة.
نفخر بفريق عملنا المتميز الذي يسهم في خلق بيئة عمل صحية ومحفّزة. يعتبر تطوير الكفاءات
وتوفير بيئة عمل إيجابية أمراً أساسياً لضمان تحقيق أعلى مستويات الجودة في خدماتنا.`,
        en: `We strive to achieve the highest levels of customer satisfaction by attracting qualified
and professional personnel. We are proud of our distinguished team that contributes to creating
a healthy and motivating work environment. Developing competencies and providing a positive
work environment are essential to ensuring the highest quality in our services.`,
      },
    },
  };

  const isRTL = language === "ar";
  const borderSide = isRTL
    ? "border-r-[3px] border-b-[3px]"
    : "border-l-[3px] border-b-[3px]";

  const iconMap = {
    vision: "/vision.png",
    message: "/mission.png",
    goal: "/goal.png",
  };

  const cards = Object.values(infoData);

  return (
    <>
      <div className="pt-[150px] bg-[radial-gradient(circle,#3b2b1a_0%,#1e150d_60%,#000000_100%)]">
        {/* Info Component */}
        <h2 className="text-center text-[30px] md:text-[40px] sm:text-[40px] font-bold mb-8 text-amber-600">
          {language == "ar" ? "مؤسسة الخط الأخير القابضة" : "Last Line Holding"}
        </h2>
        <p className="max-w-4xl mx-auto text-lg md:text-xl sm:text-xl px-2 leading-[50px] mb-6">
          <span className="text-amber-600"> &#9679; </span>
          {language == "ar"
            ? "هي شـركة رائـدة في مجــــال التـسـويـق الرقمي في مصر و منطقة الخليج العربي، تتـميز بتقديم خدمات عـالـية الجـودة في مجـالات التـسـويـق عبر وسائل التـواصل الاجتمـاعي، إدارة الحملات الإعـلانـيـة، وتـحـسين محركات البحث. تأسست الشركة برؤية واضحه تهدف إلى تقديم حلـول تسويقية فعــالة ومبتكرة."
            : "It is a leading digital marketing company in Egypt and the Arabian Gulf, distinguished by Providing high-quality services in the fields of social media marketing,Managing advertising campaigns, and search engine optimization. The company's vision is to highlight its commitment to providing effective and innovative marketing solutions."}
        </p>
        <p className="max-w-4xl mx-auto text-lg md:text-xl sm:text-xl px-2 leading-[50px] mb-6">
          <span className="text-amber-600">
            &#9679; {language === "ar" ? "نفخر" : "We are proud"}{" "}
          </span>
          {language == "ar"
            ? "بــإمتـلاك فريق عمل محترف يسعى دائمًـا لتحقيق أهــــداف الـعــــمــــلاء وضــــمــــان رضــــاهــــم الـكــــامــــل."
            : "By having a professional team that always strives to achieve customer goals and ensure their complete satisfaction."}
        </p>
        <p className="max-w-4xl mx-auto text-lg md:text-xl sm:text-xl px-2 leading-[50px] mb-6">
          <span className="text-amber-600">
            &#9679; {language === "ar" ? "نلتزم" : "We commit"}{" "}
          </span>
          {language == "ar"
            ? "بـتـقـديـم خـدمـات دقـيـقـة وفـعـالـة ضـمـن الجـداول الـزمنية والميزانيات المحددة."
            : "By providing accurate and effective services within the specified timelines and budgets."}
        </p>
        <p className="max-w-4xl mx-auto text-lg md:text-xl sm:text-xl px-2 leading-[50px] mb-6">
          <span className="text-amber-600">
            &#9679;{" "}
            {language === "ar"
              ? "تتميز مؤسسة الخط الأخير القابضة"
              : "The Last Line Holding Company is distinguished"}{" "}
          </span>
          {language == "ar"
            ? "بـالإبـتـكـار والتـطـور المـسـتـمـر، حـيـث نستخدم أحدث الأدوات والـتـــقـــنـــيـــات الـرقـــمـــيـــة لـتـــعـــزيـــز فـــعـــالـــيـــة الـحـــمـــلات الـتـــســويـقـيـة."
            : "Through continuous innovation and development, we utilize the latest digital tools and technologies to enhance the effectiveness of marketing campaigns."}
        </p>
        <p className="max-w-4xl mx-auto text-lg md:text-xl sm:text-xl px-2 leading-[50px] mb-6">
          <span className="text-amber-600">
            &#9679; {language === "ar" ? "نسعي" : "We strive"}{" "}
          </span>
          {language == "ar"
            ? "إلى توسيع أعمالنا واكتساب حصة سوقية متميزة في المنطقة."
            : "To expand our business and gain a significant market share in the region."}
        </p>
        <p className="max-w-4xl mx-auto text-lg md:text-xl sm:text-xl px-2 leading-[50px] mb-6">
          <span className="text-amber-600">
            &#9679; {language === "ar" ? "هدفنا" : "Our primary goal"}{" "}
          </span>
          {language == "ar"
            ? "الأساسي هو رضا العميل و بناء علاقات طويلة الأمد قائمة علي الثقة والتفاهم."
            : "is customer satisfaction and building long-term relationships based on trust and understanding."}
        </p>
        <p className="max-w-4xl mx-auto text-lg md:text-xl sm:text-xl px-2 leading-[50px] pb-6">
          <span className="text-amber-600">
            &#9679; {language === "ar" ? "نؤمن" : "We believe"}{" "}
          </span>
          {language == "ar"
            ? "بأهمية التواصل مع عملائنا ونرحب دومًا بملاحظاتهم لـضــمــان تــقــديـم أفـضـل الـخـدمـات بـأعـلى جـودة مـمـكـنـة."
            : "the importance of communicating with our clients and always welcome their feedback to ensure we provide the best possible services of the highest quality."}
        </p>
      </div>
      <div className="mx-auto grid pb-10 px-20 gap-8 bg-[radial-gradient(circle,#3b2b1a_0%,#1e150d_60%,#000000_100%)]">
        {Object.entries(infoData).map(([key, box]) => (
          <article
            key={key}
            className={`relative overflow-hidden bg-[#AF63184D] rounded-[45px] px-10 py-12 text-white border-[#E59647] ${borderSide}`}
          >
            {/* TITLE + ICON */}
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center justify-center w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] rounded-full bg-[#F8BC79] text-black shadow-lg border-[3px] border-[#E59647]">
                <Image
                  src={iconMap[key]}
                  alt={key}
                  width={45}
                  height={45}
                  className="object-contain"
                />
              </div>
              <h2 className="text-[32px] text-[#FED8B1] font-bold text-center">
                {box.title[language]}
              </h2>
            </div>

            {/* TEXT */}
            <p className="mt-6 text-[20px] leading-[35px] text-center">
              {box.text[language]}
            </p>
          </article>
        ))}
      </div>
    </>
  );
}
