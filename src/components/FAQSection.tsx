import React, { useState } from 'react';
import { faqData } from '../data/faq';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#070b14]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Dúvidas Frequentes
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Perguntas comuns sobre desenvolvimento
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Tudo o que você precisa saber sobre contratação, segurança, prazos e entregáveis da Eliora Software.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl glass-card overflow-hidden border border-white/10 transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-semibold text-white font-heading">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-indigo-500/20 text-indigo-400' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5">
          <p className="text-sm text-slate-300 mb-3">
            Não encontrou a resposta para a sua dúvida específica?
          </p>
          <a
            href="https://wa.me/5583996448504?text=Ol%C3%A1%20Eliora%20Software%2C%20tenho%20uma%20d%C3%BAvida%20espec%C3%ADfica%20sobre%20o%20desenvolvimento%20de%20um%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 hover:underline inline-flex items-center gap-1.5"
          >
            <span>Fale diretamente com nosso líder técnico no WhatsApp</span>
            <span>&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
};
