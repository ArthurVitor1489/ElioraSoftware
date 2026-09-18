import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="cases" className="py-24 relative overflow-hidden bg-[#090d16]">
      {/* Glows */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-4">
            Casos de Sucesso & Portfólio
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Engenharia aplicada a problemas reais
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Conheça algumas das arquiteturas, plataformas SaaS e soluções desenvolvidas com o rigor técnico e a obsessão por qualidade da Eliora Software.
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'Todos os Projetos' },
              { id: 'saas', label: 'Plataformas SaaS & ERP' },
              { id: 'mobile', label: 'Apps Mobile' },
              { id: 'ai', label: 'Inteligência Artificial' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeFilter === tab.id
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.06] border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl glass-card overflow-hidden border border-white/10 hover:border-indigo-500/40 transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Visual Header Mockup Bar */}
                <div className="bg-[#0f172a] px-6 py-4 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400">{project.title}</span>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                    {project.status}
                  </span>
                </div>

                <div className="p-6 sm:p-8 space-y-5">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
                      {project.categoryLabel}
                    </span>
                    <h3 className="text-2xl font-bold text-white font-heading mt-1 group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                      <span className="text-[11px] font-mono uppercase font-bold text-rose-300 block mb-1">
                        Desafio
                      </span>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                      <span className="text-[11px] font-mono uppercase font-bold text-cyan-300 block mb-1">
                        Solução Eliora
                      </span>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Impact / Results */}
                  <div className="pt-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                      Resultados & Métricas:
                    </span>
                    <div className="space-y-1.5">
                      {project.impact.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-emerald-300">
                          <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Tech Tags */}
              <div className="px-6 sm:px-8 pb-6 pt-2 border-t border-white/5 mt-4 flex items-center justify-between flex-wrap gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.05] border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/5583996448504?text=Ol%C3%A1%20Eliora%2C%20vi%20o%20case%20${encodeURIComponent(project.title)}%20no%20site%20e%20gostaria%20de%20algo%20semelhante.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-semibold group-hover:underline"
                >
                  <span>Quero um projeto como este</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
