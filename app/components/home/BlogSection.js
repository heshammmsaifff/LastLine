"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogCarouselFull() {
  const { language } = useLanguage();
  const [blogs, setBlogs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // التنقل التلقائي كل 4 ثواني
  useEffect(() => {
    if (blogs.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % blogs.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [blogs]);

  if (blogs.length === 0) return null;

  const currentBlog = blogs[currentIndex];

  return (
    <div className="relative w-full py-16 bg-[radial-gradient(circle,#3b2b1a_0%,#1e150d_60%,#000000_100%)]">
      <h2 className="text-4xl font-bold text-center mb-10 text-amber-300">
        {language === "ar" ? "المدونة" : "Blog"}
      </h2>

      <div className="relative w-full flex justify-center items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBlog.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-6xl bg-white/10 backdrop-blur shadow-lg rounded-2xl overflow-hidden border border-white/20"
          >
            <Image
              src={currentBlog.image_url}
              width={1200}
              height={500}
              alt="blog image"
              className="w-full h-[400px] sm:h-[500px] object-cover"
            />
            <div className="p-8 text-center">
              <h3 className="text-3xl font-bold text-[#FED8B1] mb-4">
                {language === "ar"
                  ? currentBlog.title_ar
                  : currentBlog.title_en}
              </h3>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                {language === "ar"
                  ? currentBlog.content_ar
                  : currentBlog.content_en}
              </p>
              <Link
                href={`/blog/${currentBlog.id}`}
                className="inline-block text-amber-300 font-semibold"
              >
                {language === "ar" ? "اقرأ المزيد →" : "Read More →"}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="text-center mt-10">
        <Link
          href="/blog"
          className="inline-block mt-6 bg-[#E69647] text-black font-bold px-6 py-3 rounded-t-[15px] rounded-b-[20px] transition-colors duration-300 hover:bg-[#A67B5B]"
        >
          {language === "ar" ? "عرض جميع المدونات" : "View All Blogs"}
        </Link>
      </div>
    </div>
  );
}
