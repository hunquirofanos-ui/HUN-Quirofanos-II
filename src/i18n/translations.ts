import { Language } from '../types/operatingRoom';

export interface Translations {
  appTitle: string;
  hospitalName: string;
  pavilionName: string;
  navInicio: string;
  navFunciones: string;
  navTransfer: string;
  navQuirofanos: string;
  navQ1: string;
  navQ2: string;
  navQ3Q4: string;
  navQ5Q6: string;
  navQ7Q8: string;
  navVideos: string;
  navContactoCreditos: string;
  navOrlAparataje: string;
  navVideoteca: string;
  navContacto: string;
  navCreditos: string;
  authorCredit: string;
  navSearch: string;
  navPreEntry: string;
  navPositions: string;
  navUrologyDoc: string;
  navShifts: string;
  navMap: string;
  navProtocols: string;
  navPortfolio: string;
  nightModeOn: string;
  nightModeOff: string;
  officialProtocolBtn: string;
  langSwitchBtn: string;
  heroKicker: string;
  heroHeadline: string;
  heroSubheadline: string;
  philosophyTitle: string;
  philosophyBody: string;
  btnSearchCta: string;
  btnPreEntryCta: string;
  btnShiftsCta: string;
  searchPlaceholder: string;
  allSpecialties: string;
  allPositions: string;
  showingSurgeries: string;
  viewPositionAtlas: string;
  viewFullProtocol: string;
  addToPortfolio: string;
  addedToPortfolioToast: string;
  preparationTableSection: string;
  positionSection: string;
  accessoriesSection: string;
  nursingCoordinationSection: string;
  accessoriesDestinationTitle: string;
  ruleHunBAntequirofano: string;
  ruleHunBInterior: string;
  dentroTeamTitle: string;
  fueraTeamTitle: string;
  alwaysInsideBadge: string;
  vacationSimulatorLabel: string;
  vacationRuleNote: string;
  dayInBlock: string;
  weekendNotice: string;
  editPairsBtn: string;
  savePairsBtn: string;
  todayBtn: string;
  upcomingForecastTitle: string;
  floorplanTitle: string;
  floorplanSub: string;
  activeRoomsCount: string;
  urologyDocTitle: string;
  urologyDocSubtitle: string;
  viewOriginalPdf: string;
  figuresTitle: string;
  stepByStepProtocol: string;
  safetyChecksTitle: string;
  requiredAccessoriesTitle: string;
  tableAdjustmentTitle: string;
  celadorKeyStepsTitle: string;
  nursingTipsTitle: string;
  totalInterventions: string;
  dentroRatio: string;
  fueraRatio: string;
  registerInterventionBtn: string;
  newRecordTitle: string;
  closeBtn: string;
  cancelBtn: string;
  saveBtn: string;
  footerRights: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  es: {
    appTitle: "CELADORES HUN – QUIRÓFANO CENTRAL II & QUIRÓFANO DE URGENCIAS II",
    hospitalName: "Hospital Universitario de Navarra (HUN)",
    pavilionName: "Área General V · Quirófano Central II & Urgencias II",
    navInicio: "Inicio",
    navFunciones: "Funciones de los Celadores",
    navTransfer: "Transfer",
    navQuirofanos: "Quirófanos y Especialidades",
    navQ1: "Q1 – Urgencias (24 h.)",
    navQ2: "Q2 – Otorrinolaringología (ORL)",
    navQ3Q4: "Q3 y Q4 – Oftalmología",
    navQ5Q6: "Q5 y Q6 – Urología",
    navQ7Q8: "Q7 y Q8 – Traumatología",
    navVideos: "Vídeos",
    navContactoCreditos: "Contacto y Créditos",
    navOrlAparataje: "Aparataje Específico ORL",
    navVideoteca: "Vídeos",
    navContacto: "Contacto",
    navCreditos: "Créditos",
    authorCredit: "Diseño y desarrollo de la web: David Tabernero Garin",
    navSearch: "Buscador Quirúrgico",
    navPreEntry: "Mesa Pre-Entrada",
    navPositions: "Mesas & Posiciones",
    navUrologyDoc: "Guía Urología Área General V",
    navShifts: "Rueda de Turnos",
    navMap: "Plano Área General V",
    navProtocols: "Funciones HUN",
    navPortfolio: "Mi Portafolio",
    nightModeOn: "Luz Día",
    nightModeOff: "Modo Quirófano",
    officialProtocolBtn: "Protocolo Oficial",
    langSwitchBtn: "Euskara",
    heroKicker: "Hospital Universitario de Navarra · Área General V",
    heroHeadline: "Protocolos de Celadores para el Quirófano Central II & Quirófano de Urgencias II",
    heroSubheadline: "Guía técnica interactiva y portafolio profesional en estrecha colaboración con Enfermería de Quirófano y Anestesia. Preparación precisa de mesas quirúrgicas, posiciones anatómicas, accesorios según especialidad y protocolos oficiales de quirófano central.",
    philosophyTitle: "Equipo Único Dividido en Dos Grupos",
    philosophyBody: "Dentro de quirófano los celadores/as somos un único equipo dividido en dos (dentro y fuera). Si la carga de trabajo se descompensa o el compañero necesita ayuda, cualquiera puede y debe realizar las tareas necesarias para que el trabajo no se altere.",
    btnSearchCta: "Buscador por Cirugía & Especialidad",
    btnPreEntryCta: "Preparación Mesa Pre-Entrada",
    btnShiftsCta: "Consultar Rueda de Turnos",
    searchPlaceholder: "Buscar por cirugía, accesorio (perneras, topes, pilé), quirófano o técnica...",
    allSpecialties: "Todas las Especialidades",
    allPositions: "Todas las Posiciones",
    showingSurgeries: "intervenciones protocolizadas",
    viewPositionAtlas: "Ver atlas visual de posiciones",
    viewFullProtocol: "Ver protocolo completo",
    addToPortfolio: "Añadir a Mi Portafolio",
    addedToPortfolioToast: "añadida a tu portafolio profesional.",
    preparationTableSection: "1. Preparación de la Mesa Quirúrgica & Transfer",
    positionSection: "2. Posición Anatómica & Seguridad del Paciente",
    accessoriesSection: "3. Elementos y Accesorios a Preparar",
    nursingCoordinationSection: "4. Colaboración Celador - Enfermería (Anestesia e Instrumentista)",
    accessoriesDestinationTitle: "Protocolo HUN Oficial: Destino de Accesorios al Salir de Quirófano",
    ruleHunBAntequirofano: "Accesorios: Antequirófano (Q1, 2, 7 y 8)",
    ruleHunBInterior: "Accesorios: Mueble DENTRO de Q5-6",
    dentroTeamTitle: "Celadores/as 'DE DENTRO'",
    fueraTeamTitle: "Celadores/as 'DE FUERA'",
    alwaysInsideBadge: "Siempre Dentro",
    vacationSimulatorLabel: "Simular Vacaciones / Personal Impar",
    vacationRuleNote: "Regla HUN Área General V: Siempre una persona más dentro que fuera. Si están los 3 titulares fuera, pasa dentro el que esté en su primer día fuera.",
    dayInBlock: "Día en bloque",
    weekendNotice: "Fin de semana (no computa en la rueda de 3 días laborables)",
    editPairsBtn: "Editar Parejas",
    savePairsBtn: "Guardar Miembros",
    todayBtn: "Hoy",
    upcomingForecastTitle: "Previsión de los Próximos 5 Días Laborables",
    floorplanTitle: "Plano Esquemático del Bloque Quirúrgico General",
    floorplanSub: "8 Quirófanos distribuidos por especialidades, zona de transfer central, antequirófanos y almacenes.",
    activeRoomsCount: "8 Quirófanos Activos",
    urologyDocTitle: "Protocolo Oficial: Posiciones Quirúrgicas HUN Área General V - Urología",
    urologyDocSubtitle: "Integración íntegra del documento oficial de Quirófano Central HUN Área General V con figuras FIG. 1 a FIG. 20, pasos exactos, mandos de mesa Trumpf (Pilé/Flex), topes con hueveras y perneras Allen.",
    viewOriginalPdf: "Ver / Descargar PDF Oficial Original",
    figuresTitle: "Catálogo Fotográfico & Figuras Oficiales (FIG. 1 a FIG. 20)",
    stepByStepProtocol: "Metodología Asistencial Paso a Paso",
    safetyChecksTitle: "Chequeo de Seguridad Celador - Enfermería",
    requiredAccessoriesTitle: "Accesorios Requeridos",
    tableAdjustmentTitle: "Ajuste y Montaje Mecánico de la Mesa Quirúrgica",
    celadorKeyStepsTitle: "Pasos Clave del Celador/a de Dentro",
    nursingTipsTitle: "Puntos de Coordinación con Enfermería",
    totalInterventions: "Total Intervenciones",
    dentroRatio: "Rol 'DE DENTRO'",
    fueraRatio: "Rol 'DE FUERA'",
    registerInterventionBtn: "Registrar Intervención",
    newRecordTitle: "Nuevo Registro de Actividad Quirúrgica",
    closeBtn: "Cerrar",
    cancelBtn: "Cancelar",
    saveBtn: "Guardar",
    footerRights: "Protocolo de Celadores y Colaboración con Enfermería · 8 Quirófanos Área General V"
  },
  eu: {
    appTitle: "NUOko ZELADOREAK – ERDIKO II EBAKIGELA & LARRIALDIAK II",
    hospitalName: "Nafarroako Unibertsitate Ospitalea (NUO)",
    pavilionName: "V. Eremu Orokorra · Erdiko II Ebakigela & Larrialdiak II",
    navInicio: "Hasiera",
    navFunciones: "Zeladoreen Funtzioak",
    navTransfer: "Transferra",
    navQuirofanos: "Ebakigela eta Espezialitateak",
    navQ1: "Q1 – Larrialdiak (24 o.)",
    navQ2: "Q2 – Otorrinolaringologia (ORL)",
    navQ3Q4: "Q3 eta Q4 – Oftalmologia",
    navQ5Q6: "Q5 eta Q6 – Urologia",
    navQ7Q8: "Q7 eta Q8 – Traumatologia",
    navVideos: "Bideoak",
    navContactoCreditos: "Kontaktua eta Kredituak",
    navOrlAparataje: "ORLeko Tresneria Espezifikoa",
    navVideoteca: "Bideoak",
    navContacto: "Kontaktua",
    navCreditos: "Kredituak",
    authorCredit: "Diseño y desarrollo de la web: David Tabernero Garin",
    navSearch: "Ebakuntza Bilatzailea",
    navPreEntry: "Aurre-Sarrerako Mahaia",
    navPositions: "Mahaiak & Posizioak",
    navUrologyDoc: "NUO Urologia Gida",
    navShifts: "Txanda Gurpila",
    navMap: "V. Eremu Orokorreko Plana",
    navProtocols: "NUO Funtzioak",
    navPortfolio: "Nire Portafolioa",
    nightModeOn: "Eguneko Argia",
    nightModeOff: "Ebakigela Modua",
    officialProtocolBtn: "Protokolo Ofiziala",
    langSwitchBtn: "Castellano",
    heroKicker: "Nafarroako Unibertsitate Ospitalea · V. Eremu Orokorra",
    heroHeadline: "Zeladoreentzako Protokoloak Erdiko II Ebakigelan & Larrialdietako II Ebakigelan",
    heroSubheadline: "Gida tekniko interaktiboa eta portafolio profesionala Ebakigelako zein Anestesiako Erizaintzarekin elkarlanean. Mahai kirurgikoen prestaketa zehatza, posizio anatomikoak, espezialitatearen araberako osagarriak eta erdiko ebakigelako protokolo ofizialak.",
    philosophyTitle: "Talde Bakarra Bi Taldetan Banatua",
    philosophyBody: "Ebakigelan zeladoreak talde bakarra gara bitan banatuta (barruan eta kanpoan). Lan-karga desorekatzen bada edo lankideak laguntza behar badu, edonork egin ditzake eta egin behar ditu lanak, funtzionamendua alda ez dadin.",
    btnSearchCta: "Bilatu Ebakuntza & Espezialitatearen arabera",
    btnPreEntryCta: "Aurre-Sarrerako Mahaia Prestatu",
    btnShiftsCta: "Kontsultatu Txanda Gurpila",
    searchPlaceholder: "Bilatu ebakuntza, osagarri (hanka-euskarriak, tope artikulatuak, pilé), ebakigela edo teknikaren arabera...",
    allSpecialties: "Espezialitate Guztiak",
    allPositions: "Posizio Guztiak",
    showingSurgeries: "ebakuntza protokoloekin",
    viewPositionAtlas: "Ikusi posizioen atlas bisuala",
    viewFullProtocol: "Ikusi protokolo osoa",
    addToPortfolio: "Gehitu Nire Portafoliora",
    addedToPortfolioToast: "zure portafolio profesionalean gehitu da.",
    preparationTableSection: "1. Mahai Kirurgikoaren Prestaketa & Transferra",
    positionSection: "2. Posizio Anatomikoa & Pazientearen Segurtasuna",
    accessoriesSection: "3. Prestatu beharreko Osagaiak eta Osagarriak",
    nursingCoordinationSection: "4. Zeladore - Erizaintza Elkarlana (Anestesia eta Instrumentista)",
    accessoriesDestinationTitle: "NUO Protokolo Ofiziala: Osagarrien Kokapena Ebakigela Amaitzean",
    ruleHunBAntequirofano: "Osagarriak: Aurre-ebakigela (Q1, 2, 7 eta 8)",
    ruleHunBInterior: "Osagarriak: Q5-6ko BARRUKO Altzaria",
    dentroTeamTitle: "'BARRUKO' Zeladoreak",
    fueraTeamTitle: "'KANPOKO' Zeladoreak",
    alwaysInsideBadge: "Beti Barruan",
    vacationSimulatorLabel: "Oporrak / Bitarteko Bikoiti-gabeak Simulatu",
    vacationRuleNote: "NUO V. Eremu Orokorreko Araua: Beti pertsona bat gehiago barruan kanpoan baino. Kanpoan 3 titularrak badaude, kanpoko bere 1. egunean dagoena sartzen da barrura.",
    dayInBlock: "Blokeko eguna",
    weekendNotice: "Asteburua (ez du 3 laneguneko gurpilean kontatzen)",
    editPairsBtn: "Editatu Bikoteak",
    savePairsBtn: "Gorde Kideak",
    todayBtn: "Gaur",
    upcomingForecastTitle: "Hurrengo 5 Lanegunen Aurreikuspena",
    floorplanTitle: "Ebakuntza Bloke Orokorraren Plano Eskematikoa",
    floorplanSub: "8 Ebakigela espezialitateen arabera banatuta, erdiko transfer gunea, aurre-ebakigelak eta biltegiak.",
    activeRoomsCount: "8 Ebakigela Martxan",
    urologyDocTitle: "Protokolo Ofiziala: NUO V. Eremu Orokorreko Ebakuntza Posizioak - Urologia",
    urologyDocSubtitle: "NUO V. Eremu Orokorreko Erdiko Ebakigelako dokumentu ofizialaren integrazio osoa FIG. 1 - FIG. 20 irudiekin, urrats zehatzak, Trumpf mahaiko aginteak (Pilé/Flex), arrautzontzidun tope artikulatuak eta Allen hanka-euskarriak.",
    viewOriginalPdf: "Ikusi / Deskargatu Jatorrizko PDF Ofiziala",
    figuresTitle: "Argazki Katalogoa & Irudi Ofizialak (FIG. 1etik FIG. 20ra)",
    stepByStepProtocol: "Pausoz Pausoko Laguntza Metodologia",
    safetyChecksTitle: "Zeladore - Erizaintza Segurtasun Egiaztapena",
    requiredAccessoriesTitle: "Beharrezko Osagarriak",
    tableAdjustmentTitle: "Mahai Kirurgikoaren Doikuntza eta Muntaia Mekanikoa",
    celadorKeyStepsTitle: "Barruko Zeladorearen Urrats Giltzarriak",
    nursingTipsTitle: "Erizaintzarekin Koordinatzeko Puntuak",
    totalInterventions: "Ebakuntza Guztira",
    dentroRatio: "'BARRUKO' Rola",
    fueraRatio: "'KANPOKO' Rola",
    registerInterventionBtn: "Erregistratu Ebakuntza",
    newRecordTitle: "Jarduera Kirurgikoaren Erregistro Berria",
    closeBtn: "Itxi",
    cancelBtn: "Utzi",
    saveBtn: "Gorde",
    footerRights: "Zeladoreen Protokoloa eta Erizaintzarekin Elkarlana · 8 Ebakigela V. Eremu Orokorrean"
  }
};
