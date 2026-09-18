import React from 'react';
import { ShieldCheck, FileCheck, Users2, Code2, Clock4, TrendingUp } from 'lucide-react';

interface Reason {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const reasons: Reason[] = [
  {
    title: '100% de Propriedade Intelectual',
    description: 'Você nunca fica refém da nossa empresa. Todo o código-fonte, infraestrutura, acessos e bancos de dados pertencem exclusivamente a você desde o primeiro dia.',
    icon: <FileCheck className="w-6 h-6 text-emerald-400" />
  },
  {
    title: 'Acordo de Confidencialidade (NDA)',
    description: 'Sua ideia e seus dados estratégicos estão totalmente resguardados sob contrato formal de não divulgação antes do início dos trabalhos.',
    icon: <ShieldCheck className="w-6 h-6 text-indigo-400" />
  },
  {
    title: 'Comunicação Direta com Engenharia',
    description: 'Sem intermediários ou atendentes sem conhecimento técnico. Você conversa diretamente com quem arquiteta e escreve o código do seu produto.',
    icon: <Users2 className="w-6 h-6 text-cyan-400" />
  },
  {
    title: 'Clean Code, Tipagem & Arquitetura Sólida',
    description: 'Construímos softwares pensados para durar anos. Código limpo, modular, documentado e testado, facilitando manutenções e novas funcionalidades.',
    icon: <Code2 className="w-6 h-6 text-purple-400" />
  },
  {
    title: 'Pontualidade e Sprints Semanais',
    description: 'Compromisso inflexível com prazos acordados. Demonstrações reais a cada 7 dias para você testar no ar o que foi produzido.',
    icon: <Clock4 className="w-6 h-6 text-amber-400" />
  },
  {
    title: 'Foco em ROI e Redução de Custos',
    description: 'Não desenvolvemos tecnologia apenas por estética. Nosso objetivo é automatizar tarefas, reduzir custos operacionais e multiplicar seu faturamento.',
    icon: <TrendingUp className="w-6 h-6 text-rose-400" />
  }
];

export const WhyUsSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#070b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
            Diferenciais Competitivos
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Por que escolher a Eliora Software?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Combinamos a agilidade de uma software house moderna com o rigor de engenharia de nível corporativo.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="rounded-2xl glass-card p-8 border border-white/10 hover:border-emerald-500/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-white font-heading mb-3 group-hover:text-emerald-300 transition-colors">
                {reason.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
