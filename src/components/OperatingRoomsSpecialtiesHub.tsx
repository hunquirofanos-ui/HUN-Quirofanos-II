import React, { useState } from 'react';
import { 
  Building2, 
  ArrowLeft, 
  ShieldCheck, 
  Sliders, 
  Video, 
  FileText, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  Stethoscope, 
  Sparkles, 
  ChevronRight, 
  Search,
  ExternalLink,
  Users,
  Clock,
  Flame,
  Activity,
  Play
} from 'lucide-react';
import { SPECIALTIES, SURGERY_PROTOCOLS } from '../data/operatingRoomData';
import { OPERATING_TABLE_VIDEOS } from '../data/operatingTableVideos';
import { HUN_OR_DISTRIBUTION } from '../data/hunOfficialProtocols';
import { Language, SurgeryProtocol } from '../types/operatingRoom';
import { TRANSLATIONS } from '../i18n/translations';

interface OperatingRoomsSpecialtiesHubProps {
  nightMode: boolean;
  language: Language;
  initialRoomId?: string | null;
  onNavigateToUrologyDoc: () => void;
  onNavigateToPreEntry: () => void;
  onNavigateToVideo: (videoId?: string) => void;
  onAddToPortfolio?: (surgery: SurgeryProtocol) => void;
}

