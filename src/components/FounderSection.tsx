import React from 'react';
import { motion } from 'motion/react';
import { 
  User, BookOpen, Heart, Sparkles, Award, 
  CheckCircle2, ArrowRight, Quote, Feather 
} from 'lucide-react';
import { FOUNDER_DATA } from '../data/booksData';
import andreRobertoImg from '../assets/images/regenerated_image_1787928848469.png';

export const FounderSection: React.FC = () => {
  return (
    <section id="fundador" className="py-24 sm:py-32 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold font-mono-tech tracking-wider uppercase shadow-xs">
            <Award className="w-3.5 h-3.5 text-blue-400" />
            <span>LIDERANÇA & VISÃO • FUNDADOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif-classical leading-tight">
            Quem Está por Trás da <span className="text-blue-400 italic text-[47px]">Livraria Rito</span>
          </h2>

          <p className="text-[16px] text-slate-300 font-sans leading-relaxed">
            Uma iniciativa nascida com o propósito sagrado de semear a Palavra e edificar o povo de Moçambique.
          </p>
        </div>

        {/* Main Founder Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-slate-800/70 border border-slate-700/80 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Circular Photo Frame Area */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative group">
                {/* Outer Ring Glow */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-amber-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500" />
                
                {/* Circular Photo Container */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-slate-900 bg-slate-800 shadow-2xl flex items-center justify-center">
                  <img
                    src={andreRobertoImg}
                    alt={FOUNDER_DATA.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Inner Subtle Ring */}
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20 pointer-events-none" />
                </div>
              </div>

              {/* Founder Name & Subtitle */}
              <div className="mt-7 space-y-1">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif-classical">
                  {FOUNDER_DATA.name}
                </h3>
                <p className="text-[13px] font-medium text-blue-400 font-mono-tech uppercase tracking-wider">
                  {FOUNDER_DATA.role}
                </p>
                <div className="pt-2 flex items-center justify-center gap-2">
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-700 text-slate-300 font-mono-tech">
                    Autor de Obras Cristãs
                  </span>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-700 text-slate-300 font-mono-tech">
                    Líder Editorial
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Founder Quote & Vision Description */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Highlight Quote Box with the Exact Required User Prompt Text */}
              <div className="relative p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-blue-500/30 shadow-inner">
                <Quote className="w-8 h-8 text-blue-500/40 absolute top-4 right-4 pointer-events-none" />
                
                <span className="text-[10px] font-mono-tech font-bold uppercase tracking-widest text-blue-400 block mb-2">
                  PROPÓSITO & DECLARAÇÃO DO FUNDADOR
                </span>

                <blockquote className="text-base sm:text-lg font-medium text-slate-100 font-serif-classical leading-relaxed italic">
                  “{FOUNDER_DATA.quote}”
                </blockquote>
              </div>

              {/* Extended Context and Impact */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {FOUNDER_DATA.bioExtended}
              </p>

              {/* Vision Pillars List */}
              <div className="space-y-3 pt-2">
                {FOUNDER_DATA.pillars.map((pillar, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white font-sans">
                        {pillar.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-normal">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons: Explore his books */}
              <div className="pt-4 border-t border-slate-700/70 flex flex-wrap items-center gap-3">
                <a
                  href="#catalogo"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors shadow-sm"
                >
                  <BookOpen className="w-3.5 h-3.5 text-white" />
                  <span>Ver Livros de André Roberto</span>
                </a>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
