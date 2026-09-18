import React from 'react';
import { ArrowRight, Clock, Package, Users, DollarSign, TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0b0f19]">
      {/* Background subtle radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-indigo-900/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Text Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/70 border border-slate-700/60 text-slate-300 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
            Desenvolvimento de Software Sob Medida
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-heading leading-[1.12] mb-6">
            Software desenvolvido para o jeito que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-200">
              sua empresa trabalha.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Transformamos processos, ideias e desafios de negócio em sistemas personalizados, aplicativos e soluções digitais que ajudam sua empresa a operar melhor e crescer.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contato"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-md transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>Solicitar orçamento</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#projetos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium text-sm transition-all"
            >
              <span>Conhecer nossos projetos</span>
            </a>
          </div>
        </div>

        {/* Real Software UI Representation (Mockup do Sistema) */}
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-slate-800 bg-[#0e1424] shadow-2xl overflow-hidden">
            
            {/* Window Header */}
            <div className="bg-[#0b101d] px-5 py-3 border-b border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-slate-700" />
                <span className="w-3 h-3 rounded-full bg-slate-700" />
                <span className="w-3 h-3 rounded-full bg-slate-700" />
                <span className="ml-3 text-xs font-medium text-slate-400 font-sans hidden sm:inline">
                  Eliora Gestão • Painel Operacional Centralizado
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Operação em Tempo Real</span>
              </div>
            </div>

            {/* Mockup Body: Dashboard & Orders */}
            <div className="p-5 sm:p-7 space-y-6">
              
              {/* Metric Cards Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div className="p-4 rounded-xl bg-[#131b2e] border border-slate-800/70">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                    <span>Faturamento Hoje</span>
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-white font-heading">R$ 14.850,00</div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-400 mt-1 font-medium">
                    <TrendingUp className="w-3 h-3" />
                    <span>+12% vs. média</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#131b2e] border border-slate-800/70">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                    <span>Pedidos em Rota</span>
                    <Package className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-white font-heading">38 entregas</div>
                  <div className="text-[11px] text-slate-400 mt-1">4 motoristas em campo</div>
                </div>

                <div className="p-4 rounded-xl bg-[#131b2e] border border-slate-800/70">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                    <span>Clientes Ativos</span>
                    <Users className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-white font-heading">1.248</div>
                  <div className="text-[11px] text-slate-400 mt-1">Histórico sincronizado</div>
                </div>

                <div className="p-4 rounded-xl bg-[#131b2e] border border-slate-800/70">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                    <span>Tempo de Atendimento</span>
                    <Clock className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-white font-heading">2.4 min</div>
                  <div className="text-[11px] text-emerald-400 mt-1">-65% tempo manual</div>
                </div>
              </div>

              {/* Order Flow Preview Table */}
              <div className="rounded-xl bg-[#111728] border border-slate-800/80 overflow-hidden">
                <div className="px-5 py-3 border-b border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-300">Últimos Pedidos & Entregas</span>
                  <span className="text-[11px] text-slate-400 hidden sm:inline">Atualizado automaticamente a cada 15s</span>
                </div>

                <div className="divide-y divide-slate-800/50 text-xs">
                  <div className="px-5 py-3 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <div className="font-semibold text-white truncate">Supermercado Alvorada • Pedido #1084</div>
                      <div className="text-slate-400 text-[11px]">30 galões 20L • Rota Sul</div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-slate-200 font-mono font-medium">R$ 450,00</span>
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        Entregue
                      </span>
                    </div>
                  </div>

                  <div className="px-5 py-3 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <div className="font-semibold text-white truncate">Clínica São Matheus • Pedido #1085</div>
                      <div className="text-slate-400 text-[11px]">10 galões 20L + 2 suportes • Rota Centro</div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-slate-200 font-mono font-medium">R$ 210,00</span>
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                        Em Trânsito
                      </span>
                    </div>
                  </div>

                  <div className="px-5 py-3 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <div className="font-semibold text-white truncate">Condomínio Solar das Palmeiras • Pedido #1086</div>
                      <div className="text-slate-400 text-[11px]">25 galões mineral • Aguardando saída</div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-slate-200 font-mono font-medium">R$ 375,00</span>
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-amber-500/15 text-amber-400 border border-amber-500/30">
                        Expedição
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
