import { Book } from '../types';
import praticaCorteCover from '../assets/images/pratica_corte_cover.png';
import varandaCorteCover from '../assets/images/varanda_corte_cover.png';
import nextLevelCover from '../assets/images/next_level_cover.png';
import crescimentoDeusCover from '../assets/images/crescimento_deus_cover.png';
import promessaCover from '../assets/images/promessa_cover.png';

export const BOOKS_DATA: Book[] = [
  {
    id: 'rito-pratica-corte',
    title: 'A Prática da Côrte',
    subtitle: 'Relacionamento à Maneira de Deus',
    author: 'André Roberto com Rabia Roberto',
    authorBio: 'André Roberto e Rabia Roberto ministram no fortalecimento de relacionamentos cristãos segundo o padrão bíblico e debaixo da Graça, preparando casais e jovens para uma corte e casamento de propósito.',
    category: 'casamento',
    categoryName: 'Casamento',
    secondaryCategories: ['familia', 'jovens', 'vida-crista'],
    formats: ['pdf'],
    price: 400.00,
    originalPrice: 500.00,
    badge: 'Destaque Rito',
    isRubyBadge: true,
    rating: 5.0,
    reviewsCount: 435,
    pages: 121,
    dimensions: 'A5',
    releaseDate: '2024',
    publisher: 'Editora Presença',
    isbn: '978-989-8012-01-4',
    coverType: 'E-book PDF',
    coverImage: praticaCorteCover,
    checkoutUrl: 'https://pay.tutora.co.mz/7130d74262044ec2b366499cdd47ee80',
    synopsis: 'O Livro a Prática da Corte vem exatamente para nos equipar com sabedoria de como praticar a Corte em linha com a palavra de Deus e debaixo da Graça. Este material servirá para ampliar a sua visão de Côrte e como perceber Deus de forma clara confirmando e testificando o seu relacionamento.',
    longDescription: 'O Livro a Prática da Corte vem exatamente para nos equipar com sabedoria de como praticar a Corte em linha com a palavra de Deus e debaixo da Graça.\n\nEste material servirá para ampliar a sua visão de Côrte e como perceber Deus de forma clara confirmando e testificando o seu relacionamento.\n\nSe você está na Côrte, leia junto com sua Côrte, e se você gostaria também de trilhar este caminho, leia se preparando antes para uma Côrte de Sucesso.',
    topics: ['Corte Bíblica', 'Namoro Santo', 'Casamento Cristão', 'Pureza e Aliança', 'Família'],
    sampleExcerpt: {
      chapterNumber: 'Capítulo 1',
      chapterTitle: 'O Propósito Sagrado do Relacionamento',
      epigraph: '“Sobre tudo o que se deve guardar, guarda o teu coração, porque dele procedem as fontes da vida.” — Provérbios 4:23',
      verseAnchor: 'Provérbios 4:23',
      content: [
        'A prática da corte não é um conjunto de regras rígidas para aprisionar o afeto, mas uma proteção graciosa para guardar o coração e glorificar a Deus na jornada a dois.',
        'Quando dois servos de Deus decidem caminhar com clareza de intenção, o relacionamento deixa de ser um jogo de emoções passageiras e se torna um testemunho de honra e compromisso.',
        'O verdadeiro amor sabe esperar o tempo de Deus, cultivando a oração, a amizade sincera e o respeito mútuo antes de qualquer promessa no altar.'
      ],
      marginalia: [
        {
          highlight: 'proteção graciosa para guardar o coração',
          note: 'Guardar o coração no namoro cristão é zelar pela integridade espiritual e emocional de ambos.',
          biblicalRef: 'Provérbios 4:23; 1 Tessalonicenses 4:3-5'
        }
      ]
    },
    coverGraphic: {
      accentColor: '#1E3A8A', // Deep Navy
      secondaryColor: '#D97706', // Warm Amber Gold
      patternType: 'golden-arch',
      iconName: 'Heart'
    },
    stats: {
      readersNow: 312,
      completionRate: '98%'
    }
  },
  {
    id: 'rito-varanda-corte',
    title: 'A Varanda da Côrte',
    subtitle: 'Um lugar de espera',
    author: 'André Roberto',
    authorBio: 'Autor e mentor de juventude cristã, com ministério focado em integridade, maturidade afetiva e preparação para a vida conjugal.',
    category: 'jovens',
    categoryName: 'Jovens',
    secondaryCategories: ['casamento', 'vida-crista', 'familia'],
    formats: ['pdf'],
    price: 350.00,
    originalPrice: 450.00,
    badge: 'Recomendado',
    isRubyBadge: false,
    rating: 4.9,
    reviewsCount: 380,
    pages: 66,
    dimensions: 'A5',
    publisher: 'Editora Presença',
    releaseDate: '2024',
    isbn: '978-989-8012-02-1',
    coverType: 'E-book PDF',
    coverImage: varandaCorteCover,
    checkoutUrl: 'https://pay.tutora.co.mz/ea7ccb773b2749ed822b45902e0e44e7',
    synopsis: 'O livro busca orientar aqueles que desejam formar uma família segundo os princípios da Palavra de Deus, destacando a importância do período de espera na “Varanda da Corte” antes de entrar no relacionamento.',
    longDescription: 'O livro busca orientar aqueles que desejam formar uma família segundo os princípios da Palavra de Deus, levando-os a refletir sobre suas motivações, preparação e postura antes de entrar na Corte. A obra destaca a importância do período de espera, apresentado como a “Varanda da Corte”, uma preparação para o relacionamento, o casamento e, finalmente, a construção de uma família fundamentada em Deus.\n\nDesejo-te uma boa leitura, boa meditação e por fim que este Livro seja um instrumento para o seu sucesso.',
    topics: ['Juventude Cristã', 'Maturidade Afetiva', 'Preparação para o Casamento', 'Discernimento Espiritual'],
    sampleExcerpt: {
      chapterNumber: 'Capítulo 1',
      chapterTitle: 'Conversas na Varanda: A Importância do Diálogo',
      epigraph: '“Onde não há conselho os projetos saem vãos, mas com a multidão de conselheiros se confirmarão.” — Provérbios 15:22',
      verseAnchor: 'Provérbios 15:22',
      content: [
        'A varanda é o lugar onde conversamos sem a pressa do dia a dia; onde nos despimos das ilusões e olhamos com sinceridade para o futuro que desejamos construir.',
        'Um relacionamento abençoado não teme as perguntas difíceis. É através do diálogo honesto e da oração que os valores fundamentais de cada um se revelam.',
        'A maturidade no amor começa quando aprendemos a escutar o outro com a paciência e a graça que Cristo tem para conosco.'
      ],
      marginalia: [
        {
          highlight: 'diálogo honesto e da oração',
          note: 'A transparência e a comunhão são as colunas de sustentação de um noivado santo e abençoado.',
          biblicalRef: 'Efésios 4:15-16'
        }
      ]
    },
    coverGraphic: {
      accentColor: '#E11D48', // Coral / Rose
      secondaryColor: '#BE123C',
      patternType: 'classic-frame',
      iconName: 'BookOpen'
    },
    stats: {
      readersNow: 245,
      completionRate: '96%'
    }
  },
  {
    id: 'rito-next-level',
    title: 'Next Level',
    subtitle: '21 days for a Next Level',
    author: 'Azemar Freitas',
    authorBio: 'Conferencista, mentor e líder eclesiástico com ampla experiência na formação de líderes e dinamização ministerial.',
    category: 'lideranca',
    categoryName: 'Liderança',
    secondaryCategories: ['ministerio', 'vida-crista', 'fe'],
    formats: ['pdf'],
    price: 400.00,
    originalPrice: 550.00,
    badge: 'Liderança & Visão',
    isRubyBadge: true,
    rating: 4.9,
    reviewsCount: 510,
    pages: 228,
    dimensions: 'A4',
    publisher: 'Editora Presença',
    releaseDate: '2026',
    isbn: '978-989-8012-03-8',
    coverType: 'E-book PDF',
    coverImage: nextLevelCover,
    checkoutUrl: 'https://pay.tutora.co.mz/4a88352da55946d8bc60dae3955c7055',
    synopsis: 'Next Level é um convite para viver um novo nível daquilo que Deus tem preparado para a sua vida através do jejum, da oração e da confiança no agir extraordinário de Deus.',
    longDescription: 'Next Level é um convite para viver um novo nível daquilo que Deus tem preparado para a sua vida. Durante o jejum, somos chamados a criar expectativas, orar e confiar que Deus fará muito além do que podemos ver, imaginar ou compreender. O que vivemos hoje é apenas o começo das coisas extraordinárias que Ele ainda realizará.',
    topics: ['Liderança Cristã', 'Visão Estratégica', '21 Dias Devocionais', 'Crescimento Pessoal', 'Integridade'],
    sampleExcerpt: {
      chapterNumber: 'Capítulo 2',
      chapterTitle: 'Rompendo os Limites da Zona de Conforto',
      epigraph: '“Esquecendo-me das coisas que para trás ficam e avançando para as que estão diante de mim, prossigo para o alvo.” — Filipenses 3:13-14',
      verseAnchor: 'Filipenses 3:13-14',
      content: [
        'O próximo nível não é alcançado por acaso; ele exige intencionalidade, disciplina espiritual e a coragem de abandonar velhos hábitos.',
        'Deus nunca nos chamou para a estagnação. Há sempre uma nova medida de graça, uma visão mais ampla e uma responsabilidade maior reservada para aqueles que se consagram de todo o coração.',
        'Grandes líderes são aqueles que inspiram outros a subirem juntos a montanha do propósito divino.'
      ],
      marginalia: [
        {
          highlight: 'intencionalidade, disciplina espiritual',
          note: 'A busca pela excelência cristã glorifica a Deus e capacita o crente para um serviço de maior impacto.',
          biblicalRef: '1 Coríntios 9:24-27'
        }
      ]
    },
    coverGraphic: {
      accentColor: '#1E3A8A',
      secondaryColor: '#EAB308',
      patternType: 'divine-light',
      iconName: 'Sparkles'
    },
    stats: {
      readersNow: 288,
      completionRate: '97%'
    }
  },
  {
    id: 'rito-jornada-crescimento',
    title: 'Uma Jornada de Crescimento em Deus',
    subtitle: '21 Dias Crescendo em Deus',
    author: 'Hélder Chacala',
    authorBio: 'Pastor, mestre bíblico e autor com paixão pelo ensino expositivo e pelo amadurecimento espiritual de obreiros e membros da igreja.',
    category: 'vida-crista',
    categoryName: 'Vida Cristã',
    secondaryCategories: ['oracao', 'ministerio', 'fe'],
    formats: ['pdf'],
    price: 500.00,
    originalPrice: 650.00,
    badge: 'Maturidade Cristã',
    isRubyBadge: true,
    rating: 4.9,
    reviewsCount: 395,
    pages: 193,
    dimensions: 'A4',
    publisher: 'Editora Rito',
    releaseDate: '2026',
    isbn: '978-989-8012-06-9',
    coverType: 'E-book PDF',
    coverImage: crescimentoDeusCover,
    checkoutUrl: 'https://wa.me/258840000000?text=Ol%C3%A1%2C%20gostaria%20de%20adquirir%20o%20e-book%20Uma%20Jornada%20de%20Crescimento%20em%20Deus%20na%20Livraria%20Rito.',
    synopsis: '21 dias para se aproximar de Deus, fortalecer a sua fé e experimentar uma transformação profunda através do jejum, da oração e da Sua Palavra.',
    longDescription: '21 dias para se aproximar de Deus, fortalecer a sua fé e experimentar uma transformação profunda através do jejum, da oração e da Sua Palavra.\n\nEsta é uma jornada de entrega, intimidade e crescimento espiritual. A cada dia, permita que Deus trabalhe no seu coração e conduza você a um novo nível de relacionamento com Ele.\n\nPrepare-se para 21 dias que podem transformar a sua caminhada com Deus.',
    topics: ['Crescimento Espiritual', '21 Dias de Enraizamento', 'Oração e Intimidade', 'Estudo da Palavra', 'Maturidade'],
    sampleExcerpt: {
      chapterNumber: 'Capítulo 2',
      chapterTitle: 'Raízes Profundas para Dias de Seca',
      epigraph: '“Ele é como a árvore plantada junto a corrente de águas, que, no devido tempo, dá o seu fruto.” — Salmo 1:3',
      verseAnchor: 'Salmo 1:3',
      content: [
        'A beleza de uma árvore no outono depende da profundidade das raízes que ela desenvolveu no silêncio da terra durante as estações anteriores.',
        'O crente que cultiva a oração secreta e a meditação na Palavra não é abalado pelos ventos das circunstâncias; a sua seiva provém diretamente do trono de Deus.',
        'Crescer em Deus é aprender a depender menos dos nossos próprios recursos e confiar plenamente no poder capacitador do Espírito Santo.'
      ],
      marginalia: [
        {
          highlight: 'profundidade das raízes que ela desenvolveu',
          note: 'O crescimento bíblico é orgânico e sustentado pela comunhão constante com o Espírito Santo.',
          biblicalRef: 'Colossenses 2:6-7; Salmo 1:1-3'
        }
      ]
    },
    coverGraphic: {
      accentColor: '#065F46', // Deep Forest Pine
      secondaryColor: '#22C55E',
      patternType: 'open-bible',
      iconName: 'Flame'
    },
    stats: {
      readersNow: 275,
      completionRate: '97%'
    }
  },
  {
    id: 'rito-manifestacao-promessa',
    title: 'Manifestação da Promessa',
    subtitle: '21 Dias para o Cumprimento das Promessas de Deus',
    author: 'Sídio Jamal',
    authorBio: 'Pastor, conferencista e ministro do Evangelho com foco na pregação profética, fé bíblica e fortalecimento da igreja de Cristo em Moçambique.',
    category: 'fe',
    categoryName: 'Fé & Promessas',
    secondaryCategories: ['vida-crista', 'oracao', 'ministerio'],
    formats: ['pdf'],
    price: 500.00,
    originalPrice: 650.00,
    badge: 'Lançamento',
    isRubyBadge: true,
    rating: 5.0,
    reviewsCount: 415,
    pages: 199,
    dimensions: 'A4',
    publisher: 'Editora Rito',
    releaseDate: '2026',
    isbn: '978-989-8012-07-6',
    coverType: 'E-book PDF',
    coverImage: promessaCover,
    checkoutUrl: 'https://pay.tutora.co.mz/129afe74bed94feab37257359eea7bf3',
    synopsis: '“Porque todas as promessas de Deus são nele ‘sim’, e nele ‘amém’, para a glória de Deus por nós.” 2 Coríntios 1:20. Este devocional de 21 dias foi criado para renovar sua fé, fortalecer sua esperança e alinhar seu coração à Palavra.',
    longDescription: '“Porque todas as promessas de Deus são nele ‘sim’, e nele ‘amém’, para a glória de Deus por nós.” 2 Coríntios 1:20\n\nDeus não apenas faz promessas, Ele as cumpre! Mas, muitas vezes, não vemos o mover de Deus porque duvidamos, nos distraímos ou simplesmente não insistimos.\n\nEste devocional de 21 dias foi criado para renovar sua fé, fortalecer sua esperança e alinhar seu coração à Palavra, até que a promessa se torne realidade em sua vida. Cada dia traz uma reflexão prática, uma promessa poderosa e um passo de fé para você declarar: a Palavra do Senhor não volta vazia!',
    topics: ['Promessas de Deus', '21 Dias de Fé', 'Perseverança', 'Vida no Espírito', 'Oração e Conquista'],
    sampleExcerpt: {
      chapterNumber: 'Dia 1',
      chapterTitle: 'A Fidelidade dAquele que Prometeu',
      epigraph: '“Fiel é o que vos chama, o qual também o fará.” — 1 Tessalonicenses 5:24',
      verseAnchor: '1 Tessalonicenses 5:24',
      content: [
        'As promessas de Deus não sofrem oscilação humana nem caducam com o passar dos anos; o que a boca do Senhor proferiu, a Sua mão é fiel para realizar.',
        'Muitas vezes, a distância entre a palavra profética e a sua manifestação material é a estação onde a nossa fé é lapidada para que saibamos administrar a bênção com humildade e gratidão.',
        'Ao iniciar estes 21 dias, tome a decisão de ancorar a sua esperança unicamente na fidelidade dAquele que não pode mentir nem quebrar a Sua santa aliança.'
      ],
      marginalia: [
        {
          highlight: 'distância entre a palavra profética e a sua manifestação',
          note: 'A espera alinhada com Deus não é inércia, mas gestação espiritual da vitória.',
          biblicalRef: 'Hebreus 10:23; 1 Tessalonicenses 5:24'
        }
      ]
    },
    coverGraphic: {
      accentColor: '#166534',
      secondaryColor: '#B45309',
      patternType: 'olive-branch',
      iconName: 'Sun'
    },
    stats: {
      readersNow: 320,
      completionRate: '99%'
    }
  }
];

