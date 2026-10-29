import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Download, 
  Share, 
  PlusSquare, 
  CheckCircle2, 
  X, 
  Sparkles,
  ShieldCheck,
  Zap,
  Layers
} from 'lucide-react';
import { Language } from '../types/operatingRoom';

interface InstallAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  nightMode: boolean;
}

export const InstallAppModal: React.FC<InstallAppModalProps> = ({
  isOpen,
  onClose,
  language,
  nightMode
}) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    // Detect if already running standalone
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone;
    if (isStandalone) {
      setIsInstalled(true);
    }

    // Capture beforeinstallprompt for Android / Chromium
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
  };

  if (!isOpen) return null;

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-lg rounded-2xl overflow-hidden border shadow-2xl transition-colors ${
          nightMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shrink-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold leading-tight">
                {language === 'es' ? 'Instalar como App en el Móvil' : 'Mugikorrean Aplikazio Gisa Instalatu'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Hospital Universitario de Navarra · Área General V
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-4 sm:p-6 space-y-4">
          {/* Logo badge and intro */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900">
            <img 
              src="/assets/aistudio/Logotipo_hospitalario_con_quir_fanos_II_413ef642.png" 
              alt="HUN Logo" 
              className="h-10 w-auto object-contain bg-white rounded p-0.5 shadow-2xs"
            />
            <div className="text-xs">
              <span className="font-bold text-blue-900 dark:text-blue-300 block">
                {language === 'es' ? '¡Sí, es una Progressive Web App (PWA) instalable!' : 'Bai, Progressive Web App (PWA) instalagarria da!'}
              </span>
              <span className="text-blue-800/80 dark:text-blue-400/80 mt-0.5 block">
                {language === 'es' 
                  ? 'Se instala directamente sin pasar por Google Play o App Store, con icono propio en la pantalla de tu móvil.' 
                  : 'Zuzenean instalatzen da Google Play edo App Store-tik pasa gabe, zure mugikorreko pantailan ikonoarekin.'}
              </span>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 flex items-start gap-2">
              <Zap className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block">{language === 'es' ? 'Acceso 1 toque' : 'Klik bateko sarrera'}</span>
                <span className="text-[11px] text-slate-500">{language === 'es' ? 'En el quirófano' : 'Ebakigelan prest'}</span>
              </div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block">{language === 'es' ? 'Pantalla Completa' : 'Pantaila Osoa'}</span>
                <span className="text-[11px] text-slate-500">{language === 'es' ? 'Sin barras del navegador' : 'Nabigatzaile-barrarik gabe'}</span>
              </div>
            </div>
          </div>

          {/* Android / Chromium 1-Click Install Button if supported */}
          {deferredPrompt && !isInstalled && (
            <div className="space-y-2 pt-1">
              <button
                onClick={handleInstallClick}
                className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>{language === 'es' ? 'Instalar App Ahora en este Dispositivo' : 'Instalatu Aplikazioa Orain'}</span>
              </button>
            </div>
          )}

          {/* iOS Instructions */}
          {isIOS ? (
            <div className="space-y-2.5 p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                {language === 'es' ? 'Instrucciones para iPhone / iPad (Safari):' : 'iPhone / iPad (Safari) argibideak:'}
              </span>
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0">1</span>
                  <span>{language === 'es' ? 'Pulsa el botón Compartir' : 'Sakatu Partekatu botoia'} <strong>(icono con flecha hacia arriba <Share className="w-3.5 h-3.5 inline mx-0.5" />)</strong> en Safari.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0">2</span>
                  <span>{language === 'es' ? 'Desplaza hacia abajo y selecciona' : 'Jaitsi eta aukeratu'} <strong>"Añadir a la pantalla de inicio" <PlusSquare className="w-3.5 h-3.5 inline mx-0.5" /></strong>.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0">3</span>
                  <span>{language === 'es' ? 'Pulsa "Añadir" en la esquina superior derecha.' : 'Sakatu "Gehitu" goiko eskuineko izkinan.'}</span>
                </div>
              </div>
            </div>
          ) : !deferredPrompt && !isInstalled ? (
            <div className="space-y-2.5 p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                {language === 'es' ? 'Instalación en Android (Google Chrome):' : 'Instalazioa Android-en (Google Chrome):'}
              </span>
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0">1</span>
                  <span>{language === 'es' ? 'Abre el menú de Chrome' : 'Ireki Chrome menua'} <strong>(tres puntos verticales arriba a la derecha ⋮)</strong>.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0">2</span>
                  <span>{language === 'es' ? 'Selecciona' : 'Aukeratu'} <strong>"Instalar aplicación"</strong> o <strong>"Añadir a pantalla de inicio"</strong>.</span>
                </div>
              </div>
            </div>
          ) : null}

          {isInstalled && (
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-300 flex items-center gap-2 text-xs font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{language === 'es' ? '¡La aplicación ya está instalada en tu dispositivo!' : 'Aplikazioa instalatuta dago zure gailuan!'}</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
          >
            {language === 'es' ? 'Entendido' : 'Ulertuta'}
          </button>
        </div>
      </div>
    </div>
  );
};
