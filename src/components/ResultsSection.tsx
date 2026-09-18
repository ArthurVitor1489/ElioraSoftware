import React from 'react';
import { ShieldCheck, Zap, LineChart } from 'lucide-react';

export const ResultsSection: React.FC = () => {
  const benefits = [
    {
      title: 'Mais Controle',
      description: 'Centralize informações importantes em um único sistema.',
      details: 'Elimine planilhas paralelas e desencontros entre setores. Tenha visibilidade clara de onde estão seus pedidos, clientes e recursos financeiros.',
      icon: <ShieldCheck className="w-6 h-6 text-indigo-400" />
    },
    {
      title: 'Menos Trabalho Manual',
      description: 'Automatize tarefas repetitivas e reduza processos desnecessários.',
      details: 'Libere sua equipe de digitações manuais e retrabalho. O software assume a rotina operacional para que as pessoas foquem em atender bem o cliente.',
      icon: <Zap className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'Mais Informação',
      description: 'Transforme os dados da operação em informações úteis para tomar decisões.',
      details: 'Acompanhe métricas reais de desempenho, faturamento e gargalos sem precisar montar relatórios manuais complexos no final do mês.',
      icon: <LineChart className="w-6 h-6 text-emerald-400" />
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium mb-4">
            Foco no Impacto Real
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Tecnologia é o meio. O resultado é o que importa.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Software eficiente não é aquele cheio de termos complicados, mas o que resolve problemas da sua rotina e traz clareza para a gestão.
          </p>
        </div>

        {/* 3 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6">
                  {b.icon}
                </div>

                <h3 className="text-2xl font-bold text-white font-heading mb-2">
                  {b.title}
                </h3>

                <p className="text-base font-semibold text-slate-200 mb-4 leading-snug">
                  {b.description}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {b.details}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
