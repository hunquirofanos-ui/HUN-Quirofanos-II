import React, { useState, useMemo } from 'react';
import { 
  Sliders, 
  Search, 
  AlertTriangle, 
  CheckCircle2, 
  Layers, 
  Image as ImageIcon, 
  FileText, 
  ExternalLink,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Info,
  X,
  Video,
  Play
} from 'lucide-react';
import { 
  PRE_ENTRY_GOLDEN_RULES, 
  TRAUMA_TABLE_PREPARATION_SECTIONS, 
  UROLOGIA_PROLONGACION_PELVICA_LIST,
  PRE_ENTRY_TRAUMA_SHEET_IMG,
  PRE_ENTRY_URO_SHEET_IMG,
  PRE_ENTRY_RULES_SHEET_IMG,
  OFFICIAL_HUN_LOGO_IMG,
  GoldenRuleItem
} from '../data/tablePreEntryProtocols';
import { Language } from '../types/operatingRoom';
import { TRANSLATIONS } from '../i18n/translations';

interface TablePreEntryPreparationProps {
  nightMode: boolean;
  language: Language;
  onNavigateToSurgerySearch?: (query?: string) => void;
  onNavigateToVideos?: (videoId?: string) => void;
}

export const TablePreEntryPreparation: React.FC<TablePreEntryPreparationProps> = ({
  nightMode,
  language,
  onNavigateToSurgerySearch,
  onNavigateToVideos
}) => {
  const t = TRANSLATIONS[language];
  const [activeTab, setActiveTab] = useState<'todos' | 'reglas' | 'trauma' | 'urologia' | 'fichas'>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSheetModal, setSelectedSheetModal] = useState<string | null>(null);
  const [selectedVideoModal, setSelectedVideoModal] = useState<{ title: string; url: string; warning?: string } | null>(null);

  // Filtered rules
  const filteredRules = useMemo(() => {
    if (!searchQuery.trim()) return PRE_ENTRY_GOLDEN_RULES;
    const q = searchQuery.toLowerCase();
    return PRE_ENTRY_GOLDEN_RULES.filter(r => 
      r.specialtyOrSurgery.toLowerCase().includes(q) ||
      r.specialtyOrSurgeryEu.toLowerCase().includes(q) ||
      r.ruleInstruction.toLowerCase().includes(q) ||
      r.ruleInstructionEu.toLowerCase().includes(q) ||
      r.clinicalReason.toLowerCase().includes(q) ||
      r.operatingRoom.toLowerCase().includes(q) ||
      r.tag.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Filtered trauma sections
  const filteredTrauma = useMemo(() => {
    if (!searchQuery.trim()) return TRAUMA_TABLE_PREPARATION_SECTIONS;
    const q = searchQuery.toLowerCase();
    return TRAUMA_TABLE_PREPARATION_SECTIONS.map(section => {
      const matchingProcedures = section.procedures.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.nameEu.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q)
      );
      const sectionMatches = section.title.toLowerCase().includes(q) || section.description.toLowerCase().includes(q);
      if (sectionMatches) return section;
      if (matchingProcedures.length > 0) {
        return { ...section, procedures: matchingProcedures };
      }
      return null;
    }).filter(Boolean) as typeof TRAUMA_TABLE_PREPARATION_SECTIONS;
  }, [searchQuery]);

  // Filtered urology procedures
  const filteredUro = useMemo(() => {
    if (!searchQuery.trim()) return UROLOGIA_PROLONGACION_PELVICA_LIST;
    const q = searchQuery.toLowerCase();
    return UROLOGIA_PROLONGACION_PELVICA_LIST.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.nameEu.toLowerCase().includes(q) ||
      p.acronym.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const totalResults = filteredRules.length + filteredTrauma.reduce((acc, s) => acc + s.procedures.length, 0) + filteredUro.length;

  return (
    <div className="space-y-4 sm:space-y-6 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className={`p-4 sm:p-6 rounded-2xl border transition-colors ${
        nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-5">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="min-w-0 flex-1">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/60 text-[10px] sm:text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wide max-w-full">
                <Sliders className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{language === 'es' ? 'Protocolo Esencial Pre-Entrada · HUN Área General V' : 'Aurre-Sarrerako Funtsezko Protokoloa · NUO V. Eremu Orokorra'}</span>
              </div>
              <h1 className="text-base sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1.5 leading-snug break-words">
                {language === 'es' 
                  ? 'Preparación de la Mesa Quirúrgica Antes de Entrar y Pasar al Paciente' 
                  : 'Mahai Kirurgikoaren Prestaketa Ebakigelara Sartu eta Pazientea Pasa Aurretik'}
              </h1>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 mt-1.5 max-w-3xl leading-relaxed">
                {language === 'es' 
                  ? 'Información clínica crítica para celadores/as de dentro y enfermería: cómo configurar la mesa según patología y cirujano antes del transfer (Mesa Normal, Pelvistato, Silla de Playa, Prolongador Dorsal, Prolongación Pélvica y reglas de vaciado vesical).'
                  : 'Zeladore eta erizaintzarentzako informazio kritikoa: mahaia patologiaren eta zirujauaren arabera prestatzea transferra egin aurretik (Mahai Arrunta, Pelbistatoa, Hondartza Aulkia, Bizkarraldeko Luzagailua, Luzapen Pelbikoa eta maskuria husteko arauak).'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full sm:w-auto shrink-0 pt-1 lg:pt-0">
            {onNavigateToVideos && (
              <button
                onClick={() => onNavigateToVideos()}
                className="w-full sm:w-auto justify-center px-3.5 py-2 text-xs font-semibold rounded-xl bg-red-600 hover:bg-red-700 text-white transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <Video className="w-4 h-4 shrink-0" />
                <span>{language === 'es' ? 'Vídeos TruSystem (11)' : 'TruSystem Bideoak (11)'}</span>
              </button>
            )}
            <button
              onClick={() => setSelectedSheetModal(PRE_ENTRY_TRAUMA_SHEET_IMG)}
              className="w-full sm:w-auto justify-center px-3.5 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              <ImageIcon className="w-4 h-4 text-blue-600 shrink-0" />
              <span>{language === 'es' ? 'Fichas Originales (3)' : 'Jatorrizko Fitxak (3)'}</span>
            </button>
          </div>
        </div>

        {/* Search Input Bar & Tabs */}
        <div className="mt-4 pt-3.5 sm:mt-5 sm:pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          <div className="relative w-full md:flex-1 min-w-0">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'es' 
                ? "Buscar: 'apendicitis', 'olecranon', 'uzcanga', 'pelvistato'..." 
                : "Bilatu: 'apendizitis', 'olekranon', 'pelbistato'..."}
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

          {/* Tab selector - smooth horizontal scroll on mobile */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 md:pb-0 w-full md:w-auto scrollbar-none -mx-1 px-1 md:mx-0 md:px-0">
            <button
              onClick={() => setActiveTab('todos')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors shrink-0 flex items-center gap-1.5 ${
                activeTab === 'todos'
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <span>{language === 'es' ? 'Todo' : 'Guztia'}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                activeTab === 'todos' ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
              }`}>
                {totalResults}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('reglas')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors shrink-0 flex items-center gap-1.5 ${
                activeTab === 'reglas'
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{language === 'es' ? 'Reglas de Oro' : 'Urrezko Arauak'}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                activeTab === 'reglas' ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
              }`}>
                {filteredRules.length}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('trauma')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors shrink-0 flex items-center gap-1.5 ${
                activeTab === 'trauma'
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <span>{language === 'es' ? 'Traumatología (Q7-Q8)' : 'Traumatologia (Q7-Q8)'}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                activeTab === 'trauma' ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
              }`}>
                {filteredTrauma.length}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('urologia')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors shrink-0 flex items-center gap-1.5 ${
                activeTab === 'urologia'
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <span>{language === 'es' ? 'Urología Prolongación' : 'Urologia Luzapena'}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                activeTab === 'urologia' ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
              }`}>
                {filteredUro.length}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('fichas')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors shrink-0 flex items-center gap-1.5 ${
                activeTab === 'fichas'
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <span>{language === 'es' ? 'Fichas Originales' : 'Fitxa Originalak'}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                activeTab === 'fichas' ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
              }`}>
                3
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 1: REGLAS DE ORO PRE-PASO DEL PACIENTE */}
      {(activeTab === 'todos' || activeTab === 'reglas') && (
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 px-1">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white truncate">
                {language === 'es' ? 'Reglas Críticas Pre-Paso del Paciente (Ficha 2 Oficial)' : 'Pazientea Pasa Aurreko Arau Kritikoak (2. Fitxa Ofiziala)'}
              </h2>
            </div>
            <span className="text-[11px] sm:text-xs text-slate-500 pl-4 sm:pl-0 shrink-0">
              {filteredRules.length} {language === 'es' ? 'indicaciones' : 'ohar'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {filteredRules.map((rule) => (
              <div
                key={rule.id}
                className={`p-3.5 sm:p-4 rounded-xl border transition-all ${
                  rule.severity === 'critical'
                    ? 'border-red-300 bg-red-50/70 dark:bg-red-950/30 dark:border-red-900/60'
                    : nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${
                    rule.severity === 'critical'
                      ? 'bg-red-600 text-white'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                  }`}>
                    {rule.tag}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 dark:text-slate-400 shrink-0">
                    {rule.operatingRoom}
                  </span>
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-2 leading-snug">
                  {language === 'es' ? rule.specialtyOrSurgery : rule.specialtyOrSurgeryEu}
                </h3>

                <div className="mt-2 p-2.5 rounded-lg bg-white/80 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800">
                  <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase block">
                    {language === 'es' ? 'Instrucción antes de entrar / pasar:' : 'Sartu / pasa aurreko agindua:'}
                  </span>
                  <span className="text-xs font-extrabold text-blue-700 dark:text-blue-400 block mt-0.5 leading-snug break-words">
                    {language === 'es' ? rule.ruleInstruction : rule.ruleInstructionEu}
                  </span>
                </div>

                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                  {language === 'es' ? rule.clinicalReason : rule.clinicalReasonEu}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 2: TRAUMATOLOGÍA Q7 - Q8 POR TIPO DE MESA */}
      {(activeTab === 'todos' || activeTab === 'trauma') && (
        <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 px-1">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0" />
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white truncate">
                {language === 'es' ? 'Quirófanos Q7 – Q8 Traumatología (Ficha 3)' : 'Q7 – Q8 Traumatologia (3. Fitxa)'}
              </h2>
            </div>
            <span className="text-[11px] sm:text-xs text-slate-500 pl-4 sm:pl-0 shrink-0">
              {filteredTrauma.length} {language === 'es' ? 'configuraciones de mesa' : 'konfigurazio mekaniko'}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
            {filteredTrauma.map((section) => (
              <div
                key={section.id}
                className={`p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border transition-all ${
                  nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2.5 sm:pb-3">
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
                      {section.operatingRooms}
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white mt-0.5 leading-snug">
                      {language === 'es' ? section.title : section.titleEu}
                    </h3>
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 shrink-0">
                    {section.procedures.length} {language === 'es' ? 'cirugías' : 'ebakuntza'}
                  </span>
                </div>

                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-2 sm:mt-2.5 leading-relaxed">
                  {language === 'es' ? section.description : section.descriptionEu}
                </p>

                <div className="mt-3 sm:mt-4 space-y-2">
                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
                    {language === 'es' ? 'Cirugías que requieren esta preparación:' : 'Prestaketa hau eskatzen duten ebakuntzak:'}
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {section.procedures.map((proc, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <div className="min-w-0 flex-1">
                          <span className="text-xs font-bold text-slate-900 dark:text-white block leading-snug break-words">
                            {language === 'es' ? proc.name : proc.nameEu}
                          </span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-0.5 leading-relaxed break-words">
                            {proc.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Silla de Playa Video Button */}
                  {section.id === 'silla-playa' && (
                    <div className="mt-3 p-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                      <div className="flex items-center gap-2">
                        <Video className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                        <span className="text-xs font-bold text-red-900 dark:text-red-300">
                          {language === 'es' ? 'Vídeo Oficial: Cirugía de Hombro · Mesa de Playa' : 'Bideo Ofiziala: Sorbalda Kirurgia · Hondartza Aulkia'}
                        </span>
                      </div>
                      <button
                        onClick={() => setSelectedVideoModal({
                          title: language === 'es' ? 'Cirugía de Hombro · Mesa de Playa (TruSystem 7500)' : 'Sorbalda Kirurgia · Hondartza Aulkia',
                          url: '/assets/aistudio/Mesa_de_Playa_0672cadf.mp4',
                          warning: language === 'es' ? '¡PASO CRÍTICO MANDATORIO! Aflojar el casco y retirar el soporte de mentón ANTES de hacer el cero en el mando.' : 'URRATS KRITIKOA! Kaskoa askatu eta kokots-euskarria kendu agintean zeroa egin AURRETIK.'
                        })}
                        className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-2xs shrink-0"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>{language === 'es' ? 'Ver Vídeo de Montaje' : 'Ikusi Muntaia Bideoa'}</span>
                      </button>
                    </div>
                  )}

                  {/* Pelvistato Video Buttons */}
                  {section.id === 'pelvistato' && (
                    <div className="mt-3 p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 space-y-2">
                      <div className="flex items-center gap-2">
                        <Video className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                        <span className="text-xs font-bold text-blue-950 dark:text-blue-200">
                          {language === 'es' ? 'Vídeos Oficiales: Carro de Tracción (Pelvistato Cadera / Fémur)' : 'Bideo Ofizialak: Trakzio Orga (Pelbistatoa Aldaka / Femurra)'}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => setSelectedVideoModal({
                            title: language === 'es' ? 'Carro de Tracción · Conexión' : 'Trakzio Orga · Konexioa',
                            url: '/assets/aistudio/Carro_de_Tracci_n_Conexi_n_84cab43c.mp4'
                          })}
                          className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-1 shadow-2xs"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>{language === 'es' ? '1. Conexión Carro' : '1. Orga Konexioa'}</span>
                        </button>
                        <button
                          onClick={() => setSelectedVideoModal({
                            title: language === 'es' ? 'Carro de Tracción · Desconexión' : 'Trakzio Orga · Deskonexioa',
                            url: '/assets/aistudio/Carro_de_Tracci_n_Desconexi_n_dc932998.mp4'
                          })}
                          className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-1 shadow-2xs"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>{language === 'es' ? '2. Desconexión' : '2. Deskonexioa'}</span>
                        </button>
                        <button
                          onClick={() => setSelectedVideoModal({
                            title: language === 'es' ? 'Carro de Tracción Atascado · Desbloqueo' : 'Trakzio Orga Trabaturik · Desblokeatzea',
                            url: '/assets/aistudio/Carro_de_Tracci_n_Atascado_e8c3a68a.mp4',
                            warning: language === 'es' ? 'Atención: si la mesa detecta obstáculo o seguros puestos abajo, soltar barras y reiniciar con el mando.' : 'Kontuz: mahaiak oztopoa detektatzen badu, barrak askatu eta berrabiarazi agintearekin.'
                          })}
                          className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-amber-600 hover:bg-amber-700 text-white flex items-center gap-1 shadow-2xs"
                        >
                          <AlertTriangle className="w-3 h-3" />
                          <span>{language === 'es' ? '3. Si se atasca' : '3. Trabatzen bada'}</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 3: UROLOGÍA PROLONGACIÓN PÉLVICA */}
      {(activeTab === 'todos' || activeTab === 'urologia') && (
        <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
          <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-950/30">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 border-b border-blue-200/80 dark:border-blue-900/60 pb-2.5 sm:pb-3">
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 block">
                  HUN B · Quirófano 5 & Quirófano 6 (Urología)
                </span>
                <h2 className="text-sm sm:text-lg font-extrabold text-blue-950 dark:text-blue-200 mt-0.5 leading-snug">
                  PROLONGACIÓN PÉLVICA (Ficha 1 Oficial)
                </h2>
              </div>
              <span className="text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-600 text-white self-start sm:self-auto shrink-0">
                {filteredUro.length} {language === 'es' ? 'Procedimientos' : 'Prozedura'}
              </span>
            </div>

            <p className="text-[11px] sm:text-xs text-blue-900/80 dark:text-blue-300 mt-2 sm:mt-2.5 leading-relaxed">
              {language === 'es' 
                ? 'Las siguientes intervenciones urológicas requieren montar el módulo de PROLONGACIÓN PÉLVICA en la mesa de Quirófano 5 y 6 antes del transfer. Recuerda colocar siempre empapador previo.'
                : 'Ondorengo urologiako ebakuntzek PROLONGACIÓN PÉLVICA modulua muntatzea eskatzen dute 5 eta 6 ebakigeletako mahaian transferra egin aurretik. Gogoratu beti enpapadorea jartzea.'}
            </p>

            {/* Urology Video Links */}
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedVideoModal({
                  title: language === 'es' ? 'Perneras de 4 Piezas TruSystem 7500' : '4 Ataleko Hanka-Euskarriak TruSystem 7500',
                  url: '/assets/aistudio/Perneras_de_4_piezas_bf004810.mp4',
                  warning: language === 'es' ? 'Mecanismo antipánico: presionar con la molleja de la mano para que el seguro quede libre y evitar caídas.' : 'Segurtasun-mekanismoa: eskuaren mamiarekin leunki sakatu segurua libre uzteko.'
                })}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-1.5 shadow-2xs"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{language === 'es' ? 'Vídeo: Perneras de 4 Piezas' : 'Bideoa: 4 Ataleko Hanka-Eusk.'}</span>
              </button>
              <button
                onClick={() => setSelectedVideoModal({
                  title: language === 'es' ? 'Posición Pilé en Quirófano HUN Urología' : 'Pilé Posizioa NUO Urologian',
                  url: '/assets/aistudio/Pil__d683c7fe.mp4'
                })}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-700 hover:bg-blue-800 text-white flex items-center gap-1.5 shadow-2xs"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{language === 'es' ? 'Vídeo: Posición Pilé' : 'Bideoa: Pilé Posizioa'}</span>
              </button>
              {onNavigateToVideos && (
                <button
                  onClick={() => onNavigateToVideos()}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center gap-1.5 transition-colors"
                >
                  <Video className="w-3.5 h-3.5 text-red-600" />
                  <span>{language === 'es' ? 'Ver Todos los Vídeos (11)' : 'Ikusi 11 Bideoak'}</span>
                </button>
              )}
            </div>

            {/* Clinical Photographs of Pelvic Extension & Perneras Clamps */}
            <div className="mt-3 sm:mt-4 p-2.5 sm:p-3.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-blue-200 dark:border-blue-900/60">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-200">
                  {language === 'es' ? 'Fotografías de montaje: Prolongación, enganches y perneras (Q5 - Q6):' : 'Muntaia-argazkiak: Luzapena, kakoak eta hanka-euskarriak (Q5 - Q6):'}
                </span>
                <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold hidden sm:inline">
                  {language === 'es' ? 'Tocar para ampliar' : 'Ukitu handitzeko'}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                {[
                  { id: 'FIG. 13-14', title: 'Prolongador y Pieza', sub: 'Zona 2 Círculos', src: `${import.meta.env.BASE_URL}assets/aistudio/fig14_758a5004.png` },
                  { id: 'FIG. 15', title: 'Rosca y Gatillos', sub: 'Sujeción pernera', src: `${import.meta.env.BASE_URL}assets/aistudio/fig15_04bdb993.jpg` },
                  { id: 'FIG. 16-17', title: 'Litotomía Allen', sub: 'Frontal y lateral', src: `${import.meta.env.BASE_URL}assets/aistudio/fig16_c63d8a43.png` },
                  { id: 'FIG. 18', title: 'Posición URS', sub: 'Pierna bajada', src: `${import.meta.env.BASE_URL}assets/aistudio/fig17_ae2c1e5a.jpg` }
                ].map((item, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedSheetModal(item.src)}
                    className="group relative rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all flex flex-col"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-slate-900 relative">
                      <img 
                        src={item.src} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                      />
                      <span className="absolute top-1 left-1 font-extrabold text-[9px] px-1.5 py-0.5 rounded bg-blue-600 text-white shadow-xs">
                        {item.id}
                      </span>
                    </div>
                    <div className="p-1.5 bg-white dark:bg-slate-900 flex-1 flex flex-col justify-center">
                      <span className="text-[10px] sm:text-xs text-slate-800 dark:text-slate-200 font-bold leading-tight truncate">
                        {item.title}
                      </span>
                      <span className="text-[9px] text-slate-500 dark:text-slate-400 truncate">
                        {item.sub}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* List of 18 urology procedures */}
            <div className="mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5">
              {filteredUro.map((proc, idx) => (
                <div
                  key={idx}
                  className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 flex items-start gap-2 sm:gap-2.5 shadow-2xs"
                >
                  <span className="w-5 h-5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-bold text-slate-900 dark:text-white block leading-snug break-words">
                      {language === 'es' ? proc.name : proc.nameEu}
                    </span>
                    <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold uppercase mt-0.5 block truncate">
                      {proc.acronym}
                    </span>
                    {proc.notes && (
                      <div className="mt-1.5 p-1.5 rounded bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-[10px] text-amber-900 dark:text-amber-300 font-medium break-words leading-tight">
                        ⚠️ {proc.notes}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SECTION 4: VISUALIZADOR DE LAS FICHAS ORIGINALES */}
      {(activeTab === 'todos' || activeTab === 'fichas') && (
        <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 px-1">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-500 shrink-0" />
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white truncate">
                {language === 'es' ? 'Documentos Auténticos Fotografías en HUN Área General V' : 'NUO V. Eremu Orokorrean Argazkiratutako Dokumentuak'}
              </h2>
            </div>
            <span className="text-[11px] sm:text-xs text-slate-500 pl-4 sm:pl-0 shrink-0">
              3 {language === 'es' ? 'hojas clínicas oficiales' : 'orri kliniko ofizial'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
            {/* Sheet 1: Prolongación Pélvica */}
            <div 
              onClick={() => setSelectedSheetModal(PRE_ENTRY_URO_SHEET_IMG)}
              className={`p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border transition-all cursor-pointer hover:border-blue-400 group ${
                nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
              }`}
            >
              <div className="aspect-[4/3] sm:aspect-[3/4] w-full rounded-lg sm:rounded-xl overflow-hidden bg-slate-950 relative border border-slate-200 dark:border-slate-800">
                <img 
                  src={PRE_ENTRY_URO_SHEET_IMG} 
                  alt="Ficha 1: Prolongación Pélvica Urología"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2.5 sm:p-3">
                  <span className="text-[11px] sm:text-xs font-bold text-white flex items-center gap-1.5">
                    <ExternalLink className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{language === 'es' ? 'Tocar para ampliar Ficha 1' : 'Ukitu 1. Fitxa handitzeko'}</span>
                  </span>
                </div>
              </div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white mt-2 leading-snug">
                Ficha 1: Prolongación Pélvica
              </h4>
              <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 line-clamp-2">
                Urología: 18 cirugías protocolizadas (URS, NLP, Pieloplastia, etc.)
              </p>
            </div>

            {/* Sheet 2: Reglas de Oro */}
            <div 
              onClick={() => setSelectedSheetModal(PRE_ENTRY_RULES_SHEET_IMG)}
              className={`p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border transition-all cursor-pointer hover:border-blue-400 group ${
                nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
              }`}
            >
              <div className="aspect-[4/3] sm:aspect-[3/4] w-full rounded-lg sm:rounded-xl overflow-hidden bg-slate-950 relative border border-slate-200 dark:border-slate-800">
                <img 
                  src={PRE_ENTRY_RULES_SHEET_IMG} 
                  alt="Ficha 2: Oftalmología Stryker/Middar, Otorrino Cuernos, Apendicitis"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2.5 sm:p-3">
                  <span className="text-[11px] sm:text-xs font-bold text-white flex items-center gap-1.5">
                    <ExternalLink className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{language === 'es' ? 'Tocar para ampliar Ficha 2' : 'Ukitu 2. Fitxa handitzeko'}</span>
                  </span>
                </div>
              </div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white mt-2 leading-snug">
                Ficha 2: Reglas de Oro Pre-Paso
              </h4>
              <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 line-clamp-2">
                Apendicitis orinar, Uzcanga cuernos, Stryker/Middar, Pañal edad.
              </p>
            </div>

            {/* Sheet 3: Trauma Q7-Q8 */}
            <div 
              onClick={() => setSelectedSheetModal(PRE_ENTRY_TRAUMA_SHEET_IMG)}
              className={`p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border transition-all cursor-pointer hover:border-blue-400 group ${
                nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
              }`}
            >
              <div className="aspect-[4/3] sm:aspect-[3/4] w-full rounded-lg sm:rounded-xl overflow-hidden bg-slate-950 relative border border-slate-200 dark:border-slate-800">
                <img 
                  src={PRE_ENTRY_TRAUMA_SHEET_IMG} 
                  alt="Ficha 3: Quirófanos G7-G8 Trauma"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2.5 sm:p-3">
                  <span className="text-[11px] sm:text-xs font-bold text-white flex items-center gap-1.5">
                    <ExternalLink className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{language === 'es' ? 'Tocar para ampliar Ficha 3' : 'Ukitu 3. Fitxa handitzeko'}</span>
                  </span>
                </div>
              </div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white mt-2 leading-snug">
                Ficha 3: Traumatología Q7 – Q8
              </h4>
              <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 line-clamp-2">
                Mesa Normal, Pelvistato, Pélvico, Silla Playa, Prolongador Dorsal.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal for Full View */}
      {selectedSheetModal && (
        <div 
          onClick={() => setSelectedSheetModal(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xs flex items-center justify-center p-2 sm:p-6 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[94vh] flex flex-col rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl"
          >
            <div className="p-3 border-b border-slate-800 flex items-center justify-between text-white">
              <span className="text-xs sm:text-sm font-bold truncate pr-2">
                {language === 'es' ? 'Documento Oficial HUN Área General V' : 'NUO V. Eremu Orokorreko Dokumentu Ofiziala'}
              </span>
              <button 
                onClick={() => setSelectedSheetModal(null)}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 shrink-0 min-h-[36px] min-w-[36px] flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-auto p-2 bg-slate-950 flex items-center justify-center min-h-[50vh]">
              <img 
                src={selectedSheetModal} 
                alt="Documento ampliado" 
                className="max-h-[82vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      {/* Video Player Modal */}
      {selectedVideoModal && (
        <div 
          onClick={() => setSelectedVideoModal(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex items-center justify-center p-2 sm:p-6 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[94vh] flex flex-col rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl"
          >
            <div className="p-3.5 border-b border-slate-800 flex items-center justify-between text-white bg-slate-950">
              <div className="flex items-center gap-2 min-w-0 pr-2">
                <Video className="w-4 h-4 text-red-500 shrink-0" />
                <span className="text-xs sm:text-sm font-bold truncate">
                  {selectedVideoModal.title}
                </span>
              </div>
              <button 
                onClick={() => setSelectedVideoModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 shrink-0 min-h-[36px] min-w-[36px] flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {selectedVideoModal.warning && (
              <div className="p-2.5 bg-amber-950/60 border-b border-amber-900/60 text-amber-200 text-xs font-medium flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{selectedVideoModal.warning}</span>
              </div>
            )}
            <div className="p-2 sm:p-4 bg-black flex items-center justify-center">
              <video
                src={selectedVideoModal.url}
                controls
                autoPlay
                playsInline
                className="max-h-[75vh] w-auto max-w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
