import React from 'react';
import { servicesData } from '../data/services';
import { LayoutGrid, Smartphone, Cpu, Database, Cloud, Sparkles, Check, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  LayoutGrid: <LayoutGrid className="w-6 h-6 text-indigo-400" />,
  Smartphone: <Smartphone className="w-6 h-6 text-cyan-400" />,
  Cpu: <Cpu className="w-6 h-6 text-emerald-400" />,
  Database: <Database className="w-6 h-6 text-purple-400" />,
  Cloud: <Cloud className="w-6 h-6 text-blue-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-amber-400" />,
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="servicos" className="py-24 relative overflow-hidden bg-[#090d16]">
      {/* Background accents */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-4">
            Especialidades & Engenharia
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Soluções completas para cada fase do seu crescimento digital
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Combinamos arquitetura de software moderna, inteligência artificial e processos ágeis para entregar sistemas de alta performance que geram vantagem competitiva real.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl glass-card glass-card-hover p-8 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[service.iconName] || <LayoutGrid className="w-6 h-6 text-indigo-400" />}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-indigo-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-indigo-400 font-medium mb-4">
                  {service.tagline}
                </p>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 mb-6 pt-4 border-t border-white/10">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    O que inclui:
                  </span>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Tech Stack & Action */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.05] border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/5583996448504?text=Ol%C3%A1%20Eliora%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-indigo-600 text-white text-xs font-semibold border border-white/10 hover:border-indigo-500 transition-all group-hover:shadow-lg group-hover:shadow-indigo-600/20"
                >
                  <span>Solicitar Proposta para este Serviço</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-slate-900 to-cyan-950/60 border border-indigo-500/20 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Precisa de uma solução sob medida ou modernização de legado?
            </h4>
            <p className="text-slate-300 text-sm max-w-2xl">
              Nossa equipe faz uma análise técnica gratuita da sua demanda e define a arquitetura ideal com prazo e custos bem delimitados.
            </p>
          </div>
          <a
            href="#contato"
            className="shrink-0 px-6 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 text-sm font-bold shadow-lg transition-transform hover:scale-105"
          >
            Falar com a Engenharia
          </a>
        </div>

      </div>
    </section>
  );
};
