import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip Badge */}
      {showTooltip && (
        <div className="relative bg-[#0e1424] border border-emerald-500/40 text-slate-100 text-xs px-3.5 py-2 rounded-xl shadow-2xl backdrop-blur-md flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
          <span className="font-medium text-slate-200">Podemos ajudar com seu projeto agora?</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white ml-1 p-0.5"
            aria-label="Fechar mensagem"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href="https://wa.me/5583996448504?text=Ol%C3%A1%20Eliora%20Software%2C%20estou%20no%20site%20eliorasoft.com.br%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20desenvolvimento."
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-2xl shadow-emerald-500/40 transition-all hover:scale-110 active:scale-95 flex items-center justify-center"
        aria-label="Falar conosco no WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
        </span>
        <MessageCircle className="w-6 h-6 text-slate-950 fill-current" />
      </a>
    </div>
  );
};
