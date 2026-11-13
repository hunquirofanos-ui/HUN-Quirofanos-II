import React, { useState } from 'react';
import {
  Stethoscope,
  AlertTriangle,
  CheckCircle2,
  Info,
  ShieldAlert,
  X,
  Zap,
  Maximize2,
  Plug,
  Briefcase,
  Layers,
  FileText,
  ClipboardList,
  Compass,
  Truck,
  Table as TableIcon,
  CalendarClock,
  Weight,
  Sliders,
  Ban
} from 'lucide-react';
import {
  ORL_EQUIPMENT_LIST,
  ORL_GENERAL_RULES,
  ORL_PANORAMIC_PHOTO,
  ORL_GUIDE_PDF,
  ORL_DOC_META,
  ORL_CIRCUIT_AND_LAYOUT,
  ORL_POSITIONS_DATA,
  ORL_CUERNOS_TRANSFER,
  ORL_MATERNAL_TRANSFER,
  ORL_SUMMARY_TABLE
} from '../data/orlEquipmentData';
import { Language } from '../types/operatingRoom';

interface OrlEquipmentSectionProps {
  nightMode: boolean;
  language: Language;
  onBackToOrl?: () => void;
}

type Q2SectionTab = 'todos' | 'circuito' | 'aparataje' | 'posiciones' | 'maternal' | 'tabla';