export const CATEGORIES_LIST = [
  { id: 'todos', label: 'Todos os Ebooks', count: 5 },
  { id: 'vida-crista', label: 'Vida Cristã', count: 2 },
  { id: 'casamento', label: 'Casamento', count: 1 },
  { id: 'jovens', label: 'Jovens', count: 1 },
  { id: 'lideranca', label: 'Liderança', count: 1 },
  { id: 'fe', label: 'Fé & Promessas', count: 1 }
];

export const MISSION_TEXT = {
  paragraph1: 'A Livraria Rito é uma livraria moçambicana criada com o propósito de partilhar experiências, conhecimento e o Pão do Céu através dos livros.',
  paragraph2: '“Rito” é uma palavra de origem changana que significa “palavra”. Esse significado representa a essência da nossa missão: compartilhar palavras que edificam, ensinam, inspiram e transformam vidas.',
  paragraph3: 'Acreditamos que um livro pode carregar uma mensagem, transmitir conhecimento, despertar a fé e contribuir para a transformação de uma vida. Por isso, a Livraria Rito existe para aproximar leitores de livros que carregam propósito, com especial atenção à literatura cristã e às obras de autores que têm dedicado suas vidas à edificação de outras pessoas.'
};

export const PUBLISHING_SERVICES_DATA = {
  title: 'Editora Rito',
  subtitle: 'Serviços Editoriais Profissionais para Autores e Ministérios',
  description: 'A Editora Rito apoia autores, pastores e líderes na materialização de suas obras com rigor técnico, primor estético e respeito à essência de cada mensagem.',
  services: [
    {
      id: 'preparacao-revisao',
      title: 'Preparação e Revisão Textual',
      shortDesc: 'Revisão ortográfica, gramatical, estilística e padronização editorial com rigor e fidelidade à voz do autor.',
      details: [
        'Correção ortográfica e gramatical segundo o Novo Acordo Ortográfico',
        'Adequação sintática, fluidez de leitura e coesão textual',
        'Padronização de citações bíblicas e referências teológicas',
        'Revisão crítica e de provas antes do fechamento final'
      ],
      icon: 'FileText'
    },
    {
      id: 'projeto-grafico-capa',
      title: 'Projeto Gráfico e Capa',
      shortDesc: 'Criação de capas marcantes e projeto de identidade visual que transmitem a nobreza e o peso da sua mensagem.',
      details: [
        'Criação de capa, contracapa e lombada personalizadas',
        'Definição de identidade visual e paleta de cores temática',
        'Tipografia clássica e moderna com alto apelo visual',
        'Arquivos prontos para impressão física e exibição digital'
      ],
      icon: 'Palette'
    },
    {
      id: 'diagramacao',
      title: 'Diagramação Profissional',
      shortDesc: 'Formatação editorial do miolo com harmonia tipográfica, margens balanceadas e leiturabilidade impecável.',
      details: [
        'Diagramação em softwares editoriais profissionais (InDesign)',
        'Hierarquia clara de títulos, subtítulos e epígrafes',
        'Tratamento de notas de rodapé, tabelas e versículos destacados',
        'Geração de PDF final para gráfica e versão digital otimizada'
      ],
      icon: 'Layout'
    },
    {
      id: 'coordenacao-impressao',
      title: 'Coordenação da Impressão',
      shortDesc: 'Gestão completa com gráficas parceiras, seleção de papéis nobres, acabamentos especiais e controlo de qualidade.',
      details: [
        'Assessoria na escolha de papel (pólen soft, offset, couché)',
        'Acabamentos nobres: capa dura, verniz localizado, hot stamping e relevo',
        'Acompanhamento de provas gráficas e controlo de tiragem',
        'Logística e entrega dos exemplares com total segurança'
      ],
      icon: 'Printer'
    }
  ]
};

