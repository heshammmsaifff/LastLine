"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "../../../lib/supabase";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BlogDetail() {
  const { id } = useParams();
  const { language } = useLanguage();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("id", id)
        .single();

      if (error) console.error(error);
      else setBlog(data);
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return (
      <>
        <Navbar />
        <div className="py-20 text-center text-white text-lg">Loading...</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="py-16 mt-15 px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-amber-300 mb-6 text-center">
          {language === "ar" ? blog.title_ar : blog.title_en}
        </h1>

        <Image
          src={blog.image_url}
          width={800}
          height={450}
          alt="blog image"
          className="w-full rounded-2xl mb-6 object-cover"
        />

        <p className="text-white/90 text-lg leading-relaxed">
          {language === "ar" ? blog.content_ar : blog.content_en}
        </p>
      </div>

      <Footer />
    </>
  );
}
