import React, { useState } from 'react';
import { BOOKS_DATA } from './data/booksData';
import { Book } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CatalogSection } from './components/CatalogSection';
import { EditoraRitoSection } from './components/EditoraRitoSection';
import { AboutManifesto } from './components/AboutManifesto';
import { FounderSection } from './components/FounderSection';
import { TechnicalOptimizationSEO } from './components/TechnicalOptimizationSEO';
import { Footer } from './components/Footer';
import { InteractiveReaderModal } from './components/InteractiveReaderModal';
import { BookDetailModal } from './components/BookDetailModal';
import { SearchModal } from './components/SearchModal';

export default function App() {
  const [books] = useState<Book[]>(BOOKS_DATA);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [previewBook, setPreviewBook] = useState<Book | null>(null);
  const [detailBook, setDetailBook] = useState<Book | null>(null);

  const flagshipBook = books[0];

  const scrollToCatalog = () => {
    const el = document.getElementById('catalogo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans relative selection:bg-blue-600 selection:text-white flex flex-col justify-between">
      
      {/* Navigation Header */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigateToCatalog={scrollToCatalog}
      />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* 1. Home / Hero Section */}
        <HeroSection
          flagshipBook={flagshipBook}
          onOpenPreview={(book) => setPreviewBook(book)}
          onExploreCatalog={scrollToCatalog}
        />

        {/* 2. Catálogo: E-books Cristãos (PDF) com Checkout Direto */}
        <CatalogSection
          books={books}
          onOpenPreview={(book) => setPreviewBook(book)}
          onOpenBookDetail={(book) => setDetailBook(book)}
        />

        {/* 3. Editora Rito: Serviços Editoriais para Autores */}
        <EditoraRitoSection />

        {/* 5. Missão: Identidade Moçambicana, Origem Changana e Propósito */}
        <AboutManifesto
          onNavigateToCatalog={scrollToCatalog}
        />

        {/* 6. Fundador: André Roberto */}
        <FounderSection />

        {/* 7. FAQ: Perguntas Frequentes */}
        <TechnicalOptimizationSEO />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Reader Modal (Trecho de Leitura) */}
      <InteractiveReaderModal
        book={previewBook}
        isOpen={!!previewBook}
        onClose={() => setPreviewBook(null)}
      />

      {/* Book In-Depth Specification Modal */}
      <BookDetailModal
        book={detailBook}
        isOpen={!!detailBook}
        onClose={() => setDetailBook(null)}
        onOpenPreview={(book) => setPreviewBook(book)}
      />

      {/* Fast Search Discovery Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        books={books}
        onSelectBook={(book) => setDetailBook(book)}
      />

    </div>
  );
}
