import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ProblemSection } from './components/ProblemSection';
import { SolutionsSection } from './components/SolutionsSection';
import { ResultsSection } from './components/ResultsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { TechStackSection } from './components/TechStackSection';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export function App() {
  const handleOpenContact = () => {
    const contactEl = document.getElementById('contato');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* 1. Header */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Sections */}
      <main>
        {/* 2. Hero */}
        <Hero />

        {/* 3. Barra de confiança */}
        <TrustBar />

        {/* 4. O Problema */}
        <ProblemSection />

        {/* 5. Soluções */}
        <SolutionsSection />

        {/* 6. Resultados / Benefícios */}
        <ResultsSection />

        {/* 7. Projetos / Case Água Belle */}
        <PortfolioSection />

        {/* 8. Como trabalhamos */}
        <ProcessSection />

        {/* 9. Tecnologias */}
        <TechStackSection />

        {/* 10. Sobre a Eliora */}
        <AboutSection />

        {/* 11. FAQ */}
        <FAQSection />

        {/* 12. CTA Final */}
        <FinalCTA />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Floating Action */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
