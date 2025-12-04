// app/layout.js
import "./globals.css";
import { Alexandria } from "next/font/google";
import { LanguageProvider } from "./context/LanguageContext";

const alexandria = Alexandria({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-alexandria",
});

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={alexandria.className}>
      <body className="hero-bg min-h-screen text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
