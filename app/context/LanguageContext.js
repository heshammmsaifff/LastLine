"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const translations = {
  ar: {
    navContact: "تواصل معنا",
    navHome: "الرئيسية",
    navServices: "الخدمات",
    navAbout: "معلومات عنا",
    navProjects: "المشاريع",
    navBlog: "المدونة",
    navContracting: "المقاولات العامة",
    navAdvertising: "الدعاية و الإعلان",
    navTravel: "السفر و السياحة",
    heroTitle: "مؤسسة الخط الأخير القابضة",
    heroDescription:
      "مرحباً بكم في مؤسسة الخط الأخير\nنقدم أفضل الحلول في المقاولات العامة، الدعاية والإعلان، والسفر والسياحة.",

    heroCTA: "ابدأ الآن",
    heroBadge: "مستقبل البناء يبدأ من هنا",
    heroImageAlt: "واجهة برج معماري حديث",
    logoAlt: "شعار مؤسسة الخط الأخير",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    floatingToggle: "En",
    floatingToggleAria: "تبديل اللغة إلى الإنجليزية",
    features: {
      pricingTitle: "أسعار تنافسية",
      pricingDesc:
        "خبرة واسعة لتنفيذ مشاريعكم و تقديم أفضل الأسعار لجميع عملائنا دون المساس بجودة التنفيذ.",
      teamTitle: "فريق عمل محترف",
      teamDesc:
        "نقدم فريقاً كاملاً من المهندسين والمختصين لتنفيذ مشاريعكم بأعلى معايير الجودة والدقة.",
      materialsTitle: "أفضل الخامات",
      materialsDesc:
        "نحرص على استخدام خامات عالية الجودة في جميع مشاريعنا لضمان ثبات النتائج.",
      designsTitle: "تصاميم مبتكرة",
      designsDesc:
        "تصميمات عصرية وكلاسيكية نعرضها على العميل قبل بدء التنفيذ لضمان التوافق مع التطلعات.",
    },
    about: {
      heading: "الـخــط الأخــيــر\n القــــابــــضــــة",
      subheading:
        "مؤسسة الخط الأخير للمقاولات تلتزم بتقديم أعلى جودة في جميع مشاريعها، بفضل فريق متكامل من المهندسين والمشرفين المحترفين وذوي الخبرة الواسعة.",
      body: "بإدارة نخبة من الخبراء في مجال المقاولات، نهتم بالوصول إلى أعلى مستويات التنفيذ بما يتناسب مع تطلعات العملاء.",
      cta: "اقرأ المزيد",
    },
    services: {
      heading: "ماذا نقدم لك",
      subtitle: "ماذا تقدم مؤسسة الخط الأخير القابضة",
      cards: [
        { title: "المقاولات العامة", image: "/contract.png" },
        { title: "التشطيبات", image: "/finish.png" },
        { title: "أعمال متكاملة", image: "/finish.png" },
        { title: "موبيليا حديثة", image: "/fur.png" },
      ],
    },
    stats: {
      heading: "آخر الإحصائيات",
      subtitle: "أهم الإحصائيات لمؤسسة الخط الأخير للمقاولات",
      cta: "اقرأ المزيد",
      items: [
        {
          title: "150+ | مشروع ناجح",
          description: "شملت مشاريع بنية تحتية، تشطيبات، وتصاميم داخلية.",
          year: "2016",
          progress: 92,
        },
        {
          title: "95% | نسبة رضا العملاء",
          description: "نلتزم بتقديم الجودة والاحترافية في جميع أعمالنا.",
          year: "2017",
          progress: 88,
        },
        {
          title: "2000 متر مربع من المساحات المبنية",
          description: "تم إنشاؤها بمهارة وإتقان في التنفيذ.",
          year: "2018",
          progress: 80,
        },
        {
          title: "50+ | مهندس وفني مؤهل",
          description: "يضمنون تنفيذ المشاريع وفق أعلى معايير البناء.",
          year: "2019",
          progress: 85,
        },
      ],
    },
    testimonials: {
      heading: "الآراء",
      subtitle: "ماذا قال عملاؤنا؟",
      quote:
        "أداء مؤسسة الخط الأخير كان استثنائياً منذ لحظة بدء المشروع حتى تسليمه. فريق عمل محترف، تنظيم متكامل، وتواصل سلس مع العملاء لضمان تحقيق كافة التطلعات بجودة تفوق التوقعات.",
    },
    achievments: {
      heading: "بعض إنجازاتنا",
      sub: "ما هي أرقامنا ؟",
      quote:
        "إنجـازاتنـا تتحدث عن التزامنـا بـالتميز؛ فقد نجحنا في تنفيذ مشاريع متنوعة بمجـالات المقـاولات والبنـاء، محققين أعلى معـايير الجودة ورضـا العملاء. بفضل فريقنا المحترف، تمكّنا من تسليم مشاريع معقدة بأعلى مستويات الدقة وفي الوقت المحدد، مما أكسبنا ثقة عملائنا وشراكات طويلة الأمد.",
    },
    projects: {
      heading: "سابقة الأعمال",
      sub: "بعض المشاريع",
    },
  },
  en: {
    navHome: "Home",
    navContact: "Contact Us",
    navServices: "Services",
    navAbout: "About Us",
    navProjects: "Projects",
    navBlog: "Blog",
    navContracting: "General Contracting",
    navAdvertising: "Advertising & Media",
    navTravel: "Travel & Tourism",
    heroTitle: "Last Line Holding",
    heroDescription:
      "Welcome to Last Line Holding\n We deliver leading solutions in general contracting, advertising, and travel to bring iconic projects to life.",
    heroCTA: "Get Started",
    heroBadge: "Shaping Tomorrow's Skyline",
    heroImageAlt: "Abstract architectural tower",
    logoAlt: "Last Line Holding logo",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    floatingToggle: "Ar",
    floatingToggleAria: "Switch language to Arabic",
    features: {
      pricingTitle: "Competitive Pricing",
      pricingDesc:
        "Our seasoned engineers and supervisors execute your projects with the best rates while preserving flawless quality.",
      teamTitle: "Expert Team",
      teamDesc:
        "A dedicated multidisciplinary crew delivers every engagement with precision and top-tier standards.",
      materialsTitle: "Premium Materials",
      materialsDesc:
        "We insist on high-grade materials across every project to guarantee long-lasting results.",
      designsTitle: "Innovative Designs",
      designsDesc:
        "Modern and timeless concepts are shared with clients before execution to ensure complete alignment.",
    },
    about: {
      heading: "Last Line Holding",
      subheading:
        "Last Line Contracting delivers uncompromising quality across every project, powered by a complete team of seasoned engineers and supervisors.",
      body: "Led by elite experts in the contracting domain, we pursue the highest execution standards to match client aspirations.",
      cta: "Read More",
    },
    services: {
      heading: "What We Offer You",
      subtitle: "Discover how Last Line Holding serves your next project",
      cards: [
        { title: "General Contracting", image: "/contract.png" },
        { title: "Finishing Works", image: "/finish.png" },
        { title: "Integrated Projects", image: "/finish.png" },
        { title: "Modern Furniture", image: "/fur.png" },
      ],
    },
    stats: {
      heading: "Latest Statistics",
      subtitle: "Key performance highlights from Last Line Contracting",
      cta: "Read More",
      items: [
        {
          title: "150+ | Successful Projects",
          description:
            "Covering infrastructure, high-end finishes, and bespoke interiors.",
          year: "2016",
          progress: 92,
        },
        {
          title: "95% | Client Satisfaction",
          description:
            "We deliver polished craftsmanship with consistent quality.",
          year: "2017",
          progress: 88,
        },
        {
          title: "2000 m² Delivered",
          description: "Constructed with precision and disciplined execution.",
          year: "2018",
          progress: 80,
        },
        {
          title: "50+ | Engineers & Technicians",
          description:
            "Expert teams ensuring builds meet world-class standards.",
          year: "2019",
          progress: 85,
        },
      ],
    },
    testimonials: {
      heading: "Testimonials",
      subtitle: "What did our clients say?",
      quote:
        "Last Line delivered an exceptional experience from kickoff to handover. A professional, well-orchestrated team maintained smooth communication to guarantee every expectation was exceeded.",
    },
    achievments: {
      heading: "Some of Our Achievements",
      sub: "What Are Our Numbers?",
      quote:
        "Our achievements speak for themselves regarding our commitment to excellence. We have successfully executed diverse projects in the contracting and construction sectors, achieving the highest standards of quality and customer satisfaction. Thanks to our professional team, we have been able to deliver complex projects with the utmost precision and on time, earning the trust of our clients and long-term partnerships.",
    },
    projects: {
      heading: "Previous work",
      sub: "Some projects",
    },
  },
};

const LanguageContext = createContext({
  language: "ar",
  toggleLanguage: () => {},
  t: translations.ar,
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("ar");

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const value = useMemo(
    () => ({ language, toggleLanguage, t: translations[language] }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
      <button
        type="button"
        onClick={toggleLanguage}
        aria-label={value.t.floatingToggleAria}
        className="
    fixed top-1/4 -translate-y-1/2
    -left-7 sm:-left-7
    z-60
    bg-white/50
    text-black font-semibold
    py-3 px-8 sm:px-8
    rounded-r-full
    shadow-lg shadow-black/25
    transition hover:bg-gray-600
  "
      >
        {value.t.floatingToggle}
      </button>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
