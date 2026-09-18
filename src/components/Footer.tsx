import React from 'react';
import { Terminal, ShieldCheck, Mail, Phone, MapPin, ArrowUp, Github, Linkedin, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] border-t border-white/10 text-slate-400 text-xs relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-[#0b101e] rounded-[10px] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-heading">
                Eliora<span className="text-indigo-400">Soft</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Engenharia de software moderna, arquiteturas cloud-native resilientes e agentes de inteligência artificial sob medida para impulsionar e escalar o seu negócio.
            </p>

            <div className="pt-2 flex items-center gap-3 text-slate-300">
              <a
                href="https://linkedin.com/in/arthur-vitor-126107412"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:text-white hover:border-indigo-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/ArthurVitor1489"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:text-white hover:border-indigo-500 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://eliorasoft.com.br"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:text-white hover:border-cyan-400 transition-colors"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Domínio Registrado: eliorasoft.com.br</span>
            </div>
          </div>

          {/* Col 2: Serviços */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-heading">Serviços</h4>
            <ul className="space-y-2">
              <li><a href="#servicos" className="hover:text-white transition-colors">Plataformas Web & SaaS</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Aplicativos iOS & Android</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Inteligência Artificial & LLMs</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Backend & APIs Escaláveis</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Cloud & Modernização</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">UI / UX Product Design</a></li>
            </ul>
          </div>

          {/* Col 3: Navegação & Soluções */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-heading">Navegação</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#cases" className="hover:text-white transition-colors">Cases de Sucesso</a></li>
              <li><a href="#metodologia" className="hover:text-white transition-colors">Metodologia Ágil</a></li>
              <li><a href="#simulador" className="hover:text-white transition-colors">Simulador de Projeto</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Solicitar Orçamento</a></li>
            </ul>
          </div>

          {/* Col 4: Contato & Atendimento */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-heading">Atendimento</h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <a href="https://wa.me/5583996448504" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  (83) 99644-8504
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="mailto:contato@eliorasoft.com.br" className="hover:text-white transition-colors">
                  contato@eliorasoft.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Paraíba, Brasil • Atendimento Remoto Nacional</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>&copy; 2026 Eliora Software (<strong>eliorasoft.com.br</strong>).</span>
            <span className="hidden sm:inline">•</span>
            <span>Todos os direitos reservados. Código 100% proprietário dos clientes.</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
