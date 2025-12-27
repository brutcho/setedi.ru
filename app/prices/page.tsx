// app/about/page.tsx
import { Metadata } from "next";
import PricesLuxury from "../components/PricesLuxury";

export const metadata: Metadata = {
  title: "Мастера Sétedi",
  description: "",
};

export default function AboutPage() {
  return <PricesLuxury />;
}