export const OperatingRoomsSpecialtiesHub: React.FC<OperatingRoomsSpecialtiesHubProps> = ({
  nightMode,
  language,
  initialRoomId,
  onNavigateToUrologyDoc,
  onNavigateToPreEntry,
  onNavigateToVideo,
  onAddToPortfolio
}) => {
  const t = TRANSLATIONS[language];
  const [selectedHubId, setSelectedHubId] = useState<string | null>(initialRoomId || null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedSurgeryId, setExpandedSurgeryId] = useState<string | null>(null);

  // Grouped Room-Specialty definitions for the unified 5 cards
  const OR_HUBS = [
    {
      id: 'Q1',
      roomLabel: 'Q1',
      specialtyLabel: language === 'es' ? 'Urgencias' : 'Larrialdiak',
      specialtyId: 'urgencias',
      color: 'from-red-600 to-rose-700',
      borderColor: 'border-red-300 dark:border-red-800',
      bgColor: 'bg-red-50/70 dark:bg-red-950/30',
      textColor: 'text-red-700 dark:text-red-400',
      badgeColor: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300 border-red-300 dark:border-red-800',
      operatingRoomsText: 'Quirófano 1',
      tagline: language === 'es' ? '24 horas ininterrumpidas · Celador permanente de guardia' : '24 ordu jarraituak · Guardia iraunkorreko zeladorea',
      description: language === 'es' 
        ? 'Atención inmediata a patología quirúrgica urgente del Área General V: laparotomías urgentes, cesáreas de soporte, politrauma, toracotomías y peritonitis.'
        : 'V. Eremu Orokorreko urgentziazko patologia kirurgikoaren berehalako arreta: larrialdietako laparotomiak, laguntza-zesareak, politraumatismoak eta peritonitisa.',
      accessoriesRule: language === 'es' 
        ? 'Accesorios en lugar seguro dentro; tras limpieza -> Mueble habilitado en el ANTEQUIRÓFANO.'
        : 'Osagarriak barruan leku seguruan; garbitu ondoren -> AURRE-EBAKIGELAKO altzarian.',
      celadorDutySummary: language === 'es'
        ? 'Celador/a de Urgencias rotado está SIEMPRE DENTRO. Mesa radiotransparente, fluidos calientes, asistencia urgente en transfer y suministro rápido de hemoderivados.'
        : 'Larrialdietako zeladorea BETI BARRUAN dago. Mahai erradiogardena, fluido beroak, laguntza azkarra transferrean eta odol-produktuak ekartzea.',
      keyAccessories: ['Mesa Trumpf universal', 'Brazo radiotransparente', 'Transfer rápido', 'Soporte de tracción provisional']
    },
    {
      id: 'Q2',
      roomLabel: 'Q2',
      specialtyLabel: 'Otorrinolaringología (ORL)',
      specialtyId: 'otorrino',
      color: 'from-sky-600 to-cyan-700',
      borderColor: 'border-sky-300 dark:border-sky-800',
      bgColor: 'bg-sky-50/70 dark:bg-sky-950/30',
      textColor: 'text-sky-700 dark:text-sky-400',
      badgeColor: 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 border-sky-300 dark:border-sky-800',
      operatingRoomsText: 'Quirófano 2',
      tagline: language === 'es' ? 'Microcirugía Otológica, Faríngea y CENS' : 'Belarriko Mikrokirurgia, Faringea eta CENS',
      description: language === 'es'
        ? 'Cirugía endoscópica nasosinusal (CENS), timpanoplastias, mastoidectomías, amigdalectomías y microcirugía de laringe con suspensión.'
        : 'Sudur-sinusetako kirurgia endoskopikoa (CENS), timpanoplastiak, mastoidektomiak eta laringeko mikrokirurgia esekiduran.',
      accessoriesRule: language === 'es'
        ? 'Accesorios en lugar protegido; tras desinfección por limpieza -> Mueble del ANTEQUIRÓFANO.'
        : 'Osagarriak babestutako lekuan; desinfektatu ondoren -> AURRE-EBAKIGELAKO altzarian.',
      celadorDutySummary: language === 'es'
        ? 'Colocación en posición de Rose (hiperextensión cervical controlada con rodete) o cabecero especial de herradura; entrada cuidadosa del microscopio quirúrgico Zeiss/Leica.'
        : 'Rose posizioa (lepoko hiperextentsio kontrolatua errodamenduarekin) edo ferra-burukoa; Zeiss/Leica mikroskopioa arreta handiz sartzea.',
      keyAccessories: ['Cabecero de herradura acolchado', 'Rodete cervical de silicona', 'Microscopio quirúrgico Zeiss', 'Soporte suspensión laringoscopio']
    },
    {
      id: 'Q3-Q4',
      roomLabel: 'Q3–Q4',
      specialtyLabel: language === 'es' ? 'Oftalmología' : 'Oftalmologia',
      specialtyId: 'oftalmologia',
      color: 'from-blue-600 to-indigo-700',
      borderColor: 'border-blue-300 dark:border-blue-800',
      bgColor: 'bg-blue-50/70 dark:bg-blue-950/30',
      textColor: 'text-blue-700 dark:text-blue-400',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-300 dark:border-blue-800',
      operatingRoomsText: 'Quirófanos 3 y 4',
      tagline: language === 'es' ? 'Alta Resolución · Cataratas & Polo Posterior' : 'Ebazpen Handia · Kataratak eta Atzeko Poloa',
      description: language === 'es'
        ? 'Facoemulsificación de cataratas con implante de LIO, vitrectomías posteriores, trabeculectomías, trasplantes corneales y cirugía de párpados/vía lagrimal.'
        : 'Kataraten fakoemulsifikazioa LIO inplantearekin, bitrektomiak, trabekulektomiak, korneako transplanteak eta betazaleko kirurgia.',
      accessoriesRule: language === 'es'
        ? 'Cabeceros anatómicos y aros de silicona limpios se guardan en el área asignada del ANTEQUIRÓFANO.'
        : 'Buru-euskarri anatomikoak eta silikonazko eraztunak garbituta AURRE-EBAKIGELAN gordetzen dira.',
      celadorDutySummary: language === 'es'
        ? 'Camilla sillón oftalmológica especializada. Ajuste del cabezal articulado con aro de silicona para inmovilización cefálica total sin oclusión ocular.'
        : 'Oftalmologiako besaulki-ohe espezializatua. Buru-euskarri artikulatuaren doikuntza silikonazko eraztunarekin burua finkatzeko.',
      keyAccessories: ['Camilla sillón oftalmológica', 'Aro de silicona cefálico', 'Microscopio oftalmológico suspendido', 'Pedal de facoemulsificador']
    },
    {
      id: 'Q5-Q6',
      roomLabel: 'Q5–Q6',
      specialtyLabel: language === 'es' ? 'Urología' : 'Urologia',
      specialtyId: 'urologia',
      color: 'from-indigo-600 to-purple-700',
      borderColor: 'border-indigo-300 dark:border-indigo-800',
      bgColor: 'bg-indigo-50/70 dark:bg-indigo-950/30',
      textColor: 'text-indigo-700 dark:text-indigo-400',
      badgeColor: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 border-indigo-300 dark:border-indigo-800',
      operatingRoomsText: 'Quirófanos 5 y 6',
      tagline: language === 'es' ? 'Cirugía Laparoscópica, Pilé y Endourología' : 'Kirurgia Laparoskopikoa, Pilé eta Endourologia',
      description: language === 'es'
        ? 'Nefrectomías laparoscópicas con Pilé, RTU vesical/prostática en litotomía con perneras Allen, URS flexible, nefrolitotomías percutáneas y prostatectomías.'
        : 'Nefrektomia laparoskopikoak Pilé-rekin, RTU litotomian Allen hanka-euskarriekin, URS malgua eta prostatektomiak.',
      accessoriesRule: language === 'es'
        ? '¡REGLA ESPECÍFICA HUN Q5-6! Los accesorios se dejan SIEMPRE en el MUEBLE INTERIOR dentro del quirófano. Limpieza desinfecta TODO allí.'
        : 'NUO Q5-6 ARAU BEREZIA! Osagarriak BETI ebakigela BARRUKO ALTZARIAN uzten dira. Garbiketa-zerbitzuak bertan desinfektatzen du dena.',
      celadorDutySummary: language === 'es'
        ? 'Dominio de las 20 Figuras Oficiales del HUN: alineación de ombligo en círculo, volteo con tripa al borde, botón Flex en mando TruSystem, topes articulados con hueveras, perneras Allen.'
        : 'NUOko 20 Irudi Ofizialak menderatzea: zilborra biribilean lerrokatzea, biratzea sabela ertzean utziz, aginteko Flex botoia, arrautzontzidun topak eta Allenak.',
      keyAccessories: ['Topes articulados escapulares y lumbares', 'Hueveras protectoras', 'Chocolatina de gel', 'Perneras Allen con acople', 'Teja para brazo']
    },
    {
      id: 'Q7-Q8',
      roomLabel: 'Q7–Q8',
      specialtyLabel: language === 'es' ? 'Traumatología' : 'Traumatologia',
      specialtyId: 'traumatologia',
      color: 'from-amber-600 to-orange-700',
      borderColor: 'border-amber-300 dark:border-amber-800',
      bgColor: 'bg-amber-50/70 dark:bg-amber-950/30',
      textColor: 'text-amber-700 dark:text-amber-400',
      badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300 dark:border-amber-800',
      operatingRoomsText: 'Quirófanos 7 y 8',
      tagline: language === 'es' ? 'Tracción Esquelética, Prótesis y Artroscopia' : 'Hezurdura-trakzioa, Protesiak eta Artroskopia',
      description: language === 'es'
        ? 'Enclavados intramedulares de fémur/tibia en mesa de tracción ortopédica, artroscopia de hombro en silla de playa (beach chair), prótesis totales de cadera y rodilla, e intensificador de rayos X (Arco en C).'
        : 'Femur/tibiako iltzeak trakzio-mahaian, sorbaldako artroskopia hondartza-aulkian, aldaka eta belauneko protesi osoak eta RX arkua.',
      accessoriesRule: language === 'es'
        ? 'Accesorios en lugar seguro dentro; tras limpieza -> Mueble habilitado en el ANTEQUIRÓFANO.'
        : 'Osagarriak barruan leku seguruan; garbitu ondoren -> AURRE-EBAKIGELAKO altzarian.',
      celadorDutySummary: language === 'es'
        ? 'Conexión y desconexión del carro de tracción esquelética con pelvistato, montaje de silla de playa para hombro, trineo de prono y manejo de arco de Rayos X.'
        : 'Trakzio-orgaren konexioa eta deskonexioa, sorbaldako hondartza-aulkiaren muntaia, pronoko lera eta RX arkuaren maneiua.',
      keyAccessories: ['Carro de tracción ortopédica', 'Módulo silla de playa (Beach Chair)', 'Pelvistato y contratiro', 'Arco de Rayos X en C', 'Perneras de 4 piezas']
    }
  ];

  // Active Hub
  const activeHub = OR_HUBS.find(h => h.id === selectedHubId);

  // Protocols for the active specialty
  const activeSpecialtyProtocols = activeHub 
    ? SURGERY_PROTOCOLS.filter(p => p.specialtyId === activeHub.specialtyId)
    : [];

  // Videos related to this room
  const activeHubVideos = activeHub
    ? OPERATING_TABLE_VIDEOS.filter(v => {
        if (activeHub.id === 'Q7-Q8') return v.category === 'trauma' || v.operatingRooms.includes('7');
        if (activeHub.id === 'Q5-Q6') return v.category === 'urologia' || v.operatingRooms.includes('5');
        if (activeHub.id === 'Q1') return v.category === 'transfer' || v.category === 'trauma';
        return false;
      })
    : [];

  return (
    <div className="space-y-6 pb-10">
      {/* ========================================================================= */}
      {/* 1. GRID OF THE 5 UNIFIED ROOM & SPECIALTY CARDS */}
      {/* ========================================================================= */}
      {!activeHub && (
        <div className="space-y-6">
          {/* Header */}
          <div className={`p-6 sm:p-8 rounded-3xl border transition-colors ${
            nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100/90 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>{language === 'es' ? 'Quirófano Central II & Quirófano de Urgencias II' : 'Erdiko II Ebakigela & Larrialdietako II Ebakigela'}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                  {language === 'es' ? 'Quirófanos y Especialidades Quirúrgicas' : 'Ebakigela eta Espezialitate Kirurgikoak'}
                </h1>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                  {language === 'es'
                    ? 'Catálogo unificado por número de quirófano y especialidad. Selecciona una tarjeta para consultar tareas del celador, cirugías protocolizadas, preparación de mesa, normativa de accesorios y vídeos técnicos.'
                    : 'Ebakigela-zenbaki eta espezialitatearen araberako katalogo bateratua. Hautatu txartel bat zeladorearen lanak, ebakuntzak, mahaia, osagarriak eta bideoak ikusteko.'}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onNavigateToPreEntry}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-white transition-colors flex items-center gap-1.5 shadow-2xs"
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>{language === 'es' ? 'Fichas Pre-Entrada' : 'Aurre-Sarrera'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* The 5 Main Visual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {OR_HUBS.map((hub) => (
              <div
                key={hub.id}
                onClick={() => setSelectedHubId(hub.id)}
                className={`group cursor-pointer rounded-3xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between overflow-hidden ${
                  nightMode ? 'bg-slate-900 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm'
                }`}
              >
                <div>
                  {/* Card Header Strip */}
                  <div className={`p-5 bg-gradient-to-r ${hub.color} text-white flex items-center justify-between`}>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl sm:text-3xl font-black tracking-tight font-mono bg-white/20 backdrop-blur-xs px-3 py-1 rounded-2xl border border-white/20 shadow-xs">
                        {hub.roomLabel}
                      </span>
                      <div>
                        <h2 className="text-base sm:text-lg font-extrabold leading-tight">
                          {hub.specialtyLabel}
                        </h2>
                        <span className="text-[11px] text-white/80 font-medium block">
                          {hub.operatingRoomsText}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 group-hover:text-white transition-all shrink-0" />
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-4">
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {hub.description}
                    </p>

                    {/* Accessories rule badge */}
                    <div className="p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 text-[11px] space-y-1">
                      <span className="font-extrabold text-slate-800 dark:text-slate-200 block uppercase tracking-wider text-[10px]">
                        {language === 'es' ? 'Destino de Accesorios:' : 'Osagarrien Kokapena:'}
                      </span>
                      <p className="text-slate-600 dark:text-slate-400 font-medium leading-snug">
                        {hub.accessoriesRule}
                      </p>
                    </div>

                    {/* Key accessories pills */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                        {language === 'es' ? 'Accesorios y Técnicas Principales:' : 'Osagarri Nagusiak:'}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {hub.keyAccessories.slice(0, 3).map((acc, aIdx) => (
                          <span
                            key={aIdx}
                            className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                          >
                            {acc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400">
                  <span>{language === 'es' ? 'Ver cirugías y ficha técnica' : 'Ikusi ebakuntzak eta fitxa'}</span>
                  <ArrowLeft className="w-3.5 h-3.5 rotate-180 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. DETAILED VIEW OF THE SELECTED OPERATING ROOM / SPECIALTY */}
      {/* ========================================================================= */}
      {activeHub && (
        <div className="space-y-6 animate-fadeIn">
          {/* Back Navigation Bar */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={() => setSelectedHubId(null)}
              className="px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center gap-2 shadow-2xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{language === 'es' ? 'Volver a Quirófanos y Especialidades' : 'Itzuli Ebakigela eta Espezialitateetara'}</span>
            </button>

            <div className="flex items-center gap-2">
              {activeHub.id === 'Q5-Q6' && (
                <button
                  onClick={onNavigateToUrologyDoc}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors flex items-center gap-1.5 shadow-2xs"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{language === 'es' ? 'Guía Figuras 1-20 HUN' : 'NUO 1-20 Irudien Gida'}</span>
                </button>
              )}
              {activeHubVideos.length > 0 && (
                <button
                  onClick={() => onNavigateToVideo()}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-700 text-white transition-colors flex items-center gap-1.5 shadow-2xs"
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>{language === 'es' ? `Vídeos de esta área (${activeHubVideos.length})` : `Bideoak (${activeHubVideos.length})`}</span>
                </button>
              )}
            </div>
          </div>

          {/* Banner of Selected Hub */}
          <div className={`p-6 sm:p-8 rounded-3xl border transition-colors ${
            nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className={`text-2xl sm:text-3xl font-black font-mono px-3.5 py-1.5 rounded-2xl text-white bg-gradient-to-r ${activeHub.color} shadow-sm`}>
                    {activeHub.roomLabel}
                  </span>
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                      {activeHub.specialtyLabel}
                    </h1>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {activeHub.operatingRoomsText} · Hospital Universitario de Navarra
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
                  {activeHub.description}
                </p>
              </div>

              {/* Destination badge */}
              <div className={`p-4 rounded-2xl border max-w-sm shrink-0 ${
                activeHub.id === 'Q5-Q6'
                  ? 'bg-purple-50 dark:bg-purple-950/40 border-purple-300 dark:border-purple-800'
                  : 'bg-blue-50 dark:bg-blue-950/40 border-blue-300 dark:border-blue-800'
              }`}>
                <span className="text-[10px] font-black uppercase tracking-wider block text-slate-700 dark:text-slate-300">
                  {language === 'es' ? 'Norma de Destino de Accesorios' : 'Osagarrien Kokapen Araua'}
                </span>
                <p className="text-xs font-semibold text-slate-900 dark:text-white mt-1 leading-snug">
                  {activeHub.accessoriesRule}
                </p>
              </div>
            </div>

            {/* Quick Summary of celador duty in this OR */}
            <div className={`mt-6 p-4 rounded-2xl border text-xs leading-relaxed flex items-start gap-3 ${
              nightMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
            }`}>
              <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 dark:text-white block mb-0.5">
                  {language === 'es' ? 'Cometido Específico del Celador en este Bloque:' : 'Zeladorearen Eginkizun Zehatza Eremu Honetan:'}
                </span>
                {activeHub.celadorDutySummary}
              </div>
            </div>
          </div>

          {/* Related Video Tutorial Cards (if available for this room) */}
          {activeHubVideos.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Video className="w-4 h-4 text-red-600" />
                <span>{language === 'es' ? 'Tutoriales en Vídeo Disponibles para este Quirófano' : 'Eskuragarri dauden Bideo-Tutorialak'}</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {activeHubVideos.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => onNavigateToVideo(video.id)}
                    className={`cursor-pointer p-3.5 rounded-2xl border transition-all hover:shadow-md flex items-center justify-between gap-3 ${
                      nightMode ? 'bg-slate-900 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-red-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                        <Play className="w-4 h-4 fill-white ml-0.5" />
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                          {language === 'es' ? video.title : video.titleEu}
                        </h3>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">
                          {video.duration} · {video.badge}
                        </span>
                      </div>
                    </div>
                    <ArrowLeft className="w-3.5 h-3.5 rotate-180 text-slate-400 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Protocols List for this Operating Room */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-blue-600" />
                  <span>{language === 'es' ? 'Cirugías y Protocolos de Mesa' : 'Ebakuntzak eta Mahaiko Protokoloak'}</span>
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {language === 'es'
                    ? `${activeSpecialtyProtocols.length} intervenciones protocolizadas para ${activeHub.roomLabel}`
                    : `${activeSpecialtyProtocols.length} ebakuntza erregistratuta ${activeHub.roomLabel} eremuan`}
                </p>
              </div>
            </div>

            {/* List of Protocols */}
            <div className="space-y-3">
              {activeSpecialtyProtocols.map((protocol) => {
                const isExpanded = expandedSurgeryId === protocol.id;
                return (
                  <div
                    key={protocol.id}
                    className={`rounded-2xl border transition-all overflow-hidden ${
                      nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
                    }`}
                  >
                    <div
                      onClick={() => setExpandedSurgeryId(isExpanded ? null : protocol.id)}
                      className="p-4 sm:p-5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors flex items-start justify-between gap-4"
                    >
                      <div className="space-y-1.5 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${activeHub.badgeColor}`}>
                            {protocol.operatingRoom}
                          </span>
                          <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{protocol.estimatedDuration}</span>
                          </span>
                        </div>

                        <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                          {language === 'es' ? protocol.name : (protocol.nameEu || protocol.name)}
                        </h3>

                        <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                          {language === 'es' ? protocol.summary : (protocol.summaryEu || protocol.summary)}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 self-center">
                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 hidden sm:inline">
                          {isExpanded ? (language === 'es' ? 'Ocultar' : 'Itxi') : (language === 'es' ? 'Ver detalles' : 'Ikusi')}
                        </span>
                        <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </div>
                    </div>

                    {/* Expanded Surgery Technical Details */}
                    {isExpanded && (
                      <div className="p-5 border-t border-slate-100 dark:border-slate-800 space-y-5 bg-slate-50/50 dark:bg-slate-950/30 text-xs">
                        {/* 1. Posición Anatómica */}
                        <div className="space-y-2">
                          <h4 className="font-extrabold text-blue-700 dark:text-blue-400 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5" />
                            <span>{t.positionSection}</span>
                          </h4>
                          <div className={`p-3.5 rounded-xl border ${
                            nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                          }`}>
                            <span className="font-bold text-slate-900 dark:text-white block mb-1">
                              {language === 'es' ? protocol.position.name : (protocol.position.nameEu || protocol.position.name)}
                            </span>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                              {language === 'es' ? protocol.position.description : (protocol.position.descriptionEu || protocol.position.description)}
                            </p>

                            {protocol.position.pointsOfAttention && protocol.position.pointsOfAttention.length > 0 && (
                              <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 space-y-1">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Puntos Clave:</span>
                                {protocol.position.pointsOfAttention.map((pt, pIdx) => (
                                  <div key={pIdx} className="flex items-start gap-1.5 text-slate-700 dark:text-slate-300">
                                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                                    <span>{pt}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* 2. Mesa y Accesorios */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Configuración de Mesa */}
                          <div className="space-y-2">
                            <h4 className="font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                              <Sliders className="w-3.5 h-3.5" />
                              <span>{t.preparationTableSection}</span>
                            </h4>
                            <div className={`p-3 rounded-xl border h-full ${
                              nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                            }`}>
                              <p className="text-slate-700 dark:text-slate-300">
                                {protocol.tableSetup.configuration}
                              </p>
                              {protocol.tableSetup.transferNotes && (
                                <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-1.5">
                                  <strong>Transfer:</strong> {protocol.tableSetup.transferNotes}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Accesorios Requeridos */}
                          <div className="space-y-2">
                            <h4 className="font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                              <ShieldCheck className="w-3.5 h-3.5" />
                              <span>{t.accessoriesSection}</span>
                            </h4>
                            <div className={`p-3 rounded-xl border h-full space-y-1.5 ${
                              nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                            }`}>
                              {protocol.requiredAccessories.map((acc) => (
                                <div key={acc.id} className="text-[11px] text-slate-700 dark:text-slate-300">
                                  <span className="font-bold">• {language === 'es' ? acc.name : (acc.nameEu || acc.name)}</span>
                                  {acc.cleaningDestinationNote && (
                                    <span className="text-[10px] text-slate-500 block pl-2">{acc.cleaningDestinationNote}</span>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Action: Add to portfolio */}
                        {onAddToPortfolio && (
                          <div className="pt-2 flex justify-end">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onAddToPortfolio(protocol);
                              }}
                              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center gap-1.5 shadow-2xs"
                            >
                              <ShieldCheck className="w-3.5 h-3.5" />
                              <span>{t.addToPortfolio}</span>
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
