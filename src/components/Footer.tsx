import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';
import brandLogoImg from '../assets/images/regenerated_image_1788371608058.jpg';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800/80 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-800/80">
          
          {/* Brand & Identity Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center">
              <div className="bg-white p-2.5 rounded-2xl shadow-sm inline-flex items-center justify-center shrink-0 border border-white/20">
                <img
                  src={brandLogoImg}
                  alt="Livraria Rito Logotipo"
                  id="footer-brand-logo-img"
                  className="h-16 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              A Livraria e Editora Rito é uma iniciativa cristã moçambicana criada com o propósito sagrado de partilhar experiências, conhecimento e o Pão do Céu através de livros que edificam e transformam vidas.
            </p>

            {/* Social Icons & Email */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/livrariarito?igsi=MTRpNng0anZ1OTRxYQ=="
                target="_blank"
                rel="noopener noreferrer"
                id="footer-instagram-link"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 hover:bg-pink-950/30 text-slate-400 hover:text-pink-400 flex items-center justify-center transition-all shadow-xs"
                title="Siga-nos no Instagram (@livrariarito)"
                aria-label="Instagram da Livraria Rito"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61584463660711&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-facebook-link"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-blue-950/30 text-slate-400 hover:text-blue-400 flex items-center justify-center transition-all shadow-xs"
                title="Página Oficial no Facebook"
                aria-label="Facebook da Livraria Rito"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href="mailto:livrariarito@gmail.com"
                id="footer-email-link"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 hover:bg-amber-950/30 text-slate-400 hover:text-amber-300 flex items-center justify-center transition-all shadow-xs"
                title="Envie-nos um e-mail (livrariarito@gmail.com)"
                aria-label="E-mail da Livraria Rito"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="#catalogo"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors border border-slate-700/60"
              >
                <span>Explorar E-books</span>
              </a>
            </div>
          </div>

          {/* Categorias */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold font-mono-tech text-slate-200 uppercase tracking-widest mb-4">
              CATEGORIAS
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#catalogo" className="hover:text-red-400 transition-colors">Vida Cristã</a></li>
              <li><a href="#catalogo" className="hover:text-red-400 transition-colors">Corte & Relacionamentos</a></li>
              <li><a href="#catalogo" className="hover:text-red-400 transition-colors">Jejum e Oração</a></li>
              <li><a href="#catalogo" className="hover:text-red-400 transition-colors">Família & Casamento</a></li>
              <li><a href="#catalogo" className="hover:text-red-400 transition-colors">Promessas Bíblicas</a></li>
              <li><a href="#catalogo" className="hover:text-red-400 transition-colors">Crescimento Espiritual</a></li>
            </ul>
          </div>

          {/* Navegação */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold font-mono-tech text-slate-200 uppercase tracking-widest mb-4">
              NAVEGAÇÃO RÁPIDA
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs text-slate-400">
              <a href="#" className="hover:text-red-400 transition-colors">Início</a>
              <a href="#catalogo" className="hover:text-red-400 transition-colors">Catálogo Digital</a>
              <a href="#editora-rito" className="hover:text-red-400 transition-colors">Editora Rito</a>
              <a href="#missao" className="hover:text-red-400 transition-colors">Missão & Visão</a>
              <a href="#fundador" className="hover:text-red-400 transition-colors">Fundador (André Roberto)</a>
              <a href="#faq" className="hover:text-red-400 transition-colors">FAQ</a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono-tech">
          <div>
            © 2026 Livraria e Editora Rito. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <span className="text-red-400 font-bold">“Rito”</span> (Changana) = Palavra
            <span className="text-slate-700">•</span>
            <span>Edificando Vidas através da Palavra</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
