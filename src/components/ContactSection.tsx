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
  RefreshCw
} from 'lucide-react';
import { Language } from '../types/operatingRoom';

interface ContactSectionProps {
  nightMode: boolean;
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  nightMode,
  language
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    area: 'Quirófano Central II',
    subject: 'Sugerencia de mejora en protocolo',
    message: '',
    _honey: '' // Honeypot field for anti-spam
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const subjectOptions = [
    { value: 'Sugerencia de mejora en protocolo', labelEs: 'Sugerencia de mejora en protocolo', labelEu: 'Protokoloa hobetzeko iradokizuna' },
    { value: 'Notificación de errata o corrección técnica', labelEs: 'Notificación de errata o corrección técnica', labelEu: 'Errata edo zuzenketa teknikoa' },
    { value: 'Consulta sobre manejo de mesa o accesorio', labelEs: 'Consulta sobre manejo de mesa o accesorio', labelEu: 'Mahaiaren edo osagarrien inguruko zalantza' },
    { value: 'Propuesta de nuevo vídeo o documento', labelEs: 'Propuesta de nuevo vídeo o documento', labelEu: 'Bideo edo dokumentu berria proposatzea' },
    { value: 'Duda de celador de nueva incorporación', labelEs: 'Duda de celador/a de nueva incorporación', labelEu: 'Zeladore berrien formakuntza-galdera' },
    { value: 'Otra consulta asistencial', labelEs: 'Otra consulta asistencial', labelEu: 'Beste kontsulta bat' }
  ];

  const areaOptions = [
    'Quirófano Central II (General)',
    'Quirófano de Urgencias II (Q1)',
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

    // Spam honeypot validation
    if (formData._honey) {
      // Silently pretend success to fool spambots
      setStatus('success');
      return;
    }

    // Basic frontend validations
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
      // Submitting via FormSubmit AJAX service without exposing credentials or requiring backend keys
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
    <div className="space-y-6 pb-10">
      {/* Top Banner */}
      <div className={`p-6 sm:p-8 rounded-3xl border transition-colors ${
        nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-violet-100/90 dark:bg-violet-950/80 text-violet-800 dark:text-violet-300 border border-violet-200 dark:border-violet-800">
              <Mail className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
              <span>{language === 'es' ? 'Canal Oficial de Comunicación' : 'Komunikazio Kanal Ofiziala'}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              {language === 'es' ? 'Contacto e Incidencias HUN Quirófanos II' : 'Kontaktua eta Gorabeherak'}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {language === 'es'
                ? '¿Tienes alguna duda sobre los protocolos de mesa quirúrgica? ¿Has detectado una errata o quieres sugerir una mejora para el personal celador y de enfermería? Envíanos tu consulta mediante este formulario.'
                : 'Mahaiko protokoloen inguruko zalantzarik duzu? Akatsen bat aurkitu duzu edo hobekuntzaren bat proposatu nahi duzu? Bidal iezaguzu zure kontsulta inprimaki honen bidez.'}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="px-3 py-1.5 rounded-xl bg-violet-50 dark:bg-violet-950/60 border border-violet-200 dark:border-violet-900 text-violet-700 dark:text-violet-300 font-bold text-xs">
              {language === 'es' ? 'Respuesta rápida' : 'Erantzun azkarra'}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Form */}
        <div className={`lg:col-span-8 p-6 sm:p-8 rounded-3xl border transition-colors ${
          nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          {status === 'success' ? (
            <div className="py-8 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-3xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-black text-slate-900 dark:text-white">
                {language === 'es' ? '¡Mensaje Enviado Correctamente!' : 'Mezua Zuzen Bidali Da!'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                {language === 'es'
                  ? 'Hemos recibido tu consulta técnica o sugerencia. El equipo revisará la información para seguir mejorando la aplicación HUN Quirófanos II.'
                  : 'Zure kontsulta edo iradokizuna jaso dugu. Lantaldeak informazioa aztertuko du HUN Quirófanos II aplikazioa hobetzen jarraitzeko.'}
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
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Error banner */}
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-300 dark:border-red-900 flex items-start gap-2.5 text-xs text-red-800 dark:text-red-300">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Honeypot field (hidden from human users, catches bots) */}
              <input
                type="text"
                name="_honey"
                value={formData._honey}
                onChange={(e) => setFormData({ ...formData, _honey: e.target.value })}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Name & Email Grid */}
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
                    {language === 'es' ? 'Correo Electrónico de Contacto *' : 'Harremanetarako Helbide Elektronikoa *'}
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

              {/* Operating Room / Area Selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                  {language === 'es' ? 'Quirófano / Puesto Asistencial' : 'Ebakigela / Lanpostua'}
                </label>
                <select
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className={`w-full px-3.5 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                    nightMode
                      ? 'bg-slate-950 border-slate-800 text-white'
                      : 'bg-slate-50 border-slate-200 text-slate-900'
                  }`}
                >
                  {areaOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Subject Dropdown */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                  {language === 'es' ? 'Motivo de la Consulta o Sugerencia *' : 'Kontsultaren edo Iradokizunaren Gai-Arrazoia *'}
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={`w-full px-3.5 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                    nightMode
                      ? 'bg-slate-950 border-slate-800 text-white'
                      : 'bg-slate-50 border-slate-200 text-slate-900'
                  }`}
                >
                  {subjectOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {language === 'es' ? opt.labelEs : opt.labelEu}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                  {language === 'es' ? 'Mensaje o Descripción Detallada *' : 'Mezua edo Azalpen Zehatza *'}
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={language === 'es' 
                    ? 'Explica tu duda o sugerencia con detalle (número de quirófano, accesorio involucrado, técnica o procedimiento)...' 
                    : 'Azaldu zure zalantza edo proposamena zehaztasunez (ebakigela zenbakia, osagarria, teknika)...'}
                  className={`w-full px-3.5 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                    nightMode
                      ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500'
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>

              {/* Submit button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  {language === 'es' 
                    ? 'Tus datos se utilizarán únicamente para responder a tu consulta técnico-asistencial.' 
                    : 'Zure datuak zure kontsultari erantzuteko baino ez dira erabiliko.'}
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

        {/* Right Column: Information & Guidelines */}
        <div className="lg:col-span-4 space-y-4">
          <div className={`p-5 rounded-2xl border transition-colors ${
            nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex items-center gap-2.5 text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>{language === 'es' ? 'Atención al Personal' : 'Langileentzako Arreta'}</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'es'
                ? 'Este canal está pensado para que cualquier celador/a o miembro del equipo de enfermería del Hospital Universitario de Navarra pueda reportar dudas o incidencias operativas con las mesas y accesorios de quirófano.'
                : 'Kanal hau pentsatuta dago Nafarroako Unibertsitate Ospitaleko edozein zeladorek edo erizaintzako kidek mahai eta osagarrien gaineko zalantzak jakinaraz ditzan.'}
            </p>
          </div>

          <div className={`p-5 rounded-2xl border transition-colors ${
            nightMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-blue-600" />
              <span>{language === 'es' ? 'Ámbito de Aplicación' : 'Aplikazio Eremua'}</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Quirófano Central II (Área General V)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Quirófano de Urgencias II (Q1 24h)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Mesas quirúrgicas Trumpf TruSystem 7500</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Normativa HUN de antequirófano y mueble interior</span>
              </li>
            </ul>
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
    </div>
  );
};
