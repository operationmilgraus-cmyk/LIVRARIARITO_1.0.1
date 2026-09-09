import React, { useState } from 'react';
import { Book } from '../types';
import { 
  BookOpen, Heart, Flame, Sun, Anchor, Feather, Shield
} from 'lucide-react';

interface BookCoverDisplayProps {
  book: Book;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
}

export const BookCoverDisplay: React.FC<BookCoverDisplayProps> = ({
  book,
  size = 'md',
  className = ''
}) => {
  const [imageError, setImageError] = useState(false);

  const getIcon = () => {
    switch (book.coverGraphic.iconName) {
      case 'Cross': 
        return (
          <div className="relative flex items-center justify-center w-full h-full">
            <div className="w-1 h-7 bg-white rounded-xs shadow-xs" />
            <div className="absolute top-2 w-5 h-1 bg-white rounded-xs shadow-xs" />
          </div>
        );
      case 'BookOpen': return <BookOpen className="w-full h-full stroke-[1.5]" />;
      case 'Heart': return <Heart className="w-full h-full stroke-[1.5]" />;
      case 'Flame': return <Flame className="w-full h-full stroke-[1.5]" />;
      case 'Sun': return <Sun className="w-full h-full stroke-[1.5]" />;
      case 'Anchor': return <Anchor className="w-full h-full stroke-[1.5]" />;
      case 'Feather': return <Feather className="w-full h-full stroke-[1.5]" />;
      case 'Shield': return <Shield className="w-full h-full stroke-[1.5]" />;
      default: return <BookOpen className="w-full h-full stroke-[1.5]" />;
    }
  };

  const dimensions = {
    sm: 'w-24 h-36 text-[10px]',
    md: 'w-48 h-70 text-xs',
    lg: 'w-60 h-88 text-sm',
    hero: 'w-64 sm:w-76 h-96 sm:h-[430px] text-sm'
  }[size];

  // If book has a real cover photo/mockup and no loading error
  if (book.coverImage && !imageError) {
    return (
      <div
        className={`relative flex items-center justify-center select-none group/cover ${dimensions} ${className}`}
      >
        <div className="relative w-full h-full flex items-center justify-center p-1">
          {/* Cover Image in Transparent PNG with Photorealistic Drop Shadow */}
          <img
            src={book.coverImage}
            alt={`Capa do livro ${book.title}`}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-contain filter drop-shadow-[0_14px_22px_rgba(15,23,42,0.22)] group-hover/cover:drop-shadow-[0_22px_32px_rgba(15,23,42,0.32)] group-hover/cover:scale-[1.03] transition-all duration-300 pointer-events-none"
          />

          {/* Top Format Pill */}
          <div className="absolute top-1.5 right-1.5 z-10 pointer-events-none">
            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold font-mono-tech uppercase bg-slate-900/80 backdrop-blur-md text-white border border-white/20 shadow-xs">
              PDF Digital
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Fallback Emblem Cover
  return (
    <div
      className={`relative overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 select-none flex flex-col justify-between p-4 sm:p-5 bg-gradient-to-b from-white via-slate-50 to-slate-100 ${dimensions} ${className}`}
      style={{
        boxShadow: `0 12px 30px -10px ${book.coverGraphic.accentColor}25`
      }}
    >
      {/* Background Subtle Classical Framing */}
      <div className="absolute inset-2 border border-slate-200/50 rounded-xl pointer-events-none" />
      
      {/* Subtle Luminous Radial Accent */}
      <div 
        className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-2xl opacity-25 pointer-events-none"
        style={{ backgroundColor: book.coverGraphic.accentColor }}
      />
      <div 
        className="absolute -bottom-16 -left-16 w-36 h-36 rounded-full blur-2xl opacity-15 pointer-events-none"
        style={{ backgroundColor: book.coverGraphic.secondaryColor }}
      />

      {/* Top Header Information on Cover */}
      <div className="relative z-10 flex items-start justify-between gap-1">
        <div className="flex flex-col">
          <span className="font-mono-tech text-[9px] uppercase tracking-widest text-slate-500 font-bold">
            EDIÇÃO RITO
          </span>
          <span className="font-mono-tech text-[10px] font-bold text-blue-700">
            #{book.id.toUpperCase()}
          </span>
        </div>

        <div className="flex items-center gap-1 bg-white/80 px-2 py-0.5 rounded-full border border-slate-200">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
          <span className="font-mono-tech text-[9px] text-slate-600 font-semibold">{book.coverType || 'LIVRO CRISTÃO'}</span>
        </div>
      </div>

      {/* Center Classical Christian Emblem */}
      <div className="relative z-10 my-auto py-2 flex flex-col items-center justify-center">
        <div className="relative flex items-center justify-center">
          <div 
            className="absolute w-22 h-22 sm:w-26 sm:h-26 rounded-full border border-dashed opacity-40"
            style={{ borderColor: book.coverGraphic.accentColor }}
          />
          <div 
            className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full border opacity-30"
            style={{ borderColor: book.coverGraphic.secondaryColor }}
          />

          <div 
            className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center p-3.5 text-white shadow-md transition-transform duration-300 group-hover:scale-105"
            style={{ 
              background: `linear-gradient(135deg, ${book.coverGraphic.accentColor}, ${book.coverGraphic.secondaryColor})` 
            }}
          >
            {getIcon()}
          </div>
        </div>

        <div className="mt-3 px-2.5 py-0.5 rounded-full bg-white/95 border border-slate-200 shadow-2xs">
          <span className="text-[10px] font-semibold text-slate-700 tracking-tight">
            {book.categoryName}
          </span>
        </div>
      </div>

      {/* Bottom Typography (Title & Author) */}
      <div className="relative z-10 pt-2 border-t border-slate-200/80">
        <h3 className="font-bold text-slate-900 tracking-tight leading-snug line-clamp-2 text-xs sm:text-sm font-serif-classical">
          {book.title}
        </h3>
        <p className="text-[11px] text-slate-600 font-medium mt-0.5 line-clamp-1">
          {book.author}
        </p>

        <div className="flex items-center justify-between mt-2 pt-1 border-t border-dashed border-slate-200 text-[9px] text-slate-500 font-mono-tech">
          <span>{book.pages} PÁGINAS</span>
          <span className="text-blue-700 font-semibold">ED. INTEGRAL</span>
        </div>
      </div>
    </div>
  );
};