export const FAQ_AEO_ITEMS = [
  {
    question: 'Qual é o formato dos livros disponíveis na Livraria Rito?',
    answer: 'Todos os livros do nosso catálogo estão disponíveis em formato digital PDF (E-book em PDF) de alta definição, pronto para leitura confortável em smartphones, tablets, computadores ou leitores digitais com download imediato após a aquisição.'
  },
  {
    question: 'O que significa "Rito" e qual é a origem da Livraria?',
    answer: '“Rito” é uma palavra de origem changana (língua moçambicana) que significa “palavra”. A Livraria Rito é uma livraria moçambicana criada com o propósito de partilhar experiências, conhecimento e o Pão do Céu através dos livros, aproximando leitores de obras que edificam e transformam vidas.'
  },
  {
    question: 'Como funciona a Editora Rito para autores que desejam publicar?',
    answer: 'A Editora Rito oferece serviços editoriais completos: Preparação e Revisão Textual, Projeto Gráfico e Capa, Diagramação profissional e Coordenação da Impressão. Pode submeter o seu manuscrito ou solicitar um orçamento diretamente através da seção Editora Rito no site.'
  },
  {
    question: 'Como recebo o meu e-book em PDF após a compra?',
    answer: 'Após a confirmação do pedido, recebe o acesso instantâneo ao download do arquivo PDF completo, além de poder degustar o trecho de leitura diretamente no nosso leitor digital interativo.'
  }
];

