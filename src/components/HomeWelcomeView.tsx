import React from 'react';
import { 
  ShieldCheck, 
  Building2, 
  Video, 
  Sliders, 
  Mail, 
  Award, 
  ArrowRight, 
  Users, 
  Sparkles,
  Stethoscope,
  Activity,
  Layers,
  Search,
  CheckCircle2,
  ArrowRightLeft
} from 'lucide-react';
import { Language } from '../types/operatingRoom';
import { TRANSLATIONS } from '../i18n/translations';

interface HomeWelcomeViewProps {
  onNavigate: (tab: string, subParam?: string) => void;
  nightMode: boolean;
  language: Language;
}

export const HomeWelcomeView: React.FC<HomeWelcomeViewProps> = ({
  onNavigate,
  nightMode,
  language
}) => {
  const t = TRANSLATIONS[language];

  const quickSections = [
    {
      id: 'funciones',
      title: language === 'es' ? 'Funciones de los Celadores' : 'Zeladoreen Funtzioak',
      badge: language === 'es' ? 'Dentro & Fuera' : 'Barruan & Kanpoan',
      badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
      description: language === 'es' 
        ? 'Organización detallada: funciones del Celador de Dentro y del Celador de Fuera, circuitos y metodología asistencial.' 
        : 'Antolaketa zehatza: Barruko Zeladorearen eta Kanpokoaren funtzioak, zirkuituak eta laguntza-metodologia.',
      icon: ShieldCheck,
      color: 'from-emerald-500 to-teal-600',
      cta: language === 'es' ? 'Ver funciones oficiales' : 'Ikusi funtzio ofizialak'
    },
    {
      id: 'transfer',
      title: language === 'es' ? 'Transfer · Preparación de Mesa' : 'Transferra · Mahaiaren Prestaketa',
      badge: language === 'es' ? 'Pre-Entrada' : 'Aurre-Sarrera',
      badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border-amber-200 dark:border-amber-800',
      description: language === 'es'
        ? 'Preparación de la Mesa Quirúrgica Antes de Entrar y Pasar al Paciente: tramos, cabeceros, reglas de oro y buscador interactivo.'
        : 'Mahai Kirurgikoaren Prestaketa Pazientea Pasa Aurretik: zatiak, burukoak, urrezko arauak eta ebakuntzen bilatzailea.',
      icon: ArrowRightLeft,
      color: 'from-amber-500 to-orange-600',
      cta: language === 'es' ? 'Consultar transfer' : 'Ikusi transferra'
    },
    {
      id: 'q2',
      title: language === 'es' ? 'Q2 ORL · Aparataje Específico' : 'Q2 ORL · Tresneria Espezifikoa',
      badge: '8 Equipos HUN',
      badgeColor: 'bg-sky-100 text-sky-800 dark:bg-sky-950/80 dark:text-sky-300 border-sky-200 dark:border-sky-800',
      description: language === 'es'
        ? 'Microscopio Zeiss, Torre Storz, Medtronic IPC, Sillón, Peso de bandeja, Neurosign V4, Silla motorizada y Láser DEKA.'
        : 'Zeiss mikroskopioa, Storz dorrea, Medtronic IPC, Neurosign V4, aulkia eta DEKA laserra.',
      icon: Stethoscope,
      color: 'from-sky-600 to-cyan-700',
      cta: language === 'es' ? 'Ver los 8 equipos' : 'Ikusi 8 ekipoak'
    },
    {
      id: 'q5_q6',
      title: language === 'es' ? 'Q5–Q6 Urología · Guía HUN' : 'Q5-Q6 Urologia · NUO Gida',
      badge: 'Figuras 1 a 20',
      badgeColor: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/80 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
      description: language === 'es'
        ? 'Protocolo completo de Urología HUN con 20 figuras fotográficas: nefrectomía con pilé, litotomía con perneras Allen y mueble interior.'
        : 'Urologiako protokolo ofiziala 20 irudiekin: nefrektomia pilé-rekin, Allen hanka-euskarriak eta barruko altzaria.',
      icon: Layers,
      color: 'from-indigo-600 to-purple-700',
      cta: language === 'es' ? 'Ver protocolo urología' : 'Ikusi urologia gida'
    },
    {
      id: 'videos',
      title: language === 'es' ? 'Videoteca Técnica Oficial' : 'Bideoteka Tekniko Ofiziala',
      badge: language === 'es' ? '11 Tutoriales' : '11 Tutoretza',
      badgeColor: 'bg-red-100 text-red-800 dark:bg-red-950/80 dark:text-red-300 border-red-200 dark:border-red-800',
      description: language === 'es'
        ? 'Videotutoriales TruSystem: carro de tracción (conexión, atasco, desconexión), silla de playa, perneras y mando.'
        : 'TruSystem bideoak: trakzio-orga (lotura, trabatua, askatzea), hondartza-aulkia, hanka-euskarriak eta agintea.',
      icon: Video,
      color: 'from-red-500 to-rose-600',
      cta: language === 'es' ? 'Abrir videoteca' : 'Ireki bideoteka'
    },
    {
      id: 'contacto_creditos',
      title: language === 'es' ? 'Contacto y Créditos' : 'Kontaktua eta Kredituak',
      badge: 'hunquirofanos@gmail.com',
      badgeColor: 'bg-violet-100 text-violet-800 dark:bg-violet-950/80 dark:text-violet-300 border-violet-200 dark:border-violet-800',
      description: language === 'es'
        ? 'Canal directo de consultas y autoría: David Tabernero Garin, colaboración Urología Lain Nagore y fotos de David y Lain.'
        : 'Harremanetarako kanala eta egiletza: David Tabernero Garin, Lain Nagore eta proiektuaren kredituak.',
      icon: Mail,
      color: 'from-violet-500 to-purple-600',
      cta: language === 'es' ? 'Ver contacto y créditos' : 'Ikusi kontaktua eta kredituak'
    }
  ];

  const orRoomsList = [
    { id: 'q1', name: 'Q1 · Urgencias', spec: 'Urgencias 24h', color: 'border-red-400 bg-red-50/70 dark:bg-red-950/30 text-red-700 dark:text-red-300' },
    { id: 'q2', name: 'Q2 · Otorrino (ORL)', spec: 'Microcirugía & 8 Equipos', color: 'border-sky-400 bg-sky-50/70 dark:bg-sky-950/30 text-sky-700 dark:text-sky-300' },
    { id: 'q3_q4', name: 'Q3–Q4 · Oftalmología', spec: 'Cataratas & Polo Post.', color: 'border-blue-400 bg-blue-50/70 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300' },
    { id: 'q5_q6', name: 'Q5–Q6 · Urología', spec: 'Pilé & Litotomía Fig. 1-20', color: 'border-indigo-400 bg-indigo-50/70 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300' },
    { id: 'q7_q8', name: 'Q7–Q8 · Traumatología', spec: 'Tracción & Hombro', color: 'border-amber-400 bg-amber-50/70 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300' }
  ];

  return (
    <div className="space-y-8 pb-10">
      {/* Hero Welcome Card with Surgical Image */}
      <section className={`rounded-3xl border overflow-hidden transition-all shadow-sm ${
        nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Text Column */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100/90 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>{language === 'es' ? 'Portal Oficial de Celadores de Quirófano' : 'Ebakigelako Zeladoreen Atari Ofiziala'}</span>
              </div>

              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                  HUN QUIRÓFANOS II
                </h1>
                <p className="text-sm sm:text-base font-semibold text-blue-700 dark:text-blue-400 mt-1">
                  {language === 'es' 
                    ? 'Protocolos de Celadores para el Quirófano Central II & Quirófano de Urgencias II' 
                    : 'Zeladoreentzako Protokoloak Erdiko II Ebakigelan & Larrialdietako II Ebakigelan'}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  Hospital Universitario de Navarra · Área General V
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                {language === 'es'
                  ? 'Plataforma técnico-asistencial para el personal celador de quirófano, en estrecha colaboración con Enfermería de Quirófano y Anestesia. Organización por funciones de trabajo (dentro y fuera), catálogo unificado de quirófanos y especialidades, videoteca técnica interactiva y guías oficiales de posición y mesa.'
                  : 'Ebakigelako zeladoreentzako laguntza-plataforma teknikoa, Ebakigelako zein Anestesiako Erizaintzarekin elkarlanean. Lan-funtzioen antolaketa (barruan eta kanpoan), ebakigelen eta espezialitateen katalogo bateratua, bideoteka tekniko interaktiboa eta mahaiko zein posizioko gida ofizialak.'}
              </p>
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('funciones')}
                className="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-700 transition-all flex items-center gap-2 shadow-sm"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>{language === 'es' ? 'Funciones del Celador' : 'Zeladoreen Funtzioak'}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={() => onNavigate('transfer')}
                className="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-amber-900 dark:text-amber-200 bg-amber-100/90 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 hover:bg-amber-200 dark:hover:bg-amber-900/60 transition-all flex items-center gap-2 shadow-2xs"
              >
                <ArrowRightLeft className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                <span>{language === 'es' ? 'Transfer' : 'Transferra'}</span>
              </button>

              <button
                onClick={() => onNavigate('quirofanos')}
                className="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-all flex items-center gap-2"
              >
                <Building2 className="w-4 h-4" />
                <span>{language === 'es' ? 'Quirófanos & Especialidades' : 'Ebakigela & Espezialitateak'}</span>
              </button>

              <button
                onClick={() => onNavigate('videoteca')}
                className="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-red-600 hover:bg-red-700 transition-all flex items-center gap-2 shadow-sm"
              >
                <Video className="w-4 h-4" />
                <span>{language === 'es' ? 'Videoteca (11 vídeos)' : 'Bideoteka (11 bideo)'}</span>
              </button>
            </div>
          </div>

          {/* Right Image Column: High Quality Surgical Room Photo */}
          <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] lg:min-h-full bg-slate-900 overflow-hidden">
            <img 
              src={`${import.meta.env.BASE_URL}assets/aistudio/CHN_Navarra_728_5e3ef281.png`}
              alt="Quirófano Central II & Urgencias II HUN" 
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-5 text-white">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-600/90 text-white w-fit mb-1.5 shadow-2xs">
                {language === 'es' ? 'Área General V · Quirófano Central II' : 'V. Eremu Orokorra · Erdiko II Ebakigela'}
              </span>
              <h2 className="text-base sm:text-lg font-extrabold leading-snug">
                {language === 'es' ? '8 Quirófanos de Cirugía General y Especializada' : '8 Ebakigela Kirurgia Orokor zein Espezializatuan'}
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                {language === 'es' ? 'Mesas Trumpf TruSystem 7500, accesorios específicos y protocolos de seguridad.' : 'Trumpf TruSystem 7500 mahaiak, osagarri espezifikoak eta segurtasun protokoloak.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access to the 5 Operating Room Specialties */}
      <section className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <div>
            <h2 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{language === 'es' ? 'Acceso Rápido por Quirófano' : 'Sarbide Azkarra Ebakigelaka'}</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {language === 'es' ? 'Selecciona un quirófano para ver sus intervenciones, mesas y accesorios' : 'Hautatu ebakigela bat bere ebakuntzak, mahaiak eta osagarriak ikusteko'}
            </p>
          </div>
          <button
            onClick={() => onNavigate('quirofanos')}
            className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            <span>{language === 'es' ? 'Ver todos' : 'Denak ikusi'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {orRoomsList.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between ${item.color}`}
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider opacity-80 block">{item.spec}</span>
                <span className="text-xs sm:text-sm font-extrabold mt-0.5 block">{item.name}</span>
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] font-bold pt-2 border-t border-current/15">
                <span>{language === 'es' ? 'Ver ficha' : 'Ikusi fitxa'}</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Philosophy Card: "Equipo Único Dividido en Dos Grupos" */}
      <section className={`p-5 sm:p-6 rounded-2xl border transition-colors ${
        nightMode ? 'bg-slate-900/90 border-slate-800' : 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 shadow-sm'
      }`}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
            <Users className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-blue-900 dark:text-blue-300">
                {t.philosophyTitle}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-1 leading-relaxed">
              {t.philosophyBody}
            </p>
          </div>
          <button
            onClick={() => onNavigate('funciones')}
            className="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shrink-0 transition-colors shadow-2xs self-end sm:self-auto"
          >
            {language === 'es' ? 'Ver Funciones y Metodología' : 'Ikusi Funtzioak eta Metodologia'}
          </button>
        </div>
      </section>

      {/* Grid of 6 Sections of the New Reorganization */}
      <section className="space-y-4">
        <div>
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span>{language === 'es' ? 'Estructura Principal de la Aplicación' : 'Aplikazioaren Egitura Nagusia'}</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {language === 'es' 
              ? 'Navega cómodamente por los 6 grandes bloques organizativos de HUN Quirófanos II' 
              : 'Nabigatu eroso NUO II Ebakigelen 6 multzo nagusietan zehar'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickSections.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`group cursor-pointer p-5 rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between ${
                  nightMode ? 'bg-slate-900 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-2xs`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-sm font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400">
                  <span>{item.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Auxiliary Utilities Banner (Retaining existing functions: Buscador, Turnos, Portafolio) */}
      <section className={`p-4 rounded-2xl border ${
        nightMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              {language === 'es' 
                ? 'Herramientas complementarias disponibles: Buscador general, Rueda de turnos de 3 parejas y Mi Portafolio profesional.' 
                : 'Tresna osagarriak eskuragarri: Bilatzaile orokorra, 3 bikoteko txanda-gurpila eta Nire Portafolio profesionala.'}
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onNavigate('buscador')}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center gap-1"
            >
              <Search className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Buscador' : 'Bilatzailea'}</span>
            </button>
            <button
              onClick={() => onNavigate('turnos')}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              {language === 'es' ? 'Rueda Turnos' : 'Txandak'}
            </button>
            <button
              onClick={() => onNavigate('portafolio')}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              {language === 'es' ? 'Mi Portafolio' : 'Portafolioa'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
