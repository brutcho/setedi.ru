// app/about/page.tsx
import AboutSalon from "../components/AboutSalon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "О салоне Sétedi | Философия прикосновения",
  description:
    "Пространство, где телесные практики возведены в ранг искусства. Узнайте о философии и принципах работы салона Sétedi в Екатеринбурге.",
};

export default function AboutPage() {
  return <AboutSalon />;
}