export interface ReaderTestimonial {
  id: string;
  readerName: string;
  location: string;
  roleOrProfile: string;
  bookId: string;
  bookTitle: string;
  bookAuthor: string;
  coverImage: string;
  rating: number;
  date: string;
  testimonial: string;
  highlightQuote: string;
  verifiedPurchase: boolean;
}

export const READERS_TESTIMONIALS_DATA: ReaderTestimonial[] = [
  {
    id: 't-pratica-corte',
    readerName: 'Samuel & Dulce Macamo',
    location: 'Maputo, Moçambique',
    roleOrProfile: 'Casal de Noivos / Líderes de Jovens',
    bookId: 'rito-pratica-corte',
    bookTitle: 'A Prática da Côrte',
    bookAuthor: 'André Roberto com Rabia Roberto',
    coverImage: praticaCorteCover,
    rating: 5,
    date: 'Fevereiro de 2026',
    highlightQuote: '“Mudou completamente a nossa visão sobre o namoro e o noivado cristão.”',
    testimonial: 'Ler "A Prática da Côrte" do pastor André e da pastora Rabia foi um divisor de águas para o nosso relacionamento. O livro traz um equilíbrio perfeito entre pureza bíblica, honra às famílias e realidade prática para a juventude cristã. Recomendamos a todos os jovens da nossa igreja!',
    verifiedPurchase: true
  },
  {
    id: 't-varanda-corte',
    readerName: 'Edmilson Cossa',
    location: 'Matola, Moçambique',
    roleOrProfile: 'Jovem Universitário & Líder de Louvor',
    bookId: 'rito-varanda-corte',
    bookTitle: 'A Varanda da Côrte',
    bookAuthor: 'André Roberto',
    coverImage: varandaCorteCover,
    rating: 5,
    date: 'Janeiro de 2026',
    highlightQuote: '“Conselhos profundos para quem deseja edificar um futuro a dois com sabedoria.”',
    testimonial: '"A Varanda da Côrte: Um lugar de espera" respondeu a muitas dúvidas que eu tinha sobre como me posicionar antes mesmo de começar um compromisso. O pastor André Roberto escreve com clareza e autoridade espiritual que nos direciona a guardar o coração em Deus.',
    verifiedPurchase: true
  },
  {
    id: 't-next-level',
    readerName: 'Pastor Daniel Tembe',
    location: 'Beira, Moçambique',
    roleOrProfile: 'Pastor Local e Empreendedor',
    bookId: 'rito-next-level',
    bookTitle: 'Next Level',
    bookAuthor: 'Azemar Freitas',
    coverImage: nextLevelCover,
    rating: 5,
    date: 'Fevereiro de 2026',
    highlightQuote: '“Um despertamento poderoso para liderar com excelência e visão do Reino.”',
    testimonial: 'O devocional de 21 dias do pastor Azemar Freitas nos confronta a sair da zona de conforto espiritual e ministerial. As lições sobre visão, perseverança e liderança no Reino de Deus foram aplicadas diretamente na capacitação dos obreiros da nossa congregação na Beira.',
    verifiedPurchase: true
  },
  {
    id: 't-crescimento-deus',
    readerName: 'Isaac Sitoe',
    location: 'Chimoio, Moçambique',
    roleOrProfile: 'Discipulador e Estudante de Teologia',
    bookId: 'rito-jornada-crescimento',
    bookTitle: 'Uma Jornada de Crescimento em Deus',
    bookAuthor: 'Hélder Chacala',
    coverImage: crescimentoDeusCover,
    rating: 5,
    date: 'Fevereiro de 2026',
    highlightQuote: '“O melhor guia prático de 21 dias de discipulado e maturidade que já li.”',
    testimonial: 'O livro do pastor Hélder Chacala é fundamental para todo cristão que deseja amadurecer na fé. Os 21 dias de crescimento abordam a vida no Espírito, oração, estudo bíblico e caráter com profunda sabedoria. Estamos a utilizar nos pequenos grupos de discipulado!',
    verifiedPurchase: true
  },
  {
    id: 't-manifestacao-promessa',
    readerName: 'Ester Manhique',
    location: 'Maputo, Moçambique',
    roleOrProfile: 'Líder de Intercessão & Educadora',
    bookId: 'rito-manifestacao-promessa',
    bookTitle: 'Manifestação da Promessa',
    bookAuthor: 'Sídio Jamal',
    coverImage: promessaCover,
    rating: 5,
    date: 'Fevereiro de 2026',
    highlightQuote: '“Uma jornada de 21 dias de fé inabalável que destravou as promessas de Deus.”',
    testimonial: 'A leitura e as meditações diárias de "Manifestação da Promessa" do pastor Sídio Jamal reacenderam a certeza de que Deus não mente. A cada dia fomos desafiados a perseverar em oração e a ver as bênçãos do Senhor se materializarem em nossa casa.',
    verifiedPurchase: true
  }
];

