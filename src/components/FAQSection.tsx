import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Vocês desenvolvem sistemas personalizados?',
      answer: 'Sim. Desenvolvemos sistemas de acordo com os processos, necessidades e objetivos de cada empresa.'
    },
    {
      question: 'Vocês desenvolvem aplicativos?',
      answer: 'Sim. Desenvolvemos aplicativos para Android e iOS, além de soluções web responsivas.'
    },
    {
      question: 'Posso contratar a Eliora para desenvolver uma ideia?',
      answer: 'Sim. Podemos transformar uma ideia em um MVP ou produto digital completo.'
    },
    {
      question: 'Vocês trabalham com inteligência artificial?',
      answer: 'Sim. Podemos incorporar IA em novos produtos ou adicionar funcionalidades de IA a sistemas existentes.'
    },
    {
      question: 'Quanto custa desenvolver um sistema?',
      answer: 'O investimento depende do escopo, funcionalidades, integrações e complexidade. Após entender o projeto, podemos definir uma estimativa adequada.'
    },
    {
      question: 'Vocês fazem manutenção depois da entrega?',
      answer: 'Sim. Podemos continuar evoluindo, corrigindo e mantendo o sistema após o lançamento.'
    }
  ];

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#0d1220]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium mb-4">
            Dúvidas Comuns
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Perguntas frequentes.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Respostas diretas sobre como trabalhamos, escopos e formatos de contratação.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-slate-900/80 border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors focus:outline-none"
                >
                  <span className="text-base font-semibold text-white font-heading">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-indigo-400' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
