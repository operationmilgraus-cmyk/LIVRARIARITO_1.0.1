export type CategoryKey = 
  | 'todos'
  | 'vida-crista'
  | 'lideranca'
  | 'ministerio'
  | 'familia'
  | 'casamento'
  | 'jovens'
  | 'oracao'
  | 'fe';

export type BookFormat = 'pdf';

export interface MarginalNote {
  highlight: string;
  note: string;
  biblicalRef?: string;
}

export interface SampleExcerpt {
  chapterNumber: string;
  chapterTitle: string;
  epigraph?: string;
  verseAnchor?: string;
  content: string[];
  marginalia: MarginalNote[];
}

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  authorBio: string;
  category: CategoryKey;
  categoryName: string;
  secondaryCategories?: CategoryKey[];
  formats: BookFormat[];
  price: number;
  originalPrice?: number;
  badge?: string;
  isRubyBadge?: boolean;
  rating: number;
  reviewsCount: number;
  pages: number;
  isbn: string;
  releaseDate: string;
  publisher?: string;
  dimensions?: string;
  coverType?: string;
  synopsis: string;
  longDescription: string;
  topics: string[];
  sampleExcerpt: SampleExcerpt;
  coverImage?: string;
  checkoutUrl?: string;
  coverGraphic: {
    accentColor: string;
    secondaryColor: string;
    patternType: 'sacred-cross' | 'open-bible' | 'olive-branch' | 'divine-light' | 'golden-arch' | 'classic-frame';
    iconName: string;
  };
  stats: {
    readersNow: number;
    completionRate: string;
  };
}

export interface CartItem {
  book: Book;
  format: BookFormat;
  quantity: number;
}

export type ReaderTheme = 'luz-cristalina' | 'pergaminho-classico' | 'azul-sereno' | 'noturno-devocional';

