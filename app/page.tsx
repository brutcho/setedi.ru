import HeroCarousel from "./components/HeroCarousel";
import WhoWeAre from "./components/WhoWeAre";
import MastersGrid from "./components/MastersGrid";
import LocationMap from "./components/LocationMap";
import PricesLuxury from "./components/PricesLuxury";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroCarousel />
      <WhoWeAre />
      <PricesLuxury />
      <MastersGrid />
      <LocationMap />
      {/* Блоки "Услуги" и "Польза массажа" будут добавлены позже */}
    </div>
  );
}
