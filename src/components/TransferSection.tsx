import React, { useState } from 'react';
import { 
  Sliders, 
  ArrowRightLeft, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  Users, 
  Activity,
  Maximize2,
  Search,
  FileSpreadsheet
} from 'lucide-react';
import { TablePreEntryPreparation } from './TablePreEntryPreparation';
import { SurgerySearch } from './SurgerySearch';
import { Language, SurgeryProtocol } from '../types/operatingRoom';
import { TRANSLATIONS } from '../i18n/translations';

interface TransferSectionProps {
  nightMode: boolean;
  language: Language;
  onNavigateToSurgerySearch?: (query?: string) => void;
  onNavigateToVideos?: (videoId?: string) => void;
  onAddToPortfolio?: (surgery: SurgeryProtocol) => void;
}

export const TransferSection: React.FC<TransferSectionProps> = ({
  nightMode,
  language,
  onNavigateToSurgerySearch,
  onNavigateToVideos,
  onAddToPortfolio
}) => {
  const t = TRANSLATIONS[language];
  const [activeSubTab, setActiveSubTab] = useState<'mesa' | 'buscador'>('mesa');

  return (
    <div className="space-y-6 pb-10">
      {/* Transfer Area Didactic Intro Card */}
      <section className={`p-5 sm:p-7 rounded-3xl border transition-colors ${
        nightMode ? 'bg-slate-900 border-slate-800' : 'bg-gradient-to-r from-amber-50/70 via-white to-blue-50/50 border-amber-200/80 shadow-sm'
      }`}>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
              <ArrowRightLeft className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
              <span>{language === 'es' ? 'Zona de Transfer · Quirófano Central II & Urgencias II' : 'Transfer Gunea · Erdiko II Ebakigela & Larrialdiak II'}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              {language === 'es' ? 'Apartado 3 · Transfer' : '3. Atala · Transferra'}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              {language === 'es'
                ? 'El transfer es la esclusa crítica de seguridad donde convergen el Celador de Fuera, el Celador de Dentro y Enfermería. Antes de meter y pasar al paciente, la mesa quirúrgica debe estar configurada con sus tramos, accesorios específicos y cabecero según la especialidad, la patología y la técnica anestésica prevista.'
                : 'Transferra segurtasun-gune kritikoa da, non Kanpoko Zeladoreak, Barruko Zeladoreak eta Erizaintzak bat egiten duten. Pazientea sartu eta pasa aurretik, mahai kirurgikoa bere zatiekin, osagarri zehatzekin eta burukoarekin prestatuta egon behar da aurreikusitako espezialitate, patologia eta anestesia-teknikaren arabera.'}
            </p>
          </div>

          {/* Transfer Fast Checklist Badge */}
          <div className={`p-4 rounded-2xl border text-xs space-y-2 shrink-0 max-w-sm ${
            nightMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-white border-amber-200 text-slate-700 shadow-2xs'
          }`}>
            <span className="font-extrabold uppercase tracking-wide text-amber-800 dark:text-amber-400 block text-[11px] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>{language === 'es' ? '3 Pasos de Seguridad en el Paso:' : '3 Segurtasun Urrats Pasatzean:'}</span>
            </span>
            <ul className="space-y-1.5 text-[11px]">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{language === 'es' ? 'Nivelación exacta de altura entre cama y mesa quirúrgica.' : 'Ohearen eta mahaiaren arteko altuera zehatza.'}</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{language === 'es' ? 'Frenos bloqueados en ambos soportes antes de transferir.' : 'Balaztak blokeatuta bi euskarrietan pasa aurretik.'}</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{language === 'es' ? 'Uso de tabla de transfer y protección estricta de vías/sondas.' : 'Transfer taula erabili eta bideak/zundak zaindu.'}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Subtab Switcher: Mesa Preparation vs Surgery Search */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 gap-2">
        <button
          onClick={() => setActiveSubTab('mesa')}
          className={`py-2.5 px-4 text-xs sm:text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
            activeSubTab === 'mesa'
              ? 'border-blue-600 text-blue-600 dark:text-blue-400'
              : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
        >
          <Sliders className="w-4 h-4" />
          <span>{language === 'es' ? 'Preparación de la Mesa Antes de Entrar y Pasar al Paciente' : 'Mahai Kirurgikoaren Prestaketa Pazientea Pasa Aurretik'}</span>
        </button>

        <button
          onClick={() => setActiveSubTab('buscador')}
          className={`py-2.5 px-4 text-xs sm:text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
            activeSubTab === 'buscador'
              ? 'border-blue-600 text-blue-600 dark:text-blue-400'
              : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
        >
          <Search className="w-4 h-4" />
          <span>{language === 'es' ? 'Buscador Interactivo de Intervenciones' : 'Ebakuntzen Bilatzaile Interaktiboa'}</span>
        </button>
      </div>

      {/* TAB 1: Full Original Section "Preparación de la Mesa Quirúrgica Antes de Entrar y Pasar al Paciente" */}
      {activeSubTab === 'mesa' && (
        <TablePreEntryPreparation
          nightMode={nightMode}
          language={language}
          onNavigateToSurgerySearch={(query) => setActiveSubTab('buscador')}
          onNavigateToVideos={onNavigateToVideos}
        />
      )}

      {/* TAB 2: Interactive Surgery Search inside Transfer */}
      {activeSubTab === 'buscador' && (
        <SurgerySearch
          nightMode={nightMode}
          language={language}
          onAddToPortfolio={onAddToPortfolio || (() => {})}
          onNavigateToPositions={() => setActiveSubTab('mesa')}
        />
      )}
    </div>
  );
};
