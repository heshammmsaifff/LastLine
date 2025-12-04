"use client";

import { useMemo } from "react";
import { useLanguage } from "../../context/LanguageContext";
import Image from "next/image";

const iconMap = {
  pricing: "/pricing.png",
  team: "/team.png",
  materials: "/star.png",
  designs: "/design.png",
};

export default function Highlights() {
  const { t, language } = useLanguage();

  const cards = useMemo(
    () => [
      {
        key: "team",
        title: t.features.teamTitle,
        description: t.features.teamDesc,
      },
      {
        key: "pricing",
        title: t.features.pricingTitle,
        description: t.features.pricingDesc,
      },
      {
        key: "designs",
        title: t.features.designsTitle,
        description: t.features.designsDesc,
      },
      {
        key: "materials",
        title: t.features.materialsTitle,
        description: t.features.materialsDesc,
      },
    ],
    [t]
  );

  const isRTL = language === "ar";
  const borderSide = isRTL ? "border-r-[5px]" : "border-l-[5px]";
  const bottomLineSide = isRTL ? "right-0" : "left-0";
  const iconMargin = isRTL ? "-mr-6" : "-ml-6";

  return (
    <section className="w-full px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {cards.map((card, index) => {
          const side = isRTL ? "right-5" : "left-5";

          return (
            <article
              key={card.key}
              className={`relative overflow-hidden rounded-[51px] px-7 py-10 text-white border-[#E59647] ${borderSide}`}
            >
              {/* Bottom small border */}
              <span
                className={`absolute bottom-0 ${bottomLineSide} h-[5px] w-[58px] bg-[#E59647] rounded-full`}
              ></span>
              <div
                className={`absolute top-0 border-t-[5px] border-[#E59647] ${iconMargin} ${side} 
  flex h-[97px] w-[97px] items-center justify-center rounded-full bg-[#F8BC79] text-black shadow-lg`}
              >
                <Image
                  src={iconMap[card.key]}
                  alt={card.key}
                  width={43.72}
                  height={55}
                  className="object-cover"
                />
              </div>

              <div className={`${isRTL ? "text-right" : "text-left"} mt-12`}>
                <p className="text-[30px] mt-[90] font-bold">{card.title}</p>
                <p className="mt-[23px] text-[20px]  text-white">
                  {card.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
