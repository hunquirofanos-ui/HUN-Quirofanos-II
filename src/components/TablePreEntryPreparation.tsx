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
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  ShieldAlert,
  Info,
  X,
  Video,
  Play,
  Flame,
  Ear,
  Eye,
  Activity,
  Bone,
  ChevronRight,
  Maximize2,
  ShieldCheck,
  Check,
  Stethoscope,
  Radio,
  Clock
} from 'lucide-react';
import { 
  PRE_ENTRY_GOLDEN_RULES, 
  TRAUMA_TABLE_PREPARATION_SECTIONS, 
  UROLOGIA_PROLONGACION_PELVICA_LIST,
  PRE_ENTRY_TRAUMA_SHEET_IMG,
  PRE_ENTRY_URO_SHEET_IMG,
  PRE_ENTRY_RULES_SHEET_IMG,
  PRE_ENTRY_URO_Q5Q6_MESAS_IMG,
  PRE_ENTRY_PROLONGADOR_PELVICO_AVISO_IMG,
  PELVIC_EXTENDER_WARNING,
  URO_Q5Q6_TABLE_DATA,
  OFFICIAL_HUN_LOGO_IMG,
  ALL_TRANSFER_SEARCHABLE_PROCEDURES,
  PAIN_UNIT_TRANSFER_PROTOCOL,
  SearchableTransferProcedure,
  GoldenRuleItem
} from '../data/tablePreEntryProtocols';
import { Language } from '../types/operatingRoom';
import { TRANSLATIONS } from '../i18n/translations';

interface TablePreEntryPreparationProps {
  nightMode: boolean;
  language: Language;
  initialTab?: 'todos' | 'q1' | 'q2' | 'q3_q4' | 'q5_q6' | 'q7_q8' | 'fichas';
  onNavigateToSurgerySearch?: (query?: string) => void;
  onNavigateToVideos?: (videoId?: string) => void;
  onNavigateToOrlEquipment?: () => void;
}

type TransferTab = 'todos' | 'q1' | 'q2' | 'q3_q4' | 'q5_q6' | 'q7_q8' | 'fichas';

