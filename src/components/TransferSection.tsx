import React, { useState } from 'react';
import { 
  Sliders, 
  ArrowRightLeft, 
  ShieldCheck, 
  CheckCircle2, 
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
  onNavigateToOrlEquipment?: () => void;
  onAddToPortfolio?: (surgery: SurgeryProtocol) => void;
}

export const TransferSection: React.FC<TransferSectionProps> = ({
  nightMode,
  language,
  onNavigateToSurgerySearch,
  onNavigateToVideos,
  onNavigateToOrlEquipment,
  onAddToPortfolio
}) => {
  const t = TRANSLATIONS[language];
  const [activeSubTab, setActiveSubTab] = useState<'mesa' | 'buscador'>('mesa');

  return (
    <div className="space-y-6 pb-10">
      {/* Subtab Switcher: Mesa Preparation por Especialidades vs Buscador Interactivo Global */}
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
          <span>{language === 'es' ? 'Transfer & Preparación de Mesa por Especialidades' : 'Transferra & Mahaiaren Prestaketa Espezialitatez'}</span>
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
          <span>{language === 'es' ? 'Buscador Clínico General de Cirugías' : 'Kirurgien Bilatzaile Kliniko Orokorra'}</span>
        </button>
      </div>

      {/* TAB 1: Mesa Preparation Reorganized by the 5 Specialties */}
      {activeSubTab === 'mesa' && (
        <TablePreEntryPreparation
          nightMode={nightMode}
          language={language}
          onNavigateToSurgerySearch={(query) => setActiveSubTab('buscador')}
          onNavigateToVideos={onNavigateToVideos}
          onNavigateToOrlEquipment={onNavigateToOrlEquipment}
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
