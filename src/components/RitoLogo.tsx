import React from 'react';
import brandLogoImg from '../assets/images/regenerated_image_1788371608058.jpg';

interface RitoLogoProps {
  variant?: 'light' | 'dark';
  layout?: 'horizontal' | 'vertical' | 'emblem' | 'image';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const RitoLogo: React.FC<RitoLogoProps> = ({
  variant = 'light',
  layout = 'horizontal',
  className = '',
  size = 'md'
}) => {
  const isDark = variant === 'dark';

  // Direct image representation using the authentic brand mark
  if (layout === 'image') {
    const heightClass = {
      sm: 'h-8',
      md: 'h-10 sm:h-11',
      lg: 'h-12 sm:h-14',
      xl: 'h-16 sm:h-20'
    }[size];

    return (
      <img
        src={brandLogoImg}
        alt="Livraria Rito Logotipo"
        className={`w-auto object-contain ${heightClass} ${className}`}
        referrerPolicy="no-referrer"
      />
    );
  }

  // Emblem Vector
  const Emblem = ({ emblemSizeClass = 'w-10 h-10' }: { emblemSizeClass?: string }) => (
    <div className={`relative shrink-0 flex items-center justify-center select-none ${emblemSizeClass}`}>
      <svg
        viewBox="0 0 1000 750"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xs"
      >
        {/* Círculo Secundário Inferior Esquerdo (Translúcido / Sombra) */}
        <circle cx="270" cy="530" r="160" fill="#B9131C" />

        {/* Círculo Principal Vermelho Vibrante */}
        <circle cx="480" cy="380" r="310" fill="#DE1E27" />

        {/* Círculo Secundário Superior Direito (Esfera Translúcida) */}
        <circle cx="810" cy="270" r="105" fill="#DE1E27" fillOpacity="0.88" />

        {/* Sobreposição Esquerda com Efeito Multiplicador */}
        <circle cx="270" cy="530" r="160" fill="#7B0B11" fillOpacity="0.32" />

        {/* Letra 'R' Cursiva Branca Oficial */}
        <g stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Traço Vertical com ligeira inclinação orgânica */}
          <path
            d="M 292 236 C 282 315 272 415 264 508"
            strokeWidth="38"
          />

          {/* Laçada Superior e Cauda Fluida do R */}
          <path
            d="M 230 386 C 256 305 320 132 505 128 C 650 125 690 242 610 340 C 535 408 410 432 320 424 C 418 432 538 472 672 536"
            strokeWidth="38"
          />
        </g>
      </svg>
    </div>
  );

  if (layout === 'emblem') {
    return <Emblem emblemSizeClass={className || 'w-10 h-10'} />;
  }

  if (layout === 'vertical') {
    return (
      <div className={`flex flex-col items-center text-center select-none group/logo ${className}`}>
        <Emblem emblemSizeClass="w-16 h-14 sm:w-20 sm:h-16 mb-1" />
        <div className="flex flex-col items-center leading-none">
          <span
            className={`text-2xl sm:text-3xl font-black tracking-tight font-sans transition-colors ${
              isDark ? 'text-blue-400' : 'text-[#005DAA]'
            }`}
          >
            RITO
          </span>
          <span className={`text-[10px] sm:text-xs font-bold tracking-[0.3em] font-sans mt-0.5 ${
            isDark ? 'text-slate-300' : 'text-slate-900'
          }`}>
            LIVRARIA
          </span>
        </div>
      </div>
    );
  }

  // Layout Horizontal (Default for Navigation Bar and Clean Footer Headers)
  const sizes = {
    sm: { emblem: 'w-8 h-7', rito: 'text-lg', livraria: 'text-[9px] tracking-[0.25em]' },
    md: { emblem: 'w-11 h-9', rito: 'text-xl sm:text-2xl', livraria: 'text-[10px] tracking-[0.28em]' },
    lg: { emblem: 'w-14 h-12', rito: 'text-2xl sm:text-3xl', livraria: 'text-xs tracking-[0.3em]' },
    xl: { emblem: 'w-18 h-15', rito: 'text-3xl sm:text-4xl', livraria: 'text-sm tracking-[0.32em]' }
  }[size];

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none group/logo ${className}`}>
      <Emblem emblemSizeClass={sizes.emblem} />
      <div className="flex flex-col leading-none">
        <span
          className={`font-black tracking-tight font-sans transition-colors ${sizes.rito} ${
            isDark ? 'text-blue-400 group-hover/logo:text-blue-300' : 'text-[#005DAA] group-hover/logo:text-blue-800'
          }`}
        >
          RITO
        </span>
        <span className={`font-extrabold font-sans mt-0.5 ${
          isDark ? 'text-slate-300' : 'text-slate-900'
        } ${sizes.livraria}`}>
          LIVRARIA
        </span>
      </div>
    </div>
  );
};
