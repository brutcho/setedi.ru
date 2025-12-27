// app/masters/page.tsx
import MastersGrid from "../components/MastersGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Мастера Sétedi",
  description: "",
};

export default function MastersPage() {
  return <MastersGrid />;
}
