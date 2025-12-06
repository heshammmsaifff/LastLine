"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function Info() {
  const { t, language } = useLanguage();

  const cards = [
    {
      titleAr: "البناء والتشييد الشامل.",
      titleEn: "Comprehensive construction and building.",
      descAr:
        "تصميم وتنفيذ المباني السكنية والتجارية والصناعية،بأعلى معايير الجودة والالتزام..",
      descEn:
        "Design and construction of residential, commercial, and industrial buildings, with the highest standards of quality and commitment.",
      img: "cards/01.svg",
      bg: "#FED8B1",
    },
    {
      titleAr: "إنشاء محطات المياه والبنية التحتية.",
      titleEn: "Construction of water stations and infrastructure.",
      descAr:
        "بناء وتجهيز محطات المياه بمستويات عالية من الكفاءة والمتانة لضمان استدامة العمليات.",
      descEn:
        "Building and equipping water stations with high levels of efficiency and durability to ensure the sustainability of operations.",
      img: "cards/02.svg",
      bg: "#FDC081",
    },
    {
      titleAr: "الخرسانات.",
      titleEn: "Concrete",
      descAr:
        "تنفيذ كافة أعمال الخرسانة وفق المواصفات الفنية لضمان قوة الأساسات و الأعمدة و المباني.",
      descEn:
        "Executing all concrete works according to technical specifications to ensure the strength of foundations, columns, and buildings.",
      img: "cards/03.svg",
      bg: "#FDC081",
    },
    {
      titleAr: "التشطيبات المتكاملة.",
      titleEn: "Integrated finishing.",
      descAr:
        "تشطيبات داخلية وخارجية مميزة تـــنـــاســـب ذوق كــل عــمـيل، من التـصـمـيـم الكلاسيكي إلى الحديث.",
      descEn:
        "Distinctive interior and exterior finishes to suit every client's taste, from classic to modern design.",
      img: "cards/04.svg",
      bg: "#FED8B1",
    },
    {
      titleAr: "كارت.",
      titleEn: "Card",
      descAr: "وصف الكارت.",
      descEn: "Card description",
      img: "cards/05.svg",
      bg: "#FED8B1",
    },
    {
      titleAr: "كارت.",
      titleEn: "Card",
      descAr: "وصف الكارت.",
      descEn: "Card description",
      img: "cards/06.svg",
      bg: "#FDC081",
    },
    {
      titleAr: "كارت.",
      titleEn: "Card",
      descAr: "وصف الكارت.",
      descEn: "Card description",
      img: "cards/07.svg",
      bg: "#FDC081",
    },
    {
      titleAr: "كارت.",
      titleEn: "Card",
      descAr: "وصف الكارت.",
      descEn: "Card description",
      img: "cards/08.svg",
      bg: "#FED8B1",
    },
  ];

  return (
    <section className="w-full mx-auto px-4 py-10 bg-[radial-gradient(circle,#3b2b1a_0%,#1e150d_60%,#000000_100%)]">
      <div className="text-center mt-10 mb-30 ">
        <h2 className="text-[#FC8E1C] lg:text-[60px] md:text-[50px] sm:text-[40px] text-[20px] mb-10">
          {language == "ar"
            ? "في مؤسسة الخط الأخير للمقاولات"
            : "At the Last Line Contracting Establishment"}
        </h2>
        <p className="text[#F2F2F2] lg-text[40px] md:text-[30px] sm:text-[20px] text-[15px] leading-16">
          {language === "ar"
            ? " نلتزم بتقديم حلول متكاملة في مجال المقاولات العامة، حيث نتولى كافة مراحل المشروع من البداية إلي النهاية، بما في ذلك أعمال البناء والتشييد، و محطات المياه، والأعامالي التخصصية الأخري التي تكمل احتياج المشاريع."
            : "We are committed to providing integrated solutions in the field of public agreements, where we handle all stages of a project from start to finish, including construction works, water stations, specialized work, and aspects that complement the project's needs."}
        </p>
      </div>

      {/* card */}
      <div className="grid grid-cols-1  md:grid-cols-2 gap-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row-reverse items-center gap-6 rounded-[30px] p-6 shadow-lg`}
            style={{ backgroundColor: card.bg }}
          >
            <img
              src={card.img}
              alt="Card"
              className="w-[216px] h-[118px] object-cover object-top pt-4 mb-5 rounded-xl flex-shrink-0"
            />

            <div className="text-black flex-1 ">
              <h3 className="text-2xl font-bold mb-3">
                {language === "ar" ? card.titleAr : card.titleEn}
              </h3>

              <p className="text-black leading-relaxed">
                {language === "ar" ? card.descAr : card.descEn}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
