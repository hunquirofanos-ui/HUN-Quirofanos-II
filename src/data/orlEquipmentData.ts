export interface OrlEquipmentItem {
  id: string;
  itemNumber: number;
  name: string;
  nameEu?: string;
  originalPhoto: string;
  secondaryPhoto?: string;
  secondaryPhotoCaption?: string;
  secondaryPhotoCaptionEu?: string;
  badge: string;
  location: string;
  transferM4: 'Sí' | 'No' | '-';
  isPending?: boolean;
  mainFunction: string;
  mainFunctionEu?: string;
  orlApplications: string[];
  orlApplicationsEu?: string[];
  celadorDuties: string[];
  celadorDutiesEu?: string[];
  precautionsAndWarnings: string[];
  precautionsAndWarningsEu?: string[];
}

export interface OrlSummaryTableRow {
  id: string;
  equipmentName: string;
  functionDesc: string;
  transferAndFoldingProtocol: string;
  handlingPrecautions: string;
  associatedAccessories: string;
  transferM4: 'Sí' | 'No' | '-';
}

export interface OrlPositionGuide {
  id: string;
  title: string;
  titleEu?: string;
  subtitle?: string;
  points: string[];
  criticalAlert?: string;
}

export const ORL_PANORAMIC_PHOTO = 'assets/aistudio/ee926c55b711c8b2b1fd7f640aff27bd7789544b76f87c5f9b257fedd74a2574_4267f004.png';
export const ORL_GUIDE_PDF = 'assets/aistudio/Guia_aparataje_ORL_HUN_estructurada_con_traslado_maternal_3_70910c20.pdf';

export const ORL_DOC_META = {
  titleEs: 'Guía Resumida de Aparataje y Protocolos de ORL',
  titleEu: 'ORLeko Tresneriaren eta Protokoloen Gida Laburtua',
  versionEs: 'Versión reorganizada · 5 de noviembre de 2026',
  versionEu: 'Bertsio berrantolatua · 2026ko azaroaren 5a',
  objectiveEs:
    'Documento práctico de identificación y apoyo logístico del aparataje utilizado en el entorno de Otorrinolaringología (ORL). Describe las tareas del celador relacionadas con el traslado, ubicación, disposición espacial y comprobación externa de los equipos. No sustituye las instrucciones de uso del fabricante ni las indicaciones de Enfermería, Anestesia o Electromedicina.',
  objectiveEu:
    'Otorrinolaringologia (ORL) ingurunean erabiltzen den tresneria identifikatzeko eta laguntza logistikoa emateko dokumentu praktikoa. Zeladorearen zereginak deskribatzen ditu: lekualdatzea, kokapena, espazio-antolaketa eta kanpo-egiaztapena. Ez ditu fabrikatzailearen jarraibideak edo Erizaintza, Anestesia zein Elektromedizinako aginduak ordezkatzen.',
  schedulingTitleEs: '1. Organización y Preparación según la Programación Quirúrgica',
  schedulingTitleEu: '1. Antolaketa eta Prestaketa Programazio Kirurgikoaren Arabera',
  schedulingIntroEs:
    'La programación quirúrgica debe estar disponible para celadores y TCAEs con antelación. Su revisión permite anticipar el tipo de intervención, preparar el quirófano y determinar qué equipos, sillones y accesorios será necesario disponer o trasladar. Las indicaciones concretas se confirmarán con Enfermería de ORL cuando haya cambios o excepciones.',
  schedulingIntroEu:
    'Programazio kirurgikoa aldez aurretik eskuragarri egon behar da zeladore eta EOTentzat, ebakuntza mota aurreikusteko eta behar diren ekipoak, besaulkiak eta osagarriak prestatzeko.',
  schedulingPointsEs: [
    'La programación quirúrgica debe facilitarse con antelación a celadores y TCAEs para organizar la preparación del quirófano y del material específico.',
    'Antes de cada jornada, revisar el cirujano y la intervención previstos, el tipo de sillón, los accesorios de mesa necesarios y el tipo de láser indicado.'
  ],
  schedulingPointsEu: [
    'Programazio kirurgikoa aldez aurretik eman behar zaie zeladore eta EOTei ebakigela eta material espezifikoa antolatzeko.',
    'Jardunaldi bakoitzaren aurretik, aurreikusitako zirujaua eta ebakuntza, besaulki mota, mahaiko osagarriak eta adierazitako laser mota berrikusi.'
  ]
};

