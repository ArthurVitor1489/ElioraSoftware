import React, { useState } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Database, Terminal, CheckCircle2, Code2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'ai' | 'speed'>('architecture');

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-grid">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[250px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md animate-fade-in shadow-inner">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-slate-300 font-mono text-[11px] sm:text-xs">eliorasoft.com.br</span>
            <span className="w-1 h-1 rounded-full bg-slate-500" />
            <span className="text-white font-medium">Software House & Engenharia de IA</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-heading leading-[1.1] mb-6">
            Desenvolvemos o software que{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              escala o seu negócio.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            De <strong>plataformas SaaS corporativas</strong> a <strong>aplicativos móveis</strong> e <strong>agentes de Inteligência Artificial</strong>. Entregamos soluções digitais robustas, seguras e com design de nível mundial para empresas que buscam liderança.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#simulador"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold text-base shadow-xl shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95 group"
            >
              <span>Simular Escopo do Meu Projeto</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#servicos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 text-slate-200 font-medium text-base backdrop-blur-md transition-all"
            >
              <Code2 className="w-4 h-4 text-indigo-400" />
              <span>Conhecer Nossos Serviços</span>
            </a>
          </div>

          {/* Trust Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-white/10 text-left">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-indigo-400 mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-mono font-semibold uppercase text-slate-400">Propriedade</span>
              </div>
              <p className="text-sm font-bold text-white">100% Seu Código</p>
              <p className="text-xs text-slate-400">Sem royalties ou vendor lock-in</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <Zap className="w-4 h-4" />
                <span className="text-xs font-mono font-semibold uppercase text-slate-400">Metodologia</span>
              </div>
              <p className="text-sm font-bold text-white">Sprints Semanais</p>
              <p className="text-xs text-slate-400">Entregas e testes a cada 7 dias</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <Database className="w-4 h-4" />
                <span className="text-xs font-mono font-semibold uppercase text-slate-400">Arquitetura</span>
              </div>
              <p className="text-sm font-bold text-white">Cloud-Native & Segura</p>
              <p className="text-xs text-slate-400">Alta disponibilidade e LGPD</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-purple-400 mb-1">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-mono font-semibold uppercase text-slate-400">Inovação</span>
              </div>
              <p className="text-sm font-bold text-white">IA Generativa & LLMs</p>
              <p className="text-xs text-slate-400">Automação de alto impacto</p>
            </div>
          </div>
        </div>

        {/* Interactive Terminal / Architecture Visual Mockup */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden glass-card shadow-2xl shadow-indigo-950/40 border border-white/10">
            {/* Terminal Top Bar */}
            <div className="bg-[#0e1424] px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  eliora-cloud-engine :: production-deploy
                </span>
              </div>

              <div className="flex items-center gap-1.5 bg-black/40 rounded-lg p-1">
                <button
                  type="button"
                  onClick={() => setActiveTab('architecture')}
                  className={`px-2.5 py-1 text-xs rounded font-mono transition-colors ${
                    activeTab === 'architecture' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Arquitetura
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('ai')}
                  className={`px-2.5 py-1 text-xs rounded font-mono transition-colors ${
                    activeTab === 'ai' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Agente IA
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('speed')}
                  className={`px-2.5 py-1 text-xs rounded font-mono transition-colors ${
                    activeTab === 'speed' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Performance
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-xs sm:text-sm bg-[#070b14]/90 leading-relaxed text-slate-300 overflow-x-auto min-h-[220px]">
              {activeTab === 'architecture' && (
                <div className="space-y-2 animate-in fade-in duration-300">
                  <div className="text-slate-500 font-sans text-xs"># Inicializando pipeline corporativo para eliorasoft.com.br</div>
                  <div className="text-indigo-400 flex items-center gap-2">
                    <span className="text-slate-400">$</span> eliora deploy --environment=production --security=enterprise
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Multi-tenant isolation & RBAC permissions validated (0 leaks)</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Database indexes & Prisma ORM pooling: active on PostgreSQL</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Docker containers provisioned with zero downtime rolling update</span>
                  </div>
                  <div className="pt-2 text-cyan-300 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span>Deploy concluído com sucesso em 1.84s • SSL ativo • Domínio: eliorasoft.com.br</span>
                  </div>
                </div>
              )}

              {activeTab === 'ai' && (
                <div className="space-y-2 animate-in fade-in duration-300">
                  <div className="text-slate-500 font-sans text-xs"># RAG Pipeline & LLM Automation Worker</div>
                  <div className="text-indigo-400 flex items-center gap-2">
                    <span className="text-slate-400">$</span> eliora ai-agent status --model=hybrid-reasoning
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Vector DB Knowledge Base: 14,280 chunks indexed with pgvector</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>WhatsApp Business Gateway: conectado e respondendo em tempo real</span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                    <span>Tempo médio de resposta do agente: 620ms • Taxa de resolução sem intervenção: 91.4%</span>
                  </div>
                </div>
              )}

              {activeTab === 'speed' && (
                <div className="space-y-2 animate-in fade-in duration-300">
                  <div className="text-slate-500 font-sans text-xs"># Lighthouse & Core Web Vitals Audit</div>
                  <div className="text-indigo-400 flex items-center gap-2">
                    <span className="text-slate-400">$</span> audit --url=https://eliorasoft.com.br --device=mobile
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    <div className="p-2.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-center">
                      <div className="text-xl font-bold text-emerald-400">100</div>
                      <div className="text-[10px] text-slate-300">Performance</div>
                    </div>
                    <div className="p-2.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-center">
                      <div className="text-xl font-bold text-emerald-400">100</div>
                      <div className="text-[10px] text-slate-300">Acessibilidade</div>
                    </div>
                    <div className="p-2.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-center">
                      <div className="text-xl font-bold text-emerald-400">100</div>
                      <div className="text-[10px] text-slate-300">Boas Práticas</div>
                    </div>
                    <div className="p-2.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-center">
                      <div className="text-xl font-bold text-emerald-400">100</div>
                      <div className="text-[10px] text-slate-300">SEO</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
