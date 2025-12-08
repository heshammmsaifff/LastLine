"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";
import { useLanguage } from "../../context/LanguageContext";
import { supabase } from "../../../lib/supabase";

export default function ContactForm() {
  const { language } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!form.name.trim() || !form.phone.trim() || !form.subject) {
      Swal.fire({
        icon: "error",
        title: language === "ar" ? "خطأ" : "Error",
        text:
          language === "ar"
            ? "الرجاء ملء جميع الحقول الإلزامية"
            : "Please fill all required fields",
      });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("contact_messages").insert([
        {
          name: form.name,
          phone: form.phone,
          email: form.email || null,
          subject: form.subject,
          message: form.message || null,
        },
      ]);

      if (error) throw error;

      Swal.fire({
        icon: "success",
        title: language === "ar" ? "تم الإرسال" : "Sent",
        text:
          language === "ar"
            ? "تم إرسال رسالتك، وسيتم التواصل معك في أقرب وقت ممكن."
            : "Your message has been sent. We will contact you as soon as possible.",
      });

      setForm({ name: "", phone: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: language === "ar" ? "حدث خطأ" : "Error",
        text:
          language === "ar"
            ? "حاول مرة أخرى لاحقاً."
            : "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" mb-10 max-w-3xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg"
    >
      <h2 className="text-3xl font-bold text-center mb-8">
        {language === "ar" ? "تواصل معنا" : "Contact Us"}
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-semibold">
            {language === "ar" ? "الاسم *" : "Name *"}
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:ring-2 focus:ring-amber-300 outline-none transition"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            {language === "ar" ? "رقم الهاتف *" : "Phone *"}
          </label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:ring-2 focus:ring-amber-300 outline-none transition"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            {language === "ar" ? "البريد الإلكتروني" : "Email"}
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:ring-2 focus:ring-amber-300 outline-none transition"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            {language === "ar" ? "الموضوع *" : "Subject *"}
          </label>
          <select
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/20 text-black border border-white/30 focus:ring-2 focus:ring-amber-300 outline-none transition"
            required
          >
            <option value="" className="bg-black/20">
              {language === "ar" ? "اختر الموضوع" : "Select a subject"}
            </option>
            <option
              className="bg-black/20"
              value={
                language === "ar" ? "المقاولات العامة" : "General Contracting"
              }
            >
              {language === "ar" ? "المقاولات العامة" : "General Contracting"}
            </option>
            <option
              className="bg-black/20"
              value={language === "ar" ? "السفر و السياحة" : "Travel & Tourism"}
            >
              {language === "ar" ? "السفر و السياحة" : "Travel & Tourism"}
            </option>
            <option
              className="bg-black/20"
              value={
                language === "ar"
                  ? "الدعاية و الاعلان"
                  : "Advertising & Marketing"
              }
            >
              {language === "ar"
                ? "الدعاية و الاعلان"
                : "Advertising & Marketing"}
            </option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label className="block mb-2 font-semibold">
          {language === "ar" ? "الرسالة" : "Message"}
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:ring-2 focus:ring-amber-300 outline-none transition"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full cursor-pointer bg-amber-300 text-black font-semibold py-3 rounded-lg hover:bg-amber-400 transition"
      >
        {loading
          ? language === "ar"
            ? "جاري الإرسال..."
            : "Sending..."
          : language === "ar"
          ? "إرسال"
          : "Send"}
      </button>
    </form>
  );
}
