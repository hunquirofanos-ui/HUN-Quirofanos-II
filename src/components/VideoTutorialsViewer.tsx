import React, { useState, useMemo } from 'react';
import { 
  Play, 
  Pause, 
  Search, 
  Sliders, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Maximize2, 
  X, 
  FileVideo, 
  RotateCcw, 
  ArrowRight,
  ShieldAlert,
  ChevronRight,
  Filter
} from 'lucide-react';
import { OPERATING_TABLE_VIDEOS, TableVideoItem } from '../data/operatingTableVideos';
import { Language } from '../types/operatingRoom';

interface VideoTutorialsViewerProps {
  nightMode: boolean;
  language: Language;
  initialVideoId?: string;
  onNavigateToPreEntry?: () => void;
  onNavigateToUrology?: () => void;
  onNavigateToPositions?: () => void;
}

export const VideoTutorialsViewer: React.FC<VideoTutorialsViewerProps> = ({
  nightMode,
  language,
  initialVideoId,
  onNavigateToPreEntry,
  onNavigateToUrology,
  onNavigateToPositions
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'trauma' | 'urologia' | 'mesa_trusystem' | 'transfer'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeVideo, setActiveVideo] = useState<TableVideoItem>(() => {
    if (initialVideoId) {
      const found = OPERATING_TABLE_VIDEOS.find(v => v.id === initialVideoId);
      if (found) return found;
    }
    return OPERATING_TABLE_VIDEOS[0];
  });
  const [isFullscreenModal, setIsFullscreenModal] = useState(false);

  const filteredVideos = useMemo(() => {
    return OPERATING_TABLE_VIDEOS.filter((vid) => {
      const matchesCategory = selectedCategory === 'all' || vid.category === selectedCategory;
      if (!matchesCategory) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        vid.title.toLowerCase().includes(q) ||
        vid.titleEu.toLowerCase().includes(q) ||
        vid.summary.toLowerCase().includes(q) ||
        vid.summaryEu.toLowerCase().includes(q) ||
        vid.operatingRooms.toLowerCase().includes(q) ||
        vid.badge.toLowerCase().includes(q)
      );
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className={`p-4 sm:p-6 rounded-2xl border transition-colors ${
        nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wide">
              <FileVideo className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Vídeotutoriales de Mesa Quirúrgica · HUN Área General V' : 'Mahai Kirurgikoaren Bideotutorialak · NUO V. Eremu Orokorra'}</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1.5 leading-snug">
              {language === 'es' 
                ? 'Manejo Práctico de Mesa TruSystem 7500, Carros de Tracción y Perneras' 
                : 'TruSystem 7500 Mahaiaren, Trakzio Orgaren eta Hanka-Euskarrien Erabilera'}
            </h1>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-3xl leading-relaxed">
              {language === 'es' 
                ? '11 vídeos didácticos oficiales para celadores/as y enfermería de quirófano: montaje de mesa de hombro (silla de playa), conexión/desconexión y desbloqueo del carro de tracción, perneras de 4 piezas, postura de Pilé en urología, memorias de mando y transferencias seguras.' 
                : '11 bideo didaktiko ofizial zeladore eta erizaintzarentzat: sorbalda-mahaia (hondartza aulkia), trakzio-orgaren konexioa/deskonexioa eta desblokeatzea, 4 ataleko hanka-euskarriak, Pilé posizioa urologian, aginte memoriak eta transfer seguruak.'}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <span className="px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 font-bold text-xs">
              {OPERATING_TABLE_VIDEOS.length} {language === 'es' ? 'Vídeos Disponibles' : 'Bideo Eskuragarri'}
            </span>
          </div>
        </div>

        {/* Search & Category Tabs */}
        <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          <div className="relative w-full md:w-80 min-w-0">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'es' 
                ? "Buscar vídeo: 'hombro', 'tracción', 'perneras', 'mando'..." 
                : "Bilatu bideoa: 'sorbalda', 'trakzioa', 'hanka-eusk'..."}
              className={`w-full pl-9 pr-8 py-2 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                nightMode 
                  ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500' 
                  : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
              }`}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 md:pb-0 w-full md:w-auto scrollbar-none -mx-1 px-1 md:mx-0 md:px-0">
            {[
              { id: 'all', label: language === 'es' ? 'Todos los Vídeos' : 'Bideo Guztiak', count: OPERATING_TABLE_VIDEOS.length },
              { id: 'trauma', label: language === 'es' ? 'Traumatología (Q7-8)' : 'Traumatologia (Q7-8)', count: OPERATING_TABLE_VIDEOS.filter(v => v.category === 'trauma').length },
              { id: 'urologia', label: language === 'es' ? 'Urología & Perneras' : 'Urologia & Hanka-Eusk.', count: OPERATING_TABLE_VIDEOS.filter(v => v.category === 'urologia').length },
              { id: 'mesa_trusystem', label: language === 'es' ? 'Mando TruSystem' : 'TruSystem Agintea', count: OPERATING_TABLE_VIDEOS.filter(v => v.category === 'mesa_trusystem').length },
              { id: 'transfer', label: language === 'es' ? 'Transfer & Columna' : 'Transferra & Zutabea', count: OPERATING_TABLE_VIDEOS.filter(v => v.category === 'transfer').length }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors shrink-0 flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Video Active Player */}
      {activeVideo && (
        <div className={`p-4 sm:p-6 rounded-2xl border transition-colors ${
          nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Video Player */}
            <div className="lg:col-span-7 flex flex-col space-y-3">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-lg border border-slate-800">
                <video
                  key={activeVideo.videoUrl}
                  src={activeVideo.videoUrl}
                  controls
                  playsInline
                  autoPlay={false}
                  preload="metadata"
                  className="w-full h-full object-contain bg-black"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 px-1">
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>{language === 'es' ? 'Duración:' : 'Iraupena:'} {activeVideo.duration}</span>
                </span>
                <button
                  onClick={() => setIsFullscreenModal(true)}
                  className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center gap-1 transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>{language === 'es' ? 'Pantalla Completa' : 'Pantaila Osoa'}</span>
                </button>
              </div>
            </div>

            {/* Video Metadata & Clinical Steps */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-blue-600 text-white">
                    {language === 'es' ? activeVideo.badge : activeVideo.badgeEu}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    {language === 'es' ? activeVideo.operatingRooms : activeVideo.operatingRoomsEu}
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mt-1.5 leading-snug">
                  {language === 'es' ? activeVideo.title : activeVideo.titleEu}
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {language === 'es' ? activeVideo.summary : activeVideo.summaryEu}
                </p>
              </div>

              {/* Warning note if present */}
              {activeVideo.warningNote && (
                <div className="p-3 rounded-xl border border-red-300 dark:border-red-900/70 bg-red-50 dark:bg-red-950/30 flex items-start gap-2.5">
                  <ShieldAlert className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                  <p className="text-[11px] font-semibold text-red-800 dark:text-red-300 leading-snug">
                    {language === 'es' ? activeVideo.warningNote : activeVideo.warningNoteEu}
                  </p>
                </div>
              )}

              {/* Step by step checklist */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide block">
                  {language === 'es' ? 'Pasos clave del procedimiento:' : 'Prozeduraren funtsezko urratsak:'}
                </span>
                <div className="space-y-1.5 max-h-60 overflow-y-auto pr-1">
                  {(language === 'es' ? activeVideo.keySteps : activeVideo.keyStepsEu).map((step, idx) => (
                    <div 
                      key={idx}
                      className="p-2 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex items-start gap-2 text-xs"
                    >
                      <span className="w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-slate-700 dark:text-slate-300 leading-tight">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Navigation to Related Tabs */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 flex-wrap">
                {activeVideo.category === 'trauma' && onNavigateToPreEntry && (
                  <button
                    onClick={onNavigateToPreEntry}
                    className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <span>{language === 'es' ? 'Ver protocolo Traumatología en Mesa Pre-Entrada' : 'Ikusi Traumatologia protokoloa Aurre-Sarreran'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
                {activeVideo.category === 'urologia' && onNavigateToUrology && (
                  <button
                    onClick={onNavigateToUrology}
                    className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <span>{language === 'es' ? 'Ver Guía de Urología HUN B' : 'Ikusi NUO B Urologia Gida'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid of All Videos */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {language === 'es' ? 'Catálogo Completo de Vídeos' : 'Bideoen Katalogo Osoa'}
            </h3>
          </div>
          <span className="text-xs text-slate-500">
            {filteredVideos.length} {language === 'es' ? 'vídeos didácticos' : 'bideo didaktiko'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredVideos.map((video) => {
            const isCurrent = activeVideo?.id === video.id;
            return (
              <div
                key={video.id}
                onClick={() => {
                  setActiveVideo(video);
                  window.scrollTo({ top: 180, behavior: 'smooth' });
                }}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer group flex flex-col justify-between ${
                  isCurrent 
                    ? 'border-blue-500 ring-2 ring-blue-500/20 bg-blue-50/30 dark:bg-blue-950/20' 
                    : nightMode ? 'bg-slate-900 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-blue-300 shadow-2xs'
                }`}
              >
                <div>
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center">
                    <video
                      src={video.videoUrl}
                      preload="metadata"
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 ml-0.5 fill-current" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 text-white font-bold text-[10px] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-blue-400" />
                      <span>{video.duration}</span>
                    </span>
                    <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-blue-600/90 text-white font-extrabold text-[9px]">
                      {language === 'es' ? video.badge : video.badgeEu}
                    </span>
                  </div>

                  <div className="mt-2.5">
                    <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
                      {language === 'es' ? video.categoryLabel : video.categoryLabelEu}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white mt-0.5 leading-snug line-clamp-2">
                      {language === 'es' ? video.title : video.titleEu}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {language === 'es' ? video.summary : video.summaryEu}
                    </p>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">
                    {language === 'es' ? video.keySteps.length + ' pasos' : video.keyStepsEu.length + ' urrats'}
                  </span>
                  <span className="font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>{language === 'es' ? 'Reproducir' : 'Ikusi'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {isFullscreenModal && activeVideo && (
        <div 
          onClick={() => setIsFullscreenModal(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex items-center justify-center p-2 sm:p-6 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[95vh] flex flex-col rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl"
          >
            <div className="p-3 border-b border-slate-800 flex items-center justify-between text-white bg-slate-900">
              <span className="text-xs sm:text-sm font-bold truncate pr-3">
                {language === 'es' ? activeVideo.title : activeVideo.titleEu}
              </span>
              <button 
                onClick={() => setIsFullscreenModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 sm:p-4 bg-black flex items-center justify-center">
              <video
                src={activeVideo.videoUrl}
                controls
                autoPlay
                playsInline
                className="max-h-[80vh] w-auto max-w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
