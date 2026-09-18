import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Plataforma Web / SaaS Corporativo',
    budgetRange: 'R$ 10k a R$ 30k',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const text = `*Nova Solicitação de Projeto via eliorasoft.com.br:*%0A%0A` +
      `👤 *Nome:* ${formData.name}%0A` +
      `📧 *E-mail:* ${formData.email}%0A` +
      `📱 *Telefone/WhatsApp:* ${formData.phone}%0A` +
      `🏢 *Empresa:* ${formData.company || 'Não informada'}%0A` +
      `🎯 *Tipo de Projeto:* ${formData.projectType}%0A` +
      `💰 *Faixa de Investimento:* ${formData.budgetRange}%0A` +
      `📝 *Detalhes:* ${formData.message || 'Sem mensagem adicional'}`;

    window.open(`https://wa.me/5583996448504?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden bg-[#090d16]">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Inicie Seu Projeto
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Vamos construir o futuro da sua empresa juntos?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Preencha os dados abaixo ou fale diretamente pelos nossos canais oficiais para agendar um diagnóstico técnico sem compromisso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Panel (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl glass-card p-8 border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white font-heading">
                Canais Diretos de Atendimento
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Respondemos rapidamente em menos de 2 horas úteis com uma primeira análise de viabilidade técnica da sua demanda.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href="https://wa.me/5583996448504"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">WhatsApp Oficial</span>
                    <span className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      +55 (83) 99644-8504
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:contato@eliorasoft.com.br"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">E-mail Corporativo</span>
                    <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      contato@eliorasoft.com.br
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Localização</span>
                    <span className="text-sm font-semibold text-white">
                      Paraíba, Brasil (Atuação Nacional & Global)
                    </span>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/20 space-y-2">
                <div className="flex items-center gap-2 text-indigo-300 text-xs font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Compromisso Eliora Software</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Não enviamos spam. Suas informações e ideia são tratadas sob estrito sigilo com suporte a Acordo de Não Divulgação (NDA).
                </p>
              </div>

            </div>
          </div>

          {/* Right Form Panel (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl glass-card p-8 sm:p-10 border border-white/10 shadow-2xl">
              <h3 className="text-xl font-bold text-white font-heading mb-6">
                Formulário de Solicitação de Proposta
              </h3>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Solicitação Encaminhada!</h4>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Abrimos a conversa no WhatsApp para que você possa falar diretamente com nossa equipe. Caso prefira e-mail, responderemos em breve em <strong>{formData.email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Carlos Silva"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        E-mail Corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="carlos@suaempresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        WhatsApp / Celular com DDD *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(11) 98765-4321"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Nome da Empresa
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Tech Solutions Ltda"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Tipo de Projeto
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0e1424] border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      >
                        <option value="Plataforma Web / SaaS Corporativo">Plataforma Web / SaaS Corporativo</option>
                        <option value="Aplicativo Mobile (iOS & Android)">Aplicativo Mobile (iOS & Android)</option>
                        <option value="Agente de Inteligência Artificial / LLM">Agente de IA / LLM</option>
                        <option value="Modernização de Sistema Legado">Modernização de Sistema Legado</option>
                        <option value="MVP Ágil para Startup">MVP Ágil para Startup</option>
                        <option value="Outro / Consultoria Sob Demanda">Outro / Consultoria Sob Demanda</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Previsão de Investimento
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0e1424] border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      >
                        <option value="Até R$ 10k">Até R$ 10.000</option>
                        <option value="R$ 10k a R$ 25k">R$ 10.000 a R$ 25.000</option>
                        <option value="R$ 25k a R$ 50k">R$ 25.000 a R$ 50.000</option>
                        <option value="Acima de R$ 50k">Acima de R$ 50.000</option>
                        <option value="Ainda definindo">Ainda definindo escopo</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Conte um pouco sobre o seu projeto e objetivo
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Descreva brevemente o que sua empresa precisa, principais funcionalidades e prazos desejados..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Solicitação e Abrir no WhatsApp</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    🔒 Seus dados estão seguros e protegidos em conformidade com a LGPD.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
