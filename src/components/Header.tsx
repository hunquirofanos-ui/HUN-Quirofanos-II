import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Moon, 
  Sun, 
  Languages, 
  Menu, 
  X, 
  Sliders, 
  Search, 
  FileText, 
  Layers, 
  Building2, 
  Briefcase,
  ChevronRight,
  ExternalLink,
  Video,
  Smartphone,
  Home,
  Mail,
  Award
} from 'lucide-react';
import { Language } from '../types/operatingRoom';
import { TRANSLATIONS } from '../i18n/translations';
import { InstallAppModal } from './InstallAppModal';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  nightMode: boolean;
  setNightMode: (val: boolean) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  nightMode,
  setNightMode,
  language,
  setLanguage
}) => {
  const t = TRANSLATIONS[language];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { 
      id: 'inicio', 
      label: t.navInicio, 
      sublabel: language === 'es' ? 'Portal de bienvenida y accesos rápidos' : 'Ongi etorri ataria eta sarbide azkarrak',
      icon: Home
    },
    { 
      id: 'funciones', 
      label: t.navFunciones, 
      sublabel: language === 'es' ? 'Celador de Dentro (13) y de Fuera (14)' : 'Barruko (13) eta Kanpoko (14) Zeladoreak',
      icon: ShieldCheck,
      badge: language === 'es' ? 'Dentro & Fuera' : 'Barruan & Kanpoan',
      highlight: true
    },
    { 
      id: 'quirofanos', 
      label: t.navQuirofanos, 
      sublabel: language === 'es' ? 'Q1 Urgencias, Q2 ORL, Q3-4 Oftalmo, Q5-6 Uro, Q7-8 Trauma' : 'Q1 Larrialdiak, Q2 ORL, Q3-4 Oftalmo, Q5-6 Uro, Q7-8 Trauma',
      icon: Building2,
      badge: 'Q1 – Q8',
      highlight: true
    },
    { 
      id: 'videoteca', 
      label: t.navVideoteca, 
      sublabel: language === 'es' ? '11 videotutoriales TruSystem (tracción, hombro, perneras)' : '11 TruSystem bideotutorial (trakzioa, sorbalda, hanka-eusk.)',
      icon: Video,
      badge: '11 vídeos'
    },
    { 
      id: 'contacto', 
      label: t.navContacto, 
      sublabel: language === 'es' ? 'Formulario directo a hunquirofanos@gmail.com' : 'Inprimaki zuzena kontsultetarako',
      icon: Mail
    },
    { 
      id: 'creditos', 
      label: t.navCreditos, 
      sublabel: 'David Tabernero Garin · HUN Área General V',
      icon: Award
    }
  ];

  const utilityItems = [
    {
      id: 'preparacion_mesa',
      label: t.navPreEntry,
      icon: Sliders,
      badge: 'HUN'
    },
    {
      id: 'buscador',
      label: t.navSearch,
      icon: Search
    },
    {
      id: 'urologia_doc',
      label: t.navUrologyDoc,
      icon: FileText
    },
    {
      id: 'turnos',
      label: language === 'es' ? 'Rueda Turnos' : 'Txandak',
      icon: Layers
    },
    {
      id: 'portafolio',
      label: t.navPortfolio,
      icon: Briefcase
    }
  ];

  const handleSelectTab = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'eu' : 'es');
  };

  return (
    <header className={`sticky top-0 z-40 border-b transition-colors duration-200 ${
      nightMode 
        ? 'bg-slate-900 border-slate-800 text-slate-100' 
        : 'bg-white border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 h-16">
          {/* Zone 1: Official HUN Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <button 
              onClick={() => handleSelectTab('inicio')}
              className="text-left group flex items-center gap-2.5 py-1 transition-opacity hover:opacity-90"
              title="Hospital Universitario de Navarra - Quirófano Central II & Quirófano de Urgencias II"
            >
              <img 
                src={`${import.meta.env.BASE_URL}assets/aistudio/Logotipo_hospitalario_con_quir_fanos_II_413ef642.png`} 
                alt="Hospital Universitario de Navarra - Quirófano Central II & Urgencias II" 
                className="h-10 sm:h-12 w-auto object-contain bg-white rounded-lg p-0.5 shadow-2xs border border-slate-200/80 dark:border-slate-700"
              />
              <span className="hidden 2xl:inline text-xs font-bold text-slate-700 dark:text-slate-300 tracking-tight">
                {t.pavilionName}
              </span>
            </button>
          </div>

          {/* Zone 2: Desktop Navigation Links (xl+) */}
          <nav className="hidden xl:flex items-center gap-4 2xl:gap-5 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectTab(item.id)}
                  className={`relative py-1.5 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                    isActive
                      ? nightMode ? 'text-blue-400 font-bold' : 'text-blue-700 font-bold'
                      : nightMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.highlight && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  )}
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions & Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* PWA Install Button */}
            <button
              onClick={() => setIsInstallModalOpen(true)}
              className="px-2 sm:px-2.5 py-1.5 rounded-lg border border-emerald-300 dark:border-emerald-800 bg-emerald-50/80 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900 text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs"
              title={language === 'es' ? 'Instalar como App en el móvil' : 'Instalatu aplikazio gisa mugikorrean'}
            >
              <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="hidden sm:inline">{language === 'es' ? 'Instalar App' : 'App Instalatu'}</span>
            </button>

            {/* Euskera / Castellano Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-2 sm:px-2.5 py-1.5 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50/80 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900 text-xs font-bold transition-all flex items-center gap-1 shadow-2xs"
              title={language === 'es' ? 'Weba euskaraz ikusi' : 'Ver la web en castellano'}
            >
              <Languages className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
              <span>{language === 'es' ? 'Euskara' : 'Castellano'}</span>
            </button>

            {/* Night mode toggle */}
            <button
              onClick={() => setNightMode(!nightMode)}
              className={`p-1.5 sm:p-2 rounded-lg border text-xs font-medium transition-colors flex items-center gap-1 ${
                nightMode
                  ? 'bg-slate-800 border-slate-700 text-amber-300 hover:bg-slate-700'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
              title={nightMode ? t.nightModeOn : t.nightModeOff}
              aria-label="Alternar modo noche"
            >
              {nightMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Protocol CTA button (desktop) */}
            <button
              onClick={() => handleSelectTab('protocolos')}
              className="hidden lg:flex px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-2xs whitespace-nowrap items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{t.officialProtocolBtn}</span>
            </button>

            {/* Mobile Dropdown Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`xl:hidden px-2.5 py-1.5 rounded-lg border text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs ${
                isMobileMenuOpen
                  ? 'bg-blue-600 text-white border-blue-600'
                  : nightMode
                    ? 'bg-slate-800 border-slate-700 text-slate-100 hover:bg-slate-700'
                    : 'bg-blue-50 border-blue-200 text-blue-900 hover:bg-blue-100'
              }`}
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú con todas las opciones'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
              <span>{language === 'es' ? 'Menú' : 'Menua'}</span>
            </button>
          </div>
        </div>

        {/* Quick horizontal strip on mobile for rapid swiping */}
        <div className="xl:hidden flex overflow-x-auto py-2 gap-1.5 border-t border-slate-200 dark:border-slate-800 no-scrollbar">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSelectTab(item.id)}
              className={`px-2.5 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-colors flex items-center gap-1 ${
                activeTab === item.id
                  ? 'bg-blue-600 text-white font-semibold shadow-2xs'
                  : nightMode ? 'text-slate-300 bg-slate-800/80' : 'text-slate-700 bg-slate-100'
              }`}
            >
              {item.highlight && <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Full Mobile Dropdown Menu with all options */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 top-16 bg-slate-950/60 backdrop-blur-xs z-40 xl:hidden animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Dropdown Content Panel */}
          <div className={`fixed inset-x-0 top-16 bottom-0 z-50 xl:hidden overflow-y-auto transition-all ${
            nightMode ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-900'
          }`}>
            <div className="p-4 sm:p-6 space-y-4 max-w-lg mx-auto">
              {/* Header inside dropdown */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    {language === 'es' ? 'Navegación Quirófano Central' : 'Erdiko Ebakigelaren Nabigazioa'}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {language === 'es' ? 'Hospital Universitario de Navarra · Área General V' : 'Nafarroako Unibertsitate Ospitalea · V. Eremu Orokorra'}
                  </p>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Complete Menu Items List */}
              <div className="space-y-2">
                {navItems.map((item) => {
                  const isActive = activeTab === item.id;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectTab(item.id)}
                      className={`w-full p-3.5 rounded-xl text-left border transition-all flex items-center justify-between gap-3 ${
                        isActive
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/60 text-blue-900 dark:text-blue-100 ring-1 ring-blue-500'
                          : nightMode
                            ? 'border-slate-800 bg-slate-950/60 text-slate-200 hover:bg-slate-800/80 hover:border-slate-700'
                            : 'border-slate-200 bg-slate-50/60 text-slate-800 hover:bg-slate-100/80 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                          isActive
                            ? 'bg-blue-600 text-white shadow-2xs'
                            : nightMode ? 'bg-slate-800 text-blue-400' : 'bg-blue-100 text-blue-700'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold tracking-tight truncate">
                              {item.label}
                            </span>
                            {item.badge && (
                              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/80 text-blue-800 dark:text-blue-200 shrink-0">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                            {item.sublabel}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                        isActive ? 'text-blue-600 translate-x-0.5' : 'text-slate-400'
                      }`} />
                    </button>
                  );
                })}
              </div>

              {/* Utility Tools Strip in Mobile Menu */}
              <div className="pt-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2 px-1">
                  {language === 'es' ? 'Herramientas Complementarias' : 'Tresna Osagarriak'}
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {utilityItems.map((u) => {
                    const UIcon = u.icon;
                    return (
                      <button
                        key={u.id}
                        onClick={() => handleSelectTab(u.id)}
                        className={`p-2.5 rounded-xl border text-left text-xs font-bold transition-all flex items-center gap-2 ${
                          activeTab === u.id
                            ? 'bg-blue-600 text-white border-blue-600'
                            : nightMode
                              ? 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <UIcon className="w-4 h-4 shrink-0 text-blue-500" />
                        <span className="truncate">{u.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quick Actions & Official Protocol CTA inside Dropdown */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
                {/* Install App button in mobile drawer */}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsInstallModalOpen(true);
                  }}
                  className="w-full py-2.5 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>{language === 'es' ? '📱 Instalar como App en este Móvil' : '📱 Mugikorrean Aplikazio Gisa Instalatu'}</span>
                </button>

                <button
                  onClick={() => handleSelectTab('protocolos')}
                  className="w-full py-2.5 px-4 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>{t.officialProtocolBtn}</span>
                </button>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={toggleLanguage}
                    className="py-2 px-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 flex items-center justify-center gap-1.5"
                  >
                    <Languages className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>{language === 'es' ? 'Ver en Euskara' : 'Gaztelaniaz Ikusi'}</span>
                  </button>

                  <button
                    onClick={() => setNightMode(!nightMode)}
                    className="py-2 px-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 flex items-center justify-center gap-1.5"
                  >
                    {nightMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-600" />}
                    <span>{nightMode ? t.nightModeOn : t.nightModeOff}</span>
                  </button>
                </div>
              </div>

              <div className="text-center pt-2 pb-6">
                <span className="text-[11px] text-slate-400 dark:text-slate-500">
                  {t.hospitalName} · {t.pavilionName}
                </span>
              </div>
            </div>
          </div>
        </>
      )}

      {/* PWA Install App Modal */}
      <InstallAppModal
        isOpen={isInstallModalOpen}
        onClose={() => setIsInstallModalOpen(false)}
        language={language}
        nightMode={nightMode}
      />
    </header>
  );
};
