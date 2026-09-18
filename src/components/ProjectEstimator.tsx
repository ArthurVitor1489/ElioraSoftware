import React, { useState } from 'react';
import { Calculator, Check, MessageSquare, Clock, ShieldCheck, Sparkles, Layers } from 'lucide-react';

interface ProjectTypeOption {
  id: string;
  name: string;
  baseWeeks: number;
  description: string;
  icon: string;
}

const projectTypes: ProjectTypeOption[] = [
  {
    id: 'saas',
    name: 'Plataforma Web / SaaS',
    baseWeeks: 5,
    description: 'Sistema web multi-tenant, portal corporativo ou aplicação de gestão.',
    icon: '🌐'
  },
  {
    id: 'mobile',
    name: 'Aplicativo Mobile (iOS & Android)',
    baseWeeks: 6,
    description: 'App nativo com React Native, offline-first e publicação nas lojas.',
    icon: '📱'
  },
  {
    id: 'ai-agent',
    name: 'Agente de IA & Automação',
    baseWeeks: 3,
    description: 'Assistente inteligente, automação WhatsApp e integração com LLMs.',
    icon: '⚡'
  },
  {
    id: 'mvp',
    name: 'MVP Rápido para Validação',
    baseWeeks: 3,
    description: 'Versão enxuta e funcional para validação comercial urgente.',
    icon: '🚀'
  }
];

interface FeatureOption {
  id: string;
  label: string;
  weeks: number;
}

const optionalFeatures: FeatureOption[] = [
  { id: 'auth-rbac', label: 'Autenticação Segura & Permissões (RBAC / 2FA)', weeks: 1 },
  { id: 'payments', label: 'Gateway de Pagamento (PIX, Cartão, Assinaturas)', weeks: 1 },
  { id: 'ai-integration', label: 'Integração com IA Generativa (OpenAI/Gemini)', weeks: 1 },
  { id: 'admin-dashboard', label: 'Dashboard Analítico Executivo com Gráficos', weeks: 1 },
  { id: 'whatsapp-bot', label: 'Integração Direta com WhatsApp Business API', weeks: 1 },
  { id: 'offline-sync', label: 'Sincronização Offline-First no dispositivo', weeks: 1 }
];

