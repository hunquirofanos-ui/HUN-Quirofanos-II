import React from 'react';
import { Users, Stethoscope, ArrowRight, Sliders, FileText, Video } from 'lucide-react';
import { Language } from '../types/operatingRoom';
import { TRANSLATIONS } from '../i18n/translations';

interface HeroSectionProps {
  onSearchClick: () => void;
  onPreEntryClick: () => void;
  onUrologyDocClick: () => void;
  onVideosClick?: () => void;
  nightMode: boolean;
  language: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearchClick,
  onPreEntryClick,
  onUrologyDocClick,
  onVideosClick,
  nightMode,
  language
}) => {
  const t = TRANSLATIONS[language];

  return (
    <div className={`border-b transition-colors ${
      nightMode ? 'bg-slate-950 border-slate-800' : 'bg-gradient-to-b from-blue-50/50 to-white border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main editorial presentation */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>{t.heroKicker}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white" style={{ textWrap: 'balance' }}>
              {t.heroHeadline}
            </h1>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {t.heroSubheadline}
            </p>

            {/* Principle block */}
            <div className={`p-4 rounded-xl border transition-colors ${
              nightMode 
                ? 'bg-slate-900/80 border-slate-800 text-slate-200' 
                : 'bg-white border-blue-100 shadow-sm text-slate-700'
            }`}>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wide text-blue-800 dark:text-blue-300">
                    {t.philosophyTitle}
                  </h2>
                  <p className="text-xs mt-1 text-slate-600 dark:text-slate-300 leading-normal">
                    {t.philosophyBody}
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onSearchClick}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors flex items-center gap-2"
              >
                <Stethoscope className="w-4 h-4" />
                <span>{t.btnSearchCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onUrologyDocClick}
                className="px-4 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm transition-colors flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>{language === 'es' ? 'Protocolo Urología HUN' : 'NUO Urologia Protokoloa'}</span>
              </button>

              <button
                onClick={onPreEntryClick}
                className={`px-4 py-2.5 text-sm font-semibold rounded-lg border transition-all flex items-center gap-2 ${
                  nightMode 
                    ? 'border-blue-700/80 bg-blue-950/60 text-blue-300 hover:bg-blue-900/60 shadow-sm' 
                    : 'border-blue-300 bg-blue-50 text-blue-900 hover:bg-blue-100 shadow-sm'
                }`}
              >
                <Sliders className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{t.btnPreEntryCta}</span>
              </button>

              {onVideosClick && (
                <button
                  onClick={onVideosClick}
                  className="px-4 py-2.5 text-sm font-semibold rounded-lg bg-red-600 hover:bg-red-700 text-white shadow-sm transition-colors flex items-center gap-2"
                >
                  <Video className="w-4 h-4" />
                  <span>{language === 'es' ? 'Vídeos TruSystem (11)' : 'TruSystem Bideoak (11)'}</span>
                </button>
              )}
            </div>
          </div>

          {/* Photographic visual card */}
          <div className="lg:col-span-5">
            <div className={`rounded-2xl border overflow-hidden shadow-sm transition-colors ${
              nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <div className="relative aspect-video w-full overflow-hidden bg-slate-800">
                <img
                  src="/assets/aistudio/CHN_Navarra_728_5e3ef281.png"
                  alt="Quirófano Central II & Quirófano de Urgencias II Hospital Universitario de Navarra"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-600/90 text-white inline-block mb-1">
                      {t.pavilionName}
                    </span>
                    <p className="text-sm font-bold">
                      {language === 'es' ? '8 Quirófanos de Cirugía General y Especializada' : '8 Ebakigela Kirurgia Orokor zein Espezializatuan'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Fast Room Directory Strip */}
              <div className="p-4 grid grid-cols-2 gap-2 text-xs divide-y sm:divide-y-0 divide-slate-100 dark:divide-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span>Q1: {language === 'es' ? 'Urgencias (24h)' : 'Larrialdiak (24h)'}</span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 pl-3">
                    {language === 'es' ? 'Celador rotado permanente' : 'Txandako zeladore iraunkorra'}
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                    <span>Q2: Otorrino (ORL)</span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 pl-3">Microscopio · Rose</p>
                </div>

                <div className="space-y-1 pt-2 sm:pt-0">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    <span>Q3 - Q4: {language === 'es' ? 'Oftalmología' : 'Oftalmologia'}</span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 pl-3">Cataratas & Retina</p>
                </div>

                <div className="space-y-1 pt-2 sm:pt-0">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    <span>Q5 - Q6: {language === 'es' ? 'Urología' : 'Urologia'}</span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 pl-3">
                    {language === 'es' ? 'RTU · Pilé · Topes (Mueble int.)' : 'RTU · Pilé · Topak (Barruko altz.)'}
                  </p>
                </div>

                <div className="col-span-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span>Q7 - Q8: {language === 'es' ? 'Traumatología' : 'Traumatologia'}</span>
                    </div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Silla Playa · Tracción · RX C-arm
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