export const TablePreEntryPreparation: React.FC<TablePreEntryPreparationProps> = ({
  nightMode,
  language,
  initialTab = 'todos',
  onNavigateToSurgerySearch,
  onNavigateToVideos,
  onNavigateToOrlEquipment
}) => {
  const t = TRANSLATIONS[language];
  const [activeTab, setActiveTab] = useState<TransferTab>(initialTab);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSheetModal, setSelectedSheetModal] = useState<string | null>(null);
  const [selectedVideoModal, setSelectedVideoModal] = useState<{ title: string; url: string; warning?: string } | null>(null);
  const [selectedProcedure, setSelectedProcedure] = useState<SearchableTransferProcedure | null>(null);
  const [expandedAccordionId, setExpandedAccordionId] = useState<string | null>(null);

  const getCeladorTransferDuties = (proc: SearchableTransferProcedure, lang: Language): string[] => {
    const common = lang === 'es' ? [
      'Nivelación milimétrica: regular la mesa de quirófano a la misma altura de la cama antes del contacto.',
      'Frenos bloqueados: asegurar las 4 ruedas de la cama y verificar el bloqueo de la columna de la mesa.',
      'Tabla de transfer y sábana de tiro: deslizamiento suave y uniforme con la ayuda de la tabla rígida o roller.',
      'Coordinación en cabecera: pase a la cuenta del anestesiólogo («1, 2, 3»), manteniendo la alineación del paciente.',
      'Vigilancia estricta de sueros, vías venosas periféricas, sondas vesicales y tubo endotraqueal para evitar arrancamientos accidentales.'
    ] : [
      'Altuera lerrokatzea: mahaia eta ohea altuera berean jarri ukitu aurretik.',
      'Balaztak blokeatuta: ohearen 4 gurpilak blokeatu eta zutabea egonkortu.',
      'Transfer taula eta maindirea: mugimendu leuna eta segurua bermatu.',
      'Koordinazioa burualdean: Anestesiologoaren zenbaketara («1, 2, 3») pazientea mugitu lerrokatuta mantenduz.',
      'Bideak, serumak eta intubazio-hodia etengabe zaindu istripuzko tirakadak saihesteko.'
    ];

    if (proc.specialtyId === 'q1-urgencias') {
      return [
        ...common,
        lang === 'es' ? 'En apendicitis y abdomen agudo: verificar obligatoriamente que el paciente haya vaciado la vejiga previamente (regla «TIENE QUE ORINAR ANTES»).' : 'Apendizitisean: egiaztatu aldez aurretik maskuria hustu duela («AURRETIK TXIZA EGIN BEHAR DU»).',
        lang === 'es' ? 'Colocación de apoyabrazos dobles acolchados con apertura obligatoria menor a 90° para prevenir plexopatía braquial.' : 'Beso-euskarriak 90° baino gutxiagoko angeluarekin kokatu plexu brakiala babesteko.'
      ];
    } else if (proc.specialtyId === 'q2-orl') {
      return [
        ...common,
        lang === 'es' ? 'Montar cabecero específico de cuernos o aro de silicona craneal según indicación antes de iniciar el transfer.' : 'Adar-euskarria edo silikonazko eraztuna muntatu transferra egin aurretik.',
        lang === 'es' ? 'Cuidado extremo al colocar la cabeza en hiperextensión cervical para no descolocar el tubo anestésico flexometálico.' : 'Arreta handia burua kokatzean intubazio-hodia ez mugitzeko.'
      ];
    } else if (proc.specialtyId === 'q3-q4-oftalmo') {
      return [
        ...common,
        lang === 'es' ? 'Acomodar la cabeza en el cabecero cóncavo ultrafino de la camilla (Stryker en Q3 o Middar en Q4) con cinta de fijación hipoalergénica si procede.' : 'Burua camillaren ahur ultrafinean egokitu (Stryker Q3an edo Middar Q4an).',
        lang === 'es' ? 'Dejar libre y despejado el suelo inferior craneal para el pedal del microscopio y facoemulsificador del cirujano.' : 'Lurzorua libre utzi oftalmologoaren pedalentzat.'
      ];
    } else if (proc.specialtyId === 'q5-q6-urologia') {
      return [
        ...common,
        lang === 'es' ? 'Colocar empapador absorbente previo en la mesa (regla mandatoria en toda urología).' : 'Enpapadore xurgatzailea jarri mahaian aldez aurretik.',
        lang === 'es' ? 'En litotomía: nalgas al filo de la mesa solo con autorización de anestesia; subir y bajar ambas piernas de forma SIMULTÁNEA entre dos celadores con perneras de regulación manual.' : 'Litotomian: ipurmasailak mahaiaren ertzera jaitsi anestesiaren baimenarekin; bi hankak batera igo eta jaitsi bi pertsonen artean eskuzko pernerak erabiliz.'
      ];
    } else {
      return [
        ...common,
        lang === 'es' ? 'Regla «EDAD» de Traumatología: colocar pañal y empapador protector antes de pasar al paciente.' : 'Traumako araua: pixoihala eta enpapadorea jarri pasa aurretik.',
        lang === 'es' ? 'En fracturas de cadera/fémur: sostener la extremidad fracturada alineada en todo momento con tracción axial suave sin torsiones.' : 'Aldaka/femur hausturetan: kaltetutako hanka lerrokatuta mantendu mugimendu osoan.'
      ];
    }
  };

  // Search filtering across all procedures
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return ALL_TRANSFER_SEARCHABLE_PROCEDURES.filter(proc => {
      return (
        proc.name.toLowerCase().includes(q) ||
        proc.nameEu.toLowerCase().includes(q) ||
        (proc.acronym && proc.acronym.toLowerCase().includes(q)) ||
        proc.specialtyLabel.toLowerCase().includes(q) ||
        proc.specialtyLabelEu.toLowerCase().includes(q) ||
        proc.operatingRoom.toLowerCase().includes(q) ||
        proc.tableType.toLowerCase().includes(q) ||
        proc.tableTypeEu.toLowerCase().includes(q) ||
        (proc.goldenRuleOrNote && proc.goldenRuleOrNote.toLowerCase().includes(q)) ||
        (proc.accessories && proc.accessories.toLowerCase().includes(q))
      );
    });
  }, [searchQuery]);

  // Tab count helpers
  const countQ1 = useMemo(() => ALL_TRANSFER_SEARCHABLE_PROCEDURES.filter(p => p.specialtyId === 'q1-urgencias').length, []);
  const countQ2 = useMemo(() => ALL_TRANSFER_SEARCHABLE_PROCEDURES.filter(p => p.specialtyId === 'q2-orl').length, []);
  const countQ3Q4 = useMemo(() => ALL_TRANSFER_SEARCHABLE_PROCEDURES.filter(p => p.specialtyId === 'q3-q4-oftalmo').length, []);
  const countQ5Q6 = useMemo(() => ALL_TRANSFER_SEARCHABLE_PROCEDURES.filter(p => p.specialtyId === 'q5-q6-urologia').length, []);
  const countQ7Q8 = useMemo(() => ALL_TRANSFER_SEARCHABLE_PROCEDURES.filter(p => p.specialtyId === 'q7-q8-trauma').length, []);

  // Specialty-specific procedure lists
  const q1Procedures = useMemo(() => ALL_TRANSFER_SEARCHABLE_PROCEDURES.filter(p => p.specialtyId === 'q1-urgencias'), []);
  const q2Procedures = useMemo(() => ALL_TRANSFER_SEARCHABLE_PROCEDURES.filter(p => p.specialtyId === 'q2-orl'), []);
  const q3q4Procedures = useMemo(() => ALL_TRANSFER_SEARCHABLE_PROCEDURES.filter(p => p.specialtyId === 'q3-q4-oftalmo'), []);

  // Sheet documents list
  const OFFICIAL_SHEETS = [
    {
      id: 'sheet-4-uro-q5q6',
      title: 'Ficha 1 Oficial: Urología Q5–Q6 (Prolongación Dorsal vs Camilla Normal)',
      titleEu: 'NUO 1. Fitxa: Urologia Q5-Q6 (Bizkarraldeko Luzagailua vs Mahai Arrunta)',
      img: PRE_ENTRY_URO_Q5Q6_MESAS_IMG,
      badge: 'Urología Q5-Q6',
      desc: 'Documento original manuscrito del Bloque Quirúrgico Central: clasificación de intervenciones, corrección de prótesis de pene a dorsal y linfadenectomía pelviana bilateral.'
    },
    {
      id: 'sheet-5-pelvic-warning',
      title: 'Ficha 2 Oficial: Aviso Mandatorio Prolongador Pélvico',
      titleEu: 'NUO 2. Fitxa: Luzatzaile Pelbikoaren Ohar Mandatorioa',
      img: PRE_ENTRY_PROLONGADOR_PELVICO_AVISO_IMG,
      badge: 'Alerta Perneras Manuales',
      desc: 'Cartel de seguridad HUN: cuando se coloca el prolongador pélvico, las perneras NO se pueden mover con el mando, solo manualmente.'
    },
    {
      id: 'sheet-2-rules',
      title: 'Ficha 3 Oficial: Reglas Críticas Pre-Paso del Paciente',
      titleEu: 'NUO 3. Fitxa: Pazientea Pasa Aurreko Urrezko Arauak',
      img: PRE_ENTRY_RULES_SHEET_IMG,
      badge: 'Reglas de Oro',
      desc: 'Reglas obligatorias de quirófano: Apendicitis (orinar antes), Otorrino (cuernos), Trauma (pañal y empapador), Oftalmo (Stryker/Middar) y Uro (empapador).'
    },
    {
      id: 'sheet-1-uro-pelvic',
      title: 'Ficha 4 Oficial: Cirugías con Prolongación Pélvica en Urología',
      titleEu: 'NUO 4. Fitxa: Urologiako Luzapen Pelbikoa duten Ebakuntzak',
      img: PRE_ENTRY_URO_SHEET_IMG,
      badge: 'Prolongación Pélvica URO',
      desc: 'Listado exhaustivo de 16 procedimientos urológicos que requieren prolongación pélvica (NLP, URS, RIRS, Dilatación uretral, Doble J).'
    },
    {
      id: 'sheet-3-trauma',
      title: 'Ficha 5 Oficial: Traumatología Q7–Q8 Mesas Pre-Entrada',
      titleEu: 'NUO 5. Fitxa: Traumatologia Q7-Q8 Ebakigela Aurreko Mahaiak',
      img: PRE_ENTRY_TRAUMA_SHEET_IMG,
      badge: 'Trauma Q7-Q8',
      desc: 'Clasificación de traumatología por tipo de mesa: Mesa Normal, Pelvistato, Pélvico, Silla de Playa y Prolongador Dorsal.'
    }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* =================================================================== */}
      {/* 1. TRANSFER AREA TOP HERO BANNER */}
      {/* =================================================================== */}
      <div className={`p-5 sm:p-7 rounded-3xl border transition-colors ${
        nightMode ? 'bg-slate-900 border-slate-800' : 'bg-gradient-to-r from-amber-50/80 via-white to-blue-50/60 border-amber-200 shadow-sm'
      }`}>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
              <Sliders className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
              <span>{language === 'es' ? 'Preparación de la Mesa Quirúrgica y Transfer · HUN' : 'Mahai Kirurgikoaren Prestaketa eta Transferra · NUO'}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              {language === 'es' 
                ? 'Transfer: Preparación de la Mesa por Especialidades' 
                : 'Transferra: Mahaiaren Prestaketa Espezialitatez'}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              {language === 'es'
                ? 'Antes de meter y pasar al paciente, la mesa de quirófano debe estar totalmente configurada según la especialidad asignada, la técnica del cirujano y las normas de seguridad del Hospital Universitario de Navarra.'
                : 'Pazientea ebakigelara sartu eta pasa aurretik, mahaia erabat prestatuta egon behar da espezialitatearen, zirujauaren teknikaren eta Nafarroako Unibertsitate Ospitaleko segurtasun-arauen arabera.'}
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 shrink-0">
            {onNavigateToVideos && (
              <button
                onClick={() => onNavigateToVideos()}
                className="w-full sm:w-auto px-3.5 py-2 text-xs font-bold rounded-xl bg-red-600 hover:bg-red-700 text-white transition-all shadow-2xs flex items-center justify-center gap-1.5"
              >
                <Video className="w-4 h-4 shrink-0" />
                <span>{language === 'es' ? 'Vídeos TruSystem (11)' : 'TruSystem Bideoak (11)'}</span>
              </button>
            )}
            <button
              onClick={() => setActiveTab('fichas')}
              className={`w-full sm:w-auto px-3.5 py-2 text-xs font-bold rounded-xl border transition-all flex items-center justify-center gap-1.5 shadow-2xs ${
                activeTab === 'fichas'
                  ? 'bg-amber-600 text-white border-amber-700'
                  : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50'
              }`}
            >
              <ImageIcon className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
              <span>{language === 'es' ? 'Fichas Originales (5)' : 'Jatorrizko Fitxak (5)'}</span>
            </button>
          </div>
        </div>

        {/* 3 Mandamentos de Seguridad del Paso */}
        <div className={`mt-5 p-3.5 sm:p-4 rounded-2xl border text-xs grid grid-cols-1 md:grid-cols-3 gap-3 ${
          nightMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-white/90 border-amber-200/90 text-slate-700 shadow-2xs'
        }`}>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold text-slate-900 dark:text-white block text-[11px]">
                {language === 'es' ? '1. Nivelación de Altura' : '1. Altuera Lerrokatzea'}
              </strong>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                {language === 'es' ? 'Ajustar la mesa de quirófano a la misma altura que la cama/camilla antes de transferir.' : 'Mahaia eta ohea altuera berean jarri pasa aurretik.'}
              </span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold text-slate-900 dark:text-white block text-[11px]">
                {language === 'es' ? '2. Frenos Bloqueados' : '2. Balaztak Blokeatuta'}
              </strong>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                {language === 'es' ? 'Bloquear totalmente las 4 ruedas de la cama y asegurar la fijación de la mesa.' : 'Ohearen 4 gurpilak blokeatu eta mahaia ondo finkatu.'}
              </span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold text-slate-900 dark:text-white block text-[11px]">
                {language === 'es' ? '3. Tabla de Transfer y Vías' : '3. Transfer Taula eta Bideak'}
              </strong>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                {language === 'es' ? 'Usar tabla rígida y sábana entremetida vigilando tubos, sueros y sondas con anestesia.' : 'Transfer taula erabili eta bideak/zundak anestesiarekin zaindu.'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 2. UNIVERSAL LIVE SEARCH BAR FOR INTERVENTIONS */}
      {/* =================================================================== */}
      <div className={`p-4 sm:p-5 rounded-2xl border transition-colors ${
        nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-blue-600" />
              <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
                {language === 'es' 
                  ? 'Buscador de Intervenciones (Especialidad, Quirófano y Mesa)' 
                  : 'Ebakuntzen Bilatzailea (Espezialitatea, Ebakigela eta Mahaia)'}
              </h2>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              {language === 'es'
                ? 'Escribe el nombre de cualquier cirugía o término para conocer al instante el quirófano, tipo de mesa requerida y precauciones de transfer.'
                : 'Idatzi edozein ebakuntzaren izena ebakigela, mahai mota eta transfer oharrak berehala ikusteko.'}
            </p>
          </div>

          <span className="text-[11px] font-bold text-slate-500 self-start sm:self-auto bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">
            {ALL_TRANSFER_SEARCHABLE_PROCEDURES.length} {language === 'es' ? 'Intervenciones catalogadas' : 'Ebakuntza'}
          </span>
        </div>

        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'es'
              ? "Buscar: 'apendicitis', 'timpanoplastia', 'catarata', 'olecranon', 'prostatectomía', 'pelvistato', 'dorsal'..."
              : "Bilatu: 'apendizitis', 'timpanoplastia', 'katarata', 'olekranon', 'pelbistato'..."}
            className={`w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
              nightMode
                ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500'
                : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
            }`}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Live Search Results Dropdown / Grid if searching */}
        {searchQuery.trim() && (
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                {searchResults.length} {language === 'es' ? 'intervenciones encontradas' : 'ebakuntza aurkituta'}
              </span>
              <button
                onClick={() => setSearchQuery('')}
                className="text-[11px] text-slate-500 hover:underline"
              >
                {language === 'es' ? 'Limpiar búsqueda' : 'Garbitu'}
              </button>
            </div>

            {searchResults.length === 0 ? (
              <div className="text-center py-6 text-xs text-slate-500">
                {language === 'es' 
                  ? `No se encontraron intervenciones con "${searchQuery}". Consulta los apartados por especialidad abajo.` 
                  : `Ez da ebakuntzarik aurkitu "${searchQuery}" bilaketarekin.`}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {searchResults.map((proc) => (
                  <div
                    key={proc.id}
                    onClick={() => setSelectedProcedure(proc)}
                    className={`p-3.5 rounded-xl border cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all ${
                      nightMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200 shadow-2xs hover:shadow-xs'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                        proc.specialtyId === 'q1-urgencias' ? 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300' :
                        proc.specialtyId === 'q2-orl' ? 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300' :
                        proc.specialtyId === 'q3-q4-oftalmo' ? 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300' :
                        proc.specialtyId === 'q5-q6-urologia' ? 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300' :
                        'bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300'
                      }`}>
                        {proc.operatingRoom}
                      </span>
                      {proc.priorityAlert && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500 text-white shrink-0">
                          {proc.priorityAlert}
                        </span>
                      )}
                    </div>

                    <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white mt-2 leading-snug">
                      {language === 'es' ? proc.name : proc.nameEu}
                    </h4>

                    <div className="mt-2 text-[11px] space-y-1">
                      <div className="flex items-start gap-1.5 text-slate-600 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white shrink-0">
                          {language === 'es' ? 'Mesa:' : 'Mahaia:'}
                        </strong>
                        <span className="font-semibold text-blue-700 dark:text-blue-400">
                          {language === 'es' ? proc.tableType : proc.tableTypeEu}
                        </span>
                      </div>

                      {proc.goldenRuleOrNote && (
                        <div className="p-2 rounded-lg bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-[11px] text-amber-900 dark:text-amber-200 font-medium">
                          {language === 'es' ? proc.goldenRuleOrNote : proc.goldenRuleOrNoteEu}
                        </div>
                      )}
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] text-slate-500 font-semibold">
                      <span>{proc.specialtyLabel}</span>
                      <span className="text-blue-600 dark:text-blue-400 flex items-center gap-0.5">
                        <span>{language === 'es' ? 'Ver detalles' : 'Ikusi'}</span>
                        <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* =================================================================== */}
      {/* 3. NAVIGATION TABS: 5 SPECIALTIES + ALL / SEARCH + OFFICIAL SHEETS */}
      {/* =================================================================== */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none border-b border-slate-200 dark:border-slate-800">
        <button
          onClick={() => setActiveTab('todos')}
          className={`px-3 py-2 text-xs font-bold rounded-xl whitespace-nowrap transition-all shrink-0 flex items-center gap-1.5 ${
            activeTab === 'todos'
              ? 'bg-blue-600 text-white shadow-2xs'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>{language === 'es' ? 'Vista General' : 'Ikuspegi Orokorra'}</span>
        </button>

        <button
          onClick={() => setActiveTab('q1')}
          className={`px-3 py-2 text-xs font-bold rounded-xl whitespace-nowrap transition-all shrink-0 flex items-center gap-1.5 ${
            activeTab === 'q1'
              ? 'bg-red-600 text-white shadow-2xs'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <Flame className="w-3.5 h-3.5 text-red-500 shrink-0" />
          <span>Q1 – URGENCIAS (24 h.)</span>
          <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
            activeTab === 'q1' ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700'
          }`}>
            {countQ1}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('q2')}
          className={`px-3 py-2 text-xs font-bold rounded-xl whitespace-nowrap transition-all shrink-0 flex items-center gap-1.5 ${
            activeTab === 'q2'
              ? 'bg-sky-600 text-white shadow-2xs'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <Ear className="w-3.5 h-3.5 text-sky-500 shrink-0" />
          <span>Q2 – OTORRINO (ORL)</span>
          <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
            activeTab === 'q2' ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700'
          }`}>
            {countQ2}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('q3_q4')}
          className={`px-3 py-2 text-xs font-bold rounded-xl whitespace-nowrap transition-all shrink-0 flex items-center gap-1.5 ${
            activeTab === 'q3_q4'
              ? 'bg-teal-600 text-white shadow-2xs'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <Eye className="w-3.5 h-3.5 text-teal-500 shrink-0" />
          <span>Q3 y Q4 – OFTALMOLOGÍA</span>
          <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
            activeTab === 'q3_q4' ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700'
          }`}>
            {countQ3Q4}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('q5_q6')}
          className={`px-3 py-2 text-xs font-bold rounded-xl whitespace-nowrap transition-all shrink-0 flex items-center gap-1.5 ${
            activeTab === 'q5_q6'
              ? 'bg-purple-600 text-white shadow-2xs'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <Activity className="w-3.5 h-3.5 text-purple-500 shrink-0" />
          <span>Q5 y Q6 – UROLOGÍA</span>
          <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
            activeTab === 'q5_q6' ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700'
          }`}>
            {countQ5Q6}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('q7_q8')}
          className={`px-3 py-2 text-xs font-bold rounded-xl whitespace-nowrap transition-all shrink-0 flex items-center gap-1.5 ${
            activeTab === 'q7_q8'
              ? 'bg-orange-600 text-white shadow-2xs'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <Bone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
          <span>Q7 y Q8 – TRAUMATOLOGÍA</span>
          <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
            activeTab === 'q7_q8' ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700'
          }`}>
            {countQ7Q8}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('fichas')}
          className={`px-3 py-2 text-xs font-bold rounded-xl whitespace-nowrap transition-all shrink-0 flex items-center gap-1.5 ${
            activeTab === 'fichas'
              ? 'bg-amber-600 text-white shadow-2xs'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <ImageIcon className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span>{language === 'es' ? 'Fichas Originales (5)' : 'Fitxak (5)'}</span>
        </button>
      </div>

      {/* =================================================================== */}
      {/* 4. TAB CONTENTS */}
      {/* =================================================================== */}

      {/* ------------------------------------------------------------------- */}
      {/* TAB: VISTA GENERAL (RESUMEN DE LAS 5 ESPECIALIDADES) */}
      {/* ------------------------------------------------------------------- */}
      {activeTab === 'todos' && (
        <div className="space-y-6">
          {/* 5 Specialty Nav Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Q1 Card */}
            <div 
              onClick={() => setActiveTab('q1')}
              className={`p-5 rounded-2xl border cursor-pointer transition-all hover:ring-2 hover:ring-red-500 group flex flex-col justify-between ${
                nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-red-200 shadow-2xs hover:shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400 flex items-center justify-center font-bold">
                      <Flame className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-red-600 dark:text-red-400 uppercase tracking-wide block">
                        Quirófano 1
                      </span>
                      <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                        Q1 – URGENCIAS (24 h.)
                      </h3>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-300 px-2 py-0.5 rounded-full border border-red-200 dark:border-red-900">
                    {countQ1} cirugías
                  </span>
                </div>

                <div className="mt-3 p-2.5 rounded-xl bg-red-50/70 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60">
                  <span className="text-[10px] font-bold text-red-800 dark:text-red-300 block uppercase">
                    Regla de Oro:
                  </span>
                  <p className="text-xs font-black text-red-900 dark:text-red-200 mt-0.5">
                    “TIENE QUE ORINAR ANTES”
                  </p>
                  <p className="text-[11px] text-red-800/80 dark:text-red-300/80 mt-1">
                    Vaciado vesical imprescindible en apendicitis y patología aguda antes del paso.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-red-600 dark:text-red-400">
                <span>Ver protocolo de mesa Q1</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Q2 Card */}
            <div 
              onClick={() => setActiveTab('q2')}
              className={`p-5 rounded-2xl border cursor-pointer transition-all hover:ring-2 hover:ring-sky-500 group flex flex-col justify-between ${
                nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-sky-200 shadow-2xs hover:shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-400 flex items-center justify-center font-bold">
                      <Ear className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wide block">
                        Quirófano 2
                      </span>
                      <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                        Q2 – OTORRINO (ORL)
                      </h3>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 px-2 py-0.5 rounded-full border border-sky-200 dark:border-sky-900">
                    {countQ2} cirugías
                  </span>
                </div>

                <div className="mt-3 p-2.5 rounded-xl bg-sky-50/70 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-900/60">
                  <span className="text-[10px] font-bold text-sky-800 dark:text-sky-300 block uppercase">
                    Regla de Oro:
                  </span>
                  <p className="text-xs font-black text-sky-900 dark:text-sky-200 mt-0.5">
                    “CUERNOS”
                  </p>
                  <p className="text-[11px] text-sky-800/80 dark:text-sky-300/80 mt-1">
                    Montar accesorio específico de cuernos en raíles craneales antes de transferir.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-sky-600 dark:text-sky-400">
                <span>Ver protocolo de mesa Q2</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Q3-Q4 Card */}
            <div 
              onClick={() => setActiveTab('q3_q4')}
              className={`p-5 rounded-2xl border cursor-pointer transition-all hover:ring-2 hover:ring-teal-500 group flex flex-col justify-between ${
                nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-teal-200 shadow-2xs hover:shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-600 dark:bg-teal-950 dark:text-teal-400 flex items-center justify-center font-bold">
                      <Eye className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wide block">
                        Quirófanos 3 y 4
                      </span>
                      <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                        Q3 Y Q4 – OFTALMOLOGÍA
                      </h3>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 px-2 py-0.5 rounded-full border border-teal-200 dark:border-teal-900">
                    {countQ3Q4} cirugías
                  </span>
                </div>

                <div className="mt-3 p-2.5 rounded-xl bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900/60">
                  <span className="text-[10px] font-bold text-teal-800 dark:text-teal-300 block uppercase">
                    Configuración de Equipos:
                  </span>
                  <p className="text-xs font-black text-teal-900 dark:text-teal-200 mt-0.5">
                    Q3: HN – STRYKER | Q4: HVC – MIDDAR
                  </p>
                  <p className="text-[11px] text-teal-800/80 dark:text-teal-300/80 mt-1">
                    Camillas con cabecero ultrafino cóncavo y libre acceso a pedales del cirujano.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-teal-600 dark:text-teal-400">
                <span>Ver protocolo de mesa Q3-Q4</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Q5-Q6 Card */}
            <div 
              onClick={() => setActiveTab('q5_q6')}
              className={`p-5 rounded-2xl border cursor-pointer transition-all hover:ring-2 hover:ring-purple-500 group flex flex-col justify-between ${
                nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-purple-200 shadow-2xs hover:shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400 flex items-center justify-center font-bold">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wide block">
                        Quirófanos 5 y 6
                      </span>
                      <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                        Q5 Y Q6 – UROLOGÍA
                      </h3>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded-full border border-purple-200 dark:border-purple-900">
                    {countQ5Q6} cirugías
                  </span>
                </div>

                <div className="mt-3 p-2.5 rounded-xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900/60">
                  <span className="text-[10px] font-bold text-purple-800 dark:text-purple-300 block uppercase">
                    Reglas Mandatorias:
                  </span>
                  <p className="text-xs font-black text-purple-900 dark:text-purple-200 mt-0.5">
                    EMPAPADOR + PERNERAS MANUALES
                  </p>
                  <p className="text-[11px] text-purple-800/80 dark:text-purple-300/80 mt-1">
                    19 cirugías en Prolongación Dorsal, 12 en Camilla Normal y 16 en Prolongación Pélvica.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-purple-600 dark:text-purple-400">
                <span>Ver clasificación Q5-Q6</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Q7-Q8 Card */}
            <div 
              onClick={() => setActiveTab('q7_q8')}
              className={`p-5 rounded-2xl border cursor-pointer transition-all hover:ring-2 hover:ring-orange-500 group flex flex-col justify-between ${
                nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-orange-200 shadow-2xs hover:shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400 flex items-center justify-center font-bold">
                      <Bone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wide block">
                        Quirófanos 7 y 8
                      </span>
                      <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                        Q7 Y Q8 – TRAUMATOLOGÍA
                      </h3>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold bg-orange-50 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 px-2 py-0.5 rounded-full border border-orange-200 dark:border-orange-900">
                    {countQ7Q8} cirugías
                  </span>
                </div>

                <div className="mt-3 p-2.5 rounded-xl bg-orange-50/70 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-900/60">
                  <span className="text-[10px] font-bold text-orange-800 dark:text-orange-300 block uppercase">
                    Reglas Mandatorias:
                  </span>
                  <p className="text-xs font-black text-orange-900 dark:text-orange-200 mt-0.5">
                    “EDAD”: PAÑAL Y EMPAPADOR
                  </p>
                  <p className="text-[11px] text-orange-800/80 dark:text-orange-300/80 mt-1">
                    5 tipos de mesa (Normal, Pelvistato, Pélvico, Silla Playa, Prolongador Dorsal) + Unidad del Dolor.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-orange-600 dark:text-orange-400">
                <span>Ver clasificación Q7-Q8</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Fichas Card */}
            <div 
              onClick={() => setActiveTab('fichas')}
              className={`p-5 rounded-2xl border cursor-pointer transition-all hover:ring-2 hover:ring-amber-500 group flex flex-col justify-between ${
                nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-amber-200 shadow-2xs hover:shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400 flex items-center justify-center font-bold">
                      <ImageIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide block">
                        Documentación Oficial HUN
                      </span>
                      <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                        FICHAS ORIGINALES ESCANEADAS
                      </h3>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-900">
                    5 Fichas
                  </span>
                </div>

                <div className="mt-3 p-2.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60">
                  <span className="text-[10px] font-bold text-amber-800 dark:text-amber-300 block uppercase">
                    Fotografías Oficiales:
                  </span>
                  <p className="text-xs font-black text-amber-900 dark:text-amber-200 mt-0.5">
                    DOCUMENTOS AUTÉNTICOS DEL HUN
                  </p>
                  <p className="text-[11px] text-amber-800/80 dark:text-amber-300/80 mt-1">
                    Visualizador interactivo a pantalla completa con zoom para cada ficha de quirófano.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400">
                <span>Ver fichas escaneadas</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Section: Reglas de Oro Oficiales Pre-Paso (Ficha 2) */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white">
                  {language === 'es' ? 'Reglas Críticas Pre-Paso del Paciente (Ficha Oficial 2 HUN)' : 'Pazientea Pasa Aurreko Urrezko Arauak (NUO 2. Fitxa Ofiziala)'}
                </h2>
              </div>
              <button
                onClick={() => setSelectedSheetModal(PRE_ENTRY_RULES_SHEET_IMG)}
                className="text-[11px] font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1 hover:underline"
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>{language === 'es' ? 'Ver Ficha 2 Original' : 'Ikusi 2. Fitxa'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {PRE_ENTRY_GOLDEN_RULES.map((rule) => (
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
                    <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                      {rule.operatingRoom}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-2 leading-snug">
                    {language === 'es' ? rule.specialtyOrSurgery : rule.specialtyOrSurgeryEu}
                  </h3>

                  <div className="mt-2 p-2.5 rounded-lg bg-white/80 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800">
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase block">
                      {language === 'es' ? 'Instrucción mandatoria antes de entrar / pasar:' : 'Agindua sartu / pasa aurretik:'}
                    </span>
                    <span className="text-xs font-black text-blue-700 dark:text-blue-400 block mt-0.5 leading-snug">
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
        </div>
      )}

      {/* ------------------------------------------------------------------- */}
      {/* TAB 1: Q1 – URGENCIAS (24 H.) */}
      {/* ------------------------------------------------------------------- */}
      {activeTab === 'q1' && (
        <div className="space-y-5 animate-in fade-in duration-150">
          {/* Back Button to Specialties List */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                setActiveTab('todos');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all shadow-2xs flex items-center gap-2 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-red-600 dark:text-red-400" />
              <span>{language === 'es' ? '← Volver al listado de especialidades' : '← Itzuli espezialitateen zerrendara'}</span>
            </button>
            <span className="text-xs font-bold text-slate-500">
              {q1Procedures.length} {language === 'es' ? 'Intervenciones catalogadas' : 'Ebakuntza'}
            </span>
          </div>

          {/* Header Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-red-50/70 dark:bg-red-950/30 border border-red-200 dark:border-red-900/60">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold shadow-xs">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-700 dark:text-red-400 block">
                    Hospital Universitario de Navarra · Quirófano Central II
                  </span>
                  <h2 className="text-lg sm:text-xl font-black text-red-950 dark:text-red-100">
                    Q1 – URGENCIAS (24 H.)
                  </h2>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-red-600 text-white self-start sm:self-auto">
                Servicio Continuado 24 Horas
              </span>
            </div>
          </div>

          {/* Mandate: Apendicitis vaciado vesical */}
          <div className="p-4 sm:p-5 rounded-2xl border-2 border-red-400 dark:border-red-800 bg-red-50 dark:bg-red-950/40">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-red-700 dark:text-red-300 block">
                  {language === 'es' ? 'REGLA CRÍTICA DE ORO PRE-PASO · APENDICITIS AGUDA / Q1' : 'AURRE-PASO ARAU KRITIKOA · APENDIZITIS AKUTUA / Q1'}
                </span>
                <h3 className="text-base sm:text-lg font-black text-red-950 dark:text-red-100">
                  {language === 'es' ? '“TIENE QUE ORINAR ANTES”' : '“AURRETIK TXIZA EGIN BEHAR DU”'}
                </h3>
                <p className="text-xs sm:text-sm text-red-900 dark:text-red-200 font-medium leading-relaxed">
                  {language === 'es'
                    ? 'Es imperativo que el paciente vacíe completamente la vejiga antes de entrar a quirófano y realizar la transferencia a la mesa quirúrgica. Esto previene perforaciones o punciones accidentales con los trócares laparoscópicos o el bisturí suprapúbico. Si el paciente no puede orinar de forma espontánea, debe avisarse de inmediato al personal de Enfermería para valorar sondaje vesical previo.'
                    : 'Ezinbestekoa da pazienteak maskuria guztiz hustea ebakigelara sartu eta mahaira pasatu aurretik. Horrek trokar laparoskopikoekin edo bisturi suprapubikoarekin istripuzko zulaketak saihesten ditu. Ezin badu berez txizarik egin, Erizaintzari jakinarazi behar zaio lehenbailehen zundaketa baloratzeko.'}
                </p>
              </div>
            </div>
          </div>

          {/* Table Prep & Transfer Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={`p-4 rounded-2xl border ${nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="flex items-center gap-2 mb-2">
                <Sliders className="w-4 h-4 text-blue-600" />
                <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                  {language === 'es' ? 'Preparación de la Mesa Quirúrgica' : 'Mahai Kirurgikoaren Prestaketa'}
                </h3>
              </div>
              <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Tipo de mesa:</strong> Mesa estándar plana acolchada radiotransparente universal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Accesorios previos:</strong> Sábana de tiro limpia, empapador absorbente de protección, soportes apoyabrazos dobles acolchados (&lt; 90°).</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Prolongador dorsal:</strong> No requerido de forma habitual en urgencias (salvo petición expresa por torácica o politrauma).</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Térmica:</strong> Colocar manta de calor en mesa si está indicada por anestesia.</span>
                </li>
              </ul>
            </div>

            <div className={`p-4 rounded-2xl border ${nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                  {language === 'es' ? 'Protocolo de Transfer & Paso de Urgencias' : 'Larrialdietako Transfer Protokoloa'}
                </h3>
              </div>
              <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Nivelación estricta:</strong> Regular hidráulicamente la mesa a la altura exacta de la cama de urgencias.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Frenos bloqueados:</strong> Frenos de la cama y freno de la mesa activados antes de iniciar el contacto.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Personal mínimo:</strong> 3 a 4 profesionales sincronizados (celador dentro, celador fuera, anestesista a la cabecera sujetando vía aérea y enfermería).</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Vigilancia:</strong> Deslizar con tabla rígida cuidando la sonda nasogástrica, sueros y monitorización portátil.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Intervenciones Frecuentes Q1 */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white">
              {language === 'es' ? 'Intervenciones Urgentes Frecuentes y Configuración' : 'Premiazko Ebakuntza Ohikoak eta Prestaketa'}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {q1Procedures.map((proc) => (
                <div
                  key={proc.id}
                  onClick={() => setSelectedProcedure(proc)}
                  className={`p-3.5 rounded-xl border cursor-pointer hover:ring-2 hover:ring-red-500 transition-all ${
                    nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      {language === 'es' ? proc.name : proc.nameEu}
                    </span>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300">
                      Q1
                    </span>
                  </div>

                  <p className="text-[11px] text-blue-700 dark:text-blue-400 font-bold mt-1">
                    {language === 'es' ? proc.tableType : proc.tableTypeEu}
                  </p>

                  {proc.goldenRuleOrNote && (
                    <p className="text-[11px] text-amber-900 dark:text-amber-200 bg-amber-50 dark:bg-amber-950/40 p-2 rounded-lg mt-2 font-medium">
                      {language === 'es' ? proc.goldenRuleOrNote : proc.goldenRuleOrNoteEu}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------- */}
      {/* TAB 2: Q2 – OTORRINOLARINGOLOGÍA (ORL) */}
      {/* ------------------------------------------------------------------- */}
      {activeTab === 'q2' && (
        <div className="space-y-5 animate-in fade-in duration-150">
          {/* Back Button to Specialties List */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                setActiveTab('todos');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all shadow-2xs flex items-center gap-2 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-sky-600 dark:text-sky-400" />
              <span>{language === 'es' ? '← Volver al listado de especialidades' : '← Itzuli espezialitateen zerrendara'}</span>
            </button>
            <span className="text-xs font-bold text-slate-500">
              {q2Procedures.length} {language === 'es' ? 'Intervenciones catalogadas' : 'Ebakuntza'}
            </span>
          </div>

          {/* Header Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-900/60">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold shadow-xs">
                  <Ear className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 block">
                    Hospital Universitario de Navarra · Quirófano Central II
                  </span>
                  <h2 className="text-lg sm:text-xl font-black text-sky-950 dark:text-sky-100">
                    Q2 – OTORRINOLARINGOLOGÍA (ORL)
                  </h2>
                </div>
              </div>

              {onNavigateToOrlEquipment && (
                <button
                  onClick={onNavigateToOrlEquipment}
                  className="px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-2xs self-start sm:self-auto"
                >
                  <Stethoscope className="w-3.5 h-3.5" />
                  <span>{language === 'es' ? 'Ver Aparataje ORL (8 Equipos)' : 'ORL Ekipamendua (8 Ekipo)'}</span>
                </button>
              )}
            </div>
          </div>

          {/* Mandate: Cuernos */}
          <div className="p-4 sm:p-5 rounded-2xl border-2 border-sky-400 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/40">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-sky-700 dark:text-sky-300 block">
                  {language === 'es' ? 'REGLA CRÍTICA DE ORO PRE-PASO · OTORRINO / QUIRÓFANO 2' : 'AURRE-PASO ARAU KRITIKOA · OTORRINO / 2. EBAKIGELA'}
                </span>
                <h3 className="text-base sm:text-lg font-black text-sky-950 dark:text-sky-100">
                  {language === 'es' ? '“CUERNOS” (Cabecero Específico de Fijación y Extensión Cervical)' : '“ADARRAK (CUERNOS)” (Buruko Berezia)'}
                </h3>
                <p className="text-xs sm:text-sm text-sky-900 dark:text-sky-200 font-medium leading-relaxed">
                  {language === 'es'
                    ? 'En Otorrinolaringología (ORL / Q2), la mesa quirúrgica debe prepararse SIEMPRE antes de entrar y pasar al paciente montando el accesorio de cabecero tipo "cuernos" / herradura en los raíles superiores de la mesa Trumpf. Este dispositivo proporciona la fijación cefálica rígida, la estabilidad milimétrica y la angulación requerida para microcirugía otológica bajo microscopio ZEISS y laringe en suspensión.'
                    : 'Otorrinolaringologian (ORL / Q2), mahaia BETI pazientea sartu eta pasa aurretik prestatu behar da goiko errailetan "adarrak" motako buru-euskarri berezia muntatuz. Tresna honek buruaren finkapen zurruna eta zehaztasun milimetrikoa ematen ditu ZEISS mikroskopioaren eta esekidura laringearen azpian.'}
                </p>
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={`p-4 rounded-2xl border ${nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                {language === 'es' ? 'Configuración de la Mesa y Accesorios' : 'Mahaiaren Konfigurazioa'}
              </h3>
              <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>Cabecero de Cuernos:</strong> Insertado y bloqueado firmemente en la cabecera.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>Almohadilla anatómica de gel:</strong> Protección occipital para prevenir UPPs en cirugías largas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>Brazos:</strong> Pegados al cuerpo mediante entremetida o protectores laterales de chapa acolchada.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>Ubicación de Equipos:</strong> Microscopio ZEISS trasladado entre 2 personas con brazo plegado a la cabecera; torre KARL STORZ contralateral al cirujano.</span>
                </li>
              </ul>
            </div>

            <div className={`p-4 rounded-2xl border ${nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                {language === 'es' ? 'Paso del Paciente & Transfer en ORL' : 'Pazientea Pasatzeko Protokoloa'}
              </h3>
              <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>Transfer supino:</strong> Deslizar en bloque centrando el eje vertebral con la mesa.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>Soporte cervical bimanual:</strong> Una persona guía el tronco y otra sostiene cuidadosamente la cabeza para posarla en los cuernos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>Cuidado del tubo:</strong> Sincronización estricta con anestesia para proteger el tubo endotraqueal anillado.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>Monitorización facial:</strong> Proteger cables del Neurosign V4 para que no se desconecten con los movimientos.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Intervenciones Clasificadas ORL */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white">
              {language === 'es' ? 'Intervenciones de Otorrinolaringología (Q2)' : 'ORL Ebakuntzak (Q2)'}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {q2Procedures.map((proc) => (
                <div
                  key={proc.id}
                  onClick={() => setSelectedProcedure(proc)}
                  className={`p-3.5 rounded-xl border cursor-pointer hover:ring-2 hover:ring-sky-500 transition-all ${
                    nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      {language === 'es' ? proc.name : proc.nameEu}
                    </span>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300">
                      Q2 ORL
                    </span>
                  </div>

                  <p className="text-[11px] text-blue-700 dark:text-blue-400 font-bold mt-1">
                    {language === 'es' ? proc.tableType : proc.tableTypeEu}
                  </p>

                  {proc.goldenRuleOrNote && (
                    <p className="text-[11px] text-sky-950 dark:text-sky-200 bg-sky-50 dark:bg-sky-950/40 p-2 rounded-lg mt-2 font-medium">
                      {language === 'es' ? proc.goldenRuleOrNote : proc.goldenRuleOrNoteEu}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------- */}
      {/* TAB 3: Q3 Y Q4 – OFTALMOLOGÍA */}
      {/* ------------------------------------------------------------------- */}
      {activeTab === 'q3_q4' && (
        <div className="space-y-5 animate-in fade-in duration-150">
          {/* Back Button to Specialties List */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                setActiveTab('todos');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all shadow-2xs flex items-center gap-2 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-teal-600 dark:text-teal-400" />
              <span>{language === 'es' ? '← Volver al listado de especialidades' : '← Itzuli espezialitateen zerrendara'}</span>
            </button>
            <span className="text-xs font-bold text-slate-500">
              {q3q4Procedures.length} {language === 'es' ? 'Intervenciones catalogadas' : 'Ebakuntza'}
            </span>
          </div>

          {/* Header Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900/60">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold shadow-xs">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 block">
                    Hospital Universitario de Navarra · Quirófano Central II
                  </span>
                  <h2 className="text-lg sm:text-xl font-black text-teal-950 dark:text-teal-100">
                    Q3 Y Q4 – OFTALMOLOGÍA
                  </h2>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-teal-600 text-white self-start sm:self-auto">
                Microcirugía Ocular
              </span>
            </div>
          </div>

          {/* Mandate: Stryker vs Middar */}
          <div className="p-4 sm:p-5 rounded-2xl border-2 border-teal-400 dark:border-teal-800 bg-teal-50 dark:bg-teal-950/40">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-teal-700 dark:text-teal-300 block">
                  {language === 'es' ? 'REGLA OFICIAL DE EQUIPAMIENTO DE CAMILLA · OFTALMOLOGÍA' : 'BEGIETAKO CAMILLA EKIPAMENDU ARAU OFIZIALA'}
                </span>
                <h3 className="text-base sm:text-lg font-black text-teal-950 dark:text-teal-100">
                  Q3: HN – STRYKER &nbsp;|&nbsp; Q4: HVC – MIDDAR
                </h3>
                <p className="text-xs sm:text-sm text-teal-900 dark:text-teal-200 font-medium leading-relaxed">
                  {language === 'es'
                    ? 'En oftalmología, cada quirófano cuenta con un modelo específico de camilla quirúrgica: en Quirófano 3 (HN) se emplea el sistema STRYKER, y en Quirófano 4 (HVC) se utiliza el sistema MIDDAR. Ambas camillas están especialmente diseñadas con cabecero ultrafino cóncavo y apoyamuñecas para el cirujano, dejando el espacio inferior completamente libre para los pedales de control del microscopio y facoemulsificador.'
                    : 'Oftalmologian ebakigela bakoitzak camilla mota berezia du: 3. Ebakigelan (HN) STRYKER sistema erabiltzen da eta 4. Ebakigelan (HVC) MIDDAR sistema. Biek buruko mehe konkaboa eta eskumutur-euskarria dituzte zirujauarentzat, azpiko espazioa libre utziz pedalei.'}
                </p>
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={`p-4 rounded-2xl border ${nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                {language === 'es' ? 'Preparación de la Camilla Quirúrgica' : 'Camillaren Prestaketa'}
              </h3>
              <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Cabecero Anatómico:</strong> Nivelado a la altura de trabajo del oftalmólogo con apoyo de muñecas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Pedales de Control:</strong> Despejar el suelo de la cabecera para los pedales del microscopio y vitréctomo/faco.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Bloqueo de Ruedas:</strong> Activar freno centralizado antes de acomodar al paciente.</span>
                </li>
              </ul>
            </div>

            <div className={`p-4 rounded-2xl border ${nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                {language === 'es' ? 'Transfer & Trato del Paciente Oftalmológico' : 'Transferra eta Pazientearen Acomodazioa'}
              </h3>
              <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Pacientes Ambulatorios y Geriátricos:</strong> Gran porcentaje de pacientes mayores; asistir con calma y voz clara.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Cabeza Centrada:</strong> Posar la cabeza en el centro exacto de la concavidad sin rotación.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Confort Lumbar:</strong> Colocar almohadillado poplíteo bajo las rodillas para relajar la espalda.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Intervenciones Oftalmo */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white">
              {language === 'es' ? 'Intervenciones de Oftalmología (Q3 y Q4)' : 'Oftalmologia Ebakuntzak (Q3 eta Q4)'}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {q3q4Procedures.map((proc) => (
                <div
                  key={proc.id}
                  onClick={() => setSelectedProcedure(proc)}
                  className={`p-3.5 rounded-xl border cursor-pointer hover:ring-2 hover:ring-teal-500 transition-all ${
                    nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      {language === 'es' ? proc.name : proc.nameEu}
                    </span>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
                      {proc.operatingRoom}
                    </span>
                  </div>

                  <p className="text-[11px] text-blue-700 dark:text-blue-400 font-bold mt-1">
                    {language === 'es' ? proc.tableType : proc.tableTypeEu}
                  </p>

                  {proc.goldenRuleOrNote && (
                    <p className="text-[11px] text-teal-950 dark:text-teal-200 bg-teal-50 dark:bg-teal-950/40 p-2 rounded-lg mt-2 font-medium">
                      {language === 'es' ? proc.goldenRuleOrNote : proc.goldenRuleOrNoteEu}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------- */}
      {/* TAB 4: Q5 Y Q6 – UROLOGÍA */}
      {/* ------------------------------------------------------------------- */}
      {activeTab === 'q5_q6' && (
        <div className="space-y-5 animate-in fade-in duration-150">
          {/* Back Button to Specialties List */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                setActiveTab('todos');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all shadow-2xs flex items-center gap-2 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-purple-600 dark:text-purple-400" />
              <span>{language === 'es' ? '← Volver al listado de especialidades' : '← Itzuli espezialitateen zerrendara'}</span>
            </button>
            <span className="text-xs font-bold text-slate-500">
              {countQ5Q6} {language === 'es' ? 'Intervenciones catalogadas' : 'Ebakuntza'}
            </span>
          </div>

          {/* Header Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900/60">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold shadow-xs">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400 block">
                    Hospital Universitario de Navarra · Quirófano Central II
                  </span>
                  <h2 className="text-lg sm:text-xl font-black text-purple-950 dark:text-purple-100">
                    Q5 Y Q6 – UROLOGÍA (Laparoscopia & Endourología)
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  onClick={() => setSelectedSheetModal(PRE_ENTRY_URO_Q5Q6_MESAS_IMG)}
                  className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-2xs"
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>{language === 'es' ? 'Ver Ficha 4 Oficial' : 'Ikusi 4. Fitxa'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* CRITICAL WARNING CARD: PROLONGADOR PÉLVICO (FOTO 2 / FICHA 5) */}
          <div className="p-4 sm:p-5 rounded-2xl border-2 border-amber-400 dark:border-amber-500 bg-amber-50 dark:bg-amber-950/40 shadow-sm transition-all">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <AlertTriangle className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="space-y-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-200">
                      {language === 'es' ? 'AVISO OFICIAL HUN · QUIRÓFANOS 5 Y 6' : 'NUO OHAR OFIZIALA · 5 ETA 6 EBAKIGELAK'}
                    </span>
                    <span className="text-[10px] text-amber-700 dark:text-amber-300 font-semibold">
                      {language === 'es' ? 'Mando Eléctrico vs Manejo Manual' : 'Aginte Elektrikoa vs Eskuzko Maneiua'}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-black text-amber-950 dark:text-amber-100 leading-snug">
                    {language === 'es' ? PELVIC_EXTENDER_WARNING.title : PELVIC_EXTENDER_WARNING.titleEu}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-amber-900 dark:text-amber-200 leading-relaxed bg-amber-100/70 dark:bg-amber-900/50 p-2.5 rounded-xl border border-amber-300 dark:border-amber-800">
                    «{language === 'es' ? PELVIC_EXTENDER_WARNING.warningEs : PELVIC_EXTENDER_WARNING.warningEu}»
                  </p>
                  <p className="text-[11px] sm:text-xs text-amber-800/90 dark:text-amber-300/90 mt-1 leading-relaxed">
                    {language === 'es' 
                      ? 'Indicación operativa para celadores: cuando esté acoplado el prolongador pélvico a la mesa quirúrgica, la regulación diferencial y la apertura de cada pernera debe realizarse siempre de forma manual mediante los bloqueos y palancas mecánicas de las mismas.'
                      : 'Zeladoreentzako ohar operatiboa: luzagailu pelbikoa mahaian jarrita dagoenean, hanka-euskarrien posizioa eta zabalera eskuz doitu behar da palanka mekanikoak erabiliz.'}
                  </p>
                </div>
              </div>

              {/* Photo thumbnail clickable */}
              <div 
                onClick={() => setSelectedSheetModal(PRE_ENTRY_PROLONGADOR_PELVICO_AVISO_IMG)}
                className="lg:w-48 shrink-0 flex flex-col items-center justify-center p-2 rounded-xl bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-800 cursor-pointer hover:ring-2 hover:ring-amber-500 transition-all group"
              >
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-950 relative">
                  <img 
                    src={PRE_ENTRY_PROLONGADOR_PELVICO_AVISO_IMG} 
                    alt="Cartel Oficial Aviso Prolongador Pélvico HUN"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white bg-black/70 px-2 py-1 rounded flex items-center gap-1">
                      <ExternalLink className="w-3 h-3" />
                      {language === 'es' ? 'Ver Cartel' : 'Kartela Ikusi'}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-amber-800 dark:text-amber-300 mt-1.5 flex items-center gap-1 text-center">
                  <ImageIcon className="w-3 h-3 shrink-0" />
                  <span>{language === 'es' ? 'Ficha 5: Cartel Original' : '5. Fitxa: Jatorrizko Kartela'}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Mandate: Empapador Previo Obligatorio */}
          <div className="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />
            <div className="text-xs text-purple-950 dark:text-purple-200">
              <strong className="font-bold">REGLA GENERAL HUN: EMPAPADOR PREVIO OBLIGATORIO</strong>. Toda intervención urológica en Q5 y Q6 requiere preparar la mesa con empapador impermeable absorbente antes de pasar al paciente debido a la abundante irrigación continua de fluidos.
            </div>
          </div>

          {/* SECTION A: MESAS QUIRÚRGICAS Q5-Q6 (PROLONGACIÓN DORSAL vs CAMILLA NORMAL) */}
          <div className="p-4 sm:p-5 rounded-2xl border border-indigo-200 dark:border-indigo-900 bg-indigo-50/40 dark:bg-indigo-950/20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-indigo-200/80 dark:border-indigo-900/60 pb-3">
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 block">
                  Documento Oficial Auténtico HUN · Quirófanos 5 y 6 (Urología)
                </span>
                <h3 className="text-base sm:text-lg font-black text-indigo-950 dark:text-indigo-200 mt-0.5">
                  {language === 'es' ? 'Mesas Quirúrgicas Q5–Q6: Prolongación Dorsal vs Camilla Normal' : 'Q5-Q6 Mahai Kirurgikoak: Bizkarraldeko Luzagailua vs Mahai Arrunta'}
                </h3>
              </div>

              <button
                onClick={() => setSelectedSheetModal(PRE_ENTRY_URO_Q5Q6_MESAS_IMG)}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-1.5 shadow-2xs shrink-0"
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>{language === 'es' ? 'Ver Ficha Escrita Original' : 'Ikusi Jatorrizko Agiria'}</span>
              </button>
            </div>

            {/* Categories comparison grid */}
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
              {URO_Q5Q6_TABLE_DATA.map((category) => {
                const isDorsal = category.id === 'prolongacion-dorsal';
                return (
                  <div
                    key={category.id}
                    className={`rounded-2xl border p-4 transition-all flex flex-col ${
                      isDorsal
                        ? 'bg-white dark:bg-slate-900 border-purple-200 dark:border-purple-900/60 shadow-xs'
                        : 'bg-white dark:bg-slate-900 border-blue-200 dark:border-blue-900/60 shadow-xs'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 pb-2.5 border-b border-slate-100 dark:border-slate-800">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`w-2.5 h-2.5 rounded-full ${isDorsal ? 'bg-purple-600' : 'bg-blue-600'}`} />
                          <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                            {language === 'es' ? category.title : category.titleEu}
                          </h4>
                        </div>
                        <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          {language === 'es' ? category.subtitle : category.subtitleEu}
                        </p>
                      </div>
                      <span className={`text-[10px] sm:text-xs font-extrabold px-2.5 py-0.5 rounded-full shrink-0 ${
                        isDorsal
                          ? 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 border border-purple-300'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border border-blue-300'
                      }`}>
                        {category.procedures.length} {language === 'es' ? 'Cirugías' : 'Kirurgia'}
                      </span>
                    </div>

                    <div className="mt-3 space-y-2 flex-1">
                      {category.procedures.map((proc, pIdx) => (
                        <div
                          key={pIdx}
                          className={`p-2.5 rounded-xl border text-xs transition-colors ${
                            proc.isCorrection
                              ? 'bg-amber-50/70 border-amber-300 dark:bg-amber-950/40 dark:border-amber-800'
                              : 'bg-slate-50/80 dark:bg-slate-800/50 border-slate-200/70 dark:border-slate-800'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-1.5">
                            <span className="font-extrabold text-slate-900 dark:text-white leading-snug">
                              {proc.name}
                            </span>
                            {proc.isCorrection && (
                              <span className="text-[9px] font-black uppercase px-1.5 py-0.2 rounded bg-amber-500 text-white shrink-0">
                                {language === 'es' ? 'Nota HUN' : 'NUO Oharra'}
                              </span>
                            )}
                          </div>
                          {proc.notes && (
                            <p className="text-[10px] text-amber-900 dark:text-amber-200 mt-1 font-medium italic">
                              {proc.notes}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION B: CIRUGÍAS CON PROLONGACIÓN PÉLVICA (FICHA 1 HUN) */}
          <div className="p-4 sm:p-5 rounded-2xl border border-purple-200 dark:border-purple-900 bg-purple-50/30 dark:bg-purple-950/20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-200/80 dark:border-purple-900/60 pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400 block">
                  Ficha Oficial 1 HUN · Quirófanos 5 y 6
                </span>
                <h3 className="text-base sm:text-lg font-black text-purple-950 dark:text-purple-100">
                  {language === 'es' ? 'Cirugías que Requieren Prolongación Pélvica' : 'Luzapen Pelbikoa Eskatzen duten Ebakuntzak'}
                </h3>
              </div>

              <button
                onClick={() => setSelectedSheetModal(PRE_ENTRY_URO_SHEET_IMG)}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-1.5 shadow-2xs shrink-0"
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>{language === 'es' ? 'Ver Ficha 1 Original' : 'Ikusi 1. Fitxa'}</span>
              </button>
            </div>

            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {UROLOGIA_PROLONGACION_PELVICA_LIST.map((proc, pIdx) => (
                <div
                  key={pIdx}
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-purple-200/70 dark:border-purple-900/60 text-xs shadow-2xs"
                >
                  <span className="font-extrabold text-purple-950 dark:text-purple-200 block leading-snug">
                    {proc.name}
                  </span>
                  {proc.notes && (
                    <p className="text-[10px] font-semibold text-rose-600 dark:text-rose-400 mt-1">
                      {proc.notes}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------- */}
      {/* TAB 5: Q7 Y Q8 – TRAUMATOLOGÍA */}
      {/* ------------------------------------------------------------------- */}
      {activeTab === 'q7_q8' && (
        <div className="space-y-5 animate-in fade-in duration-150">
          {/* Back Button to Specialties List */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                setActiveTab('todos');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all shadow-2xs flex items-center gap-2 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-orange-600 dark:text-orange-400" />
              <span>{language === 'es' ? '← Volver al listado de especialidades' : '← Itzuli espezialitateen zerrendara'}</span>
            </button>
            <span className="text-xs font-bold text-slate-500">
              {countQ7Q8} {language === 'es' ? 'Intervenciones catalogadas' : 'Ebakuntza'}
            </span>
          </div>

          {/* Header Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-orange-50/70 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-900/60">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold shadow-xs">
                  <Bone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400 block">
                    Hospital Universitario de Navarra · Quirófano Central II
                  </span>
                  <h2 className="text-lg sm:text-xl font-black text-orange-950 dark:text-orange-100">
                    Q7 Y Q8 – TRAUMATOLOGÍA Y CIRUGÍA ORTOPÉDICA
                  </h2>
                </div>
              </div>

              <button
                onClick={() => setSelectedSheetModal(PRE_ENTRY_TRAUMA_SHEET_IMG)}
                className="px-3 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-2xs self-start sm:self-auto"
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>{language === 'es' ? 'Ver Ficha 3 Oficial' : 'Ikusi 3. Fitxa'}</span>
              </button>
            </div>
          </div>

          {/* Mandate: Trauma EDAD Pañal y empapador */}
          <div className="p-4 sm:p-5 rounded-2xl border-2 border-orange-400 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/40">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-orange-700 dark:text-orange-300 block">
                  {language === 'es' ? 'REGLA MANDATORIA TRAUMATOLOGÍA · PACIENTES GERIÁTRICOS' : 'TRAUMATOLOGIAKO ARAU MANDATORIOA · PAZIENTE GERIATRIKOAK'}
                </span>
                <h3 className="text-base sm:text-lg font-black text-orange-950 dark:text-orange-100">
                  {language === 'es' ? '“EDAD”: PAÑAL Y EMPAPADOR EN MESA ANTES DEL TRANSFER' : '“ADINA”: PUIKALA ETA ENPAPADOREA MAHAIAN TRANSFERRA BAINO LEHEN'}
                </h3>
                <p className="text-xs sm:text-sm text-orange-900 dark:text-orange-200 font-medium leading-relaxed">
                  {language === 'es'
                    ? 'En pacientes de edad avanzada de traumatología (fracturas de fémur, cadera o recambios protésicos), es mandatorio colocar previamente en la mesa quirúrgica pañal y empapador antes del paso del paciente. Esto protege la integridad cutánea, absorbe posibles pérdidas y previene complicaciones durante intervenciones prolongadas.'
                    : 'Adineko traumatologiako pazienteetan (femur, aldaka frakturak edo protesi aldaketak), derrigorrezkoa da aldez aurretik mahaian puikala eta enpapadorea jartzea transferra egin aurretik, larruazala babesteko eta jariakinak biltzeko.'}
                </p>
              </div>
            </div>
          </div>

          {/* Protocolo Quirófano con la Unidad del Dolor */}
          <div className="p-4 sm:p-5 rounded-2xl border-2 border-amber-300 dark:border-amber-800 bg-amber-50/80 dark:bg-amber-950/30">
            <div className="flex items-center gap-2 mb-3">
              <Radio className="w-5 h-5 text-amber-700 dark:text-amber-400" />
              <h3 className="text-sm sm:text-base font-black text-amber-950 dark:text-amber-100 uppercase tracking-wide">
                {language === 'es' ? PAIN_UNIT_TRANSFER_PROTOCOL.title : PAIN_UNIT_TRANSFER_PROTOCOL.titleEu}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900">
                <strong className="text-amber-900 dark:text-amber-200 block font-bold mb-1.5">
                  1. Aparataje a Traer:
                </strong>
                <ul className="space-y-1 text-slate-700 dark:text-slate-300 text-[11px]">
                  {PAIN_UNIT_TRANSFER_PROTOCOL.equipmentToBring.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <Check className="w-3 h-3 text-amber-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900">
                <strong className="text-amber-900 dark:text-amber-200 block font-bold mb-1.5">
                  2. Montaje de Mesa:
                </strong>
                <ul className="space-y-1 text-slate-700 dark:text-slate-300 text-[11px]">
                  {PAIN_UNIT_TRANSFER_PROTOCOL.tablePreparation.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <Check className="w-3 h-3 text-amber-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900">
                <strong className="text-amber-900 dark:text-amber-200 block font-bold mb-1.5">
                  3. Transfer & Colocación:
                </strong>
                <ul className="space-y-1 text-slate-700 dark:text-slate-300 text-[11px]">
                  {PAIN_UNIT_TRANSFER_PROTOCOL.patientTransferAndCare.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <Check className="w-3 h-3 text-amber-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 5 Tipos de Mesa en Traumatología (Ficha 3) */}
          <div className="space-y-4 pt-2">
            <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white">
              {language === 'es' ? 'Clasificación de Traumatología por Configuración de Mesa (Ficha 3 HUN)' : 'Traumatologia Mahai Moten Arabera (NUO 3. Fitxa)'}
            </h3>

            <div className="space-y-4">
              {TRAUMA_TABLE_PREPARATION_SECTIONS.map((section) => (
                <div
                  key={section.id}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                    nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-600" />
                        <h4 className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                          {language === 'es' ? section.title : section.titleEu}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {language === 'es' ? section.description : section.descriptionEu}
                      </p>
                    </div>

                    <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300 self-start sm:self-auto">
                      {section.procedures.length} {language === 'es' ? 'Cirugías' : 'Kirurgia'}
                    </span>
                  </div>

                  {/* Procedures badges */}
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    {section.procedures.map((proc, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/70 dark:border-slate-700/60 text-xs"
                      >
                        <strong className="text-slate-900 dark:text-white block leading-snug">
                          {proc.name}
                        </strong>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-0.5">
                          {proc.desc}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Silla de Playa Video Button */}
                  {section.id === 'trauma-silla-playa' && (
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
                  {section.id === 'trauma-pelvistato' && (
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
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------- */}
      {/* TAB 6: FICHAS ORIGINALES ESCANEADAS DEL HUN (5) */}
      {/* ------------------------------------------------------------------- */}
      {activeTab === 'fichas' && (
        <div className="space-y-5 animate-in fade-in duration-150">
          {/* Back Button to Specialties List */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                setActiveTab('todos');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all shadow-2xs flex items-center gap-2 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-amber-600 dark:text-amber-400" />
              <span>{language === 'es' ? '← Volver al listado de especialidades' : '← Itzuli espezialitateen zerrendara'}</span>
            </button>
            <span className="text-xs font-bold text-slate-500">
              5 {language === 'es' ? 'Fichas Originales' : 'Jatorrizko Fitxa'}
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block">
                Hospital Universitario de Navarra · Bloque Quirúrgico Central II
              </span>
              <h2 className="text-lg sm:text-xl font-black text-amber-950 dark:text-amber-100">
                {language === 'es' ? 'Fichas Oficiales Originales del Hospital (5)' : 'NUOko Jatorrizko Fitxa Ofizialak (5)'}
              </h2>
              <p className="text-xs text-amber-900/80 dark:text-amber-300/80 mt-0.5">
                {language === 'es'
                  ? 'Haz clic sobre cualquiera de las 5 fichas para abrir el visor en alta resolución a pantalla completa.'
                  : 'Klik egin fitxaren batean bereizmen handian handitzeko.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {OFFICIAL_SHEETS.map((sheet) => (
              <div
                key={sheet.id}
                onClick={() => setSelectedSheetModal(sheet.img)}
                className={`p-3.5 rounded-2xl border cursor-pointer hover:ring-2 hover:ring-amber-500 transition-all group flex flex-col justify-between ${
                  nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
                }`}
              >
                <div>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 relative border border-slate-200 dark:border-slate-800">
                    <img 
                      src={sheet.img} 
                      alt={sheet.title} 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-200"
                    />
                    <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-xs font-bold text-white bg-black/70 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                        <Maximize2 className="w-4 h-4" />
                        <span>{language === 'es' ? 'Ampliar Ficha' : 'Handitu'}</span>
                      </span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                      {sheet.badge}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-1.5 leading-snug">
                      {language === 'es' ? sheet.title : sheet.titleEu}
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-3">
                      {sheet.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400">
                  <span>{language === 'es' ? 'Ver foto escaneada' : 'Ikusi agiria'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* 5. MODAL: DETALLE COMPLETO DE PROCEDIMIENTO SELECCIONADO */}
      {/* =================================================================== */}
      {/* 5. MODAL: FICHA INTERACTIVA COMPLETA (7 APARTADOS MANDATORIOS) */}
      {/* =================================================================== */}
      {selectedProcedure && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-150">
          <div className={`w-full max-w-2xl rounded-3xl border p-5 sm:p-7 shadow-2xl relative space-y-4 max-h-[92vh] overflow-y-auto ${
            nightMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <button
              onClick={() => setSelectedProcedure(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header: APARTADO 1 & 2 */}
            <div className="space-y-1.5 border-b border-slate-200 dark:border-slate-800 pb-3.5 pr-8">
              {/* 2. Quirófano y especialidad */}
              <div className="flex flex-wrap items-center gap-2">
                <span className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full ${
                  selectedProcedure.specialtyId === 'q1-urgencias' ? 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300' :
                  selectedProcedure.specialtyId === 'q2-orl' ? 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300' :
                  selectedProcedure.specialtyId === 'q3-q4-oftalmo' ? 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300' :
                  selectedProcedure.specialtyId === 'q5-q6-urologia' ? 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300' :
                  'bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300'
                }`}>
                  {selectedProcedure.operatingRoom}
                </span>
                <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                  {selectedProcedure.specialtyLabel}
                </span>
                {selectedProcedure.priorityAlert && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500 text-white">
                    {selectedProcedure.priorityAlert}
                  </span>
                )}
              </div>

              {/* 1. Nombre de la intervención */}
              <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-snug">
                {language === 'es' ? selectedProcedure.name : selectedProcedure.nameEu}
              </h3>
            </div>

            {/* Content: 7 APARTADOS ESTRUCTURADOS */}
            <div className="space-y-3 text-xs">
              {/* 3. Preparación de la mesa quirúrgica */}
              <div className="p-3.5 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 space-y-1">
                <div className="flex items-center gap-2 text-blue-800 dark:text-blue-300 font-bold uppercase text-[10px] tracking-wider">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>{language === 'es' ? '3. Preparación de la Mesa Quirúrgica' : '3. Mahai Kirurgikoaren Prestaketa'}</span>
                </div>
                <p className="text-sm font-extrabold text-blue-950 dark:text-blue-100 leading-snug">
                  {language === 'es' ? selectedProcedure.tableType : selectedProcedure.tableTypeEu}
                </p>
              </div>

              {/* 4. Posición del paciente */}
              <div className="p-3.5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/60 space-y-1">
                <div className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300 font-bold uppercase text-[10px] tracking-wider">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{language === 'es' ? '4. Posición del Paciente' : '4. Pazientearen Posizioa'}</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                  {language === 'es' ? selectedProcedure.positionSummary : selectedProcedure.positionSummaryEu}
                </p>
              </div>

              {/* 5. Accesorios necesarios */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-bold uppercase text-[10px] tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{language === 'es' ? '5. Accesorios Necesarios' : '5. Beharrezko Osagarriak'}</span>
                </div>
                <p className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                  {selectedProcedure.accessories 
                    ? (language === 'es' ? selectedProcedure.accessories : (selectedProcedure.accessoriesEu || selectedProcedure.accessories))
                    : (language === 'es' ? 'Sábana de tiro limpia, empapador absorbente de protección y soportes apoyabrazos acolchados universales.' : 'Maindire garbia, enpapadore xurgatzailea eta beso-euskarri egokituak.')}
                </p>
              </div>

              {/* 6. Observaciones y precauciones */}
              <div className="p-3.5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 space-y-1">
                <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold uppercase text-[10px] tracking-wider">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>{language === 'es' ? '6. Observaciones y Precauciones HUN' : '6. Oharrak eta Prekauzioak (NUO)'}</span>
                </div>
                <p className="text-xs font-bold text-amber-950 dark:text-amber-100 leading-relaxed">
                  {selectedProcedure.goldenRuleOrNote 
                    ? (language === 'es' ? selectedProcedure.goldenRuleOrNote : (selectedProcedure.goldenRuleOrNoteEu || selectedProcedure.goldenRuleOrNote))
                    : (language === 'es' ? 'Verificar antes del transfer: frenos bloqueados, nivelación exacta a la camilla y libre paso de cables y vías de anestesia.' : 'Transferra baino lehen egiaztatu: balaztak blokeatuta eta bideak zainduta.')}
                </p>
              </div>

              {/* 7. Funciones del celador durante la transferencia */}
              <div className="p-3.5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold uppercase text-[10px] tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{language === 'es' ? '7. Funciones del Celador Durante la Transferencia' : '7. Zeladorearen Zereginak Transferrean Zehar'}</span>
                </div>
                <ul className="text-xs space-y-1.5 text-slate-700 dark:text-slate-300 pt-0.5">
                  {getCeladorTransferDuties(selectedProcedure, language).map((duty, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 shrink-0 mt-1.5" />
                      <span className="leading-relaxed">{duty}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex justify-between items-center border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={() => {
                  const targetTab = selectedProcedure.specialtyId === 'q1-urgencias' ? 'q1' :
                                    selectedProcedure.specialtyId === 'q2-orl' ? 'q2' :
                                    selectedProcedure.specialtyId === 'q3-q4-oftalmo' ? 'q3_q4' :
                                    selectedProcedure.specialtyId === 'q5-q6-urologia' ? 'q5_q6' : 'q7_q8';
                  setActiveTab(targetTab);
                  setSelectedProcedure(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-2xs"
              >
                <span>{language === 'es' ? 'Ir al quirófano correspondiente' : 'Dagokion ebakigelara joan'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setSelectedProcedure(null)}
                className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold transition-colors"
              >
                {language === 'es' ? 'Cerrar' : 'Itxi'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* 6. MODAL: VISOR DE FOTOGRAFÍAS / FICHAS ORIGINALES */}
      {/* =================================================================== */}
      {selectedSheetModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[95vh] flex flex-col items-center">
            <button
              onClick={() => setSelectedSheetModal(null)}
              className="absolute -top-10 sm:-top-12 right-0 p-2 text-white hover:text-slate-300 bg-black/60 rounded-full transition-colors flex items-center gap-1 text-xs"
            >
              <X className="w-5 h-5" />
              <span>{language === 'es' ? 'Cerrar Visor' : 'Itxi'}</span>
            </button>
            <div className="rounded-2xl overflow-hidden border border-slate-700 bg-black shadow-2xl max-h-[85vh] w-full flex items-center justify-center">
              <img
                src={selectedSheetModal}
                alt="Ficha oficial de quirófano HUN"
                className="max-h-[85vh] w-auto object-contain"
              />
            </div>
            <p className="text-white text-xs text-center mt-2 font-medium bg-black/60 px-3 py-1 rounded-full">
              {language === 'es' ? 'Documento original escaneado del Bloque Quirúrgico Central HUN' : 'NUO Ebakigela Nagusiko jatorrizko fitxa eskaneatua'}
            </p>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* 7. MODAL: VÍDEOS OFICIALES DE LA MESA */}
      {/* =================================================================== */}
      {selectedVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-slate-900 rounded-2xl border border-slate-800 p-4 sm:p-5 text-white space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-red-500" />
                <h3 className="text-sm sm:text-base font-bold">{selectedVideoModal.title}</h3>
              </div>
              <button
                onClick={() => setSelectedVideoModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {selectedVideoModal.warning && (
              <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-200 text-xs flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{selectedVideoModal.warning}</span>
              </div>
            )}

            <div className="aspect-video rounded-xl overflow-hidden bg-black border border-slate-800">
              <video
                src={`${import.meta.env.BASE_URL}${selectedVideoModal.url.startsWith('/') ? selectedVideoModal.url.slice(1) : selectedVideoModal.url}`}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedVideoModal(null)}
                className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700"
              >
                {language === 'es' ? 'Cerrar' : 'Itxi'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
