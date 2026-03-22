import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import VoterSearch from "./components/VoterSearch";
import GallerySection from "./components/Gallerysection";
import CommitmentsSection from "./components/Commitmentssection";
import AboutSection from "./components/Aboutsection";
import ContactSection from "./components/Contactsection";
import Footer from "./components/Footer";
import "./globals.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <VoterSearch />
      <GallerySection />
      <CommitmentsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