export const ORL_EQUIPMENT_LIST: OrlEquipmentItem[] = [
  {
    id: 'zeiss-microscope',
    itemNumber: 1,
    name: 'Microscopio Quirúrgico ZEISS',
    nameEu: 'ZEISS Mikroskopio Kirurgikoa',
    originalPhoto: 'assets/q2_orl_actualizada/obj_25.jpg',
    badge: 'Microcirugía Otológica & Laringe',
    location: 'Quirófano 2 (ORL BQG 2)',
    transferM4: 'Sí',
    mainFunction:
      'Equipo óptico montado sobre soporte móvil, utilizado para proporcionar magnificación e iluminación del campo quirúrgico en procedimientos que requieren visión ampliada.',
    mainFunctionEu:
      'Euskarri mugikor baten gaineko ekipo optikoa, handipen optikoa eta argiztapena emateko ikuspen handitua behar duten prozeduretan.',
    orlApplications: [
      'Microcirugía otológica: timpanoplastias, mastoidectomías, estapedectomías y osiculoplastias.',
      'Microcirugía laríngea con laringoscopio de suspensión (cuerdas vocales, pólipos, nódulos).',
      'Cirugía del nervio facial e implantes cocleares.'
    ],
    orlApplicationsEu: [
      'Belarriko mikrokirurgia: timpanoplastiak, mastoidektomiak, estapedektomiak.',
      'Laringeko mikrokirurgia esekiduran (ahots-kordak, polipoak).',
      'Aurpegiko nerbioaren kirurgia eta inplante koklearrak.'
    ],
    celadorDuties: [
      '1. Traslado siempre entre DOS PERSONAS. Coordinar los movimientos antes de iniciar el desplazamiento.',
      '2. Antes de atravesar puertas, el brazo superior debe quedar completamente plegado en la posición de transporte para reducir la altura y evitar golpes.',
      '3. Para realizar el plegado, el equipo debe estar conectado a la corriente y la maniobra se realiza mediante el panel de control del microscopio.',
      '4. Una vez plegado, comprobar visualmente que el brazo queda recogido y estable; recoger los cables para evitar enganches.',
      '5. Durante el traslado, avanzar despacio, vigilar el paso por puertas y esquinas y evitar golpes, tirones o movimientos bruscos.',
      '6. Bloquear frenos al emplazarlo en el lateral indicado en quirófano y colocar funda protectora al finalizar.'
    ],
    celadorDutiesEu: [
      '1. Garraioa beti BI PERTSONEN ARTEAN. Mugimenduak koordinatu abiatu aurretik.',
      '2. Ateak zeharkatu aurretik, goiko besoak erabat tolestuta egon behar du garraio-posizioan.',
      '3. Tolesteko, ekipoak korrontera konektatuta egon behar du eta mikroskopioaren aginte-panelaren bidez egiten da.',
      '4. Behin tolestuta, besoa jasota eta egonkor dagoela egiaztatu eta kableak bildu.',
      '5. Garraioan astiro joan, ateak eta kantoiak zaindu, kolpeak eta tirakadak saihestuz.',
      '6. Ebakigelan adierazitako alboan kokatzean balaztak blokeatu.'
    ],
    precautionsAndWarnings: [
      'No forzar manualmente articulaciones ni accionar controles cuya función no se conozca.',
      'Si el panel no responde o el brazo no se pliega, detener la maniobra y avisar a Enfermería / Electromedicina.',
      'No tocar bajo ningún concepto las lentes ópticas.'
    ],
    precautionsAndWarningsEu: [
      'Ez behartu eskuz artikulazioak eta ez erabili ezagutzen ez diren aginteak.',
      'Panelak erantzuten ez badu edo besoa tolesten ez bada, gelditu eta abisatu Erizaintza / Elektromedizinari.',
      'Inoiz ez ukitu leiar optikoak.'
    ]
  },
  {
    id: 'karl-storz-tower',
    itemNumber: 2,
    name: 'Torre de Vídeo-Endoscopia KARL STORZ',
    nameEu: 'KARL STORZ Bideo-Endoskopia Dorrea',
    originalPhoto: 'assets/q2_orl_actualizada/obj_28.jpg',
    secondaryPhoto: 'assets/q2_orl_actualizada/obj_33.jpg',
    secondaryPhotoCaption:
      'Peso metálico / pieza metálica de apoyo en la zona superior de la torre KARL STORZ. Hace de contrapeso cuando se despliega el brazo articulado que sujeta el abrebocas.',
    secondaryPhotoCaptionEu:
      'KARL STORZ dorrearen goialdean dagoen pisu metalikoa / laguntza-pieza: aho-irekigailua eusten duen beso artikulatua zabaltzean kontrapisu gisa erabiltzen da.',
    badge: 'CENS & Rinología Endoscópica',
    location: 'Quirófano 2 (ORL · Zona Podal)',
    transferM4: 'Sí',
    mainFunction:
      'Carro con monitor y módulos de vídeo-endoscopia para visualización de imágenes durante exploraciones y procedimientos de ORL. Incluye en su zona superior una pieza metálica / bandeja de apoyo (contrapeso del brazo articulado del abrebocas).',
    mainFunctionEu:
      'ORLko miaketa eta prozeduretan irudiak ikusteko monitorea eta bideo-endoskopia moduluak dituen orga. Goialdean laguntza-pieza metalikoa darama.',
    orlApplications: [
      'Cirugía Endoscópica Nasosinusal (CENS): sinusitis crónica, poliposis nasosinusal.',
      'Dacricistorrinostomías endoscópicas y abordajes de base de cráneo.',
      'Procedimientos de laringe/faringe que requieren brazo articulado de abrebocas con contrapeso.'
    ],
    orlApplicationsEu: [
      'Sudur-sinusetako kirurgia endoskopikoa (CENS): sinusitisa, poliposia.',
      'Dakriozistorrinostomia endoskopikoak eta garezurreko oinarria.',
      'Aho-irekigailuaren beso artikulatua behar duten prozedurak.'
    ],
    celadorDuties: [
      'Trasladar con cuidado, comprobando que todos los elementos (incluida la pieza metálica superior) estén colocados de forma estable.',
      'Posicionar la torre de endoscopia en la zona podal (pies del paciente) o contralateral al cirujano según indicación.',
      'Evitar tirones, atrapamientos o tensiones en cables, fibra óptica y conexiones.',
      'Devolver el conjunto a su ubicación habitual manteniendo el peso/pieza metálica siempre asociado al conjunto de la torre de ORL.'
    ],
    celadorDutiesEu: [
      'Kontuz eraman, elementu guztiak (goiko pieza metalikoa barne) egonkor daudela egiaztatuz.',
      'Endoskopia-dorrea zona podalean (oinetan) edo zirujauaren aurkako aldean kokatu.',
      'Kableetan eta zuntz optikoan tirakadak eta harrapaketak saihestu.',
      'Ohiko tokira itzultzean, pieza metalikoa beti dorreari lotuta mantendu.'
    ],
    precautionsAndWarnings: [
      'No desconectar, reconectar ni modificar configuraciones técnicas por iniciativa propia.',
      'No modificar el montaje ni utilizar la pieza metálica/bandeja superior de forma distinta a la indicada por el personal responsable.',
      'No colocar la pieza metálica directamente sobre el paciente (se coloca encima de una mesa metálica situada sobre el pecho).'
    ],
    precautionsAndWarningsEu: [
      'Ez deskonektatu, birkonektatu edo konfigurazio teknikoak aldatu zure kabuz.',
      'Ez erabili goiko pieza metalikoa adierazitakoaz bestelako moduan.',
      'Ez jarri pieza metalikoa zuzenean pazientearen gainean.'
    ]
  },
  {
    id: 'medtronic-ipc',
    itemNumber: 3,
    name: 'Consola MEDTRONIC IPC',
    nameEu: 'MEDTRONIC IPC Kontsola',
    originalPhoto: 'assets/q2_orl_actualizada/obj_29.jpg',
    badge: 'Instrumental Motorizado · NO a M4',
    location: 'Quirófano 2 (Soporte vertical rodable)',
    transferM4: 'No',
    mainFunction:
      'Consola de control para instrumental motorizado compatible (fresas de alta velocidad y microdebrider). Puede emplearse con distintos accesorios según la configuración clínica.',
    mainFunctionEu:
      'Tresneria motordun bateragarrirako kontrol-kontsola. Konfigurazio klinikoaren arabera hainbat osagarrirekin erabil daiteke.',
    orlApplications: [
      'Mastoidectomía con fresado óseo en cirugía otológica.',
      'Microdebrider en Cirugía Endoscópica Nasosinusal (CENS).',
      'Nota Quirófano Maternal (M4): NO se traslada al M4 porque ya disponen de otra consola allí.'
    ],
    orlApplicationsEu: [
      'Mastoidektomia hezur-fresaketarekin belarri-kirurgian.',
      'Mikrodebriderra CENS kirurgian.',
      'Maternal Ebakigela (M4) oharra: EZ da M4ra eramaten bertan beste bat baitago.'
    ],
    celadorDuties: [
      'Antes de solicitar un traslado, consultar la programación quirúrgica y confirmar con Enfermería si existe alguna excepción que requiera otra consola.',
      'Trasladar sujetando con firmeza el mástil vertical rodable a velocidad controlada.',
      'Acercar y situar el pedal de control conforme a la indicación del equipo quirúrgico.',
      'Recordar en traslados a Maternal (M4): esta consola NO se traslada al disponer de otra en M4.'
    ],
    celadorDutiesEu: [
      'Lekualdaketa eskatu aurretik, programazio kirurgikoa kontsultatu eta Erizaintzarekin baieztatu beste kontsola bat behar den.',
      'Zutoina tinko helduta eraman abiadura kontrolatuan.',
      'Maternalera (M4) egindako lekualdaketetan gogoratu: kontsola hau EZ da eramaten M4an beste bat dagoelako.'
    ],
    precautionsAndWarnings: [
      'No manipular parámetros, conexiones clínicas ni configuraciones.',
      'Comunicar cualquier anomalía al personal responsable.',
      'Centro de gravedad elevado en el pie rodable: evitar movimientos bruscos.'
    ],
    precautionsAndWarningsEu: [
      'Ez manipulatu parametroak, konexio klinikoak edo konfigurazioak.',
      'Edozein anomalia arduradunari jakinarazi.',
      'Grabitate-zentro altua: saihestu mugimendu zakarrak.'
    ]
  },
  {
    id: 'sillon-clinico',
    itemNumber: 4,
    name: 'Sillón Clínico Regulable',
    nameEu: 'Besaulki Kliniko Erregulagarria',
    originalPhoto: 'assets/q2_orl_actualizada/obj_32.jpg',
    badge: 'Uso Clínico & Exploración',
    location: 'Quirófano 2 / Entorno ORL',
    transferM4: 'No',
    mainFunction:
      'Sillón con apoyos y elementos de regulación para uso clínico en procedimientos y exploraciones de Otorrinolaringología.',
    mainFunctionEu:
      'Erabilera klinikorako euskarri eta erregulazio-elementuak dituen besaulkia.',
    orlApplications: [
      'Exploración nasofaringolaríngea y procedimientos realizados en sedestación o posición clínica regulada.',
      'Curas y manipulaciones específicas de ORL bajo indicación sanitaria.'
    ],
    orlApplicationsEu: [
      'Miaketa nasofaringolaringeoa eta eserita egiten diren prozedurak.',
      'ORLko sendaketa eta manipulazio espezifikoak.'
    ],
    celadorDuties: [
      'Colaborar en su traslado y colocación evitando golpes contra marcos de puertas o paredes.',
      'Comprobar que queda estable, frenado y correctamente ubicado antes de su uso.',
      'Desinfectar superficies tras el procedimiento según protocolo HUN.'
    ],
    celadorDutiesEu: [
      'Lekualdatzean eta kokatzean lagundu kolpeak saihestuz.',
      'Egonkor eta behar bezala kokatuta geratzen dela egiaztatu.',
      'Prozeduraren ondoren gainazalak desinfektatu.'
    ],
    precautionsAndWarnings: [
      'No modificar ajustes o posiciones clínicas sin indicación del personal sanitario.',
      'Comprobar siempre la estabilidad y bloqueo de frenos.'
    ],
    precautionsAndWarningsEu: [
      'Ez aldatu doikuntzarik edo posizio klinikorik osasun-langileen agindurik gabe.',
      'Beti egiaztatu egonkortasuna eta balaztak.'
    ]
  },
  {
    id: 'peso-metalico',
    itemNumber: 5,
    name: 'Peso Metálico / Pieza Metálica de Apoyo',
    nameEu: 'Pisu Metalikoa / Laguntza-Pieza Metalikoa',
    originalPhoto: 'assets/q2_orl_actualizada/obj_33.jpg',
    badge: 'Contrapeso Abrebocas · Torre STORZ',
    location: 'Zona superior de la Torre KARL STORZ (Q2)',
    transferM4: 'Sí',
    mainFunction:
      'Elemento metálico ubicado en la zona superior de la torre KARL STORZ. Su función confirmada es hacer de contrapeso cuando se despliega el brazo articulado que sujeta el abrebocas.',
    mainFunctionEu:
      'KARL STORZ dorrearen goialdean kokatutako elementu metalikoa. Bere funtzioa aho-irekigailua eusten duen beso artikulatua zabaltzean kontrapisua egitea da.',
    orlApplications: [
      'Amigdalotomías, faringoplastias y microcirugías transorales con brazo articulado que sujeta el abrebocas.',
      'Se traslada también al Quirófano Maternal (M4) junto con la Torre de ORL cuando corresponde.'
    ],
    orlApplicationsEu: [
      'Amigdalotomiak eta aho-irekigailua eusteko beso artikulatua behar duten prozedurak.',
      'Maternal Ebakigelara (M4) eramaten da ORL dorrearekin batera behar denean.'
    ],
    celadorDuties: [
      'Localizarlo siempre en la parte superior de la torre KARL STORZ; mantenerlo asociado a dicho conjunto tanto en Q2 como en devoluciones desde M4.',
      'Manipular con firmeza al retirarlo o colocarlo sobre la mesa metálica situada encima del pecho del paciente (bajo indicación del personal responsable).',
      'Al finalizar la cirugía, limpiar y devolverlo a su ubicación habitual en la parte superior de la torre de ORL.'
    ],
    celadorDutiesEu: [
      'Beti KARL STORZ dorrearen goialdean kokatua egon behar du; dorreari lotuta mantendu bai Q2n bai M4tik itzultzean.',
      'Pazientearen bularraren gainean kokatutako mahai metalikoaren gainean jartzean tinko heldu.',
      'Amaitzean garbitu eta ohiko tokira (ORL dorrearen goialdera) itzuli.'
    ],
    precautionsAndWarnings: [
      'SE COLOCA ENCIMA DE UNA MESA METÁLICA SITUADA ENCIMA DEL PECHO DEL PACIENTE. NO COLOCARLO DIRECTAMENTE SOBRE EL PACIENTE.',
      'No modificar el montaje ni utilizar la pieza metálica / bandeja superior de forma distinta a la indicada por el personal responsable.',
      'Elemento pesado: sujetar firmemente para evitar caídas accidentales.'
    ],
    precautionsAndWarningsEu: [
      'PAZIENTEAREN BULARRAREN GAINEAN KOKATUTAKO MAHAI METALIKOAREN GAINEAN JARTZEN DA. INOIZ EZ JARRI ZUZENEAN PAZIENTEAREN GAINEAN.',
      'Ez aldatu muntaia eta ez erabili adierazitakoaz bestelako moduan.'
    ]
  },
  {
    id: 'neurosign-v4',
    itemNumber: 6,
    name: 'Monitor de Nervio Intraoperatorio NEUROSIGN V4',
    nameEu: 'NEUROSIGN V4 Barne-Ebakuntzako Nerbio Monitorea',
    originalPhoto: 'assets/q2_orl_actualizada/obj_36.jpg',
    badge: 'Monitorización Neuromuscular',
    location: 'Quirófano 2 (ORL)',
    transferM4: 'Sí',
    mainFunction:
      'Sistema de monitorización utilizado en determinados procedimientos para registrar respuestas neuromusculares (nervio facial VII y nervio laríngeo recurrente).',
    mainFunctionEu:
      'Prozedura jakin batzuetan erantzun neuromuskularrak erregistratzeko monitorizazio-sistema.',
    orlApplications: [
      'Parotidectomías (preservación del nervio facial VII).',
      'Timpanoplastias y mastoidectomías complejas.',
      'Cirugía cervical / tiroides (monitorización de nervios motores).'
    ],
    orlApplicationsEu: [
      'Parotidektomiak (aurpegiko VII. nerbioa babestea).',
      'Timpanoplastia eta mastoidektomia konplexuak.',
      'Lepoko eta tiroideko kirurgiak.'
    ],
    celadorDuties: [
      'Conocer su ubicación y colaborar en el traslado cuidadoso al quirófano o a Maternal (M4) cuando esté programado.',
      'Situar el monitor en zona visible para el equipo quirúrgico sin invadir el corredor estéril.',
      'Evitar tensiones o atrapamientos con los cables de los electrodos durante los movimientos de la mesa.'
    ],
    celadorDutiesEu: [
      'Bere kokapena ezagutu eta ebakigelara edo M4ra garraiatzen lagundu.',
      'Ekipo kirurgikoarentzat ikusgai dagoen tokian jarri pasabide esterila oztopatu gabe.',
      'Elektrodoen kableetan tirakadak saihestu.'
    ],
    precautionsAndWarnings: [
      'No manipular electrodos, parámetros ni conexiones clínicas.',
      'Comunicar cualquier incidente o desconexión accidental de inmediato al equipo de Enfermería o Cirugía.'
    ],
    precautionsAndWarningsEu: [
      'Ez manipulatu elektrodoak, parametroak edo konexio klinikoak.',
      'Edozein deskonexio edo gertakari berehala jakinarazi.'
    ]
  },
  {
    id: 'silla-trabajo-pedales',
    itemNumber: 7,
    name: 'Silla de Trabajo Regulable con Ruedas y Pedales',
    nameEu: 'Gurpildun eta Pedaldun Lan Eserleku Erregulagarria',
    originalPhoto: 'assets/q2_orl_actualizada/obj_37.jpg',
    badge: 'Ergonomía Microcirugía · Enchufe Almacén',
    location: 'Quirófano 2 / Almacén',
    transferM4: 'No',
    mainFunction:
      'Silla regulable mediante ruedas y pedales utilizada por el personal quirúrgico durante determinados procedimientos (especialmente en microcirugía y cirugías de la Drª Uzcanga).',
    mainFunctionEu:
      'Prozedura jakinetan langileek erabiltzen duten gurpildun eta pedaldun lan-aulki erregulagarria.',
    orlApplications: [
      'Microcirugía otológica y laríngea prolongada.',
      'Requerida sistemáticamente junto con «Cuernos» en intervenciones de la Drª Uzcanga.'
    ],
    orlApplicationsEu: [
      'Belarriko eta laringeko mikrokirurgia luzea.',
      'Uzcanga doktorearen ebakuntzetan beharrezkoa.'
    ],
    celadorDuties: [
      'INSTRUCCIÓN DE CARGA OBLIGATORIA: Al sacarla del almacén para utilizarla, DESENCHUFARLA.',
      'Acercarla a la cabecera / puesto quirúrgico indicado y verificar la estabilidad.',
      'Dejar el cable recogido y situado de forma que no genere tropiezos ni atrapamientos con las ruedas.',
      'Al devolverla al almacén tras su uso y limpieza, VOLVER A ENCHUFARLA para mantener su carga.'
    ],
    celadorDutiesEu: [
      'KARGA JARRAIBIDEA: Biltegitik ateratzean erabiltzeko, DESENTXUFATU.',
      'Adierazitako lanpostura hurbildu eta kablea bildu behaztoparik ez sortzeko.',
      'Biltegira itzultzean, BERRIRO ENTXUFATU kargatzen uzteko.'
    ],
    precautionsAndWarnings: [
      '¡REGLA ESENCIAL!: Al sacarla del almacén -> DESENCHUFARLA. Al devolverla al almacén -> VOLVER A ENCHUFARLA.',
      'Dejar el cable recogido de modo que no genere tropiezos al personal ni sea pisado por carros.'
    ],
    precautionsAndWarningsEu: [
      'FUNTSEZKO ARAUA!: Biltegitik ateratzean -> DESENTXUFATU. Biltegira itzultzean -> BERRIRO ENTXUFATU.',
      'Kablea bilduta utzi behaztoparik ez sortzeko.'
    ]
  },
  {
    id: 'laser-deka-smartxide',
    itemNumber: 8,
    name: 'Láser DEKA SmartXide² (CO₂) y Maletín «LÁSER»',
    nameEu: 'DEKA SmartXide² (CO₂) Laserra eta «LÁSER» Maletatxoa',
    originalPhoto: 'assets/q2_orl_actualizada/obj_45.jpg',
    badge: 'Láser CO₂ vs Láser BLUE',
    location: 'Quirófano 2 / Almacén técnico',
    transferM4: 'Sí',
    mainFunction:
      'Plataforma láser CO₂ DEKA SmartXide² para determinados procedimientos quirúrgicos de ORL. Debe distinguirse del LÁSER BLUE, un equipo pequeño que llevan los propios otorrinolaringólogos desde la consulta.',
    mainFunctionEu:
      'ORLko prozedura kirurgikoetarako DEKA SmartXide² CO₂ laser plataforma. Kontsultatik otorrinoek ekartzen duten LÁSER BLUE txikitik bereizi behar da.',
    orlApplications: [
      'Microcirugía laríngea con láser CO₂ (cordectomías, lesiones glóticas, estenosis).',
      'Diferenciación clave en programación: si figura «LÁSER BLUE», NO acercar este láser CO₂ del quirófano.'
    ],
    orlApplicationsEu: [
      'CO₂ laserrarekin egindako laringeko mikrokirurgia.',
      'Programazioan «LÁSER BLUE» agertzen bada, EZ hurbildu CO₂ laser hau ebakigelara.'
    ],
    celadorDuties: [
      'Verificar previamente la programación quirúrgica: si figura «LÁSER BLUE», NO acercar el láser CO₂ DEKA del quirófano.',
      'Trasladar SIEMPRE el láser CO₂ DEKA junto con el maletín metálico identificado con la inscripción «LÁSER».',
      'Comprobar que torre y maletín permanecen juntos tanto en el traslado (Q2 o Maternal M4) como en el almacenamiento.',
      'Avanzar despacio protegiendo el brazo articulado y respetar la señalización de seguridad láser.'
    ],
    celadorDutiesEu: [
      'Programazioa egiaztatu: «LÁSER BLUE» bada, EZ hurbildu CO₂ laserra.',
      'DEKA CO₂ laserra BETI «LÁSER» inskripzioa duen maletatxo metalikoarekin eraman.',
      'Dorrea eta maleta elkarrekin mantentzen direla ziurtatu bai garraioan bai biltegian.'
    ],
    precautionsAndWarnings: [
      'Si en la programación figura «LÁSER BLUE», NO acercar el láser CO₂ del quirófano (el BLUE lo traen los propios otorrinos desde consulta).',
      'Respetar las normas de seguridad específicas del láser. No activar ni manipular el equipo.',
      'Nunca separar la torre del maletín metálico «LÁSER».'
    ],
    precautionsAndWarningsEu: [
      'Programazioan «LÁSER BLUE» agertzen bada, EZ hurbildu CO₂ laserra.',
      'Laserraren segurtasun-arauak errespetatu. Ez aktibatu eta ez manipulatu ekipoa.',
      'Inoiz ez bereizi dorrea eta «LÁSER» maleta metalikoa.'
    ]
  },
  {
    id: 'exoscopio-orbeye',
    itemNumber: 9,
    name: 'Exoscopio (Incorporación Pendiente)',
    nameEu: 'Exoskopioa (Txertatzeke)',
    originalPhoto: 'assets/q2_orl_actualizada/obj_46.jpg',
    badge: 'Incorporación Pendiente · 2 Pantallas',
    location: 'Pendiente de recepción en HUN',
    transferM4: '-',
    isPending: true,
    mainFunction:
      'Equipo de grandes dimensiones con dos pantallas (sistema ORBEYE) de próxima incorporación en el HUN para visualización quirúrgica de alta definición.',
    mainFunctionEu:
      'Tamaina handiko ekipoa bi pantailarekin (ORBEYE sistema), NUOn laster jasoko dena.',
    orlApplications: [
      'Visualización exoscópica en procedimientos microquirúrgicos de cabeza, cuello y oído.',
      'Incorporación pendiente de recepción física en el Hospital Universitario de Navarra.'
    ],
    orlApplicationsEu: [
      'Buru, lepo eta belarriko mikrokirurgiarako bistaratze exoskopikoa.',
      'Nafarroako Unibertsitate Ospitalean jasotzeko zain.'
    ],
    celadorDuties: [
      'Una vez recibido en el HUN, se acordará su ubicación definitiva y el protocolo logístico de traslado y almacenamiento.'
    ],
    celadorDutiesEu: [
      'NUOn jaso ondoren, bere kokapena eta protokolo logistikoa adostuko dira.'
    ],
    precautionsAndWarnings: [
      'Equipo de grandes dimensiones con dos pantallas: pendiente de definir protocolo logístico definitivo en el HUN tras su recepción.'
    ],
    precautionsAndWarningsEu: [
      'Bi pantailako tamaina handiko ekipoa: jaso ondoren zehaztuko da protokolo logistikoa.'
    ]
  }
];

