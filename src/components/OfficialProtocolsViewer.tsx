import React, { useState } from 'react';
import { 
  Search, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2
} from 'lucide-react';
import { 
  FUNCIONES_CELADORES_FUERA, 
  METODOLOGIA_CELADORES_FUERA, 
  FUNCIONES_CELADORES_DENTRO, 
  METODOLOGIA_CELADORES_DENTRO 
} from '../data/hunOfficialProtocols';
import { Language } from '../types/operatingRoom';
import { TRANSLATIONS } from '../i18n/translations';

export const OfficialProtocolsViewer: React.FC<{ nightMode: boolean; language: Language }> = ({ nightMode, language }) => {
  const t = TRANSLATIONS[language];
  const [activeGroup, setActiveGroup] = useState<'fuera' | 'dentro'>('fuera');
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [activeSection, setActiveSection] = useState<'funciones' | 'metodologia'>('funciones');

  const filteredFuncionesFuera = FUNCIONES_CELADORES_FUERA.filter(f => 
    f.title.toLowerCase().includes(searchFilter.toLowerCase()) || 
    f.description.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const filteredFuncionesDentro = FUNCIONES_CELADORES_DENTRO.filter(f => 
    f.title.toLowerCase().includes(searchFilter.toLowerCase()) || 
    f.description.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className={`p-5 rounded-2xl border transition-colors ${
        nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Nafarroako Gobernua · Osasunbidea - Servicio Navarro de Salud</span>
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
              {language === 'es' ? 'Funciones y Metodología Oficial de Celadores/as' : 'Zeladoreen Funtzioak eta Metodologia Ofiziala'}
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
              {language === 'es' 
                ? 'Normativa íntegra reguladora del Quirófano Central II & Urgencias II (Área General V). 14 funciones de celadores "De Fuera" y 13 funciones de celadores "De Dentro" con sus metodologías asistenciales.'
                : 'V. Eremu Orokorreko Ebakuntza Blokearen araudi osoa. "Kanpoko" zeladoreen 14 funtzio eta "Barruko" zeladoreen 13 funtzio beren laguntza-metodologiarekin.'}
            </p>
          </div>

          {/* Quick toggle between Fuera and Dentro */}
          <div className="flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setActiveGroup('fuera')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                activeGroup === 'fuera'
                  ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {language === 'es' ? 'Celadores "DE FUERA" (14)' : '"KANPOKO" Zeladoreak (14)'}
            </button>
            <button
              onClick={() => setActiveGroup('dentro')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                activeGroup === 'dentro'
                  ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {language === 'es' ? 'Celadores "DE DENTRO" (13)' : '"BARRUKO" Zeladoreak (13)'}
            </button>
          </div>
        </div>

        {/* Sub-selector: Funciones vs Metodología + Buscador */}
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveSection('funciones')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeSection === 'funciones'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              {language === 'es' ? 'Lista de Funciones Oficiales' : 'Funtzio Ofizialen Zerrenda'}
            </button>
            <button
              onClick={() => setActiveSection('metodologia')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeSection === 'metodologia'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              {language === 'es' ? 'Metodología de Trabajo Detallada' : 'Lan Metodologia Zehatza'}
            </button>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder={language === 'es' ? "Filtrar funciones (mortuorio, UCI, O2)..." : "Iragazi funtzioak (mortuorioa, ZIU, O2)..."}
              className={`w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                nightMode
                  ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500'
                  : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Quick Procedure Highlights Bar (3 Critical Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Balas O2 */}
        <div className={`p-4 rounded-xl border ${
          nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-bold text-xs uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>{language === 'es' ? 'Balas de O2 a Primera Hora' : 'O2 Balak Goizean Goiz'}</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            {language === 'es' 
              ? 'Revisar manómetros. Nivel rojo = cambiar por bala del almacén. Balas gastadas a control para mantenimiento.'
              : 'Manometroak aztertu. Maila gorria = biltegiko balagatik aldatu. Agortutakoak kontrolera mantentze-lanentzat.'}
          </p>
        </div>

        {/* Transfer & Camas */}
        <div className={`p-4 rounded-xl border ${
          nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex items-center gap-2 text-sky-700 dark:text-sky-400 font-bold text-xs uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span>{language === 'es' ? 'Transfer & Retiradas' : 'Transferra & Kendutakoak'}</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            {language === 'es'
              ? 'Camas a misma altura. Quitar cabecero y triángulo de Balkan en habitación. Carro y gotero fuera al antequirófano.'
              : 'Oheak altuera berean. Burukoa eta Balkan triangelua gelan kendu. Orga eta goteroa aurre-ebakigelara atera.'}
          </p>
        </div>

        {/* Protocolo Éxitus */}
        <div className={`p-4 rounded-xl border ${
          nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-xs uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>{language === 'es' ? 'Protocolo de Éxitus' : 'Éxitus Protokoloa'}</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            {language === 'es'
              ? 'Celador de dentro embolsa con enfermería. Dos celadores de fuera trasladan el cadáver al mortuorio.'
              : 'Barruko zeladoreak poltsaratzen du erizaintzarekin. Kanpoko bi zeladorek eramaten dute gorpua mortuoriora.'}
          </p>
        </div>
      </div>

      {/* Main Content: Funciones o Metodología */}
      {activeSection === 'funciones' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
            <span>
              {activeGroup === 'fuera' 
                ? (language === 'es' ? 'Funciones Celadores/as "DE FUERA"' : '"KANPOKO" Zeladoreen Funtzioak') 
                : (language === 'es' ? 'Funciones Celadores/as "DE DENTRO"' : '"BARRUKO" Zeladoreen Funtzioak')}
            </span>
            <span>
              {activeGroup === 'fuera' ? `${filteredFuncionesFuera.length} / 14` : `${filteredFuncionesDentro.length} / 13`}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(activeGroup === 'fuera' ? filteredFuncionesFuera : filteredFuncionesDentro).map((func) => (
              <div
                key={func.id}
                className={`p-4 rounded-xl border transition-all ${
                  nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {func.id}
                  </span>
                  <div className="space-y-1 flex-1">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {func.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {func.description}
                    </p>

                    {func.departmentDestination && (
                      <div className="mt-2 text-[11px] text-blue-700 dark:text-blue-400 font-medium">
                        {language === 'es' ? 'Destino: ' : 'Helmuga: '} {func.departmentDestination}
                      </div>
                    )}

                    {func.safetyNote && (
                      <div className="mt-2 p-2 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/50 text-[11px] text-amber-900 dark:text-amber-300 flex items-start gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{func.safetyNote}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Metodología Detallada */}
      {activeSection === 'metodologia' && (
        <div className="space-y-4">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
            {language === 'es' ? 'Metodología de Trabajo Oficial · ' : 'Lan Metodologia Ofiziala · '}
            {activeGroup === 'fuera' ? (language === 'es' ? 'Celadores/as "DE FUERA"' : '"KANPOKO" Zeladoreak') : (language === 'es' ? 'Celadores/as "DE DENTRO"' : '"BARRUKO" Zeladoreak')}
          </div>

          <div className="space-y-4">
            {(activeGroup === 'fuera' ? METODOLOGIA_CELADORES_FUERA : METODOLOGIA_CELADORES_DENTRO).map((step) => (
              <div
                key={step.step}
                className={`p-6 rounded-2xl border ${
                  nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
                  <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-extrabold text-sm shrink-0">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                </div>

                <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {/* Key Points Checklist */}
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 mb-2">
                      {language === 'es' ? 'Puntos Críticos de Ejecución:' : 'Egikaritzeko Puntu Kritikoak:'}
                    </h5>
                    <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                      {step.keyPoints.map((kp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{kp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      {language === 'es' ? 'Coordinación Asistencial con:' : 'Asistentzia Koordinazioa:'}
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {step.collaborationWith.map((collab, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                        >
                          {collab}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
