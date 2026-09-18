import React from 'react';
import { Layers, Smartphone, RefreshCw, Cpu } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const items = [
    {
      title: 'Software sob medida',
      description: 'Soluções adaptadas aos processos da sua empresa.',
      icon: <Layers className="w-5 h-5 text-indigo-400" />
    },
    {
      title: 'Web & Mobile',
      description: 'Sistemas acessíveis para equipes e clientes onde estiverem.',
      icon: <Smartphone className="w-5 h-5 text-cyan-400" />
    },
    {
      title: 'Integrações',
      description: 'Conectamos ferramentas, sistemas e processos.',
      icon: <Cpu className="w-5 h-5 text-emerald-400" />
    },
    {
      title: 'Evolução contínua',
      description: 'Software que acompanha o crescimento do negócio.',
      icon: <RefreshCw className="w-5 h-5 text-amber-400" />
    }
  ];

  return (
    <section className="py-14 border-y border-slate-800/80 bg-[#0d1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Message */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Parceria de Engenharia e Negócio
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-heading mt-1">
            Do problema ao software em um único parceiro.
          </h2>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-800/80 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-white font-heading mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
