import React, { useState, useRef } from 'react';
import { 
  FileText, 
  ExternalLink, 
  Sliders, 
  CheckCircle2, 
  Image as ImageIcon,
  Sparkles,
  Play,
  Video,
  AlertTriangle,
  RotateCcw,
  Compass,
  ArrowRight,
  Maximize2,
  ZoomIn,
  Eye,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { 
  UROLOGY_PDF_URL, 
  UROLOGY_PILE_VIDEO_URL,
  UROLOGY_PILE_VIDEO_DATA,
  UROLOGY_FIGURES, 
  UROLOGY_SECTIONS, 
  UROLOGY_FIGURES_IMAGE_MAP,
  UrologyFigure 
} from '../data/urologyHunOfficialDoc';
import { Language } from '../types/operatingRoom';
import { TRANSLATIONS } from '../i18n/translations';

interface UrologyDocumentViewerProps {
  nightMode: boolean;
  language: Language;
  onNavigateToSearchWithFilter?: (surgeryFilter: string) => void;
}

export const UrologyDocumentViewer: React.FC<UrologyDocumentViewerProps> = ({
  nightMode,
  language,
  onNavigateToSearchWithFilter
}) => {
  const t = TRANSLATIONS[language];
  const [selectedSectionId, setSelectedSectionId] = useState<string>('decubito_lateral_urologia');
  const [activeFigure, setActiveFigure] = useState<UrologyFigure | null>(UROLOGY_FIGURES[0]);
  const [figureCategoryFilter, setFigureCategoryFilter] = useState<string>('all');
  const [lightboxFigure, setLightboxFigure] = useState<UrologyFigure | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentSection = UROLOGY_SECTIONS.find(s => s.id === selectedSectionId) || UROLOGY_SECTIONS[0];

  const filteredFigures = UROLOGY_FIGURES.filter(fig => {
    if (figureCategoryFilter === 'all') return true;
    return fig.category === figureCategoryFilter;
  });

  const scrollToVideo = () => {
    const el = document.getElementById('urology-pile-video-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  const openLightboxByFigureId = (figId: string) => {
    const fig = UROLOGY_FIGURES.find(f => f.id === figId);
    if (fig) {
      setLightboxFigure(fig);
      setActiveFigure(fig);
    }
  };

  const handleNextLightbox = () => {
    if (!lightboxFigure) return;
    const currentIndex = UROLOGY_FIGURES.findIndex(f => f.id === lightboxFigure.id);
    const nextIndex = (currentIndex + 1) % UROLOGY_FIGURES.length;
    setLightboxFigure(UROLOGY_FIGURES[nextIndex]);
    setActiveFigure(UROLOGY_FIGURES[nextIndex]);
  };

  const handlePrevLightbox = () => {
    if (!lightboxFigure) return;
    const currentIndex = UROLOGY_FIGURES.findIndex(f => f.id === lightboxFigure.id);
    const prevIndex = (currentIndex - 1 + UROLOGY_FIGURES.length) % UROLOGY_FIGURES.length;
    setLightboxFigure(UROLOGY_FIGURES[prevIndex]);
    setActiveFigure(UROLOGY_FIGURES[prevIndex]);
  };

  return (
    <div className="space-y-6">
      {/* Top Document Header Banner */}
      <div className={`p-6 rounded-2xl border transition-colors ${
        nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>HUN Área General V · Quirófano 5 & Quirófano 6 (Urología)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              {t.urologyDocTitle}
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              {t.urologyDocSubtitle}
            </p>
          </div>

          {/* Action buttons: Open PDF directly & Jump to Video */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={scrollToVideo}
              className="px-4 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition-colors flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>{language === 'es' ? 'Ver Video Tutorial Pilé' : 'Ikusi Pilé Bideo-Tutoriala'}</span>
            </button>

            <a
              href={UROLOGY_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2.5 text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{t.viewOriginalPdf}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Video Tutorial Section: Pilé en TruSystem 7500 */}
      <div 
        id="urology-pile-video-section"
        className={`p-6 rounded-2xl border transition-colors ${
          nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-blue-100 shadow-sm'
        }`}
      >
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 flex items-center justify-center shadow-2xs">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-600 text-white uppercase tracking-wider">
                  {language === 'es' ? 'Video Oficial de Quirófano HUN' : 'NUO Ebakigelako Bideo Ofiziala'}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {UROLOGY_PILE_VIDEO_DATA.tableModel}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                {language === 'es' ? UROLOGY_PILE_VIDEO_DATA.title : UROLOGY_PILE_VIDEO_DATA.titleEu}
              </h3>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
          {language === 'es' ? UROLOGY_PILE_VIDEO_DATA.description : UROLOGY_PILE_VIDEO_DATA.descriptionEu}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Real Video Player */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden bg-black aspect-video shadow-md border border-slate-700">
              <video
                ref={videoRef}
                src={UROLOGY_PILE_VIDEO_URL}
                controls
                preload="metadata"
                className="w-full h-full object-contain"
                playsInline
              >
                Tu navegador no soporta la reproducción de video HTML5.
              </video>
            </div>
            <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-500">
              <span>Pilé.mp4 · Mando SensorLine TruSystem 7500</span>
              <a 
                href={UROLOGY_PILE_VIDEO_URL} 
                download="Pile_HUN_Urologia.mp4"
                className="hover:text-blue-600 transition-colors font-semibold"
              >
                {language === 'es' ? 'Descargar Video MP4' : 'Deskargatu MP4 Bideoa'}
              </a>
            </div>
          </div>

          {/* Interactive Tutorial Guide Points */}
          <div className="lg:col-span-5 space-y-3">
            {UROLOGY_PILE_VIDEO_DATA.keyInstructions.map((step, idx) => (
              <div
                key={idx}
                className={`p-3.5 rounded-xl border text-xs transition-colors ${
                  idx === 1 
                    ? 'border-amber-300 dark:border-amber-800 bg-amber-50/60 dark:bg-amber-950/20 text-amber-950 dark:text-amber-100'
                    : nightMode ? 'bg-slate-950/50 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'
                }`}
              >
                <div className="flex items-center gap-2 font-bold mb-1">
                  {idx === 1 ? (
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  ) : idx === 2 ? (
                    <RotateCcw className="w-4 h-4 text-blue-600 shrink-0" />
                  ) : idx === 3 ? (
                    <Compass className="w-4 h-4 text-blue-600 shrink-0" />
                  ) : (
                    <Sliders className="w-4 h-4 text-blue-600 shrink-0" />
                  )}
                  <span>{language === 'es' ? step.title : step.titleEu}</span>
                </div>
                <p className="leading-relaxed pl-6 text-slate-600 dark:text-slate-300">
                  {language === 'es' ? step.detail : step.detailEu}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Sections Tab Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {UROLOGY_SECTIONS.map((sec) => (
          <button
            key={sec.id}
            onClick={() => {
              setSelectedSectionId(sec.id);
              // Set appropriate first figure for this section
              if (sec.id === 'decubito_lateral_urologia') setActiveFigure(UROLOGY_FIGURES[0]);
              else if (sec.id === 'litotomia_urologia') setActiveFigure(UROLOGY_FIGURES[11]); // Fig 12
              else if (sec.id === 'trendelenburg_urologia') setActiveFigure(UROLOGY_FIGURES[19]); // Fig 20
              else if (sec.id === 'otras_posiciones_urologia') setActiveFigure(UROLOGY_FIGURES[17]); // Fig 18
            }}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs whitespace-nowrap transition-all shadow-2xs ${
              selectedSectionId === sec.id
                ? 'bg-blue-600 text-white'
                : nightMode 
                  ? 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800' 
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {language === 'es' ? sec.title : sec.titleEu}
          </button>
        ))}
      </div>

      {/* Section Content & Figure Explorer Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Section Details & Step-by-Step with PHOTOS INSTEAD OF FIG */}
        <div className="lg:col-span-7 space-y-5">
          <div className={`p-6 rounded-2xl border transition-colors ${
            nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {language === 'es' ? currentSection.title : currentSection.titleEu}
            </h3>

            {/* Applicable Interventions */}
            <div className="mt-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                {language === 'es' ? 'Cirugías que aplican este protocolo:' : 'Protokolo hau aplikatzen duten ebakuntzak:'}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {(language === 'es' ? currentSection.interventions : currentSection.interventionsEu).map((int, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-blue-900 dark:text-blue-300 font-medium"
                  >
                    {int}
                  </span>
                ))}
              </div>
            </div>

            {/* Summary */}
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-4 leading-relaxed p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800">
              {language === 'es' ? currentSection.summary : currentSection.summaryEu}
            </p>

            {/* Step-by-step Methodology with REAL PHOTOS INLINE */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-blue-600" />
                  <span>{t.stepByStepProtocol}</span>
                </h4>
                <span className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold">
                  {language === 'es' ? 'Fotografías clínicas oficiales HUN B' : 'NUO B argazki kliniko ofizialak'}
                </span>
              </div>

              <div className="space-y-4">
                {currentSection.stepByStep.map((st) => (
                  <div
                    key={st.order}
                    className={`p-4 rounded-xl border transition-colors space-y-3 ${
                      st.important
                        ? 'border-blue-300 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20'
                        : nightMode ? 'bg-slate-950/40 border-slate-800' : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        {st.order}
                      </span>
                      <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-medium flex-1">
                        {language === 'es' ? st.text : st.textEu}
                      </p>
                    </div>

                    {/* PHOTOS corresponding to this step */}
                    {st.figures.length > 0 && (
                      <div className="pl-9 pt-1">
                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5 text-blue-600" />
                          <span>{language === 'es' ? 'Fotos correspondientes al paso:' : 'Urratsari dagozkion argazkiak:'}</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {st.figures.map((figId) => {
                            const figData = UROLOGY_FIGURES.find(f => f.id === figId);
                            const mapData = UROLOGY_FIGURES_IMAGE_MAP[figId];
                            const imgSrc = figData?.imageSrc || mapData?.imageSrc;
                            const title = figData ? (language === 'es' ? figData.title : figData.titleEu) : (mapData ? (language === 'es' ? mapData.title : mapData.titleEu) : figId);
                            if (!imgSrc) return null;

                            return (
                              <div
                                key={figId}
                                onClick={() => openLightboxByFigureId(figId)}
                                className={`group relative rounded-xl border overflow-hidden cursor-pointer transition-all hover:ring-2 hover:ring-blue-500 ${
                                  activeFigure?.id === figId
                                    ? 'ring-2 ring-blue-600 border-blue-500 shadow-sm'
                                    : nightMode ? 'bg-slate-900 border-slate-700' : 'bg-slate-100 border-slate-200'
                                }`}
                              >
                                <div className="aspect-video w-full overflow-hidden bg-slate-950 relative">
                                  <img
                                    src={imgSrc}
                                    alt={`${figId} - ${title}`}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-blue-600/95 text-white font-extrabold text-[10px] shadow-sm tracking-wide">
                                    {figId}
                                  </span>
                                  <span className="absolute top-2 right-2 p-1 rounded-md bg-black/60 text-white backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ZoomIn className="w-3.5 h-3.5" />
                                  </span>
                                </div>
                                <div className="p-2.5">
                                  <p className="text-[11px] font-semibold text-slate-800 dark:text-slate-200 line-clamp-1">
                                    {title}
                                  </p>
                                  <span className="text-[10px] text-blue-600 dark:text-blue-400 font-medium inline-flex items-center gap-1 mt-0.5">
                                    <span>{language === 'es' ? 'Ver foto ampliada' : 'Ikusi argazki handitua'}</span>
                                    <ArrowRight className="w-2.5 h-2.5" />
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Checks for celadores & nursing */}
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{t.safetyChecksTitle}</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {(language === 'es' ? currentSection.safetyChecks : currentSection.safetyChecksEu).map((check, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold shrink-0">✓</span>
                    <span>{check}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Figure Inspector with Real Photography & Required Accessories */}
        <div className="lg:col-span-5 space-y-5">
          {/* Active Figure Inspector with REAL PHOTOGRAPHY */}
          {activeFigure && (
            <div className={`p-5 rounded-2xl border transition-colors ${
              nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-blue-600 text-white font-extrabold text-xs shadow-2xs">
                    {activeFigure.id}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {activeFigure.category}
                  </span>
                </div>
                <button
                  onClick={() => setLightboxFigure(activeFigure)}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-bold flex items-center gap-1"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>{language === 'es' ? 'Pantalla Completa' : 'Pantaila Osoa'}</span>
                </button>
              </div>

              {/* REAL CLINICAL PHOTOGRAPH */}
              <div 
                className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800 cursor-pointer group shadow-sm"
                onClick={() => setLightboxFigure(activeFigure)}
              >
                <img
                  src={activeFigure.imageSrc}
                  alt={`${activeFigure.id} - ${activeFigure.title}`}
                  className="w-full max-h-72 object-contain bg-slate-950 transition-transform duration-300 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1.5 opacity-90 group-hover:opacity-100">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>{language === 'es' ? 'Ampliar' : 'Handitu'}</span>
                </div>
              </div>

              <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-3.5">
                {language === 'es' ? activeFigure.title : activeFigure.titleEu}
              </h4>

              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {language === 'es' ? activeFigure.description : activeFigure.descriptionEu}
              </p>

              <div className="mt-3.5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">
                  {language === 'es' ? 'Archivo oficial HUN B Urología' : 'NUO B Urologia artxibo ofiziala'}
                </span>
                <a
                  href={UROLOGY_PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                >
                  <span>{language === 'es' ? 'Ver en PDF' : 'PDFan Ikusi'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}

          {/* Quick Accessories required for this section */}
          <div className={`p-5 rounded-2xl border transition-colors ${
            nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>{t.requiredAccessoriesTitle}</span>
            </h4>

            <div className="space-y-2.5">
              {currentSection.accessoriesRequired.map((acc, idx) => {
                const mapData = acc.figure ? UROLOGY_FIGURES_IMAGE_MAP[acc.figure] : null;
                return (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                          {language === 'es' ? acc.name : acc.nameEu}
                        </span>
                        {acc.figure && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 shrink-0">
                            {acc.figure}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                        {language === 'es' ? acc.note : acc.noteEu}
                      </p>
                    </div>

                    {mapData && (
                      <button
                        onClick={() => acc.figure && openLightboxByFigureId(acc.figure)}
                        className="w-12 h-10 rounded-lg overflow-hidden shrink-0 border border-slate-300 dark:border-slate-700 relative group hover:ring-2 hover:ring-blue-500 transition-all"
                        title={language === 'es' ? `Ver foto de ${acc.figure}` : `Ikusi ${acc.figure} argazkia`}
                      >
                        <img 
                          src={mapData.imageSrc} 
                          alt={acc.figure} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                        />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Rule HUN B note */}
            <div className="mt-4 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 text-xs text-amber-900 dark:text-amber-200">
              <strong>{language === 'es' ? 'Regla oficial Quirófanos 5 y 6: ' : 'NUO 5 eta 6 Ebakigeletako araua: '}</strong>
              {language === 'es' 
                ? 'Todos los accesorios se dejan en el mueble DENTRO de quirófano. El personal de limpieza desinfecta TODOS los accesorios allí.' 
                : 'Osagarri guztiak ebakigelako BARRUKO altzarian uzten dira. Garbiketa langileek bertan desinfektatzen dituzte.'}
            </div>
          </div>
        </div>
      </div>

      {/* Complete Interactive 20-Figure Gallery Browser WITH REAL PHOTOS */}
      <div className={`p-6 rounded-2xl border transition-colors ${
        nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-blue-600" />
              <span>{t.figuresTitle}</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {language === 'es' 
                ? 'Todas las 20 figuras con sus fotografías oficiales del Hospital Universitario de Navarra.' 
                : '20 irudi guztiak Nafarroako Unibertsitate Ospitaleko argazki ofizialekin.'}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 no-scrollbar">
            {['all', 'topes', 'mesa', 'perneras', 'proteccion', 'posicion'].map(cat => (
              <button
                key={cat}
                onClick={() => setFigureCategoryFilter(cat)}
                className={`px-2.5 py-1 text-[11px] font-semibold rounded-md capitalize transition-colors ${
                  figureCategoryFilter === cat
                    ? 'bg-blue-600 text-white font-bold'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                {cat === 'all' ? (language === 'es' ? 'Todas' : 'Guztiak') : cat}
              </button>
            ))}
          </div>
        </div>

        {/* 20-Figure Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredFigures.map((fig) => {
            const isCurrent = activeFigure?.id === fig.id;
            return (
              <div
                key={fig.id}
                onClick={() => {
                  setActiveFigure(fig);
                  setLightboxFigure(fig);
                }}
                className={`p-3 rounded-2xl border text-left cursor-pointer transition-all group ${
                  isCurrent
                    ? 'ring-2 ring-blue-600 bg-blue-50/60 dark:bg-blue-950/40 border-blue-400 shadow-sm'
                    : nightMode ? 'bg-slate-950/60 border-slate-800 hover:border-slate-700' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Photo Thumbnail */}
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 mb-2.5 border border-slate-200 dark:border-slate-800">
                  <img
                    src={fig.imageSrc}
                    alt={`${fig.id} - ${fig.title}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-blue-600/95 text-white font-extrabold text-[10px] shadow-sm tracking-wide">
                    {fig.id}
                  </span>
                  <span className="absolute top-2 right-2 p-1 rounded-md bg-black/60 text-white backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-blue-600 dark:text-blue-400 uppercase font-bold">
                    {fig.category}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">HUN B</span>
                </div>

                <h5 className="text-xs font-bold text-slate-900 dark:text-white mt-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {language === 'es' ? fig.title : fig.titleEu}
                </h5>

                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                  {language === 'es' ? fig.description : fig.descriptionEu}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* High-Resolution Photo Lightbox Modal */}
      {lightboxFigure && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in"
          onClick={() => setLightboxFigure(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950/80">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-lg bg-blue-600 text-white font-extrabold text-sm shadow-sm">
                  {lightboxFigure.id}
                </span>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white line-clamp-1">
                    {language === 'es' ? lightboxFigure.title : lightboxFigure.titleEu}
                  </h4>
                  <span className="text-xs text-slate-400 uppercase tracking-wider">
                    {lightboxFigure.category} · Quirófano Central HUN B
                  </span>
                </div>
              </div>
              <button
                onClick={() => setLightboxFigure(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Cerrar visor"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative flex-1 bg-black flex items-center justify-center p-2 sm:p-4 overflow-hidden min-h-[300px] max-h-[60vh]">
              <img
                src={lightboxFigure.imageSrc}
                alt={`${lightboxFigure.id} - ${lightboxFigure.title}`}
                className="max-w-full max-h-[58vh] object-contain rounded-lg"
              />

              {/* Prev / Next buttons */}
              <button
                onClick={handlePrevLightbox}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-slate-700 transition-colors"
                title="Figura anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextLightbox}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-slate-700 transition-colors"
                title="Siguiente figura"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Footer with Clinical Description */}
            <div className="p-4 bg-slate-950/90 border-t border-slate-800 space-y-2">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {language === 'es' ? lightboxFigure.description : lightboxFigure.descriptionEu}
              </p>
              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <span>Hospital Universitario de Navarra · Área General V · Quirófano Central II</span>
                <span className="text-blue-400 font-medium">
                  {lightboxFigure.figureNumber} de {UROLOGY_FIGURES.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
