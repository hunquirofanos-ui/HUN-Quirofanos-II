import React, { useState } from 'react';
import { 
  Users, 
  ChevronLeft,
  ChevronRight,
  Edit2,
  Save,
  Palmtree,
  CheckCircle,
  UserCheck
} from 'lucide-react';
import { 
  StaffPair, 
  DEFAULT_PAIRS, 
  DEFAULT_URGENCIAS_STAFF, 
  calculateShiftForDate 
} from '../data/shiftRotationData';
import { Language } from '../types/operatingRoom';
import { TRANSLATIONS } from '../i18n/translations';

export const ShiftCalculator: React.FC<{ 
  nightMode: boolean; 
  language: Language; 
  onNavigateToProtocols: () => void 
}> = ({
  nightMode,
  language,
  onNavigateToProtocols
}) => {
  const t = TRANSLATIONS[language];
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [pairs, setPairs] = useState<StaffPair[]>(DEFAULT_PAIRS);
  const [urgenciasStaff, setUrgenciasStaff] = useState<string>(DEFAULT_URGENCIAS_STAFF);
  const [vacationMode, setVacationMode] = useState<boolean>(false);
  const [absentCount, setAbsentCount] = useState<number>(1);
  const [isEditingStaff, setIsEditingStaff] = useState<boolean>(false);

  // Calculate shift distribution for chosen date
  const shift = calculateShiftForDate(selectedDate, pairs, urgenciasStaff, vacationMode, absentCount);

  // Navigation handlers
  const handlePrevDay = () => {
    const next = new Date(selectedDate);
    next.setDate(next.getDate() - 1);
    setSelectedDate(next);
  };

  const handleNextDay = () => {
    const next = new Date(selectedDate);
    next.setDate(next.getDate() + 1);
    setSelectedDate(next);
  };

  const handleToday = () => {
    setSelectedDate(new Date());
  };

  const formattedDate = selectedDate.toLocaleDateString(language === 'eu' ? 'eu-ES' : 'es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="space-y-6">
      {/* Top Banner with HUN Official Rules */}
      <div className={`p-5 rounded-2xl border transition-colors ${
        nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              <Users className="w-4 h-4" />
              <span>{t.pavilionName} · {language === 'es' ? 'Turno de Mañana' : 'Goizeko Txanda'}</span>
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
              {language === 'es' 
                ? 'Rueda de Turnos & Rotación de Parejas (3 Días Laborables)' 
                : 'Txanda Gurpila & Bikoteen Errotazioa (3 Lanegun)'}
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
              {language === 'es' 
                ? '3 parejas fijas rotan cada 3 días laborables (los festivos entre semana y fines de semana no cuentan). El celador de Urgencias (Q1) está siempre dentro. En vacaciones o bajas con personal impar, siempre hay una persona más dentro que fuera.'
                : 'Goizeko 3 bikote finkoek 3 lanegunero txandakatzen dute (asteburuek eta jaiegunek ez dute kontatzen). Larrialdietako zeladorea beti barruan dago. Oporretan edo bitarteko bikoiti-gabeetan, beti pertsona bat gehiago dago barruan kanpoan baino.'}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => setIsEditingStaff(!isEditingStaff)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors flex items-center gap-1.5 ${
                isEditingStaff
                  ? 'bg-blue-600 text-white border-blue-600'
                  : nightMode
                  ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {isEditingStaff ? <Save className="w-3.5 h-3.5" /> : <Edit2 className="w-3.5 h-3.5" />}
              <span>{isEditingStaff ? t.savePairsBtn : t.editPairsBtn}</span>
            </button>
          </div>
        </div>

        {/* Inline staff editor if open */}
        {isEditingStaff && (
          <div className="mt-4 p-4 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-300">
              {language === 'es' ? 'Personalizar nombres de las 3 parejas fijas de mañana' : 'Goizeko 3 bikote finkoen izenak pertsonalizatu'}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {pairs.map((pair, idx) => (
                <div key={pair.id} className="space-y-1.5 p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{pair.name}</span>
                  <input
                    type="text"
                    value={pair.memberA}
                    onChange={(e) => {
                      const updated = [...pairs];
                      updated[idx].memberA = e.target.value;
                      setPairs(updated);
                    }}
                    placeholder="Miembro A"
                    className="w-full text-xs p-1.5 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                  <input
                    type="text"
                    value={pair.memberB}
                    onChange={(e) => {
                      const updated = [...pairs];
                      updated[idx].memberB = e.target.value;
                      setPairs(updated);
                    }}
                    placeholder="Miembro B"
                    className="w-full text-xs p-1.5 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
              ))}
            </div>
            <div className="pt-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                {language === 'es' ? 'Celador/a de Urgencias (Rotado Q1 - Siempre Dentro):' : 'Larrialdietako Zeladorea (Q1 Txandakatua - Beti Barruan):'}
              </label>
              <input
                type="text"
                value={urgenciasStaff}
                onChange={(e) => setUrgenciasStaff(e.target.value)}
                className="w-full max-w-md text-xs p-1.5 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
              />
            </div>
          </div>
        )}
      </div>

      {/* Interactive Date & Controls Bar */}
      <div className={`p-4 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors ${
        nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
          <button
            onClick={handlePrevDay}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
            title="Día anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="text-center sm:text-left px-2">
            <span className="text-xs font-bold text-slate-900 dark:text-white capitalize block">
              {formattedDate}
            </span>
            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              {shift.isWeekend ? (
                <span className="text-amber-600 font-semibold">{t.weekendNotice}</span>
              ) : (
                <span>
                  {language === 'es' ? 'Bloque' : 'Blokea'} #{shift.cycleBlockIndex + 1} · <strong>{language === 'es' ? `Día ${shift.cycleDay} de 3` : `3tik ${shift.cycleDay}. eguna`}</strong>
                </span>
              )}
            </div>
          </div>

          <button
            onClick={handleNextDay}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
            title="Día siguiente"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleToday}
            className="px-2.5 py-1 text-xs font-semibold rounded-md bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300 hover:bg-blue-200 ml-1"
          >
            {t.todayBtn}
          </button>
        </div>

        {/* Vacation / Absence Simulator Toggle */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100 dark:border-slate-800">
          <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-700 dark:text-slate-300">
            <Palmtree className="w-4 h-4 text-emerald-600" />
            <span>{t.vacationSimulatorLabel}</span>
            <input
              type="checkbox"
              checked={vacationMode}
              onChange={(e) => setVacationMode(e.target.checked)}
              className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
            />
          </label>
        </div>
      </div>

      {/* Vacation rule alert banner when active */}
      {shift.vacationAdjustmentApplied && (
        <div className="p-3.5 rounded-xl border border-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 dark:border-emerald-900/60 flex items-start gap-3">
          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-xs text-emerald-900 dark:text-emerald-300">
            <strong>{t.vacationRuleNote}</strong>
            <p className="mt-0.5">{shift.vacationNotes}</p>
          </div>
        </div>
      )}

      {/* Roster Cards: Celadores DE DENTRO vs Celadores DE FUERA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* GRUPO DE DENTRO (4 Personas) */}
        <div className={`p-6 rounded-2xl border transition-colors ${
          nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex items-start justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-4">
            <div>
              <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
                {language === 'es' ? 'Grupo 1 · Quirófanos & UCI B' : '1. Taldea · Ebakigelak & ZIU B'}
              </span>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2 mt-0.5">
                <span>{t.dentroTeamTitle}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-bold">
                  {shift.dentroTeam.fijoManana.length + 1} {language === 'es' ? 'personas' : 'lagun'}
                </span>
              </h3>
            </div>
            <button
              onClick={onNavigateToProtocols}
              className="text-xs text-blue-600 hover:underline font-semibold"
            >
              {language === 'es' ? '13 Funciones' : '13 Funtzio'}
            </button>
          </div>

          <div className="space-y-3">
            {/* Urgencias Celador (Siempre Dentro) */}
            <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    {shift.dentroTeam.urgencias}
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-red-100 dark:bg-red-900/60 text-red-800 dark:text-red-300">
                  {t.alwaysInsideBadge}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 pl-4">
                {language === 'es' 
                  ? 'Turno rotado dedicado a Quirófano 1 de Urgencias y apoyo directo en el bloque.' 
                  : 'Larrialdietako 1. Ebakigelari zuzendutako txanda eta blokeko laguntza zuzena.'}
              </p>
            </div>

            {/* Fijo Mañana Dentro */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block">
                {language === 'es' ? 'Celadores del Turno Fijo de Mañana (Grupo Dentro):' : 'Goizeko Txanda Finkoko Zeladoreak (Barruko Taldea):'}
              </span>
              {shift.dentroTeam.fijoManana.map((name, i) => (
                <div 
                  key={i}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/70 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <UserCheck className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-semibold text-slate-900 dark:text-white">
                      {name}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {language === 'es' ? `Pareja ${i + 1}` : `${i + 1}. Bikotea`}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick functional responsibilities */}
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <span className="font-semibold text-slate-800 dark:text-slate-200 block">
                {language === 'es' ? 'Cometidos principales de dentro hoy:' : 'Gaurko barruko lan nagusiak:'}
              </span>
              <p>• {language === 'es' ? 'Acople de mesa al pie quirúrgico y retirada de carro/gotero al antequirófano.' : 'Mahaia oinean ahokatu eta orga/goteroa aurre-ebakigelara atera.'}</p>
              <p>• {language === 'es' ? 'Asistencia en raquídea, isquemia, pintado y colocación de paciente.' : 'Laguntza errakideoan, iskeman, pintatzean eta pazientea kokatzean.'}</p>
              <p>• {language === 'es' ? 'Introducir y devolver el aparato de RX a su almacén.' : 'RX aparatua sartu eta biltegira itzuli.'}</p>
              <p>• {language === 'es' ? 'Traslados exclusivos de pacientes ingresados en UCI B (ida y vuelta).' : 'ZIU Bko pazienteen lekualdatze esklusiboak.'}</p>
              <p>• {language === 'es' ? 'Salida con bala de O2 al 50% y gestión de accesorios (Q1,2,7,8 antequirófano vs Q5,6 mueble).' : 'Irteera %50eko O2 balarekin eta osagarrien kudeaketa.'}</p>
            </div>
          </div>
        </div>

        {/* GRUPO DE FUERA (3 Personas) */}
        <div className={`p-6 rounded-2xl border transition-colors ${
          nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex items-start justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-4">
            <div>
              <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
                {language === 'es' ? 'Grupo 2 · Plantas, Transfer & Servicios' : '2. Taldea · Solairuak, Transferra & Zerbitzuak'}
              </span>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2 mt-0.5">
                <span>{t.fueraTeamTitle}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
                  {shift.fueraTeam.fijoManana.length} {language === 'es' ? 'personas' : 'lagun'}
                </span>
              </h3>
            </div>
            <button
              onClick={onNavigateToProtocols}
              className="text-xs text-blue-600 hover:underline font-semibold"
            >
              {language === 'es' ? '14 Funciones' : '14 Funtzio'}
            </button>
          </div>

          <div className="space-y-3">
            {/* Fijo Mañana Fuera */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block">
                {language === 'es' ? 'Celadores del Turno Fijo de Mañana (Grupo Fuera):' : 'Goizeko Txanda Finkoko Zeladoreak (Kanpoko Taldea):'}
              </span>
              {shift.fueraTeam.fijoManana.map((name, i) => (
                <div 
                  key={i}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/70 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <UserCheck className="w-4 h-4 text-sky-600" />
                    <span className="text-xs font-semibold text-slate-900 dark:text-white">
                      {name}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {language === 'es' ? `Pareja ${i + 1}` : `${i + 1}. Bikotea`}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick functional responsibilities */}
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <span className="font-semibold text-slate-800 dark:text-slate-200 block">
                {language === 'es' ? 'Cometidos principales de fuera hoy:' : 'Gaurko kanpoko lan nagusiak:'}
              </span>
              <p>• {language === 'es' ? 'Traer pacientes de plantas (Maternal/General) y UCMA con check list y pegatina.' : 'Pazienteak solairuetatik eta UCMA-tik ekartzea check list eta eranskailuarekin.'}</p>
              <p>• {language === 'es' ? 'Retirar cabecero y triángulo de Balkan/potencia (dejar en la habitación).' : 'Buru-euskarria eta Balkan triangelua kentzea gelan utzita.'}</p>
              <p>• {language === 'es' ? 'Ayudar en el transfer de entrada y retorno a URPA/UCMA tras cirugía.' : 'Sarrerako transferrean eta ebakuntza osteko URPA/UCMA-ra eramaten laguntzea.'}</p>
              <p>• {language === 'es' ? 'Devolver bala y pulsioxímetro al transfer para que el de dentro lo limpie.' : 'Bala eta pultsiometroa transferrera itzultzea barrukoak garbitzeko.'}</p>
              <p>• {language === 'es' ? 'Hemoterapia, Farmacia, AP/Citología por bala, Punto Limpio y Electromedicina.' : 'Hemoterapia, Farmazia, Anatomia Patologikoa balaz, Garbigunea eta Elektromedizina.'}</p>
              <p>• {language === 'es' ? 'Éxitus: 2 celadores de fuera trasladan el cadáver al mortuorio tras el embolsado.' : 'Éxitus: Kanpoko 2 zeladorek gorpua mortuoriora eramaten dute.'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5-Day Forecast mini calendar */}
      <div className={`p-4 rounded-xl border transition-colors ${
        nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
          {t.upcomingForecastTitle}
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
          {[1, 2, 3, 4, 5].map((offset) => {
            const nextDate = new Date(selectedDate);
            nextDate.setDate(nextDate.getDate() + offset);
            const futureShift = calculateShiftForDate(nextDate, pairs, urgenciasStaff, vacationMode, absentCount);
            return (
              <div
                key={offset}
                onClick={() => setSelectedDate(nextDate)}
                className={`p-2.5 rounded-lg border cursor-pointer hover:border-blue-500 transition-colors ${
                  futureShift.isWeekend
                    ? 'bg-slate-100/50 dark:bg-slate-800/30 border-dashed border-slate-300 dark:border-slate-700'
                    : nightMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="font-bold text-slate-900 dark:text-white capitalize">
                  {nextDate.toLocaleDateString(language === 'eu' ? 'eu-ES' : 'es-ES', { weekday: 'short', day: 'numeric', month: 'short' })}
                </div>
                {futureShift.isWeekend ? (
                  <span className="text-[10px] text-amber-600 block mt-1">{language === 'es' ? 'Fin de semana' : 'Asteburua'}</span>
                ) : (
                  <div className="mt-1 space-y-0.5 text-[11px] text-slate-600 dark:text-slate-400">
                    <div>{language === 'es' ? `Día ${futureShift.cycleDay} / 3` : `3tik ${futureShift.cycleDay}. eguna`}</div>
                    <div className="text-[10px] text-blue-700 dark:text-blue-400">
                      {language === 'es' ? 'Dentro:' : 'Barruan:'} {futureShift.dentroTeam.fijoManana[0]?.split(' ')[0]}...
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