export const ORL_CIRCUIT_AND_LAYOUT = {
  introEs:
    'La elevada concentración de aparataje electromédico en el Quirófano 2 de ORL (torres de endoscopia, microscopios quirúrgicos, pedales de corte, motores y sistemas de aspiración) exige una distribución espacial rigurosa. El mantenimiento del espacio de trabajo despejado resulta imprescindible para preservar la esterilidad del campo y permitir el movimiento fluido del equipo quirúrgico.',
  particularities: [
    {
      num: 1,
      title: 'Zona Cefálica (Área Quirúrgica Principal)',
      desc: 'El cirujano, ayudantes y la mesa de instrumental se posicionan en la cabecera del paciente. Requiere el máximo nivel de preservación de la esterilidad y un espacio despejado.'
    },
    {
      num: 2,
      title: 'Zona Podal (Área de Accesos y Equipos)',
      desc: 'La torre de ORL, los pedales de control, monitores secundarios y conexiones a tomas de gases se instalan desde la zona de los pies del paciente.'
    },
    {
      num: 3,
      title: 'Corredor Logístico y de Cableado',
      desc: 'El celador de dentro coordina con Enfermería la orientación de la mesa quirúrgica, verificando que los cables de luz fría, líneas de aspiración, pedales y gases discurran por un pasillo técnico delimitado y libre de paso.'
    },
    {
      num: 4,
      title: 'Requerimiento Específico por Cirujano (Criterio Drª Uzcanga)',
      desc: 'Instalar y ajustar el accesorio denominado «Cuernos» en la mesa quirúrgica de ORL siempre que la intervención sea realizada por la Drª Uzcanga, con independencia de la técnica concreta. Acercar la silla de trabajo regulable (acordarse de desenchufarla del almacén y de volver a enchufarla al guardarla de nuevo).',
      highlight: true
    }
  ],
  intraoperativeSequence: [
    {
      title: 'Inspección matutina',
      desc: 'Comprobar operatividad de tomas de aspiración, aire/oxígeno, frenado de la mesa y disponibilidad de accesorios básicos en Quirófano 2.'
    },
    {
      title: 'Ingreso y transferencia',
      desc: 'Trasladar la mesa de transporte hasta el transfer para recibir al paciente con el celador de fuera e introducirlo en Quirófano 2 garantizando el frenado de ruedas.'
    },
    {
      title: 'Manejo del Rayos X (Arco en C)',
      desc: 'Introducir el equipo cuando se requiera bajo indicación directa del cirujano/técnico. Al finalizar, retirar y limpiar antes de devolver a su estacionamiento.'
    },
    {
      title: 'Disposición de aparataje',
      desc: 'Posicionar la torre de endoscopia en la zona podal, emplazar el microscopio en el lateral indicado y ajustar las sillas ergonómicas.'
    },
    {
      title: 'Traslados de alta complejidad (UCI B)',
      desc: 'Acudir a la UCI B para el traslado de pacientes críticos en su propia cama o camilla especial, asistiendo en la transferencia e instalación de soportes de perfusión.'
    },
    {
      title: 'Secuencia de evacuación',
      desc: 'Igualar la altura de superficies para la transferencia a la cama postoperatoria. Retirar carro de transporte y palo de gotero al antequirófano. Preguntar a Anestesia si se requiere mascarilla y bala de O₂.'
    }
  ],
  mandatorySafetyNote:
    'Es obligatoria la consulta previa con la Enfermería de Anestesia antes de realizar cualquier cambio posicional, modificación en los segmentos de la mesa o retirada de accesorios auxiliares (incluyendo el palo del gotero), garantizando la estabilidad de la vía aérea y de las vías venosas.'
};

