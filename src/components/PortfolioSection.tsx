import React, { useState } from 'react';
import { ArrowRight, Users, ShoppingCart, Truck, DollarSign, Package, History, CheckCircle2 } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pedidos' | 'clientes' | 'financeiro'>('pedidos');

  const modules = [
    {
      id: 'pedidos',
      label: 'Pedidos & Entregas',
      icon: <Truck className="w-4 h-4" />,
      title: 'Controle de Pedidos e Roteirização de Entregas',
      description: 'Centralização de todas as solicitações vindas de balcão e WhatsApp, com despacho imediato para motoristas e conferência de garrafões em rota.',
      points: [
        'Organização de entregas por bairros e rotas otimizadas',
        'Status em tempo real: Pendente, Em Trânsito e Entregue',
        'Conferência de vasilhames cheios vs. vasilhames retornados'
      ]
    },
    {
      id: 'clientes',
      label: 'Clientes & Comodato',
      icon: <Users className="w-4 h-4" />,
      title: 'Gestão de Clientes e Rastreamento de Vasilhames',
      description: 'Controle estrito de garrafões de 20L emprestados em comodato para empresas e condomínios, evitando perdas de patrimônio.',
      points: [
        'Histórico detalhado de consumo por cliente',
        'Saldo de vasilhames em posse do cliente com alerta de retenção',
        'Localização e pontos de entrega cadastrados'
      ]
    },
    {
      id: 'financeiro',
      label: 'Financeiro & Caixa',
      icon: <DollarSign className="w-4 h-4" />,
      title: 'Fechamento Diário, Contas a Receber e Meios de Pagamento',
      description: 'Conciliação automática de recebimentos em dinheiro, PIX, cartões e faturamento quinzenal/mensal para clientes corporativos.',
      points: [
        'Fechamento de caixa por entregador no fim de cada expediente',
        'Controle de clientes faturados com emissão de extrato',
        'Visão consolidada de entradas diárias e mensais'
      ]
    }
  ];

  const currentModule = modules.find(m => m.id === activeTab) || modules[0];

  return (
    <section id="projetos" className="py-24 relative overflow-hidden bg-[#0d1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium mb-4">
            Casos Reais em Produção
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Projetos que saíram do código e chegaram ao mundo real.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Conheça soluções desenvolvidas pela Eliora para resolver desafios operacionais complexos no dia a dia das empresas.
          </p>
        </div>

        {/* Featured Case: Água Belle */}
        <div className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-2xl">
          
          {/* Case Top Bar */}
          <div className="p-6 sm:p-10 border-b border-slate-800/80 bg-gradient-to-r from-slate-900 via-slate-900 to-[#10182b]">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                    Case em Destaque
                  </span>
                  <span className="text-xs text-slate-400">
                    Sistema de Gestão para Distribuidora de Água
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                  Água Belle — Plataforma Operacional & Gestão Comercial
                </h3>
                <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
                  Uma solução desenvolvida para centralizar clientes, pedidos, entregas, produtos e informações financeiras em uma única plataforma, eliminando anotações manuais e perdas de garrafões em comodato.
                </p>
              </div>

              <div className="shrink-0">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all"
                >
                  <span>Conhecer projeto</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Core Features Badges */}
            <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-slate-800/70">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/70 text-slate-300 text-xs">
                <Users className="w-3.5 h-3.5 text-indigo-400" />
                Clientes & Comodato
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/70 text-slate-300 text-xs">
                <ShoppingCart className="w-3.5 h-3.5 text-indigo-400" />
                Pedidos Rápidos
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/70 text-slate-300 text-xs">
                <Truck className="w-3.5 h-3.5 text-indigo-400" />
                Rotas de Entrega
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/70 text-slate-300 text-xs">
                <DollarSign className="w-3.5 h-3.5 text-indigo-400" />
                Controle Financeiro
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/70 text-slate-300 text-xs">
                <Package className="w-3.5 h-3.5 text-indigo-400" />
                Estoque de Vasilhames
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/70 text-slate-300 text-xs">
                <History className="w-3.5 h-3.5 text-indigo-400" />
                Histórico e Rastreabilidade
              </span>
            </div>
          </div>

          {/* Interactive Module Showcase */}
          <div className="p-6 sm:p-10">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {modules.map((mod) => (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => setActiveTab(mod.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                    activeTab === mod.id
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {mod.icon}
                  <span>{mod.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content Box */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0b0f19] p-6 sm:p-8 rounded-xl border border-slate-800">
              
              {/* Left explanation */}
              <div className="lg:col-span-6 space-y-4">
                <h4 className="text-xl font-bold text-white font-heading">
                  {currentModule.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentModule.description}
                </p>

                <div className="space-y-2 pt-3">
                  {currentModule.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Visual Representation of the UI */}
              <div className="lg:col-span-6">
                <div className="rounded-xl border border-slate-800 bg-[#0f1527] p-5 shadow-lg space-y-4 font-sans">
                  
                  {activeTab === 'pedidos' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                        <span className="font-semibold text-white">Despacho de Pedidos do Turno</span>
                        <span className="text-emerald-400 font-mono text-[11px]">8 rotas ativas</span>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/70 text-xs space-y-1">
                        <div className="flex justify-between font-medium text-white">
                          <span>Empresa Mecânica Real</span>
                          <span className="text-emerald-400">R$ 150,00</span>
                        </div>
                        <div className="text-[11px] text-slate-400">10 galões 20L • Motorista: Carlos (Moto 02)</div>
                        <div className="text-[11px] text-indigo-300 font-mono pt-1">Retorno: 10 vasilhames vazios confirmados</div>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/70 text-xs space-y-1">
                        <div className="flex justify-between font-medium text-white">
                          <span>Restaurante Sabor & Arte</span>
                          <span className="text-cyan-400">R$ 225,00</span>
                        </div>
                        <div className="text-[11px] text-slate-400">15 galões 20L • Rota Expressa</div>
                        <div className="text-[11px] text-cyan-300 font-mono pt-1">Pagamento: PIX no ato da entrega</div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'clientes' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                        <span className="font-semibold text-white">Ficha do Cliente & Vasilhames</span>
                        <span className="text-indigo-400 font-mono text-[11px]">Cadastro Ativo</span>
                      </div>
                      <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800/70 text-xs space-y-2">
                        <div className="font-bold text-white text-sm">Escritório Central de Contabilidade</div>
                        <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                          <div className="p-2 rounded bg-slate-800/50">
                            <span className="text-slate-400 block">Garrafões em Posse:</span>
                            <span className="font-bold text-white text-xs">12 unidades</span>
                          </div>
                          <div className="p-2 rounded bg-slate-800/50">
                            <span className="text-slate-400 block">Frequência:</span>
                            <span className="font-bold text-indigo-300 text-xs">Semanal (Toda Terça)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'financeiro' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                        <span className="font-semibold text-white">Fechamento do Caixa Operacional</span>
                        <span className="text-emerald-400 font-mono text-[11px]">100% Conciliado</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-xs">
                        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                          <span className="text-[10px] text-slate-400 block">PIX Instantâneo</span>
                          <span className="font-bold text-emerald-400">R$ 4.280</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                          <span className="text-[10px] text-slate-400 block">Cartão / Débito</span>
                          <span className="font-bold text-cyan-400">R$ 2.940</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                          <span className="text-[10px] text-slate-400 block">Faturado 15d</span>
                          <span className="font-bold text-indigo-400">R$ 7.630</span>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
