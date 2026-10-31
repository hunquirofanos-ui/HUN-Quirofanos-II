import React, { useState } from 'react';
import { 
  Stethoscope, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  ShieldAlert, 
  Eye, 
  X, 
  Zap, 
  Activity, 
  ChevronRight,
  Maximize2,
  Plug,
  Briefcase,
  Layers,
  ArrowRight
} from 'lucide-react';
import { ORL_EQUIPMENT_LIST, ORL_GENERAL_RULES, OrlEquipmentItem } from '../data/orlEquipmentData';
import { Language } from '../types/operatingRoom';

interface OrlEquipmentSectionProps {
  nightMode: boolean;
  language: Language;
  onBackToOrl?: () => void;
}

export const OrlEquipmentSection: React.FC<OrlEquipmentSectionProps> = ({
  nightMode,
  language,
  onBackToOrl
}) => {
  const [selectedPhotoModal, setSelectedPhotoModal] = useState<{ src: string; alt: string; name: string } | null>(null);
  const [selectedItemTab, setSelectedItemTab] = useState<string>('all');

  const filteredItems = selectedItemTab === 'all' 
    ? ORL_EQUIPMENT_LIST 
    : ORL_EQUIPMENT_LIST.filter(item => item.id === selectedItemTab);

  return (
    <div className="space-y-6 pb-10">
      {/* Top Banner */}
      <div className={`p-6 sm:p-8 rounded-3xl border transition-colors ${
        nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100/90 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
              <Stethoscope className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              <span>{language === 'es' ? 'Guía Oficial HUN · Quirófano 2' : 'NUO Gida Ofiziala · 2. Ebakigela'}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              {language === 'es' ? 'Aparataje Específico de ORL' : 'ORLeko Tresneria Espezifikoa'}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              {language === 'es'
                ? 'Catálogo técnico y operativo con los 8 equipos específicos de Otorrinolaringología del HUN: fotografías reales, funciones clínicas, cometidos del celador de dentro/fuera y advertencias de seguridad.'
                : 'NUOko Otorrinolaringologiako 8 ekipo espezifikoen katalogo tekniko eta operatiboa: benetako argazkiak, funtzio klinikoak, zeladorearen zereginak eta segurtasun-oharrak.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto shrink-0">
            {onBackToOrl && (
              <button
                onClick={onBackToOrl}
                className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 transition-colors flex items-center gap-1.5"
              >
                <span>{language === 'es' ? '← Volver a Q2 ORL' : '← Itzuli Q2 ORLera'}</span>
              </button>
            )}
            <span className="px-3 py-1.5 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-900 text-sky-700 dark:text-sky-300 font-bold text-xs">
              {language === 'es' ? '8 Equipos Identificados' : 'Identifikatutako 8 Ekipo'}
            </span>
          </div>
        </div>
      </div>

      {/* CRITICAL WARNING BANNER (Enfermería de Anestesia consultation required) */}
      <div className={`p-5 rounded-2xl border transition-all ${
        nightMode 
          ? 'bg-rose-950/40 border-rose-800/80 text-rose-200' 
          : 'bg-rose-50 border-rose-300 text-rose-950 shadow-2xs'
      }`}>
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
            <ShieldAlert className="w-6 h-6 animate-pulse" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-black tracking-tight text-rose-900 dark:text-rose-200 uppercase">
              {language === 'es' 
                ? 'PRECAUCIÓN CRUCIAL EN MESA QUIRÚRGICA TRUMPF' 
                : 'MAHAI KIRURGIKOAREN PREKAUZIO OHARRA'}
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-rose-800 dark:text-rose-300">
              {language === 'es'
                ? 'Ante cualquier cambio de tramos de mesa (cabeceros de cuernos, de herradura o plano) o retirada de cualquier accesorio (incluido portasueros), el personal celador debe CONSULTAR PREVIAMENTE con el personal de Enfermería de Anestesia antes de intervenir.'
                : 'Mahaiaren zatiak aldatu aurretik (adarrak, ferra edo buru-euskarri laua) edo edozein osagarri kendu aurretik (serum-euskarria barne), zeladoreak BETI Anestesiako Erizaintzari galdetu behar dio lehendabizi.'}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Nav Chips for the 8 equipment items */}
      <div className="flex overflow-x-auto gap-2 pb-2 no-scrollbar">
        <button
          onClick={() => setSelectedItemTab('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 border ${
            selectedItemTab === 'all'
              ? 'bg-sky-600 text-white border-sky-600 shadow-2xs'
              : nightMode
                ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-2xs'
          }`}
        >
          {language === 'es' ? 'Ver Todos (8 Equipos)' : 'Guztiak Ikusi (8 Ekipo)'}
        </button>

        {ORL_EQUIPMENT_LIST.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedItemTab(item.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap shrink-0 border flex items-center gap-1.5 ${
              selectedItemTab === item.id
                ? 'bg-sky-600 text-white font-bold border-sky-600 shadow-2xs'
                : nightMode
                  ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-2xs'
            }`}
          >
            <span className="w-4 h-4 rounded-full bg-sky-100 dark:bg-sky-900/80 text-sky-800 dark:text-sky-300 text-[10px] font-bold flex items-center justify-center">
              {item.itemNumber}
            </span>
            <span className="truncate max-w-[150px]">{language === 'es' ? item.name : (item.nameEu || item.name)}</span>
          </button>
        ))}
      </div>

      {/* Equipment List Grid */}
      <div className="space-y-8">
        {filteredItems.map((item) => {
          const photoUrl = `${import.meta.env.BASE_URL}${item.originalPhoto}`;
          const isChair = item.id === 'silla-trabajo-pedales';
          const isLaser = item.id === 'laser-deka-smartxide';

          return (
            <div
              key={item.id}
              id={`orl-eq-${item.id}`}
              className={`p-5 sm:p-7 rounded-3xl border transition-all ${
                nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-sky-600 to-cyan-600 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-sm">
                    {item.itemNumber}
                  </span>
                  <div>
                    <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                      {language === 'es' ? item.name : (item.nameEu || item.name)}
                    </h2>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Special Warning Banners for Silla & Láser */}
              {isChair && (
                <div className="mt-4 p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 flex items-start gap-3 text-xs text-amber-900 dark:text-amber-200 font-medium">
                  <Plug className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold text-amber-950 dark:text-amber-100 block">
                      {language === 'es' ? 'REGLA OBLIGATORIA DE BATERÍA Y RECARGA:' : 'BATERIA ETA BIRKARGAREN ARAU OBLIGATORIOA:'}
                    </strong>
                    {language === 'es'
                      ? 'DESENCHUFAR de la corriente ANTES de moverla o usarla con el cirujano. Al terminar la jornada quirúrgica y desinfectarla, VOLVER A ENCHUFAR siempre en su punto de estacionamiento para recargar sus baterías internas.'
                      : 'Korronte elektrikotik DESKONEKTATU erabili edo mugitu aurretik. Eguna amaitzean, BERRIRO KONEKTATU beti bateriak birkargatu daitezen.'}
                  </div>
                </div>
              )}

              {isLaser && (
                <div className="mt-4 p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 flex items-start gap-3 text-xs text-rose-900 dark:text-rose-200 font-medium">
                  <Briefcase className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold text-rose-950 dark:text-rose-100 block">
                      {language === 'es' ? 'REGLA INSEPARABLE HUN:' : 'NUO ARAU ZATIEZINA:'}
                    </strong>
                    {language === 'es'
                      ? 'La torre del láser DEKA SmartXide² debe viajar SIEMPRE y de forma inseparable acompañada del MALETÍN METÁLICO de aluminio rotulado "LÁSER" con sus adaptadores y accesorios.'
                      : 'DEKA SmartXide² laser dorrea BETI "LASER" idatzitako ALUMINIOZKO MALETATEGI METALIKOAREKIN eraman behar da zatiezin.'}
                  </div>
                </div>
              )}

              {/* Main Content Grid: Image + Clinical & Operational Specs */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-5 items-start">
                {/* Photo Column */}
                <div className="lg:col-span-4 space-y-2">
                  <div 
                    onClick={() => setSelectedPhotoModal({ src: photoUrl, alt: item.name, name: item.name })}
                    className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-950 group cursor-pointer aspect-[4/3] sm:aspect-square flex items-center justify-center shadow-xs"
                    title={language === 'es' ? 'Click para ampliar fotografía original' : 'Egin klik argazki originala handitzeko'}
                  >
                    <img 
                      src={photoUrl} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3">
                      <span className="text-white text-xs font-bold flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>{language === 'es' ? 'Ver foto en grande' : 'Handitu'}</span>
                      </span>
                      <span className="text-[10px] text-slate-300 font-mono bg-black/60 px-2 py-0.5 rounded">
                        HUN Q2
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 text-center font-medium italic">
                    {language === 'es' 
                      ? `Fotografía original de Quirófano 2: ${item.name}` 
                      : `2. Ebakigelako jatorrizko argazkia: ${item.nameEu || item.name}`}
                  </p>
                </div>

                {/* Information Column */}
                <div className="lg:col-span-8 space-y-4">
                  {/* Main Function */}
                  <div className={`p-4 rounded-2xl border ${
                    nightMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <h3 className="text-xs font-bold text-sky-700 dark:text-sky-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5" />
                      <span>{language === 'es' ? 'Función Principal y Utilidad Quirúrgica' : 'Funtzio Nagusia eta Erabilera'}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                      {language === 'es' ? item.mainFunction : (item.mainFunctionEu || item.mainFunction)}
                    </p>
                  </div>

                  {/* ORL Applications */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-blue-600" />
                      <span>{language === 'es' ? 'Intervenciones y Aplicaciones en ORL' : 'Interbentzioak eta Aplikazioak'}</span>
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {(language === 'es' ? item.orlApplications : (item.orlApplicationsEu || item.orlApplications)).map((app, i) => (
                        <li key={i} className={`p-2.5 rounded-xl border flex items-start gap-2 ${
                          nightMode ? 'bg-slate-900/80 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'
                        }`}>
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Celador Duties */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                      <span>{language === 'es' ? 'Tareas Concretas del Celador/a' : 'Zeladorearen Zeregin Zehatzak'}</span>
                    </h4>
                    <div className="space-y-1.5">
                      {(language === 'es' ? item.celadorDuties : (item.celadorDutiesEu || item.celadorDuties)).map((duty, idx) => (
                        <div key={idx} className={`p-2.5 rounded-xl border text-xs flex items-start gap-2.5 ${
                          nightMode ? 'bg-slate-950/40 border-slate-800 text-slate-200' : 'bg-sky-50/40 border-sky-100 text-slate-800'
                        }`}>
                          <span className="w-4 h-4 rounded-full bg-sky-200 dark:bg-sky-900 text-sky-900 dark:text-sky-200 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="leading-relaxed">{duty}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Precautions and Warnings */}
                  <div className={`p-3.5 rounded-2xl border ${
                    nightMode ? 'bg-red-950/20 border-red-900/50' : 'bg-red-50/50 border-red-200'
                  }`}>
                    <h4 className="text-xs font-bold text-red-700 dark:text-red-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
                      <span>{language === 'es' ? 'Precauciones Específicas' : 'Prekauzio Zehatzak'}</span>
                    </h4>
                    <ul className="space-y-1 text-xs text-red-900 dark:text-red-300">
                      {(language === 'es' ? item.precautionsAndWarnings : (item.precautionsAndWarningsEu || item.precautionsAndWarnings)).map((warn, wIdx) => (
                        <li key={wIdx} className="flex items-start gap-2">
                          <span className="text-red-600 shrink-0 font-bold">•</span>
                          <span>{warn}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* GENERAL RULES BLOCK (From HUN ORL Protocol) */}
      <div className={`p-6 sm:p-8 rounded-3xl border transition-all ${
        nightMode 
          ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/40 border-slate-800' 
          : 'bg-gradient-to-br from-white via-sky-50/40 to-blue-50/50 border-sky-200 shadow-sm'
      }`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-sm">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
              {language === 'es' ? ORL_GENERAL_RULES.titleEs : ORL_GENERAL_RULES.titleEu}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {language === 'es' ? 'Normativa institucional del Bloque Quirúrgico HUN' : 'NUO Ebakuntza Blokeko arau instituzionalak'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {(language === 'es' ? ORL_GENERAL_RULES.rulesEs : ORL_GENERAL_RULES.rulesEu).map((rule, rIdx) => (
            <div 
              key={rIdx}
              className={`p-4 rounded-2xl border flex flex-col justify-between ${
                nightMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 text-xs font-black flex items-center justify-center">
                    {rIdx + 1}
                  </span>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                    {rule.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Zoom for Authentic Photos */}
      {selectedPhotoModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedPhotoModal(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-800 text-white">
              <div>
                <h3 className="text-sm font-bold">{selectedPhotoModal.name}</h3>
                <p className="text-xs text-slate-400">Hospital Universitario de Navarra · Quirófano 2 (ORL)</p>
              </div>
              <button 
                onClick={() => setSelectedPhotoModal(null)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="max-h-[75vh] overflow-auto flex items-center justify-center bg-black p-2">
              <img 
                src={selectedPhotoModal.src} 
                alt={selectedPhotoModal.alt} 
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl"
              />
            </div>
            <div className="p-3 bg-slate-950 text-center text-xs text-slate-400 border-t border-slate-800">
              {language === 'es' ? 'Fotografía de archivo técnico del HUN Quirófanos II' : 'NUO II Ebakigeletako artxibo teknikoko argazkia'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