export const FOUNDER_DATA = {
  name: 'André Roberto',
  role: 'Fundador e Responsável pela Livraria Rito',
  quote: 'André Roberto é o fundador e responsável pela Livraria Rito. É um projeto criado com o propósito de facilitar o acesso a livros cristãos em Moçambique e promover obras de autores que edificam vidas.',
  bioExtended: 'Como líder, autor e visionário cristão moçambicano, André Roberto tem dedicado a sua trajetória ao fortalecimento da fé, do ensino bíblico e da comunhão no seio da igreja e da sociedade. Através da Livraria e Editora Rito, lidera uma iniciativa pioneira para democratizar a literatura cristã em todo o território nacional e no mundo de língua portuguesa.',
  pillars: [
    {
      title: 'Acesso Democrático à Literatura Cristã',
      description: 'Disponibilização rápida de obras formatadas em PDF para que qualquer leitor possa ler no seu smartphone ou computador.'
    },
    {
      title: 'Valorização de Autores Edificantes',
      description: 'Plataforma e serviços editoriais dedicados a promover escritores nacionais e títulos que trazem transformação espiritual.'
    },
    {
      title: 'O Pão do Céu para a Nossa Nação',
      description: 'Compromisso com o significado changana de “Rito” (Palavra), alimentando corações com a verdade do Evangelho.'
    }
  ]
};