export const ORL_POSITIONS_DATA = {
  introEs:
    'El posicionamiento anatómico busca maximizar la exposición del campo en cavidades anatómicas reducidas (oído, fosa nasal, laringe), previniendo lesiones neurológicas o úlceras por presión.',
  positions: [
    {
      id: 'amigdalotomia',
      title: '1. Amigdalotomía',
      points: [
        'Decúbito supino con ligera inclinación en Trendelenburg.',
        'Cabeza en hiperextensión controlada, alineada y ajustada en el límite superior de la mesa.',
        'Braceros laterales a la altura del tórax y sujeciones de muñeca acolchadas.'
      ]
    },
    {
      id: 'microcirugia-laringea',
      title: '2. Microcirugía Laríngea',
      points: [
        'Decúbito supino horizontal.',
        'Extensión cervical pronunciada. Colocar un pile (rodete firme de sábanas verdes) en la zona subescapular/hombros para elevar el tórax y permitir deflexión de la cabeza.',
        'Braceros regulados con fijadores radiales y sujeciones acolchadas.'
      ]
    },
    {
      id: 'timpanoplastia',
      title: '3. Timpanoplastia',
      points: [
        'Decúbito supino en Antitrendelenburg (Trendelenburg invertido) para favorecer retorno venoso y reducir sangrado capilar.',
        'Lateralización de la cabeza hacia el lado contralateral a la lesión auditiva.',
        'Braceros con mordazas radiales y cinchas de seguridad.'
      ]
    },
    {
      id: 'roser-proetz',
      title: '4. Posición Roser / Proetz',
      points: [
        'Decúbito supino horizontal.',
        'Desplazamiento longitudinal del paciente hacia la cabecera hasta que la cabeza sobrepase el plano superior del tablero, en hiperextensión suspendida.'
      ],
      criticalAlert:
        'Maniobra crítica de seguridad: Durante todo el deslizamiento, el celador debe sostener y acunar manualmente el occipucio/cabeza del paciente, manteniendo el control cervical hasta la colocación del cabezal específico o toma de control por Anestesiología/Cirugía.'
    }
  ] as OrlPositionGuide[],
  generalAccessoriesNote:
    'Accesorios habituales: Fijadores radiales, sujeciones de muñeca, arco de anestesia (e incorporar «Cuernos» si opera la Drª Uzcanga).',
  specialAccessories: [
    {
      id: 'touss',
      title: 'TOUSS (Cirugía transoral ultrasónica)',
      desc: 'Colocar el prolongador en el lado izquierdo de la mesa para instalar el brazo del TOUSS.'
    },
    {
      id: 'baha-ponto',
      title: 'BAHA / PONTO (Implante osteointegrado)',
      desc: 'Colocar el arco siempre en el lado contrario al utilizado para el prolongador del TOUSS.'
    },
    {
      id: 'sniffing',
      title: 'Posición Sniffing (Olfateo)',
      desc: 'Indicada para microcirugía de laringe (elevación del occipucio para optimizar la alineación laríngea).'
    }
  ],
  images: [
    {
      src: 'assets/q2_orl_actualizada/obj_51.jpg',
      title: 'Infografía: Amigdalotomía y Microcirugía Laríngea',
      caption: 'Comparativa visual de decúbito supino, soporte bajo hombros (pile) y objetivo anatómico.'
    },
    {
      src: 'assets/q2_orl_actualizada/obj_54.jpg',
      title: 'Infografía: Timpanoplastia y Posición Roser / Proetz',
      caption: 'Lateralización cefálica en oído medio e inclinación cefálica posterior para cavidades nasales y rinofaringe.'
    },
    {
      src: 'assets/q2_orl_actualizada/obj_55.jpg',
      title: 'Infografía: TOUSS, BAHA / PONTO y Posición Sniffing',
      caption: 'Alineación conducto auditivo–esternón en Sniffing, acceso transoral en TOUSS y apoyo sin compresión retroauricular en BAHA / PONTO.'
    },
    {
      src: 'assets/q2_orl_actualizada/obj_58.jpg',
      title: 'Fotografía real en quirófano: Posición de Sniffing (Olfateo)',
      caption: 'Elevación controlada del occipucio y sujeción coordinada en quirófano de ORL.'
    }
  ]
};

