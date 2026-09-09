import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Volume2, VolumeX, Type, Sun, Moon, Sparkles, 
  Bookmark, Share2, Check, ArrowLeft, ArrowRight, BookOpen, Info, ExternalLink 
} from 'lucide-react';
import { Book, ReaderTheme } from '../types';
import { ambientSound } from '../utils/soundSynthesizer';

interface InteractiveReaderModalProps {
  book: Book | null;
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveReaderModal: React.FC<InteractiveReaderModalProps> = ({
  book,
  isOpen,
  onClose
}) => {
  const [theme, setTheme] = useState<ReaderTheme>('luz-cristalina');
  const [fontSize, setFontSize] = useState<number>(18);
  const [isAudioActive, setIsAudioActive] = useState<boolean>(false);
  const [activeNote, setActiveNote] = useState<string | null>(null);
  const [devotionalInsightOpen, setDevotionalInsightOpen] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      if (ambientSound.getStatus()) {
        ambientSound.stop();
      }
    };
  }, []);

  if (!isOpen || !book) return null;

  const toggleSound = () => {
    const status = ambientSound.toggle();
    setIsAudioActive(status);
  };

  const handleCopyShare = () => {
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const getThemeClasses = () => {
    switch (theme) {
      case 'pergaminho-classico':
        return {
          wrapper: 'bg-[#FDF9F0] text-[#2D251A]',
          card: 'bg-[#FAF4E6] border-[#E8DFC9]',
          meta: 'text-[#857356]',
          highlight: 'bg-[#EBDDB7] text-[#1E170C]',
          noteBox: 'bg-[#F2E8D3] border-[#E0D2B8] text-[#3D3220]'
        };
      case 'noturno-devocional':
        return {
          wrapper: 'bg-[#0B1120] text-[#E2E8F0]',
          card: 'bg-[#0F172A] border-[#1E293B]',
          meta: 'text-[#64748B]',
          highlight: 'bg-[#1E3A8A] text-[#93C5FD]',
          noteBox: 'bg-[#1E293B] border-[#334155] text-[#CBD5E1]'
        };
      case 'azul-sereno':
        return {
          wrapper: 'bg-[#F0F7FF] text-[#0F3664]',
          card: 'bg-white/95 border-[#BAE6FD]',
          meta: 'text-[#0369A1]',
          highlight: 'bg-[#DBEAFE] text-[#1E40AF]',
          noteBox: 'bg-[#E0F2FE] border-[#BAE6FD] text-[#075985]'
        };
      default: // luz-cristalina
        return {
          wrapper: 'bg-white text-slate-900',
          card: 'bg-white border-slate-200/90',
          meta: 'text-slate-500',
          highlight: 'bg-blue-50 text-blue-900 border-b-2 border-blue-400 font-semibold',
          noteBox: 'bg-blue-50/80 border-blue-200 text-slate-800'
        };
    }
  };

  const t = getThemeClasses();

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-2 sm:p-4 bg-slate-900/60 backdrop-blur-md">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full max-w-4xl max-h-[92vh] rounded-3xl shadow-2xl border flex flex-col overflow-hidden transition-colors duration-300 ${t.wrapper} ${t.card}`}
        >
          
          {/* Reader Top Control Toolbar */}
          <div className="px-5 py-4 border-b flex items-center justify-between gap-4 border-inherit">
            
            {/* Book Title & Chapter Info */}
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="truncate">
                <h4 className="text-sm font-bold truncate leading-tight font-serif-classical">{book.title}</h4>
                <p className={`text-xs truncate ${t.meta}`}>
                  {book.sampleExcerpt.chapterNumber}: {book.sampleExcerpt.chapterTitle} • Por {book.author}
                </p>
              </div>
            </div>

            {/* Reading Controls Toolbar */}
            <div className="flex items-center gap-2 shrink-0">
              
              {/* Contemplative Sound Toggle */}
              <button
                onClick={toggleSound}
                className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  isAudioActive 
                    ? 'bg-blue-700 text-white shadow-sm' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
                title="Ativar áudio suave de meditação e oração"
              >
                {isAudioActive ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
                <span className="hidden md:inline">{isAudioActive ? 'Áudio Contemplativo Ativo' : 'Áudio de Oração'}</span>
              </button>

              {/* Font Size Adjusters */}
              <div className="hidden sm:flex items-center bg-slate-100 rounded-xl p-1 gap-1">
                <button
                  onClick={() => setFontSize(Math.max(14, fontSize - 2))}
                  className="px-2 py-1 text-xs font-bold hover:bg-white rounded-lg text-slate-700 transition-colors"
                  title="Diminuir fonte"
                >
                  A-
                </button>
                <span className="text-[11px] font-mono-tech px-1 text-slate-600 font-semibold">{fontSize}px</span>
                <button
                  onClick={() => setFontSize(Math.min(26, fontSize + 2))}
                  className="px-2 py-1 text-xs font-bold hover:bg-white rounded-lg text-slate-700 transition-colors"
                  title="Aumentar fonte"
                >
                  A+
                </button>
              </div>

              {/* Theme Selectors */}
              <div className="flex items-center bg-slate-100 rounded-xl p-1 gap-1">
                <button
                  onClick={() => setTheme('luz-cristalina')}
                  className={`w-6 h-6 rounded-lg bg-white border transition-all ${theme === 'luz-cristalina' ? 'border-blue-700 ring-2 ring-blue-500/20' : 'border-slate-300'}`}
                  title="Luz Cristalina"
                />
                <button
                  onClick={() => setTheme('pergaminho-classico')}
                  className={`w-6 h-6 rounded-lg bg-[#FDF9F0] border transition-all ${theme === 'pergaminho-classico' ? 'border-amber-800 ring-2 ring-amber-600/20' : 'border-slate-300'}`}
                  title="Pergaminho Clássico"
                />
                <button
                  onClick={() => setTheme('azul-sereno')}
                  className={`w-6 h-6 rounded-lg bg-[#DBEAFE] border transition-all ${theme === 'azul-sereno' ? 'border-blue-700 ring-2 ring-blue-500/20' : 'border-slate-300'}`}
                  title="Azul Sereno"
                />
                <button
                  onClick={() => setTheme('noturno-devocional')}
                  className={`w-6 h-6 rounded-lg bg-[#0F172A] border transition-all ${theme === 'noturno-devocional' ? 'border-blue-400 ring-2 ring-blue-400/20' : 'border-slate-700'}`}
                  title="Noturno Devocional"
                />
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-xl hover:bg-slate-200/70 text-slate-500 hover:text-slate-800 transition-colors"
                aria-label="Fechar leitor"
              >
                <X className="w-5 h-5" />
              </button>

            </div>
          </div>

          {/* Reader Body Content Scrollable Area */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 lg:p-14">
            
            <div className="max-w-2xl mx-auto">
              
              {/* Chapter Header */}
              <div className="text-center pb-8 mb-8 border-b border-inherit">
                <span className={`text-xs font-mono-tech uppercase tracking-widest font-semibold ${t.meta}`}>
                  {book.sampleExcerpt.chapterNumber} • AMOSTRA EDITORIAL
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 tracking-tight font-serif-classical">
                  {book.sampleExcerpt.chapterTitle}
                </h2>
                
                {book.sampleExcerpt.epigraph && (
                  <p className={`mt-4 italic text-xs sm:text-sm max-w-lg mx-auto leading-relaxed ${t.meta}`}>
                    {book.sampleExcerpt.epigraph}
                  </p>
                )}
              </div>

              {/* Content Paragraphs with Interactive Marginalia Highlights */}
              <div 
                className="space-y-6 leading-relaxed selection:bg-blue-700 selection:text-white"
                style={{ fontSize: `${fontSize}px` }}
              >
                {book.sampleExcerpt.content.map((paragraph, pIdx) => {
                  const matchedNote = book.sampleExcerpt.marginalia.find(m => paragraph.includes(m.highlight));

                  if (matchedNote) {
                    const parts = paragraph.split(matchedNote.highlight);
                    return (
                      <p key={pIdx} className="leading-relaxed">
                        {parts[0]}
                        <span
                          onClick={() => setActiveNote(activeNote === matchedNote.highlight ? null : matchedNote.highlight)}
                          className={`cursor-pointer px-1 py-0.5 rounded transition-all font-medium ${t.highlight} hover:underline`}
                          title="Clique para ler a anotação teológica / devocional"
                        >
                          {matchedNote.highlight}
                          <span className="inline-block ml-1 text-[10px] align-super font-mono-tech text-blue-700 font-bold">
                            [referência]
                          </span>
                        </span>
                        {parts[1]}
                      </p>
                    );
                  }

                  return (
                    <p key={pIdx} className="leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Active Margin Note Display Card */}
              {activeNote && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-8 p-4 rounded-2xl border ${t.noteBox}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold font-mono-tech flex items-center gap-1.5 text-blue-800">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      REFERÊNCIA TEOLÓGICA & BÍBLICA
                    </span>
                    <button
                      onClick={() => setActiveNote(null)}
                      className="text-xs text-slate-500 hover:text-slate-800"
                    >
                      Fechar
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    {book.sampleExcerpt.marginalia.find(m => m.highlight === activeNote)?.note}
                  </p>
                </motion.div>
              )}

              {/* Devotional Insight Expander */}
              <div className="mt-12 pt-6 border-t border-inherit">
                <button
                  onClick={() => setDevotionalInsightOpen(!devotionalInsightOpen)}
                  className="w-full py-3 px-4 rounded-2xl bg-blue-50/80 hover:bg-blue-100/80 border border-blue-200 text-blue-800 text-xs sm:text-sm font-semibold flex items-center justify-between transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-700" />
                    Reflexão Devocional & Aplicação Prática
                  </span>
                  <span className="text-xs font-mono-tech">
                    {devotionalInsightOpen ? 'Recolher [-]' : 'Expandir [+]'}
                  </span>
                </button>

                {devotionalInsightOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-3 p-4 rounded-2xl bg-white border border-blue-100 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2"
                  >
                    <p className="font-semibold text-slate-900">
                      Ponto de Aplicação para Hoje:
                    </p>
                    <p>
                      Reserve alguns minutos após esta leitura para orar sobre as verdades refletidas neste capítulo. A graça divina nos convida a viver com mansidão, esperança e fidelidade no ambiente de trabalho, na família e na comunhão da igreja.
                    </p>
                  </motion.div>
                )}
              </div>

              {/* End of Excerpt Notice & Upsell Box */}
              <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-tr from-blue-800 via-blue-900 to-slate-900 text-white text-center shadow-lg">
                <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-mono-tech uppercase tracking-wider">
                  DEGUSTAÇÃO DA OBRA
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-3 font-serif-classical">
                  Adquira o e-book completo «{book.title}»
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 mt-2 max-w-md mx-auto">
                  Acesse todo o conteúdo em PDF com qualidade de leitura no seu celular, tablet ou computador.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={book.checkoutUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-sm hover:bg-amber-300 shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4 text-slate-950" />
                    <span>Adquirir Agora ({book.price.toFixed(2).replace('.', ',')} MT)</span>
                  </a>

                  <button
                    onClick={handleCopyShare}
                    className="w-full sm:w-auto px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>{copiedLink ? 'Link Copiado!' : 'Compartilhar Obra'}</span>
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Reader Footer Info */}
          <div className="px-6 py-3 border-t flex items-center justify-between text-xs border-inherit bg-slate-50/50">
            <span className={`font-mono-tech text-[11px] ${t.meta}`}>
              PDF {book.dimensions ? `(${book.dimensions})` : ''} • {book.pages} PÁGINAS • {book.publisher || 'LIVRARIA RITO'} ({book.releaseDate})
            </span>
            <a
              href={book.checkoutUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800 font-bold flex items-center gap-1"
            >
              <span>Adquirir Agora</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};

