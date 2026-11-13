import React, { useState, useEffect } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Compass,
  Cpu,
  FileText,
  Image as ImageIcon,
  Info,
  Layers,
  Maximize2,
  Plug,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
  Sliders,
  Sparkles,
  Wrench,
  X
} from 'lucide-react';
import { Language } from '../types/operatingRoom';
import {
  Q1_FUNCTIONS_AND_LIMITS,
  Q1_NAVEGADA_PDF_URL,
  Q1_NAVEGADA_PHOTOS,
  Q1_PRE_OP_CHECKLIST,
  Q1ProtocolPhoto
} from '../data/q1CirugiaNavegadaData';

interface Q1CirugiaNavegadaSectionProps {
  nightMode: boolean;
  language: Language;
  onBackToQ1?: () => void;
}

type SectionFilter = 'all' | 'mesa' | 'accesorios' | 'loopx' | 'navegacion' | 'circuito' | 'checklist';

export const Q1CirugiaNavegadaSection: React.FC<Q1CirugiaNavegadaSectionProps> = ({
  nightMode,
  language,
  onBackToQ1
}) => {
  const [activeFilter, setActiveFilter] = useState<SectionFilter>('all');
  const [selectedPhotoModal, setSelectedPhotoModal] = useState<Q1ProtocolPhoto | null>(null);
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('hun_q1_navegada_checklist');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('hun_q1_navegada_checklist', JSON.stringify(checkedIds));
    } catch {
      // ignore storage errors
    }
  }, [checkedIds]);

  const toggleCheck = (id: string) => {
    setCheckedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const resetChecklist = () => {
    setCheckedIds({});
  };

  const completedCount = Q1_PRE_OP_CHECKLIST.filter(item => checkedIds[item.id]).length;
  const totalChecklist = Q1_PRE_OP_CHECKLIST.length;

  const filterTabs: { id: SectionFilter; label: string; labelEu: string }[] = [
    { id: 'all', label: 'Todo el protocolo (1–12)', labelEu: 'Protokolo osoa (1–12)' },
    { id: 'mesa', label: '1–3. Mesa, Red y Mandos', labelEu: '1–3. Mahaia eta Aginteak' },
    { id: 'accesorios', label: '4. Accesorios (Tríneo, Alargaderas, Bracero)', labelEu: '4. Osagarriak' },
    { id: 'loopx', label: '5–6. Orientación y Loop-X', labelEu: '5–6. Orientazioa eta Loop-X' },
    { id: 'navegacion', label: '7. Brainlab Curve', labelEu: '7. Brainlab Curve' },
    { id: 'circuito', label: '8–9. Circuito y Microscopio', labelEu: '8–9. Zirkuitua eta Mikroskopioa' },
    { id: 'checklist', label: `10–12. Límites y Checklist (${completedCount}/${totalChecklist})`, labelEu: `10–12. Mugak eta Checklist (${completedCount}/${totalChecklist})` }
  ];

  const showSection = (group: Exclude<SectionFilter, 'all'>) => activeFilter === 'all' || activeFilter === group;

  const renderPhotoCard = (photo: Q1ProtocolPhoto, extraClass = '') => (
    <div
      key={photo.id}
      onClick={() => setSelectedPhotoModal(photo)}
      className={`group cursor-pointer rounded-2xl overflow-hidden border transition-all hover:shadow-md flex flex-col ${
        nightMode ? 'bg-slate-950 border-slate-800 hover:border-rose-700' : 'bg-slate-50 border-slate-200 hover:border-rose-300'
      } ${extraClass}`}
    >
      <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}${photo.src}`}
          alt={photo.caption}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-2.5 text-white">
          <span className="text-[11px] font-bold flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded-md">
            <Maximize2 className="w-3 h-3 text-rose-400" />
            <span>{language === 'es' ? 'Ampliar' : 'Handitu'}</span>
          </span>
        </div>
      </div>
      <div className="p-2.5 text-xs">
        <p className="font-bold text-slate-900 dark:text-white leading-snug">
          {language === 'es' ? photo.caption : (photo.captionEu || photo.caption)}
        </p>
        {photo.detail && (
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
            {photo.detail}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-6 pb-10">
      {/* Top Header Banner */}
      <div className={`p-5 sm:p-8 rounded-3xl border transition-colors ${
        nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          {/* Left info */}
          <div className="flex-1 flex flex-col justify-between space-y-4">
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                  <Compass className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
                  <span>HUN · QUIRÓFANO 1 · CIRUGÍA NAVEGADA</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                  <Info className="w-3.5 h-3.5" />
                  <span>{language === 'es' ? 'Borrador de trabajo · Pendiente de validación' : 'Lan-zirriborroa · Balioztatzeke'}</span>
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                {language === 'es'
                  ? 'Protocolo de Actuación del Celador · Cirugía Navegada (Q1)'
                  : 'Zeladorearen Jarduketa Protokoloa · Kirurgia Nabigatua (Q1)'}
              </h1>

              <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'es'
                  ? 'Preparación de la mesa de carbono, accesorios, orientación para el sistema Loop-X, neuronavegador Brainlab Curve y circuito del paciente.'
                  : 'Karbonozko mahaiaren prestaketa, osagarriak, Loop-X sistemarako orientazioa, Brainlab Curve nabigatzailea eta pazientearen zirkuitua.'}
              </p>

              {/* Disclaimer box */}
              <div className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 ${
                nightMode ? 'bg-amber-950/30 border-amber-800/70 text-amber-200' : 'bg-amber-50 border-amber-200 text-amber-950'
              }`}>
                <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold block">
                    {language === 'es' ? 'Documento práctico de apoyo para personal celador' : 'Zeladoreentzako laguntza-dokumentu praktikoa'}
                  </strong>
                  <span>
                    {language === 'es'
                      ? 'Borrador de trabajo pendiente de revisión y validación por el equipo responsable.'
                      : 'Talde arduradunak berrikusi eta balioztatzeko zain dagoen lan-zirriborroa.'}
                  </span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              {onBackToQ1 && (
                <button
                  onClick={onBackToQ1}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{language === 'es' ? 'Volver a Q1 Urgencias' : 'Itzuli Q1 Larrialdietara'}</span>
                </button>
              )}

              <a
                href={`${import.meta.env.BASE_URL}${Q1_NAVEGADA_PDF_URL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white transition-colors shadow-2xs flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{language === 'es' ? 'Abrir / Descargar Documento PDF Original' : 'Ireki / Deskargatu Jatorrizko PDFa'}</span>
              </a>

              <button
                onClick={() => setActiveFilter('checklist')}
                className="px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-2xs flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{language === 'es' ? `Checklist Previo (${completedCount}/${totalChecklist})` : `Aurreko Checklist (${completedCount}/${totalChecklist})`}</span>
              </button>
            </div>
          </div>

          {/* Right Cover Photo */}
          <div
            onClick={() => setSelectedPhotoModal(Q1_NAVEGADA_PHOTOS.portada)}
            className="lg:w-80 xl:w-96 relative aspect-[4/3] lg:aspect-auto min-h-[220px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800 cursor-pointer group shrink-0 shadow-md"
          >
            <img
              src={`${import.meta.env.BASE_URL}${Q1_NAVEGADA_PHOTOS.portada.src}`}
              alt={Q1_NAVEGADA_PHOTOS.portada.caption}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-3.5 text-white">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/20 flex items-center gap-1.5">
                  <Maximize2 className="w-3 h-3 text-rose-400" />
                  <span>{language === 'es' ? 'Ampliar portada Q1' : 'Handitu argazkia'}</span>
                </span>
                <span className="text-[10px] font-bold text-rose-300 bg-rose-950/80 px-2 py-0.5 rounded border border-rose-800">
                  21 Fotos Reales
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Filter Chips */}
      <div className="flex overflow-x-auto gap-2 pb-1 no-scrollbar">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 border transition-all ${
              activeFilter === tab.id
                ? 'bg-rose-600 text-white border-rose-600 shadow-sm'
                : nightMode
                  ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-2xs'
            }`}
          >
            {language === 'es' ? tab.label : tab.labelEu}
          </button>
        ))}
      </div>

      {/* =================================================================== */}
      {/* SECCIONES 1, 2 Y 3: OBJETIVO, TRASLADO, ALIMENTACIÓN Y MANDOS */}
      {/* =================================================================== */}
      {showSection('mesa') && (
        <div className="space-y-6">
          {/* 1. Objetivo y ámbito */}
          <section className={`p-5 sm:p-6 rounded-3xl border ${
            nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-lg bg-rose-600 text-white text-xs font-black flex items-center justify-center">1</span>
              <span>Objetivo y ámbito</span>
            </h2>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                Establecer una guía práctica para el personal celador sobre la localización, el traslado y la preparación logística de la mesa de carbono y del material que puede utilizarse en las cirugías navegadas, habitualmente realizadas en el <strong>quirófano 1</strong>.
              </p>
              <div className={`p-3.5 rounded-xl border text-xs ${
                nightMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-blue-50/70 border-blue-200 text-slate-800'
              }`}>
                <strong>Alcance y límites:</strong> El documento se limita a las tareas logísticas y de apoyo del celador. La anestesia, la colocación clínica del paciente, la protección de puntos de presión, la regulación definitiva de la cabeza y las decisiones sobre movimientos durante la intervención corresponden al equipo sanitario responsable.
              </div>
            </div>
          </section>

          {/* 2. Preparación y traslado de la mesa de carbono */}
          <section className={`p-5 sm:p-6 rounded-3xl border ${
            nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-lg bg-rose-600 text-white text-xs font-black flex items-center justify-center">2</span>
              <span>Preparación y traslado de la mesa de carbono</span>
            </h2>
            <ol className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {[
                'Localizar la mesa de carbono en el pasillo que comunica con el área de quirófanos maternal.',
                'Trasladarla al quirófano 1 cuando esté programada una cirugía navegada.',
                'Introducir también la cama habitual/completa del paciente cuando se trate de una cirugía de espalda que requiera transferencia a decúbito prono.',
                'Según el procedimiento del servicio, sustituir el pie de la mesa convencional por el pie correspondiente de la mesa de carbono (generalmente se trasladan el pie y la mesa de carbono juntos).'
              ].map((step, idx) => (
                <li
                  key={idx}
                  className={`p-3 rounded-xl border flex items-start gap-3 ${
                    nightMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 italic">
              Realizar el traslado y el montaje coordinándose con el personal responsable. Evitar golpes, atrapamientos y maniobras no autorizadas. La configuración y los anclajes deben comprobarse conforme al procedimiento local.
            </p>
          </section>

          {/* 3. Alimentación eléctrica y mandos */}
          <section className={`p-5 sm:p-6 rounded-3xl border space-y-4 ${
            nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-rose-600 text-white text-xs font-black flex items-center justify-center">3</span>
              <span>Alimentación eléctrica y mandos</span>
            </h2>

            <div className={`p-3.5 rounded-xl border flex items-start gap-3 text-xs sm:text-sm ${
              nightMode ? 'bg-amber-950/30 border-amber-800 text-amber-200' : 'bg-amber-50 border-amber-200 text-amber-950'
            }`}>
              <Plug className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <p>
                La mesa de carbono dispone de un <strong>transformador externo</strong> que debe conectarse a la red eléctrica. <strong>Según la información facilitada, la mesa no dispone de batería propia.</strong>
              </p>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Localizar el transformador y conectarlo a la toma indicada, siguiendo el procedimiento autorizado.</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Ordenar el cableado para que no quede en zonas de paso ni pueda quedar atrapado por la estructura.</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>La mesa dispone de <strong>dos mandos</strong>: uno acoplado a la mesa y otro inalámbrico. <strong>No ofrecen exactamente las mismas funciones.</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Para el desplazamiento longitudinal hacia la cabeza o hacia los pies se utiliza el <strong>mando nº 2 inalámbrico</strong>.</span>
              </li>
              <li className="flex items-start gap-2 font-semibold text-rose-700 dark:text-rose-300">
                <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
                <span>No accionar movimientos sin avisar y coordinarse previamente con Enfermería y Anestesia. No mover la mesa durante una adquisición de imágenes sin autorización expresa.</span>
              </li>
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              {renderPhotoCard(Q1_NAVEGADA_PHOTOS.transformador)}
              {renderPhotoCard(Q1_NAVEGADA_PHOTOS.mando1Enchufado)}
              {renderPhotoCard(Q1_NAVEGADA_PHOTOS.mando2Inalambrico)}
              {renderPhotoCard(Q1_NAVEGADA_PHOTOS.mando1Acoplado)}
            </div>
          </section>
        </div>
      )}

      {/* =================================================================== */}
      {/* SECCIÓN 4: ACCESORIOS DE LA MESA DE CARBONO */}
      {/* =================================================================== */}
      {showSection('accesorios') && (
        <section className={`p-5 sm:p-6 rounded-3xl border space-y-6 ${
          nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div>
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-rose-600 text-white text-xs font-black flex items-center justify-center">4</span>
              <span>Accesorios de la mesa de carbono</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
              Preparar únicamente los accesorios solicitados para la intervención. Comprobar que corresponden al sistema de la mesa y que están disponibles antes de iniciar la transferencia.
            </p>
          </div>

          {/* 4.1 Tríneo */}
          <div className={`p-4 rounded-2xl border space-y-3 ${
            nightMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <Wrench className="w-4 h-4 text-rose-600" />
              <span>4.1. Tríneo</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              Accesorio identificado como tríneo. Se incorpora al material de posicionamiento cuando se solicita. La colocación definitiva y la comprobación de los apoyos corresponden al equipo sanitario.
            </p>
            <div className="max-w-xs">
              {renderPhotoCard(Q1_NAVEGADA_PHOTOS.trineo)}
            </div>
          </div>

          {/* 4.2 Alargaderas */}
          <div className={`p-4 rounded-2xl border space-y-3 ${
            nightMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <Wrench className="w-4 h-4 text-rose-600" />
              <span>4.2. Alargaderas</span>
            </h3>
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <p>
                Las alargaderas <strong>se guardan en el quirófano 2</strong>. Deben trasladarse al quirófano 1 y acoplarse a los enganches previstos en los extremos de la estructura lateral en forma de U de la mesa de carbono, siguiendo las indicaciones del personal responsable.
              </p>
              <p>
                Sobre las alargaderas se colocan los soportes de brazos propios de la mesa de carbono. El celador puede facilitar y preparar el material; la comprobación final de estabilidad y la colocación de los brazos corresponden al equipo sanitario.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {renderPhotoCard(Q1_NAVEGADA_PHOTOS.alargadera1)}
              {renderPhotoCard(Q1_NAVEGADA_PHOTOS.alargadera2)}
              {renderPhotoCard(Q1_NAVEGADA_PHOTOS.colocacionAlargaderas)}
            </div>
          </div>

          {/* 4.3 Bracero */}
          <div className={`p-4 rounded-2xl border space-y-3 ${
            nightMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <Wrench className="w-4 h-4 text-rose-600" />
              <span>4.3. Bracero</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              Accesorio de apoyo para los brazos. Su colocación, ajuste y utilización se realizarán según la configuración indicada por el equipo responsable.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
              {renderPhotoCard(Q1_NAVEGADA_PHOTOS.braceroAccesorio)}
              {renderPhotoCard(Q1_NAVEGADA_PHOTOS.colocacionBracero)}
            </div>
          </div>
        </section>
      )}

      {/* =================================================================== */}
      {/* SECCIÓN 5 Y 6: CONFIGURACIÓN, ORIENTACIÓN Y RECORRIDO LOOP-X */}
      {/* =================================================================== */}
      {showSection('loopx') && (
        <div className="space-y-6">
          {/* 5. Configuración de la mesa y orientación del paciente */}
          <section className={`p-5 sm:p-6 rounded-3xl border space-y-4 ${
            nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-rose-600 text-white text-xs font-black flex items-center justify-center">5</span>
              <span>Configuración de la mesa y orientación del paciente</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              En la configuración descrita para <strong>cirugía navegada de espalda</strong>:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {renderPhotoCard(Q1_NAVEGADA_PHOTOS.referenciaSalaLoop)}
              {renderPhotoCard(Q1_NAVEGADA_PHOTOS.referenciaMarcoMesa)}
              {renderPhotoCard(Q1_NAVEGADA_PHOTOS.referenciaMarcoLoop)}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start pt-1">
              <div className="lg:col-span-8 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <ul className="space-y-2">
                  {[
                    'La cabeza del paciente se orienta hacia el lado contrario al Loop-X.',
                    'La zona de los pies queda hacia el lado desde el que se aproxima el Loop-X.',
                    'La zona de los pies se apoya sobre el cabecero de la mesa convencional, según la configuración utilizada en el quirófano.',
                    'Se desplaza longitudinalmente la mesa hacia los pies para disponer de mayor longitud de superficie, según indicación del equipo responsable.',
                    'La posición final descrita para los brazos en decúbito prono es en forma de L, con las muñecas orientadas hacia la cabeza.'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className={`mt-3 p-3 rounded-xl border text-xs ${
                  nightMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-blue-50/70 border-blue-200 text-slate-800'
                }`}>
                  La colocación clínica del paciente, la alineación, la protección de extremidades y puntos de presión, la posición de la cabeza y la comprobación de la vía aérea corresponden al anestesista y a la enfermera de anestesia. El celador colaborará únicamente bajo sus indicaciones.
                </div>
              </div>

              <div className="lg:col-span-4">
                {renderPhotoCard(Q1_NAVEGADA_PHOTOS.cabeceroPies)}
              </div>
            </div>
          </section>

          {/* 6. Aproximación y recorrido del Loop-X */}
          <section className={`p-5 sm:p-6 rounded-3xl border space-y-4 ${
            nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-rose-600 text-white text-xs font-black flex items-center justify-center">6</span>
              <span>Aproximación y recorrido del Loop-X</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
              <div className="lg:col-span-7 space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <p>
                  El Loop-X entra desde el <strong>extremo de los pies</strong> y avanza en dirección a la cabeza del paciente. Por tanto, la cabeza queda orientada hacia el lado contrario al equipo (pasillo limpio) y debe mantenerse libre el recorrido de aproximación desde los pies hacia la cabeza.
                </p>
                <ul className="space-y-2">
                  {[
                    'Facilitar el traslado del equipo cuando lo solicite el personal responsable.',
                    'Mantener despejada su trayectoria y evitar colisiones con carros, lámparas, cables u otros elementos.',
                    'Coordinar cualquier ajuste de la mesa o del equipo con el personal que maneja el Loop-X (TER) y con Enfermería.',
                    'No mover la mesa, al paciente ni el equipo durante el registro o la adquisición de imágenes salvo indicación expresa.'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5">
                {renderPhotoCard(Q1_NAVEGADA_PHOTOS.sistemaLoopX)}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* =================================================================== */}
      {/* SECCIÓN 7: SISTEMA DE NAVEGACIÓN QUIRÚRGICA (BRAINLAB CURVE) */}
      {/* =================================================================== */}
      {showSection('navegacion') && (
        <section className={`p-5 sm:p-6 rounded-3xl border space-y-5 ${
          nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div>
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-rose-600 text-white text-xs font-black flex items-center justify-center">7</span>
              <span>Sistema de navegación quirúrgica (Brainlab Curve)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
              Las unidades del sistema forman parte de un neuronavegador modelo <strong>Brainlab Curve</strong>. Este conjunto funciona como un GPS de alta precisión dentro del quirófano para guiar al cirujano en tiempo real sobre las imágenes médicas del paciente (como tomografías o resonancias magnéticas).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* 7.1 Unidad de seguimiento óptico */}
            <div className={`p-4 rounded-2xl border flex flex-col justify-between space-y-3 ${
              nightMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="space-y-2">
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-rose-600" />
                  <span>7.1. Unidad de seguimiento óptico</span>
                </h3>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  Carro móvil con brazo articulado en cuyo extremo se encuentra una cámara estereoscópica infrarroja (en la foto aparece plegada hacia abajo). Emite y detecta luz infrarroja para rastrear continuamente las esferas reflectantes colocadas en los instrumentos del cirujano y en el paciente, enviando las coordenadas para calcular con precisión milimétrica la posición de cada herramienta.
                </p>
              </div>
              {renderPhotoCard(Q1_NAVEGADA_PHOTOS.seguimientoOptico)}
            </div>

            {/* 7.2 Brazo articulado de soporte */}
            <div className={`p-4 rounded-2xl border flex flex-col justify-between space-y-3 ${
              nightMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="space-y-2">
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-rose-600" />
                  <span>7.2. Brazo articulado de soporte</span>
                </h3>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  Brazo mecánico articulado con mordaza de fijación para anclarse al riel lateral de la mesa quirúrgica y sujetar accesorios de rastreo (generador de campo electromagnético o referencias cerca de la cabeza o zona anatómica). Se transporta en un estuche protector acolchado dentro de una maleta con ruedas para proteger el material delicado entre quirófanos.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {renderPhotoCard(Q1_NAVEGADA_PHOTOS.maletaBrainlab)}
                {renderPhotoCard(Q1_NAVEGADA_PHOTOS.brazoArticuladoSoporte)}
              </div>
            </div>

            {/* 7.3 Estación de visualización y control */}
            <div className={`p-4 rounded-2xl border flex flex-col justify-between space-y-3 ${
              nightMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="space-y-2">
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-rose-600" />
                  <span>7.3. Estación de visualización y control</span>
                </h3>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  Unidad central de procesamiento y visualización táctil de la plataforma Brainlab Curve. Muestra en tiempo real y en alta definición (4K) los modelos 3D de la anatomía del paciente y la posición exacta del instrumental quirúrgico. Permite planificar trayectorias, revisar estudios previos (TAC/RMN) y controlar el software mediante pantalla táctil.
                </p>
              </div>
              {renderPhotoCard(Q1_NAVEGADA_PHOTOS.estacionVisualizacion)}
            </div>
          </div>
        </section>
      )}

      {/* =================================================================== */}
      {/* SECCIÓN 8 Y 9: CIRCUITO DEL PACIENTE Y APARATAJE COMPLEMENTARIO */}
      {/* =================================================================== */}
      {showSection('circuito') && (
        <div className="space-y-6">
          {/* 8. Circuito del paciente */}
          <section className={`p-5 sm:p-6 rounded-3xl border space-y-4 ${
            nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-rose-600 text-white text-xs font-black flex items-center justify-center">8</span>
              <span>Circuito del paciente: cama, transferencias y URPA</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 8.1 Antes */}
              <div className={`p-4 rounded-2xl border space-y-2.5 ${
                nightMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <h3 className="text-sm font-extrabold text-rose-700 dark:text-rose-400">
                  8.1. Antes de la intervención y transferencia a prono
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  En las cirugías de espalda se introduce en el quirófano 1 la cama completa/habitual del paciente, además de la mesa de carbono. La cama se necesita para la inducción anestésica y para facilitar la transferencia.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="font-black text-rose-600 shrink-0">5.</span>
                    <span>Una vez anestesiado el paciente y cuando el equipo sanitario indique que puede movilizarse, colocar la cama paralela a la mesa de carbono.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-black text-rose-600 shrink-0">6.</span>
                    <span>Colaborar en la transferencia y el giro coordinado desde la cama hasta la mesa de carbono, dejando al paciente en decúbito prono (boca abajo).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-black text-rose-600 shrink-0">7.</span>
                    <span>Realizar la maniobra entre los profesionales implicados y exclusivamente siguiendo las indicaciones del anestesista y de la enfermera de anestesia.</span>
                  </li>
                </ul>
              </div>

              {/* 8.2 Al finalizar */}
              <div className={`p-4 rounded-2xl border space-y-2.5 ${
                nightMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <h3 className="text-sm font-extrabold text-rose-700 dark:text-rose-400">
                  8.2. Al finalizar: regreso a la cama habitual
                </h3>
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="font-black text-rose-600 shrink-0">8.</span>
                    <span>Introducir de nuevo en el quirófano la cama habitual del paciente.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-black text-rose-600 shrink-0">9.</span>
                    <span>Situarla paralela a la mesa de carbono, según las indicaciones del equipo responsable.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-black text-rose-600 shrink-0">10.</span>
                    <span>Bajo la dirección del anestesista y de la enfermera de anestesia, colaborar en el giro y la transferencia para dejar al paciente en decúbito supino (boca arriba) sobre su propia cama.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-black text-rose-600 shrink-0">11.</span>
                    <span>El equipo sanitario comprobará la posición, la vía aérea, las vías, los tubos, los drenajes y los dispositivos antes de iniciar el traslado.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-black text-rose-600 shrink-0">12.</span>
                    <span>Una vez autorizado, el paciente saldrá directamente del quirófano hacia la sala de despertar (URPA).</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className={`p-3.5 rounded-xl border text-xs font-medium ${
              nightMode ? 'bg-amber-950/30 border-amber-800 text-amber-200' : 'bg-amber-50 border-amber-200 text-amber-950'
            }`}>
              El celador facilita la entrada, colocación y retirada de la cama; mantiene despejada la zona y evita que cables, tubos o equipos queden atrapados. <strong>No inicia ni dirige por iniciativa propia los giros o transferencias.</strong>
            </div>
          </section>

          {/* 9. Aparataje complementario */}
          <section className={`p-5 sm:p-6 rounded-3xl border space-y-4 ${
            nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-rose-600 text-white text-xs font-black flex items-center justify-center">9</span>
              <span>Aparataje complementario</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
              <div className="lg:col-span-8 space-y-4">
                <div className={`p-4 rounded-2xl border space-y-2 ${
                  nightMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">9.1. Microscopio quirúrgico</h3>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    En algunas cirugías se solicita trasladar el microscopio desde la zona del quirófano maternal. Confirmar previamente su disponibilidad y necesidad. Su traslado y ubicación se coordinarán con el equipo quirúrgico. No manipular ajustes ópticos ni conexiones sin indicación.
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-rose-700 dark:text-rose-300 leading-relaxed">
                    Para pasar por las puertas, el brazo superior debe plegarse. Para plegarlo, el equipo debe estar conectado y ajustarse desde el panel de control. Esta maniobra debe realizarla personal formado y conforme a las indicaciones del responsable del equipo.
                  </p>
                </div>

                <div className={`p-4 rounded-2xl border space-y-1.5 ${
                  nightMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">9.2. Otro equipo complementario</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Se ha indicado que algunas intervenciones requieren otro aparato además de la pantalla. Su nombre y función quedan pendientes de explicación y confirmación; no se le asigna una identificación técnica hasta disponer de esa información.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4">
                {renderPhotoCard(Q1_NAVEGADA_PHOTOS.microscopioQ1)}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* =================================================================== */}
      {/* SECCIONES 10, 11 Y 12: FUNCIONES/LÍMITES, CHECKLIST Y PENDIENTES */}
      {/* =================================================================== */}
      {showSection('checklist') && (
        <div className="space-y-6">
          {/* 10. Funciones y límites de actuación */}
          <section className={`p-5 sm:p-6 rounded-3xl border space-y-4 ${
            nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-rose-600 text-white text-xs font-black flex items-center justify-center">10</span>
              <span>Funciones y límites de actuación del celador</span>
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className={nightMode ? 'bg-slate-950 text-slate-200' : 'bg-slate-100 text-slate-900'}>
                    <th className="p-3.5 font-extrabold border-b border-slate-200 dark:border-slate-800 w-1/2">Personal celador</th>
                    <th className="p-3.5 font-extrabold border-b border-slate-200 dark:border-slate-800 w-1/2">Equipo sanitario / personal autorizado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {Q1_FUNCTIONS_AND_LIMITS.map((row, idx) => (
                    <tr key={idx} className={nightMode ? 'bg-slate-900/50' : 'bg-white'}>
                      <td className="p-3.5 align-top text-slate-700 dark:text-slate-300">
                        {language === 'es' ? row.celador : row.celadorEu}
                      </td>
                      <td className="p-3.5 align-top text-slate-700 dark:text-slate-300 border-l border-slate-200 dark:border-slate-800">
                        {language === 'es' ? row.sanitario : row.sanitarioEu}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 11. Lista de comprobación previa (Interactiva) */}
          <section className={`p-5 sm:p-6 rounded-3xl border space-y-4 ${
            nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white text-xs font-black flex items-center justify-center">11</span>
                  <span>Lista de comprobación previa (Interactiva)</span>
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Marca cada paso conforme lo completes antes de iniciar la cirugía navegada en Q1.
                </p>
              </div>

              <div className="flex items-center gap-2.5 self-start sm:self-auto">
                <span className={`px-3 py-1 rounded-full text-xs font-extrabold ${
                  completedCount === totalChecklist
                    ? 'bg-emerald-600 text-white'
                    : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                }`}>
                  {completedCount} / {totalChecklist} completados
                </span>
                {completedCount > 0 && (
                  <button
                    onClick={resetChecklist}
                    className="px-2.5 py-1 rounded-lg text-xs font-bold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Reiniciar</span>
                  </button>
                )}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-emerald-500 transition-all duration-300"
                style={{ width: `${(completedCount / totalChecklist) * 100}%` }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {Q1_PRE_OP_CHECKLIST.map((item) => {
                const checked = !!checkedIds[item.id];
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleCheck(item.id)}
                    className={`p-3 rounded-xl border text-left transition-all flex items-start gap-3 text-xs sm:text-sm ${
                      checked
                        ? nightMode
                          ? 'bg-emerald-950/40 border-emerald-700 text-emerald-200'
                          : 'bg-emerald-50 border-emerald-300 text-emerald-950'
                        : nightMode
                          ? 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                          : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-slate-300'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      checked
                        ? 'bg-emerald-600 border-emerald-600 text-white'
                        : 'border-slate-400 dark:border-slate-600 bg-white dark:bg-slate-900'
                    }`}>
                      {checked && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </span>
                    <span className={checked ? 'line-through opacity-80' : ''}>
                      {language === 'es' ? item.text : item.textEu}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* 12. Aspectos pendientes de confirmar */}
          <section className={`p-4 sm:p-5 rounded-2xl border flex items-start gap-3 text-xs sm:text-sm ${
            nightMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
          }`}>
            <Info className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-extrabold text-slate-900 dark:text-white">
                12. Aspectos pendientes de confirmar
              </h3>
              <p className="mt-1">• Modelo exacto de la mesa de carbono y denominación del pie intercambiable.</p>
            </div>
          </section>
        </div>
      )}

      {/* Lightbox Modal for Photos */}
      {selectedPhotoModal && (
        <div
          onClick={() => setSelectedPhotoModal(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl"
          >
            <div className="p-3.5 border-b border-slate-800 flex items-center justify-between text-white bg-slate-950 gap-3">
              <div className="min-w-0">
                <span className="text-xs sm:text-sm font-bold block">
                  {language === 'es' ? selectedPhotoModal.caption : (selectedPhotoModal.captionEu || selectedPhotoModal.caption)}
                </span>
                <span className="text-[11px] text-slate-400 block">
                  HUN · Quirófano 1 · Cirugía Navegada
                </span>
              </div>
              <button
                onClick={() => setSelectedPhotoModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 shrink-0"
                aria-label="Cerrar imagen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-auto p-3 bg-black flex items-center justify-center min-h-[45vh]">
              <img
                src={`${import.meta.env.BASE_URL}${selectedPhotoModal.src}`}
                alt={selectedPhotoModal.caption}
                className="max-h-[76vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
