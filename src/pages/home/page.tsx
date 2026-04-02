import Navbar from "@/pages/home/components/Navbar";
import HeroSection from "@/pages/home/components/HeroSection";
import StatsStrip from "@/pages/home/components/StatsStrip";
import DiferenciaisSection from "@/pages/home/components/DiferenciaisSection";
import ServicosSection from "@/pages/home/components/ServicosSection";
import EquipeSection from "@/pages/home/components/EquipeSection";
import OrcamentoSection from "@/pages/home/components/OrcamentoSection";
import ContatoSection from "@/pages/home/components/ContatoSection";
import Footer from "@/pages/home/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <HeroSection />
      <StatsStrip />
      <DiferenciaisSection />
      <ServicosSection />
      <EquipeSection />
      <OrcamentoSection />
      <ContatoSection />
      <Footer />
    </div>
  );
}
