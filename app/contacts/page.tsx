import { Metadata } from "next";
import LocationMap from "../components/LocationMap";

export const metadata: Metadata = {
  title: "О салоне Sétedi | Философия прикосновения",
  description:
    "Пространство, где телесные практики возведены в ранг искусства. Узнайте о философии и принципах работы салона Sétedi в Екатеринбурге.",
};

export default function ContactsPage() {
  return <LocationMap />;
}