export const ProjectEstimator: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('saas');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['auth-rbac', 'admin-dashboard']);
  const [urgency, setUrgency] = useState<'normal' | 'express'>('normal');

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Calculations
  const currentType = projectTypes.find(t => t.id === selectedType) || projectTypes[0];
  const featuresWeeks = selectedFeatures.reduce((acc, featId) => {
    const feat = optionalFeatures.find(f => f.id === featId);
    return acc + (feat ? feat.weeks : 0);
  }, 0);

  const totalEstimatedWeeks = currentType.baseWeeks + featuresWeeks;
  const deliveryTimeframe = urgency === 'express' 
    ? `${Math.max(2, Math.round(totalEstimatedWeeks * 0.75))} a ${Math.round(totalEstimatedWeeks * 0.85)} semanas (Modo Turbo / Squad Dedicado)`
    : `${totalEstimatedWeeks} a ${totalEstimatedWeeks + 2} semanas (Sprints Ágeis Semanais)`;

  // Generate WhatsApp text
  const formatWhatsAppMessage = () => {
    const featureLabels = selectedFeatures
      .map(fid => optionalFeatures.find(f => f.id === fid)?.label)
      .filter(Boolean)
      .join(', ');

    const text = `Olá Eliora Software! Fiz uma simulação de projeto no site oficial eliorasoft.com.br:%0A%0A` +
      `📌 *Tipo de Projeto:* ${currentType.name}%0A` +
      `⚙️ *Módulos Selecionados:* ${featureLabels || 'Nenhum adicional'}%0A` +
      `⏱️ *Prazo Estimado:* ${deliveryTimeframe}%0A` +
      `⚡ *Ritmo:* ${urgency === 'express' ? 'Prioridade Expressa' : 'Cronograma Padrão'}%0A%0A` +
      `Gostaria de agendar uma conversa para detalhar o escopo e fechar a proposta comercial!`;

    return `https://wa.me/5583996448504?text=${text}`;
  };

  return (
    <section id="simulador" className="py-24 relative overflow-hidden bg-[#0a0f1e]">
      {/* Glow background */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[300px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Simulador de Escopo Online
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Estime o tempo e os módulos do seu projeto
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Personalize as necessidades técnicas da sua empresa e receba uma estimativa transparente de cronograma e planejamento de sprints.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Configuration Panel (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. Escolha do tipo */}
            <div className="rounded-2xl glass-card p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-mono flex items-center justify-center font-bold">1</span>
                <h3 className="text-lg font-bold text-white">Qual é o objetivo principal da sua solução?</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type.id)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedType === type.id
                        ? 'bg-indigo-600/20 border-indigo-500 shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-500'
                        : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{type.icon}</span>
                      <span className="font-semibold text-sm text-white">{type.name}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{type.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Escolha dos módulos adicionais */}
            <div className="rounded-2xl glass-card p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-mono flex items-center justify-center font-bold">2</span>
                <h3 className="text-lg font-bold text-white">Selecione os módulos e capacidades necessárias:</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {optionalFeatures.map((feature) => {
                  const isChecked = selectedFeatures.includes(feature.id);
                  return (
                    <button
                      key={feature.id}
                      type="button"
                      onClick={() => toggleFeature(feature.id)}
                      className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all ${
                        isChecked
                          ? 'bg-cyan-500/15 border-cyan-500/50 text-white'
                          : 'bg-white/[0.02] border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded flex items-center justify-center mt-0.5 shrink-0 transition-colors ${
                        isChecked ? 'bg-cyan-500 text-slate-900 font-bold' : 'border border-white/20'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <span className="text-xs font-medium leading-relaxed">{feature.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Ritmo de entrega */}
            <div className="rounded-2xl glass-card p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-mono flex items-center justify-center font-bold">3</span>
                <h3 className="text-lg font-bold text-white">Ritmo e urgência do lançamento:</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setUrgency('normal')}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    urgency === 'normal'
                      ? 'bg-indigo-600/20 border-indigo-500 ring-1 ring-indigo-500'
                      : 'bg-white/[0.02] border-white/10'
                  }`}
                >
                  <div className="font-semibold text-sm text-white mb-1">Ritmo Padrão (Sprints Semanais)</div>
                  <p className="text-xs text-slate-400">Fluxo cadenciado com reuniões semanais de validação e entrega gradual.</p>
                </button>

                <button
                  type="button"
                  onClick={() => setUrgency('express')}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    urgency === 'express'
                      ? 'bg-cyan-600/20 border-cyan-500 ring-1 ring-cyan-500'
                      : 'bg-white/[0.02] border-white/10'
                  }`}
                >
                  <div className="font-semibold text-sm text-white mb-1 flex items-center gap-1.5">
                    <span>Prioridade Turbo (Squad Dedicado)</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-400/20 text-cyan-300 font-mono">Mais Rápido</span>
                  </div>
                  <p className="text-xs text-slate-400">Dedicação intensiva para atender prazos agressivos de mercado ou investidores.</p>
                </button>
              </div>
            </div>

          </div>

          {/* Right Summary Card (4 cols) */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="rounded-2xl bg-gradient-to-b from-[#11182c] to-[#0d1322] border border-indigo-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-2xl rounded-full pointer-events-none" />

              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Resumo Estimado</span>
                  <h4 className="text-lg font-bold text-white font-heading">{currentType.name}</h4>
                </div>
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-xl">
                  {currentType.icon}
                </div>
              </div>

              {/* Timeframe display */}
              <div className="py-6 border-b border-white/10">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>CRONOGRAMA ESTIMADO</span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  {deliveryTimeframe}
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Primeiras entregas funcionais visíveis a partir da 1ª semana de sprint.
                </p>
              </div>

              {/* Inclusions summary */}
              <div className="py-6 space-y-3 text-xs text-slate-300 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Código 100% de sua propriedade com NDA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>{selectedFeatures.length} módulos adicionais configurados</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Garantia de homologação e suporte pós-deploy</span>
                </div>
              </div>

              {/* Send CTA */}
              <div className="pt-6">
                <a
                  href={formatWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar Estimativa no WhatsApp</span>
                </a>
                <p className="text-[11px] text-center text-slate-400 mt-3">
                  Atendimento direto com o time de engenharia da Eliora Software.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
