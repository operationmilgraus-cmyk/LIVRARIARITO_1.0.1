import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, ArrowRight, ShieldCheck, Zap, Headphones, 
  BookOpen, CheckCircle2, ChevronRight, Eye, Volume2, Truck, Heart, ExternalLink
} from 'lucide-react';
import { Book } from '../types';
import { BookCoverDisplay } from './BookCoverDisplay';

interface HeroSectionProps {
  flagshipBook: Book;
  onOpenPreview: (book: Book) => void;
  onExploreCatalog: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  flagshipBook,
  onOpenPreview,
  onExploreCatalog
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'excerpt' | 'tech'>('overview');

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-slate-50/60">
      {/* Background Decorative Lighting & Ambient Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-blue-600/10 via-amber-400/10 to-sky-300/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting & High Impact CTAs */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start text-left"
            initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Christian Bookstore Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs font-bold text-slate-800 tracking-tight font-mono-tech uppercase">
                LIVRARIA MOÇAMBICANA
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-xs font-semibold text-slate-700">
                O Pão do Céu Através dos Livros
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[58px] font-extrabold tracking-tight text-slate-900 leading-[1.14]">
              Palavras que <span className="text-[48px] text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-800">edificam, ensinam e transformam</span> vidas.
            </h1>

            {/* Sub-headline */}
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              A Livraria Rito partilha experiências, conhecimento e fé através de livros com propósito, com especial atenção à literatura cristã.
            </p>

            {/* Conversion CTA Group */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                id="hero-buy-now-btn"
                onClick={onExploreCatalog}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 shadow-md hover:shadow-lg hover:shadow-blue-700/30 transition-all hover:scale-[1.01] active:scale-[0.99] group"
              >
                <span>Explorar o Catálogo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-preview-btn"
                onClick={() => onOpenPreview(flagshipBook)}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs hover:border-slate-300 transition-all"
              >
                <Eye className="w-4 h-4 text-blue-700" />
                <span>Ler Trecho em Destaque</span>
              </button>
            </div>

            {/* Quick Guarantees & Features */}
            <div className="mt-10 pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <Truck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-900 leading-none">Envio & Entrega</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Seguro e ágil</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-900 leading-none">Propósito & Fé</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Conteúdo que edifica</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-900 leading-none">E-book em PDF</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Download imediato</p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Book Showcase Card */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.94, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xl shadow-slate-200/50">
              
              {/* Top Card Badge / Meta */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-700" />
                  <span className="text-xs font-bold text-slate-800 font-mono-tech tracking-wider uppercase">
                    E-book em Destaque (PDF)
                  </span>
                </div>

                <div className="flex items-center gap-1.5 bg-blue-50 text-blue-800 px-2.5 py-0.5 rounded-full border border-blue-200 text-xs font-semibold">
                  <span>{flagshipBook.badge}</span>
                </div>
              </div>

              {/* Central Book Showcase & Tabs */}
              <div className="my-6 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                {/* Book 3D Cover */}
                <div className="sm:col-span-5 flex justify-center">
                  <div className="cursor-pointer transform hover:-translate-y-1 transition-all" onClick={() => onOpenPreview(flagshipBook)}>
                    <BookCoverDisplay book={flagshipBook} size="md" />
                  </div>
                </div>

                {/* Book Details & Interactive Preview Box */}
                <div className="sm:col-span-7 flex flex-col">
                  <h2 className="text-lg font-bold text-slate-900 leading-snug font-serif-classical">
                    {flagshipBook.title}
                  </h2>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Por {flagshipBook.author}
                  </p>

                  {/* Interactive Switcher Tabs */}
                  <div className="flex items-center gap-1 mt-4 p-1 bg-slate-100 rounded-lg text-xs font-medium">
                    <button
                      onClick={() => setActiveTab('overview')}
                      className={`flex-1 py-1 px-2 rounded-md transition-all ${
                        activeTab === 'overview'
                          ? 'bg-white text-blue-700 shadow-2xs font-semibold'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Sinopse
                    </button>
                    <button
                      onClick={() => setActiveTab('excerpt')}
                      className={`flex-1 py-1 px-2 rounded-md transition-all ${
                        activeTab === 'excerpt'
                          ? 'bg-white text-blue-700 shadow-2xs font-semibold'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Trecho
                    </button>
                    <button
                      onClick={() => setActiveTab('tech')}
                      className={`flex-1 py-1 px-2 rounded-md transition-all ${
                        activeTab === 'tech'
                          ? 'bg-white text-blue-700 shadow-2xs font-semibold'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Formato
                    </button>
                  </div>

                  {/* Tab Contents */}
                  <div className="mt-3 min-h-[90px] text-xs text-slate-600 leading-relaxed">
                    {activeTab === 'overview' && (
                      <p className="line-clamp-4">
                        {flagshipBook.synopsis}
                      </p>
                    )}
                    {activeTab === 'excerpt' && (
                      <div className="bg-amber-50/60 p-2.5 rounded-lg border border-amber-200/70 italic text-[11px] text-slate-800">
                        <p className="line-clamp-3">
                          "{flagshipBook.sampleExcerpt.content[0]}"
                        </p>
                        <span className="text-[10px] text-blue-700 font-semibold block mt-1 not-italic font-mono-tech">
                          — {flagshipBook.sampleExcerpt.chapterTitle}
                        </span>
                      </div>
                    )}
                    {activeTab === 'tech' && (
                      <div className="space-y-1 text-[11px]">
                        <div className="flex items-center justify-between text-slate-700">
                          <span>• Formato / Tamanho:</span>
                          <span className="font-semibold text-blue-700">PDF ({flagshipBook.dimensions || 'A5'})</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-700">
                          <span>• N° de Páginas:</span>
                          <span className="font-semibold text-slate-800">{flagshipBook.pages} páginas</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-700">
                          <span>• Editora / Ano:</span>
                          <span className="font-semibold text-slate-800">{flagshipBook.publisher || 'Editora Presença'} ({flagshipBook.releaseDate})</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-700">
                          <span>• Entrega:</span>
                          <span className="font-semibold text-emerald-700">Download Imediato</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Price & Action Row */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xl font-bold text-slate-900">
                          {flagshipBook.price.toFixed(2).replace('.', ',')} MT
                        </span>
                        {flagshipBook.originalPrice && (
                          <span className="text-xs text-slate-400 line-through">
                            {flagshipBook.originalPrice.toFixed(2).replace('.', ',')} MT
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-emerald-700 font-semibold">Acesso Imediato em PDF</span>
                    </div>

                    <a
                      href={flagshipBook.checkoutUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="hero-buy-flagship-btn"
                      className="px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white text-xs font-semibold shadow-sm transition-all flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Adquirir Agora</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

