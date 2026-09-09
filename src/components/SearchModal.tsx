import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, BookOpen, ArrowRight } from 'lucide-react';
import { Book } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  books: Book[];
  onSelectBook: (book: Book) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  books,
  onSelectBook
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim() === ''
    ? books.slice(0, 4)
    : books.filter(b =>
        b.title.toLowerCase().includes(query.toLowerCase()) ||
        b.author.toLowerCase().includes(query.toLowerCase()) ||
        b.categoryName.toLowerCase().includes(query.toLowerCase()) ||
        b.topics.some(t => t.toLowerCase().includes(query.toLowerCase()))
      );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center p-4 sm:p-6 pt-20 bg-slate-900/50 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        >
          {/* Search Input Bar */}
          <div className="p-4 border-b border-slate-100 flex items-center gap-3">
            <Search className="w-5 h-5 text-blue-700 shrink-0" />
            <input
              type="text"
              autoFocus
              placeholder="Pesquise por títulos, autores (ex: Azemar Freitas, André Roberto)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full text-base font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Suggestions / Results */}
          <div className="p-4 max-h-[60vh] overflow-y-auto space-y-2">
            <div className="text-[11px] font-mono-tech uppercase font-bold text-slate-400 px-3 pb-1">
              {query.trim() === '' ? 'Obras em Destaque' : `Resultados (${results.length})`}
            </div>

            {results.length === 0 ? (
              <div className="py-10 text-center text-xs text-slate-500">
                Nenhum livro encontrado para "{query}". Tente pesquisar por autor (ex: André Roberto, Azemar Freitas, Hélder Chacala, Sídio Jamal) ou tema.
              </div>
            ) : (
              results.map((book) => (
                <div
                  key={book.id}
                  onClick={() => {
                    onSelectBook(book);
                    onClose();
                  }}
                  className="p-3 rounded-2xl hover:bg-blue-50/70 border border-transparent hover:border-blue-100 cursor-pointer flex items-center justify-between gap-4 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    {book.coverImage ? (
                      <div className="w-10 h-14 shrink-0 flex items-center justify-center">
                        <img 
                          src={book.coverImage} 
                          alt={book.title} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-contain filter drop-shadow-sm" 
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-xl bg-blue-100/50 text-blue-700 flex items-center justify-center shrink-0">
                        <BookOpen className="w-5 h-5" />
                      </div>
                    )}
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug font-serif-classical">
                        {book.title}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {book.author} • <span className="text-blue-700 font-mono-tech">{book.categoryName}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs font-bold text-slate-900 font-mono-tech">
                      {book.price.toFixed(2).replace('.', ',')} MT
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-700 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Search Footer */}
          <div className="px-5 py-3 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-400 font-mono-tech">
            <span>[ESC] para fechar</span>
            <span className="text-blue-700 font-medium">Livraria Rito Cristã</span>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

