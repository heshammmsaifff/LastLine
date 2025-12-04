"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

export default function LatestProjects() {
  const { language } = useLanguage();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(5); // أحدث 5 مشاريع

      if (error) console.error(error);
      else setProjects(data || []);
    };
    fetchProjects();
  }, []);

  if (projects.length === 0) return null;

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10 text-amber-300">
        {language === "ar" ? "أحدث المشاريع" : "Latest Projects"}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white/10 backdrop-blur shadow-lg rounded-2xl overflow-hidden border border-white/20"
          >
            {project.images[0] && (
              <Image
                src={project.images[0]}
                width={500}
                height={350}
                alt="project image"
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

      <div className="text-center mt-10">
        <Link
          href="/projects"
          className="inline-block mt-6 bg-[#E69647] text-black font-bold px-6 py-3 rounded-t-[15px] rounded-b-[20px] transition-colors duration-300 hover:bg-[#A67B5B]"
        >
          {language === "ar" ? "عرض جميع المشاريع" : "View All Projects"}
        </Link>
      </div>
    </div>
  );
}
