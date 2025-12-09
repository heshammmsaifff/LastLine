import "./globals.css";
import { Alexandria } from "next/font/google";
import { Roboto_Condensed } from "next/font/google";
import { LanguageProvider } from "./context/LanguageContext";

const alexandria = Alexandria({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-english",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${alexandria.variable} ${robotoCondensed.variable}`}
    >
      <body className="hero-bg min-h-screen text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
