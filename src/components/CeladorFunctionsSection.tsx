import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Search, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Sliders, 
  Layers, 
  FileText, 
  Truck, 
  Activity, 
  Clock, 
  Building2,
  FolderOpen
} from 'lucide-react';
import { 
  FUNCIONES_CELADORES_FUERA, 
  METODOLOGIA_CELADORES_FUERA, 
  FUNCIONES_CELADORES_DENTRO, 
  METODOLOGIA_CELADORES_DENTRO,
  HUN_TEAM_PHILOSOPHY
} from '../data/hunOfficialProtocols';
import { Language } from '../types/operatingRoom';
import { TRANSLATIONS } from '../i18n/translations';

interface CeladorFunctionsSectionProps {
  nightMode: boolean;
  language: Language;
  onNavigateToPreEntry?: () => void;
  onNavigateToQuirofanos?: () => void;
}

export const CeladorFunctionsSection: React.FC<CeladorFunctionsSectionProps> = ({
  nightMode,
  language,
  onNavigateToPreEntry,
  onNavigateToQuirofanos
}) => {
  const t = TRANSLATIONS[language];
  const [activeTab, setActiveTab] = useState<'dentro' | 'fuera'>('dentro');
  const [subView, setSubView] = useState<'funciones' | 'metodologia'>('funciones');
  const [searchFilter, setSearchFilter] = useState<string>('');

  const filteredFuncionesDentro = FUNCIONES_CELADORES_DENTRO.filter(f =>
    f.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
    f.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
    (f.safetyNote && f.safetyNote.toLowerCase().includes(searchFilter.toLowerCase()))
  );

  const filteredFuncionesFuera = FUNCIONES_CELADORES_FUERA.filter(f =>
    f.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
    f.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
    (f.safetyNote && f.safetyNote.toLowerCase().includes(searchFilter.toLowerCase()))
  );

  return (
    <div className="space-y-6 pb-10">
      {/* Top Section Header */}
      <div className={`p-6 sm:p-8 rounded-3xl border transition-colors ${
        nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100/90 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{language === 'es' ? 'Protocolos Oficiales HUN · Área General V' : 'NUO Protokolo Ofizialak · V. Eremu Orokorra'}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              {language === 'es' ? 'Funciones del Celador de Quirófano' : 'Ebakigelako Zeladoreen Funtzioak'}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              {language === 'es'
                ? 'Regulación íntegra de competencias técnico-asistenciales y logísticas del Quirófano Central II y Quirófano de Urgencias II. Organización estructurada en dos bloques operativos: Celador de Dentro (13 funciones) y Celador de Fuera (14 funciones).'
                : 'Erdiko II Ebakigelako eta Larrialdietako II Ebakigelako laguntza- zein logistika-gaitasunen araudi osoa. Bi bloke operatibotan egituratua: Barruko Zeladorea (13 funtzio) eta Kanpoko Zeladorea (14 funtzio).'}
            </p>
          </div>

          {/* Tab Switcher: Dentro vs Fuera */}
          <div className="flex p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0 self-start lg:self-auto">
            <button
              onClick={() => setActiveTab('dentro')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                activeTab === 'dentro'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>{language === 'es' ? 'Celador de Dentro (13)' : 'Barruko Zeladorea (13)'}</span>
            </button>

            <button
              onClick={() => setActiveTab('fuera')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                activeTab === 'fuera'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Truck className="w-4 h-4" />
              <span>{language === 'es' ? 'Celador de Fuera (14)' : 'Kanpoko Zeladorea (14)'}</span>
            </button>
          </div>
        </div>

        {/* Filter bar & view switcher */}
        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setSubView('funciones')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 ${
                subView === 'funciones'
                  ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Relación de Funciones' : 'Funtzioen Zerrenda'}</span>
            </button>
            <button
              onClick={() => setSubView('metodologia')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 ${
                subView === 'metodologia'
                  ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Metodología Paso a Paso' : 'Pausoz Pausoko Metodologia'}</span>
            </button>
          </div>

          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder={language === 'es' ? 'Buscar por término (balas O2, transfer, rayos X)...' : 'Bilatu (O2 balak, transferra, izpiak)...'}
              className={`w-full pl-9 pr-3 py-2 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                nightMode
                  ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500'
                  : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Philosophy banner */}
      <div className={`p-4 rounded-2xl border ${
        nightMode ? 'bg-slate-900/60 border-slate-800' : 'bg-blue-50/60 border-blue-200'
      }`}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
            <Users className="w-4 h-4" />
          </div>
          <div className="text-xs">
            <span className="font-bold text-blue-900 dark:text-blue-300">
              {language === 'es' ? 'Principio Operativo Fundamental: ' : 'Funtsezko Printzipio Operatiboa: '}
            </span>
            <span className="text-slate-700 dark:text-slate-300">
              {HUN_TEAM_PHILOSOPHY.description}
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2.1 CELADOR DE DENTRO */}
      {/* ========================================================================= */}
      {activeTab === 'dentro' && (
        <div className="space-y-6">
          {/* Section 2.1 Intro Banner */}
          <div className={`p-5 rounded-2xl border transition-colors ${
            nightMode ? 'bg-blue-950/30 border-blue-900/60' : 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                  {language === 'es' ? 'Apartado 2.1 · Ámbito Quirúrgico Interno' : '2.1 Atala · Barruko Eremu Kirurgikoa'}
                </span>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white mt-0.5">
                  {language === 'es' ? 'Celador de Dentro: Funciones y Asistencia Técnica' : 'Barruko Zeladorea: Funtzioak eta Laguntza Teknikoa'}
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
                  {language === 'es'
                    ? 'Preparación del quirófano, mesas quirúrgicas y accesorios, transferencia y posicionamiento del paciente, aparataje quirúrgico pesado (RX), colaboración con enfermería y ergonomía.'
                    : 'Ebakigela prestatzea, mahaiak eta osagarriak, pazientearen transferra eta posizioa, aparatu astunak (RX), erizaintzarekin elkarlana eta ergonomia.'}
                </p>
              </div>

              {onNavigateToPreEntry && (
                <button
                  onClick={onNavigateToPreEntry}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-1.5 self-start sm:self-auto shrink-0 shadow-2xs"
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>{language === 'es' ? 'Mesa Pre-Entrada' : 'Aurre-Sarrerako Mahaia'}</span>
                </button>
              )}
            </div>

            {/* Core duty highlights pills */}
            <div className="mt-4 pt-3 border-t border-blue-200/60 dark:border-blue-900/60 flex flex-wrap gap-2 text-[11px]">
              <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 font-semibold text-slate-700 dark:text-slate-300 border border-blue-200 dark:border-blue-900">
                ✓ Preparación de Quirófano y Mesas
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 font-semibold text-slate-700 dark:text-slate-300 border border-blue-200 dark:border-blue-900">
                ✓ Transferencia y Posicionamiento
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 font-semibold text-slate-700 dark:text-slate-300 border border-blue-200 dark:border-blue-900">
                ✓ Aparato de Rayos X (Entrada y Retorno)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 font-semibold text-slate-700 dark:text-slate-300 border border-blue-200 dark:border-blue-900">
                ✓ Traslados de UCI
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 font-semibold text-slate-700 dark:text-slate-300 border border-blue-200 dark:border-blue-900">
                ✓ Devolución según normativa de quirófano
              </span>
            </div>
          </div>

          {/* Subview: Funciones */}
          {subView === 'funciones' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredFuncionesDentro.map((func) => (
                <div
                  key={func.id}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all hover:shadow-md flex flex-col justify-between ${
                    nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 font-extrabold text-xs flex items-center justify-center shrink-0 border border-blue-200 dark:border-blue-800">
                          {func.id}
                        </span>
                        <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                          {func.title}
                        </h3>
                      </div>
                      {func.criticalStep && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 shrink-0">
                          {language === 'es' ? 'Crítico' : 'Kritikoa'}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-9">
                      {func.description}
                    </p>
                  </div>

                  {func.safetyNote && (
                    <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 pl-9">
                      <div className="flex items-start gap-1.5 text-[11px] text-amber-800 dark:text-amber-300 bg-amber-50/70 dark:bg-amber-950/40 p-2 rounded-lg border border-amber-200/80 dark:border-amber-900/60">
                        <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-600" />
                        <span className="leading-snug">{func.safetyNote}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Subview: Metodología Paso a Paso */}
          {subView === 'metodologia' && (
            <div className="space-y-4">
              {METODOLOGIA_CELADORES_DENTRO.map((step) => (
                <div
                  key={step.step}
                  className={`p-5 sm:p-6 rounded-2xl border transition-colors ${
                    nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-2xs">
                      {step.step}
                    </span>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                        {step.title}
                      </h3>

                      <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {step.paragraphs.map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </div>

                      {/* Key Points */}
                      <div className={`p-3.5 rounded-xl border text-xs space-y-1.5 ${
                        nightMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                      }`}>
                        <span className="font-bold text-blue-700 dark:text-blue-400 block text-[11px] uppercase tracking-wider">
                          {language === 'es' ? 'Puntos Clave y Directrices:' : 'Urrats Giltzarriak:'}
                        </span>
                        <ul className="space-y-1">
                          {step.keyPoints.map((kp, kIdx) => (
                            <li key={kIdx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                              <span>{kp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Collaboration With */}
                      <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px]">
                        <span className="font-semibold text-slate-500 dark:text-slate-400">
                          {language === 'es' ? 'En coordinación con:' : 'Elkarlanean:'}
                        </span>
                        {step.collaborationWith.map((c, cIdx) => (
                          <span
                            key={cIdx}
                            className="px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 font-medium"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2.2 CELADOR DE FUERA */}
      {/* ========================================================================= */}
      {activeTab === 'fuera' && (
        <div className="space-y-6">
          {/* Section 2.2 Intro Banner */}
          <div className={`p-5 rounded-2xl border transition-colors ${
            nightMode ? 'bg-emerald-950/30 border-emerald-900/60' : 'bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  {language === 'es' ? 'Apartado 2.2 · Logística y Circuitos Exteriores' : '2.2 Atala · Kanpoko Logistika eta Zirkuituak'}
                </span>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white mt-0.5">
                  {language === 'es' ? 'Celador de Fuera: Circuitos, Traslados y Logística' : 'Kanpoko Zeladorea: Zirkuituak, Garraioak eta Logistika'}
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
                  {language === 'es'
                    ? 'Traslado de pacientes desde plantas/UCMA, comprobación de documentación y check list, orientación a familiares, muestras biológicas, banco de sangre, farmacia, mantenimiento y protocolo de fallecimiento.'
                    : 'Pazienteen garraioa ospitaleratze-geletatik/UCMA-tik, dokumentazioa eta check list aztertzea, senideak gidatzea, laginak, odol-bankua, farmazia, mantentze-lanak eta heriotza protokoloa.'}
                </p>
              </div>

              {onNavigateToQuirofanos && (
                <button
                  onClick={onNavigateToQuirofanos}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors flex items-center gap-1.5 self-start sm:self-auto shrink-0 shadow-2xs"
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{language === 'es' ? 'Ver Quirófanos' : 'Ikusi Ebakigelak'}</span>
                </button>
              )}
            </div>

            {/* Core duty highlights pills */}
            <div className="mt-4 pt-3 border-t border-emerald-200/60 dark:border-emerald-900/60 flex flex-wrap gap-2 text-[11px]">
              <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 font-semibold text-slate-700 dark:text-slate-300 border border-emerald-200 dark:border-emerald-900">
                ✓ Traslado de Pacientes (Plantas & UCMA)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 font-semibold text-slate-700 dark:text-slate-300 border border-emerald-200 dark:border-emerald-900">
                ✓ Check list y Pegatinas Identificativas
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 font-semibold text-slate-700 dark:text-slate-300 border border-emerald-200 dark:border-emerald-900">
                ✓ Banco de Sangre & Hemoderivados
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 font-semibold text-slate-700 dark:text-slate-300 border border-emerald-200 dark:border-emerald-900">
                ✓ Anatomía Patológica & Citología
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 font-semibold text-slate-700 dark:text-slate-300 border border-emerald-200 dark:border-emerald-900">
                ✓ Retorno de pacientes a URPA
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 font-semibold text-slate-700 dark:text-slate-300 border border-emerald-200 dark:border-emerald-900">
                ✓ Protocolo Éxitus (2 celadores)
              </span>
            </div>
          </div>

          {/* Subview: Funciones */}
          {subView === 'funciones' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredFuncionesFuera.map((func) => (
                <div
                  key={func.id}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all hover:shadow-md flex flex-col justify-between ${
                    nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-extrabold text-xs flex items-center justify-center shrink-0 border border-emerald-200 dark:border-emerald-800">
                          {func.id}
                        </span>
                        <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                          {func.title}
                        </h3>
                      </div>
                      {func.criticalStep && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 shrink-0">
                          {language === 'es' ? 'Crítico' : 'Kritikoa'}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-9">
                      {func.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 pl-9 space-y-2">
                    {func.departmentDestination && (
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                        <FolderOpen className="w-3.5 h-3.5 shrink-0" />
                        <span>Destino: {func.departmentDestination}</span>
                      </div>
                    )}
                    {func.safetyNote && (
                      <div className="flex items-start gap-1.5 text-[11px] text-amber-800 dark:text-amber-300 bg-amber-50/70 dark:bg-amber-950/40 p-2 rounded-lg border border-amber-200/80 dark:border-amber-900/60">
                        <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-600" />
                        <span className="leading-snug">{func.safetyNote}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Subview: Metodología Paso a Paso */}
          {subView === 'metodologia' && (
            <div className="space-y-4">
              {METODOLOGIA_CELADORES_FUERA.map((step) => (
                <div
                  key={step.step}
                  className={`p-5 sm:p-6 rounded-2xl border transition-colors ${
                    nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-2xs">
                      {step.step}
                    </span>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                        {step.title}
                      </h3>

                      <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {step.paragraphs.map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </div>

                      {/* Key Points */}
                      <div className={`p-3.5 rounded-xl border text-xs space-y-1.5 ${
                        nightMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                      }`}>
                        <span className="font-bold text-emerald-700 dark:text-emerald-400 block text-[11px] uppercase tracking-wider">
                          {language === 'es' ? 'Puntos Clave y Directrices:' : 'Urrats Giltzarriak:'}
                        </span>
                        <ul className="space-y-1">
                          {step.keyPoints.map((kp, kIdx) => (
                            <li key={kIdx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                              <span>{kp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Collaboration With */}
                      <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px]">
                        <span className="font-semibold text-slate-500 dark:text-slate-400">
                          {language === 'es' ? 'En coordinación con:' : 'Elkarlanean:'}
                        </span>
                        {step.collaborationWith.map((c, cIdx) => (
                          <span
                            key={cIdx}
                            className="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-medium"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