export const ORL_CUERNOS_TRANSFER = {
  titleEs: '5. Transfer: Preparación de la Mesa Quirúrgica y Accesorios («Cuernos»)',
  titleEu: '5. Transferra: Mahai Kirurgikoaren Prestaketa eta Osagarriak («Cuernos»)',
  introEs:
    'En los procedimientos en los que esté indicado el accesorio «Cuernos» (obligatorio siempre que opere la Drª Uzcanga), la mesa quirúrgica se prepara sustituyendo la pieza del cabezal por el prolongador dorsal y montando sobre este el accesorio.',
  steps: [
    'Comprobar que la mesa está libre de paciente y que se encuentra estable antes de comenzar el montaje.',
    'Retirar la pieza o sección del cabezal de la mesa quirúrgica, siguiendo el sistema de desbloqueo previsto para ese modelo.',
    'Colocar el prolongador dorsal en el extremo correspondiente de la mesa y asegurarlo en sus anclajes.',
    'Montar los «Cuernos» sobre el prolongador dorsal, utilizando los puntos de fijación diseñados para ello.',
    'Comprobar visualmente que el prolongador y los «Cuernos» han quedado correctamente encajados y bloqueados, sin holguras ni piezas sueltas.',
    'Dejar la mesa preparada y comunicar a Enfermería que el montaje está realizado para que compruebe y valide la configuración antes de colocar al paciente.'
  ],
  photos: [
    {
      src: 'assets/q2_orl_actualizada/obj_61.jpg',
      title: 'Accesorio «Cuernos» y prolongador dorsal',
      caption: 'Conjunto del prolongador dorsal con anclajes y cabezal de «Cuernos» antes de su acoplamiento a la mesa.'
    },
    {
      src: 'assets/q2_orl_actualizada/obj_62.jpg',
      title: 'Vista frontal de la mesa con el accesorio «Cuernos» montado',
      caption: 'Cabezal de «Cuernos» ya encajado y bloqueado en el extremo cefálico de la mesa quirúrgica.'
    },
    {
      src: 'assets/q2_orl_actualizada/obj_63.jpg',
      title: 'Vista lateral del prolongador dorsal y puntos de unión a la mesa',
      caption: 'Detalle de los raíl-anclajes laterales, bloqueos azules y acoplamiento firme sin holguras.'
    }
  ]
};

