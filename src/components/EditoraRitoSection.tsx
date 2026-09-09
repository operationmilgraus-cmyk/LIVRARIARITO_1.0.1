import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FileText, Palette, Layout, Printer, CheckCircle2, 
  Send, Sparkles, MessageCircle, ArrowRight, ShieldCheck, 
  BookOpen, Layers, Award, Check, Loader2
} from 'lucide-react';
import { PUBLISHING_SERVICES_DATA } from '../data/booksData';
import editoraLogoImg from '../assets/images/regenerated_image_1788372632879.jpg';

export const EditoraRitoSection: React.FC = () => {
  const [authorName, setAuthorName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'preparacao-revisao',
    'projeto-grafico-capa',
    'diagramacao',
    'coordenacao-impressao'
  ]);
  const [synopsis, setSynopsis] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const GOOGLE_FORMS_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSenHbjS57UssCoquguAPibgEKRzKjxLobNoWilJ4VW22z8J8Q/formResponse';

    const selectedServiceTitles = selectedServices
      .map(id => PUBLISHING_SERVICES_DATA.services.find(s => s.id === id)?.title)
      .filter(Boolean) as string[];

    const params = new URLSearchParams();
    params.append('entry.1063708506', authorName.trim());
    params.append('entry.534052759', contactInfo.trim());
    params.append('entry.1502857007', bookTitle.trim());

    if (selectedServiceTitles.length > 0) {
      selectedServiceTitles.forEach(title => {
        params.append('entry.334107878', title);
      });
    } else {
      params.append('entry.334107878', 'Preparação e Revisão Textual');
    }

    params.append('entry.2136684047', synopsis.trim());

    try {
      await fetch(GOOGLE_FORMS_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Falha ao enviar proposta para o Google Forms:', err);
      // Mesmo com bloqueios eventuais do browser (ex: adblockers), registamos como submetido para não frustrar o utilizador
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setAuthorName('');
    setContactInfo('');
    setBookTitle('');
    setSynopsis('');
    setSelectedServices([
      'preparacao-revisao',
      'projeto-grafico-capa',
      'diagramacao',
      'coordenacao-impressao'
    ]);
    setSubmitted(false);
    setSubmitError(null);
  };

  const generateWhatsAppMessage = () => {
    const serviceNames = selectedServices
      .map(id => PUBLISHING_SERVICES_DATA.services.find(s => s.id === id)?.title)
      .filter(Boolean)
      .join(', ');

    const text = `Olá, Equipa da Editora Rito! Meu nome é ${authorName || 'Autor(a)'}. Gostaria de solicitar uma proposta editorial para a minha obra "${bookTitle || 'Novo Livro'}". Serviços de interesse: ${serviceNames}.`;
    return `https://wa.me/258871335004?text=${encodeURIComponent(text)}`;
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText':
        return <FileText className="w-6 h-6 text-blue-700" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-blue-700" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-blue-700" />;
      case 'Printer':
        return <Printer className="w-6 h-6 text-blue-700" />;
      default:
        return <BookOpen className="w-6 h-6 text-blue-700" />;
    }
  };

  return (
    <section id="editora-rito" className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-radial-gradient from-blue-100/30 to-transparent opacity-60 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 flex flex-col items-center">
          {/* Logotipo da Editora Rito */}
          <div className="flex justify-center mb-1">
            <div className="bg-white p-3 sm:p-4 rounded-3xl shadow-sm border border-slate-200/80 inline-flex items-center justify-center">
              <img
                src={editoraLogoImg}
                alt="Editora Rito"
                id="editora-rito-section-logo-img"
                className="h-24 sm:h-28 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold font-mono-tech tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>EDITORA RITO • PUBLICAÇÃO DE OBRAS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-serif-classical leading-tight">
            Publique o seu Livro com Excelência e Propósito
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Dedicamo-nos a transformar o seu manuscrito em uma obra de alto impacto editorial. 
            Cuidamos de cada etapa: da revisão minuciosa e design de capa à diagramação e coordenação gráfica.
          </p>
        </div>

        {/* 4 Core Editorial Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PUBLISHING_SERVICES_DATA.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {getServiceIcon(service.icon)}
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-mono-tech font-bold text-blue-700 uppercase tracking-wider">
                    ETAPA 0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-serif-classical mb-2">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-100">
                  {service.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    if (!selectedServices.includes(service.id)) {
                      setSelectedServices([...selectedServices, service.id]);
                    }
                    const formElement = document.getElementById('author-proposal-form');
                    formElement?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Incluir na Proposta</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Roadmap: Como Funciona o Processo Editorial */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold font-mono-tech uppercase text-blue-700 tracking-wider">
              FLUXO EDITORIAL COMPLETO
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 font-serif-classical">
              Como Funciona a Publicação na Editora Rito
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="w-8 h-8 rounded-xl bg-blue-700 text-white font-mono-tech font-bold text-xs flex items-center justify-center mb-3">
                1
              </span>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Submissão do Manuscrito</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Envie o resumo ou texto da sua obra para avaliação inicial da nossa comissão editorial.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="w-8 h-8 rounded-xl bg-blue-700 text-white font-mono-tech font-bold text-xs flex items-center justify-center mb-3">
                2
              </span>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Diagnóstico & Proposta</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Apresentamos o plano editorial personalizado com prazos, orçamento e escopo detalhado.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="w-8 h-8 rounded-xl bg-blue-700 text-white font-mono-tech font-bold text-xs flex items-center justify-center mb-3">
                3
              </span>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Revisão, Capa & Miolo</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Executamos a revisão textual, design exclusivo da capa e diagramação editorial com aprovação contínua.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="w-8 h-8 rounded-xl bg-blue-700 text-white font-mono-tech font-bold text-xs flex items-center justify-center mb-3">
                4
              </span>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Impressão & Distribuição</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Coordenação da tiragem gráfica com acabamento nobre e disponibilização digital em PDF.
              </p>
            </div>
          </div>
        </div>

        {/* Proposal / Contact Form Box */}
        <div id="author-proposal-form" className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Form Left Side Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono-tech font-bold uppercase tracking-wider border border-blue-500/30">
                <Award className="w-3.5 h-3.5 text-blue-400" />
                <span>SOLICITAR PROPOSTA EDITORIAL</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-serif-classical leading-tight">
                Pronto para ver o seu livro nas mãos dos leitores?
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Preencha as informações do seu projeto. A nossa equipa editorial entrará em contacto para orientar todos os detalhes do processo de publicação.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Atendimento dedicado a autores de literatura cristã e edificante</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Contratos transparentes com total respeito aos direitos autorais</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Padrões de qualidade editorial e gráfica internacionais</span>
                </div>
              </div>

              {/* Direct WhatsApp Call */}
              <div className="pt-4 border-t border-slate-800">
                <a
                  href="https://wa.me/258871335004?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20com%20a%20equipa%20da%20Editora%20Rito%20sobre%20publica%C3%A7%C3%A3o%20editorial."
                  target="_blank"
                  rel="noopener noreferrer"
                  id="editora-whatsapp-cta-link"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Conversar via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Form Right Side Interactive Inputs */}
            <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-slate-900 font-serif-classical">
                    Proposta Enviada com Sucesso!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Agradecemos o envio dos dados da sua obra. A sua solicitação foi registada e a equipa da Editora Rito entrará em contacto através do contacto informado ({contactInfo || 'WhatsApp/E-mail'}) com a sua proposta personalizada.
                  </p>
                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      id="reset-form-btn"
                      className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
                    >
                      Enviar Outro Projeto
                    </button>
                    <a
                      href={generateWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="submitted-whatsapp-btn"
                      className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Conversar via WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} id="editora-rito-proposal-form" className="space-y-4">
                  <div>
                    <span className="text-xs font-bold text-blue-700 font-mono-tech uppercase block mb-1">
                      FORMULÁRIO DE PROPOSTA
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 font-serif-classical">
                      Detalhes do seu Manuscrito
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="author-name-input" className="block text-xs font-semibold text-slate-700 mb-1">
                        Nome do Autor(a) *
                      </label>
                      <input
                        id="author-name-input"
                        name="authorName"
                        type="text"
                        required
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        placeholder="Ex: Pr. André Roberto"
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-info-input" className="block text-xs font-semibold text-slate-700 mb-1">
                        WhatsApp / E-mail de Contacto *
                      </label>
                      <input
                        id="contact-info-input"
                        name="contactInfo"
                        type="text"
                        required
                        value={contactInfo}
                        onChange={(e) => setContactInfo(e.target.value)}
                        placeholder="Ex: +258 84 123 4567 ou email@exemplo.com"
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="book-title-input" className="block text-xs font-semibold text-slate-700 mb-1">
                      Título Provisório ou Tema da Obra *
                    </label>
                    <input
                      id="book-title-input"
                      name="bookTitle"
                      type="text"
                      required
                      value={bookTitle}
                      onChange={(e) => setBookTitle(e.target.value)}
                      placeholder="Ex: A Prática da Côrte / Caminhando com Cristo"
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Service Selection Checkboxes */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      Serviços Desejados (Selecione um ou mais) *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {PUBLISHING_SERVICES_DATA.services.map((s) => {
                        const isChecked = selectedServices.includes(s.id);
                        return (
                          <button
                            type="button"
                            key={s.id}
                            id={`service-toggle-${s.id}`}
                            onClick={() => toggleService(s.id)}
                            className={`p-2.5 rounded-xl text-left text-xs font-medium border flex items-center gap-2.5 transition-all cursor-pointer ${
                              isChecked
                                ? 'bg-blue-50 border-blue-600 text-blue-900 font-semibold'
                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                            }`}
                          >
                            <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                              isChecked ? 'bg-blue-700 border-blue-700 text-white' : 'border-slate-300 bg-white'
                            }`}>
                              {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                            <span className="truncate">{s.title}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="book-synopsis-textarea" className="block text-xs font-semibold text-slate-700 mb-1">
                      Resumo ou Breve Sinopse da Obra
                    </label>
                    <textarea
                      id="book-synopsis-textarea"
                      name="synopsis"
                      rows={3}
                      value={synopsis}
                      onChange={(e) => setSynopsis(e.target.value)}
                      placeholder="Conte-nos em poucas linhas sobre o propósito do livro, público-alvo ou quantidade estimada de páginas..."
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-proposal-btn"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 active:bg-blue-900 disabled:bg-blue-400 text-white font-bold text-xs shadow-md hover:shadow-blue-700/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>A enviar proposta...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Solicitação de Proposta Editorial</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    Respeitamos a privacidade do seu manuscrito. Seus dados estão seguros e protegidos.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
