import React from 'react';
import { Search, PenTool, Code, CheckSquare, Rocket } from 'lucide-react';

interface Step {
  number: string;
  title: string;
  description: string;
  deliverable: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Descoberta & Diagnóstico Técnico',
    description: 'Mapeamos a fundo as regras de negócio, desafios dos usuários, integrações necessárias e definimos a arquitetura ideal antes de escrever a primeira linha de código.',
    deliverable: 'Documento de Escopo, Cronograma & NDA assinado',
    icon: <Search className="w-5 h-5 text-indigo-400" />
  },
  {
    number: '02',
    title: 'UI/UX & Prototipagem Interativa',
    description: 'Desenhamos cada tela no Figma com visual moderno, intuitivo e focado em conversão. Você navega e aprova o protótipo antes de iniciarmos o desenvolvimento.',
    deliverable: 'Protótipo navegável no Figma & Design System',
    icon: <PenTool className="w-5 h-5 text-cyan-400" />
  },
  {
    number: '03',
    title: 'Desenvolvimento Ágil em Sprints',
    description: 'Programamos a solução em sprints semanais com código limpo, tipagem estrita (TypeScript) e boas práticas de engenharia. Toda semana você vê o produto evoluir.',
    deliverable: 'Ambiente de testes (Staging) atualizado semanalmente',
    icon: <Code className="w-5 h-5 text-emerald-400" />
  },
  {
    number: '04',
    title: 'Homologação, Testes & Segurança',
    description: 'Executamos testes rigorosos de usabilidade, compatibilidade com múltiplos dispositivos (mobile e desktop), testes de carga e validações de segurança contra vulnerabilidades.',
    deliverable: 'Checklist de Qualidade & Relatório de Segurança',
    icon: <CheckSquare className="w-5 h-5 text-purple-400" />
  },
  {
    number: '05',
    title: 'Deploy em Nuvem & Sustentação',
    description: 'Configuramos os servidores em nuvem, certificados SSL, pipelines automatizadas e colocamos seu produto no ar com alta disponibilidade e monitoramento ativo.',
    deliverable: 'Ambiente de Produção no ar & 100% do código entregue',
    icon: <Rocket className="w-5 h-5 text-amber-400" />
  }
];

export const ProcessSection: React.FC = () => {
  return (
    <section id="metodologia" className="py-24 relative overflow-hidden bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-4">
            Como Trabalhamos
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Transparência total do primeiro café ao deploy final
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Esqueça projetos atrasados ou comunicação truncada. Nosso método foi desenhado para você acompanhar cada etapa com clareza absoluta.
          </p>
        </div>

        {/* Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl glass-card p-6 border border-white/10 hover:border-indigo-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-mono text-slate-500 group-hover:text-indigo-400 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-base font-bold text-white font-heading mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                  Entrega:
                </span>
                <span className="text-xs font-medium text-indigo-300">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
