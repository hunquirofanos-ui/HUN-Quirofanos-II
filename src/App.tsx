/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomeWelcomeView } from './components/HomeWelcomeView';
import { CeladorFunctionsSection } from './components/CeladorFunctionsSection';
import { TransferSection } from './components/TransferSection';
import { OperatingRoomsSpecialtiesHub } from './components/OperatingRoomsSpecialtiesHub';
import { VideoTutorialsViewer } from './components/VideoTutorialsViewer';
import { ContactCreditsSection } from './components/ContactCreditsSection';
import { ContactSection } from './components/ContactSection';
import { CreditsSection } from './components/CreditsSection';
import { HeroSection } from './components/HeroSection';
import { SurgerySearch } from './components/SurgerySearch';
import { PositionInteractiveViewer } from './components/PositionInteractiveViewer';
import { UrologyDocumentViewer } from './components/UrologyDocumentViewer';
import { TablePreEntryPreparation } from './components/TablePreEntryPreparation';
import { ShiftCalculator } from './components/ShiftCalculator';
import { OperatingRoomsMap } from './components/OperatingRoomsMap';
import { OfficialProtocolsViewer } from './components/OfficialProtocolsViewer';
import { ProfessionalPortfolio } from './components/ProfessionalPortfolio';
import { PortfolioRecord, SurgeryProtocol, Language } from './types/operatingRoom';
import { TRANSLATIONS } from './i18n/translations';

