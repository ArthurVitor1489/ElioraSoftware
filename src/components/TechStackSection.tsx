import React from 'react';
import { Layers, CheckCircle2 } from 'lucide-react';

interface TechCategory {
  title: string;
  badge: string;
  items: { name: string; role: string }[];
}

const techCategories: TechCategory[] = [
  {
    title: 'Frontend & Mobile Moderno',
    badge: 'UI / UX & Performance',
    items: [
      { name: 'React.js & Next.js 15', role: 'Renderização híbrida (SSR/SSG/SPA) & SEO' },
      { name: 'TypeScript', role: 'Tipagem estrita e prevenção de bugs em tempo de compilação' },
      { name: 'React Native (Expo)', role: 'Apps móveis nativos para iOS e Android' },
      { name: 'Tailwind CSS', role: 'Design responsivo ultrarrápido com design tokens' },
      { name: 'Zustand & RTK', role: 'Gerenciamento de estado previsível e desacoplado' },
    ]
  },
  {
    title: 'Backend, APIs & Microsserviços',
    badge: 'Missão Crítica',
    items: [
      { name: 'Node.js & NestJS', role: 'Arquitetura corporativa modular e escalável' },
      { name: 'Python (FastAPI)', role: 'Microserviços de alta velocidade e processamento' },
      { name: 'Prisma ORM & SQL', role: 'Consultas tipadas seguras contra SQL Injection' },
      { name: 'REST & Webhooks', role: 'Integrações seguras com bancos e gateways' },
      { name: 'Redis & Filas', role: 'Cache de alta performance e mensageria assíncrona' },
    ]
  },
  {
    title: 'Inteligência Artificial & Dados',
    badge: 'Nova Fronteira',
    items: [
      { name: 'OpenAI & Google Gemini', role: 'Modelos de linguagem de última geração' },
      { name: 'pgvector & Vector DBs', role: 'Bancos vetoriais para busca semântica e RAG' },
      { name: 'PostgreSQL Relacional', role: 'Confiabilidade ACID para transações corporativas' },
      { name: 'LangChain & Agents', role: 'Orquestração de fluxos autônomos inteligentes' },
      { name: 'Automação WhatsApp API', role: 'Atendimento e vendas 24/7 conectados ao ERP' },
    ]
  },
  {
    title: 'Cloud, DevOps & Segurança',
    badge: 'Infraestrutura',
    items: [
      { name: 'Docker Containers', role: 'Padronização entre ambientes de dev e produção' },
      { name: 'AWS & Cloudflare', role: 'CDN global, proteção DDoS e certificados SSL' },
      { name: 'GitHub Actions CI/CD', role: 'Esteira de testes automatizados e deploy contínuo' },
      { name: 'Conformidade LGPD', role: 'Criptografia de dados sensíveis em trânsito e repouso' },
      { name: 'RBAC & Auth Segura', role: 'Controle de acesso granular e cookies HttpOnly' },
    ]
  }
];

export const TechStackSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#070b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            Stack Tecnológica de Elite
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Tecnologias comprovadas no mercado global
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Não apostamos em soluções obsoletas. Desenvolvemos com as mesmas tecnologias utilizadas por big techs para garantir que seu produto dure e cresça sem dores de cabeça.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-2xl glass-card p-6 sm:p-8 border border-white/10 hover:border-cyan-500/30 transition-all"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <h3 className="text-xl font-bold text-white font-heading">{cat.title}</h3>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-cyan-300">
                  {cat.badge}
                </span>
              </div>

              <div className="space-y-4">
                {cat.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                    <div>
                      <div className="text-sm font-semibold text-white">{item.name}</div>
                      <div className="text-xs text-slate-400">{item.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
