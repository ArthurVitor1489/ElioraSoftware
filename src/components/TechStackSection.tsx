import React from 'react';
import { Code2, Server, Database, Container, Sparkles, Smartphone } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const stack = [
    { name: 'React', category: 'Frontend', icon: <Code2 className="w-4 h-4 text-indigo-400" /> },
    { name: 'Next.js', category: 'Fullstack & SSR', icon: <Code2 className="w-4 h-4 text-slate-300" /> },
    { name: 'Node.js', category: 'Backend & APIs', icon: <Server className="w-4 h-4 text-emerald-400" /> },
    { name: 'TypeScript', category: 'Segurança de Tipos', icon: <Code2 className="w-4 h-4 text-blue-400" /> },
    { name: 'React Native', category: 'Apps iOS & Android', icon: <Smartphone className="w-4 h-4 text-cyan-400" /> },
    { name: 'PostgreSQL', category: 'Banco Relacional', icon: <Database className="w-4 h-4 text-indigo-400" /> },
    { name: 'Turso', category: 'Edge Database / SQLite', icon: <Database className="w-4 h-4 text-teal-400" /> },
    { name: 'Docker', category: 'Containers & Deploy', icon: <Container className="w-4 h-4 text-blue-400" /> },
    { name: 'OpenAI', category: 'Modelos de IA', icon: <Sparkles className="w-4 h-4 text-amber-400" /> }
  ];

  return (
    <section className="py-20 border-y border-slate-800/80 bg-[#0d1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
            Engenharia de Software
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading mb-3">
            Construído com tecnologias modernas.
          </h2>
          <p className="text-sm text-slate-400">
            Escolhemos a tecnologia de acordo com o problema, não o contrário.
          </p>
        </div>

        {/* Discreet Stack Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {stack.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-200"
            >
              {item.icon}
              <span className="font-semibold text-white">{item.name}</span>
              <span className="text-[11px] text-slate-400 hidden sm:inline">• {item.category}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
