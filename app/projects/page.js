"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import Link from "next/link";
import Navbar from "../components/Navbar"; // استبدل بالمسار الصحيح للNavbar
import Footer from "../components/Footer"; // استبدل بالمسار الصحيح للFooter
import { useLanguage } from "../context/LanguageContext";

export default function ProjectsPage() {
  const { language } = useLanguage();
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchProjects = async () => {
      let query = supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });
      if (filter !== "all") query = query.eq("category", filter);

      const { data, error } = await query;
      if (error) console.error(error);
      else setProjects(data || []);
    };

    fetchProjects();
  }, [filter]);

  const categories = [
    { key: "all", label: language === "ar" ? "الكل" : "All" },
    { key: "مقاولات", label: language === "ar" ? "مقاولات" : "Construction" },
    {
      key: "دعاية واعلان",
      label: language === "ar" ? "دعاية واعلان" : "Advertising",
    },
    {
      key: "سفر وسياحة",
      label: language === "ar" ? "سفر وسياحة" : "Travel & Tourism",
    },
  ];

  return (
    <div className=" min-h-screen text-white">
      {/* Navbar */}
      <Navbar />

      {/* الصفحة */}
      <main className="p-8 max-w-7xl mx-auto min-h-screen mt-30">
        <h1 className="text-4xl mb-10 font-bold mb-8 text-amber-300 text-center">
          {language === "ar" ? "المشاريع" : "Projects"}
        </h1>

        {/* أزرار الفلترة */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-6 py-2 rounded font-semibold transition-colors ${
                filter === cat.key
                  ? "bg-amber-300 text-black"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* شبكة المشاريع */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length === 0 && (
            <p className="text-center col-span-full text-white/70">
              {language === "ar"
                ? "لا توجد مشاريع حالياً."
                : "No projects available at the moment."}
            </p>
          )}
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/10 backdrop-blur shadow-lg rounded-2xl overflow-hidden border border-white/20 hover:scale-105 transition-transform duration-300"
            >
              {project.images[0] && (
                <img
                  src={project.images[0]}
                  alt={language === "ar" ? project.title_ar : project.title_en}
                  className="w-full h-56 object-cover"
                />
              )}
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#FED8B1] mb-3">
                  {language === "ar" ? project.title_ar : project.title_en}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  {language === "ar"
                    ? project.description_ar.substring(0, 100) + "..."
                    : project.description_en.substring(0, 100) + "..."}
                </p>
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-block text-amber-300 font-semibold"
                >
                  {language === "ar" ? "عرض المشروع →" : "View Project →"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
