import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProjectEstimator } from './components/ProjectEstimator';
import { PortfolioSection } from './components/PortfolioSection';
import { TechStackSection } from './components/TechStackSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyUsSection } from './components/WhyUsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export function App() {
  const handleOpenContact = () => {
    const contactElement = document.getElementById('contato');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Top Fixed Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Layout */}
      <main>
        <Hero />
        <ServicesSection />
        <ProjectEstimator />
        <PortfolioSection />
        <TechStackSection />
        <ProcessSection />
        <WhyUsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
