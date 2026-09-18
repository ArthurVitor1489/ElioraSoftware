import React from 'react';
import { LayoutDashboard, Smartphone, Bot, Rocket, ArrowRight } from 'lucide-react';

export const SolutionsSection: React.FC = () => {
  const solutions = [
    {
      id: 'sistemas-personalizados',
      title: 'Sistemas Personalizados',
      description: 'Sistemas web desenvolvidos de acordo com os processos e necessidades específicas da sua empresa.',
      icon: <LayoutDashboard className="w-6 h-6 text-indigo-400" />,
      examples: [
        'Sistemas de gestão empresarial',
        'ERP personalizado por segmento',
        'CRM e controle de carteira de clientes',
        'Sistemas internos e portais corporativos',
        'Dashboards analíticos e relatórios em tempo real'
      ]
    },
    {
      id: 'aplicativos',
      title: 'Aplicativos',
      description: 'Aplicativos para clientes, equipes e operações de campo que precisam estar na palma da mão.',
      icon: <Smartphone className="w-6 h-6 text-cyan-400" />,
      examples: [
        'Aplicativos para Android e iOS',
        'Tecnologia React Native de alta performance',
        'Apps operacionais para equipes de campo e entregas',
        'Aplicativos de autoatendimento para clientes finais',
        'Sincronização offline-first com banco local'
      ]
    },
    {
      id: 'automacao-ia',
      title: 'Automação & IA',
      description: 'Automatizamos tarefas e incorporamos inteligência aos processos e rotinas da sua empresa.',
      icon: <Bot className="w-6 h-6 text-emerald-400" />,
      examples: [
        'Automação de fluxos e tarefas repetitivas',
        'Agentes de IA e assistentes sob medida',
        'Atendimento inteligente integrado a sistemas',
        'Análise de dados e relatórios automatizados',
        'Integrações com modelos de linguagem (OpenAI/Gemini)'
      ]
    },
    {
      id: 'saas-produtos',
      title: 'SaaS & Produtos Digitais',
      description: 'Transformamos ideias e oportunidades de mercado em produtos digitais escaláveis e seguros.',
      icon: <Rocket className="w-6 h-6 text-amber-400" />,
      examples: [
        'MVPs rápidos para validação comercial',
        'Plataformas SaaS multi-tenant completas',
        'Sistemas de cobrança e assinatura recorrente',
        'Produtos digitais de alta escalabilidade',
        'APIs estruturadas e integrações seguras'
      ]
    }
  ];

  return (
    <section id="solucoes" className="py-24 relative overflow-hidden bg-[#0d1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium mb-4">
            Escopo de Atuação
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Soluções digitais para diferentes desafios.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Desenvolvemos software de acordo com o problema que sua empresa precisa resolver.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-white font-heading mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-800/60 mb-6">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                    Exemplos práticos:
                  </span>
                  {item.examples.map((ex, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                      <span>{ex}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors"
                >
                  <span>Conhecer soluções</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
