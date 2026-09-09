import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Eye, BookOpen, Headphones, 
  ShieldCheck, Share2, Sparkles, CheckCircle2, ArrowRight, ExternalLink 
} from 'lucide-react';
import { Book } from '../types';
import { BookCoverDisplay } from './BookCoverDisplay';

interface BookDetailModalProps {
  book: Book | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenPreview: (book: Book) => void;
}

export const BookDetailModal: React.FC<BookDetailModalProps> = ({
  book,
  isOpen,
  onClose,
  onOpenPreview
}) => {
  if (!isOpen || !book) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold font-mono-tech uppercase text-blue-700">
                DETALHES DA OBRA • LIVRARIA RITO
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              
              {/* Cover */}
              <div className="md:col-span-5 flex justify-center">
                <BookCoverDisplay book={book} size="lg" />
              </div>

              {/* Information */}
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-800 border border-blue-200 font-mono-tech">
                    {book.categoryName}
                  </span>
                </div>

                <h2 className="text-2xl font-extrabold text-slate-900 leading-tight font-serif-classical">
                  {book.title}
                </h2>
                <p className="text-sm text-slate-500 font-medium">
                  {book.subtitle}
                </p>
                <p className="text-xs text-blue-700 font-semibold">
                  Autoria: {book.author}
                </p>

                <div className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100 whitespace-pre-line">
                  {book.longDescription}
                </div>

                {/* Author Bio Box */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600">
                  <span className="font-semibold text-slate-900 block mb-1">Sobre os Autores:</span>
                  {book.authorBio}
                </div>

                {/* Topics Tag Cloud */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {book.topics.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-800 text-xs font-medium border border-blue-100">
                      #{t}
                    </span>
                  ))}
                </div>

              </div>

            </div>

            {/* Technical Metadata Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono-tech">
              <div>
                <span className="text-slate-400 block text-[10px]">FORMATO</span>
                <span className="font-bold text-blue-700">E-book (PDF)</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">TAMANHO</span>
                <span className="font-bold text-slate-800">{book.dimensions || 'A5'}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">N° DE PÁGINAS</span>
                <span className="font-bold text-slate-800">{book.pages} págs.</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">ANO DE LANÇAMENTO</span>
                <span className="font-bold text-slate-800">{book.releaseDate}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">EDITORA</span>
                <span className="font-bold text-slate-800">{book.publisher || 'Livraria Rito'}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">ACESSO</span>
                <span className="font-bold text-emerald-700">Download Imediato</span>
              </div>
            </div>

          </div>

          {/* Modal Footer Actions */}
          <div className="p-5 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-slate-900">
                  {book.price.toFixed(2).replace('.', ',')} MT
                </span>
                {book.originalPrice && (
                  <span className="text-xs text-slate-400 line-through">
                    {book.originalPrice.toFixed(2).replace('.', ',')} MT
                  </span>
                )}
              </div>
              <span className="text-[11px] text-emerald-600 font-medium">Download Imediato em Formato PDF</span>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onOpenPreview(book);
                }}
                className="flex-1 sm:flex-none px-4 py-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5"
              >
                <Eye className="w-4 h-4 text-blue-700" />
                <span>Degustar Trecho</span>
              </button>

              <a
                href={book.checkoutUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Adquirir Agora</span>
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

