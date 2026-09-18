import React from 'react';
import { ArrowUp, Github, Linkedin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070a12] border-t border-slate-800 text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-heading font-bold text-white text-base">
                E
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-heading">
                Eliora <span className="text-indigo-400">Software</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Software sob medida para empresas que querem evoluir com tecnologia.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://linkedin.com/in/arthur-vitor-126107412"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/ArthurVitor1489"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 1: Empresa */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-heading">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#projetos" className="hover:text-white transition-colors">Projetos</a></li>
              <li><a href="#processo" className="hover:text-white transition-colors">Como trabalhamos</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Col 2: Soluções */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-heading">Soluções</h4>
            <ul className="space-y-2">
              <li><a href="#solucoes" className="hover:text-white transition-colors">Sistemas personalizados</a></li>
              <li><a href="#solucoes" className="hover:text-white transition-colors">Aplicativos</a></li>
              <li><a href="#solucoes" className="hover:text-white transition-colors">Automação & IA</a></li>
              <li><a href="#solucoes" className="hover:text-white transition-colors">SaaS & Produtos digitais</a></li>
            </ul>
          </div>

          {/* Col 3: Contato */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-heading">Contato</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://wa.me/5583996448504"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp: (83) 99644-8504</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@eliorasoft.com.br"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  <span>contato@eliorasoft.com.br</span>
                </a>
              </li>
              <li className="text-slate-500 pt-1">
                Atendimento remoto em todo o Brasil
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            &copy; 2026 Eliora Software. Todos os direitos reservados.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
