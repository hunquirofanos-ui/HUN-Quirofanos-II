import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Building2, 
  Sparkles,
  HelpCircle,
  FileQuestion,
  Loader2,
  RefreshCw,
  Award,
  Users,
  Camera,
  Code2,
  FileCheck2,
  Heart
} from 'lucide-react';
import { Language } from '../types/operatingRoom';

interface ContactCreditsSectionProps {
  nightMode: boolean;
  language: Language;
}

export const ContactCreditsSection: React.FC<ContactCreditsSectionProps> = ({
  nightMode,
  language
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    area: 'Quirófano Central II',
    subject: 'Sugerencia de mejora en protocolo',
    message: '',
    _honey: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const subjectOptions = [
    { value: 'Sugerencia de mejora en protocolo', labelEs: 'Sugerencia de mejora en protocolo', labelEu: 'Protokoloa hobetzeko iradokizuna' },
    { value: 'Notificación de errata o corrección técnica', labelEs: 'Notificación de errata o corrección técnica', labelEu: 'Errata edo zuzenketa teknikoa' },
    { value: 'Consulta sobre manejo de mesa o accesorio', labelEs: 'Consulta sobre manejo de mesa o accesorio', labelEu: 'Mahaiaren edo osagarrien inguruko zalantza' },
    { value: 'Consulta sobre aparataje de ORL o Urología', labelEs: 'Consulta sobre aparataje de ORL o Urología', labelEu: 'ORL edo Urologiako tresneriari buruzko kontsulta' },
    { value: 'Propuesta de nuevo vídeo o documento', labelEs: 'Propuesta de nuevo vídeo o documento', labelEu: 'Bideo edo dokumentu berria proposatzea' },
    { value: 'Duda de celador de nueva incorporación', labelEs: 'Duda de celador/a de nueva incorporación', labelEu: 'Zeladore berrien formakuntza-galdera' },
    { value: 'Otra consulta asistencial', labelEs: 'Otra consulta asistencial', labelEu: 'Beste kontsulta bat' }
  ];

  const areaOptions = [
    'Quirófano Central II (General)',
    'Quirófano de Urgencias II (Q1 24h)',
    'Q2 · Otorrinolaringología (ORL)',
    'Q3–Q4 · Oftalmología',
    'Q5–Q6 · Urología',
    'Q7–Q8 · Traumatología',
    'Celadores de Fuera / Logística',
    'Enfermería de Quirófano / Anestesia'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (formData._honey) {
      setStatus('success');
      return;
    }

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMessage(language === 'es' ? 'Por favor, introduce tu nombre.' : 'Mesedez, idatzi zure izena.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage(language === 'es' ? 'Introduce una dirección de correo electrónico válida.' : 'Idatzi baliozko helbide elektroniko bat.');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMessage(language === 'es' ? 'El mensaje debe contener al menos 10 caracteres.' : 'Mezuak gutxienez 10 karaktere izan behar ditu.');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('https://formsubmit.co/ajax/hunquirofanos@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `HUN Quirófanos II - ${formData.subject} (${formData.area})`,
          Nombre: formData.name.trim(),
          Email: formData.email.trim(),
          Ubicación: formData.area,
          Asunto: formData.subject,
          Mensaje: formData.message.trim(),
          _template: 'box'
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          area: 'Quirófano Central II',
          subject: 'Sugerencia de mejora en protocolo',
          message: '',
          _honey: ''
        });
      } else {
        throw new Error('Error al procesar el envío');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(language === 'es'
        ? 'No se ha podido enviar el mensaje en este momento. Comprueba tu conexión a internet o inténtalo de nuevo más tarde.'
        : 'Ezin izan da mezua bidali une honetan. Egiaztatu zure interneteko konexioa edo saiatu berriro.');
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Top Banner */}
      <div className={`p-6 sm:p-8 rounded-3xl border transition-colors ${
        nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-violet-100/90 dark:bg-violet-950/80 text-violet-800 dark:text-violet-300 border border-violet-200 dark:border-violet-800">
              <Mail className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
              <span>{language === 'es' ? 'Canal Oficial & Créditos' : 'Kanal Ofiziala & Kredituak'}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              {language === 'es' ? 'Contacto y Créditos' : 'Kontaktua eta Kredituak'}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {language === 'es'
                ? 'Canal directo para dudas asistenciales, incidencias de material y sugerencias de mejora dirigidas al equipo de celadores del Quirófano Central II y Quirófano de Urgencias II.'
                : 'Zalantzak, material-gorabeherak eta hobekuntza-proposamenak helarazteko kanal zuzena Erdiko II Ebakigelako eta Larrialdietako II Ebakigelako zeladore taldearentzat.'}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="px-3 py-1.5 rounded-xl bg-violet-50 dark:bg-violet-950/60 border border-violet-200 dark:border-violet-900 text-violet-700 dark:text-violet-300 font-bold text-xs">
              hunquirofanos@gmail.com
            </span>
          </div>
        </div>
      </div>

      {/* SECTION A: FORMULARIO DE CONTACTO */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Contact Form */}
        <div className={`lg:col-span-8 p-6 sm:p-8 rounded-3xl border transition-colors ${
          nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="mb-6">
            <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              <span>{language === 'es' ? 'Formulario de Contacto Directo' : 'Harremanetarako Zuzeneko Inprimakia'}</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {language === 'es' 
                ? 'Los mensajes se reciben en hunquirofanos@gmail.com para su revisión por los responsables del proyecto.'
                : 'Mezuak hunquirofanos@gmail.com helbidera bidaltzen dira proiektuaren arduradunek azter ditzaten.'}
            </p>
          </div>

          {status === 'success' ? (
            <div className="py-8 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-3xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                {language === 'es' ? '¡Mensaje Enviado Correctamente!' : 'Mezua Zuzen Bidali Da!'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                {language === 'es'
                  ? 'Hemos recibido tu consulta técnica o sugerencia en hunquirofanos@gmail.com. El equipo revisará la información para seguir mejorando la aplicación.'
                  : 'Zure kontsulta jaso dugu hunquirofanos@gmail.com helbidean. Lantaldeak aztertuko du aplikazioa hobetzen jarraitzeko.'}
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setStatus('idle')}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 transition-colors inline-flex items-center gap-2 shadow-2xs"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>{language === 'es' ? 'Enviar otra consulta' : 'Beste kontsulta bat bidali'}</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-300 dark:border-red-900 flex items-start gap-2.5 text-xs text-red-800 dark:text-red-300">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <input
                type="text"
                name="_honey"
                value={formData._honey}
                onChange={(e) => setFormData({ ...formData, _honey: e.target.value })}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                    {language === 'es' ? 'Nombre y Apellidos *' : 'Izen-Abizenak *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={language === 'es' ? 'Ej. Martín Etxarri' : 'Adib. Martín Etxarri'}
                    className={`w-full px-3.5 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      nightMode
                        ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500'
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                    {language === 'es' ? 'Correo Electrónico *' : 'Helbide Elektronikoa *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ejemplo@navarra.es"
                    className={`w-full px-3.5 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      nightMode
                        ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500'
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                    {language === 'es' ? 'Quirófano / Ubicación' : 'Ebakigela / Kokapena'}
                  </label>
                  <select
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      nightMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  >
                    {areaOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                    {language === 'es' ? 'Motivo de la Consulta *' : 'Gai-Arrazoia *'}
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      nightMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  >
                    {subjectOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {language === 'es' ? opt.labelEs : opt.labelEu}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                  {language === 'es' ? 'Mensaje o Descripción Detallada *' : 'Mezua edo Azalpen Zehatza *'}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={language === 'es' 
                    ? 'Indica quirófano, accesorio involucrado, técnica o duda concreta...' 
                    : 'Adierazi ebakigela, osagarria, teknika edo zalantza zehatza...'}
                  className={`w-full px-3.5 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                    nightMode
                      ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500'
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  {language === 'es' 
                    ? 'Destino directo: hunquirofanos@gmail.com' 
                    : 'Helbide zuzena: hunquirofanos@gmail.com'}
                </span>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-60 transition-all flex items-center justify-center gap-2 shadow-sm shrink-0"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{language === 'es' ? 'Enviando consulta...' : 'Bidaltzen...'}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{language === 'es' ? 'Enviar Consulta' : 'Bidali Kontsulta'}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right: Hospital Scope & Confidentiality */}
        <div className="lg:col-span-4 space-y-4">
          <div className={`p-5 rounded-2xl border transition-colors ${
            nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex items-center gap-2.5 text-xs font-bold text-violet-700 dark:text-violet-400 uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>{language === 'es' ? 'Ámbito Quirúrgico HUN' : 'NUO Ebakuntza Eremua'}</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'es'
                ? 'Canal exclusivo para personal celador y de enfermería adscrito al Quirófano Central II y Quirófano de Urgencias II del Hospital Universitario de Navarra (Área General V).'
                : 'Nafarroako Unibertsitate Ospitaleko Erdiko II Ebakigelari eta Larrialdietako II Ebakigelari (V. Eremu Orokorra) atxikitako zeladore eta erizaintzako langileentzako kanal esklusiboa.'}
            </p>
          </div>

          <div className={`p-4 rounded-2xl border text-xs leading-relaxed ${
            nightMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
          }`}>
            <span className="font-bold block text-slate-800 dark:text-slate-200 mb-1">
              {language === 'es' ? 'Nota de Confidencialidad' : 'Konfidentzialtasun Oharra'}
            </span>
            {language === 'es'
              ? 'No incluyas datos personales ni números de historia clínica de pacientes en tus consultas. La plataforma está orientada exclusivamente a protocolos y técnicas operativas.'
              : 'Ez sartu pazienteen datu pertsonalik edo historia-klinikoaren zenbakirik. Plataforma protokolo eta teknika operatiboetara soilik bideratuta dago.'}
          </div>
        </div>
      </div>

      {/* SECTION B: CRÉDITOS Y AUTORÍA DEL PROYECTO */}
      <div className={`p-6 sm:p-8 rounded-3xl border transition-all ${
        nightMode 
          ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 border-slate-800' 
          : 'bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/50 border-blue-200 shadow-sm'
      }`}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {language === 'es' ? 'Reconocimiento y Autoría Institucional' : 'Aitortza eta Egiletza Instituzionala'}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {language === 'es' ? 'Créditos y Equipo del Proyecto' : 'Proiektuaren Kredituak eta Taldea'}
            </h2>
          </div>
        </div>

        {/* 3 Explicit Credits Blocks as Requested */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Credit 1: Design & Development */}
          <div className={`p-5 rounded-2xl border transition-all ${
            nightMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-blue-100 shadow-2xs'
          }`}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-sm shadow-xs shrink-0">
                DT
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">
                  {language === 'es' ? 'Diseño y Desarrollo de la Web' : 'Webaren Diseinua eta Garapena'}
                </span>
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white leading-tight">
                  David Tabernero Garin
                </h3>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'es'
                ? 'Concepción global, arquitectura de contenidos, desarrollo de la plataforma interactiva y sistematización de los protocolos de celadores.'
                : 'Plataforma interaktiboaren ikuskera orokorra, edukien arkitektura eta zeladoreen protokoloen garapen teknikoa.'}
            </p>
          </div>

          {/* Credit 2: Urology Report Collaboration */}
          <div className={`p-5 rounded-2xl border transition-all ${
            nightMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-blue-100 shadow-2xs'
          }`}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black text-sm shadow-xs shrink-0">
                LN
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
                  {language === 'es' ? 'Colaboración e Informe de Urología' : 'Urologiako Txostenaren Elkarlana'}
                </span>
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white leading-tight">
                  Lain Nagore
                </h3>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'es'
                ? 'Elaboración técnica del informe oficial de posiciones quirúrgicas de Urología (FIG. 1 a FIG. 20) en Quirófanos 5 y 6 del HUN.'
                : 'Urologiako ebakuntza-posizioen txosten ofizialaren prestaketa teknikoa (FIG. 1etik FIG. 20ra) NUOko 5 eta 6 ebakigeletan.'}
            </p>
          </div>

          {/* Credit 3: Photography */}
          <div className={`p-5 rounded-2xl border transition-all ${
            nightMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-blue-100 shadow-2xs'
          }`}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs shrink-0">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">
                  {language === 'es' ? 'Fotografías del Proyecto' : 'Proiektuaren Argazkiak'}
                </span>
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white leading-tight">
                  David y Lain Nagore
                </h3>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'es'
                ? 'Fotografía técnica original en bloque quirúrgico: figuras de urología, pre-entrada de transfer y los 8 equipos específicos de ORL.'
                : 'Ebakuntza-blokeko benetako argazki teknikoak: urologia, transferreko mahai-prestaketa eta ORLeko 8 ekipo espezifikoak.'}
            </p>
          </div>
        </div>

        {/* Institution block */}
        <div className="mt-6 pt-5 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              Hospital Universitario de Navarra (HUN) · Quirófano Central II & Quirófano de Urgencias II (Área General V)
            </span>
          </div>
          <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 font-mono text-[11px] font-bold">
            Edición HUN 2026
          </span>
        </div>
      </div>
    </div>
  );
};
