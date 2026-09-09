import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, BookOpen, ArrowRight, Heart, Globe, 
  Flame, Award, CheckCircle2 
} from 'lucide-react';
import { MISSION_TEXT } from '../data/booksData';

interface AboutManifestoProps {
  onNavigateToCatalog: () => void;
}

export const AboutManifesto: React.FC<AboutManifestoProps> = ({ onNavigateToCatalog }) => {
  return (
    <section id="missao" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background Decorative Ambient Aura */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-semibold uppercase tracking-wider font-mono-tech mb-4">
            <Globe className="w-3.5 h-3.5 text-blue-700" />
            <span>NOSSA MISSÃO & IDENTIDADE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            A Palavra que <span className="text-blue-700 font-serif-classical italic">Edifica</span> e Transforma Vidas.
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Conheça o propósito, a origem e a essência da Livraria Rito no compartilhamento do Pão do Céu.
          </p>
        </motion.div>

        {/* Featured Mission Manifesto Box */}
        <motion.div 
          className="mt-14 sm:mt-16 max-w-4xl mx-auto rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-2xl border border-slate-800"
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle Glows */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Top Etymology Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <span className="text-xs font-bold font-mono-tech uppercase tracking-widest text-blue-400">
                    ETIMOLOGIA & ORIGEM
                  </span>
                  <p className="text-sm font-semibold text-slate-200">
                    “Rito” = “Palavra” (Origem Changana)
                  </p>
                </div>
              </div>
            </div>

            {/* Verbatim Mission Text Statement */}
            <div className="py-8 space-y-6 text-base sm:text-lg text-slate-200 leading-relaxed font-sans font-normal">
              <p className="border-l-2 border-blue-500 pl-4 sm:pl-6 text-slate-100 font-medium text-lg sm:text-xl">
                {MISSION_TEXT.paragraph1}
              </p>

              <p className="text-slate-300">
                {MISSION_TEXT.paragraph2}
              </p>

              <p className="text-slate-300">
                {MISSION_TEXT.paragraph3}
              </p>
            </div>

            {/* Core Values 3-Grid */}
            <div className="pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
                <div className="w-8 h-8 rounded-lg bg-blue-900/60 text-blue-400 flex items-center justify-center mb-3">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">O Pão do Céu</h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Alimento espiritual sólido através de livros fiéis à Palavra de Deus.
                </p>
              </div>

              <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
                <div className="w-8 h-8 rounded-lg bg-amber-900/60 text-amber-400 flex items-center justify-center mb-3">
                  <Heart className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Livros com Propósito</h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Aproximando leitores de autores dedicados à edificação de outras pessoas.
                </p>
              </div>

              <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
                <div className="w-8 h-8 rounded-lg bg-emerald-900/60 text-emerald-400 flex items-center justify-center mb-3">
                  <Flame className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Transformação Real</h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Palavras que ensinam, inspiram e despertam a fé para uma vida renovada.
                </p>
              </div>
            </div>

            {/* Call To Action */}
            <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400 font-mono-tech">
                <span>SOLI DEO GLORIA</span> • <span>MOÇAMBIQUE</span>
              </div>

              <button
                onClick={onNavigateToCatalog}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all shadow-md hover:shadow-blue-600/30"
              >
                <span>Explorar Catálogo de Obras</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};


