import React from 'react';
import { Search, Compass, Code2, Rocket, RefreshCw } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      phase: 'DESCOBERTA',
      title: 'Imersão no Negócio',
      description: 'Entendemos sua empresa, seus processos e o problema que precisa ser resolvido.',
      icon: <Search className="w-5 h-5 text-indigo-400" />
    },
    {
      number: '02',
      phase: 'PLANEJAMENTO',
      title: 'Arquitetura e UX',
      description: 'Definimos funcionalidades, experiência do usuário e arquitetura da solução.',
      icon: <Compass className="w-5 h-5 text-cyan-400" />
    },
    {
      number: '03',
      phase: 'DESENVOLVIMENTO',
      title: 'Construção Ágil',
      description: 'Construímos o sistema de forma incremental, mantendo o cliente próximo da evolução do projeto.',
      icon: <Code2 className="w-5 h-5 text-emerald-400" />
    },
    {
      number: '04',
      phase: 'LANÇAMENTO',
      title: 'Deploy em Produção',
      description: 'Colocamos a solução em produção e ajudamos na transição para a nova ferramenta.',
      icon: <Rocket className="w-5 h-5 text-amber-400" />
    },
    {
      number: '05',
      phase: 'EVOLUÇÃO',
      title: 'Suporte e Escala',
      description: 'O software continua evoluindo conforme a empresa cresce e novas necessidades aparecem.',
      icon: <RefreshCw className="w-5 h-5 text-purple-400" />
    }
  ];

  return (
    <section id="processo" className="py-24 relative overflow-hidden bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium mb-4">
            Metodologia Transparente
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Do problema à solução.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Um processo claro, estruturado e transparente em cada etapa do desenvolvimento.
          </p>
        </div>

        {/* 5 Steps Grid with Connecting Logic */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group relative"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black font-mono text-slate-600 group-hover:text-indigo-400 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <div className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold mb-1">
                  {step.phase}
                </div>
                <h3 className="text-base font-bold text-white font-heading mb-3">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Etapa {idx + 1} de 5</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
