import React, { useState } from 'react';
import { ArrowRight, MessageSquare, Phone, Mail, CheckCircle2 } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    contato: '',
    mensagem: ''
  });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);

    const text = `*Contato via eliorasoft.com.br:*%0A%0A` +
      `👤 *Nome:* ${formData.nome}%0A` +
      `🏢 *Empresa:* ${formData.empresa || 'Não informada'}%0A` +
      `📱 *Contato:* ${formData.contato}%0A` +
      `📝 *Desafio/Processo:* ${formData.mensagem}`;

    window.open(`https://wa.me/5583996448504?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden bg-[#0a0e1a] border-t border-slate-800">
      {/* Subtle Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-6">
            Inicie uma Conversa
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight mb-6 leading-tight">
            Tem um problema que poderia ser resolvido com software?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Conte-nos sobre sua empresa, sua ideia ou o processo que você gostaria de melhorar. Vamos entender o problema e encontrar uma solução.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5583996448504?text=Ol%C3%A1%20Eliora%20Software!%20Gostaria%20de%20conversar%20sobre%20um%20projeto%20para%20minha%20empresa."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Falar com a Eliora</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs text-slate-400 mt-4">
            Sem compromisso. Vamos começar entendendo o seu problema.
          </p>
        </div>

        {/* Contact Form Container */}
        <div className="max-w-2xl mx-auto rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <h3 className="text-lg font-bold text-white font-heading mb-2">
            Ou envie uma mensagem direta
          </h3>
          <p className="text-xs text-slate-400 mb-6">
            Retornamos com uma primeira avaliação da sua necessidade.
          </p>

          {enviado ? (
            <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <h4 className="text-base font-bold text-white">Mensagem preparada!</h4>
              <p className="text-xs text-slate-300">
                A conversa foi aberta no WhatsApp oficial da Eliora Software para darmos continuidade ao atendimento.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Arthur Silva"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Empresa / Segmento
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Distribuidora, Varejo..."
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  WhatsApp ou E-mail para contato *
                </label>
                <input
                  type="text"
                  required
                  placeholder="(83) 99999-9999 ou seu@email.com"
                  value={formData.contato}
                  onChange={(e) => setFormData({ ...formData, contato: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Qual processo ou desafio gostaria de resolver? *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Conte brevemente sobre o problema operacional ou a ideia do sistema..."
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>Enviar pelo WhatsApp Oficial</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-indigo-400" />
              (83) 99644-8504
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              contato@eliorasoft.com.br
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
