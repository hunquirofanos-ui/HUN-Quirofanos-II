import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Stethoscope, 
  Layers, 
  Sliders, 
  CheckCircle2, 
  ArrowRight, 
  BookmarkPlus, 
  AlertTriangle,
  Clock,
  Sparkles,
  X,
  FileText,
  ZoomIn
} from 'lucide-react';
import { SPECIALTIES, SURGERY_PROTOCOLS } from '../data/operatingRoomData';
import { UROLOGY_FIGURES_IMAGE_MAP } from '../data/urologyHunOfficialDoc';
import { SurgeryProtocol, Language } from '../types/operatingRoom';
import { TRANSLATIONS } from '../i18n/translations';

interface SurgerySearchProps {
  nightMode: boolean;
  language: Language;
  onAddToPortfolio: (surgery: SurgeryProtocol) => void;
  onNavigateToPositions: () => void;
  onNavigateToUrologyDoc?: () => void;
}

export const SurgerySearch: React.FC<SurgerySearchProps> = ({
  nightMode,
  language,
  onAddToPortfolio,
  onNavigateToPositions,
  onNavigateToUrologyDoc
}) => {
  const t = TRANSLATIONS[language];
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPositionFilter, setSelectedPositionFilter] = useState<string>('all');
  const [activeSurgeryModal, setActiveSurgeryModal] = useState<SurgeryProtocol | null>(null);
  const [selectedPhotoModal, setSelectedPhotoModal] = useState<{ src: string; title: string; figId: string } | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Filtered protocols with bilingual support
  const filteredSurgeries = useMemo(() => {
    return SURGERY_PROTOCOLS.filter(surgery => {
      // Specialty filter
      if (selectedSpecialty !== 'all' && surgery.specialtyId !== selectedSpecialty) {
        return false;
      }
      // Position filter
      if (selectedPositionFilter !== 'all' && surgery.position.code !== selectedPositionFilter) {
        return false;
      }
      // Text search
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = surgery.name.toLowerCase().includes(query) || (surgery.nameEu && surgery.nameEu.toLowerCase().includes(query));
        const matchesOR = surgery.operatingRoom.toLowerCase().includes(query);
        const matchesSummary = surgery.summary.toLowerCase().includes(query) || (surgery.summaryEu && surgery.summaryEu.toLowerCase().includes(query));
        const matchesPosition = surgery.position.name.toLowerCase().includes(query) || (surgery.position.nameEu && surgery.position.nameEu.toLowerCase().includes(query));
        const matchesAccessories = surgery.requiredAccessories.some(acc => 
          acc.name.toLowerCase().includes(query) || 
          (acc.nameEu && acc.nameEu.toLowerCase().includes(query)) ||
          acc.category.toLowerCase().includes(query)
        );
        return matchesName || matchesOR || matchesSummary || matchesPosition || matchesAccessories;
      }
      return true;
    });
  }, [selectedSpecialty, selectedPositionFilter, searchQuery]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleQuickAdd = (surgery: SurgeryProtocol, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToPortfolio(surgery);
    showToast(`"${language === 'es' ? surgery.name : (surgery.nameEu || surgery.name)}": ${t.addedToPortfolioToast}`);
  };

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 border border-slate-700 animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
          <span className="text-xs font-medium">{toastMessage}</span>
          <button 
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white ml-2"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Official Urology Document Callout */}
      {onNavigateToUrologyDoc && (
        <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50/70 dark:bg-blue-950/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-blue-900 dark:text-blue-300">
                {language === 'es' ? 'Documento Oficial Integrado: Quirófano Central HUN B - Urología' : 'Dokumentu Ofizial Integratua: NUO B Erdiko Ebakigela - Urologia'}
              </h4>
              <p className="text-[11px] text-blue-700 dark:text-blue-400">
                {language === 'es' 
                  ? 'Consulta los protocolos de Nefrectomías con Pilé, RTU con Allen, URS y NLP con sus 20 figuras y video oficial del mando SensorLine.' 
                  : 'Kontsultatu Nefrektomiak Pilé-rekin, RTU, URS eta NLP protokoloak 20 irudiekin eta SensorLine bideo ofizialarekin.'}
              </p>
            </div>
          </div>
          <button
            onClick={onNavigateToUrologyDoc}
            className="px-3.5 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-2xs transition-colors whitespace-nowrap self-start sm:self-auto flex items-center gap-1.5"
          >
            <span>{language === 'es' ? 'Ver Guía y Video Urología' : 'Ikusi Urologia Gida eta Bideoa'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Search and Filter Bar */}
      <div className={`p-5 rounded-2xl border transition-colors ${
        nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-3">
            {/* Primary input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                  nightMode
                    ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500'
                    : 'bg-slate-50/70 border-slate-200 text-slate-900 placeholder-slate-400'
                }`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Position filter dropdown */}
            <div className="w-full md:w-64">
              <select
                value={selectedPositionFilter}
                onChange={(e) => setSelectedPositionFilter(e.target.value)}
                className={`w-full px-3.5 py-2.5 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                  nightMode
                    ? 'bg-slate-950 border-slate-800 text-white'
                    : 'bg-slate-50/70 border-slate-200 text-slate-900'
                }`}
              >
                <option value="all">{t.allPositions}</option>
                <option value="decubito_supino">{language === 'es' ? 'Decúbito Supino' : 'Bizkarrez Etzana'}</option>
                <option value="decubito_lateral_pile">{language === 'es' ? 'Decúbito Lateral con Pilé (Uro)' : 'Albo-etzana Pilé-arekin (Uro)'}</option>
                <option value="silla_de_playa">{language === 'es' ? 'Silla de Playa (Beach Chair)' : 'Hondartza Aulkia'}</option>
                <option value="litotomia">{language === 'es' ? 'Litotomía / Ginecológica' : 'Litotomia (Allen)'}</option>
                <option value="posicion_urs">{language === 'es' ? 'Posición URS (Pierna bajada)' : 'URS Posizioa (Hanka jaitsita)'}</option>
                <option value="posicion_nlp">{language === 'es' ? 'Posición NLP (Rodillo renal)' : 'NLP Posizioa (Arrabola)'}</option>
                <option value="trendelenburg_topes">{language === 'es' ? 'Trendelenburg con Topes' : 'Trendelenburg Toperekin'}</option>
                <option value="decubito_lateral">{language === 'es' ? 'Decúbito Lateral Estricto' : 'Albo-etzan Zorrotza'}</option>
                <option value="mesa_traccion">{language === 'es' ? 'Mesa de Tracción Ortopédica' : 'Trakzio Mahai Ortopedikoa'}</option>
                <option value="posicion_rose">{language === 'es' ? 'Posición de Rose (ORL)' : 'Rose Posizioa (ORL)'}</option>
              </select>
            </div>
          </div>

          {/* Specialty Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            <button
              onClick={() => setSelectedSpecialty('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                selectedSpecialty === 'all'
                  ? 'bg-slate-900 text-white dark:bg-blue-600'
                  : nightMode
                  ? 'bg-slate-800 text-slate-400 hover:text-slate-200'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {t.allSpecialties} ({SURGERY_PROTOCOLS.length})
            </button>

            {SPECIALTIES.map((spec) => {
              const isSelected = selectedSpecialty === spec.id;
              const count = SURGERY_PROTOCOLS.filter(s => s.specialtyId === spec.id).length;
              const nameDisplay = language === 'es' ? spec.shortName : (spec.shortNameEu || spec.shortName);
              return (
                <button
                  key={spec.id}
                  onClick={() => setSelectedSpecialty(spec.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-2xs'
                      : nightMode
                      ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{nameDisplay}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-blue-700 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
        <span>{filteredSurgeries.length} {t.showingSurgeries}</span>
        <button
          onClick={onNavigateToPositions}
          className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center gap-1"
        >
          <span>{t.viewPositionAtlas}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Empty State */}
      {filteredSurgeries.length === 0 && (
        <div className={`text-center py-12 px-4 rounded-2xl border ${
          nightMode ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-white border-slate-200 text-slate-500'
        }`}>
          <Stethoscope className="w-10 h-10 mx-auto text-slate-400 mb-3" />
          <h4 className="text-base font-bold text-slate-900 dark:text-white">
            {language === 'es' ? 'No se encontraron cirugías para este filtro' : 'Ez da ebakuntzarik aurkitu iragazki honekin'}
          </h4>
          <p className="text-xs max-w-md mx-auto mt-1 text-slate-500">
            {language === 'es' 
              ? 'Prueba a buscar por otro término (ej: "pilé", "nefrectomía", "perneras", "hombro") o restablece los filtros.' 
              : 'Probatu beste bilaketa batekin (adib: "pilé", "nefrektomia", "hanka-euskarriak") edo berrabiarazi iragazkiak.'}
          </p>
          <button
            onClick={() => { setSelectedSpecialty('all'); setSearchQuery(''); setSelectedPositionFilter('all'); }}
            className="mt-4 px-4 py-2 text-xs font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {language === 'es' ? 'Restablecer todos los filtros' : 'Berrabiarazi iragazki guztiak'}
          </button>
        </div>
      )}

      {/* Surgery Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredSurgeries.map((surgery) => {
          const spec = SPECIALTIES.find(s => s.id === surgery.specialtyId);
          const surgeryTitle = language === 'es' ? surgery.name : (surgery.nameEu || surgery.name);
          const surgerySummary = language === 'es' ? surgery.summary : (surgery.summaryEu || surgery.summary);
          const positionTitle = language === 'es' ? surgery.position.name : (surgery.position.nameEu || surgery.position.name);

          return (
            <div
              key={surgery.id}
              onClick={() => setActiveSurgeryModal(surgery)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer hover:shadow-md group ${
                nightMode 
                  ? 'bg-slate-900 border-slate-800 hover:border-slate-700' 
                  : 'bg-white border-slate-200 hover:border-blue-200'
              }`}
            >
              {/* Card top */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-blue-700 dark:text-blue-400">
                      {surgery.operatingRoom}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{language === 'es' ? spec?.name : (spec?.nameEu || spec?.name)}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {surgery.estimatedDuration}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {surgeryTitle}
                  </h3>
                </div>

                <button
                  onClick={(e) => handleQuickAdd(surgery, e)}
                  title={t.addToPortfolio}
                  className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors shrink-0"
                >
                  <BookmarkPlus className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-2">
                {surgerySummary}
              </p>

              {/* Resolution Grid: Position, Table, Accessories */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2.5">
                {/* 1. Posición */}
                <div className="flex items-start gap-2 text-xs">
                  <span className="font-semibold text-slate-700 dark:text-slate-300 w-24 shrink-0">
                    {language === 'es' ? 'Posición:' : 'Posizioa:'}
                  </span>
                  <span className="font-medium text-blue-700 dark:text-blue-400">
                    {positionTitle}
                  </span>
                </div>

                {/* 2. Mesa quirúrgica */}
                <div className="flex items-start gap-2 text-xs">
                  <span className="font-semibold text-slate-700 dark:text-slate-300 w-24 shrink-0">
                    {language === 'es' ? 'Mesa:' : 'Mahaia:'}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 line-clamp-1">
                    {surgery.tableSetup.configuration}
                  </span>
                </div>

                {/* 3. Accesorios */}
                <div className="flex items-start gap-2 text-xs">
                  <span className="font-semibold text-slate-700 dark:text-slate-300 w-24 shrink-0">
                    {language === 'es' ? 'Accesorios:' : 'Osagarriak:'}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 line-clamp-1">
                    {surgery.requiredAccessories.map(a => language === 'es' ? a.name : (a.nameEu || a.name)).join(', ')}
                  </span>
                </div>
              </div>

              {/* Bottom tag & Rule notice */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className={`text-[11px] font-medium px-2 py-0.5 rounded ${
                  surgery.specialtyId === 'urologia'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300'
                    : 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                }`}>
                  {surgery.specialtyId === 'urologia' ? t.ruleHunBInterior : t.ruleHunBAntequirofano}
                </span>

                <span className="text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  {t.viewFullProtocol}
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Comprehensive Surgery Modal / Slide-over */}
      {activeSurgeryModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-2xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className={`relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden border ${
            nightMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4 bg-slate-50/50 dark:bg-slate-950/40">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  <span>{activeSurgeryModal.operatingRoom}</span>
                  <span aria-hidden="true">·</span>
                  <span>{language === 'es' ? SPECIALTIES.find(s => s.id === activeSurgeryModal.specialtyId)?.name : SPECIALTIES.find(s => s.id === activeSurgeryModal.specialtyId)?.nameEu}</span>
                  <span aria-hidden="true">·</span>
                  <span>{language === 'es' ? 'Duración:' : 'Iraupena:'} {activeSurgeryModal.estimatedDuration}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                  {language === 'es' ? activeSurgeryModal.name : (activeSurgeryModal.nameEu || activeSurgeryModal.name)}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
                  {language === 'es' ? activeSurgeryModal.summary : (activeSurgeryModal.summaryEu || activeSurgeryModal.summary)}
                </p>
              </div>

              <button
                onClick={() => setActiveSurgeryModal(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm">
              {/* Shortcut Banner to Pilé Video if Urology */}
              {activeSurgeryModal.specialtyId === 'urologia' && onNavigateToUrologyDoc && (
                <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                      ▶
                    </div>
                    <div>
                      <span className="text-xs font-bold text-blue-900 dark:text-blue-300 block">
                        {language === 'es' ? 'Video Oficial: Manejo de Mesa Trumpf con Pilé (SensorLine)' : 'Bideo Ofiziala: Trumpf Mahaiaren Erabilera Pilé-arekin (SensorLine)'}
                      </span>
                      <span className="text-[11px] text-blue-700 dark:text-blue-400">
                        {language === 'es' ? 'Aprende los botones Flex, retorno a 0º y resolución del bloqueo de columnas.' : 'Ikasi Flex botoiak, 0º-ra itzultzea eta zutabeen blokeoaren ebazpena.'}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setActiveSurgeryModal(null);
                      onNavigateToUrologyDoc();
                    }}
                    className="px-3 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-2xs whitespace-nowrap"
                  >
                    {language === 'es' ? 'Ver Video' : 'Ikusi Bideoa'}
                  </button>
                </div>
              )}

              {/* SECTION 1: CÓMO PREPARAR LA CAMA / MESA QUIRÚRGICA */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 flex items-center gap-2">
                  <Sliders className="w-4 h-4" />
                  <span>{t.preparationTableSection}</span>
                </h3>

                <div className={`p-4 rounded-xl border grid grid-cols-1 sm:grid-cols-2 gap-4 ${
                  nightMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block">
                      {language === 'es' ? 'Configuración Mecánica Base:' : 'Oinarrizko Konfigurazio Mekanikoa:'}
                    </span>
                    <p className="text-xs font-semibold text-slate-900 dark:text-white mt-0.5">
                      {activeSurgeryModal.tableSetup.configuration}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block">
                      {language === 'es' ? 'Cabecero:' : 'Buru-euskarria:'}
                    </span>
                    <p className="text-xs font-semibold text-slate-900 dark:text-white mt-0.5">
                      {activeSurgeryModal.tableSetup.headBoardPosition === 'estandar' && (language === 'es' ? 'Cabecero estándar en posición normal' : 'Buru-euskarri estandarra ohiko posizioan')}
                      {activeSurgeryModal.tableSetup.headBoardPosition === 'retirada' && (language === 'es' ? 'Cabecero retirado para colocar accesorio específico' : 'Buru-euskarria kenduta osagarria jartzeko')}
                      {activeSurgeryModal.tableSetup.headBoardPosition === 'cabecero_oftalmologico' && (language === 'es' ? 'Cabecero ultrafino especial de Oftalmología' : 'Oftalmologiako buru-euskarri berezia')}
                      {activeSurgeryModal.tableSetup.headBoardPosition === 'corona_orl' && (language === 'es' ? 'Cabecero de corona de ORL' : 'ORLko koroa-burukoa')}
                      {activeSurgeryModal.tableSetup.headBoardPosition === 'invertida' && (language === 'es' ? 'Mesa invertida (cabeza colocada en el tramo de pies)' : 'Mahai alderantzikatua (burua oinetan)')}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block">
                      {language === 'es' ? 'Tramo de Pies:' : 'Oin-zatia:'}
                    </span>
                    <p className="text-xs font-semibold text-slate-900 dark:text-white mt-0.5">
                      {activeSurgeryModal.tableSetup.footBoardPosition === 'estandar' && (language === 'es' ? 'Tableros de pies estándar colocados' : 'Oin-ohol estandarrak jarrita')}
                      {activeSurgeryModal.tableSetup.footBoardPosition === 'retirado' && (language === 'es' ? 'Tableros de pies retirados' : 'Oin-oholak kenduta')}
                      {activeSurgeryModal.tableSetup.footBoardPosition === 'perneras_acopladas' && (language === 'es' ? 'Perneras acopladas; tablero de pies se retira tras subir piernas' : 'Hanka-euskarriak jarrita; oin-zatia kendu hankak igo ondoren')}
                      {activeSurgeryModal.tableSetup.footBoardPosition === 'prolongador' && (language === 'es' ? 'Prolongadores o módulos de apoyo' : 'Luzagailu edo euskarri moduluak')}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block">
                      {language === 'es' ? 'Inclinación / Basculación:' : 'Inklinazioa / Basculazioa:'}
                    </span>
                    <p className="text-xs font-semibold text-slate-900 dark:text-white mt-0.5">
                      {activeSurgeryModal.tableSetup.tableTiltNotes}
                    </p>
                  </div>

                  <div className="sm:col-span-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block">
                      {language === 'es' ? 'Metodología del Transfer de Paciente:' : 'Pazientearen Transfer Metodologia:'}
                    </span>
                    <p className="text-xs text-slate-700 dark:text-slate-300 mt-0.5">
                      {activeSurgeryModal.tableSetup.transferNotes}
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTION 2: POSICIÓN QUIRÚRGICA & PROTECCIÓN ANATÓMICA */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  <span>{t.positionSection}</span>
                </h3>

                <div className={`p-4 rounded-xl border ${
                  nightMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base font-bold text-slate-900 dark:text-white">
                      {language === 'es' ? activeSurgeryModal.position.name : (activeSurgeryModal.position.nameEu || activeSurgeryModal.position.name)}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300 font-semibold">
                      {language === 'es' ? 'Protocolo HUN' : 'NUO Protokoloa'}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {language === 'es' ? activeSurgeryModal.position.description : (activeSurgeryModal.position.descriptionEu || activeSurgeryModal.position.description)}
                  </p>

                  {/* Real clinical photos corresponding to this position */}
                  {activeSurgeryModal.position.figuresReferenced && activeSurgeryModal.position.figuresReferenced.length > 0 && (
                    <div className="mt-3 p-3 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-blue-900 dark:text-blue-200">
                          {language === 'es' ? 'Fotografías clínicas asociadas a esta posición (HUN B):' : 'Posizio honi lotutako argazki klinikoak (NUO B):'}
                        </span>
                        <span className="text-[10px] text-blue-700 dark:text-blue-400 font-semibold">
                          {language === 'es' ? 'Haz click para ampliar' : 'Klik handitzeko'}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                        {activeSurgeryModal.position.figuresReferenced.map(figId => {
                          const figInfo = UROLOGY_FIGURES_IMAGE_MAP[figId];
                          if (!figInfo) return null;
                          return (
                            <div
                              key={figId}
                              onClick={() => setSelectedPhotoModal({ src: figInfo.imageSrc, title: language === 'es' ? figInfo.title : figInfo.titleEu, figId })}
                              className="group relative rounded-lg overflow-hidden border border-blue-200 dark:border-slate-700 bg-slate-900 cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all"
                            >
                              <div className="aspect-video w-full overflow-hidden bg-slate-950">
                                <img
                                  src={figInfo.imageSrc}
                                  alt={`${figId} - ${figInfo.title}`}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                />
                              </div>
                              <div className="p-1.5 bg-white dark:bg-slate-900 flex items-center justify-between">
                                <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-blue-600 text-white">
                                  {figId}
                                </span>
                                <ZoomIn className="w-3 h-3 text-slate-400 group-hover:text-blue-600" />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1.5">
                        {language === 'es' ? 'Puntos de Atención para el Celador/a:' : 'Zeladorearentzako Arreta Puntuak:'}
                      </h4>
                      <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                        {activeSurgeryModal.position.pointsOfAttention.map((pt, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-blue-600 dark:text-blue-400 font-bold shrink-0">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1.5">
                        {language === 'es' ? 'Protección Anatómica y Zonas de Apoyo:' : 'Babes Anatomikoa eta Euste Guneak:'}
                      </h4>
                      <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                        {activeSurgeryModal.position.anatomicalProtection.map((prot, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{prot}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 3: ELEMENTOS & ACCESORIOS NECESARIOS */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>{t.accessoriesSection}</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeSurgeryModal.requiredAccessories.map((acc) => (
                    <div
                      key={acc.id}
                      className={`p-3 rounded-xl border ${
                        nightMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                          {language === 'es' ? acc.name : (acc.nameEu || acc.name)}
                        </h4>
                        <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shrink-0">
                          {acc.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {acc.description}
                      </p>
                      <div className="mt-2 pt-2 border-t border-slate-200 dark:border-slate-800/80 text-[11px] text-slate-600 dark:text-slate-300">
                        <strong className="text-slate-800 dark:text-slate-200">
                          {language === 'es' ? 'Montaje: ' : 'Muntaia: '}
                        </strong>
                        {acc.placementGuide}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 4: COLABORACIÓN CON ENFERMERÍA */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 flex items-center gap-2">
                  <Stethoscope className="w-4 h-4" />
                  <span>{t.nursingCoordinationSection}</span>
                </h3>

                <div className={`p-4 rounded-xl border space-y-3 ${
                  nightMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div>
                    <h4 className="text-xs font-bold text-blue-900 dark:text-blue-300 mb-1">
                      {language === 'es' ? 'Coordinación con Enfermera de Anestesia:' : 'Anestesiako Erizainarekin Koordinazioa:'}
                    </h4>
                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                      {activeSurgeryModal.nursingCollaboration.anesthesiaCoordination.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-blue-600 font-bold shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                    <h4 className="text-xs font-bold text-blue-900 dark:text-blue-300 mb-1">
                      {language === 'es' ? 'Coordinación con Enfermera Instrumentista:' : 'Erizain Instrumentistarekin Koordinazioa:'}
                    </h4>
                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                      {activeSurgeryModal.nursingCollaboration.scrubNurseCoordination.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-blue-600 font-bold shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                    <h4 className="text-xs font-bold text-blue-900 dark:text-blue-300 mb-1">
                      {t.safetyChecksTitle}:
                    </h4>
                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                      {activeSurgeryModal.nursingCollaboration.positioningSafetyChecks.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-500 font-bold shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* SECTION 5: DESTINO DE ACCESORIOS POSTQUIRÚRGICOS */}
              <div className="p-4 rounded-xl border border-amber-300/80 bg-amber-50/70 dark:bg-amber-950/30 dark:border-amber-900/60 space-y-1.5">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300">
                    {t.accessoriesDestinationTitle}
                  </h4>
                </div>
                <p className="text-xs text-amber-900 dark:text-amber-200 leading-normal">
                  <strong>{language === 'es' ? 'Ubicación de desinfección: ' : 'Desinfekzio lekua: '}</strong>
                  {activeSurgeryModal.postOpAccessoryHandling.cleaningLocation}
                </p>
                <p className="text-xs text-amber-900 dark:text-amber-200 leading-normal">
                  <strong>{language === 'es' ? 'Regla de guardado: ' : 'Gordetzeko araua: '}</strong>
                  {activeSurgeryModal.postOpAccessoryHandling.destinationRule}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 bg-slate-50/50 dark:bg-slate-950/40">
              <span className="text-xs text-slate-500">
                {t.hospitalName} · {t.pavilionName}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    onAddToPortfolio(activeSurgeryModal);
                    showToast(`"${language === 'es' ? activeSurgeryModal.name : (activeSurgeryModal.nameEu || activeSurgeryModal.name)}" ${t.addedToPortfolioToast}`);
                  }}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
                >
                  <BookmarkPlus className="w-4 h-4" />
                  <span>{t.addToPortfolio}</span>
                </button>

                <button
                  onClick={() => setActiveSurgeryModal(null)}
                  className="px-4 py-2 text-xs font-medium rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  {t.closeBtn}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enlarged Photo Modal for Clinical Figures */}
      {selectedPhotoModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedPhotoModal(null)}
        >
          <div 
            className="relative max-w-2xl w-full bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3.5 border-b border-slate-800 bg-slate-950/80">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-blue-600 text-white font-extrabold text-xs">
                  {selectedPhotoModal.figId}
                </span>
                <span className="text-xs font-bold text-white">
                  {selectedPhotoModal.title}
                </span>
              </div>
              <button
                onClick={() => setSelectedPhotoModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-3 bg-black flex items-center justify-center">
              <img
                src={selectedPhotoModal.src}
                alt={selectedPhotoModal.title}
                className="max-h-[65vh] w-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
