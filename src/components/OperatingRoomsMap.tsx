import React, { useState } from 'react';
import { 
  Building2, 
  ArrowRight
} from 'lucide-react';
import { HUN_OR_DISTRIBUTION } from '../data/hunOfficialProtocols';
import { Language } from '../types/operatingRoom';
import { TRANSLATIONS } from '../i18n/translations';

export const OperatingRoomsMap: React.FC<{ 
  nightMode: boolean; 
  language: Language;
  onSelectSpecialty: (specialtyId: string) => void 
}> = ({
  nightMode,
  language,
  onSelectSpecialty
}) => {
  const t = TRANSLATIONS[language];
  const [selectedRoom, setSelectedRoom] = useState<string>('Quirófano 1');
  const activeRoomData = HUN_OR_DISTRIBUTION.find(r => r.room === selectedRoom) || HUN_OR_DISTRIBUTION[0];

  return (
    <div className="space-y-6">
      {/* Top Description */}
      <div className={`p-5 rounded-2xl border transition-colors ${
        nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              <span>{t.floorplanTitle}</span>
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
              {t.pavilionName} · {t.hospitalName}
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
              {t.floorplanSub}
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300 self-start sm:self-auto">
            {t.activeRoomsCount}
          </span>
        </div>
      </div>

      {/* Main Grid: Architectural Map on Left, Detailed Inspector on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Schematic Interactive Map */}
        <div className={`lg:col-span-8 p-5 rounded-2xl border transition-colors ${
          nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {language === 'es' ? 'Distribución Arquitectónica Quirófanos Área General V' : 'V. Eremu Orokorreko Ebakigelen Banaketa Arkitektonikoa'}
            </h3>
            <span className="text-[11px] text-blue-600 font-medium">
              {language === 'es' ? 'Haz click sobre un quirófano para ver su ficha' : 'Klik egin ebakigela batean bere fitxa ikusteko'}
            </span>
          </div>

          {/* Interactive Surgical Block Floorplan */}
          <div className="space-y-4">
            {/* Top Row: Q1, Q2, Q3, Q4 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {/* Q1: Urgencias */}
              <button
                onClick={() => setSelectedRoom('Quirófano 1')}
                className={`p-3.5 rounded-xl border text-left transition-all relative ${
                  selectedRoom === 'Quirófano 1'
                    ? 'ring-2 ring-red-500 bg-red-50/80 dark:bg-red-950/40 border-red-300'
                    : nightMode ? 'bg-slate-950 border-slate-800 hover:border-slate-700' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-slate-900 dark:text-white">Q1</span>
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                </div>
                <div className="text-xs font-bold text-red-600 dark:text-red-400 mt-1">
                  {language === 'es' ? 'Urgencias' : 'Larrialdiak'}
                </div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                  {language === 'es' ? '24h · Celador permanente' : '24h · Zeladore iraunkorra'}
                </p>
                <div className="mt-2 text-[9px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 inline-block">
                  {language === 'es' ? 'Antequirófano' : 'Aurre-ebakigela'}
                </div>
              </button>

              {/* Q2: Otorrino */}
              <button
                onClick={() => setSelectedRoom('Quirófano 2')}
                className={`p-3.5 rounded-xl border text-left transition-all relative ${
                  selectedRoom === 'Quirófano 2'
                    ? 'ring-2 ring-sky-500 bg-sky-50/80 dark:bg-sky-950/40 border-sky-300'
                    : nightMode ? 'bg-slate-950 border-slate-800 hover:border-slate-700' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-slate-900 dark:text-white">Q2</span>
                  <span className="w-2 h-2 rounded-full bg-sky-500" />
                </div>
                <div className="text-xs font-bold text-sky-600 dark:text-sky-400 mt-1">Otorrino (ORL)</div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">Microscopio · Rose</p>
                <div className="mt-2 text-[9px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 inline-block">
                  {language === 'es' ? 'Antequirófano' : 'Aurre-ebakigela'}
                </div>
              </button>

              {/* Q3: Oftalmología */}
              <button
                onClick={() => setSelectedRoom('Quirófano 3')}
                className={`p-3.5 rounded-xl border text-left transition-all relative ${
                  selectedRoom === 'Quirófano 3'
                    ? 'ring-2 ring-blue-500 bg-blue-50/80 dark:bg-blue-950/40 border-blue-300'
                    : nightMode ? 'bg-slate-950 border-slate-800 hover:border-slate-700' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-slate-900 dark:text-white">Q3</span>
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mt-1">
                  {language === 'es' ? 'Oftalmología' : 'Oftalmologia'}
                </div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">Cataratas · Faco</p>
                <div className="mt-2 text-[9px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 inline-block">
                  {language === 'es' ? 'Antequirófano' : 'Aurre-ebakigela'}
                </div>
              </button>

              {/* Q4: Oftalmología */}
              <button
                onClick={() => setSelectedRoom('Quirófano 4')}
                className={`p-3.5 rounded-xl border text-left transition-all relative ${
                  selectedRoom === 'Quirófano 4'
                    ? 'ring-2 ring-blue-500 bg-blue-50/80 dark:bg-blue-950/40 border-blue-300'
                    : nightMode ? 'bg-slate-950 border-slate-800 hover:border-slate-700' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-slate-900 dark:text-white">Q4</span>
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mt-1">
                  {language === 'es' ? 'Oftalmología' : 'Oftalmologia'}
                </div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">Retina · Vitrectomía</p>
                <div className="mt-2 text-[9px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 inline-block">
                  {language === 'es' ? 'Antequirófano' : 'Aurre-ebakigela'}
                </div>
              </button>
            </div>

            {/* Central Corridor & Transfer Area */}
            <div className="p-3.5 rounded-xl border border-dashed border-blue-300 dark:border-blue-800 bg-blue-50/40 dark:bg-blue-950/20 text-center space-y-1">
              <div className="flex items-center justify-center gap-2 text-xs font-extrabold text-blue-800 dark:text-blue-300 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span>
                  {language === 'es' 
                    ? 'Pasillo Central · Área de Transferencia de Pacientes (Transfer)' 
                    : 'Erdiko Pasilloa · Pazienteen Transfer Gunea'}
                </span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                {language === 'es' 
                  ? 'Punto de paso: Nivelación rigurosa de camilla y mesa a misma altura con transfer (tabla). Recepción de balas de O2 y pulsioxímetros devueltos por celadores de fuera.' 
                  : 'Igarobidea: Ohearen eta mahaiaren arteko altuera berdintzea transfer taula erabiliz. Kanpoko zeladoreek itzulitako O2 balak eta pultsiometroak jasotzea.'}
              </p>
            </div>

            {/* Bottom Row: Q5, Q6, Q7, Q8 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {/* Q5: Urología */}
              <button
                onClick={() => setSelectedRoom('Quirófano 5')}
                className={`p-3.5 rounded-xl border text-left transition-all relative ${
                  selectedRoom === 'Quirófano 5'
                    ? 'ring-2 ring-purple-500 bg-purple-50/80 dark:bg-purple-950/40 border-purple-300'
                    : nightMode ? 'bg-slate-950 border-slate-800 hover:border-slate-700' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-slate-900 dark:text-white">Q5</span>
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                </div>
                <div className="text-xs font-bold text-purple-600 dark:text-purple-400 mt-1">
                  {language === 'es' ? 'Urología' : 'Urologia'}
                </div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">RTU · Allen · Pilé</p>
                <div className="mt-2 text-[9px] px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-300 font-semibold inline-block">
                  {language === 'es' ? 'Mueble INTERIOR' : 'BARRUKO Altzaria'}
                </div>
              </button>

              {/* Q6: Urología */}
              <button
                onClick={() => setSelectedRoom('Quirófano 6')}
                className={`p-3.5 rounded-xl border text-left transition-all relative ${
                  selectedRoom === 'Quirófano 6'
                    ? 'ring-2 ring-purple-500 bg-purple-50/80 dark:bg-purple-950/40 border-purple-300'
                    : nightMode ? 'bg-slate-950 border-slate-800 hover:border-slate-700' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-slate-900 dark:text-white">Q6</span>
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                </div>
                <div className="text-xs font-bold text-purple-600 dark:text-purple-400 mt-1">
                  {language === 'es' ? 'Urología' : 'Urologia'}
                </div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">Nefrectomía · URS · NLP</p>
                <div className="mt-2 text-[9px] px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-300 font-semibold inline-block">
                  {language === 'es' ? 'Mueble INTERIOR' : 'BARRUKO Altzaria'}
                </div>
              </button>

              {/* Q7: Traumatología */}
              <button
                onClick={() => setSelectedRoom('Quirófano 7')}
                className={`p-3.5 rounded-xl border text-left transition-all relative ${
                  selectedRoom === 'Quirófano 7'
                    ? 'ring-2 ring-amber-500 bg-amber-50/80 dark:bg-amber-950/40 border-amber-300'
                    : nightMode ? 'bg-slate-950 border-slate-800 hover:border-slate-700' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-slate-900 dark:text-white">Q7</span>
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                </div>
                <div className="text-xs font-bold text-amber-600 dark:text-amber-400 mt-1">
                  {language === 'es' ? 'Traumatología' : 'Traumatologia'}
                </div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">PTC · Hombro Playa</p>
                <div className="mt-2 text-[9px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 inline-block">
                  {language === 'es' ? 'Antequirófano' : 'Aurre-ebakigela'}
                </div>
              </button>

              {/* Q8: Traumatología */}
              <button
                onClick={() => setSelectedRoom('Quirófano 8')}
                className={`p-3.5 rounded-xl border text-left transition-all relative ${
                  selectedRoom === 'Quirófano 8'
                    ? 'ring-2 ring-amber-500 bg-amber-50/80 dark:bg-amber-950/40 border-amber-300'
                    : nightMode ? 'bg-slate-950 border-slate-800 hover:border-slate-700' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-slate-900 dark:text-white">Q8</span>
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                </div>
                <div className="text-xs font-bold text-amber-600 dark:text-amber-400 mt-1">
                  {language === 'es' ? 'Traumatología' : 'Traumatologia'}
                </div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">Mesa Tracción · RX</p>
                <div className="mt-2 text-[9px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 inline-block">
                  {language === 'es' ? 'Antequirófano' : 'Aurre-ebakigela'}
                </div>
              </button>
            </div>

            {/* Perimeter Support Zones */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 text-xs">
                <span className="font-bold text-slate-900 dark:text-white block">UCI Área General V</span>
                <span className="text-slate-500 text-[11px]">
                  {language === 'es' ? 'Traslados exclusivos de celadores DE DENTRO.' : 'BARRUKO zeladoreen lekualdatze esklusiboak.'}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 text-xs">
                <span className="font-bold text-slate-900 dark:text-white block">
                  {language === 'es' ? 'Almacén de RX Área General V' : 'V. Eremu Orokorreko RX Biltegia'}
                </span>
                <span className="text-slate-500 text-[11px]">
                  {language === 'es' ? 'Arco en C: introducir y devolver por celador de dentro.' : 'C Arkua: barruko zeladoreak sartu eta itzuli.'}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 text-xs">
                <span className="font-bold text-slate-900 dark:text-white block">
                  {language === 'es' ? 'Almacén Balas de O2' : 'O2 Balen Biltegia'}
                </span>
                <span className="text-slate-500 text-[11px]">
                  {language === 'es' ? 'Balas rojas al almacén; gastadas a control.' : 'Bala gorriak biltegira; agortuak kontrolera.'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Room Inspector Panel on Right */}
        <div className="lg:col-span-4 space-y-4">
          <div className={`p-6 rounded-2xl border transition-colors ${
            nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                {language === 'es' ? 'Ficha Técnica Quirófano' : 'Ebakigelaren Fitxa Teknikoa'}
              </span>
              <span className="text-base font-extrabold text-slate-900 dark:text-white">
                {activeRoomData.room}
              </span>
            </div>

            <div className="mt-4 space-y-4">
              <div>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block">
                  {language === 'es' ? 'Especialidad Quirúrgica Asignada:' : 'Esleitutako Espezialitate Kirurgikoa:'}
                </span>
                <h4 className="text-base font-extrabold text-slate-900 dark:text-white mt-0.5">
                  {activeRoomData.specialty}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  {activeRoomData.scope}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block">
                  {language === 'es' ? 'Dotación de Celador/a:' : 'Zeladore Hornidura:'}
                </span>
                <p className="text-xs font-semibold text-blue-700 dark:text-blue-400 mt-0.5">
                  {activeRoomData.celadorDedicado}
                </p>
              </div>

              {/* Protocolo específico de accesorios */}
              <div className="p-3.5 rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-900/50">
                <h5 className="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wide">
                  {language === 'es' ? 'Regla de Accesorios & Desinfección HUN B:' : 'NUO B Osagarri eta Desinfekzio Araua:'}
                </h5>
                <p className="text-xs text-amber-800 dark:text-amber-200 mt-1 leading-normal">
                  {activeRoomData.accessoriesPolicy}
                </p>
              </div>

              <button
                onClick={() => {
                  if (activeRoomData.specialty.includes('Urgencias')) onSelectSpecialty('urgencias');
                  else if (activeRoomData.specialty.includes('Otorrino')) onSelectSpecialty('otorrino');
                  else if (activeRoomData.specialty.includes('Oftalmología')) onSelectSpecialty('oftalmologia');
                  else if (activeRoomData.specialty.includes('Urología')) onSelectSpecialty('urologia');
                  else onSelectSpecialty('traumatologia');
                }}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>{language === 'es' ? `Ver cirugías de ${activeRoomData.specialty}` : `Ikusi ${activeRoomData.specialty}-ko ebakuntzak`}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