export const OrlEquipmentSection: React.FC<OrlEquipmentSectionProps> = ({
  nightMode,
  language,
  onBackToOrl
}) => {
  const [selectedPhotoModal, setSelectedPhotoModal] = useState<{ src: string; alt: string; name: string } | null>(null);
  const [activeSectionTab, setActiveSectionTab] = useState<Q2SectionTab>('todos');
  const [selectedItemTab, setSelectedItemTab] = useState<string>('all');

  const filteredItems =
    selectedItemTab === 'all'
      ? ORL_EQUIPMENT_LIST
      : ORL_EQUIPMENT_LIST.filter((item) => item.id === selectedItemTab);

  const showSection = (tab: Exclude<Q2SectionTab, 'todos'>) =>
    activeSectionTab === 'todos' || activeSectionTab === tab;

  const sectionTabs: { id: Q2SectionTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'todos', label: language === 'es' ? 'Guía Completa' : 'Gida Osoa', icon: Layers },
    { id: 'circuito', label: language === 'es' ? 'Programación y Circuito' : 'Programazioa eta Zirkuitua', icon: Compass },
    { id: 'aparataje', label: language === 'es' ? 'Aparataje (9 Equipos)' : 'Tresneria (9 Ekipo)', icon: Stethoscope },
    { id: 'posiciones', label: language === 'es' ? 'Posiciones y «Cuernos»' : 'Posizioak eta «Cuernos»', icon: Sliders },
    { id: 'maternal', label: language === 'es' ? 'Traslado Maternal (M4)' : 'Maternal (M4) Garraioa', icon: Truck },
    { id: 'tabla', label: language === 'es' ? 'Tabla Resumen' : 'Laburpen Taula', icon: TableIcon }
  ];

  const getM4BadgeClasses = (val: 'Sí' | 'No' | '-') => {
    if (val === 'Sí') {
      return 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-800';
    }
    if (val === 'No') {
      return 'bg-rose-100 text-rose-800 border-rose-300 dark:bg-rose-950/70 dark:text-rose-300 dark:border-rose-800';
    }
    return 'bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700';
  };

  return (
    <div className="space-y-6 pb-10">
      {/* Top Banner */}
      <div
        className={`p-6 sm:p-8 rounded-3xl border transition-colors ${
          nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100/90 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                <Stethoscope className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>{language === 'es' ? 'Guía Oficial HUN · Quirófano 2' : 'NUO Gida Ofiziala · 2. Ebakigela'}</span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                <CalendarClock className="w-3 h-3" />
                <span>{language === 'es' ? ORL_DOC_META.versionEs : ORL_DOC_META.versionEu}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              {language === 'es' ? ORL_DOC_META.titleEs : ORL_DOC_META.titleEu}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              {language === 'es' ? ORL_DOC_META.objectiveEs : ORL_DOC_META.objectiveEu}
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
            <a
              href={`${import.meta.env.BASE_URL}${ORL_GUIDE_PDF}`}
              target="_blank"
              rel="noopener noreferrer"
              download="Guia_aparataje_ORL_HUN_estructurada_con_traslado_maternal.pdf"
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-sky-600 hover:bg-sky-700 text-white transition-all shadow-2xs flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Descargar Guía Actualizada (PDF)' : 'Gida Eguneratua (PDF)'}</span>
            </a>
            <span className="px-3 py-1.5 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-900 text-sky-700 dark:text-sky-300 font-bold text-xs">
              {language === 'es' ? '9 Equipos · M4' : '9 Ekipo · M4'}
            </span>
          </div>
        </div>
      </div>

      {/* Fotografía Panorámica del Quirófano 2 de ORL (HUN) — Limpia y ampliable sin hotspots */}
      <div
        className={`p-4 sm:p-6 rounded-3xl border transition-all ${
          nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
              <h2 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                {language === 'es'
                  ? 'Identificación Visual Orientativa del Quirófano 2 de ORL (HUN)'
                  : '2. Ebakigelaren Identifikazio Bisuala (ORL - NUO)'}
              </h2>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {language === 'es'
                ? 'Fotografía panorámica oficial que muestra la ubicación espacial de los principales equipos y elementos del quirófano 2 de ORL.'
                : 'Ebakuntza-gelaren argazki orokorra lanpostu kirurgikoen, Trumpf mahaiaren eta tresneria teknikoaren banaketarekin.'}
            </p>
          </div>
          <button
            onClick={() =>
              setSelectedPhotoModal({
                src: `${import.meta.env.BASE_URL}${ORL_PANORAMIC_PHOTO}`,
                alt: 'Vista general del quirófano 2 de Otorrinolaringología (HUN)',
                name: 'Vista Panorámica del Quirófano 2 (ORL) · Hospital Universitario de Navarra'
              })
            }
            className="text-xs font-bold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1.5 self-start sm:self-auto bg-sky-50 dark:bg-sky-950/60 px-3 py-1.5 rounded-xl border border-sky-200 dark:border-sky-800"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'Ampliar fotografía' : 'Argazkia handitu'}</span>
          </button>
        </div>

        <div
          onClick={() =>
            setSelectedPhotoModal({
              src: `${import.meta.env.BASE_URL}${ORL_PANORAMIC_PHOTO}`,
              alt: 'Vista general del quirófano 2 de Otorrinolaringología (HUN)',
              name: 'Vista Panorámica del Quirófano 2 (ORL) · Hospital Universitario de Navarra'
            })
          }
          className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 shadow-md cursor-pointer group"
        >
          <img
            src={`${import.meta.env.BASE_URL}${ORL_PANORAMIC_PHOTO}`}
            alt="Vista general Quirófano 2 ORL HUN"
            className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4 text-white">
            <span className="text-xs font-medium bg-black/60 backdrop-blur-xs px-3 py-1 rounded-lg border border-white/20 flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-sky-400" />
              <span>{language === 'es' ? 'Tocar para ver en pantalla completa' : 'Ukitu pantaila osoan ikusteko'}</span>
            </span>
            <span className="text-[11px] font-bold text-sky-300 bg-sky-950/80 px-2.5 py-1 rounded-md border border-sky-800">
              HUN Q2 ORL
            </span>
          </div>
        </div>
      </div>

      {/* NOTA DE SEGURIDAD OBLIGATORIA */}
      <div
        className={`p-5 rounded-2xl border transition-all ${
          nightMode
            ? 'bg-rose-950/40 border-rose-800/80 text-rose-200'
            : 'bg-rose-50 border-rose-300 text-rose-950 shadow-2xs'
        }`}
      >
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
            <ShieldAlert className="w-6 h-6 animate-pulse" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-black tracking-tight text-rose-900 dark:text-rose-200 uppercase">
              {language === 'es'
                ? 'NOTA DE SEGURIDAD OBLIGATORIA · ENFERMERÍA DE ANESTESIA'
                : 'DERRIGORREZKO SEGURTASUN OHARRA · ANESTESIAKO ERIZAINTZA'}
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-rose-800 dark:text-rose-300">
              {language === 'es'
                ? ORL_CIRCUIT_AND_LAYOUT.mandatorySafetyNote
                : 'Beti Anestesiako Erizaintzari galdetu behar zaio aldez aurretik posizio-aldaketarik, mahaiaren segmentuen aldaketarik edo osagarri laguntzailerik kendu aurretik (serum-euskarria barne), aire-bidea eta zain-bideak egonkor mantentzeko.'}
            </p>
          </div>
        </div>
      </div>

      {/* Section Navigation Tabs */}
      <div className="flex overflow-x-auto gap-2 pb-1 no-scrollbar">
        {sectionTabs.map((tab) => {
          const TabIcon = tab.icon;
          const active = activeSectionTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSectionTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 border flex items-center gap-1.5 ${
                active
                  ? 'bg-sky-600 text-white border-sky-600 shadow-2xs'
                  : nightMode
                  ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-2xs'
              }`}
            >
              <TabIcon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* =================================================================== */}
      {/* SECCIÓN 1 Y 3: PROGRAMACIÓN QUIRÚRGICA Y CIRCUITO DEL CELADOR Q2    */}
      {/* =================================================================== */}
      {showSection('circuito') && (
        <div className="space-y-6">
          {/* 1. Organización y preparación según programación */}
          <div
            className={`p-5 sm:p-7 rounded-3xl border transition-all ${
              nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0">
                <ClipboardList className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                  {language === 'es' ? ORL_DOC_META.schedulingTitleEs : ORL_DOC_META.schedulingTitleEu}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {language === 'es'
                    ? 'Revisión previa de la jornada · Confirmación con Enfermería de ORL'
                    : 'Jardunaldiaren aurreko berrikuspena'}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              {language === 'es' ? ORL_DOC_META.schedulingIntroEs : ORL_DOC_META.schedulingIntroEu}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {(language === 'es' ? ORL_DOC_META.schedulingPointsEs : ORL_DOC_META.schedulingPointsEu).map((pt, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-2xl border text-xs flex items-start gap-2.5 ${
                    nightMode ? 'bg-slate-950/50 border-slate-800 text-slate-200' : 'bg-sky-50/50 border-sky-200 text-slate-800'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Circuito del Celador de Dentro y Disposición Espacial */}
          <div
            className={`p-5 sm:p-7 rounded-3xl border transition-all space-y-5 ${
              nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Compass className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                <h2 className="text-base sm:text-xl font-black text-slate-900 dark:text-white">
                  3. Circuito del Celador de Dentro y Disposición Espacial del Quirófano de ORL
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {ORL_CIRCUIT_AND_LAYOUT.introEs}
              </p>
            </div>

            {/* Particularidades de la Mesa y Aparataje en ORL */}
            <div className="space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                Particularidades de la Mesa y Aparataje en ORL
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {ORL_CIRCUIT_AND_LAYOUT.particularities.map((item) => (
                  <div
                    key={item.num}
                    className={`p-4 rounded-2xl border text-xs space-y-1 ${
                      item.highlight
                        ? nightMode
                          ? 'bg-amber-950/30 border-amber-700/80 text-amber-100'
                          : 'bg-amber-50 border-amber-300 text-amber-950'
                        : nightMode
                        ? 'bg-slate-950/50 border-slate-800 text-slate-200'
                        : 'bg-slate-50 border-slate-200 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-5 h-5 rounded-full text-[11px] font-black flex items-center justify-center shrink-0 ${
                          item.highlight
                            ? 'bg-amber-600 text-white'
                            : 'bg-sky-600 text-white'
                        }`}
                      >
                        {item.num}
                      </span>
                      <h4 className="font-extrabold text-xs sm:text-sm">{item.title}</h4>
                    </div>
                    <p className="leading-relaxed opacity-90 pl-7">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Secuencia Intraoperatoria y Movilización de Equipos */}
            <div className="space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                Secuencia Intraoperatoria y Movilización de Equipos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {ORL_CIRCUIT_AND_LAYOUT.intraoperativeSequence.map((step, sIdx) => (
                  <div
                    key={sIdx}
                    className={`p-3.5 rounded-2xl border text-xs space-y-1 ${
                      nightMode ? 'bg-slate-950/50 border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-extrabold text-slate-900 dark:text-white">
                      <span className="w-5 h-5 rounded-lg bg-sky-100 dark:bg-sky-900/80 text-sky-800 dark:text-sky-200 text-[10px] font-black flex items-center justify-center shrink-0">
                        {sIdx + 1}
                      </span>
                      <span>{step.title}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* SECCIÓN 2: FICHAS DE APARATAJE ESPECÍFICO DE ORL (9 EQUIPOS)        */}
      {/* =================================================================== */}
      {showSection('aparataje') && (
        <div className="space-y-5">
          {/* Quick Nav Chips for the 9 equipment items */}
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
              {language === 'es' ? 'Ver Todos (9 Equipos)' : 'Guztiak Ikusi (9 Ekipo)'}
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
                <span className="truncate max-w-[160px]">
                  {language === 'es' ? item.name : item.nameEu || item.name}
                </span>
              </button>
            ))}
          </div>

          {/* Equipment Cards */}
          <div className="space-y-8">
            {filteredItems.map((item) => {
              const photoUrl = `${import.meta.env.BASE_URL}${item.originalPhoto}`;
              const isChair = item.id === 'silla-trabajo-pedales';
              const isLaser = item.id === 'laser-deka-smartxide';
              const isPeso = item.id === 'peso-metalico';
              const isMedtronic = item.id === 'medtronic-ipc';

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
                      <span
                        className={`w-9 h-9 rounded-2xl text-white font-black text-sm flex items-center justify-center shrink-0 shadow-sm ${
                          item.isPending
                            ? 'bg-gradient-to-tr from-slate-600 to-slate-500'
                            : 'bg-gradient-to-tr from-sky-600 to-cyan-600'
                        }`}
                      >
                        {item.itemNumber}
                      </span>
                      <div>
                        <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                          {language === 'es' ? item.name : item.nameEu || item.name}
                        </h2>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${getM4BadgeClasses(
                          item.transferM4
                        )}`}
                      >
                        Traslado M4: {item.transferM4 === '-' ? 'Pendiente' : item.transferM4}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  {/* Special Banners */}
                  {isChair && (
                    <div className="mt-4 p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 flex items-start gap-3 text-xs text-amber-900 dark:text-amber-200 font-medium">
                      <Plug className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-bold text-amber-950 dark:text-amber-100 block">
                          {language === 'es'
                            ? 'INSTRUCCIÓN DE CARGA OBLIGATORIA:'
                            : 'KARGA JARRAIBIDE OBLIGATORIOA:'}
                        </strong>
                        {language === 'es'
                          ? 'Al sacarla del almacén para utilizarla, DESENCHUFARLA. Al devolverla al almacén, VOLVER A ENCHUFARLA. Dejar el cable recogido y situado de forma que no genere tropiezos.'
                          : 'Biltegitik ateratzean erabiltzeko, DESENTXUFATU. Biltegira itzultzean, BERRIRO ENTXUFATU. Kablea bilduta utzi behaztoparik ez sortzeko.'}
                      </div>
                    </div>
                  )}

                  {isLaser && (
                    <div className="mt-4 p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 flex items-start gap-3 text-xs text-rose-900 dark:text-rose-200 font-medium">
                      <Briefcase className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <strong className="font-bold text-rose-950 dark:text-rose-100 block">
                          {language === 'es'
                            ? 'REGLA INSEPARABLE Y DISTINCIÓN CON «LÁSER BLUE»:'
                            : 'NUO ARAU ZATIEZINA ETA «LÁSER BLUE» BEREIZKETA:'}
                        </strong>
                        <p>
                          {language === 'es'
                            ? '1) Trasladar y almacenar SIEMPRE junto con el maletín metálico rotulado «LÁSER». 2) Distinguir del LÁSER BLUE (equipo pequeño que traen los otorrinos desde consulta): si en programación figura «LÁSER BLUE», NO acercar este láser CO₂ al quirófano.'
                            : '1) BETI «LÁSER» maleta metalikoarekin eraman eta gorde. 2) Programazioan «LÁSER BLUE» agertzen bada, EZ hurbildu CO₂ laser hau ebakigelara.'}
                        </p>
                      </div>
                    </div>
                  )}

                  {isPeso && (
                    <div className="mt-4 p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 flex items-start gap-3 text-xs text-amber-900 dark:text-amber-200 font-medium">
                      <Weight className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-bold text-amber-950 dark:text-amber-100 block">
                          COLOCACIÓN SEGURA DEL CONTRAPESO (ABREBOCAS):
                        </strong>
                        Hace de contrapeso cuando se despliega el brazo articulado que sujeta el abrebocas. Se coloca{' '}
                        <strong>encima de una mesa metálica situada encima del pecho del paciente</strong>.{' '}
                        <strong>NO colocarlo directamente sobre el paciente.</strong>
                      </div>
                    </div>
                  )}

                  {isMedtronic && (
                    <div className="mt-4 p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 flex items-start gap-3 text-xs text-slate-800 dark:text-slate-200 font-medium">
                      <Ban className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-bold block">TRASLADO A MATERNAL (M4): NO SE TRASLADA</strong>
                        Esta consola NO se traslada al Quirófano Maternal porque ya disponen de otra en el M4. Antes de cualquier traslado, revisar programación y confirmar con Enfermería si se requiere otra consola.
                      </div>
                    </div>
                  )}

                  {item.isPending && (
                    <div className="mt-4 p-3.5 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-300 dark:border-sky-800 flex items-start gap-3 text-xs text-sky-900 dark:text-sky-200 font-medium">
                      <Info className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-bold block">INCORPORACIÓN PENDIENTE EN EL HUN:</strong>
                        Equipo de grandes dimensiones con dos pantallas (ORBEYE). Una vez recibido en el HUN, se acordará su ubicación y protocolo logístico definitivo.
                      </div>
                    </div>
                  )}

                  {/* Main Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-5 items-start">
                    {/* Photo Column */}
                    <div className="lg:col-span-4 space-y-2">
                      <div
                        onClick={() => setSelectedPhotoModal({ src: photoUrl, alt: item.name, name: item.name })}
                        className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-950 group cursor-pointer aspect-[4/3] sm:aspect-square flex items-center justify-center shadow-xs"
                        title={
                          language === 'es' ? 'Click para ampliar fotografía' : 'Egin klik argazkia handitzeko'
                        }
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
                        {item.isPending
                          ? 'Imagen orientativa del Exoscopio (ORBEYE · 2 pantallas)'
                          : language === 'es'
                          ? `Fotografía de referencia Q2: ${item.name}`
                          : `2. Ebakigelako argazkia: ${item.nameEu || item.name}`}
                      </p>

                      {item.secondaryPhoto && (
                        <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-1.5">
                          <div
                            onClick={() =>
                              setSelectedPhotoModal({
                                src: `${import.meta.env.BASE_URL}${item.secondaryPhoto}`,
                                alt: item.secondaryPhotoCaption || item.name,
                                name: `${item.name} - Detalle Superior`
                              })
                            }
                            className="relative rounded-xl overflow-hidden border border-sky-300 dark:border-sky-800 bg-slate-950 group cursor-pointer aspect-video flex items-center justify-center shadow-xs"
                          >
                            <img
                              src={`${import.meta.env.BASE_URL}${item.secondaryPhoto}`}
                              alt="Detalle superior"
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-2">
                              <span className="text-white text-[11px] font-bold flex items-center gap-1">
                                <Maximize2 className="w-3 h-3" />
                                <span>{language === 'es' ? 'Ver detalle ampliado' : 'Xehetasuna handitu'}</span>
                              </span>
                              <span className="text-[9px] text-sky-200 bg-sky-950/80 px-1.5 py-0.5 rounded font-bold">
                                Peso Metálico
                              </span>
                            </div>
                          </div>
                          <p className="text-[11px] text-sky-900 dark:text-sky-200 leading-tight p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/50 border border-sky-200 dark:border-sky-900 font-medium">
                            <strong className="block text-sky-950 dark:text-sky-100 mb-0.5 font-bold">
                              {language === 'es' ? 'Detalle de la parte superior:' : 'Goiko parteko xehetasuna:'}
                            </strong>
                            {language === 'es' ? item.secondaryPhotoCaption : item.secondaryPhotoCaptionEu}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Information Column */}
                    <div className="lg:col-span-8 space-y-4">
                      {/* Main Function */}
                      <div
                        className={`p-4 rounded-2xl border ${
                          nightMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <h3 className="text-xs font-bold text-sky-700 dark:text-sky-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                          <Info className="w-3.5 h-3.5" />
                          <span>
                            {language === 'es'
                              ? 'Función Principal y Utilidad Quirúrgica'
                              : 'Funtzio Nagusia eta Erabilera'}
                          </span>
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                          {language === 'es' ? item.mainFunction : item.mainFunctionEu || item.mainFunction}
                        </p>
                      </div>

                      {/* ORL Applications */}
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-blue-600" />
                          <span>
                            {language === 'es'
                              ? 'Intervenciones y Aplicaciones en ORL'
                              : 'Interbentzioak eta Aplikazioak'}
                          </span>
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {(language === 'es'
                            ? item.orlApplications
                            : item.orlApplicationsEu || item.orlApplications
                          ).map((app, i) => (
                            <li
                              key={i}
                              className={`p-2.5 rounded-xl border flex items-start gap-2 ${
                                nightMode
                                  ? 'bg-slate-900/80 border-slate-800 text-slate-300'
                                  : 'bg-white border-slate-200 text-slate-700'
                              }`}
                            >
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
                          <span>
                            {language === 'es' ? 'Protocolo de Traslado y Tareas del Celador/a' : 'Zeladorearen Zeregin Zehatzak'}
                          </span>
                        </h4>
                        <div className="space-y-1.5">
                          {(language === 'es'
                            ? item.celadorDuties
                            : item.celadorDutiesEu || item.celadorDuties
                          ).map((duty, idx) => (
                            <div
                              key={idx}
                              className={`p-2.5 rounded-xl border text-xs flex items-start gap-2.5 ${
                                nightMode
                                  ? 'bg-slate-950/40 border-slate-800 text-slate-200'
                                  : 'bg-sky-50/40 border-sky-100 text-slate-800'
                              }`}
                            >
                              <span className="w-4 h-4 rounded-full bg-sky-200 dark:bg-sky-900 text-sky-900 dark:text-sky-200 text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                                {idx + 1}
                              </span>
                              <span className="leading-relaxed">{duty}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Precautions */}
                      <div
                        className={`p-3.5 rounded-2xl border ${
                          nightMode ? 'bg-red-950/20 border-red-900/50' : 'bg-red-50/50 border-red-200'
                        }`}
                      >
                        <h4 className="text-xs font-bold text-red-700 dark:text-red-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
                          <span>{language === 'es' ? 'Precauciones Específicas' : 'Prekauzio Zehatzak'}</span>
                        </h4>
                        <ul className="space-y-1 text-xs text-red-900 dark:text-red-300">
                          {(language === 'es'
                            ? item.precautionsAndWarnings
                            : item.precautionsAndWarningsEu || item.precautionsAndWarnings
                          ).map((warn, wIdx) => (
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
        </div>
      )}

      {/* =================================================================== */}
      {/* SECCIÓN 4 Y 5: POSICIONES QUIRÚRGICAS, TOUSS/BAHA/SNIFFING Y CUERNOS*/}
      {/* =================================================================== */}
      {showSection('posiciones') && (
        <div className="space-y-6">
          {/* 4. Posiciones quirúrgicas específicas de ORL */}
          <div
            className={`p-5 sm:p-7 rounded-3xl border space-y-5 ${
              nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div>
              <h2 className="text-base sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                <span>4. Posiciones Quirúrgicas Específicas de ORL y Accesorios Requeridos</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                {ORL_POSITIONS_DATA.introEs}
              </p>
            </div>

            {/* 4 Posiciones */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ORL_POSITIONS_DATA.positions.map((pos) => (
                <div
                  key={pos.id}
                  className={`p-4 rounded-2xl border space-y-2.5 ${
                    nightMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <h3 className="text-sm font-black text-sky-900 dark:text-sky-200">{pos.title}</h3>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {pos.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  {pos.criticalAlert && (
                    <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-[11px] text-rose-900 dark:text-rose-200 font-semibold">
                      {pos.criticalAlert}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Accesorios generales + TOUSS / BAHA-PONTO / Sniffing */}
            <div className="p-4 rounded-2xl bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-900 text-xs text-sky-950 dark:text-sky-100 font-medium">
              <strong>Accesorios generales ORL:</strong> {ORL_POSITIONS_DATA.generalAccessoriesNote}
            </div>

            <div className="space-y-2.5">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                Accesorios para TOUSS, BAHA / PONTO y Posición Sniffing (Olfateo)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {ORL_POSITIONS_DATA.specialAccessories.map((acc) => (
                  <div
                    key={acc.id}
                    className={`p-3.5 rounded-2xl border text-xs space-y-1 ${
                      nightMode ? 'bg-slate-950/60 border-slate-800' : 'bg-white border-sky-200 shadow-2xs'
                    }`}
                  >
                    <h4 className="font-black text-slate-900 dark:text-white">{acc.title}</h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{acc.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Infografías y fotografía real de Sniffing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {ORL_POSITIONS_DATA.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() =>
                    setSelectedPhotoModal({
                      src: `${import.meta.env.BASE_URL}${img.src}`,
                      alt: img.title,
                      name: img.title
                    })
                  }
                  className={`rounded-2xl border overflow-hidden cursor-pointer group transition-all hover:shadow-md ${
                    nightMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="aspect-[16/10] bg-slate-950 overflow-hidden relative">
                    <img
                      src={`${import.meta.env.BASE_URL}${img.src}`}
                      alt={img.title}
                      className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                    />
                    <span className="absolute bottom-2 right-2 text-[10px] font-bold text-white bg-black/70 px-2 py-1 rounded-lg flex items-center gap-1">
                      <Maximize2 className="w-3 h-3" />
                      <span>Ampliar</span>
                    </span>
                  </div>
                  <div className="p-3 space-y-0.5">
                    <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">{img.title}</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">{img.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Transfer: Preparación de la mesa quirúrgica y accesorios específicos («Cuernos») */}
          <div
            className={`p-5 sm:p-7 rounded-3xl border space-y-5 ${
              nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div>
              <h2 className="text-base sm:text-xl font-black text-slate-900 dark:text-white">
                {language === 'es' ? ORL_CUERNOS_TRANSFER.titleEs : ORL_CUERNOS_TRANSFER.titleEu}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                {ORL_CUERNOS_TRANSFER.introEs}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {ORL_CUERNOS_TRANSFER.steps.map((step, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-2xl border text-xs flex items-start gap-2.5 ${
                    nightMode ? 'bg-slate-950/50 border-slate-800 text-slate-200' : 'bg-sky-50/40 border-sky-200 text-slate-800'
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-sky-600 text-white text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed font-medium">{step}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ORL_CUERNOS_TRANSFER.photos.map((photo, idx) => (
                <div
                  key={idx}
                  onClick={() =>
                    setSelectedPhotoModal({
                      src: `${import.meta.env.BASE_URL}${photo.src}`,
                      alt: photo.title,
                      name: photo.title
                    })
                  }
                  className={`rounded-2xl border overflow-hidden cursor-pointer group transition-all hover:shadow-md ${
                    nightMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="aspect-[4/3] bg-slate-950 overflow-hidden relative">
                    <img
                      src={`${import.meta.env.BASE_URL}${photo.src}`}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <span className="absolute bottom-2 right-2 text-[10px] font-bold text-white bg-black/70 px-2 py-1 rounded-lg flex items-center gap-1">
                      <Maximize2 className="w-3 h-3" />
                      <span>Ampliar</span>
                    </span>
                  </div>
                  <div className="p-3 space-y-0.5">
                    <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">{photo.title}</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* SECCIÓN 6: TRASLADO DE MATERIAL DE ORL AL QUIRÓFANO MATERNAL (M4)   */}
      {/* =================================================================== */}
      {showSection('maternal') && (
        <div
          className={`p-5 sm:p-7 rounded-3xl border space-y-5 ${
            nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-600 text-white flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-xl font-black text-slate-900 dark:text-white">
                {language === 'es' ? ORL_MATERNAL_TRANSFER.titleEs : ORL_MATERNAL_TRANSFER.titleEu}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">{ORL_MATERNAL_TRANSFER.introEs}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Listado de material a trasladar */}
            <div
              className={`p-4 sm:p-5 rounded-2xl border space-y-3 ${
                nightMode ? 'bg-slate-950/60 border-slate-800' : 'bg-sky-50/50 border-sky-200'
              }`}
            >
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-sky-800 dark:text-sky-300">
                Listado de material a trasladar (según necesidad)
              </h3>
              <ul className="space-y-2 text-xs text-slate-800 dark:text-slate-200">
                {ORL_MATERNAL_TRANSFER.itemsToTransfer.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-xs text-rose-900 dark:text-rose-200 flex items-start gap-2">
                <Ban className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span className="font-bold">{ORL_MATERNAL_TRANSFER.excludedNote}</span>
              </div>
            </div>

            {/* Comprobación del traslado */}
            <div
              className={`p-4 sm:p-5 rounded-2xl border space-y-3 ${
                nightMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                Comprobación del traslado y retorno
              </h3>
              <div className="space-y-2">
                {ORL_MATERNAL_TRANSFER.verificationSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 ${
                      nightMode ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-800'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full bg-sky-600 text-white text-[10px] font-black flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* SECCIÓN 7: TABLA RESUMEN DE APARATAJE ORL                           */}
      {/* =================================================================== */}
      {showSection('tabla') && (
        <div
          className={`p-5 sm:p-7 rounded-3xl border space-y-4 ${
            nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0">
              <TableIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-xl font-black text-slate-900 dark:text-white">
                7. Tabla Resumen de Aparataje ORL
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Consulta rápida de función, protocolo de traslado/plegado, precauciones, accesorios y traslado a Maternal (M4).
              </p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left border-collapse text-xs min-w-[820px]">
              <thead>
                <tr className={nightMode ? 'bg-slate-950 text-sky-300' : 'bg-sky-50 text-sky-950'}>
                  <th className="p-3 font-black border-b border-slate-200 dark:border-slate-800 w-[15%]">
                    Nombre del Equipo
                  </th>
                  <th className="p-3 font-black border-b border-slate-200 dark:border-slate-800 w-[22%]">
                    Función / Descripción
                  </th>
                  <th className="p-3 font-black border-b border-slate-200 dark:border-slate-800 w-[23%]">
                    Protocolo de Traslado y Plegado
                  </th>
                  <th className="p-3 font-black border-b border-slate-200 dark:border-slate-800 w-[20%]">
                    Precauciones de Manipulación
                  </th>
                  <th className="p-3 font-black border-b border-slate-200 dark:border-slate-800 w-[13%]">
                    Accesorios Asociados
                  </th>
                  <th className="p-3 font-black border-b border-slate-200 dark:border-slate-800 text-center w-[7%]">
                    Traslado M4
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {ORL_SUMMARY_TABLE.map((row) => (
                  <tr
                    key={row.id}
                    className={
                      nightMode
                        ? 'hover:bg-slate-800/40 text-slate-300'
                        : 'hover:bg-sky-50/40 text-slate-700 bg-white'
                    }
                  >
                    <td className="p-3 font-extrabold text-slate-900 dark:text-white align-top">
                      {row.equipmentName}
                    </td>
                    <td className="p-3 leading-relaxed align-top">{row.functionDesc}</td>
                    <td className="p-3 leading-relaxed align-top">{row.transferAndFoldingProtocol}</td>
                    <td className="p-3 leading-relaxed align-top">{row.handlingPrecautions}</td>
                    <td className="p-3 leading-relaxed align-top">{row.associatedAccessories}</td>
                    <td className="p-3 text-center align-top">
                      <span
                        className={`inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-black border ${getM4BadgeClasses(
                          row.transferM4
                        )}`}
                      >
                        {row.transferM4}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* GENERAL RULES BLOCK */}
      <div
        className={`p-6 sm:p-8 rounded-3xl border transition-all ${
          nightMode
            ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/40 border-slate-800'
            : 'bg-gradient-to-br from-white via-sky-50/40 to-blue-50/50 border-sky-200 shadow-sm'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-sm">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
              {language === 'es' ? ORL_GENERAL_RULES.titleEs : ORL_GENERAL_RULES.titleEu}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {language === 'es'
                ? 'Normativa institucional del Bloque Quirúrgico HUN'
                : 'NUO Ebakuntza Blokeko arau instituzionalak'}
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
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{rule.desc}</p>
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
              {language === 'es'
                ? 'Fotografía / infografía de archivo técnico del HUN Quirófanos II'
                : 'NUO II Ebakigeletako artxibo teknikoko argazkia'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
