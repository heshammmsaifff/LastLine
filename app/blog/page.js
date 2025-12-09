import React from "react";
import Main from "../components/blog/Main";

export const metadata = {
  title: "الخط الأخير - المدونة",
  description:
    "تابع المدونة لمعرفة آخر التحديثات والمدونات لمؤسسة الخط الأخير القابضة",
  keywords: [
    "الخط الأخير",
    "المدونة",
    "الأخبار",
    "مقالات",
    "Last Line",
    "Blog",
    "Updates",
  ],
};

export default function page() {
  return (
    <div>
      <Main />
    </div>
  );
}