export const ORL_MATERNAL_TRANSFER = {
  titleEs: '6. Traslado de Material de ORL al Quirófano Maternal (M4)',
  titleEu: '6. ORL Materiala Maternal Ebakigelara (M4) Eramatea',
  introEs:
    'Revisar la programación quirúrgica antes de preparar el material para determinar la movilización requerida.',
  itemsToTransfer: [
    'Microscopio quirúrgico ZEISS (siempre entre 2 personas y con brazo superior plegado conectado a corriente).',
    'Láser CO₂ DEKA y su maleta metálica identificada con la inscripción «LÁSER».',
    'Carro de Otorrinolaringología con el material de Enfermería.',
    'Torre de ORL (KARL STORZ).',
    'Peso (situado en la parte superior de la Torre de ORL).'
  ],
  excludedNote:
    'Nota importante: La consola MEDTRONIC IPC NO se traslada al Quirófano Maternal por disponer ya de otra en el M4.',
  verificationSteps: [
    'Confirmar con Enfermería de ORL el material exacto requerido.',
    'Verificar que los equipos se trasladan con todos sus accesorios (maletín «LÁSER», peso superior en torre, etc.).',
    'Coordinar la entrega y ubicación en la zona maternal.',
    'Al finalizar la intervención, verificar el retorno completo del material al Quirófano 2.'
  ]
};

