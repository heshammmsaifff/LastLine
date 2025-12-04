"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function StatsTimeline() {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const items = useMemo(() => t.stats.items, [t.stats.items]);

  return (
    <section ref={sectionRef} className="w-full px-4 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl text-center text-white">
        <h2 className="text-4xl font-bold">{t.stats.heading}</h2>
        <p className="mt-3 text-base text-white/80">{t.stats.subtitle}</p>
      </div>

      <div className="mx-auto mt-12 flex max-w-5xl flex-col gap-8">
        {items.map((item, idx) => (
          <article
            key={item.title}
            className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 px-6 py-6 text-white shadow-[0_25px_80px_-50px_rgba(0,0,0,0.8)] backdrop-blur"
          >
            <div
              className={`flex items-center justify-between gap-4 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              <p className="text-2xl font-bold">{item.title}</p>
              <div className="flex items-center gap-2 rounded-2xl bg-[#F4A65A]/90 px-4 py-2 text-lg font-semibold text-black">
                <span>{item.year.slice(0)}</span>
                {/* <span>{item.year.slice(2)}</span> */}
              </div>
            </div>
            <div
              className={`text-sm text-white/80 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {item.description}
            </div>
            <div className="relative mt-2 h-4 overflow-hidden rounded-full bg-white/20">
              <span
                className="absolute inset-y-0 rounded-full bg-gradient-to-r from-[#F4A65A] to-[#F18B32]"
                style={{
                  width: visible ? `${item.progress}%` : "0%",
                  transition: `width 1.4s cubic-bezier(0.34, 1.56, 0.64, 1)`,
                  transitionDelay: `${idx * 0.15}s`,
                }}
              />
              <span
                className="absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border-4 border-black/40 bg-[#F4A65A]"
                style={{
                  insetInlineStart: visible
                    ? `calc(${item.progress}% - 10px)`
                    : "-10px",
                  transition: `inset-inline-start 1.4s cubic-bezier(0.34, 1.56, 0.64, 1)`,
                  transitionDelay: `${idx * 0.15}s`,
                }}
              />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/projects"
          className="group inline-flex items-center overflow-hidden rounded-2xl text-lg font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
        >
          <span className="relative bg-black px-8 py-3 text-[#F6A653] transition-all duration-300 group-hover:bg-[#d9d9d9] group-hover:text-[#F2842C]">
            <span className="relative z-10">{t.stats.cta}</span>
            <span className="absolute inset-0 translate-y-full bg-[#F6A653]/15 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
          </span>
          <span className="relative flex items-center justify-center bg-[#d9d9d9] px-5 py-3 text-[#F6A653] transition-all duration-300 group-hover:bg-black">
            <ArrowRight
              className={`h-6 w-6 transition-all duration-300 ${
                isRTL
                  ? "rotate-180 group-hover:-translate-x-1"
                  : "group-hover:translate-x-1"
              }`}
            />
            <span className="absolute inset-0 translate-x-full bg-[#F6A653]/15 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </span>
        </Link>
      </div>
    </section>
  );
}