const INITIAL_RECORDS: PortfolioRecord[] = [
  {
    id: 'rec-uro-1',
    date: '2026-10-28',
    specialty: 'urologia',
    surgeryName: 'Nefrectomía Radical Laparoscópica con Pilé (Protocolo HUN B)',
    operatingRoom: 'Quirófano 5',
    role: 'dentro',
    patientTransferDone: true,
    tableConverted: true,
    nursingCollaborator: 'Enf. Anestesia Lucía Ezquerro',
    notes: 'Paso en supino. Ombligo alineado en el círculo de la mesa (FIG. 2 y 3). Volteo con lado a operar arriba y tripa al borde. Chocolatina entre piernas (FIG. 5). Pilé con botón Flex de SensorLine (FIG. 7). Topes articulados en escápulas y lumbares con hueveras protectoras (FIG. 8). Brazo en teja acolchada (FIG. 11) y cincha de seguridad (FIG. 10). Accesorios depositados en el mueble INTERNO de Q5.',
    verified: true
  },
  {
    id: 'rec-uro-2',
    date: '2026-10-27',
    specialty: 'urologia',
    surgeryName: 'RTU Vesical en Litotomía con Perneras Allen (Protocolo HUN B)',
    operatingRoom: 'Quirófano 5',
    role: 'dentro',
    patientTransferDone: true,
    tableConverted: true,
    nursingCollaborator: 'Enf. Quirófano Carlos Barricart',
    notes: 'Nalgas en borde pélvico tras visto bueno anestésico. Medias de tubitón colocadas. Perneras Allen ancladas con pieza negra y rosca en los dos círculos (FIG. 13 y 15). Subida simultánea de piernas comprobando muslos relajados en cara interna (FIG. 16 y 17). Al finalizar, colocación de tramo de pies antes de bajar piernas. Accesorios en mueble interior.',
    verified: true
  },
  {
    id: 'rec-1',
    date: '2026-10-25',
    specialty: 'traumatologia',
    surgeryName: 'Artroscopia de Hombro Derecho (Silla de Playa)',
    operatingRoom: 'Quirófano 7',
    role: 'dentro',
    patientTransferDone: true,
    tableConverted: true,
    nursingCollaborator: 'Enf. Anestesia M. Carmen',
    notes: 'Montaje del respaldo de silla de playa y cabecero trilobular. Asistencia en el bloqueo interescalénico. Retirada del panel escapular derecho. Al finalizar, descenso suave a horizontal y traslado a antequirófano tras desinfección.',
    verified: true
  },
  {
    id: 'rec-3',
    date: '2026-10-23',
    specialty: 'urgencias',
    surgeryName: 'Laparotomía Exploradora Urgente / Hemoperitoneo',
    operatingRoom: 'Quirófano 1',
    role: 'fuera',
    patientTransferDone: true,
    tableConverted: false,
    nursingCollaborator: 'Enf. Urgencias Área General V',
    notes: 'Recepción del paciente con check list completo y pegatinas. Retirada de cabecero y potencia en cama. Traslado urgente al transfer. Acudido de emergencia a Hemoterapia a por 2 concentrados de hematíes con conservadora homologada.',
    verified: true
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('inicio');
  const [selectedRoomParam, setSelectedRoomParam] = useState<string | null>(null);

  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('hun_language') as Language) || 'es';
  });

  const [nightMode, setNightMode] = useState<boolean>(() => {
    return localStorage.getItem('hun_night_mode') === 'true';
  });

  const [portfolioRecords, setPortfolioRecords] = useState<PortfolioRecord[]>(() => {
    const saved = localStorage.getItem('hun_portfolio_records');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_RECORDS;
      }
    }
    return INITIAL_RECORDS;
  });

  useEffect(() => {
    localStorage.setItem('hun_language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('hun_night_mode', nightMode ? 'true' : 'false');
    if (nightMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [nightMode]);

  useEffect(() => {
    localStorage.setItem('hun_portfolio_records', JSON.stringify(portfolioRecords));
  }, [portfolioRecords]);

  const handleAddPortfolioRecord = (newRecord: PortfolioRecord) => {
    setPortfolioRecords(prev => [newRecord, ...prev]);
  };

  const handleDeletePortfolioRecord = (id: string) => {
    setPortfolioRecords(prev => prev.filter(r => r.id !== id));
  };

  const handleAddFromSurgery = (surgery: SurgeryProtocol) => {
    const todayStr = new Date().toISOString().split('T')[0];
    const newRecord: PortfolioRecord = {
      id: `rec-${Date.now()}`,
      date: todayStr,
      specialty: surgery.specialtyId,
      surgeryName: language === 'es' ? surgery.name : (surgery.nameEu || surgery.name),
      operatingRoom: surgery.operatingRoom,
      role: 'dentro',
      patientTransferDone: true,
      tableConverted: true,
      nursingCollaborator: language === 'es' ? 'Enfermería Bloque Quirúrgico HUN B' : 'NUO B Ebakuntza Blokeko Erizaintza',
      notes: language === 'es' 
        ? `Protocolo: ${surgery.position.name}. Mesa: ${surgery.tableSetup.configuration}. Accesorios verificados y guardados según norma.`
        : `Protokoloa: ${surgery.position.nameEu || surgery.position.name}. Mahaia: ${surgery.tableSetup.configuration}. Osagarriak arauaren arabera kokatuta.`,
      verified: true
    };
    handleAddPortfolioRecord(newRecord);
  };

  const handleNavigateFromHome = (tab: string, subParam?: string) => {
    if (subParam) {
      setSelectedRoomParam(subParam);
    } else {
      setSelectedRoomParam(null);
    }
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const t = TRANSLATIONS[language];

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-200 ${
      nightMode ? 'bg-slate-950 text-slate-100 dark' : 'bg-slate-50/60 text-slate-900'
    }`}>
      {/* Top Header with Language switcher */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setSelectedRoomParam(null);
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        nightMode={nightMode}
        setNightMode={setNightMode}
        language={language}
        setLanguage={setLanguage}
      />

      {/* Main Viewport Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-8" id="main-content-section">
          {/* =================================================================== */}
          {/* 1. INICIO (PORTAL DE BIENVENIDA) */}
          {/* =================================================================== */}
          {activeTab === 'inicio' && (
            <HomeWelcomeView
              onNavigate={handleNavigateFromHome}
              nightMode={nightMode}
              language={language}
            />
          )}

          {/* =================================================================== */}
          {/* 2. FUNCIONES DE LOS CELADORES (DENTRO & FUERA) */}
          {/* =================================================================== */}
          {activeTab === 'funciones' && (
            <CeladorFunctionsSection
              nightMode={nightMode}
              language={language}
              onNavigateToPreEntry={() => handleNavigateFromHome('transfer')}
              onNavigateToQuirofanos={() => handleNavigateFromHome('quirofanos')}
            />
          )}

          {/* =================================================================== */}
          {/* 3. TRANSFER (PREPARACIÓN DE LA MESA ANTES DE ENTRAR Y PASAR AL PACIENTE) */}
          {/* =================================================================== */}
          {(activeTab === 'transfer' || activeTab === 'preparacion_mesa') && (
            <TransferSection
              nightMode={nightMode}
              language={language}
              onNavigateToSurgerySearch={(query) => {
                handleNavigateFromHome('buscador');
              }}
              onNavigateToVideos={(videoId) => {
                handleNavigateFromHome('videos');
              }}
            />
          )}

          {/* =================================================================== */}
          {/* 4. Q1 – URGENCIAS (24 H.) */}
          {/* =================================================================== */}
          {activeTab === 'q1' && (
            <OperatingRoomsSpecialtiesHub
              nightMode={nightMode}
              language={language}
              initialRoomId="Q1"
              onNavigateToUrologyDoc={() => handleNavigateFromHome('urologia_doc')}
              onNavigateToPreEntry={() => handleNavigateFromHome('transfer')}
              onNavigateToVideo={(vId) => handleNavigateFromHome('videos')}
              onAddToPortfolio={handleAddFromSurgery}
            />
          )}

          {/* =================================================================== */}
          {/* 5. Q2 – OTORRINOLARINGOLOGÍA (ORL) Y APARATAJE ESPECÍFICO */}
          {/* =================================================================== */}
          {(activeTab === 'q2' || activeTab === 'orl_aparataje') && (
            <OperatingRoomsSpecialtiesHub
              nightMode={nightMode}
              language={language}
              initialRoomId={activeTab === 'orl_aparataje' ? 'orl_aparataje' : 'Q2'}
              onNavigateToUrologyDoc={() => handleNavigateFromHome('urologia_doc')}
              onNavigateToPreEntry={() => handleNavigateFromHome('transfer')}
              onNavigateToVideo={(vId) => handleNavigateFromHome('videos')}
              onAddToPortfolio={handleAddFromSurgery}
            />
          )}

          {/* =================================================================== */}
          {/* 6. Q3 Y Q4 – OFTALMOLOGÍA */}
          {/* =================================================================== */}
          {activeTab === 'q3_q4' && (
            <OperatingRoomsSpecialtiesHub
              nightMode={nightMode}
              language={language}
              initialRoomId="Q3-Q4"
              onNavigateToUrologyDoc={() => handleNavigateFromHome('urologia_doc')}
              onNavigateToPreEntry={() => handleNavigateFromHome('transfer')}
              onNavigateToVideo={(vId) => handleNavigateFromHome('videos')}
              onAddToPortfolio={handleAddFromSurgery}
            />
          )}

          {/* =================================================================== */}
          {/* 7. Q5 Y Q6 – UROLOGÍA */}
          {/* =================================================================== */}
          {activeTab === 'q5_q6' && (
            <OperatingRoomsSpecialtiesHub
              nightMode={nightMode}
              language={language}
              initialRoomId="Q5-Q6"
              onNavigateToUrologyDoc={() => handleNavigateFromHome('urologia_doc')}
              onNavigateToPreEntry={() => handleNavigateFromHome('transfer')}
              onNavigateToVideo={(vId) => handleNavigateFromHome('videos')}
              onAddToPortfolio={handleAddFromSurgery}
            />
          )}

          {/* =================================================================== */}
          {/* 8. Q7 Y Q8 – TRAUMATOLOGÍA */}
          {/* =================================================================== */}
          {activeTab === 'q7_q8' && (
            <OperatingRoomsSpecialtiesHub
              nightMode={nightMode}
              language={language}
              initialRoomId="Q7-Q8"
              onNavigateToUrologyDoc={() => handleNavigateFromHome('urologia_doc')}
              onNavigateToPreEntry={() => handleNavigateFromHome('transfer')}
              onNavigateToVideo={(vId) => handleNavigateFromHome('videos')}
              onAddToPortfolio={handleAddFromSurgery}
            />
          )}

          {/* HUB COMPLETO DE QUIRÓFANOS (Acceso genérico o por parámetro) */}
          {activeTab === 'quirofanos' && (
            <OperatingRoomsSpecialtiesHub
              nightMode={nightMode}
              language={language}
              initialRoomId={selectedRoomParam}
              onNavigateToUrologyDoc={() => handleNavigateFromHome('urologia_doc')}
              onNavigateToPreEntry={() => handleNavigateFromHome('transfer')}
              onNavigateToVideo={(vId) => handleNavigateFromHome('videos')}
              onAddToPortfolio={handleAddFromSurgery}
            />
          )}

          {/* =================================================================== */}
          {/* 9. VÍDEOS (VIDEOTECA INDEPENDIENTE CON LOS 11 VÍDEOS OFICIALES) */}
          {/* =================================================================== */}
          {(activeTab === 'videos' || activeTab === 'videoteca' || activeTab === 'videotutoriales') && (
            <VideoTutorialsViewer
              nightMode={nightMode}
              language={language}
              onNavigateToPreEntry={() => handleNavigateFromHome('transfer')}
              onNavigateToUrology={() => handleNavigateFromHome('urologia_doc')}
              onNavigateToPositions={() => handleNavigateFromHome('posiciones')}
            />
          )}

          {/* =================================================================== */}
          {/* 10. CONTACTO Y CRÉDITOS (APARTADO UNIFICADO) */}
          {/* =================================================================== */}
          {(activeTab === 'contacto_creditos' || activeTab === 'contacto' || activeTab === 'creditos') && (
            <ContactCreditsSection
              nightMode={nightMode}
              language={language}
            />
          )}

          {/* =================================================================== */}
          {/* HERRAMIENTAS COMPLEMENTARIAS CONSERVADAS ÍNTEGRAMENTE */}
          {/* =================================================================== */}

          {activeTab === 'buscador' && (
            <SurgerySearch
              nightMode={nightMode}
              language={language}
              onAddToPortfolio={handleAddFromSurgery}
              onNavigateToPositions={() => setActiveTab('posiciones')}
              onNavigateToUrologyDoc={() => setActiveTab('urologia_doc')}
            />
          )}

          {activeTab === 'urologia_doc' && (
            <UrologyDocumentViewer
              nightMode={nightMode}
              language={language}
              onNavigateToSearchWithFilter={(filter) => {
                setActiveTab('buscador');
              }}
            />
          )}

          {activeTab === 'posiciones' && (
            <PositionInteractiveViewer 
              nightMode={nightMode}
              language={language}
            />
          )}

          {activeTab === 'turnos' && (
            <ShiftCalculator 
              nightMode={nightMode}
              language={language}
              onNavigateToProtocols={() => setActiveTab('funciones')}
            />
          )}

          {activeTab === 'bloque' && (
            <OperatingRoomsMap 
              nightMode={nightMode} 
              language={language}
              onSelectSpecialty={(specId) => {
                setActiveTab('quirofanos');
              }}
            />
          )}

          {activeTab === 'protocolos' && (
            <OfficialProtocolsViewer 
              nightMode={nightMode}
              language={language}
            />
          )}

          {activeTab === 'portafolio' && (
            <ProfessionalPortfolio
              records={portfolioRecords}
              onAddRecord={handleAddPortfolioRecord}
              onDeleteRecord={handleDeletePortfolioRecord}
              nightMode={nightMode}
              language={language}
              onNavigateToSearch={() => setActiveTab('buscador')}
            />
          )}
        </div>
      </main>

      {/* Footer with Discreet but Visible Attribution */}
      <footer className={`border-t py-6 text-xs transition-colors ${
        nightMode ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-white border-slate-200 text-slate-600'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-slate-800 dark:text-slate-200">
              {t.hospitalName}
            </span>
            <span>·</span>
            <span>{t.pavilionName}</span>
          </div>

          <div className="flex items-center gap-2 font-medium text-slate-600 dark:text-slate-300">
            <span>Diseño y desarrollo de la web: <strong className="text-slate-900 dark:text-white font-bold">David Tabernero Garin</strong></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
