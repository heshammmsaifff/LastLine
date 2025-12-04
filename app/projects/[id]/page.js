"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "../../../lib/supabase";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ProjectPage() {
  const { id } = useParams();
  const { language } = useLanguage();
  const [project, setProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProject = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("id", id)
        .single();

      if (error) console.error(error);
      else setProject(data);
    };

    fetchProject();
  }, [id]);

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="p-8 text-center text-white text-xl">Loading...</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-full mx-auto py-16 px-4 mt-15">
        <h1 className="text-5xl font-extrabold text-amber-300 mb-12 text-center">
          {language === "ar" ? project.title_ar : project.title_en}
        </h1>

        {/* سلايدر الصور */}
        <div className="relative w-full max-w-4xl mx-auto mt-10">
          <div className="relative w-full h-[400px] sm:h-[550px] overflow-hidden rounded-2xl">
            <Image
              src={project.images[currentIndex]}
              alt="project image"
              fill
              className="object-cover transition-all duration-700"
            />
          </div>

          {/* زر يمين */}
          {project.images.length > 1 && (
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev + 1) % project.images.length)
              }
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
            >
              ➤
            </button>
          )}

          {/* زر شمال */}
          {project.images.length > 1 && (
            <button
              onClick={() =>
                setCurrentIndex(
                  (prev) =>
                    (prev - 1 + project.images.length) % project.images.length
                )
              }
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full rotate-180"
            >
              ➤
            </button>
          )}

          {/* النقاط */}
          <div className="flex justify-center mt-4 space-x-2">
            {project.images.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  currentIndex === i ? "bg-amber-400" : "bg-gray-500"
                }`}
              ></div>
            ))}
          </div>
        </div>

        <p className="text-white/80 mt-10 text-lg text-center">
          {language === "ar" ? project.description_ar : project.description_en}
        </p>
      </div>

      <Footer />
    </>
  );
}
