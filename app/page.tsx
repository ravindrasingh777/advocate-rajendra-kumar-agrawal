import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import VoterSearch from "./components/VoterSearch";
import HardworkSection from "./components/Hardworksection";
import CommitmentsSection from "./components/Commitmentssection";
import AboutSection from "./components/Aboutsection";
import ContactSection from "./components/Contactsection";
import InstagramCarousel from "./components/Instagramcarousel"
import TopMarquee from "./landing/TopMarquee";
import Footer from "./components/Footer";
import "./globals.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <TopMarquee />
      <HeroSection />
      <VoterSearch />
      <HardworkSection />
      <CommitmentsSection />
      <AboutSection />
      <InstagramCarousel />
      <ContactSection />
      <Footer />
    </div>
  );
}
