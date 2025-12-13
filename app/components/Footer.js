"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { FaFacebookF, FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import Link from "next/link";

export default function Footer() {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <footer className="w-full bg-black text-primary-content p-10">
      <div
        className={`flex flex-col md:flex-row ${
          isRTL ? "md:flex-row-reverse" : ""
        } justify-between items-center gap-10 w-full max-w-7xl mx-auto`}
      >
        {/* Logo + Description */}
        <aside
          className={`text-center md:text-start max-w-md ${
            isRTL ? "md:order-1" : "md:order-none"
          }`}
        >
          <Image
            src="/logo-footer.png"
            alt="Logo Footer"
            width={150}
            height={50}
            className="mb-6 mx-auto md:mx-0"
          />

          <p className="font-bold leading-relaxed mb-3">
            {language === "ar"
              ? "مؤسسة الخط الأخير القابضة لحلول البناء و التصميم و الاستشارات الهندسية"
              : "Last Line Holding Company for Construction Solutions, Design and Engineering Consulting"}
          </p>
        </aside>

        {/* Social Icons */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-lg font-semibold">
            {language === "ar" ? "تابعنا" : "Follow Us"}
          </h3>

          <div className="flex gap-5 text-2xl">
            <Link
              href="https://www.facebook.com/share/1AKEABT55w/?mibextid=wwXIfr"
              aria-label="Facebook"
              className="hover:text-blue-600"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://www.tiktok.com/@lastline2020?_r=1&_t=ZS-92BzrcRA7AV"
              aria-label="Snapchat"
              className="hover:text-red-500"
            >
              <FaTiktok />
            </Link>
            <Link
              href="https://www.instagram.com/last__line2?igsh=M2I1bmd2emR0b2Fj"
              aria-label="X"
              className="hover:text-red-700"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <nav className="flex flex-col items-center gap-2 text-lg font-medium und">
          <h3 className="text-lg font-semibold mb-2 underline">
            {language === "ar" ? "روابط سريعة" : "Quick Links"}
          </h3>

          <Link href="/projects" className="hover:text-gray-600">
            {language === "ar" ? "المشاريع" : "Projects"}
          </Link>

          <Link href="/contact" className="hover:text-gray-600">
            {language === "ar" ? "تواصل معنا الآن" : "Contact Us"}
          </Link>

          <Link href="/blog" className="hover:text-gray-600">
            {language === "ar" ? "المدونة" : "Blog"}
          </Link>
        </nav>
      </div>
      <div className="text-center mt-5 text-sm">
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </div>
    </footer>
  );
}
