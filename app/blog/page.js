"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BlogsPage() {
  const { language } = useLanguage();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) console.error(error);
      else setBlogs(data || []);
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <Navbar /> {/* Navbar */}
      <div className="py-16 mt-15 px-4 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-amber-300 mb-12">
          {language === "ar" ? "المدونة" : "Blog"}
        </h1>

        {blogs.length === 0 && (
          <p className="text-center text-white/80 h-screen text-lg mt-10">
            {language === "ar"
              ? "لا توجد مقالات في المدونة حالياً."
              : "No blog articles available at the moment."}
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 backdrop-blur shadow-lg rounded-2xl overflow-hidden border border-white/20"
            >
              <Image
                src={item.image_url}
                width={500}
                height={350}
                alt="blog image"
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#FED8B1] mb-3">
                  {language === "ar" ? item.title_ar : item.title_en}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  {language === "ar"
                    ? item.content_ar.substring(0, 100) + "..."
                    : item.content_en.substring(0, 100) + "..."}
                </p>
                <Link
                  href={`/blog/${item.id}`}
                  className="inline-block text-amber-300 font-semibold"
                >
                  {language === "ar" ? "اقرأ المزيد →" : "Read More →"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer /> {/* Footer */}
    </>
  );
}
