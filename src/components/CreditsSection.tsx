import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  Building2, 
  Heart, 
  Smartphone, 
  Sparkles, 
  Languages, 
  CheckCircle2, 
  Code2,
  FileCheck2,
  Users
} from 'lucide-react';
import { Language } from '../types/operatingRoom';

interface CreditsSectionProps {
  nightMode: boolean;
  language: Language;
}

export const CreditsSection: React.FC<CreditsSectionProps> = ({
  nightMode,
  language
}) => {
  return (
    <div className="space-y-6 pb-10">
      {/* Top Banner */}
      <div className={`p-6 sm:p-8 rounded-3xl border transition-colors ${
        nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
              <Award className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>{language === 'es' ? 'Autoría y Reconocimientos' : 'Egiletza eta Aitortzak'}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              {language === 'es' ? 'Créditos y Autoría del Proyecto' : 'Proiektuaren Kredituak eta Egiletza'}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {language === 'es'
                ? 'Información oficial sobre el diseño, arquitectura y desarrollo técnico de la plataforma web de protocolos para Quirófano Central II y Quirófano de Urgencias II.'
                : 'Erdiko II Ebakigelako eta Larrialdietako II Ebakigelako protokoloen plataforma webaren diseinu, arkitektura eta garapen teknikoari buruzko informazio ofiziala.'}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="px-3.5 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 font-extrabold text-xs">
              HUN Quirófanos II
            </span>
          </div>
        </div>
      </div>

      {/* Main Author Card - Highlighting the exact required attribution text */}
      <div className={`p-6 sm:p-8 rounded-3xl border transition-all ${
        nightMode 
          ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 border-slate-800' 
          : 'bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/50 border-blue-200 shadow-sm'
      }`}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-700 text-white flex items-center justify-center font-black text-2xl shadow-md shrink-0">
              DT
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {language === 'es' ? 'Desarrollo y Dirección del Proyecto' : 'Proiektuaren Garapena eta Zuzendaritza'}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-0.5">
                Diseño y desarrollo de la web: David Tabernero Garin
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                Hospital Universitario de Navarra (HUN) · Área General V
              </p>
            </div>
          </div>

          <div className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 self-stretch md:self-auto text-center shadow-2xs">
            {language === 'es' ? 'Edición Oficial 2026' : '2026ko Edizio Ofiziala'}
          </div>
        </div>
      </div>

      {/* Project Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Healthcare Context */}
        <div className={`p-5 rounded-2xl border ${
          nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 flex items-center justify-center mb-3">
            <Building2 className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
            {language === 'es' ? 'Entorno Hospitalario' : 'Ospitale Ingurunea'}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            {language === 'es'
              ? 'Aplicación orientada a los 8 quirófanos de Cirugía General y Especializada del Área General V (Pabellón B) en el Hospital Universitario de Navarra.'
              : 'Nafarroako Unibertsitate Ospitaleko V. Eremu Orokorreko (B Pabiloia) Kirurgia Orokor zein Espezializatuko 8 ebakigeletara zuzendutako aplikazioa.'}
          </p>
        </div>

        {/* Multidisciplinary Collaboration */}
        <div className={`p-5 rounded-2xl border ${
          nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 flex items-center justify-center mb-3">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
            {language === 'es' ? 'Colaboración Asistencial' : 'Laguntza Elkarlana'}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            {language === 'es'
              ? 'Desarrollado en estrecha coordinación entre el personal celador de quirófano, enfermería de quirófano y enfermería de anestesia para garantizar la seguridad del paciente.'
              : 'Ebakigelako zeladoreen, ebakigelako erizaintzaren eta anestesiako erizaintzaren arteko koordinazio estuan garatua pazientearen segurtasuna bermatzeko.'}
          </p>
        </div>

        {/* Technical Architecture */}
        <div className={`p-5 rounded-2xl border ${
          nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-950/80 text-violet-700 dark:text-violet-300 flex items-center justify-center mb-3">
            <Code2 className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
            {language === 'es' ? 'Tecnología y Accesibilidad' : 'Teknologia eta Irisgarritasuna'}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            {language === 'es'
              ? 'Aplicación Web Progresiva (PWA) instalable en teléfonos móviles y tablets, soporte bilingüe (Castellano y Euskara), modo noche de alto contraste y compatibilidad offline.'
              : 'Mugikor zein tabletetan instala daitekeen Web Aplikazio Progresiboa (PWA), elebiduna (Gaztelania eta Euskara), gaueko kontraste handiko modua eta lineaz kanpoko erabilera.'}
          </p>
        </div>
      </div>

      {/* Official Documentation Note */}
      <div className={`p-5 rounded-2xl border text-xs leading-relaxed ${
        nightMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
      }`}>
        <div className="flex items-start gap-3">
          <FileCheck2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-slate-800 dark:text-slate-200 block">
              {language === 'es' ? 'Integridad de los Protocolos Quirúrgicos' : 'Protokolo Kirurgikoen Osotasuna'}
            </span>
            <p>
              {language === 'es'
                ? 'Los protocolos, figuras fotográficas oficiales (FIG. 1 a FIG. 20), vídeos técnicos TruSystem y normativas de destino de accesorios reproducidos en esta aplicación se ajustan a las directrices vigentes del Bloque Quirúrgico del Hospital Universitario de Navarra.'
                : 'Aplikazio honetan jasotako protokoloak, irudi fotografiko ofizialak (FIG. 1etik FIG. 20ra), TruSystem bideo teknikoak eta osagarrien kokapen-arauak Nafarroako Unibertsitate Ospitaleko Ebakuntza Blokeko indarreko jarraibideekin bat datoz.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
