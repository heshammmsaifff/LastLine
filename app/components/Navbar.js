"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t, lang } = useLanguage();

  const toggleMobile = () => setMobileOpen((prev) => !prev);

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 w-full py-2 text-white">
        <div className="mx-auto flex w-full h-29 items-center justify-between gap-4 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label={t.navHome}
          >
            <Image
              src="/logo.png"
              alt={t.logoAlt}
              width={180}
              height={80}
              priority
              className="h-auto w-30 md:w-30 lg:w-30 xl:w-30 object-contain sm:w-30"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="desktop-menu pt-2 items-center space-x-14 text-[20px] font-bold text-white">
            <li>
              <Link
                href="/"
                className="hover:text-[#FDC081] hover:border-b-2 hover:border-[#FDC081] pb-3 transition"
              >
                {t.navHome}
              </Link>
            </li>

            {/* Dropdown */}
            <li className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-baseline pt-3 hover:text-[#FDC081] hover:border-b-2 hover:border-[#FDC081] pb-3 transition"
              >
                {t.navServices} <ChevronDown size={16} />
              </button>

              {dropdownOpen && (
                <ul className="absolute right-0 mt-2 w-55 bg-white/40 border-gray-900 rounded-lg shadow-lg py-2 animate-fade-slide-down">
                  <li>
                    <Link
                      href="/contracting"
                      className="block px-4 py-2 hover:bg-white/20 hover:text-black"
                    >
                      {t.navContracting}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/media"
                      className="block px-4 py-2 hover:bg-white/20 hover:text-black"
                    >
                      {t.navAdvertising}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-white/20 hover:text-black"
                    >
                      {t.navTravel}
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                href="#"
                className="hover:text-[#FDC081] hover:border-b-2 hover:border-[#FDC081] pb-3 transition"
              >
                {t.navAbout}
              </Link>
            </li>

            <li>
              <Link
                href="/projects"
                className="hover:text-[#FDC081] hover:border-b-2 hover:border-[#FDC081] pb-3 transition"
              >
                {t.navProjects}
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-[#FDC081] hover:border-b-2 hover:border-[#FDC081] pb-3 transition"
              >
                {t.navBlog}
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-[#FDC081] hover:border-b-2 hover:border-[#FDC081] pb-3 transition"
              >
                {t.navContact}
              </Link>
            </li>
          </ul>

          {/* Mobile Button */}
          <button
            className="mobile-button inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur lg:hidden"
            onClick={toggleMobile}
            aria-label={t.openMenu}
          >
            <Menu size={24} className="text-white" />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar + Overlay */}
      <div
        className={`fixed inset-0 z-50 flex 
    ${lang === "ar" ? "justify-start" : "justify-end"} 
    transition-opacity duration-300 ease-out 
    ${
      mobileOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }
  `}
      >
        {/* Overlay */}
        <div
          className="w-full h-full bg-black/70 backdrop-blur-sm"
          onClick={toggleMobile}
        />

        {/* Sidebar */}
        <div
          className={`
      absolute top-0 h-full w-[320px]

      bg-linear-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]
      shadow-2xl
      transition-transform duration-300 ease-[cubic-bezier(.25,.1,.25,1)]
      ${
        lang === "ar"
          ? "left-0 border-r border-[#E69647]/20"
          : "right-0 border-l border-[#E69647]/20"
      }
      ${
        mobileOpen
          ? "translate-x-0"
          : lang === "ar"
          ? "-translate-x-full"
          : "translate-x-full"
      }
    `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            className={`flex items-center justify-between p-6 border-b border-[#E69647]/20 
        ${lang === "ar" ? "flex-row-reverse" : ""}`}
          >
            <Link href="/" onClick={toggleMobile} className="flex items-center">
              <Image
                src="/logo.png"
                alt={t.logoAlt}
                width={150}
                height={70}
                className="h-auto w-28 object-contain sm:w-36"
                priority
              />
            </Link>

            <button
              onClick={toggleMobile}
              className="p-2 rounded-lg hover:bg-[#E69647]/20 text-white transition-colors duration-200"
            >
              <X size={28} className="text-[#FED8B1]" />
            </button>
          </div>

          {/* Links */}
          <ul
            className={`flex flex-col px-6 py-8 space-y-2 
        ${lang === "ar" ? "text-right" : "text-left"}`}
          >
            <li>
              <Link
                href="/"
                onClick={toggleMobile}
                className="block px-4 py-3 rounded-lg text-base font-semibold text-white hover:bg-[#E69647]/20 hover:text-[#E69647] transition-all duration-200"
              >
                {t.navHome}
              </Link>
            </li>

            {/* Dropdown */}
            <li>
              <details className="group">
                <summary
                  className="cursor-pointer px-4 py-3 rounded-lg text-base font-semibold text-white hover:bg-[#E69647]/20 hover:text-[#E69647] transition-all duration-200 flex items-center justify-between"
                  dir="ltr"
                >
                  <span>{t.navServices}</span>
                  <ChevronDown
                    className="transition-transform duration-200 group-open:rotate-180 text-[#E69647]"
                    size={20}
                  />
                </summary>

                <ul
                  className={`
              mt-2 flex flex-col space-y-1 pl-4
              
            `}
                >
                  <li>
                    <Link
                      href="/Contracting"
                      onClick={toggleMobile}
                      className="block px-4 py-2 rounded-lg text-sm text-white/80 hover:bg-[#E69647]/20 hover:text-[#E69647] transition-all duration-200"
                    >
                      {t.navContracting}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/media"
                      onClick={toggleMobile}
                      className="block px-4 py-2 rounded-lg text-sm text-white/80 hover:bg-[#E69647]/20 hover:text-[#E69647] transition-all duration-200"
                    >
                      {t.navAdvertising}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      onClick={toggleMobile}
                      className="block px-4 py-2 rounded-lg text-sm text-white/80 hover:bg-[#E69647]/20 hover:text-[#E69647] transition-all duration-200"
                    >
                      {t.navTravel}
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <Link
                href="#"
                onClick={toggleMobile}
                className="block px-4 py-3 rounded-lg text-base font-semibold text-white hover:bg-[#E69647]/20 hover:text-[#E69647] transition-all duration-200"
              >
                {t.navAbout}
              </Link>
            </li>

            <li>
              <Link
                href="/projects"
                onClick={toggleMobile}
                className="block px-4 py-3 rounded-lg text-base font-semibold text-white hover:bg-[#E69647]/20 hover:text-[#E69647] transition-all duration-200"
              >
                {t.navProjects}
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                onClick={toggleMobile}
                className="block px-4 py-3 rounded-lg text-base font-semibold text-white hover:bg-[#E69647]/20 hover:text-[#E69647] transition-all duration-200"
              >
                {t.navBlog}
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={toggleMobile}
                className="block px-4 py-3 rounded-lg text-base font-semibold text-white hover:bg-[#E69647]/20 hover:text-[#E69647] transition-all duration-200"
              >
                {t.navContact}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Media Queries */}
      <style jsx>{`
        @media (max-width: 1120px) {
          .desktop-menu {
            display: none;
          }
          .mobile-button {
            display: block;
          }
        }
        @media (min-width: 1121px) {
          .desktop-menu {
            display: flex;
          }
          .mobile-button {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
