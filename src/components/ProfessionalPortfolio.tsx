import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  Plus, 
  Trash2, 
  UserCheck, 
  Printer, 
  Filter,
  Sparkles
} from 'lucide-react';
import { PortfolioRecord, SpecialtyId, Language } from '../types/operatingRoom';
import { SPECIALTIES } from '../data/operatingRoomData';
import { TRANSLATIONS } from '../i18n/translations';

interface ProfessionalPortfolioProps {
  records: PortfolioRecord[];
  onAddRecord: (record: PortfolioRecord) => void;
  onDeleteRecord: (id: string) => void;
  nightMode: boolean;
  language: Language;
  onNavigateToSearch: () => void;
}

export const ProfessionalPortfolio: React.FC<ProfessionalPortfolioProps> = ({
  records,
  onAddRecord,
  onDeleteRecord,
  nightMode,
  language,
  onNavigateToSearch
}) => {
  const t = TRANSLATIONS[language];
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [filterSpecialty, setFilterSpecialty] = useState<string>('all');
  const [filterRole, setFilterRole] = useState<string>('all');

  // Form state
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [specialty, setSpecialty] = useState<SpecialtyId>('urologia');
  const [surgeryName, setSurgeryName] = useState<string>('Nefrectomía Laparoscópica con Pilé (Protocolo HUN B)');
  const [operatingRoom, setOperatingRoom] = useState<string>('Quirófano 5');
  const [role, setRole] = useState<'dentro' | 'fuera'>('dentro');
  const [patientTransferDone, setPatientTransferDone] = useState<boolean>(true);
  const [tableConverted, setTableConverted] = useState<boolean>(true);
  const [nursingCollaborator, setNursingCollaborator] = useState<string>('Enf. Anestesia Lucía Ezquerro');
  const [notes, setNotes] = useState<string>('Ombligo colocado en círculo de mesa (FIG. 2). Pilé con botón Flex de SensorLine. Topes en escápulas y lumbares con huevera. Brazo en teja y cincha colocada.');

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const newRecord: PortfolioRecord = {
      id: `rec-${Date.now()}`,
      date,
      specialty,
      surgeryName,
      operatingRoom,
      role,
      patientTransferDone,
      tableConverted,
      nursingCollaborator,
      notes,
      verified: true
    };
    onAddRecord(newRecord);
    setIsAdding(false);
  };

  // Filtered entries
  const filteredRecords = records.filter(r => {
    if (filterSpecialty !== 'all' && r.specialty !== filterSpecialty) return false;
    if (filterRole !== 'all' && r.role !== filterRole) return false;
    return true;
  });

  const totalRecords = records.length;
  const dentroCount = records.filter(r => r.role === 'dentro').length;
  const fueraCount = records.filter(r => r.role === 'fuera').length;
  const dentroPercentage = totalRecords > 0 ? Math.round((dentroCount / totalRecords) * 100) : 50;

  return (
    <div className="space-y-6">
      {/* Portfolio Header */}
      <div className={`p-5 rounded-2xl border transition-colors ${
        nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>{language === 'es' ? 'Portafolio Clínico Individual · HUN Área General V' : 'Portafolio Kliniko Indibiduala · NUO V. Eremu Orokorra'}</span>
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
              {language === 'es' 
                ? 'Registro de Actividad Quirúrgica & Colaboración con Enfermería' 
                : 'Jarduera Kirurgikoaren Erregistroa & Erizaintzarekin Elkarlana'}
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
              {language === 'es'
                ? 'Historial profesional de intervenciones asistidas, montajes de mesa quirúrgica, roles desempeñados (Dentro / Fuera) y notas de buenas prácticas.'
                : 'Lagundutako ebakuntzen, mahai kirurgikoen muntaien, egindako rolen (Barruan / Kanpoan) eta praktika egokien oharren ibilbide profesionala.'}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => setIsAdding(!isAdding)}
              className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>{t.registerInterventionBtn}</span>
            </button>

            <button
              onClick={() => window.print()}
              className={`p-2 rounded-lg border text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${
                nightMode ? 'border-slate-700' : 'border-slate-200'
              }`}
              title={language === 'es' ? 'Imprimir resumen de actividad' : 'Inprimatu jardueraren laburpena'}
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Portfolio KPI Strip */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div>
            <span className="text-[11px] text-slate-500 font-medium block">{t.totalInterventions}</span>
            <span className="text-xl font-extrabold text-slate-900 dark:text-white tabular-nums">
              {totalRecords}
            </span>
          </div>

          <div>
            <span className="text-[11px] text-slate-500 font-medium block">{t.dentroRatio}</span>
            <span className="text-xl font-extrabold text-blue-600 dark:text-blue-400 tabular-nums">
              {dentroCount} ({dentroPercentage}%)
            </span>
          </div>

          <div>
            <span className="text-[11px] text-slate-500 font-medium block">{t.fueraRatio}</span>
            <span className="text-xl font-extrabold text-sky-600 dark:text-sky-400 tabular-nums">
              {fueraCount} ({100 - dentroPercentage}%)
            </span>
          </div>

          <div>
            <span className="text-[11px] text-slate-500 font-medium block">{language === 'es' ? 'Especialidades' : 'Espezialitateak'}</span>
            <span className="text-xl font-extrabold text-slate-900 dark:text-white">
              {language === 'es' ? '5 Bloques HUN' : '5 NUO Bloke'}
            </span>
          </div>
        </div>
      </div>

      {/* Manual Add Form Modal/Card */}
      {isAdding && (
        <form 
          onSubmit={handleCreate}
          className={`p-5 rounded-2xl border transition-colors space-y-4 ${
            nightMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 shadow-sm text-slate-900'
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
              {t.newRecordTitle}
            </h3>
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="text-xs text-slate-400 hover:text-slate-600"
            >
              {t.cancelBtn}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="font-semibold block mb-1">
                {language === 'es' ? 'Fecha de la Intervención' : 'Ebakuntzaren Data'}
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="font-semibold block mb-1">
                {language === 'es' ? 'Especialidad' : 'Espezialitatea'}
              </label>
              <select
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value as SpecialtyId)}
                className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                {SPECIALTIES.map(s => (
                  <option key={s.id} value={s.id}>{language === 'es' ? s.name : s.nameEu}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-semibold block mb-1">
                {language === 'es' ? 'Quirófano' : 'Ebakigela'}
              </label>
              <select
                value={operatingRoom}
                onChange={(e) => setOperatingRoom(e.target.value)}
                className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="Quirófano 1">Quirófano 1 (Urgencias / Larrialdiak)</option>
                <option value="Quirófano 2">Quirófano 2 (ORL)</option>
                <option value="Quirófano 3">Quirófano 3 (Oftalmología)</option>
                <option value="Quirófano 4">Quirófano 4 (Oftalmología)</option>
                <option value="Quirófano 5">Quirófano 5 (Urología / Urologia)</option>
                <option value="Quirófano 6">Quirófano 6 (Urología / Urologia)</option>
                <option value="Quirófano 7">Quirófano 7 (Traumatología)</option>
                <option value="Quirófano 8">Quirófano 8 (Traumatología)</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="font-semibold block mb-1">
                {language === 'es' ? 'Nombre de la Cirugía / Procedimiento' : 'Ebakuntzaren Izena / Prozedura'}
              </label>
              <input
                type="text"
                value={surgeryName}
                onChange={(e) => setSurgeryName(e.target.value)}
                required
                className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="font-semibold block mb-1">
                {language === 'es' ? 'Rol Desempeñado' : 'Egindako Rola'}
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as 'dentro' | 'fuera')}
                className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="dentro">{language === 'es' ? 'Celador/a DE DENTRO' : 'BARRUKO Zeladorea'}</option>
                <option value="fuera">{language === 'es' ? 'Celador/a DE FUERA' : 'KANPOKO Zeladorea'}</option>
              </select>
            </div>

            <div className="sm:col-span-3">
              <label className="font-semibold block mb-1">
                {language === 'es' ? 'Enfermera/o Colaboradora/or' : 'Erizain Lankidea'}
              </label>
              <input
                type="text"
                value={nursingCollaborator}
                onChange={(e) => setNursingCollaborator(e.target.value)}
                placeholder="Ej: Enf. Anestesia Lucía Ezquerro"
                className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>

            <div className="sm:col-span-3">
              <label className="font-semibold block mb-1">
                {language === 'es' ? 'Notas Asistenciales, Posición & Accesorios' : 'Laguntza Oharrak, Posizioa eta Osagarriak'}
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700"
            >
              {t.cancelBtn}
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              {t.saveBtn}
            </button>
          </div>
        </form>
      )}

      {/* Filter and List strip */}
      <div className={`p-4 rounded-xl border flex flex-wrap items-center justify-between gap-3 transition-colors ${
        nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="flex items-center gap-3">
          <Filter className="w-4 h-4 text-slate-400" />
          <select
            value={filterSpecialty}
            onChange={(e) => setFilterSpecialty(e.target.value)}
            className="text-xs p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white"
          >
            <option value="all">{t.allSpecialties}</option>
            {SPECIALTIES.map(s => (
              <option key={s.id} value={s.id}>{language === 'es' ? s.name : s.nameEu}</option>
            ))}
          </select>

          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="text-xs p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent text-slate-900 dark:text-white"
          >
            <option value="all">{language === 'es' ? 'Todos los Roles' : 'Rol Guztiak'}</option>
            <option value="dentro">{language === 'es' ? 'De Dentro' : 'Barrukoa'}</option>
            <option value="fuera">{language === 'es' ? 'De Fuera' : 'Kanpokoa'}</option>
          </select>
        </div>

        <button
          onClick={onNavigateToSearch}
          className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{language === 'es' ? 'Añadir directamente desde el Buscador' : 'Gehitu zuzenean Bilatzailetik'}</span>
        </button>
      </div>

      {/* Activity Timeline List */}
      <div className="space-y-3">
        {filteredRecords.length === 0 ? (
          <div className="text-center py-10 text-xs text-slate-500">
            {language === 'es' ? 'No hay registros con los filtros seleccionados.' : 'Ez dago erregistrorik hautatutako iragazkiekin.'}
          </div>
        ) : (
          filteredRecords.map((record) => {
            const spec = SPECIALTIES.find(s => s.id === record.specialty);
            return (
              <div
                key={record.id}
                className={`p-4 rounded-xl border transition-all ${
                  nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold text-slate-900 dark:text-white">
                      {record.operatingRoom}
                    </span>
                    <span className="text-xs text-slate-400">·</span>
                    <span className="text-xs font-semibold text-blue-700 dark:text-blue-400">
                      {language === 'es' ? spec?.name : spec?.nameEu}
                    </span>
                    <span className="text-xs text-slate-400">·</span>
                    <span className="text-xs text-slate-500 tabular-nums">
                      {record.date}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                      record.role === 'dentro'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                        : 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300'
                    }`}>
                      {record.role === 'dentro' ? t.dentroTeamTitle : t.fueraTeamTitle}
                    </span>

                    <button
                      onClick={() => onDeleteRecord(record.id)}
                      title={language === 'es' ? "Eliminar registro" : "Ezabatu erregistroa"}
                      className="text-slate-400 hover:text-red-500 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="mt-2.5">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {record.surgeryName}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    {record.notes}
                  </p>
                </div>

                {record.nursingCollaborator && (
                  <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <UserCheck className="w-3.5 h-3.5 text-blue-600" />
                      <span>{language === 'es' ? 'Colaboración: ' : 'Elkarlana: '}<strong>{record.nursingCollaborator}</strong></span>
                    </span>
                    <span className="text-emerald-600 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {language === 'es' ? 'Verificado' : 'Egiaztatua'}
                    </span>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
