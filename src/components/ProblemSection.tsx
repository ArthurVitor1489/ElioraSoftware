import React from 'react';
import { ArrowRight, AlertTriangle, CheckCircle2, FileSpreadsheet, MessageSquare, Layers, Clock } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium mb-4">
            Desafios Operacionais Reais
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight mb-6 leading-tight">
            Sua empresa não precisa se adaptar ao software.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
            Muitos negócios acabam trabalhando com planilhas, sistemas separados, processos manuais e ferramentas que não conversam entre si.
          </p>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Quando o software não acompanha a operação, a equipe perde tempo, informações ficam espalhadas e decisões ficam mais difíceis. A Eliora desenvolve soluções pensando primeiro no seu negócio.
          </p>
        </div>

        {/* Visual Transformation Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Cenário Fragmentado (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold mb-2 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Como muitas empresas operam hoje</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 shrink-0">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Planilhas paralelas</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Versões duplicadas, fórmulas quebradas e erros de digitação.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-slate-800/50">
                <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">WhatsApp misturado</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Pedidos perdidos em conversas privadas sem histórico centralizado.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-slate-800/50">
                <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Sistemas separados</h4>
                  <p className="text-xs text-slate-400 mt-0.5">O financeiro não conversa com o estoque nem com as vendas.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-slate-800/50">
                <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Processos manuais</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Horas gastas conferindo dados em vez de focar no cliente.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle: Transition Indicator (2 cols) */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center py-4 lg:py-0">
            <div className="hidden lg:flex w-12 h-12 rounded-full bg-indigo-600/20 border border-indigo-500/40 items-center justify-center text-indigo-400 shadow-lg">
              <ArrowRight className="w-5 h-5" />
            </div>
            <div className="lg:hidden text-center text-xs font-semibold text-indigo-400 py-2">
              Transformação com a Eliora &darr;
            </div>
          </div>

          {/* Right: Solução Eliora (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Com a Eliora Software</span>
            </div>

            <div className="p-6 rounded-xl bg-[#11182c] border border-indigo-500/30 shadow-xl space-y-4">
              <div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-medium">
                  Centralização Total
                </span>
                <h3 className="text-xl font-bold text-white font-heading mt-2">
                  Um sistema pensado para sua operação.
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Desenvolvemos a ferramenta exata que conecta sua equipe, automatiza tarefas burocráticas e organiza seu fluxo de trabalho.
                </p>
              </div>

              <div className="space-y-2.5 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Clientes, pedidos e financeiro integrados em tempo real</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Acesso seguro para a equipe via celular ou computador</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Histórico completo sem depender de planilhas dispersas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Decisões seguras com dados consolidados da operação</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <a
                  href="#solucoes"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <span>Ver tipos de soluções que desenvolvemos</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
