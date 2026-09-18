import React from 'react';
import { ArrowRight, Shield, HeartHandshake } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-2xl bg-slate-900/60 border border-slate-800 p-8 sm:p-12 lg:p-14">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium mb-6">
            Sobre a Eliora Software
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight mb-6 leading-tight">
            Uma empresa de software criada para construir soluções reais.
          </h2>

          <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
            <p>
              A Eliora Software desenvolve sistemas e produtos digitais para empresas que precisam transformar processos, ideias e desafios em tecnologia.
            </p>
            <p className="text-slate-400 text-sm sm:text-base">
              Nosso trabalho começa entendendo o negócio e termina entregando uma solução que possa realmente ser utilizada no dia a dia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-800/80 mb-8 text-xs sm:text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block mb-0.5">Propriedade Total</span>
                <span className="text-slate-400 text-xs">O código-fonte e o sistema pertencem 100% à sua empresa.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <HeartHandshake className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block mb-0.5">Proximidade com a Engenharia</span>
                <span className="text-slate-400 text-xs">Comunicação direta com quem planeja e programa sua solução.</span>
              </div>
            </div>
          </div>

          <div>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold transition-colors"
            >
              <span>Conheça a Eliora</span>
              <ArrowRight className="w-4 h-4 text-indigo-400" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