export const ORL_SUMMARY_TABLE: OrlSummaryTableRow[] = [
  {
    id: 'sum-storz',
    equipmentName: 'Torre de vídeo-endoscopia KARL STORZ',
    functionDesc:
      'Carro con monitor y módulos de vídeo-endoscopia para visualización de imágenes durante exploraciones y procedimientos de ORL. Incluye una pieza metálica / bandeja superior de apoyo (peso/contrapeso del brazo del abrebocas).',
    transferAndFoldingProtocol:
      'Trasladar con cuidado, comprobando que los elementos estén colocados de forma estable. Evitar tirones, atrapamientos o tensiones en cables y conexiones. Devolver el conjunto a su ubicación habitual manteniendo el peso asociado a la torre de ORL.',
    handlingPrecautions:
      'No desconectar, reconectar ni modificar configuraciones técnicas por iniciativa propia. No modificar el montaje ni utilizar la pieza metálica/bandeja superior de forma distinta a la indicada. No colocar la pieza metálica directamente sobre el paciente.',
    associatedAccessories: 'Accesorios indicados por Enfermería y pieza metálica / bandeja superior de apoyo.',
    transferM4: 'Sí'
  },
  {
    id: 'sum-zeiss',
    equipmentName: 'Microscopio quirúrgico ZEISS',
    functionDesc:
      'Equipo óptico montado sobre soporte móvil, utilizado para proporcionar magnificación e iluminación del campo quirúrgico en procedimientos que requieren visión ampliada.',
    transferAndFoldingProtocol:
      'Traslado siempre entre dos personas. Coordinar antes de iniciar. Antes de atravesar puertas, el brazo superior debe quedar completamente plegado en posición de transporte (panel de control conectado a la corriente). Comprobar brazo recogido, recoger cables, avanzar despacio vigilando puertas y esquinas.',
    handlingPrecautions:
      'No forzar manualmente articulaciones ni accionar controles cuya función no se conozca. Si el panel no responde o el brazo no se pliega, detener la maniobra y avisar a Enfermería / Electromedicina.',
    associatedAccessories: 'No presente en la fuente (funda protectora y cables propios).',
    transferM4: 'Sí'
  },
  {
    id: 'sum-deka',
    equipmentName: 'Láser DEKA SmartXide²',
    functionDesc:
      'Plataforma láser CO₂ DEKA SmartXide² para determinados procedimientos quirúrgicos de ORL. Se distingue del láser BLUE (equipo pequeño traído por los otorrinos desde consulta).',
    transferAndFoldingProtocol:
      'Debe trasladarse junto con el maletín metálico identificado con la inscripción «LÁSER». Comprobar que torre y maletín permanecen juntos tanto en el traslado como en el almacenamiento.',
    handlingPrecautions:
      'Respetar las normas de seguridad específicas del láser. No activar ni manipular el equipo. Si en la programación figura «LÁSER BLUE», no acercar el láser CO₂ del quirófano.',
    associatedAccessories: 'Maletín metálico identificado con la inscripción «LÁSER».',
    transferM4: 'Sí'
  },
  {
    id: 'sum-medtronic',
    equipmentName: 'Consola MEDTRONIC IPC',
    functionDesc:
      'Consola de control para instrumental motorizado compatible. Puede emplearse con distintos accesorios según la configuración clínica.',
    transferAndFoldingProtocol:
      'Antes de solicitar un traslado, consultar la programación quirúrgica y confirmar con Enfermería si existe alguna excepción que requiera otra consola. Nota: no se traslada al Quirófano Maternal por disponer de otra en el M4.',
    handlingPrecautions:
      'No manipular parámetros, conexiones clínicas ni configuraciones. Comunicar cualquier anomalía al personal responsable.',
    associatedAccessories: 'Distintos accesorios según la configuración clínica.',
    transferM4: 'No'
  },
  {
    id: 'sum-neurosign',
    equipmentName: 'Monitor de nervio intraoperatorio NEUROSIGN V4',
    functionDesc:
      'Sistema de monitorización utilizado en determinados procedimientos para registrar respuestas neuromusculares.',
    transferAndFoldingProtocol: 'Conocer su ubicación y colaborar en el traslado.',
    handlingPrecautions: 'No manipular electrodos, parámetros ni conexiones clínicas.',
    associatedAccessories: 'Electrodos.',
    transferM4: 'Sí'
  },
  {
    id: 'sum-exoscopio',
    equipmentName: 'Exoscopio (incorporación pendiente)',
    functionDesc: 'Equipo de grandes dimensiones con dos pantallas (incorporación pendiente en HUN).',
    transferAndFoldingProtocol: 'Una vez recibido en el HUN, se acordará su ubicación y protocolo logístico.',
    handlingPrecautions: 'Pendiente de protocolo definitivo tras recepción en el HUN.',
    associatedAccessories: 'Dos pantallas.',
    transferM4: '-'
  },
  {
    id: 'sum-sillon',
    equipmentName: 'Sillón clínico regulable',
    functionDesc: 'Sillón con apoyos y elementos de regulación para uso clínico.',
    transferAndFoldingProtocol: 'Colaborar en su traslado y colocación evitando golpes.',
    handlingPrecautions:
      'No modificar ajustes o posiciones clínicas sin indicación del personal sanitario. Comprobar que queda estable y correctamente ubicado.',
    associatedAccessories: 'Apoyos y elementos de regulación.',
    transferM4: 'No'
  },
  {
    id: 'sum-silla-pedales',
    equipmentName: 'Silla de trabajo regulable con ruedas y pedales',
    functionDesc: 'Silla regulable utilizada por el personal durante determinados procedimientos.',
    transferAndFoldingProtocol:
      'Al sacarla del almacén para utilizarla, desenchufarla. Al devolverla al almacén, volver a enchufarla. Dejar el cable recogido y situado de forma que no genere tropiezos.',
    handlingPrecautions: 'No presente en la fuente (cumplir regla de desenchufar/enchufar y recoger cable).',
    associatedAccessories: 'Ruedas, pedales y cable de enchufe.',
    transferM4: 'No'
  }
];

