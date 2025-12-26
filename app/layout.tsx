import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import NavLuxury from "./components/NavLuxury";
import FooterMinimal from "./components/FooterMinimal";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "SÉTEDI | Массажный салон в Екатеринбурге",
  description: "Пространство точности. Массаж как тихий диалог.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-black text-gray-100 antialiased">
        <div className="min-h-screen flex flex-col">
          <NavLuxury />
          <main className="flex-grow pt-20">{children}</main>{" "}
          {/* pt-20 чтобы контент не скрывался под фиксированной шапкой */}
          <FooterMinimal />
        </div>
      </body>
    </html>
  );
}
