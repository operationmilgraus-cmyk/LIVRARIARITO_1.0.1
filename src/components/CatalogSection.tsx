import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Filter, Search, Eye, 
  ArrowRight, BookOpen, Layers, Check, FileText, ExternalLink
} from 'lucide-react';
import { Book, CategoryKey, BookFormat } from '../types';
import { CATEGORIES_LIST } from '../data/booksData';
import { BookCoverDisplay } from './BookCoverDisplay';

interface CatalogSectionProps {
  books: Book[];
  onOpenPreview: (book: Book) => void;
  onOpenBookDetail: (book: Book) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  books,
  onOpenPreview,
  onOpenBookDetail
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('todos');
  const [selectedFormat, setSelectedFormat] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'recommended' | 'price-asc' | 'price-desc' | 'title'>('recommended');

  const filteredBooks = useMemo(() => {
    return books
      .filter((book) => {
        const matchesCategory = 
          selectedCategory === 'todos' || 
          book.category === selectedCategory ||
          (book.secondaryCategories && book.secondaryCategories.includes(selectedCategory));
        
        const matchesSearch = 
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.synopsis.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'title') return a.title.localeCompare(b.title);
        return 0; // default order
      });
  }, [books, selectedCategory, searchQuery, sortBy]);

  return (
    <section id="catalogo" className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Soft Accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 shadow-2xs text-slate-800 text-xs font-semibold uppercase tracking-wider font-mono-tech mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-700" />
            <span>CATÁLOGO DE LIVROS & EBOOKS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-serif-classical">
            Livros que carregam <span className="text-blue-700">propósito</span> e edificam.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Explore obras selecionadas para inspirar a sua fé, família, liderança e ministério.
          </p>
        </motion.div>

        {/* Filter Controls & Search Bar */}
        <div className="mt-12 space-y-6">
          {/* Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES_LIST.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as CategoryKey)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? 'bg-blue-700 text-white shadow-md shadow-blue-700/20 scale-[1.02]'
                    : 'bg-white text-slate-700 border border-slate-200/90 hover:bg-slate-100/80 hover:border-slate-300'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[11px] px-1.5 py-0.2 rounded font-mono-tech ${
                  selectedCategory === cat.id ? 'bg-blue-800 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {cat.id === 'todos' ? books.length : books.filter(b => b.category === cat.id).length}
                </span>
              </button>
            ))}
          </div>

          {/* Search, Format Filter and Sort Row */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Pesquisar por título, autor, tema (ex: oração, liderança, família, fé)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-700/20 focus:border-blue-700 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Format Indicator & Sort */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-blue-700">
                <FileText className="w-3.5 h-3.5 text-blue-700" />
                <span>Formato: PDF</span>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-700/20"
              >
                <option value="recommended">Recomendados Rito</option>
                <option value="title">Ordem Alfabética (A-Z)</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
              </select>
            </div>

          </div>
        </div>

        {/* Catalog Grid */}
        <div className="mt-10">
          {filteredBooks.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">Nenhum livro encontrado</h3>
              <p className="text-sm text-slate-500 mt-1 max-w-sm mx-auto">
                Tente ajustar os filtros ou os termos da sua busca para encontrar outras obras no acervo.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('todos');
                  setSelectedFormat('all');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100"
              >
                Resetar Filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredBooks.map((book, index) => (
                  <motion.div
                    key={book.id}
                    layout
                    initial={{ opacity: 0, y: 30, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Card Top Row: Badge */}
                      <div className="flex items-center justify-between mb-4">
                        {book.badge ? (
                          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border font-mono-tech ${
                            book.isRubyBadge 
                              ? 'bg-amber-50 text-amber-800 border-amber-200' 
                              : 'bg-blue-50 text-blue-800 border-blue-200'
                          }`}>
                            {book.badge}
                          </span>
                        ) : (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200 font-mono-tech">
                            {book.categoryName}
                          </span>
                        )}
                      </div>

                      {/* Visual Book Cover Area */}
                      <div className="py-4 flex justify-center cursor-pointer" onClick={() => onOpenBookDetail(book)}>
                        <BookCoverDisplay book={book} size="md" className="group-hover:scale-[1.03] transition-transform duration-300" />
                      </div>

                      {/* Content Metadata */}
                      <div className="mt-4">
                        <span className="text-[11px] font-bold text-blue-700 tracking-wider font-mono-tech uppercase">
                          {book.categoryName}
                        </span>

                        <h3 
                          onClick={() => onOpenBookDetail(book)}
                          className="text-lg font-bold text-slate-900 mt-1 leading-snug group-hover:text-blue-700 transition-colors cursor-pointer font-serif-classical"
                        >
                          {book.title}
                        </h3>

                        <p className="text-xs text-slate-500 font-medium mt-0.5">
                          Por {book.author}
                        </p>

                        <p className="text-xs text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
                          {book.synopsis}
                        </p>

                        {/* Topics tags */}
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {book.topics.slice(0, 3).map((topic, tIdx) => (
                            <span 
                              key={tIdx}
                              className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-medium text-slate-600"
                            >
                              #{topic}
                            </span>
                          ))}
                        </div>

                        {/* Formats indicators */}
                        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono-tech">
                          <span className="flex items-center gap-1 font-semibold text-blue-700">
                            <FileText className="w-3 h-3 text-blue-700" />
                            PDF {book.dimensions ? `(${book.dimensions})` : ''}
                          </span>
                          <span className="flex items-center gap-1">
                            <BookOpen className="w-3 h-3 text-slate-400" />
                            {book.pages} págs
                          </span>
                          {book.publisher && (
                            <span className="text-[10px] text-slate-400 font-normal truncate max-w-[100px]" title={book.publisher}>
                              {book.publisher}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Area: Price & Conversion Buttons */}
                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <div className="flex items-baseline justify-between mb-3">
                        <div>
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-xl font-bold text-slate-900">
                              {book.price.toFixed(2).replace('.', ',')} MT
                            </span>
                            {book.originalPrice && (
                              <span className="text-xs text-slate-400 line-through">
                                {book.originalPrice.toFixed(2).replace('.', ',')} MT
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-emerald-600 font-medium">Acesso Imediato & Entrega</span>
                        </div>

                        <button
                          onClick={() => onOpenPreview(book)}
                          className="px-3 py-1.5 rounded-lg text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors flex items-center gap-1"
                          title="Abrir pré-visualização do livro"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Trecho</span>
                        </button>
                      </div>

                      {/* Main Blue Action Button */}
                      <a
                        href={book.checkoutUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`buy-btn-${book.id}`}
                        className="w-full py-3 px-4 rounded-xl font-semibold text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 shadow-sm hover:shadow-md hover:shadow-blue-700/25 transition-all duration-200 flex items-center justify-center gap-2 group/btn text-center"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Adquirir Agora</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