export const ORL_GENERAL_RULES = {
  titleEs: 'Normas Generales de Manejo y Seguridad del Aparataje en ORL (Quirófano 2)',
  titleEu: 'ORLeko Tresneriaren Maneiu eta Segurtasun Arau Orokorrak (2. Ebakigela)',
  rulesEs: [
    {
      title: 'Desplazamiento y frenos',
      desc: 'Mover todos los equipos a paso moderado, sujetando las estructuras principales y evitando tirones en cables. Al alcanzar la ubicación definitiva en quirófano, activar SIEMPRE los frenos de bloqueo en las ruedas antes de soltar el equipo.'
    },
    {
      title: 'Gestión de cables y corredor técnico',
      desc: 'Los cables de luz fría, líneas de aspiración, pedales y gases deben discurrir por un pasillo técnico delimitado y libre de paso. Las fibras ópticas de Karl Storz NO deben doblarse en ángulo agudo ni ser pisadas por ruedas.'
    },
    {
      title: 'Silla de trabajo y protocolo de recarga',
      desc: 'En la silla de trabajo regulable con ruedas y pedales: DESENCHUFAR al sacarla del almacén para utilizarla, recoger el cable para evitar tropiezos, y VOLVER A ENCHUFAR obligatoriamente al devolverla al almacén.'
    },
    {
      title: 'Láser DEKA vs Láser BLUE y maletín «LÁSER»',
      desc: 'El Láser CO₂ DEKA SmartXide² viaja y se guarda SIEMPRE junto con su maletín metálico rotulado «LÁSER». Si en la programación figura «LÁSER BLUE», no acercar el láser CO₂ del quirófano.'
    },
    {
      title: 'Peso metálico / pieza de apoyo en mesa',
      desc: 'El peso metálico situado en la zona superior de la torre KARL STORZ sirve de contrapeso del brazo articulado del abrebocas. Se coloca encima de una mesa metálica situada sobre el pecho del paciente: NUNCA directamente sobre el paciente.'
    },
    {
      title: 'NOTA DE SEGURIDAD OBLIGATORIA EN MESA QUIRÚRGICA',
      desc: 'Es obligatoria la consulta previa con la Enfermería de Anestesia antes de realizar cualquier cambio posicional, modificación en los segmentos de la mesa (cabeceros, «Cuernos», prolongador dorsal) o retirada de accesorios auxiliares (incluido el palo del gotero).'
    }
  ],
  rulesEu: [
    {
      title: 'Mugimendua eta balaztak',
      desc: 'Ekipo guztiak erritmo pausatuan mugitu egitura nagusietatik helduta. Ebakigelan behin betiko lekuan uztean, gurpilen balaztak BETI aktibatu heldulekua askatu aurretik.'
    },
    {
      title: 'Kableen eta pasabide teknikoaren kudeaketa',
      desc: 'Argi hotzeko kableak, aspirazioa, pedalak eta gasak pasabide tekniko libre batetik bideratu. Zuntz optikoak ez tolestu eta ez zapaldu.'
    },
    {
      title: 'Lan-aulkia eta birkarga protokoloa',
      desc: 'Gurpildun eta pedaldun aulkia biltegitik ateratzean DESENTXUFATU, kablea bildu, eta biltegira itzultzean BERRIRO ENTXUFATU.'
    },
    {
      title: 'DEKA Laserra vs BLUE Laserra eta «LÁSER» maleta',
      desc: 'DEKA SmartXide² laserra BETI «LÁSER» maleta metalikoarekin elkarrekin eraman eta gorde. Programazioan «LÁSER BLUE» bada, ez hurbildu CO₂ laserra.'
    },
    {
      title: 'Pisu metalikoa mahai gainean',
      desc: 'KARL STORZ dorrearen goiko pisu metalikoa pazientearen bularraren gaineko mahai metalikoan jartzen da, INOIZ EZ zuzenean pazientearen gainean.'
    },
    {
      title: 'MAHAI KIRURGIKOAREN DERRIGORREZKO SEGURTASUN OHARRA',
      desc: 'Beti Anestesiako Erizaintzari galdetu aldez aurretik posizio-aldaketarik, mahai-atalen aldaketarik edo osagarririk kendu aurretik (serum-euskarria barne).'
    }
  ]
};
