import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Prices from "./components/Prices";
import Gallery from "./components/Gallery";
import Team from "./components/Team";
import Reviews from "./components/Reviews";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-spa-dark">
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Prices />
      <Gallery />
      <Team />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
}
